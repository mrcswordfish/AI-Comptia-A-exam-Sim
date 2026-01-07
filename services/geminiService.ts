import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CoreType, Question, CORE_1_DOMAINS, CORE_2_DOMAINS, QUESTIONS_PER_EXAM } from "../types";

export const generateExamQuestions = async (core: CoreType): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const isCore1 = core === CoreType.CORE_1;
  const domains = isCore1 ? CORE_1_DOMAINS : CORE_2_DOMAINS;
  const examName = isCore1 ? "CompTIA A+ Core 1 (220-1201)" : "CompTIA A+ Core 2 (220-1202)";
  
  // Generating 90 questions in one go is often too slow or exceeds token limits.
  // We will generate a smaller batch of high-quality questions for the simulation 
  // if the user uses AI, or you can implement Promise.all with multiple requests for full 90.
  // For this demo, we'll request 45 questions (half exam) to ensure speed and reliability, 
  // or you can bump this to 90 if using a high-throughput model.
  const questionCount = 45; 

  const prompt = `
    You are a senior CompTIA A+ exam creator. Create a practice exam for ${examName}.
    
    The exam MUST cover these domains:
    ${domains.join('\n')}

    Generate ${questionCount} unique, challenging multiple-choice questions.
    - Questions must be scenario-based.
    - Include 5-10 PBQ style scenario descriptions (formatted as multiple choice for this UI).
    - Ensure varied difficulty.
    
    Return the response as a JSON array inside a 'questions' property.
  `;

  const questionSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.INTEGER },
            domain: { type: Type.STRING },
            objectiveId: { type: Type.STRING, description: "The specific objective ID (e.g. 1.2)" },
            text: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswerIndex: { type: Type.INTEGER, description: "Zero-based index of the correct option (0-3)" },
            explanation: { type: Type.STRING, description: "Detailed explanation." }
          },
          required: ["id", "domain", "objectiveId", "text", "options", "correctAnswerIndex", "explanation"]
        }
      }
    },
    required: ["questions"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Using a fast, high-context model
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.7,
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("Empty response from Gemini");
    }

    const data = JSON.parse(jsonText);
    
    // Post-processing
    const processedQuestions: Question[] = data.questions.map((q: any, index: number) => ({
      id: index + 1,
      domain: q.domain || "General",
      objectiveId: q.objectiveId || "1.0",
      type: q.text.includes("SIMULATION") ? 'pbq' : 'multiple-choice',
      text: q.text,
      options: q.options.slice(0, 4),
      correctAnswerIndex: q.correctAnswerIndex,
      explanation: q.explanation
    }));

    return processedQuestions;

  } catch (error) {
    console.error("Failed to generate questions:", error);
    throw error;
  }
};
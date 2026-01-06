import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CoreType, Question, CORE_1_DOMAINS, CORE_2_DOMAINS, QUESTIONS_PER_EXAM } from "../types";

// Helper to simulate delay for better UX if API responds too fast (rare)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateExamQuestions = async (core: CoreType): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please select a paid API key to continue.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const isCore1 = core === CoreType.CORE_1;
  const domains = isCore1 ? CORE_1_DOMAINS : CORE_2_DOMAINS;
  const examName = isCore1 ? "CompTIA A+ Core 1 (220-1201)" : "CompTIA A+ Core 2 (220-1202)";
  
  // Updated to 90 questions as requested. 
  // Note: This requires a model with sufficient output token capacity (Gemini 1.5/2.0/3.0 Flash usually handle this well).
  const questionCount = QUESTIONS_PER_EXAM; 

  const prompt = `
    You are a senior CompTIA A+ exam creator. Create a full practice exam for ${examName}.
    
    The exam MUST cover the following domains with their respective weights:
    ${domains.join('\n')}

    Generate ${questionCount} challenging multiple-choice questions. 
    The questions should be scenario-based where possible, mimicking the real exam style (e.g., "Given a scenario...", "A technician is...").
    Ensure the questions are distributed according to the domain percentages.
    
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
            text: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswerIndex: { type: Type.INTEGER, description: "Zero-based index of the correct option (0-3)" },
            explanation: { type: Type.STRING, description: "A brief explanation of why the answer is correct and others are wrong." }
          },
          required: ["id", "domain", "text", "options", "correctAnswerIndex", "explanation"]
        }
      }
    },
    required: ["questions"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.7, // Slight randomness for variety
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("Empty response from Gemini");
    }

    const data = JSON.parse(jsonText);
    
    // Post-processing to ensure IDs are sequential and valid
    const processedQuestions: Question[] = data.questions.map((q: any, index: number) => ({
      id: index + 1,
      domain: q.domain || "General",
      text: q.text,
      options: q.options.slice(0, 4), // Ensure max 4 options
      correctAnswerIndex: q.correctAnswerIndex,
      explanation: q.explanation
    }));

    return processedQuestions;

  } catch (error) {
    console.error("Failed to generate questions:", error);
    throw error;
  }
};
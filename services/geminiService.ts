import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CoreType, Question, CORE_1_DOMAINS, CORE_2_DOMAINS } from "../types";

export const generateExamQuestions = async (core: CoreType): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const isCore1 = core === CoreType.CORE_1;
  const domains = isCore1 ? CORE_1_DOMAINS : CORE_2_DOMAINS;
  const examName = isCore1 ? "CompTIA A+ Core 1 (220-1201)" : "CompTIA A+ Core 2 (220-1202)";
  
  // To ensure high quality and prevent timeouts, we generate a solid set of 50 questions per session.
  // This simulates the exam experience while remaining within typical API latency windows.
  const questionCount = 50;

  const prompt = `
    You are an expert CompTIA A+ certification exam creator. 
    Create a unique, randomized practice exam for: ${examName}.

    The exam MUST strictly cover the following domains based on official objectives:
    ${domains.join('\n')}

    INSTRUCTIONS:
    1. Generate exactly ${questionCount} questions.
    2. Ensure NO QUESTIONS ARE REPEATED in this set.
    3. Questions must be scenario-based (e.g., "A technician is...", "A user reports...").
    4. Include exactly 5 Performance Based Question (PBQ) style scenarios (text-based simulation descriptions).
    5. Difficulty should vary between easy (definitions), medium (troubleshooting), and hard (complex scenarios).
    6. Provide clear, educational explanations for the correct answer.

    OUTPUT FORMAT:
    Return valid JSON. The root object must have a "questions" array.
  `;

  const questionSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            domain: { type: Type.STRING, description: "The domain name (e.g. 1.0 Mobile Devices)" },
            objectiveId: { type: Type.STRING, description: "The specific objective ID (e.g. 1.2)" },
            text: { type: Type.STRING, description: "The question text/scenario" },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 4 options"
            },
            correctAnswerIndex: { type: Type.INTEGER, description: "0-3 index of the correct option" },
            explanation: { type: Type.STRING, description: "Detailed explanation of why the answer is correct" }
          },
          required: ["domain", "objectiveId", "text", "options", "correctAnswerIndex", "explanation"]
        }
      }
    },
    required: ["questions"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', 
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.8, // High temperature for variety
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("Empty response from Gemini");
    }

    const data = JSON.parse(jsonText);
    
    // Post-processing to match internal App types
    const processedQuestions: Question[] = data.questions.map((q: any, index: number) => ({
      id: index + 1, // temporary ID
      domain: q.domain || "General",
      objectiveId: q.objectiveId || "1.0",
      type: (q.text.includes("SIMULATION") || q.text.includes("PBQ")) ? 'pbq' : 'multiple-choice',
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
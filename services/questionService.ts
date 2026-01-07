import { CoreType, Question } from "../types";
import { generateExamQuestions as generateWithAI } from "./geminiService";

export const generateExamQuestions = async (core: CoreType): Promise<Question[]> => {
  // Check for API Key
  if (!process.env.API_KEY) {
    throw new Error("Missing API_KEY. Please configure your environment to use the AI Exam Simulator.");
  }

  console.log(`Generating fresh ${core} exam session using Gemini AI...`);
  
  // Use Gemini AI to generate the full exam session.
  // The AI service handles uniqueness, domain distribution, and question variety.
  try {
    const questions = await generateWithAI(core);
    
    // Assign sequential IDs for the UI to handle navigation properly
    return questions.map((q, index) => ({
      ...q,
      id: index + 1
    }));
  } catch (error) {
    console.error("AI Generation failed:", error);
    throw new Error("Failed to generate exam questions. Please try again.");
  }
};
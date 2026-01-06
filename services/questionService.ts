import { CoreType, Question, CORE_1_DOMAINS, CORE_2_DOMAINS, QUESTIONS_PER_EXAM } from "../types";
import { CORE_1_BANK, CORE_2_BANK } from "../data/questionBank";

// Distribution Config based on CompTIA Percentages
const CORE_1_DISTRIBUTION = [
  { domain: "1.0 Mobile Devices", percent: 0.13 },
  { domain: "2.0 Networking", percent: 0.23 },
  { domain: "3.0 Hardware", percent: 0.25 },
  { domain: "4.0 Virtualization and Cloud Computing", percent: 0.11 },
  { domain: "5.0 Hardware and Network Troubleshooting", percent: 0.28 }
];

const CORE_2_DISTRIBUTION = [
  { domain: "1.0 Operating Systems", percent: 0.28 },
  { domain: "2.0 Security", percent: 0.28 },
  { domain: "3.0 Software Troubleshooting", percent: 0.23 },
  { domain: "4.0 Operational Procedures", percent: 0.21 }
];

// Helper to shuffle array
const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Helper to select N random items from a list, repeating if necessary to fill the quota
const selectRandomQuestions = (sourceQuestions: any[], count: number): any[] => {
  if (sourceQuestions.length === 0) return [];
  
  let selected: any[] = [];
  // If we need more than we have, shuffle and repeat
  while (selected.length < count) {
    const shuffled = shuffle(sourceQuestions);
    selected = [...selected, ...shuffled];
  }
  // Trim to exact count
  return selected.slice(0, count);
};

export const generateExamQuestions = async (core: CoreType): Promise<Question[]> => {
  // Simulate a short delay to feel like "generating"
  await new Promise(resolve => setTimeout(resolve, 800));

  const isCore1 = core === CoreType.CORE_1;
  const distribution = isCore1 ? CORE_1_DISTRIBUTION : CORE_2_DISTRIBUTION;
  const bank = isCore1 ? CORE_1_BANK : CORE_2_BANK;

  let allQuestions: Question[] = [];
  let questionIdCounter = 1;

  // Calculate quota for each domain and select questions
  let totalAllocated = 0;
  
  for (let i = 0; i < distribution.length; i++) {
    const dist = distribution[i];
    // Calculate raw count
    let count = Math.round(QUESTIONS_PER_EXAM * dist.percent);
    
    // Adjust last domain to ensure we hit exactly 90 (fix rounding errors)
    if (i === distribution.length - 1) {
      count = QUESTIONS_PER_EXAM - totalAllocated;
    }
    totalAllocated += count;

    // Get questions for this domain from bank
    const domainQuestions = bank[dist.domain] || [];
    
    if (domainQuestions.length === 0) {
      console.warn(`No questions found for domain: ${dist.domain}`);
      continue;
    }

    const selectedTemplates = selectRandomQuestions(domainQuestions, count);

    // Map to Question objects with unique IDs
    const mappedQuestions: Question[] = selectedTemplates.map(t => ({
      ...t,
      // We assign temporary IDs here, but will re-index at the end to be clean 1-90
      id: 0 
    }));

    allQuestions = [...allQuestions, ...mappedQuestions];
  }

  // Final shuffle of the entire exam so domains are mixed (like real exam)
  allQuestions = shuffle(allQuestions);

  // Re-assign sequential IDs 1 to 90
  return allQuestions.map((q, index) => ({
    ...q,
    id: index + 1
  }));
};

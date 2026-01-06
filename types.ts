export enum CoreType {
  CORE_1 = '220-1201',
  CORE_2 = '220-1202',
}

export type QuestionType = 'multiple-choice' | 'pbq';

export interface Question {
  id: number;
  type: QuestionType;
  domain: string; // e.g., "1.0 Mobile Devices"
  objectiveId: string; // e.g., "1.2"
  text: string;
  options: string[];
  correctAnswerIndex: number; // 0-3
  explanation: string;
}

export interface ExamSession {
  core: CoreType;
  questions: Question[];
  userAnswers: Record<number, number>; // questionId -> optionIndex
  startTime: number;
  endTime?: number;
  isComplete: boolean;
}

export interface ExamResult {
  id: string;
  date: number;
  core: CoreType;
  score: number;
  totalQuestions: number;
  objectiveBreakdown: Record<string, { correct: number; total: number }>; // objectiveId -> stats
}

export enum AppState {
  WELCOME = 'WELCOME',
  LOADING = 'LOADING',
  EXAM = 'EXAM',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR'
}

export const EXAM_DURATION_MINUTES = 90;
export const QUESTIONS_PER_EXAM = 90;

// Defined based on the provided PDF data
export const CORE_1_DOMAINS = [
  "1.0 Mobile Devices",
  "2.0 Networking",
  "3.0 Hardware",
  "4.0 Virtualization and Cloud Computing",
  "5.0 Hardware and Network Troubleshooting"
];

export const CORE_2_DOMAINS = [
  "1.0 Operating Systems",
  "2.0 Security",
  "3.0 Software Troubleshooting",
  "4.0 Operational Procedures"
];
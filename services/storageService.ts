import { ExamResult, CoreType } from "../types";

const STORAGE_KEY = 'comptia_exam_history';

export const saveExamResult = (result: ExamResult): void => {
  const history = getExamHistory();
  history.push(result);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

export const getExamHistory = (): ExamResult[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse exam history", e);
    return [];
  }
};

export const getWeakestObjectives = (core: CoreType): { objectiveId: string, percentage: number }[] => {
  const history = getExamHistory().filter(r => r.core === core);
  if (history.length === 0) return [];

  const agg: Record<string, { correct: number, total: number }> = {};

  history.forEach(run => {
    Object.entries(run.objectiveBreakdown).forEach(([objId, stats]) => {
      if (!agg[objId]) agg[objId] = { correct: 0, total: 0 };
      agg[objId].correct += stats.correct;
      agg[objId].total += stats.total;
    });
  });

  const calculated = Object.entries(agg).map(([objId, stats]) => ({
    objectiveId: objId,
    percentage: stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100)
  }));

  // Sort by lowest percentage first
  return calculated.sort((a, b) => a.percentage - b.percentage);
};
import React, { useMemo } from 'react';
import { Question, CoreType } from '../types';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { getWeakestObjectives } from '../services/storageService';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  onRestart: () => void;
  core: CoreType;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart, core }) => {
  // Score Calculation
  const { score, objectiveStats } = useMemo(() => {
    let s = 0;
    const stats: Record<string, { correct: number; total: number; title: string }> = {};

    questions.forEach(q => {
      const isCorrect = userAnswers[q.id] === q.correctAnswerIndex;
      if (isCorrect) s++;

      // Objective Stats
      if (!stats[q.objectiveId]) {
        stats[q.objectiveId] = { correct: 0, total: 0, title: q.domain };
      }
      stats[q.objectiveId].total++;
      if (isCorrect) stats[q.objectiveId].correct++;
    });
    return { score: s, objectiveStats: stats };
  }, [questions, userAnswers]);

  const percentage = Math.round((score / questions.length) * 100);
  const isPassing = percentage >= 80;
  
  const pieData = [
    { name: 'Correct', value: score },
    { name: 'Incorrect', value: questions.length - score },
  ];
  const COLORS = ['#10B981', '#EF4444'];

  const weakestObjectives = useMemo(() => getWeakestObjectives(core).slice(0, 5), [core]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Score Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-slate-800 p-8 text-white flex flex-col md:flex-row justify-between items-center">
            <div>
               <h1 className="text-3xl font-bold mb-2">Exam Results</h1>
               <p className="text-slate-300">Analysis for {core === CoreType.CORE_1 ? 'Core 1' : 'Core 2'}</p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-6">
                <div className="text-right">
                    <div className="text-sm uppercase tracking-wide text-slate-400">Score</div>
                    <div className="text-4xl font-bold">{score} / {questions.length}</div>
                </div>
                <div className={`text-4xl font-bold px-6 py-3 rounded-lg ${isPassing ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {percentage}%
                </div>
            </div>
          </div>

          <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row gap-8">
             <div className="md:w-1/3 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <div className="text-center mt-2 text-sm text-gray-500">Performance Visualization</div>
             </div>
             
             <div className="md:w-2/3 flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{isPassing ? 'Congratulations!' : 'Keep Studying!'}</h3>
                    <p className="text-gray-600">
                        {isPassing 
                            ? "You've demonstrated a strong understanding of the exam objectives. You are well-prepared for the real certification." 
                            : "You need a bit more practice to reach the passing threshold (approx 75-80%). Check the objective breakdown below to target your weak areas."}
                    </p>
                </div>

                {/* Weak Objectives Dashboard */}
                {weakestObjectives.length > 0 && (
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                        <h4 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            Top Weak Objectives (Historical)
                        </h4>
                        <div className="space-y-2">
                            {weakestObjectives.map((obj) => (
                                <div key={obj.objectiveId} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700 font-medium">Objective {obj.objectiveId}</span>
                                    <div className="flex items-center gap-3 flex-1 ml-4">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${obj.percentage}%` }}></div>
                                        </div>
                                        <span className="text-red-700 w-10 text-right">{obj.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex gap-4 mt-auto">
                    <button onClick={onRestart} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors">Start New Session</button>
                    <button onClick={onRestart} className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">Return to Home</button>
                </div>
             </div>
          </div>
        </div>

        {/* Objective Coverage Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gray-100 px-8 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Objective Coverage Dashboard</h2>
                <p className="text-sm text-gray-500">Breakdown of this session by objective domain.</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(objectiveStats).sort().map(([id, stat]) => {
                    const percent = Math.round((stat.correct / stat.total) * 100);
                    let colorClass = 'bg-red-500';
                    if (percent >= 70) colorClass = 'bg-yellow-500';
                    if (percent >= 90) colorClass = 'bg-green-500';

                    return (
                        <div key={id} className="border rounded-lg p-4 relative overflow-hidden">
                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <span className="font-bold text-gray-700 text-lg">Obj {id}</span>
                                <span className={`text-xs font-bold px-2 py-1 rounded text-white ${colorClass}`}>
                                    {percent}%
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mb-3 relative z-10 h-8 line-clamp-2">{stat.title}</p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 relative z-10">
                                <div className={`${colorClass} h-1.5 rounded-full transition-all duration-1000`} style={{ width: `${percent}%` }}></div>
                            </div>
                            <p className="text-xs text-right mt-1 text-gray-400 relative z-10">{stat.correct}/{stat.total} Correct</p>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Detailed Review */}
        <div className="space-y-6">
           <h2 className="text-2xl font-bold text-gray-800 ml-2">Detailed Question Review</h2>
           {questions.map((q, idx) => {
               const userAnswer = userAnswers[q.id];
               const isCorrect = userAnswer === q.correctAnswerIndex;
               const isSkipped = userAnswer === undefined;

               return (
                   <div key={q.id} className={`bg-white rounded-xl shadow-sm border p-6 ${isCorrect ? 'border-l-4 border-l-green-500 border-gray-200' : 'border-l-4 border-l-red-500 border-gray-200'}`}>
                       <div className="flex justify-between items-start mb-3">
                           <div className="flex gap-2">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">Obj {q.objectiveId}</span>
                                {q.type === 'pbq' && <span className="text-xs font-bold text-purple-700 uppercase tracking-wide bg-purple-100 px-2 py-1 rounded">Simulation</span>}
                           </div>
                           <span className={`text-xs font-bold px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                               {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                           </span>
                       </div>
                       <h3 className="text-lg font-medium text-gray-900 mb-4"><span className="text-gray-400 mr-2">{idx + 1}.</span> {q.text}</h3>
                       
                       <div className="grid md:grid-cols-2 gap-3 mb-4">
                           {q.options.map((opt, optIdx) => (
                               <div key={optIdx} className={`
                                   p-3 rounded border text-sm
                                   ${optIdx === q.correctAnswerIndex ? 'bg-green-50 border-green-200 text-green-900 font-medium' : ''}
                                   ${!isCorrect && optIdx === userAnswer ? 'bg-red-50 border-red-200 text-red-900' : ''}
                                   ${optIdx !== q.correctAnswerIndex && optIdx !== userAnswer ? 'bg-white border-gray-100 text-gray-500' : ''}
                               `}>
                                   <div className="flex items-center gap-2">
                                       {optIdx === q.correctAnswerIndex && (
                                           <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                       )}
                                       {!isCorrect && optIdx === userAnswer && (
                                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                       )}
                                       {opt}
                                   </div>
                               </div>
                           ))}
                       </div>

                       <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                           <span className="font-bold text-gray-900 block mb-1">Explanation:</span>
                           {q.explanation}
                       </div>
                   </div>
               )
           })}
        </div>
      </div>
    </div>
  );
};
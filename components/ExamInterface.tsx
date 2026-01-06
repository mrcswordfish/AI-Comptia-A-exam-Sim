import React, { useState, useEffect } from 'react';
import { Question, EXAM_DURATION_MINUTES } from '../types';

interface ExamInterfaceProps {
  questions: Question[];
  onFinish: (answers: Record<number, number>) => void;
  coreName: string;
}

type ViewState = 'question' | 'review';

export const ExamInterface: React.FC<ExamInterfaceProps> = ({ questions, onFinish, coreName }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MINUTES * 60);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewState, setViewState] = useState<ViewState>('question');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [answers, onFinish]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex: number) => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const toggleFlag = (id: number) => {
    const newFlagged = new Set(flagged);
    if (newFlagged.has(id)) {
      newFlagged.delete(id);
    } else {
      newFlagged.add(id);
    }
    setFlagged(newFlagged);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Render Review Screen
  if (viewState === 'review') {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <header className="bg-slate-800 text-white p-4 flex items-center justify-between shadow-md">
          <h1 className="font-bold text-lg">Exam Review</h1>
          <div className="font-mono text-xl">{formatTime(timeLeft)}</div>
        </header>
        <main className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isFlagged = flagged.has(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestionIndex(idx);
                    setViewState('question');
                  }}
                  className={`p-4 rounded-lg border text-left flex justify-between items-start transition-all hover:shadow-md
                    ${isFlagged ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-200'}
                  `}
                >
                  <div>
                    <span className="font-bold text-gray-700 block mb-1">Q{idx + 1}</span>
                    <span className={`text-xs px-2 py-1 rounded ${isAnswered ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                      {isAnswered ? 'Answered' : 'Unanswered'}
                    </span>
                  </div>
                  {isFlagged && (
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8l-6-2-6 2z" /></svg>
                  )}
                </button>
              )
            })}
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setViewState('question')}
              className="px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Back to Exam
            </button>
            <button
              onClick={() => {
                if(window.confirm("You are about to submit your exam. This action cannot be undone.")) {
                  onFinish(answers);
                }
              }}
              className="px-8 py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 shadow-md"
            >
              Submit Final Exam
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Render Question Screen
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4 flex items-center justify-between shadow-md z-20">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-slate-700 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div>
            <h1 className="font-bold text-lg hidden sm:block">CompTIA A+ Exam Simulator</h1>
            <span className="text-xs text-slate-400">{coreName}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="flex flex-col items-end">
             <span className="text-xs uppercase text-slate-400">Time Remaining</span>
             <span className={`font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>
               {formatTime(timeLeft)}
             </span>
           </div>
           <button 
             onClick={() => setViewState('review')}
             className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors border border-blue-500"
           >
             Review Exam
           </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 z-10
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}>
           <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
             <span className="font-semibold text-gray-700">Navigator</span>
             <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-4">
             <div className="grid grid-cols-5 gap-2">
               {questions.map((q, idx) => {
                 const isAnswered = answers[q.id] !== undefined;
                 const isFlagged = flagged.has(q.id);
                 const isCurrent = idx === currentQuestionIndex;
                 
                 return (
                   <button
                     key={q.id}
                     onClick={() => {
                        setCurrentQuestionIndex(idx);
                        setSidebarOpen(false);
                     }}
                     className={`
                       h-10 w-full rounded flex items-center justify-center text-sm font-medium relative
                       ${isCurrent ? 'bg-blue-600 text-white ring-2 ring-blue-300' : 
                         isAnswered ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                     `}
                   >
                     {idx + 1}
                     {isFlagged && (
                       <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-white"></span>
                     )}
                   </button>
                 )
               })}
             </div>
           </div>
        </aside>

        {/* Main Question Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            {/* Top Bar: Flag & Progress */}
            <div className="flex justify-between items-center mb-6">
               <span className="text-sm font-medium text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</span>
               <button 
                 onClick={() => toggleFlag(currentQuestion.id)}
                 className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-colors ${flagged.has(currentQuestion.id) ? 'bg-yellow-50 border-yellow-400 text-yellow-700' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}
               >
                 <svg className="w-4 h-4" fill={flagged.has(currentQuestion.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8l-6-2-6 2z" /></svg>
                 {flagged.has(currentQuestion.id) ? 'Flagged' : 'Flag for Review'}
               </button>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10 mb-6">
               <div className="mb-4 flex items-center gap-2">
                 {currentQuestion.type === 'pbq' && (
                   <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded uppercase tracking-wide">
                     PBQ / Simulation
                   </span>
                 )}
                 <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wide">
                   {currentQuestion.domain} ({currentQuestion.objectiveId})
                 </span>
               </div>
               <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                 {currentQuestion.text}
               </p>

               <div className="space-y-3">
                 {currentQuestion.options.map((option, idx) => {
                   const isSelected = answers[currentQuestion.id] === idx;
                   return (
                     <label 
                       key={idx}
                       className={`
                         flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 group
                         ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}
                       `}
                     >
                       <input 
                         type="radio" 
                         name={`question-${currentQuestion.id}`} 
                         checked={isSelected}
                         onChange={() => handleSelectOption(idx)}
                         className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                       />
                       <span className={`ml-3 text-base ${isSelected ? 'text-blue-900 font-medium' : 'text-gray-700 group-hover:text-gray-900'}`}>
                         {option}
                       </span>
                     </label>
                   )
                 })}
               </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {isLastQuestion ? (
                <button
                  onClick={() => setViewState('review')}
                  className="px-8 py-3 rounded-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 shadow-sm"
                >
                  Review Exam
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm flex items-center gap-2"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
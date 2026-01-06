import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ExamInterface } from './components/ExamInterface';
import { ResultsScreen } from './components/ResultsScreen';
import { AppState, CoreType, Question, ExamResult } from './types';
import { generateExamQuestions } from './services/questionService';
import { saveExamResult } from './services/storageService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [currentCore, setCurrentCore] = useState<CoreType | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleStartExam = async (core: CoreType) => {
    setCurrentCore(core);
    setAppState(AppState.LOADING);
    
    try {
      const generatedQuestions = await generateExamQuestions(core);
      setQuestions(generatedQuestions);
      setAppState(AppState.EXAM);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to generate exam session. Please try again.");
      setAppState(AppState.ERROR);
    }
  };

  const handleFinishExam = (answers: Record<number, number>) => {
    setUserAnswers(answers);
    
    // Calculate stats for storage
    if (currentCore) {
        let score = 0;
        const breakdown: Record<string, { correct: number; total: number }> = {};
        
        questions.forEach(q => {
            const isCorrect = answers[q.id] === q.correctAnswerIndex;
            if (isCorrect) score++;
            
            if(!breakdown[q.objectiveId]) breakdown[q.objectiveId] = { correct: 0, total: 0 };
            breakdown[q.objectiveId].total++;
            if(isCorrect) breakdown[q.objectiveId].correct++;
        });

        const result: ExamResult = {
            id: Date.now().toString(),
            date: Date.now(),
            core: currentCore,
            score,
            totalQuestions: questions.length,
            objectiveBreakdown: breakdown
        };
        
        saveExamResult(result);
    }

    setAppState(AppState.RESULTS);
  };

  const handleRestart = () => {
    setAppState(AppState.WELCOME);
    setQuestions([]);
    setUserAnswers({});
    setCurrentCore(null);
    setErrorMsg("");
  };

  if (appState === AppState.LOADING) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Building Exam Session...</h2>
        <p className="text-gray-500 mt-2 text-center max-w-md">
          Randomizing 90 questions from the {currentCore === CoreType.CORE_1 ? 'Core 1' : 'Core 2'} question bank.
          <br/>
          <span className="text-sm mt-1 block">Good luck!</span>
        </p>
      </div>
    );
  }

  if (appState === AppState.ERROR) {
      return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Error</h2>
                  <p className="text-gray-600 mb-6">{errorMsg}</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleRestart} className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">Return to Home</button>
                  </div>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {appState === AppState.WELCOME && (
        <WelcomeScreen onStart={handleStartExam} />
      )}
      
      {appState === AppState.EXAM && currentCore && (
        <ExamInterface 
          questions={questions} 
          onFinish={handleFinishExam} 
          coreName={currentCore === CoreType.CORE_1 ? 'Core 1 (220-1201)' : 'Core 2 (220-1202)'}
        />
      )}

      {appState === AppState.RESULTS && currentCore && (
        <ResultsScreen 
          questions={questions} 
          userAnswers={userAnswers} 
          onRestart={handleRestart}
          core={currentCore}
        />
      )}
    </div>
  );
};

export default App;
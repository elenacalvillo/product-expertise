
import React, { createContext, useContext, useState } from 'react';

interface QuizContextType {
  isStarted: boolean;
  handleStartQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  return (
    <QuizContext.Provider value={{ isStarted, handleStartQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

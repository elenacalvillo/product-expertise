
import React from "react";
import { QuizOption } from "@/utils/quizData";

interface ProgressHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  maxPossibleScore: number;
  streak: number;
  selectedAnswers: Record<number, QuizOption | null>;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  currentQuestion,
  totalQuestions,
  score,
  maxPossibleScore,
  streak,
  selectedAnswers
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  const answeredCount = Object.values(selectedAnswers).filter(Boolean).length;
  
  return (
    <div className="w-full mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium text-gray-600">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-600">Score:</span>
            <span className="text-sm font-bold">{score}</span>
          </div>
          {streak > 1 && (
            <div className="flex items-center gap-1 bg-quiz-yellow px-2 py-1 rounded-full">
              <span className="text-xs font-bold">🔥 {streak} streak!</span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-quiz-dark transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-gray-500">
          {answeredCount} answered
        </div>
        <div className="text-xs text-gray-500">
          {totalQuestions - answeredCount} remaining
        </div>
      </div>
    </div>
  );
};

export default ProgressHeader;

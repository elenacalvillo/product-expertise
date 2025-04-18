
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion, QuizOption } from "@/utils/quizData";
import { createConfetti } from "@/utils/quizLogic";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswerSelected: (questionId: number, option: QuizOption) => void;
  onNextQuestion: () => void;
  selectedOption: QuizOption | null;
  isLastQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswerSelected,
  onNextQuestion,
  selectedOption,
  isLastQuestion
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    if (selectedOption) {
      setShowExplanation(true);
      if (selectedOption.id === question.correctOption) {
        createConfetti();
      }
    } else {
      setShowExplanation(false);
    }
  }, [selectedOption, question.correctOption]);
  
  useEffect(() => {
    setShowAnimation(true);
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [question.id]);
  
  const handleOptionClick = (option: QuizOption) => {
    if (!selectedOption) {
      onAnswerSelected(question.id, option);
    }
  };
  
  const getOptionClassName = (option: QuizOption) => {
    let className = "quiz-option";
    
    if (selectedOption) {
      if (option.id === selectedOption.id) {
        className += " selected";
        if (option.id === question.correctOption) {
          className += " correct";
        } else {
          className += " incorrect";
        }
      } else if (option.id === question.correctOption) {
        className += " correct";
      }
    }
    
    return className;
  };
  
  return (
    <div className={`w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${showAnimation ? 'animate-scale-in' : ''}`}>
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
          {question.questionText}
        </h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <div
              key={option.id}
              className={getOptionClassName(option)}
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300 text-gray-600 font-semibold">
                {option.id}
              </div>
              <span className="flex-1">{option.text}</span>
              {selectedOption && option.id === question.correctOption && (
                <CheckCircle2 className="text-green-500 ml-2" size={20} />
              )}
              {selectedOption && option.id === selectedOption.id && option.id !== question.correctOption && (
                <XCircle className="text-red-500 ml-2" size={20} />
              )}
            </div>
          ))}
        </div>
        
        {showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {selectedOption?.id === question.correctOption ? (
                  <CheckCircle2 className="text-green-500" size={20} />
                ) : (
                  <XCircle className="text-red-500" size={20} />
                )}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800">
                  {selectedOption?.id === question.correctOption
                    ? "Correct!"
                    : "Not quite right"}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {question.explanation}
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button 
                onClick={onNextQuestion}
                className="bg-gradient-quiz hover:bg-gradient-quiz-dark text-white"
              >
                {isLastQuestion ? "See Results" : "Next Question"}
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;

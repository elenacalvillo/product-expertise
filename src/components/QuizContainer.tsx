
import React, { useState, useEffect } from "react";
import ProgressHeader from "./ProgressHeader";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import { quizQuestions } from "@/utils/quizData";
import { 
  calculateScore, 
  getCareerResult, 
  getCorrectAnswersCount,
  getStreakCount
} from "@/utils/quizLogic";
import { QuizOption } from "@/utils/quizData";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, QuizOption | null>>({});
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const maxPossibleScore = totalQuestions * 5; // Maximum possible score if all VP answers
  
  const handleAnswerSelected = (questionId: number, option: QuizOption) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [questionId]: option
    };
    
    setSelectedAnswers(updatedAnswers);
    
    // Update score
    const newScore = calculateScore(updatedAnswers);
    setScore(newScore);
    
    // Update streak
    if (option.id === currentQuestion.correctOption) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak(Math.max(maxStreak, newStreak));
    } else {
      setStreak(0);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setShowResults(false);
  };
  
  if (showResults) {
    const correctAnswers = getCorrectAnswersCount(selectedAnswers);
    const careerResult = getCareerResult(score);
    
    return (
      <ResultScreen 
        score={score}
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        maxStreak={maxStreak}
        careerResult={careerResult}
        onRestartQuiz={handleRestartQuiz}
      />
    );
  }
  
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <ProgressHeader 
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        score={score}
        maxPossibleScore={maxPossibleScore}
        streak={streak}
        selectedAnswers={selectedAnswers}
      />
      
      <QuestionCard 
        question={currentQuestion}
        onAnswerSelected={handleAnswerSelected}
        onNextQuestion={handleNextQuestion}
        selectedOption={selectedAnswers[currentQuestion.id] || null}
        isLastQuestion={currentQuestionIndex === totalQuestions - 1}
      />
    </div>
  );
};

export default QuizContainer;


import React from "react";
import QuizContainer from "@/components/QuizContainer";
import StartQuiz from "@/components/StartQuiz";
import { QuizProvider, useQuiz } from "@/contexts/QuizContext";
import { useToast } from "@/hooks/use-toast";
import NewsletterBanner from "@/components/NewsletterBanner";

const QuizContent = () => {
  const { isStarted } = useQuiz();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-quiz-mint-100 to-quiz-mint-300">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-quiz-teal-dark">
            Product Management Expertise
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover your product management level through this 13-question assessment designed to evaluate your expertise and provide tailored resources.
          </p>
        </header>

        {isStarted ? <QuizContainer /> : <StartQuiz />}

        <NewsletterBanner />

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2025 Product Pro Quiz Master. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

export default Index;

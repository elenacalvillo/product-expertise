import React from "react";
import { QuizOption, CareerResult } from "@/utils/quizData";
import SubscriptionForm from "./SubscriptionForm";
import { Button } from "@/components/ui/button";
import { RefreshCw, Share2 } from "lucide-react";
import { toast } from "sonner";
import ProductSkillsRadar from './ProductSkillsRadar';
import { calculateSkillScores } from '@/utils/quizLogic';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  maxStreak: number;
  careerResult: CareerResult;
  onRestartQuiz: () => void;
  selectedAnswers: Record<number, QuizOption | null>;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  maxStreak,
  careerResult,
  onRestartQuiz,
  selectedAnswers
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Product Management Level",
        text: `I'm a ${careerResult.level} according to the PM Expertise Quiz! Take the quiz to discover your product management level.`,
        url: window.location.href,
      }).catch((error) => {
        toast.error("Error sharing: " + error);
      });
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(
        `I'm a ${careerResult.level} according to the PM Expertise Quiz! Take the quiz to discover your product management level: ${window.location.href}`
      );
      toast.success("Link copied to clipboard!");
    }
  };

  const careerLevelVisuals: Record<string, { icon: string; color: string; }> = {
    "Associate PM": { icon: "🌱", color: "bg-green-100" },
    "Product Manager": { icon: "🛠️", color: "bg-blue-100" },
    "Senior PM": { icon: "⚡", color: "bg-yellow-100" },
    "Head of Product": { icon: "🚀", color: "bg-purple-100" },
    "VP of Product": { icon: "👑", color: "bg-red-100" },
  };
  
  const visual = careerLevelVisuals[careerResult.level] || { icon: "🎯", color: "bg-gray-100" };

  const skillScores = calculateSkillScores(selectedAnswers);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 animate-bounce-in">
        <div className="bg-gradient-quiz p-6 text-center">
          <div className={`mx-auto w-24 h-24 rounded-full ${visual.color} flex items-center justify-center mb-4`}>
            <span className="text-4xl">{visual.icon}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {careerResult.title}
          </h2>
          <p className="mt-2 text-gray-600">{careerResult.description}</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-quiz-mint-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-gray-800">{score}</div>
              <div className="text-sm text-gray-500">Total Score</div>
            </div>
            <div className="bg-quiz-mint-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-gray-800">{correctAnswers}/{totalQuestions}</div>
              <div className="text-sm text-gray-500">Correct Answers</div>
            </div>
            <div className="bg-quiz-mint-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-gray-800">{maxStreak}</div>
              <div className="text-sm text-gray-500">Longest Streak</div>
            </div>
            <div className="bg-quiz-mint-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-gray-800">
                {Math.min(100, Math.round((correctAnswers / totalQuestions) * 100))}%
              </div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <Button 
              variant="outline"
              className="flex-1"
              onClick={onRestartQuiz}
            >
              <RefreshCw size={16} className="mr-2" /> Take Again
            </Button>
            <Button 
              className="flex-1 bg-gradient-coral text-white"
              onClick={handleShare}
            >
              <Share2 size={16} className="mr-2" /> Share Results
            </Button>
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-semibold mb-4">PM Career Ladder</h3>
            <div className="relative mb-6">
              <div className="absolute left-0 right-0 top-4 h-1.5 bg-gray-200 rounded-full z-0"></div>
              <div className="grid grid-cols-5 gap-2 relative z-10">
                {["Associate PM", "Product Manager", "Senior PM", "Head of Product", "VP of Product"].map((level, index) => {
                  const isCurrentLevel = careerResult.level === level;
                  return (
                    <div key={level} className="flex flex-col items-center gap-2">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCurrentLevel ? "bg-quiz-teal" : "bg-gray-200"
                        } ${isCurrentLevel ? "text-white" : "text-gray-500"}`}
                      >
                        {index + 1}
                      </div>
                      <div className={`text-xs text-center ${isCurrentLevel ? "font-bold" : "font-normal"}`}>
                        {level.split(" ")[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Product Skills Radar</h3>
            <p className="text-sm text-gray-600 mb-4">
              This radar chart shows your proficiency in different product management skills based on your answers.
            </p>
            <ProductSkillsRadar skillScores={skillScores} />
          </div>
          
        </div>
      </div>

      
      
      <SubscriptionForm careerResult={careerResult} skillScores={skillScores} />
    </div>
  );
};

export default ResultScreen;


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';
import { Brain, ChevronRight, Users, LightbulbIcon } from 'lucide-react';

const StartQuiz: React.FC = () => {
  const { handleStartQuiz } = useQuiz();
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg animate-fade-in">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-quiz-mint to-quiz-teal flex items-center justify-center">
            <Brain className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Product Management Expertise Quiz</CardTitle>
        <CardDescription>
          Test your product management knowledge and discover your career level
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2 flex items-center">
            <LightbulbIcon className="mr-2 h-5 w-5 text-quiz-teal" />
            What You'll Learn
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>Your current product management career level</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>Areas where you excel and where you can improve</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>Personalized recommendations for growth</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2 flex items-center">
            <Users className="mr-2 h-5 w-5 text-quiz-teal" />
            Quiz Details
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>13 multiple-choice questions</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>Takes approximately 3-5 minutes to complete</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="text-quiz-teal h-4 w-4 mr-2 flex-shrink-0" />
              <span>Instant feedback on your answers</span>
            </li>
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleStartQuiz} 
          className="w-full text-lg py-6 bg-gradient-to-r from-quiz-teal to-quiz-teal-dark hover:from-quiz-teal-dark hover:to-quiz-teal text-white"
        >
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StartQuiz;

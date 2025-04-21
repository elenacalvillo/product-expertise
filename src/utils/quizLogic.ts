
import { CareerResult, QuizOption, quizQuestions, careerResults } from './quizData';

export const calculateScore = (selectedAnswers: Record<number, QuizOption | null>): number => {
  let totalScore = 0;
  
  Object.values(selectedAnswers).forEach(option => {
    if (option) {
      totalScore += option.points;
    }
  });
  
  return totalScore;
};

export const getCareerResult = (score: number): CareerResult => {
  const result = careerResults.find(
    (result) => score >= result.minScore && score <= result.maxScore
  );
  
  return result || careerResults[0];
};

export const getCorrectAnswersCount = (selectedAnswers: Record<number, QuizOption | null>): number => {
  let correctCount = 0;
  
  Object.entries(selectedAnswers).forEach(([questionId, option]) => {
    if (option) {
      const question = quizQuestions.find(q => q.id === parseInt(questionId, 10));
      if (question && option.id === question.correctOption) {
        correctCount++;
      }
    }
  });
  
  return correctCount;
};

export const getStreakCount = (selectedAnswers: Record<number, QuizOption | null>): number => {
  let currentStreak = 0;
  let maxStreak = 0;
  
  quizQuestions.forEach(question => {
    const selectedOption = selectedAnswers[question.id];
    if (selectedOption && selectedOption.id === question.correctOption) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });
  
  return maxStreak;
};

export const createConfetti = () => {
  const colors = ['#C1D9C9', '#A1C6AD', '#9FD5D1', '#F39E88', '#F9DB95'];
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '1000';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `-10px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 20 + 10}px`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 5000);
};

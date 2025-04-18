
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CareerResult } from "@/utils/quizData";
import { toast } from "sonner";

interface SubscriptionFormProps {
  careerResult: CareerResult;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ careerResult }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Thank you for subscribing! Check your email for your free resources.");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="p-6 bg-quiz-mint-100 border-quiz-mint shadow-sm animate-bounce-in">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            We've sent your {careerResult.offer} to your email inbox. Check it out!
          </p>
          <div className="p-4 rounded-lg bg-quiz-mint/20 inline-block">
            <div className="text-5xl mb-2">🎉</div>
            <p className="text-sm text-gray-500">{careerResult.offerDetails}</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-quiz-mint-100 border-quiz-mint shadow-sm">
      <h3 className="text-xl font-bold mb-2">Claim Your Free {careerResult.offer}</h3>
      <p className="text-gray-600 mb-4">
        {careerResult.offerDetails}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            First Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
            required
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-gradient-quiz hover:bg-gradient-quiz-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : `Get My ${careerResult.offer}`}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy and will never share your information.
        </p>
      </form>
    </Card>
  );
};

export default SubscriptionForm;

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import forwardSubmission from "@/utils/forward";

const NewsletterBanner: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      await forwardSubmission({
        name: name || "",
        email,
        careerResult: {
          offer: "Newsletter Signup",
          title: "Newsletter",
          level: "N/A",
        },
        timestamp: new Date().toISOString(),
        source: `${window.location.href} | newsletter-banner`,
      });

      setIsSubmitted(true);
      toast.success("Thanks! Check your inbox for a confirmation.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-labelledby="newsletter-title" className="mt-12">
      <Card className="p-6 bg-quiz-mint-100/70 border-quiz-mint-300">
        {isSubmitted ? (
          <div className="text-center">
            <h2 id="newsletter-title" className="text-xl font-semibold text-quiz-teal-dark">
              You're on the list!
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              You'll receive product strategy insights and resources straight to your inbox.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
            <div className="md:flex-1">
              <h2 id="newsletter-title" className="text-xl font-semibold text-quiz-teal-dark">
                Join the newsletter
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Get product strategy insights and curated resources. No spam, unsubscribe anytime.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                type="text"
                placeholder="First name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="First name"
                className="bg-white"
              />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
                className="bg-white"
              />
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-coral text-white">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        )}
      </Card>
    </section>
  );
};

export default NewsletterBanner;

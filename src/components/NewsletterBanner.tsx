import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsletterBanner: React.FC = () => {
  return (
    <section aria-labelledby="newsletter-title" className="mt-12">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="p-6 bg-quiz-mint-100/70 border-quiz-mint-300">
          <div className="text-center">
            <h2 id="newsletter-title" className="text-xl font-semibold text-quiz-teal-dark">
              Join the newsletter
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Get product strategy insights and curated resources. No spam, unsubscribe anytime.
            </p>
            <div className="mt-4">
              <Button asChild className="bg-gradient-coral text-white">
                <a href="https://www.productreleasenotes.com/subscribe" aria-label="Subscribe on Substack">
                  Subscribe on Substack
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterBanner;

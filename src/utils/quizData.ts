export type CareerLevel = 'Associate' | 'PM' | 'Senior' | 'Head' | 'VP';

export type ProductSkill = 'Execution' | 'Product' | 'Strategic' | 'Leadership' | 'People Management';

export interface QuizOption {
  id: string;
  text: string;
  careerLevel: CareerLevel;
  points: number;
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: QuizOption[];
  correctOption: string;
  explanation: string;
  skill: ProductSkill;
}

export interface CareerResult {
  level: string;
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  offer: string;
  offerDetails: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    questionText: "When prioritizing features, you focus primarily on:",
    options: [
      { id: "A", text: "Customer feedback trends", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Technical complexity", careerLevel: "PM", points: 2 },
      { id: "C", text: "Executive requests", careerLevel: "PM", points: 2 },
      { id: "D", text: "Long-term market shifts", careerLevel: "Senior", points: 3 },
    ],
    correctOption: "A",
    explanation: "Associates analyze customer data, driving execution roles.",
    skill: "Product"
  },
  {
    id: 2,
    questionText: "A stakeholder demands roadmap changes. You:",
    options: [
      { id: "A", text: "Implement their request", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Schedule a priority meeting", careerLevel: "PM", points: 2 },
      { id: "C", text: "Escalate to your manager", careerLevel: "PM", points: 2 },
      { id: "D", text: "Share strategic rationale", careerLevel: "Senior", points: 3 },
    ],
    correctOption: "D",
    explanation: "Leaders articulate vision alignment.",
    skill: "Leadership"
  },
  {
    id: 3,
    questionText: "Your team disagrees on a decision. You:",
    options: [
      { id: "A", text: "Take a vote", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Analyze data", careerLevel: "PM", points: 2 },
      { id: "C", text: "Prototype options", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Align with company OKRs", careerLevel: "Head", points: 4 },
    ],
    correctOption: "D",
    explanation: "Execs prioritize org-wide goals.",
    skill: "People Management"
  },
  {
    id: 4,
    questionText: "During product discovery, you spend most time:",
    options: [
      { id: "A", text: "User interviews", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Business cases", careerLevel: "Senior", points: 3 },
      { id: "C", text: "Competitor research", careerLevel: "PM", points: 2 },
      { id: "D", text: "Cross-team coordination", careerLevel: "Head", points: 4 },
    ],
    correctOption: "B",
    explanation: "Senior PMs balance customer/business needs.",
    skill: "Product"
  },
  {
    id: 5,
    questionText: "Engineering suggests a technical overhaul. You:",
    options: [
      { id: "A", text: "Approve immediately", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Request cost analysis", careerLevel: "PM", points: 2 },
      { id: "C", text: "Consult designers", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Align with 5-year vision", careerLevel: "VP", points: 5 },
    ],
    correctOption: "D",
    explanation: "VPs evaluate long-term strategy.",
    skill: "Strategic"
  },
  {
    id: 6,
    questionText: "Defining MVP scope, you prioritize:",
    options: [
      { id: "A", text: "Core user needs", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Scalability potential", careerLevel: "Senior", points: 3 },
      { id: "C", text: "Leadership OKRs", careerLevel: "Head", points: 4 },
      { id: "D", text: "Market viability", careerLevel: "VP", points: 5 },
    ],
    correctOption: "B",
    explanation: "Senior PMs plan for future scaling.",
    skill: "Execution"
  },
  {
    id: 7,
    questionText: "Two teams conflict over resources. You:",
    options: [
      { id: "A", text: "Escalate to execs", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Facilitate workshop", careerLevel: "PM", points: 2 },
      { id: "C", text: "Prioritize data-backed team", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Find middle ground", careerLevel: "Head", points: 4 },
    ],
    correctOption: "C",
    explanation: "Seniors use data to resolve conflicts.",
    skill: "People Management"
  },
  {
    id: 8,
    questionText: "Your key metric for success is:",
    options: [
      { id: "A", text: "Activation rate", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Retention rate", careerLevel: "PM", points: 2 },
      { id: "C", text: "Net Promoter Score", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Market share", careerLevel: "VP", points: 5 },
    ],
    correctOption: "D",
    explanation: "VPs track macro-level impact.",
    skill: "Strategic"
  },
  {
    id: 9,
    questionText: "Entering a new market, you first:",
    options: [
      { id: "A", text: "Copy competitors", careerLevel: "Associate", points: 1 },
      { id: "B", text: "User testing", careerLevel: "PM", points: 2 },
      { id: "C", text: "Pilot in niche", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Partner with leaders", careerLevel: "Head", points: 4 },
    ],
    correctOption: "C",
    explanation: "Seniors validate in controlled environments.",
    skill: "Strategic"
  },
  {
    id: 10,
    questionText: "A launch deadline is at risk. You:",
    options: [
      { id: "A", text: "Add more developers", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Cut non-core features", careerLevel: "Senior", points: 3 },
      { id: "C", text: "Renegotiate timeline", careerLevel: "Head", points: 4 },
      { id: "D", text: "Assess portfolio impact", careerLevel: "VP", points: 5 },
    ],
    correctOption: "B",
    explanation: "Seniors make strategic trade-offs.",
    skill: "Execution"
  },
  {
    id: 11,
    questionText: "Handling customer feedback, you:",
    options: [
      { id: "A", text: "Send surveys", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Conduct interviews", careerLevel: "PM", points: 2 },
      { id: "C", text: "Track feature usage", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Create advisory board", careerLevel: "Head", points: 4 },
    ],
    correctOption: "D",
    explanation: "Heads build systemic feedback channels.",
    skill: "Product"
  },
  {
    id: 12,
    questionText: "Scaling user base 10x, you focus on:",
    options: [
      { id: "A", text: "Code optimization", careerLevel: "PM", points: 2 },
      { id: "B", text: "Server capacity", careerLevel: "PM", points: 2 },
      { id: "C", text: "Architecture redesign", careerLevel: "Senior", points: 3 },
      { id: "D", text: "Global infrastructure", careerLevel: "VP", points: 5 },
    ],
    correctOption: "D",
    explanation: "VPs plan infrastructure for hypergrowth.",
    skill: "Strategic"
  },
  {
    id: 13,
    questionText: "An ethical product dilemma arises. You:",
    options: [
      { id: "A", text: "Consult legal", careerLevel: "Associate", points: 1 },
      { id: "B", text: "Balance user/business needs", careerLevel: "PM", points: 2 },
      { id: "C", text: "Assess long-term brand impact", careerLevel: "Head", points: 4 },
      { id: "D", text: "Align with company values", careerLevel: "VP", points: 5 },
    ],
    correctOption: "D",
    explanation: "VPs uphold organizational principles.",
    skill: "Leadership"
  }
];

export const careerResults: CareerResult[] = [
  {
    level: "Associate PM",
    minScore: 13,
    maxScore: 25,
    title: "You're an Associate Product Manager",
    description: "You have solid execution skills and a focus on customer data. You're on track to develop your strategic thinking and cross-functional leadership abilities.",
    offer: "Junior PM Toolkit",
    offerDetails: "Download our free PDF with templates and resources to accelerate your PM career."
  },
  {
    level: "Product Manager",
    minScore: 26,
    maxScore: 38,
    title: "You're a Product Manager",
    description: "You excel at cross-functional coordination and balancing stakeholder needs. Continue developing your strategic vision and data-driven decision making.",
    offer: "Roadmap Templates",
    offerDetails: "Get access to our premium roadmap templates used by top tech companies."
  },
  {
    level: "Senior PM",
    minScore: 39,
    maxScore: 51,
    title: "You're a Senior Product Manager",
    description: "You're skilled at making strategic trade-offs and planning for scale. Your next growth area is organizational alignment and broader market impact.",
    offer: "Stakeholder Management Masterclass",
    offerDetails: "Join our exclusive online course on advanced stakeholder management."
  },
  {
    level: "Head of Product",
    minScore: 52,
    maxScore: 64,
    title: "You're a Head of Product",
    description: "You excel at organizational alignment and building systemic processes. Continue developing your market vision and strategic leadership.",
    offer: "Org Strategy Workshop",
    offerDetails: "Participate in our limited-seat workshop on product organization strategy."
  },
  {
    level: "VP of Product",
    minScore: 65,
    maxScore: 65,
    title: "You're a Product Visionary (VP-level)",
    description: "You demonstrate exceptional strategic vision and organization-wide thinking. You balance market trends, technical strategy and company values masterfully.",
    offer: "1:1 Advisory Session",
    offerDetails: "Schedule a personal advisory session with one of our senior product leaders."
  },
];

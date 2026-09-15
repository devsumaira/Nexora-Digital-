export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
  metricsTarget: string;
  detailedOverview: string;
  technologies: string[];
}

export interface GrowthFrameworkStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  keyMetric: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  headlineMetric: string;
  metricLabel: string;
  challenge: string;
  strategy: string;
  result: string;
  chartData: { label: string; before: number; after: number }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface ProcessPhase {
  step: string;
  title: string;
  timeframe: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  jobTitle: string;
  company: string;
  rating: number;
  testimonial: string;
  avatarUrl?: string;
  verifiedRoi: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  growthLever: string;
  typicalRoi: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  contentParagraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  serviceNeeded: string;
  monthlyBudget: string;
  message: string;
}

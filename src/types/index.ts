export interface Article {
  id: string;
  title: string;
  category: 'Entrepreneurship' | 'Literature & Culture' | 'Digital Commerce' | 'Brand & Narrative';
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
  quote?: string;
}

export interface VentureFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface EducationDetail {
  institution: string;
  degree: string;
  department: string;
  period: string;
  focusAreas: string[];
  description: string;
  highlights: string[];
}

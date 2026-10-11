export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'All' | 'AI & GenAI' | 'Full-Stack' | 'Python & Data' | 'Frontend';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  mockupType: 'analytics' | 'rag' | 'student-crud' | 'tourism' | 'ecommerce' | 'api-fetcher';
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: {
    name: string;
    description?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  isPlaceholder?: boolean;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
}

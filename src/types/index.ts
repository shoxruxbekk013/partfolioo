export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  sourceUrl?: string; // only if real source provided, or configurable
  previewType: 'game' | 'timer' | 'automarket';
  accentColor: string;
  gradient: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  category: 'frontend' | 'state' | 'design' | 'ai';
  categoryLabel: string;
  description: string;
  color: string;
  tags: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  accentColor: string;
  icon: string;
}

export interface SocialLinks {
  email: string;
  telegram?: string;
  github?: string;
  linkedin?: string;
  location: string;
  availability: string;
}

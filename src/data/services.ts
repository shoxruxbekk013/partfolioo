import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Frontend Development',
    shortDesc: 'Responsive, interactive, modern web interfaces.',
    fullDesc:
      'Engineering high-performance, maintainable web applications from ground up using React, JavaScript, HTML5, and CSS3. Building fluid Single Page Applications (SPAs) optimized for speed, search engines, and cross-browser resilience.',
    deliverables: [
      'Modern Single Page Applications (SPA) with React',
      'Clean, modular, and maintainable component architecture',
      'State management systems with Redux or React Context',
      'High-performance rendering with 60 FPS smoothness',
      'Full cross-browser compatibility and responsive testing'
    ],
    accentColor: '#00E5FF',
    icon: 'Layout'
  },
  {
    number: '02',
    title: 'UI Implementation',
    shortDesc: 'Transforming visual concepts into clean, polished interfaces.',
    fullDesc:
      'Translating Figma designs and creative ideas into pixel-perfect, accessible code with attention to microscopic typography, smooth animations, glassmorphic textures, and mobile ergonomics.',
    deliverables: [
      'Pixel-perfect translation of design concepts into code',
      'Design systems and reusable UI component libraries',
      'Responsive layouts from 320px mobile to 4K desktop screens',
      'Accessibility (WCAG) and keyboard navigation compliance',
      'Custom animations, micro-interactions, and visual flair'
    ],
    accentColor: '#8B5CF6',
    icon: 'Sparkles'
  },
  {
    number: '03',
    title: 'AI-Powered Web Experiences',
    shortDesc: 'Exploring practical AI integrations and intelligent user experiences.',
    fullDesc:
      'Merging modern frontend interfaces with state-of-the-art AI capabilities. Creating dynamic, intelligent, and interactive user experiences powered by artificial intelligence APIs and smart workflows.',
    deliverables: [
      'API integration with LLMs (Google Gemini, OpenAI, Claude)',
      'Intelligent UI interactions and dynamic data formatting',
      'AI-assisted development speed and smart prompt engineering',
      'Real-time streaming responses and modern chat/assistant UX',
      'Future-proof frontend workflows adapted for modern AI'
    ],
    accentColor: '#FF3CAC',
    icon: 'Cpu'
  }
];

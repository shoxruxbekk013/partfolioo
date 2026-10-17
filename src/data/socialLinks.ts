import { SocialLinks } from '../types';

/**
 * Configure your personal contact and social profile links here.
 * You can easily update your Telegram username, GitHub username, or contact email.
 */
export const socialLinksConfig: SocialLinks = {
  // Primary contact email (editable by user)
  email: 'shoxrux.dev@example.com',
  
  // Telegram username (set when ready, e.g. 'https://t.me/your_username')
  telegram: 'https://t.me/shoxrux_frontend',
  
  // GitHub profile (set when ready, e.g. 'https://github.com/your_username')
  github: 'https://github.com',
  
  // Professional location
  location: 'Tashkent, Uzbekistan (Available Worldwide)',
  
  // Availability status
  availability: 'Available for New Projects & Opportunities'
};

export const bioPhilosophy = {
  title: 'Design Meets Code',
  quote: 'Great software is not merely lines of code; it is an intuitive digital atmosphere where aesthetics and engineering harmoniously unite.'
};

export const aboutStats = [
  { label: 'Clean Code Focus', value: '100%', detail: 'Modular React & ES6+' },
  { label: 'Responsive Architecture', value: 'Mobile-First', detail: '320px to 4K Displays' },
  { label: 'Interactive 3D / WebGL', value: '60 FPS', detail: 'Three.js & Canvas' },
  { label: 'State Ecosystem', value: 'Redux / Context', detail: 'Predictable Data Flow' }
];

export const journeyTimeline = [
  {
    phase: '01',
    title: 'Web Core & Foundations',
    description: 'Mastered semantic HTML5, modern CSS3 layout systems (Flexbox, Grid), and foundational JavaScript standards.'
  },
  {
    phase: '02',
    title: 'React & Dynamic State Ecosystem',
    description: 'Specialized in modern React, custom hooks, Single Page Application architectures, and centralized Redux state management.'
  },
  {
    phase: '03',
    title: 'Creative 3D & Advanced Motion',
    description: 'Expanded frontend craftsmanship into interactive Three.js 3D web spaces, WebGL shaders, particle dynamics, and fluid micro-interactions.'
  },
  {
    phase: '04',
    title: 'AI Integration & Modern Products',
    description: 'Leveraging modern AI copilots, LLM API integrations, and prompt engineering to build next-generation smart web experiences.'
  }
];

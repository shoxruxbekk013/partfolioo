import { SkillItem } from '../types';

export const skillsCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'state', label: 'State Management' },
  { id: 'design', label: 'Design & UI/UX' },
  { id: 'ai', label: 'AI & Emerging Tech' },
] as const;

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: 'React',
    iconName: 'Atom',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Component architecture, custom hooks, virtual DOM optimization, and modern SPA lifecycles.',
    color: '#00E5FF',
    tags: ['Hooks', 'SPA', 'JSX', 'Components']
  },
  {
    name: 'JavaScript (ES6+)',
    iconName: 'FileCode2',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Modern asynchronous programming, promises, DOM manipulation, closures, and modular code.',
    color: '#FF9F43',
    tags: ['Async/Await', 'ESNext', 'DOM API', 'Event Loop']
  },
  {
    name: 'HTML5',
    iconName: 'Code2',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Semantic markup, accessibility compliance (WCAG), SEO-friendly structure, and Canvas API.',
    color: '#FF3CAC',
    tags: ['Semantic', 'Canvas API', 'A11y', 'Structure']
  },
  {
    name: 'CSS3',
    iconName: 'Palette',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Flexbox, CSS Grid layouts, keyframe animations, custom properties, and responsive media queries.',
    color: '#3867FF',
    tags: ['CSS Grid', 'Flexbox', 'Animations', 'Variables']
  },

  // State Management
  {
    name: 'Redux',
    iconName: 'Boxes',
    category: 'state',
    categoryLabel: 'State Management',
    description: 'Predictable centralized state container, immutable data flows, actions, and reducers.',
    color: '#8B5CF6',
    tags: ['Actions', 'Reducers', 'Single Source', 'Data Flow']
  },
  {
    name: 'Redux Toolkit',
    iconName: 'Layers',
    category: 'state',
    categoryLabel: 'State Management',
    description: 'Standardized modern Redux with createSlice, createAsyncThunk, and clean boilerplate reduction.',
    color: '#8B5CF6',
    tags: ['Slices', 'createAsyncThunk', 'Immer', 'DevTools']
  },
  {
    name: 'Context API',
    iconName: 'Share2',
    category: 'state',
    categoryLabel: 'State Management',
    description: 'Native lightweight global state distribution across component trees without prop drilling.',
    color: '#00E5FF',
    tags: ['Global State', 'Providers', 'useContext']
  },

  // Design & UI/UX
  {
    name: 'Tailwind CSS',
    iconName: 'Wind',
    category: 'design',
    categoryLabel: 'Design & UI/UX',
    description: 'Utility-first rapid prototyping, design token systems, dynamic dark mode, and responsive classes.',
    color: '#00E5FF',
    tags: ['Utility Classes', 'Design Tokens', 'Dark Mode']
  },
  {
    name: 'Responsive Design',
    iconName: 'Smartphone',
    category: 'design',
    categoryLabel: 'Design & UI/UX',
    description: 'Mobile-first methodology ensuring flawless visual harmony across 320px phones to 4K monitors.',
    color: '#3867FF',
    tags: ['Mobile First', 'Fluid Typography', 'Breakpoints']
  },
  {
    name: '3D Web & Three.js',
    iconName: 'Box',
    category: 'design',
    categoryLabel: 'Design & UI/UX',
    description: 'Interactive WebGL scenes, PBR materials, custom geometry, particle systems, and canvas shaders.',
    color: '#8B5CF6',
    tags: ['WebGL', 'PBR Materials', 'Particles', 'Canvas']
  },
  {
    name: 'Modern Web Motion',
    iconName: 'Sparkles',
    category: 'design',
    categoryLabel: 'Design & UI/UX',
    description: 'Motion orchestration, scroll-triggered reveals, spring physics, and micro-interactions.',
    color: '#FF3CAC',
    tags: ['Motion', 'Physics', 'Scroll Triggers', 'Transitions']
  },

  // AI & Emerging Tech
  {
    name: 'AI-Assisted Development',
    iconName: 'Bot',
    category: 'ai',
    categoryLabel: 'AI & Emerging Tech',
    description: 'Accelerated engineering workflows using state-of-the-art AI development tools, coding copilots, and test scaffolding.',
    color: '#00E5FF',
    tags: ['Workflows', 'Code Gen', 'Refactoring', 'Productivity']
  },
  {
    name: 'Prompt Engineering',
    iconName: 'Terminal',
    category: 'ai',
    categoryLabel: 'AI & Emerging Tech',
    description: 'Structured prompt design, zero-shot and few-shot calibration, and system-level instruction crafting.',
    color: '#8B5CF6',
    tags: ['Structured Output', 'Context Windows', 'Reasoning']
  },
  {
    name: 'AI & LLM Integration',
    iconName: 'Cpu',
    category: 'ai',
    categoryLabel: 'AI & Emerging Tech',
    description: 'Connecting web frontends to modern AI endpoints (Gemini, OpenAI API, webhooks) for intelligent features.',
    color: '#FF3CAC',
    tags: ['REST APIs', 'Streaming', 'Embeddings', 'Smart UI']
  }
];

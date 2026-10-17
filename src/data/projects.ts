import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gamee-2026',
    number: '01',
    name: 'GAMEE 2026',
    category: 'Interactive Game',
    tagline: 'High-speed browser driving simulation with dynamic physics and retro-futuristic audio',
    description: 'A browser-based car game project featuring an interactive driving experience.',
    longDescription:
      'GAMEE 2026 is an engaging browser-based automotive arcade driving game built for speed, responsiveness, and quick reflexes. It combines real-time keyboard control systems, continuous animation loops, lane collision detection, speed progression, and sound effects to deliver an exhilarating interactive experience directly in the web browser without any installation needed.',
    keyFeatures: [
      'Interactive car steering and keyboard driving controls (Arrow keys / WASD)',
      'High-performance 60 FPS requestAnimationFrame render loop',
      'Dynamic obstacle spawning, progressive speed ramp-up, and score tracking',
      'Instant responsive viewport scaling for desktop and mobile devices',
      'Zero-latency collision detection and high score persistence'
    ],
    techStack: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3 Animations', 'Web Audio API', 'Netlify'],
    liveUrl: 'https://gamee-2026.netlify.app/mashina',
    previewType: 'game',
    accentColor: '#FF3CAC',
    gradient: 'from-[#FF3CAC] via-[#8B5CF6] to-[#00E5FF]',
    metrics: [
      { label: 'Render Target', value: '60 FPS' },
      { label: 'Platform', value: 'Web / Netlify' },
      { label: 'Control Style', value: 'Interactive' }
    ]
  },
  {
    id: 'timer-2026',
    number: '02',
    name: 'TIMER 2026',
    category: 'Productivity Tool',
    tagline: 'Minimalist neon digital time management engine for hyper-focused deep work',
    description: 'A timer application designed for focused sessions and time management.',
    longDescription:
      'TIMER 2026 is an ultra-clean, cyberpunk-inspired productivity tool engineered to help developers, creators, and students maintain peak focus through structured work sprints. Featuring glowing luminous typography, audio alerts, custom interval duration presets, and distraction-free dark interface aesthetics.',
    keyFeatures: [
      'Precision millisecond-accurate timer engine with background tab synchronization',
      'Preset sprint modes: Pomodoro (25m), Short Break (5m), Deep Work (50m)',
      'Luminous cyber-glow digital clock display with high contrast readability',
      'Audio chimes and browser notifications when timers elapse',
      'Keyboard shortcuts for instantaneous start, pause, and reset'
    ],
    techStack: ['React', 'JavaScript', 'CSS Modules / Tailwind', 'LocalStorage API', 'Audio FX'],
    liveUrl: 'https://timerr2026.netlify.app',
    previewType: 'timer',
    accentColor: '#00E5FF',
    gradient: 'from-[#00E5FF] via-[#3867FF] to-[#8B5CF6]',
    metrics: [
      { label: 'Precision', value: 'Millisecond' },
      { label: 'Persistence', value: 'Local State' },
      { label: 'UI Mode', value: 'Cyber Glow' }
    ]
  },
  {
    id: 'shoxrux-auto-market',
    number: '03',
    name: 'Shoxrux Auto Market',
    category: 'Automotive Marketplace',
    tagline: 'Modern vehicle catalog and digital showroom with interactive filtering and specs',
    description: 'A car marketplace project for exploring vehicles and automotive listings.',
    longDescription:
      'Shoxrux Auto Market is a responsive automotive marketplace web portal that showcases luxury, sports, and daily vehicles in an intuitive digital showroom. Features structured vehicle cards, multi-parameter filtering (by brand, price, year, fuel type), high-resolution gallery views, and responsive inquiry forms.',
    keyFeatures: [
      'Dynamic multi-criteria vehicle search and live filtering engine',
      'Rich vehicle profile cards with transmission, mileage, and pricing badges',
      'Responsive multi-column grid adapting effortlessly from smartphones to 4K displays',
      'Interactive inquiry and contact trigger for prospective buyers',
      'Optimized image loading and smooth card hover micro-interactions'
    ],
    techStack: ['React', 'JavaScript', 'HTML5 / Modern CSS', 'Responsive Grid', 'Netlify'],
    liveUrl: 'https://shoxruxuzb.netlify.app',
    previewType: 'automarket',
    accentColor: '#8B5CF6',
    gradient: 'from-[#8B5CF6] via-[#3867FF] to-[#00E5FF]',
    metrics: [
      { label: 'Layout', value: 'Mobile-First' },
      { label: 'Catalog Engine', value: 'Instant Filter' },
      { label: 'Design System', value: 'Modern Automotive' }
    ]
  }
];

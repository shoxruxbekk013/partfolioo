import JSZip from 'jszip';

export async function generateProjectZip(onProgress?: (percent: number) => void): Promise<Blob> {
  const zip = new JSZip();

  // 1. Root configuration files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'shoxrux-maxmudjonov-portfolio',
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite --port=3000 --host=0.0.0.0',
          build: 'vite build',
          preview: 'vite preview',
          lint: 'tsc --noEmit'
        },
        dependencies: {
          '@tailwindcss/vite': '^4.3.3',
          '@vitejs/plugin-react': '^6.1.1',
          'lucide-react': '^0.546.0',
          'react': '^19.0.1',
          'react-dom': '^19.0.1',
          'three': '^0.170.0',
          'jszip': '^3.10.1',
          'tailwindcss': '^4.3.3',
          'vite': '^8.3.0'
        },
        devDependencies: {
          '@types/node': '^22.14.0',
          '@types/react': '^19.3.0',
          '@types/react-dom': '^19.3.0',
          '@types/three': '^0.170.0',
          '@types/jszip': '^3.4.1',
          'typescript': '^7.0.2'
        }
      },
      null,
      2
    )
  );

  zip.file(
    'vite.config.ts',
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
`
  );

  zip.file(
    'tsconfig.json',
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          useDefineForClassFields: true,
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          isolatedModules: true,
          moduleDetection: 'force',
          jsx: 'react-jsx',
          paths: {
            '@/*': ['./*']
          },
          noEmit: true
        },
        include: ['src', 'vite.config.ts']
      },
      null,
      2
    )
  );

  zip.file(
    'index.html',
    `<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shoxrux Maxmudjonov — Futuristic 3D Developer Portfolio</title>
    <meta name="description" content="Futuristic 3D developer portfolio of Shoxrux Maxmudjonov, featuring interactive 3D WebGL experiences, modern frontend engineering, project showcases, and downloadable source code." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#080B18] text-[#F8FAFC] antialiased selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  );

  zip.file(
    'README.md',
    `# Shoxrux Maxmudjonov — Futuristic 3D Developer Portfolio

A world-class, futuristic, colorful 3D developer portfolio built with React, Three.js, Tailwind CSS, and Lucide React for **Shoxrux Maxmudjonov**.

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ or 20+ installed on your machine
- npm, yarn, or pnpm

### Step 1: Install Dependencies
Open your terminal in the extracted project folder and run:
\`\`\`bash
npm install
\`\`\`

### Step 2: Start the Development Server
\`\`\`bash
npm run dev
\`\`\`
The portfolio will start at [http://localhost:3000](http://localhost:3000).

### Step 3: Build for Production
\`\`\`bash
npm run build
\`\`\`
The optimized production build will be generated in the \`dist/\` folder, ready for deployment to Netlify, Vercel, or any modern static hosting service.

## 🎨 Creative Direction & Palette
- Deep Midnight Navy: \`#080B18\`
- Electric Cyan: \`#00E5FF\`
- Vivid Purple: \`#8B5CF6\`
- Hot Magenta: \`#FF3CAC\`
- Electric Blue: \`#3867FF\`
- Warm Orange: \`#FF9F43\`

## 📁 Key Files & Customization
- \`src/data/projects.ts\`: Edit or add more featured projects
- \`src/data/skills.ts\`: Configure your tech stack and category groups
- \`src/data/socialLinks.ts\`: Update your contact email, Telegram, and GitHub URLs
- \`src/components/Hero3DScene.tsx\`: Three.js WebGL procedural centerpiece with PBR studio lighting

Designed and built with creativity.
`
  );

  zip.file(
    '.gitignore',
    `node_modules
dist
dist-ssr
*.local
.env
.DS_Store
`
  );

  // 2. Public Folder
  const publicFolder = zip.folder('public');
  if (publicFolder) {
    publicFolder.file(
      'favicon.svg',
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <linearGradient id="smGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF" />
      <stop offset="50%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#FF3CAC" />
    </linearGradient>
  </defs>
  <polygon points="60,6 108,26 114,74 76,112 44,112 6,74 12,26" fill="#080B18" stroke="url(#smGrad)" stroke-width="3" stroke-linejoin="round"/>
  <path d="M48,34 L28,34 L28,52 L48,58 L48,78 L26,78" fill="none" stroke="url(#smGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M56,78 L56,34 L72,58 L88,34 L88,78" fill="none" stroke="#00E5FF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
    );
  }

  // 3. Generate Archive Blob
  return await zip.generateAsync({ type: 'blob' }, (metadata) => {
    if (onProgress) {
      onProgress(metadata.percent);
    }
  });
}

import React from 'react';
import { Hero3DScene } from './Hero3DScene';
import { ArrowDown, Sparkles, Send, Layers, Code, Zap } from 'lucide-react';

interface HeroProps {
  onOpenZipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenZipModal }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-cyber-grid">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3867FF]/15 via-[#8B5CF6]/15 to-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Main Grid: Left Typography + Right 3D Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Hero Content (7 Columns on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-10">
            {/* Status Pill Badge (Clean, Static - No pulsing dots) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1326]/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 glass-panel-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* Developer Name in Big Futuristic Typography */}
            <div className="mb-4">
              <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="block text-white drop-shadow-md">
                  SHOXRUX
                </span>
                <span className="block text-gradient-cyan-purple drop-shadow-lg">
                  MAXMUDJONOV
                </span>
              </h1>
            </div>

            {/* Subtitle / Roles */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono tracking-wider text-slate-300 mb-6">
              <span className="text-cyan-400 font-semibold">Frontend Developer</span>
              <span className="text-slate-600">·</span>
              <span className="text-purple-400 font-semibold">Creative Developer</span>
              <span className="text-slate-600">·</span>
              <span className="text-pink-400 font-semibold">AI Enthusiast</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase text-slate-100 max-w-2xl mb-4 leading-snug">
              "BUILDING DIGITAL EXPERIENCES BEYOND LIMITS."
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300/90 max-w-xl leading-relaxed mb-8 font-light">
              I transform ideas into interactive digital experiences through modern frontend engineering, creative design, and emerging AI technologies.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00E5FF] via-[#3867FF] to-[#8B5CF6] text-slate-950 hover:brightness-110 active:scale-95 shadow-xl shadow-cyan-500/25 group"
              >
                <span>Explore My Projects</span>
                <Layers className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 glass-panel-subtle border border-[#00E5FF]/40 text-slate-100 hover:text-white hover:border-[#00E5FF] hover:bg-white/5 active:scale-95 group"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-[#00E5FF] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500 text-[11px] uppercase tracking-wider">Tech Focus:</span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <Code className="w-3.5 h-3.5 text-[#00E5FF]" /> React & Redux
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" /> Three.js 3D WebGL
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <Zap className="w-3.5 h-3.5 text-[#FF3CAC]" /> AI Engineering
              </span>
            </div>
          </div>

          {/* Right Hero: Three.js Interactive 3D Centerpiece (5 Columns on lg) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient circular frame highlight */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00E5FF]/10 via-[#8B5CF6]/15 to-transparent blur-xl pointer-events-none" />
            <div className="relative w-full rounded-2xl border border-cyan-500/20 bg-[#080B18]/60 backdrop-blur-sm overflow-hidden shadow-2xl">
              <Hero3DScene />
            </div>
          </div>

        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center pt-8 pointer-events-auto">
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#00E5FF] transition-colors group"
          aria-label="Scroll to featured projects"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-[#00E5FF] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#00E5FF] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

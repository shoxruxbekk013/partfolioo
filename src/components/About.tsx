import React from 'react';
import { Logo } from './Logo';
import { aboutStats, bioPhilosophy, journeyTimeline, socialLinksConfig } from '../data/socialLinks';
import { UserCheck, Sparkles, MapPin, Terminal, Compass, Quote, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-[#00E5FF] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            THE MIND <span className="text-gradient-cyan-purple">BEHIND THE CODE</span>
          </h2>
        </div>

        {/* Top Grid: Avatar Visual & Bio Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Holographic Abstract Avatar & Identity Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-3xl glass-panel bg-[#0D1326]/80 border border-cyan-500/30 p-8 shadow-2xl overflow-hidden flex flex-col items-center text-center">
              {/* Background ambient aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 via-[#8B5CF6]/15 to-[#FF3CAC]/10 blur-xl pointer-events-none" />

              {/* Holographic Avatar Centerpiece */}
              <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
                {/* Outer rotating cyber ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/50 animate-spin" style={{ animationDuration: '24s' }} />
                <div className="absolute inset-2 rounded-full border border-slate-700/80" />
                <div className="absolute inset-4 rounded-full border border-purple-500/40" />

                {/* Core Monogram */}
                <div className="relative z-10">
                  <Logo size={74} showText={false} />
                </div>
              </div>

              {/* Identity Details */}
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                Shoxrux Maxmudjonov
              </h3>
              <p className="text-xs font-mono text-cyan-300 tracking-wider mb-4 font-semibold uppercase">
                Frontend Developer
              </p>

              {/* Location & Status */}
              <div className="w-full space-y-2 pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3CAC]" />
                  <span>{socialLinksConfig.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{socialLinksConfig.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Statement & Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Primary Bio Statement (Exact User Specification) */}
            <div className="p-8 rounded-3xl glass-panel bg-[#0D1326]/70 border border-slate-700/60 shadow-xl">
              <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase block mb-3 font-semibold">
                Introduction
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                "My name is <strong className="text-white font-semibold">Shoxrux Maxmudjonov</strong>. I am a frontend developer passionate about creating modern, interactive, responsive, and visually distinctive web experiences. I enjoy combining clean code, thoughtful UI/UX, creative 3D visuals, and artificial intelligence to build useful digital products."
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="p-8 rounded-3xl glass-panel bg-gradient-to-r from-[#0D1326]/90 to-[#120F2E]/80 border border-purple-500/30 relative overflow-hidden shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-[#8B5CF6] shrink-0">
                  <Quote className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                    Core Philosophy · {bioPhilosophy.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
                    "{bioPhilosophy.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {aboutStats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-panel bg-[#0D1326]/60 border border-slate-800 hover:border-[#00E5FF]/40 transition-colors text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-1 text-gradient-cyan-purple">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-200 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Creative Journey / Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-2">
              <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>EVOLUTION</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Creative Journey & Focus Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {journeyTimeline.map((item) => (
              <div
                key={item.phase}
                className="p-6 rounded-2xl glass-panel bg-[#0D1326]/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                      PHASE {item.phase}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

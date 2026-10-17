import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Info, Code, Play, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080B18]/40">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-[#00E5FF] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              FEATURED <span className="text-gradient-cyan-purple">PROJECTS</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-2 font-light">
              Real deployed applications demonstrating responsive frontend engineering, interactive mechanics, and polished design.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>3 Live Production Deployments</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel bg-[#0D1326]/70 border border-slate-700/60 hover:border-[#00E5FF]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
              >
                {/* Glowing border top accent */}
                <div
                  className="absolute top-0 inset-x-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Card Top: Preview Window */}
                <div>
                  <div
                    className="relative w-full h-56 bg-slate-950 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Simulated Interface Rendering based on Preview Type */}
                    <div className="absolute inset-0 bg-cyber-grid opacity-20 group-hover:opacity-30 transition-opacity" />

                    {project.previewType === 'game' && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-transparent via-[#FF3CAC]/10 to-black/80">
                        {/* Game Arcade Preview Frame */}
                        <div className="w-full h-36 rounded-xl border border-[#FF3CAC]/40 bg-[#080B18]/90 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-102 transition-transform duration-300">
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                            <span className="text-[#FF3CAC] font-bold">🏎️ GAMEE 2026 ARCADE</span>
                            <span className="text-cyan-400">SPEED 142 KM/H</span>
                          </div>
                          
                          {/* Road visual */}
                          <div className="w-full h-16 bg-slate-900 rounded border border-slate-800 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-x-0 h-0.5 border-b border-dashed border-amber-400/60" />
                            <div className="w-10 h-5 rounded bg-[#FF3CAC] text-[8px] font-bold text-white flex items-center justify-center shadow-lg shadow-pink-500/60">
                              CAR
                            </div>
                            <div className="absolute right-4 w-6 h-5 rounded bg-cyan-400/30 border border-cyan-400" />
                          </div>

                          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                            <span>KEYS: ARROWS / WASD</span>
                            <span className="text-emerald-400">ACTIVE LOOP</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'timer' && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-transparent via-[#00E5FF]/10 to-black/80">
                        {/* Neon Digital Clock Preview Frame */}
                        <div className="w-full h-36 rounded-xl border border-[#00E5FF]/40 bg-[#080B18]/90 p-4 flex flex-col items-center justify-center text-center group-hover:scale-102 transition-transform duration-300">
                          <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-wider mb-1">
                            FOCUS SESSION
                          </span>
                          <div className="text-3xl font-mono font-extrabold tracking-widest text-gradient-cyan-blue">
                            25:00
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-[#00E5FF] text-[9px] font-mono">
                              RUNNING
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[9px] font-mono">
                              AUDIO ON
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'automarket' && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-transparent via-[#8B5CF6]/10 to-black/80">
                        {/* Auto Showroom Preview Frame */}
                        <div className="w-full h-36 rounded-xl border border-[#8B5CF6]/40 bg-[#080B18]/90 p-3 flex flex-col justify-between group-hover:scale-102 transition-transform duration-300">
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-[#8B5CF6] font-bold">AUTO SHOWROOM</span>
                            <span className="text-emerald-400">CATALOG ACTIVE</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-left">
                            <div className="text-xs font-bold text-white">Vehicles Showcase</div>
                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">Filter by brand, year, transmission</div>
                          </div>
                          <div className="flex gap-2 text-[9px] font-mono text-cyan-300">
                            <span>• Modern UI Grid</span>
                            <span>• Vehicle Specs</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 border border-white/30">
                        <Eye className="w-3.5 h-3.5 text-[#00E5FF]" /> View Details
                      </span>
                    </div>

                    {/* Project Number Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] font-bold text-white">
                      PROJECT {project.number}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-slate-300">
                      {project.category}
                    </div>

                    {/* Illustrative Preview watermark */}
                    <div className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-500 opacity-60">
                      Illustrative Preview
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" /> Details
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 bg-gradient-to-r from-[#00E5FF] to-[#3867FF] text-slate-950 hover:brightness-110 active:scale-95 shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Source Code Note */}
        <div className="mt-12 p-4 rounded-2xl glass-panel-subtle border border-slate-700/60 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <Code className="w-4 h-4 text-[#8B5CF6] shrink-0" />
          <span>
            Project source codes available upon request or in private repositories. Download the portfolio source code via the top navbar.
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

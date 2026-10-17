import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Code2, Layers, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl rounded-3xl glass-panel bg-[#080B18]/95 border border-[#00E5FF]/30 p-6 sm:p-8 shadow-2xl text-left my-8 overflow-hidden"
      >
        {/* Glow ambient */}
        <div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[90px] opacity-25 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Metadata */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-[#00E5FF] border border-cyan-500/25 font-bold">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-mono text-purple-400">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-mono text-slate-300 mb-6">
          {project.tagline}
        </p>

        {/* Preview Visual Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-700/60 mb-6 bg-[#0D1326] flex items-center justify-center group">
          {/* Futuristic Simulated Interface Visual */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30" />
          
          {project.previewType === 'game' && (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#080B18]/40 to-[#FF3CAC]/10">
              <div className="w-full max-w-md p-4 rounded-xl border border-[#FF3CAC]/30 bg-black/60 shadow-lg text-center">
                <span className="text-[10px] font-mono text-[#FF3CAC] uppercase tracking-wider block mb-1">
                  GAMEPLAY INTERFACE PREVIEW
                </span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">
                  142 <span className="text-xs text-cyan-400">KM/H</span> · 8,450 <span className="text-xs text-[#FF3CAC]">PTS</span>
                </div>
                <div className="w-full h-16 rounded bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-x-0 h-0.5 bg-dashed border-b border-dashed border-yellow-400/50" />
                  <div className="w-12 h-6 rounded bg-[#FF3CAC] shadow-lg shadow-pink-500/50 flex items-center justify-center text-[9px] font-bold text-white">
                    🏎️ CAR
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 font-mono">
                  Lane obstacle avoidance & real-time keyboard control loop
                </p>
              </div>
            </div>
          )}

          {project.previewType === 'timer' && (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#080B18]/40 to-[#00E5FF]/10">
              <div className="w-full max-w-md p-5 rounded-xl border border-[#00E5FF]/30 bg-black/60 shadow-lg text-center">
                <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-wider block mb-1">
                  DIGITAL TIME ENGINE PREVIEW
                </span>
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-widest text-gradient-cyan-blue my-2">
                  25:00<span className="text-xs text-slate-400">.00</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="px-2.5 py-1 rounded bg-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-mono font-semibold">
                    POMODORO
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                    SHORT BREAK
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                    DEEP WORK
                  </span>
                </div>
              </div>
            </div>
          )}

          {project.previewType === 'automarket' && (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#080B18]/40 to-[#8B5CF6]/10">
              <div className="w-full max-w-md p-4 rounded-xl border border-[#8B5CF6]/30 bg-black/60 shadow-lg text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider">
                    VEHICLE SHOWROOM PREVIEW
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    IN STOCK
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  BMW M4 Competition · 2024
                </div>
                <div className="grid grid-cols-3 gap-2 my-2 text-center text-[10px] font-mono text-slate-300">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">503 HP</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Automatic</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">Twin-Turbo</div>
                </div>
                <div className="text-sm font-mono text-cyan-300 font-bold text-right">
                  Explore Catalog Listings →
                </div>
              </div>
            </div>
          )}

          {/* Representative Mockup Disclaimer */}
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[9px] font-mono text-slate-400">
            Illustrative Project Architecture Preview
          </div>
        </div>

        {/* Project Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" /> Overview & Technical Architecture
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" /> Key Engineering Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-black/30 p-2.5 rounded-lg border border-slate-800/80">
                <span className="text-[#00E5FF] mt-0.5">•</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#FF3CAC]" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Deployed & Live on Netlify</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white glass-panel-subtle"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] via-[#3867FF] to-[#8B5CF6] text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25"
            >
              <span>Launch Live Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

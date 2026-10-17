import React from 'react';
import { Logo } from './Logo';
import { socialLinksConfig } from '../data/socialLinks';
import { Download, ArrowUp, Mail, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenZipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050711] border-t border-slate-800 text-slate-400 overflow-hidden">
      {/* Subtle Animated Gradient Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] via-[#FF3CAC] to-[#00E5FF] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Brand & Persona (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Logo size={42} showText={true} />
            <p className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
              Frontend Developer
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Crafting futuristic, responsive, and visually distinctive web applications combining clean modern React architecture and interactive 3D WebGL visuals.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              {socialLinksConfig.location}
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#00E5FF] transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00E5FF] transition-colors">
                  02. Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#00E5FF] transition-colors">
                  03. Skills & Technologies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00E5FF] transition-colors">
                  04. Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00E5FF] transition-colors">
                  05. About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00E5FF] transition-colors">
                  06. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Source Code & Socials (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Source Code & Export
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Download the complete React and Three.js portfolio codebase as a ready-to-run ZIP archive.
            </p>

            <button
              type="button"
              onClick={onOpenZipModal}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>Download Project .ZIP</span>
            </button>

            {/* Social channels */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={`mailto:${socialLinksConfig.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              {socialLinksConfig.telegram && (
                <a
                  href={socialLinksConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/5 transition-colors flex items-center gap-1.5"
                >
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3 text-[#00E5FF]" />
                </a>
              )}
              {socialLinksConfig.github && (
                <a
                  href={socialLinksConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/5 transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#FF3CAC]" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Shoxrux Maxmudjonov.</span>
            <span>·</span>
            <span className="text-slate-400">Designed & built with creativity.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#00E5FF] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

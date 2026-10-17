import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenZipModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenZipModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['hero', 'projects', 'skills', 'services', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id)
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#080B18]/85 backdrop-blur-xl border-b border-[#00E5FF]/15 shadow-xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo size={38} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-panel-subtle border border-cyan-500/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00E5FF]/20 to-[#8B5CF6]/20 text-[#00E5FF] font-semibold border border-[#00E5FF]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Download Source ZIP Button */}
            <button
              type="button"
              onClick={onOpenZipModal}
              className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider text-white bg-gradient-to-r from-[#00E5FF]/15 via-[#8B5CF6]/20 to-[#FF3CAC]/15 border border-[#00E5FF]/40 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-1.5 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Source .ZIP</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white glass-panel-subtle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF3CAC]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#00E5FF]/20 bg-[#080B18]/95 backdrop-blur-2xl px-6 py-6 transition-all shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono tracking-wider text-slate-200 hover:text-[#00E5FF] hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZipModal();
                }}
                className="w-full py-3 rounded-xl font-mono text-xs font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-[#00E5FF] via-[#3867FF] to-[#8B5CF6] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Source (.ZIP)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

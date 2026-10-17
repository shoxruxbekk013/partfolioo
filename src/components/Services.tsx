import React from 'react';
import { servicesData } from '../data/services';
import { Layout, Sparkles, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#00E5FF]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#8B5CF6]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#FF3CAC]" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#080B18]">
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#00E5FF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-[#00E5FF] mb-3">
            <Layout className="w-3.5 h-3.5" />
            <span>SPECIALIZED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            WHAT I <span className="text-gradient-cyan-blue">DELIVER</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            Combining frontend engineering rigor, responsive design aesthetics, and modern AI integrations to create impactful digital products.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.number}
                className="group relative rounded-3xl glass-panel bg-[#0D1326]/80 border border-slate-700/60 hover:border-[#00E5FF]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                {/* Glowing top line */}
                <div
                  className="absolute top-0 inset-x-8 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-3xl font-extrabold tracking-wider"
                      style={{ color: service.accentColor }}
                    >
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {serviceIcons[service.icon]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-mono text-cyan-400 font-semibold mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Full Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6 font-light">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: service.accentColor }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link / CTA */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-slate-300 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

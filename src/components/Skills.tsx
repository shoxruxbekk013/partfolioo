import React, { useState } from 'react';
import { skillsData, skillsCategories } from '../data/skills';
import {
  Atom,
  FileCode2,
  Code2,
  Palette,
  Boxes,
  Layers,
  Share2,
  Wind,
  Smartphone,
  Box,
  Sparkles,
  Bot,
  Terminal,
  Cpu,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-6 h-6" />,
  FileCode2: <FileCode2 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Boxes: <Boxes className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#3867FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FF3CAC]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-[#8B5CF6] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            CORE SKILLS & <span className="text-gradient-purple-magenta">TECHNOLOGIES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            Modern tools and technologies utilized to craft responsive, performant, and visually engaging web experiences.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel-subtle border border-slate-700/60">
            {skillsCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-[#0D1326] border border-slate-700 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.name}
                className="group relative rounded-2xl glass-panel bg-[#0D1326]/60 border border-slate-800 hover:border-[#00E5FF]/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div>
                  {/* Top: Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}40`,
                      }}
                    >
                      {iconMap[skill.iconName] || <Code2 className="w-6 h-6" />}
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {skill.categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-xs">
            No technologies found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

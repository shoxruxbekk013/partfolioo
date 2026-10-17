import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* SVG Icon */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow behind logo */}
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-tr from-[#00E5FF] via-[#8B5CF6] to-[#FF3CAC] transition-opacity duration-300 group-hover:opacity-80"
        />

        <svg
          viewBox="0 0 120 120"
          width="100%"
          height="100%"
          className="relative z-10 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoSmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#FF3CAC" />
            </linearGradient>
            <linearGradient id="logoSmSubtle" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3867FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>

          {/* Futuristic Octagonal Frame */}
          <polygon
            points="60,8 106,26 112,74 76,110 44,110 8,74 14,26"
            fill="#080B18"
            stroke="url(#logoSmGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Cyber accents */}
          <path
            d="M26,38 L38,26 M94,38 L82,26 M26,82 L38,94 M94,82 L82,94"
            stroke="#00E5FF"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />

          {/* S Letter Form */}
          <path
            d="M48,34 L28,34 L28,52 L48,58 L48,78 L26,78"
            stroke="url(#logoSmGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* M Letter Form */}
          <path
            d="M56,78 L56,34 L72,58 L88,34 L88,78"
            stroke="url(#logoSmSubtle)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Junction Nodes */}
          <circle cx="28" cy="34" r="2.5" fill="#00E5FF" />
          <circle cx="48" cy="78" r="2.5" fill="#FF3CAC" />
          <circle cx="72" cy="58" r="3" fill="#00E5FF" />
          <circle cx="56" cy="34" r="2.5" fill="#8B5CF6" />
          <circle cx="88" cy="34" r="2.5" fill="#00E5FF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-lg leading-tight tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
            SHOXRUX
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] uppercase font-semibold">
            MAXMUDJONOV
          </span>
        </div>
      )}
    </div>
  );
};

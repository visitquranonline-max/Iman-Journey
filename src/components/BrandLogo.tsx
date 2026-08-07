import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  lightMode = false,
}) => {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  }[size];

  const textSize = {
    sm: 'text-sm',
    md: 'text-base font-bold',
    lg: 'text-xl font-extrabold',
    xl: 'text-2xl font-black',
  }[size];

  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center ${dimensions}`}>
        {/* Golden Mihrab Arch Outer Ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#f3b616] via-[#fcd34d] to-[#d97706] p-[2px] shadow-md shadow-amber-500/20 transition-transform duration-300 hover:scale-105">
          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1 relative overflow-hidden">
            {/* Subtle background golden glow */}
            <div className="absolute -inset-1 bg-amber-50/50 rounded-full blur-xs" />

            {/* Official Mihrab Arch Design SVG */}
            <svg viewBox="0 0 100 120" className="w-full h-full text-amber-500 fill-current relative z-10 drop-shadow-xs">
              {/* Pointed Mihrab Arch Frame */}
              <path
                d="M 50 10 
                   C 75 25, 85 45, 85 70 
                   L 85 105 
                   L 15 105 
                   L 15 70 
                   C 15 45, 25 25, 50 10 Z"
                fill="none"
                stroke="#f3b616"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner Arch Accent */}
              <path
                d="M 50 20 
                   C 68 32, 75 50, 75 70 
                   L 75 98 
                   L 25 98 
                   L 25 70 
                   C 25 50, 32 32, 50 20 Z"
                fill="none"
                stroke="#111827"
                strokeWidth="4"
              />

              {/* Open Quran Book in Center */}
              <g transform="translate(25, 45) scale(0.5)" fill="#111827">
                {/* Left Book Page */}
                <path d="M 50 20 C 30 10, 10 20, 0 25 L 0 65 C 10 60, 30 50, 50 60 Z" />
                {/* Right Book Page */}
                <path d="M 50 20 C 70 10, 90 20, 100 25 L 100 65 C 90 60, 70 50, 50 60 Z" />
                {/* Rehal Book Stand Base */}
                <path d="M 20 62 L 80 82 M 80 62 L 20 82" stroke="#f3b616" strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* Location Pin Ring at Bottom */}
              <ellipse cx="50" cy="112" rx="28" ry="6" fill="none" stroke="#f3b616" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`tracking-wider uppercase font-serif ${textSize} ${
            lightMode ? 'text-white drop-shadow-md' : 'text-slate-900'
          }`}
        >
          Visit Quran
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-semibold tracking-widest uppercase ${
              lightMode ? 'text-amber-200' : 'text-amber-700'
            }`}
          >
            Online Academy
          </span>
        )}
      </div>
    </div>
  );
};

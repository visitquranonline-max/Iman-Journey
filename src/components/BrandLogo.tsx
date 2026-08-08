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
    sm: 'text-sm font-bold',
    md: 'text-base font-extrabold',
    lg: 'text-2xl font-black',
    xl: 'text-3xl font-black',
  }[size];

  const subtextSize = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Official Visit Quran Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${dimensions}`}>
        <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#111827] via-[#090d16] to-[#020408] p-1.5 border border-amber-500/40 shadow-lg shadow-amber-500/10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#f3b616" />
                <stop offset="70%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <g transform="translate(0, -10)">
              {/* Outer Pointed Mihrab Arch */}
              <path
                d="M 256 60 C 370 120 410 190 410 320 L 410 420 L 102 420 L 102 320 C 102 190 142 120 256 60 Z"
                fill="none"
                stroke="url(#brandGoldGrad)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Inner Arch Accent Line */}
              <path
                d="M 256 95 C 345 145 380 205 380 320 L 380 400 L 132 400 L 132 320 C 132 205 167 145 256 95 Z"
                fill="none"
                stroke="url(#brandGoldGrad)"
                strokeWidth="7"
                opacity="0.75"
              />

              {/* Top Star/Crescent Peak */}
              <path
                d="M 256 30 L 260 45 L 275 45 L 263 54 L 267 69 L 256 60 L 245 69 L 249 54 L 237 45 L 252 45 Z"
                fill="url(#brandGoldGrad)"
              />

              {/* Open Quran Book on Rehal */}
              <g transform="translate(256, 260)">
                <path d="M 0 -35 C -40 -50, -85 -35, -110 -25 L -110 35 C -85 25, -40 10, 0 25 Z" fill="url(#brandGoldGrad)" />
                <path d="M 0 -35 C 40 -50, 85 -35, 110 -25 L 110 35 C 85 25, 40 10, 0 25 Z" fill="url(#brandGoldGrad)" />
                <path d="M -5 -30 L -5 20 M 5 -30 L 5 20" stroke="#090d16" strokeWidth="5" strokeLinecap="round" />
                <path d="M -70 25 L 70 85 M 70 25 L -70 85" stroke="url(#brandGoldGrad)" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* Location Pin Ring at Bottom */}
              <ellipse cx="256" cy="440" rx="140" ry="16" fill="none" stroke="url(#brandGoldGrad)" strokeWidth="12" />
            </g>
          </svg>
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
            className={`font-semibold tracking-widest uppercase ${subtextSize} ${
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

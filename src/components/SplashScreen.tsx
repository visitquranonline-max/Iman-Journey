import React, { useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SplashScreenProps {
  language: Language;
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ language, onFinish }) => {
  const t = translations[language];

  // Auto transition after 3.2 seconds or user can tap anytime
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 text-white p-6 overflow-hidden select-none">
      {/* Decorative Floating Islamic Patterns */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-300/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl animate-pulse" />

      {/* Top Crescent / Bismillah */}
      <div className="pt-8 text-center animate-fade-in">
        <span className="text-2xl sm:text-3xl font-serif tracking-widest text-amber-200 opacity-90 drop-shadow-md">
          ﷽
        </span>
      </div>

      {/* Central Content */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-lg mx-auto my-auto z-10">
        {/* Animated Brand Logo Container */}
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl transform transition-transform duration-700 hover:scale-105">
          <BrandLogo size="xl" showSubtitle={true} lightMode={true} />
        </div>

        {/* Greeting Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-amber-100 font-serif drop-shadow-lg animate-bounce">
            {t.assalamuAlaikum}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-amber-50 opacity-95">
            {t.welcomeMessage}
          </p>
        </div>

        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 backdrop-blur-xs text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Islamic History Adventure</span>
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </div>
      </div>

      {/* Bottom Start Button & Loader */}
      <div className="pb-8 w-full max-w-xs text-center z-10 space-y-4">
        <button
          onClick={onFinish}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-white text-amber-900 hover:bg-amber-50 font-extrabold text-base rounded-2xl shadow-xl shadow-amber-900/30 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        >
          <span>{t.startJourney}</span>
          <ArrowRight className="w-5 h-5 text-amber-600" />
        </button>

        {/* Loading Progress Line */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-300 rounded-full animate-[progress_3s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

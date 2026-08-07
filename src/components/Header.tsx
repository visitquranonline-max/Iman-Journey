import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { Sparkles, Phone, Globe, BookOpen, RotateCcw, Smartphone } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAskAI: () => void;
  onOpenAcademy: () => void;
  onOpenInstallModal?: () => void;
  onResetProgress: () => void;
  completedCount: number;
  totalLessonsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenAskAI,
  onOpenAcademy,
  onOpenInstallModal,
  onResetProgress,
  completedCount,
  totalLessonsCount,
}) => {
  const t = translations[language];
  const progressPercent = Math.round((completedCount / Math.max(1, totalLessonsCount)) * 100);

  const installText = {
    en: 'Install App',
    ur: 'ایپ انسٹال کریں',
    ar: 'تثبيت التطبيق',
  }[language];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo */}
        <div className="cursor-pointer" onClick={onOpenAcademy}>
          <BrandLogo size="md" />
        </div>

        {/* Action Controls & Language Switcher */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Install Android App Button */}
          {onOpenInstallModal && (
            <button
              onClick={onOpenInstallModal}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              title={installText}
            >
              <Smartphone className="w-4 h-4 text-emerald-200" />
              <span className="whitespace-nowrap">{installText}</span>
            </button>
          )}

          {/* Ask Islam AI Button */}
          <button
            onClick={onOpenAskAI}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title={t.askIslamAI}
          >
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
            <span className="whitespace-nowrap">{t.askIslamAI}</span>
          </button>

          {/* Academy Info Button */}
          <button
            onClick={onOpenAcademy}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            title={t.academyInfo}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline whitespace-nowrap">{t.brandName}</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-bold">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ur')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'ur'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'ar'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              عربي
            </button>
          </div>

          {/* Progress Pill */}
          <div className="hidden md:flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-900">
            <span>{t.completed}:</span>
            <span className="font-bold text-amber-600">{progressPercent}%</span>
          </div>

          {/* Reset Progress Button */}
          <button
            onClick={onResetProgress}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
            title={t.resetProgress}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

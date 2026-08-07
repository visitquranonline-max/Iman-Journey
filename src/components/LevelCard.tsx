import React from 'react';
import { Level, Language } from '../types';
import { translations } from '../data/translations';
import { Lock, Unlock, CheckCircle, Sparkles, BookOpen, ChevronRight, Compass, Moon, Shield, GraduationCap } from 'lucide-react';

interface LevelCardProps {
  level: Level;
  language: Language;
  isUnlocked: boolean;
  isCompleted: boolean;
  completedLessonsInLevel: number;
  totalLessonsInLevel: number;
  onSelectLevel: (levelId: string) => void;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  language,
  isUnlocked,
  isCompleted,
  completedLessonsInLevel,
  totalLessonsInLevel,
  onSelectLevel,
}) => {
  const t = translations[language];
  const progressPercent = Math.round((completedLessonsInLevel / Math.max(1, totalLessonsInLevel)) * 100);

  // Map icon names to Lucide icons
  const renderIcon = () => {
    switch (level.icon) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-sky-600" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-purple-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <div
      onClick={() => isUnlocked && onSelectLevel(level.id)}
      className={`relative rounded-3xl p-6 border transition-all duration-300 ${
        isUnlocked
          ? 'bg-white border-amber-200/80 hover:border-amber-400 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer'
          : 'bg-slate-100/80 border-slate-200 opacity-75 cursor-not-allowed'
      }`}
    >
      {/* Top Banner & Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl ${isUnlocked ? 'bg-amber-100/80' : 'bg-slate-200'}`}>
            {renderIcon()}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              {t.level} {level.levelNumber}
            </span>
            <span className="ml-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              {level.badge[language]}
            </span>
          </div>
        </div>

        {/* Lock / Unlock / Complete Status */}
        <div>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              <CheckCircle className="w-3.5 h-3.5" />
              {t.completed}
            </span>
          ) : isUnlocked ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
              <Unlock className="w-3.5 h-3.5" />
              {t.unlocked}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-600">
              <Lock className="w-3.5 h-3.5" />
              {t.locked}
            </span>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">
        {level.title[language]}
      </h3>
      <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
        {level.description[language]}
      </p>

      {/* Progress Bar & Details */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex justify-between text-xs font-semibold text-slate-600">
          <span>{level.categories.length} {t.categories}</span>
          <span>{completedLessonsInLevel} / {totalLessonsInLevel} {t.lessons} ({progressPercent}%)</span>
        </div>

        {/* Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-400 to-amber-600'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Play Action Arrow */}
      {isUnlocked && (
        <div className="mt-4 flex items-center justify-end text-xs font-bold text-amber-600 hover:text-amber-700">
          <span className="mr-1">{t.startLesson}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

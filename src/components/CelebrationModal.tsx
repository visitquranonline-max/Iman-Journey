import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CelebrationModalProps {
  scorePercent: number;
  levelTitle?: string;
  isLevelCompleted?: boolean;
  language: Language;
  onContinue: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  scorePercent,
  levelTitle,
  isLevelCompleted = false,
  language,
  onContinue,
}) => {
  const t = translations[language];

  useEffect(() => {
    // Fire festive canvas confetti explosion!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  }, []);

  const getGradeInfo = (score: number) => {
    if (score >= 90) {
      return {
        label: t.gradeExcellent,
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        textColor: 'text-emerald-700',
      };
    } else if (score >= 75) {
      return {
        label: t.gradeVeryGood,
        badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
        textColor: 'text-blue-700',
      };
    } else if (score >= 60) {
      return {
        label: t.gradeGood,
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
        textColor: 'text-amber-700',
      };
    } else {
      return {
        label: t.gradeRevisionRequired,
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
        textColor: 'text-rose-700',
      };
    }
  };

  const gradeInfo = getGradeInfo(scorePercent);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-2 border-amber-300 space-y-6 relative overflow-hidden">
        {/* Top Gold Medal Icon */}
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30 transform animate-bounce">
          <Trophy className="w-10 h-10 text-amber-900" />
        </div>

        {/* Heading & Grade Badge */}
        <div className="space-y-2">
          <span className={`inline-flex items-center gap-1 px-3 py-1 font-extrabold text-xs rounded-full border ${gradeInfo.badgeBg}`}>
            <Sparkles className="w-3.5 h-3.5" />
            {gradeInfo.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            {t.congratulations}
          </h2>
          <p className="text-xs text-slate-600">
            {isLevelCompleted ? t.levelCompleted : t.greatJob}
          </p>
        </div>

        {/* Marks Card */}
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 grid grid-cols-2 gap-2 text-center">
          <div>
            <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">{t.marksObtained}</p>
            <p className={`text-2xl sm:text-3xl font-black ${gradeInfo.textColor}`}>{scorePercent} / 100</p>
          </div>
          <div className="border-l border-amber-200 pl-2">
            <p className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">{t.score}</p>
            <p className="text-2xl sm:text-3xl font-black text-amber-600">{scorePercent}%</p>
          </div>
        </div>

        {/* Islamic Educational Message */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-serif">
          "{t.islamicEducationalMessage}"
        </div>

        {/* Next Unlocked Notification */}
        {isLevelCompleted && (
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-center gap-2 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.unlockNextLevel}</span>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onContinue}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{t.continueToNextLevel}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

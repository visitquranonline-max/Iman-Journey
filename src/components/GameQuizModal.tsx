import React, { useState } from 'react';
import { QuizQuestion, Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, CheckCircle2, XCircle, HelpCircle, Gamepad2, ArrowRight, RotateCcw } from 'lucide-react';

interface GameQuizModalProps {
  questions: QuizQuestion[];
  lessonTitle: string;
  language: Language;
  onClose: () => void;
  onQuizComplete: (scorePercent: number) => void;
}

export const GameQuizModal: React.FC<GameQuizModalProps> = ({
  questions,
  lessonTitle,
  language,
  onClose,
  onQuizComplete,
}) => {
  const t = translations[language];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentIdx];

  const playSynthesizedSound = (isCorrect: boolean) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (isCorrect) {
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.15); // E5
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } else {
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        osc.frequency.setValueAtTime(196, audioCtx.currentTime + 0.15); // G3
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      }
    } catch {
      // Audio fallback
    }
  };

  const handleSelectOption = (optId: string, isCorrect: boolean) => {
    if (isAnswered) return;

    setSelectedOptId(optId);
    setIsAnswered(true);
    setShowExplanation(true);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      playSynthesizedSound(true);
    } else {
      playSynthesizedSound(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptId(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      const finalPercent = Math.round((correctCount / Math.max(1, questions.length)) * 100);
      onQuizComplete(finalPercent);
    }
  };

  if (!question) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200 space-y-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
            <Gamepad2 className="w-5 h-5" />
            <span>{t.quiz} ({currentIdx + 1}/{questions.length})</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Question Heading */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif leading-snug">
            {question.question[language]}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {question.options?.map((opt) => {
            const isSelected = selectedOptId === opt.id;
            let btnStyle = 'bg-amber-50/60 border-amber-200 text-slate-800 hover:bg-amber-100/80';

            if (isAnswered) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold shadow-xs';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'bg-rose-100 border-rose-300 text-rose-900 font-bold';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                disabled={isAnswered}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-sm font-semibold transition-all duration-200 cursor-pointer text-left ${btnStyle}`}
              >
                <span>{opt.text[language]}</span>
                {isAnswered && opt.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
                {isAnswered && isSelected && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation */}
        {showExplanation && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1 animate-fade-in">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{selectedOptId && question.options?.find(o => o.id === selectedOptId)?.isCorrect ? t.excellent : t.learnMore}</span>
            </p>
            <p className="leading-relaxed opacity-90">{question.explanation[language]}</p>
          </div>
        )}

        {/* Footer Next Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md cursor-pointer"
            >
              <span>{currentIdx < questions.length - 1 ? t.nextStep : t.submitAnswer}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Lesson, Language } from '../types';
import { translations } from '../data/translations';
import { ArrowLeft, Volume2, VolumeX, Sparkles, CheckCircle2, Gamepad2, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  categoryTitle: string;
  levelTitle: string;
  language: Language;
  onBack: () => void;
  onStartQuiz: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  categoryTitle,
  levelTitle,
  language,
  onBack,
  onStartQuiz,
}) => {
  const t = translations[language];
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const dialogue = lesson.dialogues[currentStep];

  // Speech synthesis read aloud support
  const handleSpeechReadAloud = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = dialogue.speech[language];
    const utterance = new SpeechSynthesisUtterance(textToRead);

    if (language === 'ur') utterance.lang = 'ur-PK';
    else if (language === 'ar') utterance.lang = 'ar-SA';
    else utterance.lang = 'en-US';

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    window.speechSynthesis?.cancel();
    setIsPlayingAudio(false);
  }, [currentStep, language]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
        <button
          onClick={onBack}
          className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          title={t.backToCategories}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600">
            {levelTitle} • {categoryTitle}
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
            {lesson.title[language]}
          </h2>
        </div>

        {/* Read Aloud Button */}
        <button
          onClick={handleSpeechReadAloud}
          className={`p-2.5 rounded-2xl border transition-colors cursor-pointer ${
            isPlayingAudio
              ? 'bg-amber-500 text-white border-amber-600 shadow-md animate-pulse'
              : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
          }`}
          title={isPlayingAudio ? t.stopAudio : t.listenAudio}
        >
          {isPlayingAudio ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Interactive Animated Character Dialogue Box */}
      <div className="bg-gradient-to-b from-amber-500/10 via-amber-400/5 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg relative overflow-hidden space-y-6">
        {/* Progress Dots */}
        <div className="flex items-center justify-between text-xs font-bold text-amber-800">
          <span>{t.lessons} {currentStep + 1} / {lesson.dialogues.length}</span>
          <div className="flex gap-1.5">
            {lesson.dialogues.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentStep ? 'w-6 bg-amber-500' : 'w-2 bg-amber-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Character Card & Speech Bubble */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
          {/* Avatar Graphic */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-100 border-4 border-white shadow-xl flex items-center justify-center text-4xl sm:text-5xl transform transition-transform duration-300 hover:scale-110">
              {dialogue.avatar}
            </div>
            <span className="mt-2 text-xs font-black uppercase tracking-wider px-3 py-1 bg-amber-500 text-white rounded-full shadow-xs">
              {dialogue.characterName[language]}
            </span>
          </div>

          {/* Dialogue Speech Bubble */}
          <div className="flex-1 bg-white p-6 rounded-3xl border border-amber-200 shadow-md relative w-full space-y-3">
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-serif">
              "{dialogue.speech[language]}"
            </p>

            {/* Key Highlight inside Dialogue */}
            {dialogue.keyPoint && (
              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{dialogue.keyPoint[language]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-amber-200/60">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm cursor-pointer ${
              currentStep === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.previousStep}</span>
          </button>

          {currentStep < lesson.dialogues.length - 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => Math.min(lesson.dialogues.length - 1, prev + 1))}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md cursor-pointer"
            >
              <span>{t.nextStep}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onStartQuiz}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-500/25 animate-bounce cursor-pointer"
            >
              <Gamepad2 className="w-5 h-5 text-emerald-200" />
              <span>{t.startQuiz}</span>
            </button>
          )}
        </div>
      </div>

      {/* Important Points Recap */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span>{t.keyPoints}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lesson.importantPoints.map((pt, idx) => (
            <div key={idx} className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/60 flex items-start gap-2.5 text-xs font-semibold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{pt[language]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

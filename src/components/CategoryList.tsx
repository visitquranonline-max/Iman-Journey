import React from 'react';
import { Level, Category, Lesson, Language } from '../types';
import { translations } from '../data/translations';
import { ArrowLeft, BookOpen, CheckCircle, Play, Lock, ChevronRight } from 'lucide-react';

interface CategoryListProps {
  level: Level;
  language: Language;
  completedLessons: string[];
  onBack: () => void;
  onSelectLesson: (categoryId: string, lessonId: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  level,
  language,
  completedLessons,
  onBack,
  onSelectLesson,
}) => {
  const t = translations[language];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header & Back Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer"
          title={t.backToLevels}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            {t.level} {level.levelNumber}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            {level.title[language]}
          </h2>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {level.categories.map((cat) => {
          const catLessons = cat.lessons;
          const completedInCat = catLessons.filter((l) => completedLessons.includes(l.id)).length;
          const isCatCompleted = catLessons.length > 0 && completedInCat === catLessons.length;

          return (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center font-black text-amber-800 text-sm">
                    #{cat.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      {cat.title[language]}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {completedInCat} / {catLessons.length} {t.lessons} {t.completed}
                    </p>
                  </div>
                </div>

                {isCatCompleted && (
                  <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-full">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {cat.description[language]}
              </p>

              {/* Lessons List in Category */}
              <div className="space-y-2 pt-2">
                {catLessons.map((lesson) => {
                  const isFinished = completedLessons.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(cat.id, lesson.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all duration-150 cursor-pointer ${
                        isFinished
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900 hover:bg-emerald-100/80'
                          : 'bg-amber-50/50 border-amber-200/60 text-slate-800 hover:bg-amber-100/70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-xl ${isFinished ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-900'}`}>
                          {isFinished ? <CheckCircle className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                        </span>
                        <div>
                          <p className="font-bold">{lesson.title[language]}</p>
                          <p className="text-[11px] opacity-75 font-normal">{lesson.estimatedMinutes} mins</p>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

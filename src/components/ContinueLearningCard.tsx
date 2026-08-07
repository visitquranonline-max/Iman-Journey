import React from 'react';
import { Level, Category, Lesson, Language } from '../types';
import { translations } from '../data/translations';
import { Play, Sparkles, BookOpen, Clock } from 'lucide-react';

interface ContinueLearningCardProps {
  level: Level;
  category: Category;
  lesson: Lesson;
  language: Language;
  onStartLesson: (levelId: string, categoryId: string, lessonId: string) => void;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  level,
  category,
  lesson,
  language,
  onStartLesson,
}) => {
  const t = translations[language];

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-amber-500/20 relative overflow-hidden border border-amber-300/30 transition-transform duration-300 hover:scale-[1.01]">
      {/* Decorative Gold Glow */}
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2 max-w-xl">
          {/* Badge & Label */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-100">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              {t.continueLearning}
            </span>
            <span className="text-xs font-semibold text-amber-200">
              {t.level} {level.levelNumber}: {level.title[language]}
            </span>
          </div>

          {/* Lesson Title */}
          <h2 className="text-xl sm:text-2xl font-black text-white font-serif tracking-tight">
            {lesson.title[language]}
          </h2>

          {/* Category & Minutes */}
          <div className="flex items-center gap-4 text-xs font-medium text-amber-100">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-yellow-300" />
              {category.title[language]}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-yellow-300" />
              {lesson.estimatedMinutes} mins
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onStartLesson(level.id, category.id, lesson.id)}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-amber-900 hover:bg-amber-50 font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-amber-900/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
        >
          <Play className="w-5 h-5 fill-amber-600 text-amber-600" />
          <span>{t.resumeLesson}</span>
        </button>
      </div>
    </div>
  );
};

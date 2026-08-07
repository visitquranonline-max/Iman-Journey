import React, { useState, useEffect } from 'react';
import { levelsData } from './data/levelsData';
import { Language, UserProgress, Level, Category, Lesson } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { SplashScreen } from './components/SplashScreen';
import { ContinueLearningCard } from './components/ContinueLearningCard';
import { LevelCard } from './components/LevelCard';
import { CategoryList } from './components/CategoryList';
import { LessonView } from './components/LessonView';
import { GameQuizModal } from './components/GameQuizModal';
import { CelebrationModal } from './components/CelebrationModal';
import { AskIslamAIModal } from './components/AskIslamAIModal';
import { AcademyModal } from './components/AcademyModal';
import { InstallAndroidModal } from './components/InstallAndroidModal';
import { Sparkles, Phone, Globe, BookOpen } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'visit_quran_app_progress_v1';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [showSplash, setShowSplash] = useState(true);

  // Active view state
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  // Modals state
  const [showAskAI, setShowAskAI] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);
  const [quizScore, setQuizScore] = useState(100);

  // Saved Progress State
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return {
      currentLevelId: 'lvl1',
      currentCategoryId: 'lvl1_cat1',
      currentLessonId: 'lvl1_cat1_les1',
      completedLessons: [],
      completedCategories: [],
      completedLevels: [],
      quizScores: {},
      lastUpdated: new Date().toISOString(),
    };
  });

  // Save progress changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage errors
    }
  }, [progress]);

  // Adjust document direction for RTL languages (Urdu/Arabic)
  useEffect(() => {
    if (language === 'ur' || language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  // Calculate total lessons and completed count
  const allLessons = levelsData.flatMap((lvl) =>
    lvl.categories.flatMap((cat) => cat.lessons)
  );
  const completedCount = progress.completedLessons.length;
  const totalLessonsCount = allLessons.length;

  // Find last unfinished lesson or active lesson for Continue Learning Card
  const getLastUnfinishedLessonDetails = () => {
    for (const lvl of levelsData) {
      for (const cat of lvl.categories) {
        for (const les of cat.lessons) {
          if (!progress.completedLessons.includes(les.id)) {
            return { level: lvl, category: cat, lesson: les };
          }
        }
      }
    }
    // Default to first lesson if all finished
    const firstLvl = levelsData[0];
    const firstCat = firstLvl.categories[0];
    const firstLes = firstCat.lessons[0];
    return { level: firstLvl, category: firstCat, lesson: firstLes };
  };

  const continueDetails = getLastUnfinishedLessonDetails();

  // Helper to start a specific lesson
  const handleStartLesson = (levelId: string, categoryId: string, lessonId: string) => {
    setSelectedLevelId(levelId);
    setSelectedCategoryId(categoryId);
    setSelectedLessonId(lessonId);
    // Update last accessed
    setProgress((prev) => ({
      ...prev,
      currentLevelId: levelId,
      currentCategoryId: categoryId,
      currentLessonId: lessonId,
      lastUpdated: new Date().toISOString(),
    }));
  };

  // Check if a level is unlocked
  const isLevelUnlocked = (levelNumber: number) => {
    if (levelNumber === 1) return true;
    const prevLevelId = `lvl${levelNumber - 1}`;
    // Level N is unlocked if level N-1 is completed or has completed lessons
    const prevLevel = levelsData.find((l) => l.id === prevLevelId);
    if (!prevLevel) return false;

    const prevLevelLessonIds = prevLevel.categories.flatMap((c) => c.lessons.map((l) => l.id));
    const completedInPrev = prevLevelLessonIds.filter((id) => progress.completedLessons.includes(id)).length;
    return completedInPrev >= Math.ceil(prevLevelLessonIds.length * 0.5) || progress.completedLevels.includes(prevLevelId);
  };

  // Reset Progress
  const handleResetProgress = () => {
    if (window.confirm(translations[language].resetConfirm)) {
      const resetState: UserProgress = {
        currentLevelId: 'lvl1',
        currentCategoryId: 'lvl1_cat1',
        currentLessonId: 'lvl1_cat1_les1',
        completedLessons: [],
        completedCategories: [],
        completedLevels: [],
        quizScores: {},
        lastUpdated: new Date().toISOString(),
      };
      setProgress(resetState);
      setSelectedLevelId(null);
      setSelectedCategoryId(null);
      setSelectedLessonId(null);
    }
  };

  // Handle Quiz Completion
  const handleQuizComplete = (scorePercent: number) => {
    setShowQuizModal(false);
    setQuizScore(scorePercent);

    if (selectedLessonId && selectedLevelId) {
      // Mark lesson completed
      const newCompletedLessons = Array.from(new Set([...progress.completedLessons, selectedLessonId]));
      
      // Check if current level is completed
      const currentLvl = levelsData.find((l) => l.id === selectedLevelId);
      let newCompletedLevels = [...progress.completedLevels];

      if (currentLvl) {
        const currentLvlLessonIds = currentLvl.categories.flatMap((c) => c.lessons.map((l) => l.id));
        const allFinished = currentLvlLessonIds.every((id) => newCompletedLessons.includes(id));
        if (allFinished) {
          newCompletedLevels = Array.from(new Set([...newCompletedLevels, selectedLevelId]));
        }
      }

      setProgress((prev) => ({
        ...prev,
        completedLessons: newCompletedLessons,
        completedLevels: newCompletedLevels,
        quizScores: { ...prev.quizScores, [selectedLessonId]: scorePercent },
      }));

      setShowCelebrationModal(true);
    }
  };

  // Find active level, category, and lesson objects
  const activeLevel = levelsData.find((l) => l.id === selectedLevelId);
  const activeCategory = activeLevel?.categories.find((c) => c.id === selectedCategoryId);
  const activeLesson = activeCategory?.lessons.find((l) => l.id === selectedLessonId);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased flex flex-col selection:bg-amber-500 selection:text-white">
      {/* Animated Splash Opening Screen */}
      {showSplash ? (
        <SplashScreen language={language} onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Persistent Navbar */}
          <Header
            language={language}
            onLanguageChange={setLanguage}
            onOpenAskAI={() => setShowAskAI(true)}
            onOpenAcademy={() => setShowAcademy(true)}
            onOpenInstallModal={() => setShowInstallModal(true)}
            onResetProgress={handleResetProgress}
            completedCount={completedCount}
            totalLessonsCount={totalLessonsCount}
          />

          {/* Main Content Viewport */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 space-y-8">
            {/* VIEW 1: Active Lesson View */}
            {activeLevel && activeCategory && activeLesson ? (
              <LessonView
                lesson={activeLesson}
                categoryTitle={activeCategory.title[language]}
                levelTitle={activeLevel.title[language]}
                language={language}
                onBack={() => setSelectedLessonId(null)}
                onStartQuiz={() => setShowQuizModal(true)}
              />
            ) : activeLevel ? (
              /* VIEW 2: Categories View inside Level */
              <CategoryList
                level={activeLevel}
                language={language}
                completedLessons={progress.completedLessons}
                onBack={() => setSelectedLevelId(null)}
                onSelectLesson={(catId, lesId) => handleStartLesson(activeLevel.id, catId, lesId)}
              />
            ) : (
              /* VIEW 3: Home View (Continue Card + Levels Grid) */
              <div className="space-y-8 animate-fade-in">
                {/* Continue Learning Banner */}
                {continueDetails && (
                  <ContinueLearningCard
                    level={continueDetails.level}
                    category={continueDetails.category}
                    lesson={continueDetails.lesson}
                    language={language}
                    onStartLesson={handleStartLesson}
                  />
                )}

                {/* Levels Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
                        {translations[language].levels}
                      </h2>
                      <p className="text-xs text-slate-500">
                        Start from Level 1 and unlock higher knowledge step by step
                      </p>
                    </div>
                  </div>

                  {/* Level Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {levelsData.map((level) => {
                      const unlocked = isLevelUnlocked(level.levelNumber);
                      const levelLessonIds = level.categories.flatMap((c) => c.lessons.map((l) => l.id));
                      const completedInLevel = levelLessonIds.filter((id) => progress.completedLessons.includes(id)).length;
                      const completed = levelLessonIds.length > 0 && completedInLevel === levelLessonIds.length;

                      return (
                        <LevelCard
                          key={level.id}
                          level={level}
                          language={language}
                          isUnlocked={unlocked}
                          isCompleted={completed}
                          completedLessonsInLevel={completedInLevel}
                          totalLessonsInLevel={levelLessonIds.length}
                          onSelectLevel={(lvlId) => setSelectedLevelId(lvlId)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-slate-200 mt-12 py-6 px-4 text-center text-xs text-slate-500 space-y-2">
            <div className="flex items-center justify-center gap-4 text-slate-600 font-semibold">
              <a href="https://www.visitquran.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                <span>www.visitquran.com</span>
              </a>
              <span>•</span>
              <a href="https://wa.me/15098839575" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>+15098839575</span>
              </a>
            </div>
            <p>© {new Date().getFullYear()} Visit Quran Online Academy • Islamic History Adventure</p>
          </footer>

          {/* Quiz / Game Modal */}
          {showQuizModal && activeLesson && (
            <GameQuizModal
              questions={activeLesson.quiz}
              lessonTitle={activeLesson.title[language]}
              language={language}
              onClose={() => setShowQuizModal(false)}
              onQuizComplete={handleQuizComplete}
            />
          )}

          {/* Celebration Level Completion Modal */}
          {showCelebrationModal && (
            <CelebrationModal
              scorePercent={quizScore}
              language={language}
              onContinue={() => {
                setShowCelebrationModal(false);
                setSelectedLessonId(null);
              }}
            />
          )}

          {/* Ask Islam AI Modal */}
          {showAskAI && (
            <AskIslamAIModal
              language={language}
              onClose={() => setShowAskAI(false)}
              onOpenAcademy={() => {
                setShowAskAI(false);
                setShowAcademy(true);
              }}
            />
          )}

          {/* Visit Quran Academy Modal */}
          {showAcademy && (
            <AcademyModal
              language={language}
              onClose={() => setShowAcademy(false)}
            />
          )}

          {/* Install Android App Modal */}
          <InstallAndroidModal
            isOpen={showInstallModal}
            onClose={() => setShowInstallModal(false)}
            language={language}
          />
        </>
      )}
    </div>
  );
}

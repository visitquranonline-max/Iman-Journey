export type Language = 'en' | 'ur' | 'ar';

export interface DialogueStep {
  id: string;
  character: 'zayd' | 'maryam' | 'tariq'; // Friendly guides
  characterName: { en: string; ur: string; ar: string };
  avatar: string;
  speech: { en: string; ur: string; ar: string };
  sceneIllustration: string; // Icon or SVG theme
  keyPoint?: { en: string; ur: string; ar: string };
}

export interface QuizQuestion {
  id: string;
  type: 'mcq' | 'true_false' | 'drag_drop' | 'memory' | 'matching' | 'story_challenge';
  question: { en: string; ur: string; ar: string };
  explanation: { en: string; ur: string; ar: string };
  
  // MCQ / True_False
  options?: { id: string; text: { en: string; ur: string; ar: string }; isCorrect: boolean }[];
  
  // Drag Drop / Ordering
  itemsToOrder?: { id: string; text: { en: string; ur: string; ar: string }; correctIndex: number }[];
  
  // Memory cards
  memoryPairs?: { id: string; term: { en: string; ur: string; ar: string }; match: { en: string; ur: string; ar: string } }[];
  
  // Matching pairs
  leftItems?: { id: string; text: { en: string; ur: string; ar: string } }[];
  rightItems?: { id: string; text: { en: string; ur: string; ar: string }; matchId: string }[];
}

export interface Lesson {
  id: string;
  title: { en: string; ur: string; ar: string };
  summary: { en: string; ur: string; ar: string };
  estimatedMinutes: number;
  dialogues: DialogueStep[];
  importantPoints: { en: string; ur: string; ar: string }[];
  quiz: QuizQuestion[];
}

export interface Category {
  id: string;
  number: number;
  title: { en: string; ur: string; ar: string };
  description: { en: string; ur: string; ar: string };
  iconName: string;
  badgeColor: string;
  lessons: Lesson[];
}

export interface Level {
  id: string;
  levelNumber: number;
  title: { en: string; ur: string; ar: string };
  description: { en: string; ur: string; ar: string };
  themeBg: string;
  cardColor: string;
  badge: { en: string; ur: string; ar: string };
  icon: string;
  categories: Category[];
}

export interface UserProgress {
  currentLevelId: string;
  currentCategoryId: string;
  currentLessonId: string;
  completedLessons: string[]; // lesson ids e.g. "lvl1_cat1_les1"
  completedCategories: string[]; // cat ids e.g. "lvl1_cat1"
  completedLevels: string[]; // level ids e.g. "lvl1"
  quizScores: Record<string, number>; // lessonId -> max score percentage
  lastUpdated: string;
}

export interface AcademyInfo {
  name: string;
  website: string;
  whatsapp: string;
  email: string;
  tagline: { en: string; ur: string; ar: string };
  description: { en: string; ur: string; ar: string };
  courses: { en: string; ur: string; ar: string }[];
}

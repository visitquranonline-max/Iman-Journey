import { Level } from '../types';
import { chapter1 } from './level1/chapter1';
import { chapter2 } from './level1/chapter2';
import { chapter3 } from './level1/chapter3';
import { chapter4 } from './level1/chapter4';
import { chapter5 } from './level1/chapter5';
import { chapter6 } from './level1/chapter6';
import { chapter7 } from './level1/chapter7';
import { chapter8 } from './level1/chapter8';
import { chapter9 } from './level1/chapter9';
import { chapter10 } from './level1/chapter10';

import { chapter1 as l2_chapter1 } from './level2/chapter1';
import { chapter2 as l2_chapter2 } from './level2/chapter2';
import { chapter3 as l2_chapter3 } from './level2/chapter3';
import { chapter4 as l2_chapter4 } from './level2/chapter4';
import { chapter5 as l2_chapter5 } from './level2/chapter5';
import { chapter6 as l2_chapter6 } from './level2/chapter6';
import { chapter7 as l2_chapter7 } from './level2/chapter7';
import { chapter8 as l2_chapter8 } from './level2/chapter8';
import { chapter9 as l2_chapter9 } from './level2/chapter9';
import { chapter10 as l2_chapter10 } from './level2/chapter10';

export const levelsData: Level[] = [
  // LEVEL 1
  {
    id: 'lvl1',
    levelNumber: 1,
    title: {
      en: 'Level 1: Islamic Foundation',
      ur: 'لیول 1: اسلامی بنیادیں',
      ar: 'المستوى 1: الأساس الإسلامي',
    },
    description: {
      en: 'Master 10 essential chapters covering Tawheed, Islam, Iman, Angels, Prophets, Quran, Akhirah, Jannah, Akhlaq, and Prophet Muhammad ﷺ.',
      ur: 'توحید، اسلام، ایمان، فرشتوں، انبیاء، قرآن، آخرت، جنت، اخلاق اور سیرتِ مصطفیٰ ﷺ پر مشتمل 10 بنیادی ابواب مکمل کریں۔',
      ar: 'إتقان 10 فصول أساسية تغطي التوحيد، الإسلام، الإيمان، الملائكة، الأنبياء، القرآن، الآخرة، الجنة، الأخلاق، والسيرة النبوية.',
    },
    themeBg: 'from-amber-500/20 via-yellow-400/10 to-amber-100',
    cardColor: 'bg-amber-500',
    badge: { en: 'Islamic Foundation (10 Chapters)', ur: 'اسلامی بنیادیں (10 ابواب)', ar: 'الأساس الإسلامي (10 فصول)' },
    icon: 'Sparkles',
    categories: [
      chapter1,
      chapter2,
      chapter3,
      chapter4,
      chapter5,
      chapter6,
      chapter7,
      chapter8,
      chapter9,
      chapter10,
    ],
  },

  // LEVEL 2
  {
    id: 'lvl2',
    levelNumber: 2,
    title: {
      en: 'Level 2: Intermediate Understanding',
      ur: 'لیول 2: درمیانی تفہیم',
      ar: 'المستوى 2: الفهم المتوسط',
    },
    description: {
      en: 'Deepen your knowledge across all 10 core Islamic chapters with detailed lessons, rich story explanations, and 20-question quiz challenges.',
      ur: 'تمام 10 بنیادی ابواب کی تفصیلی اسباق، کہانیوں اور 20 سوالات کے کوئزز کے ساتھ گہری اسلامی معلومات حاصل کریں۔',
      ar: 'تعميق المعرفة في 10 فصول إسلامية مع دروس مفصلة وقصص تربوية واختبارات من 20 سؤالاً.',
    },
    themeBg: 'from-emerald-500/20 via-teal-400/10 to-emerald-100',
    cardColor: 'bg-emerald-600',
    badge: { en: 'Intermediate (10 Chapters)', ur: 'درمیانی سطح (10 ابواب)', ar: 'المستوى المتوسط (10 فصول)' },
    icon: 'Compass',
    categories: [
      l2_chapter1,
      l2_chapter2,
      l2_chapter3,
      l2_chapter4,
      l2_chapter5,
      l2_chapter6,
      l2_chapter7,
      l2_chapter8,
      l2_chapter9,
      l2_chapter10,
    ],
  },

  // LEVEL 3
  {
    id: 'lvl3',
    levelNumber: 3,
    title: {
      en: 'Life of Prophet Muhammad ﷺ',
      ur: 'سیرتِ مصطفیٰ ﷺ',
      ar: 'السيرة النبوية الشريفة ﷺ',
    },
    description: {
      en: 'Explore the noble life, character, revelations, Hijrah, and triumph of Prophet Muhammad ﷺ.',
      ur: 'نبی کریم ﷺ کے مبارک بچپن، بعثت، ہجرت اور فتح مکہ کے ایمان افروز واقعات۔',
      ar: 'استكشف السيرة العطرة للنبي الكريم ﷺ من المولد حتى فتح مكة والوداع.',
    },
    themeBg: 'from-sky-500/20 via-blue-400/10 to-sky-100',
    cardColor: 'bg-sky-600',
    badge: { en: 'Core Knowledge', ur: 'بنیادی علم', ar: 'معرفة أساسية' },
    icon: 'Moon',
    categories: [
      {
        id: 'lvl3_cat1',
        number: 1,
        title: { en: 'Blessed Childhood & Al-Amin', ur: 'مبارک بچپن اور الامین', ar: 'الطفولة المباركة والأمين' },
        description: {
          en: 'Birth in Makkah, truthfulness, and honesty before prophethood.',
          ur: 'مکہ مکرمہ میں ولادت، سچائی اور قبل از نبوت امانت داری۔',
          ar: 'مولده بمكة وصدقه وأمانته قبل النبوة.',
        },
        iconName: 'Heart',
        badgeColor: 'bg-sky-600',
        lessons: [
          {
            id: 'lvl3_cat1_les1',
            title: { en: 'The Trustworthy (Al-Amin)', ur: 'صادق اور امین نبی', ar: 'الصادق الأمين ﷺ' },
            summary: {
              en: 'Even before prophethood, the people of Makkah called Prophet Muhammad ﷺ "As-Sadiq" (The Truthful) and "Al-Amin" (The Trustworthy).',
              ur: 'اعلانِ نبوت سے پہلے بھی اہل مکہ آپ ﷺ کو الصادق اور الامین کے لقب سے پکارتے تھے۔',
              ar: 'كان أهل مكة يلقبون النبي ﷺ قبل النبوة بالصادق الأمين لعظيم أمانته.',
            },
            estimatedMinutes: 4,
            dialogues: [
              {
                id: 'd1',
                character: 'zayd',
                characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
                avatar: '👦',
                speech: {
                  en: 'People would leave their precious possessions with Prophet Muhammad ﷺ because he never lied or broke a trust!',
                  ur: 'لوگ اپنی قیمتی چیزیں آپ ﷺ کے پاس امانت رکھتے تھے کیونکہ آپ کبھی جھوٹ نہیں بولتے تھے۔',
                  ar: 'كان الناس يضعون أماناتهم الثمينة عند النبي ﷺ لأنه لم يكذب قط ولم يخُن الأمانة!',
                },
                sceneIllustration: 'Heart',
              },
            ],
            importantPoints: [
              {
                en: 'Born in the Year of the Elephant in Makkah.',
                ur: 'مکہ مکرمہ میں عام الفیل کے سال ولادت ہوئی۔',
                ar: 'ولد ﷺ بمكة المكرمة في عام الفيل.',
              },
              {
                en: 'Known for outstanding character and truthfulness.',
                ur: 'اعلیٰ اخلاق اور سچائی کی وجہ سے مشہور تھے۔',
                ar: 'عُرف بأخلاقه العالية وصدقه العظيم.',
              },
            ],
            quiz: [
              {
                id: 'q1',
                type: 'mcq',
                question: {
                  en: 'What titles did the people of Makkah give to Prophet Muhammad ﷺ before prophethood?',
                  ur: 'اہل مکہ نے نبوت سے پہلے آپ ﷺ کو کیا القابات دیے؟',
                  ar: 'ما اللقب الذي أطلقه أهل مكة على النبي ﷺ قبل النبوة؟',
                },
                explanation: {
                  en: 'He was renowned as As-Sadiq (The Truthful) and Al-Amin (The Trustworthy).',
                  ur: 'آپ الصادق اور الامین کے القابات سے مشہور تھے۔',
                  ar: 'عرف بالصادق الأمين.',
                },
                options: [
                  { id: 'opt1', text: { en: 'As-Sadiq and Al-Amin', ur: 'الصادق اور الامین', ar: 'الصادق الأمين' }, isCorrect: true },
                  { id: 'opt2', text: { en: 'Al-Farooq', ur: 'الفاروق', ar: 'الفاروق' }, isCorrect: false },
                  { id: 'opt3', text: { en: 'Dhul-Nurayn', ur: 'ذو النورین', ar: 'ذو النورين' }, isCorrect: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'lvl3_cat2',
        number: 2,
        title: { en: 'First Revelation at Cave Hira', ur: 'غارِ حرا میں پہلی وحی', ar: 'نزول الوحي في غار حراء' },
        description: {
          en: 'Angel Jibril bringing the first verse of the Holy Quran: "Iqra!" (Read!).',
          ur: 'حضرت جبرائیل علیہ السلام کا قرآنی وحی "اقرأ" لانے کا ایمان افروز واقعہ۔',
          ar: 'نزول جبريل عليه السلام بأول آية من القرآن الكريم: "اقرأ".',
        },
        iconName: 'Book',
        badgeColor: 'bg-sky-600',
        lessons: [
          {
            id: 'lvl3_cat2_les1',
            title: { en: 'The Dawn of Prophethood', ur: 'طلوعِ صبحِ نبوت', ar: 'بزوغ فجر النبوة' },
            summary: {
              en: 'At age 40, in Cave Hira, Angel Jibril visited Prophet Muhammad ﷺ with the first revelation of Surah Al-Alaq: "Iqra bismi Rabbikal ladhee khalaq!"',
              ur: '40 سال کی عمر میں غار حرا میں حضرت جبرائیل سورہ العلق کی شروعاتی آیات لے کر نازل ہوئے۔',
              ar: 'في سن الأربعين بغار حراء، نزل جبريل عليه السلام بأول آيات سورة العلق: "اقرأ باسم ربك الذي خلق".',
            },
            estimatedMinutes: 4,
            dialogues: [
              {
                id: 'd1',
                character: 'maryam',
                characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
                avatar: '👧',
                speech: {
                  en: 'The very first word revealed from the Quran was "Iqra!", which means "Read!" in the name of your Lord.',
                  ur: 'قرآن مجید کا سب سے پہلا نازل ہونے والا لفظ "اقرأ" تھا، جس کا مطلب ہے "پڑھو" اپنے رب کے نام سے۔',
                  ar: 'أول كلمة نزلت من القرآن الكريم هي "اقرأ"، أي اقرأ باسم ربك الذي خلق.',
                },
                sceneIllustration: 'BookOpen',
              },
            ],
            importantPoints: [
              {
                en: 'Mother Khadijah (RA) supported the Prophet ﷺ with immense comfort.',
                ur: 'حضرت خدیجہ رضی اللہ عنہا نے نبی کریم ﷺ کا دلی تسلی کے ساتھ ساتھ دیا۔',
                ar: 'طمأنت أم المؤمنين خديجة رضي الله عنها النبي ﷺ ودعمته بكل قوة.',
              },
            ],
            quiz: [
              {
                id: 'q1',
                type: 'mcq',
                question: {
                  en: 'What was the very first word revealed of the Quran?',
                  ur: 'قرآن مجید کا نازل ہونے والا سب سے پہلا لفظ کون سا تھا؟',
                  ar: 'ما هي أول كلمة نزلت من القرآن الكريم؟',
                },
                explanation: {
                  en: '"Iqra" meaning "Read!" was the first divine command revealed.',
                  ur: '"اقرأ" یعنی پڑھو! سب سے پہلا حکم تھا۔',
                  ar: '"اقرأ" كانت أول كلمة في الوحي.',
                },
                options: [
                  { id: 'opt1', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
                  { id: 'opt2', text: { en: 'Iqra (Read!)', ur: 'اقرأ (پڑھو!)', ar: 'اقرأ' }, isCorrect: true },
                  { id: 'opt3', text: { en: 'Alhamdulillah', ur: 'الحمد للہ', ar: 'الحمد لله' }, isCorrect: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // LEVEL 4
  {
    id: 'lvl4',
    levelNumber: 4,
    title: {
      en: 'Sahabah Stories',
      ur: 'قصص الصحابہ کرام',
      ar: 'قصص الصحابة الكرام',
    },
    description: {
      en: 'Learn from the heroic, generous, and faithful companions of Prophet Muhammad ﷺ.',
      ur: 'صحابہ کرام رضی اللہ عنہم کی قربانیوں، سخاوت اور شجاعت کے سبق آموز واقعات۔',
      ar: 'تعلم من سير الصحابة الكرام والأئمة الأعلام في الفضل والشجاعة والإيمان.',
    },
    themeBg: 'from-purple-500/20 via-indigo-400/10 to-purple-100',
    cardColor: 'bg-purple-600',
    badge: { en: 'Heroes of Faith', ur: 'ایمان کے ہیرو', ar: 'أبطال الإيمان' },
    icon: 'Shield',
    categories: [
      {
        id: 'lvl4_cat1',
        number: 1,
        title: { en: 'Abu Bakr As-Siddiq (RA)', ur: 'حضرت ابو بکر صدیق رضی اللہ عنہ', ar: 'أبو بكر الصديق رضي الله عنه' },
        description: {
          en: 'The Truthful Companion, First Caliph of Islam.',
          ur: 'سچے ساتھی اور اسلام کے پہلے خلیفہ راشد۔',
          ar: 'الصديق الوفي وأول الخلفاء الراشدين.',
        },
        iconName: 'Shield',
        badgeColor: 'bg-purple-600',
        lessons: [
          {
            id: 'lvl4_cat1_les1',
            title: { en: 'Loyalty & As-Siddiq Title', ur: 'وفاداری اور صدیق کا لقب', ar: 'الوفاء ولقب الصديق' },
            summary: {
              en: 'Abu Bakr (RA) was the first adult male to accept Islam without hesitation and stood by the Prophet ﷺ during the Journey of Isra wal Mi\'raj.',
              ur: 'حضرت ابو بکر صدیق اسلام قبول کرنے والے پہلے مرد تھے اور واقعہ معراج پر سب سے پہلے تصدیق کی۔',
              ar: 'كان أبو بكر أول من آمن من الرجال وصدق النبي ﷺ في حادثة الإسراء والمعراج فوراً.',
            },
            estimatedMinutes: 4,
            dialogues: [
              {
                id: 'd1',
                character: 'tariq',
                characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
                avatar: '👳‍♂️',
                speech: {
                  en: 'Abu Bakr (RA) earned the title "As-Siddiq" (The Truthful) because he believed the Prophet ﷺ instantly without any doubt!',
                  ur: 'حضرت ابو بکر کو "صدیق" کا لقب ملا کیونکہ انہوں نے بغیر کسی ہچکچاہٹ کے نبی ﷺ کی بات کی تصدیق کی۔',
                  ar: 'لقب أبو بكر بالصديق لأنه صدّق النبي ﷺ فوراً دون تردد!',
                },
                sceneIllustration: 'Shield',
              },
            ],
            importantPoints: [
              {
                en: 'Accompanied Prophet Muhammad ﷺ during the Hijrah to Madinah.',
                ur: 'مدینہ منورہ کی طرف ہجرت کے دوران نبی کریم ﷺ کے ساتھ غار ثور میں موجود رہے۔',
                ar: 'رافق النبي ﷺ في الهجرة إلى المدينة في غار ثور.',
              },
            ],
            quiz: [
              {
                id: 'q1',
                type: 'mcq',
                question: {
                  en: 'Who was the First Caliph of Islam after Prophet Muhammad ﷺ?',
                  ur: 'نبی کریم ﷺ کے بعد اسلام کے پہلے خلیفہ راشد کون تھے؟',
                  ar: 'من هو أول الخلفاء الراشدين بعد وفاة النبي ﷺ؟',
                },
                explanation: {
                  en: 'Abu Bakr As-Siddiq (RA) was chosen as the first Caliph.',
                  ur: 'حضرت ابو بکر صدیق رضی اللہ عنہ پہلے خلیفہ منتخب ہوئے۔',
                  ar: 'أبو بكر الصديق رضي الله عنه هو أول الخليفة.',
                },
                options: [
                  { id: 'opt1', text: { en: 'Umar ibn al-Khattab (RA)', ur: 'حضرت عمر فاروق', ar: 'عمر بن الخطاب' }, isCorrect: false },
                  { id: 'opt2', text: { en: 'Abu Bakr As-Siddiq (RA)', ur: 'حضرت ابو بکر صدیق', ar: 'أبو بكر الصديق' }, isCorrect: true },
                  { id: 'opt3', text: { en: 'Ali ibn Abi Talib (RA)', ur: 'حضرت علی المرتضیٰ', ar: 'علي بن أبي طالب' }, isCorrect: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // LEVEL 5
  {
    id: 'lvl5',
    levelNumber: 5,
    title: {
      en: 'Islamic History & Civilization',
      ur: 'اسلامی تاریخ و تہذیب',
      ar: 'التاريخ والحضارة الإسلامية',
    },
    description: {
      en: 'Discover the Golden Age of Islam, medical breakthroughs, libraries, architecture, and great scholars.',
      ur: 'اسلامی سنہری دور، طب، ریاضی، سائنس، لائبریریوں اور عظیم علماء کی خدمات۔',
      ar: 'اكتشف العصر الذهبي للإسلام، الإنجازات الطبية، المكتبات، العمارة، والعلماء الأفذاذ.',
    },
    themeBg: 'from-rose-500/20 via-pink-400/10 to-rose-100',
    cardColor: 'bg-rose-600',
    badge: { en: 'Advanced Mastery', ur: 'اعلیٰ علم', ar: 'مستوى متقدم' },
    icon: 'GraduationCap',
    categories: [
      {
        id: 'lvl5_cat1',
        number: 1,
        title: { en: 'The Golden Age of Islam', ur: 'اسلام کا سنہری دور', ar: 'العصر الذهبي للإسلام' },
        description: {
          en: 'House of Wisdom (Bayt al-Hikmah), science, optics, and mathematics.',
          ur: 'بیت الحکمہ، سائنس، علمِ بصریات اور ریاضی میں مسلم سائنسدانوں کی حیرت انگیز خدمات۔',
          ar: 'بيت الحكمة، العلوم، البصريات، والرياضيات.',
        },
        iconName: 'GraduationCap',
        badgeColor: 'bg-rose-600',
        lessons: [
          {
            id: 'lvl5_cat1_les1',
            title: { en: 'House of Wisdom & Scientific Discoveries', ur: 'بیت الحکمہ اور سائنسی ایجادات', ar: 'بيت الحكمة والاكتشافات العلمية' },
            summary: {
              en: 'During the Golden Age, Muslim scholars built the House of Wisdom in Baghdad, created Algebra, advanced Medicine, and mapped the stars!',
              ur: 'اسلامی سنہری دور میں مسلم علماء نے بغداد میں بیت الحکمہ قائم کیا، الجبرا اور جدید طب کی بنیاد رکھی۔',
              ar: 'في العصر الذهبي أسس العلماء المسلمون بيت الحكمة في بغداد وابتكروا علم الجبر ووسّعوا مجالات الطب والفلك.',
            },
            estimatedMinutes: 5,
            dialogues: [
              {
                id: 'd1',
                character: 'maryam',
                characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
                avatar: '👧',
                speech: {
                  en: 'Al-Khwarizmi invented Algebra, Ibn al-Haytham developed optics and camera principles, and Ibn Sina wrote the medical encyclopedia!',
                  ur: 'الخوارزمی نے الجبرا وضع کیا، ابن الہیثم نے کیمرے اور روشنی کا نظریہ دیا اور ابن سینا نے طب کی مشہور کتاب لکھی!',
                  ar: 'الخوارزمي ابتكر علم الجبر، وابن الهيثم طور علم البصريات والكميرا، وابن سينا كتب موسوعة الطب!',
                },
                sceneIllustration: 'GraduationCap',
              },
            ],
            importantPoints: [
              {
                en: 'Islamic civilization valued knowledge and education for all.',
                ur: 'اسلامی تہذیب نے علم اور تعلیم کو سب سے زیادہ اہمیت دی۔',
                ar: 'الحضارة الإسلامية عظّمت العلم والمعرفة للجميع.',
              },
            ],
            quiz: [
              {
                id: 'q1',
                type: 'mcq',
                question: {
                  en: 'Which famous Muslim mathematician is known as the father of Algebra?',
                  ur: 'الجبرا کے بانی کے طور پر کس مشہور مسلم ریاضی دان کو جانا جاتا ہے؟',
                  ar: 'من هو العالم المسلم الشهير الملقب بأبي الجبر؟',
                },
                explanation: {
                  en: 'Al-Khwarizmi wrote the foundational book on Algebra.',
                  ur: 'الخوارزمی نے الجبرا پر پہلی بنیادی کتاب لکھی۔',
                  ar: 'الخوارزمي وضع أسس علم الجبر.',
                },
                options: [
                  { id: 'opt1', text: { en: 'Al-Khwarizmi', ur: 'الخوارزمی', ar: 'الخوارزمي' }, isCorrect: true },
                  { id: 'opt2', text: { en: 'Ibn Sina', ur: 'ابن سینا', ar: 'ابن سينا' }, isCorrect: false },
                  { id: 'opt3', text: { en: 'Al-Biruni', ur: 'البیرونی', ar: 'البيروني' }, isCorrect: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

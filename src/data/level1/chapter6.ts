import { Category } from '../../types';

export const chapter6: Category = {
  id: 'lvl1_cat6',
  number: 6,
  title: {
    en: 'Chapter 6: Quran and Divine Books',
    ur: 'باب 6: قرآن پاک اور آسمانی کتب',
    ar: 'الفصل 6: القرآن والكتب السماوية',
  },
  description: {
    en: 'Explore Allah\'s divine revelations: Tawrat, Zabur, Injil, and the Holy Quran — the final unchanged miracle and eternal light for humanity.',
    ur: 'اللہ کی نازل کردہ کتابوں: تورات، زبور، انجیل اور قرآنِ مجید کے بارے میں جانیں جو انسانیت کے لیے آخری محفوظ معجزہ ہے۔',
    ar: 'تعلم عن كتب الله السماوية: التوراة، الزبور، الإنجيل، والقرآن الكريم - معجزة الله الخالدة المحفوظة.',
  },
  iconName: 'BookMarked',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat6_les1',
      title: {
        en: 'The Light of Divine Revelation',
        ur: 'وحیِ الٰہی کا نور',
        ar: 'نور الوحي الإلهي',
      },
      summary: {
        en: 'Allah revealed Divine Scriptures throughout history to guide humanity to truth. The Holy Quran is the final scripture, guarded by Allah Himself.',
        ur: 'اللہ نے انسانوں کی ہدایت کے لیے آسمانی کتابیں نازل فرمائیں۔ قرآنِ پاک آخری کتاب ہے جس کی حفاظت کا ذمہ خود اللہ نے لیا ہے۔',
        ar: 'أنزل الله الكتب السماوية لهداية البشرية، والقرآن الكريم هو آخر الكتب، تكفل الله بحفظه.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c6_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, which holy books were revealed to earlier Prophets before the Quran?',
            ur: 'شیخ طارق، قرآن مجید سے پہلے دیگر انبیاء کرام پر کون سی کتابیں نازل ہوئی تھیں؟',
            ar: 'يا شيخ طارق، ما هي الكتب السماوية التي نزلت على الأنبياء قبل القرآن؟',
          },
          sceneIllustration: 'BookMarked',
        },
        {
          id: 'c6_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Allah revealed Tawrat to Musa (AS), Zabur to Dawud (AS), Injil to Isa (AS), and Suhof (scrolls) to Ibrahim (AS). And finally, the Holy Quran to Prophet Muhammad ﷺ!',
            ur: 'اللہ نے حضرت موسیٰ پر تورات، حضرت داؤد پر زبور، حضرت عیسیٰ پر انجیل اور حضرت ابراہیم پر صحیفے نازل فرمائے، اور سب سے آخر میں قرآن مجید ہمارے آقا ﷺ پر نازل فرمایا!',
            ar: 'أنزل الله التوراة على موسى، والزبور على داود، والإنجيل على عيسى، والصحف على إبراهيم. وأخيراً القرآن الكريم على محمد ﷺ!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Major books: Tawrat (Musa), Zabur (Dawud), Injil (Isa), Quran (Muhammad ﷺ).',
            ur: 'مقدس کتابیں: تورات (موسیٰ)، زبور (داؤد)، انجیل (عیسیٰ)، قرآن (محمد ﷺ)۔',
            ar: 'الكتب العظيمة: التوراة (موسى)، الزبور (داود)، الإنجيل (عيسى)، القرآن (محمد ﷺ).',
          },
        },
        {
          id: 'c6_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Why is the Holy Quran so special compared to all other books?',
            ur: 'قرآنِ مجید دنیا کی تمام کتابوں سے ممتاز اور خاص کیوں ہے؟',
            ar: 'لماذا يعتبر القرآن الكريم مميزاً وفريداً عن باقي الكتب؟',
          },
          sceneIllustration: 'Sun',
        },
        {
          id: 'c6_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The Quran is the literal Word of Allah (Kalamullah)! It was revealed over 23 years through Angel Jibreel. Unlike earlier books, Allah promised in Surah Al-Hijr: "We sent down the Quran and We will preserve it." Not a single letter has changed!',
            ur: 'قرآن اللہ تعالیٰ کا اپنا کلام ہے جو 23 سال میں جبرائیل علیہ السلام کے ذریعہ نازل ہوا۔ اس کا ایک ایک حرف 1400 سال سے محفوظ ہے کیونکہ اس کی حفاظت کا وعدہ خود اللہ کا ہے۔',
            ar: 'القرآن هو كلام الله المُنزل على محمد ﷺ متعبداً بتلاوته. حفظه الله فلم يتغير منه حرف واحد عبر القرون.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'The Quran is divinely preserved, unchanged, and holds 10 rewards for every letter recited!',
            ur: 'قرآن کا ایک حرف پڑھنے پر 10 نیکیاں ملتی ہیں اور یہ ہمیشہ محفوظ رہے گا۔',
            ar: 'القرآن كتاب محفوظ، ولتلاوته عشر حسنات لكل حرف!',
          },
        },
      ],
      importantPoints: [
        {
          en: 'The Holy Quran has 114 Surahs and 30 Juz (Paras).',
          ur: 'قرآن مجید میں 114 سورتیں اور 30 پارے ہیں۔',
          ar: 'يتكون القرآن الكريم من 114 سورة و30 جزءاً.',
        },
        {
          en: 'First revealed Surah was Surah Al-\'Alaq ("Iqra") in Cave Hira.',
          ur: 'غارِ حرا میں سب سے پہلے نازل ہونے والی آیات "اقرأ" (سورۃ العلق) تھیں۔',
          ar: 'أول ما نزل من القرآن: "اقرأ باسم ربك الذي خلق" في غار حراء.',
        },
        {
          en: 'Reciting Quran brings inner peace, barakah, guidance, and intercession on Judgment Day.',
          ur: 'قرآن کی تلاوت سے سکون، برکت اور قیامت کے دن شفاعت حاصل ہوتی ہے۔',
          ar: 'قراءة القرآن تجلب السكينة والبركة والشفاعة يوم القيامة.',
        },
        {
          en: 'A Hafiz (person who memorizes the Quran) and their parents will be crowned with light in Jannah.',
          ur: 'حافظِ قرآن اور اس کے والدین کو قیامت کے دن نور کا تاج پہنایا جائے گا۔',
          ar: 'حافظ القرآن يلبس والداه تاج الوقار والنور يوم القيامة.',
        },
      ],
      quiz: [
        {
          id: 'c6_q1',
          type: 'mcq',
          question: {
            en: 'Which Holy Scripture was revealed to Prophet Musa (Moses) AS?',
            ur: 'حضرت موسیٰ علیہ السلام پر کون سی مقدس کتاب نازل کی گئی تھی؟',
            ar: 'ما اسم الكتاب السماوي الذي أُنزل على النبي موسى عليه السلام؟',
          },
          explanation: {
            en: 'The Tawrat (Torah) was revealed to Prophet Musa (AS).',
            ur: 'حضرت موسیٰ علیہ السلام پر تورات نازل کی گئی تھی۔',
            ar: 'التوراة أُنزلت على موسى عليه السلام.',
          },
          options: [
            { id: '1', text: { en: 'Tawrat (Torah)', ur: 'تورات', ar: 'التوراة' }, isCorrect: true },
            { id: '2', text: { en: 'Injil (Gospel)', ur: 'انجیل', ar: 'الإنجيل' }, isCorrect: false },
            { id: '3', text: { en: 'Zabur (Psalms)', ur: 'زبور', ar: 'الزبور' }, isCorrect: false },
            { id: '4', text: { en: 'Quran', ur: 'قرآن', ar: 'القرآن' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q2',
          type: 'mcq',
          question: {
            en: 'Which Holy Book was revealed to Prophet Dawud (David) AS?',
            ur: 'حضرت داؤد علیہ السلام پر کون سی الہامی کتاب نازل ہوئی؟',
            ar: 'ما اسم الكتاب السماوي الذي أُنزل على النبي داود عليه السلام؟',
          },
          explanation: {
            en: 'The Zabur (Psalms) was revealed to Prophet Dawud (AS).',
            ur: 'حضرت داؤد علیہ السلام پر زبور نازل کی گئی تھی۔',
            ar: 'الزبور أُنزل على داود عليه السلام.',
          },
          options: [
            { id: '1', text: { en: 'Zabur (Psalms)', ur: 'زبور', ar: 'الزبور' }, isCorrect: true },
            { id: '2', text: { en: 'Tawrat', ur: 'تورات', ar: 'التوراة' }, isCorrect: false },
            { id: '3', text: { en: 'Injil', ur: 'انجیل', ar: 'الإنجيل' }, isCorrect: false },
            { id: '4', text: { en: 'Suhof', ur: 'صحیفے', ar: 'الصحف' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q3',
          type: 'mcq',
          question: {
            en: 'Which Scripture was revealed to Prophet Isa (Jesus) AS?',
            ur: 'حضرت عیسیٰ علیہ السلام پر کون سی مقدس کتاب نازل کی گئی؟',
            ar: 'ما اسم الكتاب السماوي الذي أُنزل على النبي عيسى عليه السلام؟',
          },
          explanation: {
            en: 'The Injil (Gospel) was revealed to Prophet Isa (AS).',
            ur: 'حضرت عیسیٰ علیہ السلام پر انجیل نازل ہوئی۔',
            ar: 'الإنجيل أُنزل على عيسى عليه السلام.',
          },
          options: [
            { id: '1', text: { en: 'Injil (Gospel)', ur: 'انجیل', ar: 'الإنجيل' }, isCorrect: true },
            { id: '2', text: { en: 'Tawrat', ur: 'تورات', ar: 'التوراة' }, isCorrect: false },
            { id: '3', text: { en: 'Zabur', ur: 'زبور', ar: 'الزبور' }, isCorrect: false },
            { id: '4', text: { en: 'Quran', ur: 'قرآن', ar: 'القرآن' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q4',
          type: 'mcq',
          question: {
            en: 'To which Prophet was the Holy Quran revealed?',
            ur: 'قرآنِ مجید کس آخری پیغمبر پر نازل فرمایا گیا؟',
            ar: 'على أي نبي أُنزل القرآن الكريم؟',
          },
          explanation: {
            en: 'The Holy Quran was revealed to Prophet Muhammad ﷺ.',
            ur: 'قرآنِ مجید ہمارے پیارے آقا حضرت محمد مصطفیٰ ﷺ پر نازل ہوا۔',
            ar: 'القرآن أُنزل على النبي محمد ﷺ.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Muhammad ﷺ', ur: 'حضرت محمد مصطفیٰ ﷺ', ar: 'محمد ﷺ' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Ibrahim (AS)', ur: 'حضرت ابراہیم علیہ السلام', ar: 'إبراهيم عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Musa (AS)', ur: 'حضرت موسیٰ علیہ السلام', ar: 'موسى عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Nuh (AS)', ur: 'حضرت نوح علیہ السلام', ar: 'نوح عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q5',
          type: 'mcq',
          question: {
            en: 'Where did the first revelation of the Quran take place?',
            ur: 'قرآنِ مجید کی سب سے پہلی وحی کس غار میں نازل ہوئی؟',
            ar: 'أين نزلت أول أيات من القرآن الكريم؟',
          },
          explanation: {
            en: 'In Cave Hira (Ghar Hira) on Jabal an-Nour near Makkah.',
            ur: 'مکہ مکرمہ کے قریب جبلِ نور پر واقعہ غارِ حرا میں۔',
            ar: 'في غار حراء بجبل النور بمكة.',
          },
          options: [
            { id: '1', text: { en: 'Cave Hira (Ghar Hira)', ur: 'غارِ حرا', ar: 'غار حراء' }, isCorrect: true },
            { id: '2', text: { en: 'Cave Thawr', ur: 'غارِ ثور', ar: 'غار ثور' }, isCorrect: false },
            { id: '3', text: { en: 'Mount Uhud', ur: 'جبلِ احد', ar: 'جبل أُحد' }, isCorrect: false },
            { id: '4', text: { en: 'Plain of Arafat', ur: 'میدانِ عرفات', ar: 'عرفة' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q6',
          type: 'mcq',
          question: {
            en: 'What was the first word revealed to Prophet Muhammad ﷺ in Cave Hira?',
            ur: 'غارِ حرا میں حضرت جبرائیل علیہ السلام نے جو پہلا لفظ فرمایا وہ کیا تھا؟',
            ar: 'ما هي أول كلمة نزلت على النبي ﷺ في غار حراء؟',
          },
          explanation: {
            en: '"Iqra!" which means "Read!" in Surah Al-\'Alaq.',
            ur: '"اقرأ!" جس کا مطلب ہے "پڑھئیے!" (سورۃ العلق میں)۔',
            ar: '"اقرأ" من سورة العلق.',
          },
          options: [
            { id: '1', text: { en: 'Iqra! (Read!)', ur: 'اقرأ! (پڑھیے!)', ar: 'اقرأ!' }, isCorrect: true },
            { id: '2', text: { en: 'Write!', ur: 'لکھیے!', ar: 'اكتب!' }, isCorrect: false },
            { id: '3', text: { en: 'Listen!', ur: 'سنیے!', ar: 'اسمع!' }, isCorrect: false },
            { id: '4', text: { en: 'Travel!', ur: 'سفر کیجیے!', ar: 'سافر!' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q7',
          type: 'mcq',
          question: {
            en: 'How many Surahs (chapters) are in the Holy Quran?',
            ur: 'قرآن مجید میں کل کتنی سورتیں ہیں؟',
            ar: 'كم عدد سور القرآن الكريم؟',
          },
          explanation: {
            en: 'The Holy Quran consists of 114 Surahs.',
            ur: 'قرآن مجید میں کل 114 سورتیں ہیں۔',
            ar: 'يتكون القرآن من 114 سورة.',
          },
          options: [
            { id: '1', text: { en: '114 Surahs', ur: '114 سورتیں', ar: '114 سورة' }, isCorrect: true },
            { id: '2', text: { en: '100 Surahs', ur: '100 سورتیں', ar: '100 سورة' }, isCorrect: false },
            { id: '3', text: { en: '150 Surahs', ur: '150 سورتیں', ar: '150 سورة' }, isCorrect: false },
            { id: '4', text: { en: '30 Surahs', ur: '30 سورتیں', ar: '30 سورة' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q8',
          type: 'mcq',
          question: {
            en: 'How many Juz (Paras/Parts) is the Quran divided into for daily recitation?',
            ur: 'تلاوت میں سہولت کے لیے قرآن مجید کو کتنے پاروں (اجزاء) میں تقسیم کیا گیا ہے؟',
            ar: 'كم عدد أجزاء (الأحزاب/الأجزاء) القرآن الكريم؟',
          },
          explanation: {
            en: 'The Quran is divided into 30 Juz.',
            ur: 'قرآن مجید 30 پاروں پر مشتمل ہے۔',
            ar: 'ينقسم القرآن إلى 30 جزءاً.',
          },
          options: [
            { id: '1', text: { en: '30 Juz (Paras)', ur: '30 پارے', ar: '30 جزءاً' }, isCorrect: true },
            { id: '2', text: { en: '12 Juz', ur: '12 پارے', ar: '12 جزءاً' }, isCorrect: false },
            { id: '3', text: { en: '40 Juz', ur: '40 پارے', ar: '40 جزءاً' }, isCorrect: false },
            { id: '4', text: { en: '60 Juz', ur: '60 پارے', ar: '60 جزءاً' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q9',
          type: 'mcq',
          question: {
            en: 'Over how many total years was the Quran revealed gradually?',
            ur: 'قرآنِ پاک کی تدریجی وحی کا دورانیہ کل کتنے سال پر محیط تھا؟',
            ar: 'على كم سنة نزل القرآن الكريم مفرقاً؟',
          },
          explanation: {
            en: 'The Quran was revealed over a period of 23 years (13 in Makkah, 10 in Madinah).',
            ur: 'قرآنِ پاک 23 سال کے عرصے میں تھوڑا تھوڑا نازل ہوا۔',
            ar: 'نزل القرآن مفرقاً في 23 سنة.',
          },
          options: [
            { id: '1', text: { en: '23 Years', ur: '23 سال', ar: '23 سنة' }, isCorrect: true },
            { id: '2', text: { en: '1 Year', ur: '1 سال', ar: 'سنة واحدة' }, isCorrect: false },
            { id: '3', text: { en: '50 Years', ur: '50 سال', ar: '50 سنة' }, isCorrect: false },
            { id: '4', text: { en: '100 Years', ur: '100 سال', ar: '100 سنة' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q10',
          type: 'true_false',
          question: {
            en: 'Has any single letter or word of the Quran been changed since its revelation?',
            ur: 'کیا نزول کے بعد سے اب تک قرآنِ پاک کا ایک حرف یا لفظ بھی تبدیل ہوا ہے؟',
            ar: 'هل تغير حرفٌ واحد أو كلمةٌ من القرآن منذ نزوله إلى اليوم؟',
          },
          explanation: {
            en: 'No! Allah guaranteed its protection in Surah Al-Hijr: "We sent down the Quran and We are its preserver."',
            ur: 'جی نہیں! اللہ تعالی نے اس کی حفاظت کی خود ضمانت دی ہے۔',
            ar: 'لا! تكفل الله بحفظه في قوله: "وإنا له لحافظون".',
          },
          options: [
            { id: '1', text: { en: 'No, completely preserved by Allah', ur: 'جی نہیں، اللہ کے کرم سے مکمل محفوظ ہے', ar: 'لا، محفوظ بحفظ الله الخالد' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, changed many times', ur: 'جی ہاں، کئی بار بدلا', ar: 'نعم تغير مراراً' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q11',
          type: 'mcq',
          question: {
            en: 'How many rewards (Hasanat) are written for reciting just ONE single letter of the Quran?',
            ur: 'قرآن پاک کا صرف ایک حرف پڑھنے پر کتنی نیکیاں (حسنات) ملتی ہیں؟',
            ar: 'كم عدد الحسنات المكتوبة لقراءة حرف واحد من القرآن الكريم؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ said: "Whoever reads a letter from the Book of Allah will receive a reward, and that reward will be multiplied by ten."',
            ur: 'نبی کریم ﷺ نے فرمایا: جو قرآن کا ایک حرف پڑھے اسے 10 نیکیاں ملتی ہیں۔',
            ar: 'قال النبي ﷺ: من قرأ حرفاً من كتاب الله فله به حسنة والحسنة بعشر أمثالها.',
          },
          options: [
            { id: '1', text: { en: '10 Hasanat (Rewards)', ur: '10 نیکیاں', ar: '10 حسنات' }, isCorrect: true },
            { id: '2', text: { en: '1 Hasana', ur: '1 نیکی', ar: 'حسنة واحدة' }, isCorrect: false },
            { id: '3', text: { en: '5 Hasanat', ur: '5 نیکیاں', ar: '5 حسنات' }, isCorrect: false },
            { id: '4', text: { en: '0 Rewards', ur: 'کوئی نیکی نہیں', ar: 'لا شيء' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q12',
          type: 'mcq',
          question: {
            en: 'Which Surah is known as the "Heart of the Quran"?',
            ur: 'قرآن مجید کے دل (قلبِ قرآن) کس سورہ مبارکہ کو کہا جاتا ہے؟',
            ar: 'ما هي السورة الملقبة بـ "قلب القرآن"؟',
          },
          explanation: {
            en: 'Surah Ya-Sin is called the Heart of the Quran in Hadith.',
            ur: 'سورۃ یس کو احادیث میں قلبِ قرآن کہا گیا ہے۔',
            ar: 'سورة يس هي قلب القرآن.',
          },
          options: [
            { id: '1', text: { en: 'Surah Ya-Sin', ur: 'سورۃ یٰس', ar: 'سورة يس' }, isCorrect: true },
            { id: '2', text: { en: 'Surah Al-Baqarah', ur: 'سورۃ البقرہ', ar: 'سورة البقرة' }, isCorrect: false },
            { id: '3', text: { en: 'Surah Ar-Rahman', ur: 'سورۃ الرحمن', ar: 'سورة الرحمن' }, isCorrect: false },
            { id: '4', text: { en: 'Surah Al-Mulk', ur: 'سورۃ الملک', ar: 'سورة الملك' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q13',
          type: 'mcq',
          question: {
            en: 'Which is the longest Surah in the Holy Quran?',
            ur: 'قرآنِ پاک کی سب سے لمبی سورت کون سی ہے؟',
            ar: 'ما هي أطول سورة في القرآن الكريم؟',
          },
          explanation: {
            en: 'Surah Al-Baqarah (The Cow) is the longest Surah in the Quran (286 verses).',
            ur: 'سورۃ البقرہ قرآن پاک کی سب سے لمبی سورت ہے (286 آیات)۔',
            ar: 'سورة البقرة هي أطول سورة بالقرآن (286 آية).',
          },
          options: [
            { id: '1', text: { en: 'Surah Al-Baqarah', ur: 'سورۃ البقرہ', ar: 'سورة البقرة' }, isCorrect: true },
            { id: '2', text: { en: 'Surah Al-Imran', ur: 'سورۃ آلِ عمران', ar: 'سورة آل عمران' }, isCorrect: false },
            { id: '3', text: { en: 'Surah An-Nisa', ur: 'سورۃ النساء', ar: 'سورة النساء' }, isCorrect: false },
            { id: '4', text: { en: 'Surah Al-Ma\'idah', ur: 'سورۃ المائدہ', ar: 'سورة المائدة' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q14',
          type: 'mcq',
          question: {
            en: 'Which is the shortest Surah in the Holy Quran (3 verses)?',
            ur: 'قرآن مجید کی سب سے چھوٹی سورت کون سی ہے؟',
            ar: 'ما هي أقصر سورة في القرآن الكريم (3 آيات)؟',
          },
          explanation: {
            en: 'Surah Al-Kawthar is the shortest Surah with 3 verses.',
            ur: 'سورۃ الکوثر صرف 3 آیات پر مشتمل سب سے چھوٹی سورت ہے۔',
            ar: 'سورة الكوثر هي أقصر سورة بالقرآن.',
          },
          options: [
            { id: '1', text: { en: 'Surah Al-Kawthar', ur: 'سورۃ الکوثر', ar: 'سورة الكوثر' }, isCorrect: true },
            { id: '2', text: { en: 'Surah Al-Ikhlas', ur: 'سورۃ الاخلاص', ar: 'سورة الإخلاص' }, isCorrect: false },
            { id: '3', text: { en: 'Surah An-Nas', ur: 'سورۃ الناس', ar: 'سورة الناس' }, isCorrect: false },
            { id: '4', text: { en: 'Surah Al-Asr', ur: 'سورۃ العصر', ar: 'سورة العصر' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q15',
          type: 'mcq',
          question: {
            en: 'What verse in Surah Al-Baqarah (verse 255) is the greatest verse in the Quran for protection?',
            ur: 'سورۃ البقرہ کی آیت نمبر 255 جو حفاظت کے لیے سب سے عظمت والی آیت ہے، اس کا نام کیا ہے؟',
            ar: 'ما اسم أعظم آية في القرآن الكريم المذكورة في سورة البقرة (الآية 255)؟',
          },
          explanation: {
            en: 'Ayat al-Kursi (The Verse of the Throne).',
            ur: 'آیۃ الکرسی عظمت و حفاظت کی سب سے افضل آیت ہے۔',
            ar: 'آية الكرسي هي أعظم آية في كتاب الله.',
          },
          options: [
            { id: '1', text: { en: 'Ayat al-Kursi', ur: 'آیۃ الکرسی', ar: 'آية الكرسي' }, isCorrect: true },
            { id: '2', text: { en: 'Ayat ad-Dayn', ur: 'آیتِ قرض', ar: 'آية الدين' }, isCorrect: false },
            { id: '3', text: { en: 'Ayat an-Nur', ur: 'آیتِ نور', ar: 'آية النور' }, isCorrect: false },
            { id: '4', text: { en: 'Ayat ash-Shifa', ur: 'آیتِ شفاء', ar: 'آية الشفاء' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q16',
          type: 'mcq',
          question: {
            en: 'Which Surah is known as Umm al-Kitab (The Mother of the Book) and recited in every Rakah of prayer?',
            ur: 'ام الکتاب کس سورہ مبارکہ کو کہا جاتا ہے جو نماز کی ہر رکعت میں فرضاً پڑھی جاتی ہے؟',
            ar: 'ما هي السورة الملقبة بـ "أم الكتاب" وتُقرأ في كل ركعة من الصلاة؟',
          },
          explanation: {
            en: 'Surah Al-Fatiha (The Opening) is recited in every Rakah of Salah.',
            ur: 'سورۃ الفاتحہ (الحمد شریف) نماز کی ہر رکعت میں پڑھی جاتی ہے۔',
            ar: 'سورة الفاتحة هي أم الكتاب وتُقرأ في كل ركعة.',
          },
          options: [
            { id: '1', text: { en: 'Surah Al-Fatiha', ur: 'سورۃ الفاتحہ', ar: 'سورة الفاتحة' }, isCorrect: true },
            { id: '2', text: { en: 'Surah Al-Ikhlas', ur: 'سورۃ الاخلاص', ar: 'سورة الإخلاص' }, isCorrect: false },
            { id: '3', text: { en: 'Surah Al-Falaq', ur: 'سورۃ الفلق', ar: 'سورة الفلق' }, isCorrect: false },
            { id: '4', text: { en: 'Surah An-Nas', ur: 'سورۃ الناس', ar: 'سورة الناس' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q17',
          type: 'true_false',
          question: {
            en: 'Does reading Surah Al-Mulk every night protect a person from the punishment of the grave?',
            ur: 'کیا ہر رات سورۃ الملک پڑھنے کی عادت انسان کو عذابِ قبر سے محفوظ رکھتی ہے؟',
            ar: 'هل تلاوة سورة الملك كل ليلة تنجي صاحبها من عذاب القبر؟',
          },
          explanation: {
            en: 'Yes! Hadith confirms that Surah Al-Mulk intercedes for its reciter until he is forgiven and saved from grave punishment.',
            ur: 'جی ہاں! صحیح احادیث میں ہے کہ سورۃ الملک عذابِ قبر سے نجات کا ذریعہ ہے۔',
            ar: 'نعم! ورد في الحديث أن سورة الملك تشفع لصاحبها وتنجيه من عذاب القبر.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q18',
          type: 'mcq',
          question: {
            en: 'What are the two last Surahs of the Quran (Al-Falaq and An-Nas) called together?',
            ur: 'قرآن مجید کی آخری دو سورتوں (الفلق اور الناس) کو ملا کر کیا نام دیا جاتا ہے؟',
            ar: 'ماذا تسمى السورتان الأخيرتان من القرآن (الفلق والناس) معاً؟',
          },
          explanation: {
            en: 'Al-Mu\'awwidhatayn (The Two Surahs of Refuge).',
            ur: 'المعوذتین (پناہ مانگنے والی دو سورتیں)۔',
            ar: 'المعوذتان.',
          },
          options: [
            { id: '1', text: { en: 'Al-Mu\'awwidhatayn (The 2 Protection Surahs)', ur: 'المعوذتین', ar: 'المعوذتان' }, isCorrect: true },
            { id: '2', text: { en: 'Al-Zahrawayn', ur: 'الزهراوان', ar: 'الزهراوان' }, isCorrect: false },
            { id: '3', text: { en: 'Al-Musabbihat', ur: 'المسبحات', ar: 'المسبحات' }, isCorrect: false },
            { id: '4', text: { en: 'Al-Hawamim', ur: 'الحواميم', ar: 'الحواميم' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q19',
          type: 'true_false',
          question: {
            en: 'Before touching the Arabic text of the Holy Quran, should a Muslim perform Wudu (Ablution)?',
            ur: 'کیا قرآنِ پاک کے عربی متن کو چھونے سے پہلے باوضو ہونا ضروری ہے؟',
            ar: 'هل يجب أن يتوضأ المسلم قبل لمس المصحف الشريف؟',
          },
          explanation: {
            en: 'Yes, Allah says in Quran: "None touch it except the purified."',
            ur: 'جی ہاں! قرآنِ پاک کی تعظیم کے لیے باوضو ہو کر ہاتھ لگانا ادب کا تقاضا ہے۔',
            ar: 'نعم! قال تعالى: "لا يمسه إلا المطهرون".',
          },
          options: [
            { id: '1', text: { en: 'True (Must be in state of Wudu)', ur: 'سچ (باوضو ہونا ضروری ہے)', ar: 'صحيح (يجب الوضوء)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c6_q20',
          type: 'mcq',
          question: {
            en: 'What is the best way to honor the Quran in our daily lives?',
            ur: 'ہم اپنی روزمرہ زندگی میں قرآنِ مجید کا بہترین حق کیسے ادا کر سکتے ہیں؟',
            ar: 'ما هي أفضل طريقة لتعظيم القرآن الكريم في حياتنا اليومية؟',
          },
          explanation: {
            en: 'By reciting it daily with Tajweed, understanding its meanings, and acting upon its guidance.',
            ur: 'روزانہ تجوید سے پڑھ کر، اس کے معنی سمجھ کر اور اس کی تعلیمات پر عمل کر کے۔',
            ar: 'بتلاوته يومياً وتدبر معانيه والعمل بأحكامه.',
          },
          options: [
            { id: '1', text: { en: 'Recite it, understand it, and practice its teachings', ur: 'روزانہ پڑھ کر، سمجھ کر اور عمل کر کے', ar: 'بتلاوته وفهمه والعمل به' }, isCorrect: true },
            { id: '2', text: { en: 'Keep it locked on top shelf only', ur: 'صرف اونچی الماری میں بند رکھ کر', ar: 'بوضعه على الرف المغلق فقط' }, isCorrect: false },
            { id: '3', text: { en: 'Read once every 10 years', ur: '10 سال میں ایک بار پڑھ کر', ar: 'بقراءته مرة كل 10 سنوات' }, isCorrect: false },
            { id: '4', text: { en: 'Decorate the cover only', ur: 'صرف اس کا کور سجا کر', ar: 'بتزيين الغلاف فقط' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

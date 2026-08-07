import { Category } from '../../types';

export const chapter1: Category = {
  id: 'lvl1_cat1',
  number: 1,
  title: {
    en: 'Chapter 1: Knowing Allah (Allah Ta\'ala)',
    ur: 'باب 1: اللہ تعالیٰ کی معرفت',
    ar: 'الفصل 1: معرفة الله تعالى',
  },
  description: {
    en: 'Learn who Allah is, His creation of the universe, His oneness, mercy, knowledge, and why He alone deserves our worship.',
    ur: 'اللہ تعالیٰ کی ذات، توحید، کائنات کی تخلیق، اس کی رحمت، علم اور عبادت کے مستحق ہونے کے بارے میں سیکھیں۔',
    ar: 'تعلم من هو الله، خلقه للكون، وحدانيته، رحمته، علمه، ولماذا يستحق العبادة وحده.',
  },
  iconName: 'Sun',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat1_les1',
      title: {
        en: 'Knowing Allah - The Creator & Sustainer',
        ur: 'اللہ تعالیٰ کی معرفت - خالق اور مالک',
        ar: 'معرفة الله - الخالق والرازق',
      },
      summary: {
        en: 'Allah is the Almighty God who created everything in existence from nothing. He is One, without father, mother, partner, or child.',
        ur: 'اللہ تعالیٰ وہ قادرِ مطلق ذات ہے جس نے تمام کائنات کو عدم سے پیدا فرمایا۔ وہ اکیلا ہے، اس کا کوئی شریک نہیں نہ اولاد نہ والدین۔',
        ar: 'الله هو الإله القدير الذي خلق كل شيء من العدم. وهو واحد لا شريك له ولا ولد ولا والد.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c1_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Assalamu Alaikum, Sheikh Tariq! Look at these massive mountains, tall trees, and bright sun. Who created all of this?',
            ur: 'السلام علیکم، شیخ طارق! ان اونچے پہاڑوں، لمبے درختوں اور چمکتے ہوئے سورج کو دیکھیں۔ ان سب کو کس نے بنایا؟',
            ar: 'السلام عليكم يا شيخ طارق! انظر إلى هذه الجبال الشاهقة والأشجار والشمس المشرقة. من خلق كل هذا؟',
          },
          sceneIllustration: 'Sun',
        },
        {
          id: 'c1_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Wa Alaikum Assalam Zayd and Maryam! Allah Ta\'ala created every single atom in the universe. He is Al-Khaliq (The Supreme Creator).',
            ur: 'وعلیکم السلام زید اور مریم! اللہ تعالیٰ نے کائنات کے ایک ایک ذرے کو پیدا فرمایا ہے۔ وہ الخالق ہے!',
            ar: 'وعليكم السلام يا زيد ويا مريم! الله تعالى خلق كل ذرة في هذا الكون. وهو الخالق العظيم.',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Allah is Al-Khaliq - The Creator of everything in heavens and earth.',
            ur: 'اللہ الخالق ہے - زمین و آسمان کی ہر چیز کا پیدا کرنے والا۔',
            ar: 'الله هو الخالق لكل ما في السماوات والأرض.',
          },
        },
        {
          id: 'c1_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, why do humans need to know Allah?',
            ur: 'شیخ طارق، انسانوں کے لیے اللہ کو جاننا کیوں ضروری ہے؟',
            ar: 'يا شيخ طارق، لماذا يجب على الإنسان أن يعرف الله؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'c1_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Knowing Allah fills our hearts with love, peace, and purpose! Allah knows every thought in our minds, hears every secret prayer, and cares for us more than a loving mother cares for her child.',
            ur: 'اللہ تعالیٰ کو جاننے سے ہمارے دل میں محبت، سکون اور مقصدِ زندگی پیدا ہوتا ہے۔ اللہ ہمارے ہر خیال سے واقف ہے اور ہماری ہر دعا سنتا ہے۔',
            ar: 'معرفة الله تملأ قلوبنا بالمحبة والطمأنينة. الله يعلم ما في أنفسنا ويسمع دعاءنا وهو أرحم بنا من الأم بولدها.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'Allah\'s Knowledge encompasses everything - visible and hidden.',
            ur: 'اللہ تعالیٰ کا علم ہر ظاہر اور پوشیدہ چیز کو گھیرے ہوئے ہے۔',
            ar: 'علم الله محيط بكل شيء، الظاهر والباطن.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Allah is One (Ahad) and has no partners or equals.',
          ur: 'اللہ ایک (احد) ہے اور اس کا کوئی شریک یا ہمسر نہیں۔',
          ar: 'الله واحد أحد لا شريك له ولا كفء له.',
        },
        {
          en: 'Allah is Al-Khaliq (The Creator) and Ar-Razzaq (The Provider).',
          ur: 'اللہ الخالق (پیدا کرنے والا) اور الرزاق (رزق دینے والا) ہے۔',
          ar: 'الله هو الخالق والرازق لجميع المخلوقات.',
        },
        {
          en: 'Allah deserves all our worship because He gave us life, guidance, and blessings.',
          ur: 'اللہ ہی ہر قسم کی عبادت کا مستحق ہے کیونکہ اسی نے ہمیں زندگی، ہدایت اور نعمتیں دیں۔',
          ar: 'الله يستحق العبادة وحده لأنه أعطانا الحياة والنعم والهداية.',
        },
        {
          en: 'Allah\'s Mercy (Rahmah) overcomes His Anger.',
          ur: 'اللہ تعالیٰ کی رحمت اس کے غضب پر غالب ہے۔',
          ar: 'رحمة الله وسعت كل شيء وسبقت غضبه.',
        },
      ],
      quiz: [
        {
          id: 'c1_q1',
          type: 'mcq',
          question: {
            en: 'Who created the entire universe and everything in it?',
            ur: 'تمام کائنات اور اس کی تمام چیزوں کو کس نے پیدا کیا؟',
            ar: 'من خلق الكون بأكمله وكل ما فيه؟',
          },
          explanation: {
            en: 'Allah Ta\'ala is the Creator (Al-Khaliq) of all existence.',
            ur: 'اللہ تعالیٰ تمام کائنات کا الخالق ہے۔',
            ar: 'الله تعالى هو خالق كل موجود.',
          },
          options: [
            { id: '1', text: { en: 'The Sun', ur: 'سورج نے', ar: 'الشمس' }, isCorrect: false },
            { id: '2', text: { en: 'Allah Ta\'ala', ur: 'اللہ تعالیٰ نے', ar: 'الله تعالى' }, isCorrect: true },
            { id: '3', text: { en: 'Nature by chance', ur: 'قدرت نے خود بخود', ar: 'الطبيعة صدفة' }, isCorrect: false },
            { id: '4', text: { en: 'Humans', ur: 'انسانوں نے', ar: 'البشر' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q2',
          type: 'true_false',
          question: {
            en: 'Does Allah have any partners, parents, or children?',
            ur: 'کیا اللہ کا کوئی شریک، والدین یا اولاد ہے؟',
            ar: 'هل لله شريك أو والد أو ولد؟',
          },
          explanation: {
            en: 'No! Surah Al-Ikhlas states Allah is One, He begets not nor is He begotten.',
            ur: 'جی نہیں! سورہ الاخلاص میں فرمایا گیا ہے کہ اللہ اکیلا ہے، نہ اس کی کوئی اولاد ہے نہ وہ کسی کی اولاد ہے۔',
            ar: 'لا! سورة الإخلاص تبين أن الله أحد لم يلد ولم يولد.',
          },
          options: [
            { id: '1', text: { en: 'Yes', ur: 'جی ہاں', ar: 'نعم' }, isCorrect: false },
            { id: '2', text: { en: 'No, Allah is Unique & One', ur: 'جی نہیں، اللہ واحد اور لاشریک ہے', ar: 'لا، الله واحد لا شريك له' }, isCorrect: true },
          ],
        },
        {
          id: 'c1_q3',
          type: 'mcq',
          question: {
            en: 'What is the Islamic term for believing in the Oneness of Allah?',
            ur: 'اللہ تعالیٰ کی توحید و وحدانیت پر ایمان لانے کی اسلامی اصطلاح کیا ہے؟',
            ar: 'ما المصطلح الإسلامي للإيمان بوحدانية الله؟',
          },
          explanation: {
            en: 'Tawheed means believing that Allah is One without any partner.',
            ur: 'توحید کا مطلب یہ ماننا ہے کہ اللہ ایک ہے اور اس کا کوئی شریک نہیں۔',
            ar: 'التوحيد يعني الإيمان بأن الله واحد لا شريك له.',
          },
          options: [
            { id: '1', text: { en: 'Tawheed', ur: 'توحید', ar: 'التوحيد' }, isCorrect: true },
            { id: '2', text: { en: 'Shirk', ur: 'شرک', ar: 'الشرك' }, isCorrect: false },
            { id: '3', text: { en: 'Taqwa', ur: 'تقویٰ', ar: 'التقوى' }, isCorrect: false },
            { id: '4', text: { en: 'Sadaqah', ur: 'صدقہ', ar: 'الصدقة' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q4',
          type: 'mcq',
          question: {
            en: 'What does Allah\'s name "Al-Khaliq" mean?',
            ur: 'اللہ کے مبارک نام "الخالق" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الخالق"؟',
          },
          explanation: {
            en: 'Al-Khaliq means The Creator of everything.',
            ur: 'الخالق کا مطلب ہے ہر چیز کو پیدا کرنے والا۔',
            ar: 'الخالق يعني الذي أوجد كل شيء من العدم.',
          },
          options: [
            { id: '1', text: { en: 'The Provider', ur: 'رزق دینے والا', ar: 'الرازق' }, isCorrect: false },
            { id: '2', text: { en: 'The Creator', ur: 'تخلیق کرنے والا (پیدا کرنے والا)', ar: 'الخالق' }, isCorrect: true },
            { id: '3', text: { en: 'The Forgiver', ur: 'معاف کرنے والا', ar: 'الغفور' }, isCorrect: false },
            { id: '4', text: { en: 'The Hearing', ur: 'سننے والا', ar: 'السميع' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q5',
          type: 'mcq',
          question: {
            en: 'What does Allah\'s name "Ar-Razzaq" mean?',
            ur: 'اللہ کے اسمِ مبارک "الرزاق" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الرازق"؟',
          },
          explanation: {
            en: 'Ar-Razzaq means The Provider of food, water, and sustenance for all creatures.',
            ur: 'الرزاق کا مطلب ہے تمام مخلوقات کو روزی اور نعمتیں دینے والا۔',
            ar: 'الرازق يعني الذي يرزق جميع المخلوقات.',
          },
          options: [
            { id: '1', text: { en: 'The Sustainer & Provider', ur: 'رزق دینے والا', ar: 'الرازق والمطعم' }, isCorrect: true },
            { id: '2', text: { en: 'The Judge', ur: 'انصاف کرنے والا', ar: 'الحَكَم' }, isCorrect: false },
            { id: '3', text: { en: 'The Creator', ur: 'پیدا کرنے والا', ar: 'الخالق' }, isCorrect: false },
            { id: '4', text: { en: 'The Mighty', ur: 'غالب', ar: 'العزيز' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q6',
          type: 'true_false',
          question: {
            en: 'Does Allah know what is inside our hearts and thoughts?',
            ur: 'کیا اللہ ہمارے دل کے بھید اور خیالات کو جانتا ہے؟',
            ar: 'هل يعلم الله ما في قلوبنا وأفكارنا؟',
          },
          explanation: {
            en: 'Yes! Allah\'s knowledge is complete and knows everything hidden and open.',
            ur: 'جی ہاں! اللہ کا علم کامل ہے اور وہ ہر کھلی اور چھپی بات کو جانتا ہے۔',
            ar: 'نعم! علم الله كلي ويعلم ما أعلنّا وما أخفينا.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ (جی نہیں)', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q7',
          type: 'mcq',
          question: {
            en: 'Why do humans worship Allah alone?',
            ur: 'انسان صرف اللہ کی ہی کیوں عبادت کرتے ہیں؟',
            ar: 'لماذا يعبد الإنسان الله وحده؟',
          },
          explanation: {
            en: 'Because Allah alone created us, gives us life, and holds all power.',
            ur: 'کیونکہ صرف اللہ ہی ہمارا خالق، مالک اور تمام طاقتوں کا سرچشمہ ہے۔',
            ar: 'لأن الله وحده هو الخالق الرازق المستحق لكل عبادة.',
          },
          options: [
            { id: '1', text: { en: 'Because Allah created us and gave us everything', ur: 'کیونکہ اللہ نے ہمیں پیدا کیا اور تمام نعمتیں دیں', ar: 'لأن الله خلقنا وأعطانا كل النعم' }, isCorrect: true },
            { id: '2', text: { en: 'To show off to friends', ur: 'دکھاوے کے لیے', ar: 'للمباهاة أمام الناس' }, isCorrect: false },
            { id: '3', text: { en: 'Because statues told us to', ur: 'بتوں کے کہنے پر', ar: 'لأن الأصنام أمرتنا' }, isCorrect: false },
            { id: '4', text: { en: 'None of the above', ur: 'ان میں سے کوئی نہیں', ar: 'لا شيء مما سبق' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q8',
          type: 'mcq',
          question: {
            en: 'Which Surah in the Quran explains the Oneness of Allah most clearly?',
            ur: 'قرآن مجید کی کون سی سورہ مبارکہ اللہ کی توحید کو سب سے واضح بیان کرتی ہے؟',
            ar: 'أي سورة في القرآن الكريم تبين توحيد الله بأوضح بيان؟',
          },
          explanation: {
            en: 'Surah Al-Ikhlas (Qul Huwal Laahu Ahad) declares the purity of Tawheed.',
            ur: 'سورہ الاخلاص (قل ہو اللہ احد) توحید کو بیاں کرتی ہے۔',
            ar: 'سورة الإخلاص تبين التوحيد الخالص.',
          },
          options: [
            { id: '1', text: { en: 'Surah Al-Ikhlas', ur: 'سورۃ الاخلاص', ar: 'سورة الإخلاص' }, isCorrect: true },
            { id: '2', text: { en: 'Surah Al-Fil', ur: 'سورۃ الفیل', ar: 'سورة الفيل' }, isCorrect: false },
            { id: '3', text: { en: 'Surah Al-Kafirun', ur: 'سورۃ الکافرون', ar: 'سورة الكافرون' }, isCorrect: false },
            { id: '4', text: { en: 'Surah An-Nasr', ur: 'سورۃ النصر', ar: 'سورة النصر' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q9',
          type: 'true_false',
          question: {
            en: 'Does Allah get sleepy or tired like human beings?',
            ur: 'کیا اللہ کو انسانوں کی طرح اونگھ یا تھکاوٹ آتی ہے؟',
            ar: 'هل يصيب اللهَ نعاسٌ أو تعبٌ كالبشر؟',
          },
          explanation: {
            en: 'Ayat al-Kursi tells us: "Neither drowsiness overtakes Him nor sleep."',
            ur: 'آیت الکرسی میں فرمایا گیا: اللہ کو نہ اونگھ آتی ہے نہ نیند۔',
            ar: 'آية الكرسي تخبرنا: "لا تأخذه سنة ولا نوم".',
          },
          options: [
            { id: '1', text: { en: 'Yes', ur: 'جی ہاں', ar: 'نعم' }, isCorrect: false },
            { id: '2', text: { en: 'No, Allah never sleeps or tires', ur: 'جی نہیں، اللہ کبھی نہیں سوتا اور نہ تھکتا ہے', ar: 'لا، الله لا ينام ولا يتعب أبداً' }, isCorrect: true },
          ],
        },
        {
          id: 'c1_q10',
          type: 'mcq',
          question: {
            en: 'What does "Ar-Rahman" mean?',
            ur: 'اللہ تعالیٰ کے اسمِ گرامی "الرحمن" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الرحمن"؟',
          },
          explanation: {
            en: 'Ar-Rahman means The Entirely Merciful whose mercy covers all creation.',
            ur: 'الرحمن کا مطلب ہے بے حد رحم فرمانے والا۔',
            ar: 'الرحمن يعني واسع الرحمة لجميع المخلوقات.',
          },
          options: [
            { id: '1', text: { en: 'The Most Merciful', ur: 'بے حد رحم فرمانے والا', ar: 'الرحمن الرحيم' }, isCorrect: true },
            { id: '2', text: { en: 'The Strong', ur: 'طاقتور', ar: 'القوي' }, isCorrect: false },
            { id: '3', text: { en: 'The King', ur: 'بادشاہ', ar: 'الملك' }, isCorrect: false },
            { id: '4', text: { en: 'The First', ur: 'پہلا', ar: 'الأول' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q11',
          type: 'mcq',
          question: {
            en: 'Can we see Allah with our physical eyes in this worldly life?',
            ur: 'کیا ہم اس دنیاوی زندگی میں اللہ کو اپنی ظاہری آنکھوں سے دیکھ سکتے ہیں؟',
            ar: 'هل يمكننا رؤية الله بأعيننا في هذه الحياة الدنيا؟',
          },
          explanation: {
            en: 'In this worldly life we cannot see Allah, but believers will be blessed to see Allah in Jannah!',
            ur: 'دنیا میں ہم اللہ کو نہیں دیکھ سکتے، مگر جنت میں اہل ایمان کو اللہ کے دیدار کی نعمت ملے گی۔',
            ar: 'في الدنيا لا نرى الله، ولكن المؤمنين سيرون الله في الجنة إن شاء الله.',
          },
          options: [
            { id: '1', text: { en: 'No in Dunya, but believers will see Him in Jannah', ur: 'دنیا میں نہیں، مگر جنت میں اہل ایمان دیکھیں گے', ar: 'لا في الدنيا، وسيراه المؤمنون في الجنة' }, isCorrect: true },
            { id: '2', text: { en: 'Yes anytime', ur: 'ہر وقت دیکھ سکتے ہیں', ar: 'نعم في أي وقت' }, isCorrect: false },
            { id: '3', text: { en: 'Never at all anywhere', ur: 'کبھی بھی کہیں نہیں', ar: 'لا أبداً في أي مكان' }, isCorrect: false },
            { id: '4', text: { en: 'Only through cameras', ur: 'صرف کیمرے سے', ar: 'عبر الكاميرا فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q12',
          type: 'true_false',
          question: {
            en: 'Are Allah\'s Beautiful Names called Asma-ul-Husna?',
            ur: 'کیا اللہ کے خوبصورت ناموں کو اسماء الحسنیٰ کہا جاتا ہے؟',
            ar: 'هل تسمى أسماء الله الحسنى بهذا الاسم؟',
          },
          explanation: {
            en: 'Yes, Asma-ul-Husna means The Most Beautiful Names of Allah.',
            ur: 'جی ہاں، اسماء الحسنیٰ کا مطلب اللہ کے سب سے خوبصورت نام ہیں۔',
            ar: 'نعم، أسماء الله الحسنى هي أحسن الأسماء وأكملها.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q13',
          type: 'mcq',
          question: {
            en: 'How many Beautiful Names of Allah are specially mentioned in Hadith to learn?',
            ur: 'حدیث شریف میں اللہ کے کتنے اسماء الحسنیٰ کا خصوصی ذکر ہے جنہیں یاد کرنے پر جنت کی بشارت ہے؟',
            ar: 'كم عدد أسماء الله الحسنى المذكورة في الحديث الشريف للفظها وحفظها؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ said: "Allah has ninety-nine names; whoever learns them will enter Paradise."',
            ur: 'نبی کریم ﷺ نے فرمایا: اللہ کے 99 نام ہیں، جو انہیں یاد کرے گا جنت میں جائے گا۔',
            ar: 'قال النبي ﷺ: إن لله تسعة وتسعين اسماً من أحصاها دخل الجنة.',
          },
          options: [
            { id: '1', text: { en: '99 Names', ur: '99 نام', ar: '99 اسماً' }, isCorrect: true },
            { id: '2', text: { en: '10 Names', ur: '10 نام', ar: '10 أسماء' }, isCorrect: false },
            { id: '3', text: { en: '50 Names', ur: '50 نام', ar: '50 اسماً' }, isCorrect: false },
            { id: '4', text: { en: '1000 Names', ur: '1000 نام', ar: '1000 اسم' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q14',
          type: 'mcq',
          question: {
            en: 'What does "As-Sami" mean when referring to Allah?',
            ur: 'اللہ تعالیٰ کا صفتِ مبارکہ "السمیع" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "السميع"؟',
          },
          explanation: {
            en: 'As-Sami means The All-Hearing Who hears every sound, whisper, and prayer.',
            ur: 'السمیع کا مطلب ہے ہر بات اور ہر دعا کو سننے والا۔',
            ar: 'السميع يعني الذي يسمع كل الأصوات والدعاء.',
          },
          options: [
            { id: '1', text: { en: 'The All-Hearing', ur: 'سب کچھ سننے والا', ar: 'السميع لكل شيء' }, isCorrect: true },
            { id: '2', text: { en: 'The All-Seeing', ur: 'سب دیکھنے والا', ar: 'البصير' }, isCorrect: false },
            { id: '3', text: { en: 'The Powerful', ur: 'قدرت والا', ar: 'القادر' }, isCorrect: false },
            { id: '4', text: { en: 'The Maker', ur: 'بنانے والا', ar: 'الباري' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q15',
          type: 'mcq',
          question: {
            en: 'What does "Al-Basir" mean?',
            ur: 'اللہ کے اسمِ گرامی "البصیر" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "البصير"؟',
          },
          explanation: {
            en: 'Al-Basir means The All-Seeing Who sees everything in light and darkness.',
            ur: 'البصیر کا مطلب ہے ہر چیز کو دیکھنے والا، اندھیرے اور اجالے میں۔',
            ar: 'البصير يعني الذي يرى كل شيء في الظلمات والنور.',
          },
          options: [
            { id: '1', text: { en: 'The All-Seeing', ur: 'سب کچھ دیکھنے والا', ar: 'البصير بعباده' }, isCorrect: true },
            { id: '2', text: { en: 'The Creator', ur: 'خالق', ar: 'الخالق' }, isCorrect: false },
            { id: '3', text: { en: 'The King', ur: 'بادشاہ', ar: 'الملك' }, isCorrect: false },
            { id: '4', text: { en: 'The Peace', ur: 'سلامتی والا', ar: 'السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q16',
          type: 'true_false',
          question: {
            en: 'Should we make Dua (supplication) only to Allah Ta\'ala?',
            ur: 'کیا ہمیں دعا صرف اور صرف اللہ تعالیٰ سے مانگنی چاہیے؟',
            ar: 'هل يجب أن ندعو الله تعالى وحده لا شريك له؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "Dua is worship." We ask Allah alone for help.',
            ur: 'جی ہاں! دعا عبادت کا مغز ہے اور ہمیں صرف اللہ ہی سے مانگنا چاہیے۔',
            ar: 'نعم! الدعاء هو العبادة، ونسأل الله وحده ولا نسأل غيره.',
          },
          options: [
            { id: '1', text: { en: 'True (Only to Allah)', ur: 'سچ (صرف اللہ سے)', ar: 'صحيح (لله وحده)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q17',
          type: 'mcq',
          question: {
            en: 'What is the greatest sin in Islam?',
            ur: 'اسلام میں سب سے بڑا اور ناقابلِ معافی گناہ کون سا ہے اگر توبہ نہ کی جائے؟',
            ar: 'ما هو أعظم ذنب في الإسلام؟',
          },
          explanation: {
            en: 'Shirk (associating partners with Allah) is the greatest sin in Islam.',
            ur: 'شرک (اللہ کے ساتھ کسی اور کو شریک ٹھہرانا) سب سے بڑا گناہ ہے۔',
            ar: 'الشرك بالله هو أعظم الذنوب.',
          },
          options: [
            { id: '1', text: { en: 'Shirk (Associating partners with Allah)', ur: 'شرک (اللہ کے ساتھ شریک بنانا)', ar: 'الشرك بالله' }, isCorrect: true },
            { id: '2', text: { en: 'Lying', ur: 'جھوٹ بولنا', ar: 'الكذب' }, isCorrect: false },
            { id: '3', text: { en: 'Being messy', ur: 'بے ترتیبی', ar: 'الفوضى' }, isCorrect: false },
            { id: '4', text: { en: 'Wasting food', ur: 'کھانا ضائع کرنا', ar: 'إهدار الطعام' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q18',
          type: 'mcq',
          question: {
            en: 'How can a Muslim feel close to Allah every day?',
            ur: 'ایک مسلمان روزانہ اللہ تعالیٰ سے قربت کیسے حاصل کر سکتا ہے؟',
            ar: 'كيف يشعر المسلم بالقرب من الله كل يوم؟',
          },
          explanation: {
            en: 'Through Salah (prayer), reading Quran, remembering Allah (Dhikr), and doing good deeds.',
            ur: 'نماز کی پابندی، تلاوتِ قرآن، ذکرِ الٰہی اور نیک اعمال کے ذریعے سے۔',
            ar: 'بالصلاة وتلاوة القرآن والذكر والأعمال الصالحة.',
          },
          options: [
            { id: '1', text: { en: 'Through Salah, Dhikr, Quran, and good deeds', ur: 'نماز، ذکر، قرآن اور نیک اعمال کے ذریعے', ar: 'بالصلاة والذكر والقرآن والعمل الصالح' }, isCorrect: true },
            { id: '2', text: { en: 'By playing video games all day', ur: 'دن بھر گیمز کھیل کر', ar: 'باللعب طول اليوم' }, isCorrect: false },
            { id: '3', text: { en: 'By sleeping all time', ur: 'ہر وقت سو کر', ar: 'بالنوم المستمر' }, isCorrect: false },
            { id: '4', text: { en: 'By ignoring parents', ur: 'والدین کی بات نہ مان کر', ar: 'بعدم إطاعة الوالدين' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q19',
          type: 'true_false',
          question: {
            en: 'Is Allah aware when we do a good deed in secret when no one is watching?',
            ur: 'کیا اللہ کو اس نیکی کا پتہ ہوتا ہے جو ہم چھپ کر کرتے ہیں جب کوئی نہیں دیکھ رہا ہوتا؟',
            ar: 'هل يعلم الله عندما نعمل عملاً صالحاً بالسر دون أن يرانا أحد؟',
          },
          explanation: {
            en: 'Yes! Allah sees all secret good deeds and rewards them generously.',
            ur: 'جی ہاں! اللہ ہر چھپی نیکی کو دیکھتا ہے اور اس کا بہترین اجر عطا فرماتا ہے۔',
            ar: 'نعم! الله يعلم السر وأخفى ويجزي على الخير بالسر خير الجزاء.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c1_q20',
          type: 'mcq',
          question: {
            en: 'What statement should a Muslim say to express praise and thanks to Allah?',
            ur: 'ایک مسلمان کو اللہ کی حمد و ثنا اور شکر ادا کرنے کے لیے کیا کہنا چاہیے؟',
            ar: 'ماذا يقول المسلم لحمد الله وشكره على نعمه؟',
          },
          explanation: {
            en: 'Alhamdulillah means "All praise and thanks belong to Allah."',
            ur: 'الحمد للہ کا مطلب ہے "تمام تعریفیں اور شکر اللہ ہی کے لیے ہیں۔"',
            ar: 'الحمد لله يعني الثناء والشكر لله تعالى.',
          },
          options: [
            { id: '1', text: { en: 'Alhamdulillah', ur: 'الحمد للہ', ar: 'الحمد لله' }, isCorrect: true },
            { id: '2', text: { en: 'Astaghfirullah', ur: 'استغفر اللہ', ar: 'أستغفر الله' }, isCorrect: false },
            { id: '3', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
            { id: '4', text: { en: 'Bismillah', ur: 'بسم اللہ', ar: 'بسم الله' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

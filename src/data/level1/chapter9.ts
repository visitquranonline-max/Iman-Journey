import { Category } from '../../types';

export const chapter9: Category = {
  id: 'lvl1_cat9',
  number: 9,
  title: {
    en: 'Chapter 9: Islamic Manners and Character',
    ur: 'باب 9: اسلامی آداب اور اخلاقِ حسنہ',
    ar: 'الفصل 9: الآداب والأخلاق الإسلامية',
  },
  description: {
    en: 'Master noble Islamic character (Akhlaq): Truthfulness, kindness to parents, patience, forgiveness, cleanliness, and humility.',
    ur: 'اعلیٰ ترین اسلامی اخلاق و آداب سیکھیں: سچائی، والدین کا احترام، صبر، درگزر، طہارت اور عاجزی۔',
    ar: 'تعلم مكارم الأخلاق والآداب الإسلامية: الصدق، بر الوالدين، الصبر، العفو، الطهارة، والتواضع.',
  },
  iconName: 'HeartHandshake',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat9_les1',
      title: {
        en: 'The Beauty of Noble Character (Husn al-Khuluq)',
        ur: 'حسنِ اخلاق کی خوبصورتی',
        ar: 'جمال حسن الخلق',
      },
      summary: {
        en: 'Prophet Muhammad ﷺ declared: "I was sent only to perfect noble character." High moral values are the heaviest weight on the scale of deeds.',
        ur: 'نبی کریم ﷺ نے فرمایا: "مجھے اعلیٰ اخلاق کی تکمیل کے لیے بھیجا گیا ہے۔" حسنِ اخلاق قیامت کے دن میزان میں سب سے بھاری عمل ہوگا۔',
        ar: 'قال النبي ﷺ: "إنما بعثت لأتمم مكارم الأخلاق". حسن الخلق أثقل شيء في الميزان يوم القيامة.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c9_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, what is the importance of good character (Akhlaq) in Islam?',
            ur: 'شیخ طارق، اسلام میں اچھے اخلاق (حسنِ اخلاق) کی کیا اہمیت ہے؟',
            ar: 'يا شيخ طارق، ما هي أهمية حسن الخلق في الإسلام؟',
          },
          sceneIllustration: 'HeartHandshake',
        },
        {
          id: 'c9_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Good character is the core of faith! Prophet Muhammad ﷺ said: "The heaviest thing placed on the Scale of a believer on the Day of Resurrection is good character."',
            ur: 'حسنِ اخلاق ایمان کی روح ہے! نبی کریم ﷺ نے فرمایا: "قیامت کے دن میزان میں مومن کا سب سے بھاری عمل اس کا اچھا اخلاق ہوگا۔"',
            ar: 'حسن الخلق هو روح الإيمان! قال رسول الله ﷺ: "أثقل شيء في ميزان العبد يوم القيامة حسن الخلق".',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Good character (Husn al-Khuluq) is the heaviest deed on the Scales on Judgment Day.',
            ur: 'قیامت کے دن ترازو میں سب سے بھاری نیکی اچھا اخلاق ہوگی۔',
            ar: 'حسن الخلق هو أثقل عمل في الميزان يوم القيامة.',
          },
        },
        {
          id: 'c9_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What are the main daily manners a Muslim child should practice?',
            ur: 'ایک مسلمان بچے کے لیے روزمرہ زندگی کے کون سے اہم آداب ہیں؟',
            ar: 'ما هي أهم الآداب اليومية التي يجب أن يتحلى بها الطفل المسلم؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'c9_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: '1. Sidq (truthfulness always), 2. Birr al-Walidayn (respecting and helping parents), 3. Salam (greeting everyone), 4. Taharah (cleanliness), 5. Sabr (patience when tested), and 6. Tawadu (humility)!',
            ur: '1۔ سچائی، 2۔ والدین کی خدمت، 3۔ سلام میں پہل کرنا، 4۔ پاکیزگی، 5۔ صبر کرنا، اور 6۔ عاجزی و انکساری رکھنا!،',
            ar: '1. الصدق دائماً، 2. بر الوالدين، 3. إفشاء السلام، 4. الطهارة والنظافة، 5. الصبر، 6. التواضع وعدم التكبر.',
          },
          sceneIllustration: 'BookOpen',
          keyPoint: {
            en: 'Cleanliness is half of faith (At-Tuhuru shatru al-Iman).',
            ur: 'پاکیزگی اور صفائی نصف ایمان ہے۔',
            ar: 'الطهور شطر الإيمان.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Truthfulness (Sidq) leads to righteousness (Birr), and righteousness leads to Jannah.',
          ur: 'سچائی نیکی کی طرف لے جاتی ہے اور نیکی کا راستہ جنت کی طرف جاتا ہے۔',
          ar: 'الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة.',
        },
        {
          en: 'Paradise lies under the feet of mothers, and pleasing parents earns Allah\'s pleasure.',
          ur: 'جنت ماؤں کے قدموں تلے ہے، اور والدین کو راضی کرنا اللہ کی رضا کا ذریعہ ہے۔',
          ar: 'رضا الله في رضا الوالدين، والجنة تحت أقدام الأمهات.',
        },
        {
          en: 'Smiling in the face of your brother or sister is counted as Sadaqah (charity).',
          ur: 'اپنے بھائی یا بہن کے سامنے مسکرانا بھی صدقہ ہے۔',
          ar: 'تبسمك في وجه أخيك صدقة.',
        },
        {
          en: 'A Muslim controls anger, forgives easily, and speaks good or remains silent.',
          ur: 'مسلمان اپنے غصے پر قابو رکھتا ہے، معاف کرتا ہے اور اچھی بات بولتا ہے یا خاموش رہتا ہے۔',
          ar: 'المسلم يكظم الغيظ ويعفو عن الناس، ويقول خيراً أو ليصمت.',
        },
      ],
      quiz: [
        {
          id: 'c9_q1',
          type: 'mcq',
          question: {
            en: 'What did Prophet Muhammad ﷺ say about the primary purpose of his mission regarding character?',
            ur: 'نبی کریم ﷺ نے اپنے بعثت کے بنیادی مقصد یعنی اخلاق کے بارے میں کیا ارشاد فرمایا؟',
            ar: 'ماذا قال النبي ﷺ عن الغرض الأساسي من بعثته فيما يتعلق بالأخلاق؟',
          },
          explanation: {
            en: '"I was sent only to perfect noble character" (Innama bu\'ith tu li-utammima makarim al-akhlaq).',
            ur: 'آپ ﷺ نے فرمایا: "مجھے اعلیٰ ترین اخلاق کی تکمیل کے لیے بھیجا گیا ہے۔"',
            ar: 'قال ﷺ: "إنما بعثت لأتمم مكارم الأخلاق".',
          },
          options: [
            { id: '1', text: { en: '"I was sent to perfect noble character"', ur: '"مجھے اعلیٰ ترین اخلاق کی تکمیل کے لیے بھیجا گیا ہے"', ar: '"إنما بعثت لأتمم مكارم الأخلاق"' }, isCorrect: true },
            { id: '2', text: { en: '"I was sent to gather gold"', ur: '"مجھے سونا جمع کرنے بھیجا گیا"', ar: '"بعثت لأجمع الذهب"' }, isCorrect: false },
            { id: '3', text: { en: '"I was sent to build towers"', ur: '"مجھے عمارات بنانے بھیجا گیا"', ar: '"بعثت لأبني العمارات"' }, isCorrect: false },
            { id: '4', text: { en: '"I was sent to conquer markets"', ur: '"مجھے منڈیاں جیتنے بھیجا گیا"', ar: '"بعثت لأفتح الأسواق"' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q2',
          type: 'mcq',
          question: {
            en: 'What is "Sidq" in Islam?',
            ur: 'اسلامی تعلیمات میں "صدق" (Sidq) کا کیا مطلب ہے؟',
            ar: 'ما معنى "الصدق" في الإسلام؟',
          },
          explanation: {
            en: 'Sidq means Truthfulness in speech, promises, and intentions.',
            ur: 'صدق کا مطلب ہے بات چیت، وعدے اور نیت میں سچائی اختیار کرنا۔',
            ar: 'الصدق هو المطابقة بين القول والواقع والنية.',
          },
          options: [
            { id: '1', text: { en: 'Truthfulness in words, actions, and promises', ur: 'بات چیت، وعدے اور عمل میں سچائی', ar: 'الصدق في القول والعمل والوعد' }, isCorrect: true },
            { id: '2', text: { en: 'Lying when convenient', ur: 'موقع دیکھ کر جھوٹ بولنا', ar: 'الكذب عند الحاجة' }, isCorrect: false },
            { id: '3', text: { en: 'Making fun of friends', ur: 'دوستوں کا مذاق اڑانا', ar: 'السخرية من الأصدقاء' }, isCorrect: false },
            { id: '4', text: { en: 'Secretly hiding items', ur: 'چھپا کر چیزیں رکھنا', ar: 'إخفاء الأشياء' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q3',
          type: 'mcq',
          question: {
            en: 'Where does truthfulness (Sidq) ultimately guide a person according to Hadith?',
            ur: 'حدیثِ مبارکہ کے مطابق سچائی انسان کو بالآخر کہاں لے جاتی ہے؟',
            ar: 'إلى أين يهدي الصدقُ الإنسانَ في نهاية المطاف كما في الحديث الشريف؟',
          },
          explanation: {
            en: 'Truthfulness leads to righteousness, and righteousness leads directly to Jannah!',
            ur: 'سچائی نیکی کی طرف ہدایت دیتی ہے اور نیکی کا راستہ سیدھا جنت کو جاتا ہے۔',
            ar: 'الصدق يهدي إلى البر، والبر يهدي إلى الجنة.',
          },
          options: [
            { id: '1', text: { en: 'To righteousness and Jannah', ur: 'نیکی اور جنت کی طرف', ar: 'إلى البر والجنة' }, isCorrect: true },
            { id: '2', text: { en: 'To confusion', ur: 'پریشانی کی طرف', ar: 'إلى الحيرة' }, isCorrect: false },
            { id: '3', text: { en: 'To loss', ur: 'نقصان کی طرف', ar: 'إلى الخسارة' }, isCorrect: false },
            { id: '4', text: { en: 'Nowhere', ur: 'کہیں نہیں', ar: 'لا مكان' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q4',
          type: 'mcq',
          question: {
            en: 'What is "Birr al-Walidayn"?',
            ur: '"بر الوالدین" کا کیا اسلامی مفہوم ہے؟',
            ar: 'ما معنى "بر الوالدين"؟',
          },
          explanation: {
            en: 'Birr al-Walidayn means showing extreme kindness, respect, obedience, and care to parents.',
            ur: 'والدین کا احترام، اطاعت اور ان کے ساتھ حسنِ سلوک کرنا۔',
            ar: 'بر الوالدين هو إكرامهما وطاعتهما والإحسان إليهما.',
          },
          options: [
            { id: '1', text: { en: 'Kindness, obedience, and respect to parents', ur: 'والدین کے ساتھ حسنِ سلوک، احترام اور اطاعت', ar: 'الإحسان إلى الوالدين وطاعتهما واحترامهما' }, isCorrect: true },
            { id: '2', text: { en: 'Arguing with parents', ur: 'والدین سے بحث کرنا', ar: 'الجدال مع الوالدين' }, isCorrect: false },
            { id: '3', text: { en: 'Ignoring their requests', ur: 'ان کی بات نہ سننا', ar: 'تجاهل طلباتهما' }, isCorrect: false },
            { id: '4', text: { en: 'Raising voice at home', ur: 'گھر میں اونچی آواز میں بولنا', ar: 'رفع الصوت بالبيت' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q5',
          type: 'mcq',
          question: {
            en: 'Who deserves our finest companionship and kindest behavior first after Allah and Prophet Muhammad ﷺ?',
            ur: 'اللہ اور اس کے رسول ﷺ کے بعد ہمارے حسنِ سلوک کا سب سے پہلا اور بڑا حقدار کون ہے؟',
            ar: 'من أحق الناس بحسن الصحبة والإحسان بعد الله ورسوله ﷺ؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ repeated 3 times in Hadith: "Your Mother, Your Mother, Your Mother, then Your Father!"',
            ur: 'آپ ﷺ نے حدیث میں تین بار فرمایا: "آپ کی والدہ، آپ کی والدہ، آپ کی والدہ، پھر آپ کے والد!"',
            ar: 'قال النبي ﷺ ثلاثاً: "أمك، ثم أمك، ثم أمك، ثم أبوك".',
          },
          options: [
            { id: '1', text: { en: 'Your Mother (3 times), then Your Father', ur: 'آپ کی والدہ (تین بار)، پھر آپ کے والد', ar: 'أمك (ثلاث مرات) ثم أبوك' }, isCorrect: true },
            { id: '2', text: { en: 'Game partner', ur: 'گیم کا ساتھی', ar: 'صديق اللعب' }, isCorrect: false },
            { id: '3', text: { en: 'Famous celebrity', ur: 'مشہور اداکار', ar: 'النجم المشهور' }, isCorrect: false },
            { id: '4', text: { en: 'Strangers online', ur: 'آن لائن اجنبی', ar: 'الغرباء بالإنترنت' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q6',
          type: 'mcq',
          question: {
            en: 'What did Prophet Muhammad ﷺ say about cleanliness (Taharah)?',
            ur: 'نبی کریم ﷺ نے طہارت اور صفائی کے بارے میں کیا فرمایا؟',
            ar: 'ماذا قال النبي ﷺ عن الطهارة والنظافة؟',
          },
          explanation: {
            en: '"Cleanliness is half of faith" (At-Tuhuru shatru al-Iman).',
            ur: '"الطهور شطر الإيمان" — طہارت و پاکیزگی نصف ایمان ہے۔',
            ar: '"الطهور شطر الإيمان".',
          },
          options: [
            { id: '1', text: { en: 'Cleanliness is half of faith', ur: 'طہارت و پاکیزگی نصف ایمان ہے', ar: 'الطهور شطر الإيمان' }, isCorrect: true },
            { id: '2', text: { en: 'Cleanliness is not important', ur: 'صفائی اہم نہیں', ar: 'النظافة ليست مهمة' }, isCorrect: false },
            { id: '3', text: { en: 'Cleanliness is for holidays only', ur: 'صفائی صرف چھٹی کے دن کے لیے ہے', ar: 'النظافة في العطلات فقط' }, isCorrect: false },
            { id: '4', text: { en: 'Cleanliness is wasting time', ur: 'صفائی وقت کا ضیاع ہے', ar: 'النظافة تضيع الوقت' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q7',
          type: 'mcq',
          question: {
            en: 'What act of kindness costs nothing but earns rewards as Sadaqah (charity)?',
            ur: 'کون سا چھوٹا سا کام جس پر کوئی خرچ نہیں آتا مگر وہ صدقہ کا ثواب دیتا ہے؟',
            ar: 'ما هو العمل اللطيف الذي لا يكلف شيئاً ولكنه يُكتب صدقة؟',
          },
          explanation: {
            en: 'Smiling cheerfully in the face of your fellow brother or sister.',
            ur: 'اپنے کسی بھائی یا بہن کو دیکھ کر مسکرانا۔',
            ar: 'التبسم في وجه أخيك.',
          },
          options: [
            { id: '1', text: { en: 'Smiling in the face of your brother/sister', ur: 'اپنے کسی بھائی یا بہن کے سامنے مسکرانا', ar: 'التبسم في وجه أخيك المسلم' }, isCorrect: true },
            { id: '2', text: { en: 'Buying a car', ur: 'گاڑی خریدنا', ar: 'شراء سيارة' }, isCorrect: false },
            { id: '3', text: { en: 'Shouting out loud', ur: 'اونچی آواز سے چلانا', ar: 'الصراخ بصوت عال' }, isCorrect: false },
            { id: '4', text: { en: 'Throwing trash on street', ur: 'سڑک پر کچرا پھینکنا', ar: 'رمي القمامة بالشارع' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q8',
          type: 'mcq',
          question: {
            en: 'What Islamic greeting should a Muslim offer when meeting another person?',
            ur: 'جب ایک مسلمان دوسرے شخص سے ملے تو اسے کیا مسنون سلام کہنا چاہیے؟',
            ar: 'ما هي التحية الإسلامية المسنونة عند لقاء الآخرين؟',
          },
          explanation: {
            en: 'Assalamu Alaikum wa Rahmatullah wa Barakatuh (Peace, mercy, and blessings of Allah be upon you).',
            ur: 'السلام علیکم ورحمۃ اللہ وبرکاتہ۔',
            ar: 'السلام عليكم ورحمة الله وبركاته.',
          },
          options: [
            { id: '1', text: { en: 'Assalamu Alaikum wa Rahmatullah', ur: 'السلام علیکم ورحمۃ اللہ وبرکاتہ', ar: 'السلام عليكم ورحمة الله وبركاته' }, isCorrect: true },
            { id: '2', text: { en: 'Hey yo', ur: 'ہیلو بائے', ar: 'مرحباً هكذا' }, isCorrect: false },
            { id: '3', text: { en: 'Good luck', ur: 'گڈ لک', ar: 'حظ سعيد' }, isCorrect: false },
            { id: '4', text: { en: 'Bye bye', ur: 'بائے بائے', ar: 'مع السلامة فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q9',
          type: 'mcq',
          question: {
            en: 'What is "Sabr" in Islam?',
            ur: 'اسلام میں "صبر" سے کیا مراد ہے؟',
            ar: 'ما معنى "الصبر" في الشريعة الإسلامية؟',
          },
          explanation: {
            en: 'Sabr is patience, perseverance, self-control, and remaining steadfast upon Allah\'s obedience during difficulty.',
            ur: 'مشکل اور ازمائش میں ثابت قدم رہنا، غصے پر قابو رکھنا اور اللہ کے فیصلے پر راضی رہنا۔',
            ar: 'الصبر هو الثبات والتحمل وحبس النفس عن الجزع والغضب.',
          },
          options: [
            { id: '1', text: { en: 'Patience, perseverance, and emotional self-control', ur: 'مشکلات میں ثابت قدمی، صبر اور خود پر ضبط', ar: 'الثبات والتحمل وحبس النفس عن الجزع' }, isCorrect: true },
            { id: '2', text: { en: 'Screaming in anger', ur: 'غصے میں چیخنا', ar: 'الصراخ عند الغضب' }, isCorrect: false },
            { id: '3', text: { en: 'Breaking things', ur: 'چیزی توڑنا', ar: 'كسر الأشياء' }, isCorrect: false },
            { id: '4', text: { en: 'Giving up hope', ur: 'امید چھوڑ دینا', ar: 'اليأس من الرحمة' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q10',
          type: 'mcq',
          question: {
            en: 'What is "Tawadu"?',
            ur: '"تواضع" (عاجزی) سے کیا مراد ہے؟',
            ar: 'ما معنى "التواضع"؟',
          },
          explanation: {
            en: 'Tawadu is Humility — avoiding pride or arrogance (Kibr), and viewing oneself as an equal humble servant of Allah.',
            ur: 'عاجزی اور انکساری اختیار کرنا اور غرور و تکبر سے دور رہنا۔',
            ar: 'التواضع هو عدم التكبر والتعالي على خلق الله.',
          },
          options: [
            { id: '1', text: { en: 'Humility and freedom from pride/arrogance', ur: 'عاجزی و انکساری اور تکبر سے پرہیز', ar: 'التواضع وترك الكبر والغرور' }, isCorrect: true },
            { id: '2', text: { en: 'Showing off wealth', ur: 'مال کا دکھاوا کرنا', ar: 'التفاخر بالمال' }, isCorrect: false },
            { id: '3', text: { en: 'Looking down on poor people', ur: 'غریبوں کو حقیر سمجھنا', ar: 'احتقار الفقراء' }, isCorrect: false },
            { id: '4', text: { en: 'Boasting', ur: 'شیخیاں بگھارنا', ar: 'الافتخار بالنفس' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q11',
          type: 'true_false',
          question: {
            en: 'Will a person who has even an atom\'s weight of pride (Kibr) in their heart enter Jannah directly?',
            ur: 'کیا جس انسان کے دل میں ذرّہ برابر بھی تکبر ہوگا وہ براہِ راست جنت میں جائے گا؟',
            ar: 'هل يدخل الجنةَ مَنْ كان في قلبه مثقالُ ذرةٍ من كبرٍ؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ warned: "He will not enter Jannah who has in his heart an atom\'s weight of pride."',
            ur: 'آپ ﷺ نے خبردار فرمایا: "جس کے دل میں ایک رتی برابر بھی تکبر ہوا وہ جنت میں نہیں جائے گا۔"',
            ar: 'قال النبي ﷺ: "لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر".',
          },
          options: [
            { id: '1', text: { en: 'No, pride blocks entry to Jannah', ur: 'جی نہیں، تکبر جنت میں جانے سے مانع ہے', ar: 'لا، الكبر يمنع من دخول الجنة' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, pride is okay', ur: 'جی ہاں، تکبر جائز ہے', ar: 'نعم الكبر مقبول' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q12',
          type: 'mcq',
          question: {
            en: 'What advice did Prophet Muhammad ﷺ give when a man repeatedly asked him: "Advise me"?',
            ur: 'جب ایک صحابی نے نبی کریم ﷺ سے بار بار نصیحت کی درخواست کی تو آپ ﷺ نے کیا فرمایا؟',
            ar: 'بماذا نصح النبي ﷺ الرجلَ الذي قال له مراراً: "أوصني"؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ repeatedly said: "Do not become angry!" (La taghdab).',
            ur: 'آپ ﷺ نے بار بار فرمایا: "غصہ نہ کرو!"',
            ar: 'كرر النبي ﷺ قوله: "لا تغضب".',
          },
          options: [
            { id: '1', text: { en: '"Do not become angry!" (La taghdab)', ur: '"غصہ نہ کرو!" (لا تغضب)', ar: '"لا تغضب!"' }, isCorrect: true },
            { id: '2', text: { en: '"Eat a lot!"', ur: 'خوب کھاؤ!', ar: 'كُل كثيراً' }, isCorrect: false },
            { id: '3', text: { en: '"Sleep all day!"', ur: 'دن بھر سوئے رہو!', ar: 'نم طول اليوم' }, isCorrect: false },
            { id: '4', text: { en: '"Buy new clothes!"', ur: 'نئے کپڑے خریدو!', ar: 'اشتر ملابس جديدة' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q13',
          type: 'mcq',
          question: {
            en: 'What should a Muslim say when feeling angry to seek protection from Shaytan?',
            ur: 'جب غصہ آئے تو شیطان کے شر سے بچنے کے لیے کیا مسنون پڑھنا چاہیے؟',
            ar: 'ماذا يقول المسلم عند الغضب للتعوذ من الشيطان الرجيم؟',
          },
          explanation: {
            en: '"A\'udhu billahi min ash-Shaytan ir-Rajeem" (I seek refuge in Allah from the accursed Shaytan).',
            ur: '"أعوذ بالله من الشيطان الرجيم" پڑھنا چاہیے۔',
            ar: '"أعوذ بالله من الشيطان الرجيم".',
          },
          options: [
            { id: '1', text: { en: 'A\'udhu billahi min ash-Shaytan ir-Rajeem', ur: 'اعوذ باللہ من الشیطان الرجیم', ar: 'أعوذ بالله من الشيطان الرجيم' }, isCorrect: true },
            { id: '2', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
            { id: '3', text: { en: 'Labaik', ur: 'لبیک', ar: 'لبيك' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q14',
          type: 'true_false',
          question: {
            en: 'Is backbiting (Gheebah — talking badly about someone behind their back) forbidden in Islam?',
            ur: 'کیا غیبت (پیٹھ پیچھے کسی کی برائی کرنا) اسلام میں سخت حرام ہے؟',
            ar: 'هل الغيبة (ذكر أخيك بما يكره في غيابه) محرمة في الإسلام؟',
          },
          explanation: {
            en: 'Yes! The Quran compares Gheebah to eating the flesh of one\'s dead brother (Surah Al-Hujurat 49:12).',
            ur: 'جی ہاں! قرآنِ پاک میں غیبت کو مرے ہوئے بھائی کا گوشت کھانے کے برابر قرار دیا گیا ہے۔',
            ar: 'نعم! شبه الله الغيبة بأكل لحم الأخ الميت في سورة الحجرات.',
          },
          options: [
            { id: '1', text: { en: 'True (Strictly forbidden in Quran)', ur: 'سچ (قرآن میں سخت حرام ہے)', ar: 'صحيح (محرمة شديد التحرير)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q15',
          type: 'mcq',
          question: {
            en: 'What should a Muslim do if someone accidentally hurts or wrongs them?',
            ur: 'اگر کوئی غلطی سے آپ کو تکلیف پہنچائے یا زیادتی کرے تو مسلم کو کیا کرنا چاہیے؟',
            ar: 'ماذا يفعل المسلم إذا أخطأ أحد في حقه أو آذاه؟',
          },
          explanation: {
            en: 'Forgive them (Al-\'Afw) for Allah\'s sake! Allah loves those who pardon people.',
            ur: 'اللہ کی خاطر معاف اور درگزر فرمائے، کیونکہ اللہ معاف کرنے والوں کو پسند کرتا ہے۔',
            ar: 'العفو والإصفاح ابتغاء مرضاة الله.',
          },
          options: [
            { id: '1', text: { en: 'Forgive and pardon for Allah\'s sake', ur: 'اللہ کی خاطر معاف اور درگزر کرے', ar: 'العفو والتسامح ابتغاء وجه الله' }, isCorrect: true },
            { id: '2', text: { en: 'Hurt them back twice as hard', ur: 'دگنا بدلہ لے', ar: 'الانتقام بضعف الإيذاء' }, isCorrect: false },
            { id: '3', text: { en: 'Tell lies about them', ur: 'ان کی بابت جھوٹ بولے', ar: 'اختلاق الكذب عليهم' }, isCorrect: false },
            { id: '4', text: { en: 'Steal their items', ur: 'ان کی چیزیں چرا لے', ar: 'سرقة أشيائهم' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q16',
          type: 'mcq',
          question: {
            en: 'What is the etiquette of eating food in Islam taught by Prophet Muhammad ﷺ?',
            ur: 'نبی کریم ﷺ کے سکھائے ہوئے کھانا کھانے کے مسنون آداب کیا ہیں؟',
            ar: 'ما هي آداب الطعام في الإسلام كما علمنا النبي ﷺ؟',
          },
          explanation: {
            en: 'Say Bismillah, eat with your RIGHT hand, and eat from what is directly in front of you.',
            ur: 'بسم اللہ پڑھیں، دائیں ہاتھ سے کھائیں اور اپنے سامنے سے کھائیں۔',
            ar: 'سم الله، وكل بيمينك، وكل مما يليك.',
          },
          options: [
            { id: '1', text: { en: 'Say Bismillah, eat with RIGHT hand, eat from in front', ur: 'بسم اللہ پڑھیں، دائیں ہاتھ سے اور سامنے سے کھائیں', ar: 'سم الله وكل بيمينك ومما يليك' }, isCorrect: true },
            { id: '2', text: { en: 'Eat with left hand quickly', ur: 'بائیں ہاتھ سے جلدی جلدی کھائیں', ar: 'الأكل باليد اليسرى بسرعة' }, isCorrect: false },
            { id: '3', text: { en: 'Throw food on floor', ur: 'زمین پر کھانا گرائیں', ar: 'رمي الطعام في الأرض' }, isCorrect: false },
            { id: '4', text: { en: 'Complain about the food taste', ur: 'کھانے میں عیب نکالیں', ar: 'ذم الطعام' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q17',
          type: 'true_false',
          question: {
            en: 'Did Prophet Muhammad ﷺ ever criticize or complain about food served to him?',
            ur: 'کیا نبی کریم ﷺ نے کبھی اپنے سامنے پیش کیے گئے کھانے میں عیب نکالا یا شکایت کی؟',
            ar: 'هل عابَ النبيُّ ﷺ طعاماً قَطُّ؟',
          },
          explanation: {
            en: 'No! Hadith recorded by Imam Bukhari: "The Prophet ﷺ never criticized any food at all. If he liked it he ate it, and if he disliked it he left it silently."',
            ur: 'جی نہیں! آپ ﷺ نے کبھی کسی کھانے میں عیب نہیں نکالا، پسند آتا تو تناول فرماتے ورنہ خاموشی سے چھوڑ دیتے تھے۔',
            ar: 'لا! ما عاب النبي ﷺ طعاماً قط، إن اشتهاه أكله وإلا تركه.',
          },
          options: [
            { id: '1', text: { en: 'No, he never criticized any food ever', ur: 'جی نہیں، آپ ﷺ نے کبھی کسی کھانے میں عیب نہیں نکالا', ar: 'لا، ما عاب طعاماً قط' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, constantly', ur: 'جی ہاں، ہمیشہ عیب نکالتے تھے', ar: 'نعم دائماً' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q18',
          type: 'mcq',
          question: {
            en: 'How should a Muslim treat neighbors according to Islamic teachings?',
            ur: 'اسلامی تعلیمات کے مطابق ایک مسلمان کو اپنے پڑوسیوں کے ساتھ کیسا سلوک کرنا چاہیے؟',
            ar: 'كيف يعامل المسلم جيرانه وفق التعاليم الإسلامية؟',
          },
          explanation: {
            en: 'With extreme kindness, sending them food, helping them when sick, and never bothering them.',
            ur: 'نرمی، ان کے گھر تحفہ و کھانا بھیجنا اور ان کی مدد و غمخواری کرنا۔',
            ar: 'بالإحسان وإهدائهم وتفقد أحوالهم وكف الأذى عنهم.',
          },
          options: [
            { id: '1', text: { en: 'With utmost kindness, sharing food, & avoiding harm', ur: 'انتہائی حسنِ سلوک، کھانا شیئر کرنا اور تکلیف نہ پہنچانا', ar: 'بالإحسان ومشاركة الطعام وكف الأذى' }, isCorrect: true },
            { id: '2', text: { en: 'Making loud noise late at night', ur: 'رات کو اونچی آواز میں شور کرنا', ar: 'إزعاجهم بالليل' }, isCorrect: false },
            { id: '3', text: { en: 'Blocking their doorway', ur: 'ان کا راستہ بند کرنا', ar: 'إغلاق طريقهم' }, isCorrect: false },
            { id: '4', text: { en: 'Ignoring them entirely', ur: 'انہیں بالکل نظر انداز کرنا', ar: 'تجاهلهم تماماً' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q19',
          type: 'true_false',
          question: {
            en: 'Does Islam teach kindness to animals, birds, and environmental cleanliness?',
            ur: 'کیا اسلام جانوروں، پرندوں پر رحم اور ماحول کی صفائی کی تعلیم دیتا ہے؟',
            ar: 'هل يدعو الإسلام إلى الرحمة بالحيوانات والنظافة البيئية؟',
          },
          explanation: {
            en: 'Yes! A person was forgiven by Allah for giving water to a thirsty dog, and another rewarded for removing a thorny branch from a pathway.',
            ur: 'جی ہاں! پیاسے کتے کو پانی پلانے پر ایک شخص کی مغفرت ہو گئی تھی اور راستے سے کانٹا ہٹانے پر اجر ہے۔',
            ar: 'نعم! غفر الله لرجل سقى كلباً عطشاناً، وإماطة الأذى عن الطريق صدقة.',
          },
          options: [
            { id: '1', text: { en: 'True (Kindness to all creatures brings reward)', ur: 'سچ (تمام مخلوق پر رحم سے ثواب ملتا ہے)', ar: 'صحيح (في كل كبد رطبة أجر)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c9_q20',
          type: 'mcq',
          question: {
            en: 'What principle did Prophet Muhammad ﷺ give about speaking good or staying silent?',
            ur: 'نبی کریم ﷺ نے بات چیت کرنے اور زبان کی حفاظت کے متعلق کیا سنہرا اصول فرمایا؟',
            ar: 'ما المبدأ الذهبي الذي أعطاه النبي ﷺ في حفظ اللسان وقول الخير؟',
          },
          explanation: {
            en: '"Whoever believes in Allah and the Last Day, let him speak good or remain silent!"',
            ur: '"جو شخص اللہ اور آخرت پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے۔"',
            ar: '"من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت".',
          },
          options: [
            { id: '1', text: { en: '"Let him speak good or remain silent!"', ur: '"یا تو اچھی بات کہے یا خاموش رہے!"', ar: '"فليقل خيراً أو ليصمت!"' }, isCorrect: true },
            { id: '2', text: { en: '"Shout as loud as possible"', ur: '"جتنا ہو سکے اونچا چلاؤ"', ar: '"اصرخ بأعلى صوتك"' }, isCorrect: false },
            { id: '3', text: { en: '"Tell rumors freely"', ur: '"افواہیں پھیلاؤ"', ar: '"انشر الشائعات"' }, isCorrect: false },
            { id: '4', text: { en: '"Argue with everyone"', ur: '"ہر ایک سے بحث کرو"', ar: '"جادل الجميع"' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

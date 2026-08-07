import { Category } from '../../types';

export const chapter6: Category = {
  id: 'lvl2_cat6',
  number: 6,
  title: {
    en: 'Chapter 6: Quran and Divine Books (Intermediate)',
    ur: 'باب 6: قرآن اور آسمانی کتابیں (درمیانی سطح)',
    ar: 'الفصل 6: القرآن والكتب السماوية (المستوى المتوسط)',
  },
  description: {
    en: 'Understand divine revelation (Wahy), previous scriptures (Suhuf, Tawrat, Zabur, Injeel), the status of the Quran as the final criterion (Muhaimin), and its divine preservation.',
    ur: 'وحی الٰہی، سابقہ صحائف و کتب (صحف، توراۃ، زبور، انجیل)، قرآن مجید کی مہیمن حیثیت اور اس کی حفاظتِ الٰہی کو سمجھیں۔',
    ar: 'فهم الوحي، والكتب السماوية السابقة (الصحف، التوراة، الزبور، الإنجيل)، ومكانة القرآن الكريم وكونه هيمنة ومحفوظاً بحفظ الله.',
  },
  iconName: 'BookMarked',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat6_les1',
      title: {
        en: 'The Divine Revelations and the Finality of the Quran',
        ur: 'آسمانی کتب کا نزوُل اور قرآن پاک کی عظمت',
        ar: 'نزول الكتب السماوية وهيمنة القرآن الكريم',
      },
      summary: {
        en: 'Allah revealed scriptures to guide humanity: Suhuf to Ibrahim (AS), Tawrat to Musa (AS), Zabur to Dawud (AS), Injeel to Isa (AS), and the Holy Quran to Prophet Muhammad ﷺ. The Quran is protected from any alteration by Allah Himself.',
        ur: 'اللہ تعالیٰ نے ہدایت کے لیے کتب نازل فرمائیں: صحفِ ابراہیم، توراۃِ موسیٰ، زبورِ داؤد، انجیلِ عیسیٰ اور قرآنِ محمد ﷺ۔ قرآن کریم کی حفاظت کا ذمہ خود اللہ تعالیٰ نے لیا ہے۔',
        ar: 'أنزل الله الكتب لهداية البشرية: صحف إبراهيم، وتوراة موسى، وزبور داود، وإنجيل عيسى، والقرآن الكريم على محمد ﷺ والمحفوظ من التغيير بحفظ الله.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c6_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, what are the names of all the major Divine Scriptures mentioned in the Quran?',
            ur: 'شیخ طارق! قرآن مجید میں جن بڑی آسمانی کتابوں کے نام آئے ہیں وہ کون کون سی ہیں؟',
            ar: 'يا شيخ طارق! ما هي أسماء الكتب السماوية الرئيسية المذكورة في القرآن الكريم؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c6_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'They are: 1) Suhuf (Scrolls) of Ibrahim & Musa, 2) Tawrat given to Musa (AS), 3) Zabur given to Dawud (AS), 4) Injeel given to Isa (AS), and 5) The Holy Quran revealed to Prophet Muhammad ﷺ!',
            ur: 'وہ یہ ہیں: 1) صحفِ ابراہیم و موسیٰ، 2) توراۃ جو حضرت موسیٰ کو ملی، 3) زبور جو حضرت داؤد کو ملی، 4) انجیل جو حضرت عیسیٰ کو ملی، اور 5) قرآن مجید جو نبی کریم ﷺ پر نازل ہوا!',
            ar: 'هي: 1) صحف إبراهيم وموسى، 2) التوراة لموسى عليه السلام، 3) الزبور لداود عليه السلام، 4) الإنجيل لعيسى عليه السلام، 5) القرآن الكريم لمحمد ﷺ!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Muslims believe in all original divine revelations given to Allah\'s Messengers.',
            ur: 'مسلمان اللہ کی نازل کردہ تمام اصلی آسمانی کتب پر ایمان رکھتے ہیں۔',
            ar: 'يؤمن المسلم بجميع الكتب السماوية التي أنزلها الله على رسله.',
          },
        },
        {
          id: 'l2_c6_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Why is the Quran unique among all scriptures, and why has it remained completely unchanged for over 1400 years?',
            ur: 'قرآن مجید دیگر تمام کتابوں سے منفرد کیوں ہے اور یہ 1400 سے زائد سالوں سے بغير کسی تبدیلی کے کیسے محفوظ ہے؟',
            ar: 'لماذا يُعتبر القرآن فريداً بين الكتب، وكيف بقي محفوظاً بتمامة أكثر من 1400 عام؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'l2_c6_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Allah Himself promised in Surah Al-Hijr: "Inna nahnu nazzalna-dh-dhikra wa inna lahu la-hafizun" (We revealed the Remembrances and We will surely guard it). It has been preserved word-for-word in memory (Hifz) and writing!',
            ur: 'اللہ تعالیٰ نے سورۃ الحجر میں خود فرمایا: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ" (ہم ہی نے اس ذکر کو نازل کیا اور ہم ہی اس کے محافظ ہیں)۔ یہ حفظ اور تحریر میں لفظ بہ لفظ محفوظ ہے!',
            ar: 'تعهد الله بنفسه في سورة الحجر: "إنا نحن نزلنا الذكر وإنا له لحافظون". وهو محفوظ حرفياً بالحفظ في الصدور والكتابة!',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'The Quran is guarded directly by Allah (Hifz-e-Ilahi) and serves as the final criterion (Muhaimin) for truth.',
            ur: 'قرآن کریم اللہ کی براہِ راست حفاظت میں ہے اور حق و باطل کا حتمی معیار (مہیمن) ہے۔',
            ar: 'القرآن الكريم محفوظ بحفظ الله وهو المهيمن والحاكم على الكتب السابقة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Wahy (Divine Revelation) came to Prophet Muhammad ﷺ through Angel Jibreel (AS) over 23 years.',
          ur: 'وحیِ الٰہی نبی کریم ﷺ پر حضرت جبرائیل علیہ السلام کے ذریعہ 23 سال کے عرصے میں نازل ہوئی۔',
          ar: 'نزل الوحي على النبي محمد ﷺ بواسطة جبريل عليه السلام مقسطاً في 23 سنة.',
        },
        {
          en: 'The Quran confirms the truth in original previous scriptures and corrects human alterations.',
          ur: 'قرآن سابقہ کتبِ الٰہی کی اصلی سچائی کی تصدیق کرتا ہے اور انسانی تحریف کی تصحیح کرتا ہے۔',
          ar: 'القرآن يصدق ما قبل الحق في الكتب ويهيمن عليها ويصوب التغيير البشري.',
        },
        {
          en: 'Reciting, understanding, and living by the Quran brings light, barakah, and guidance in daily life.',
          ur: 'قرآن کی تلاوت، تفہیم اور اس پر عمل سے زندگی میں نور، برکت اور ہدایت حاصل ہوتی ہے۔',
          ar: 'تلاوة القرآن وفهمه والعمل به يورث البركة والنور والهداية في الحياة.',
        },
      ],
      quiz: [
        {
          id: 'l2_q6_1',
          type: 'mcq',
          question: {
            en: 'Which Divine Scripture was revealed to Prophet Dawud (AS) (David)?',
            ur: 'حضرت داؤد علیہ السلام پر کون سی آسمانی کتاب نازل کی گئی؟',
            ar: 'ما اسم الكتاب السماوي الذي أُنزل على داود عليه السلام؟',
          },
          explanation: {
            en: 'Zabur (The Psalms) was revealed to Prophet Dawud (AS).',
            ur: 'حضرت داؤد علیہ السلام پر "زبور" نازل فرمائی گئی۔',
            ar: 'أُنزل الزبور على داود عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Zabur (Psalms)', ur: 'زبور', ar: 'الزبور' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Injeel', ur: 'انجیل', ar: 'الإنجيل' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Tawrat', ur: 'توراۃ', ar: 'التوراة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_2',
          type: 'true_false',
          question: {
            en: 'Has a single letter of the Holy Quran been altered or lost since its revelation over 1400 years ago?',
            ur: 'کیا 1400 سے زائد سال قبل نزوُل کے بعد سے قرآن مجید کا ایک حرف بھی تبدیل یا ضائع ہوا ہے؟',
            ar: 'هل تغير أو ضاع حرف واحد من القرآن الكريم منذ نزوله قبل أكثر من 1400 عام؟',
          },
          explanation: {
            en: 'No! Allah guaranteed its complete divine preservation in Surah Al-Hijr (15:9).',
            ur: 'ہرگز نہیں! اللہ تعالیٰ نے سورۃ الحجر (15:9) میں اس کی کامل حفاظت کی ضمانت فرمائی ہے۔',
            ar: 'لا! تكفل الله بحفظه في سورة الحجر (15:9).',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Not a single letter has changed)', ur: 'جھوٹ (ایک حرف بھی تبدیل نہیں ہوا)', ar: 'خطأ (لم يتغير حرف واحد بحفظ الله)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q6_3',
          type: 'mcq',
          question: {
            en: 'Which Divine Scripture was revealed to Prophet Musa (AS) (Moses)?',
            ur: 'حضرت موسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل فرمائی گئی؟',
            ar: 'ما اسم الكتاب السماوي الذي أنزله الله على موسى عليه السلام؟',
          },
          explanation: {
            en: 'Tawrat (The Torah).',
            ur: 'توراۃ۔',
            ar: 'التوراة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Tawrat (Torah)', ur: 'توراۃ', ar: 'التوراة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Zabur', ur: 'زبور', ar: 'الزبور' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Suhuf Ibrahim only', ur: 'صرف صحفِ ابراہیم', ar: 'صحف إبراهيم فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_4',
          type: 'mcq',
          question: {
            en: 'Over how many total years was the Holy Quran revealed gradually to Prophet Muhammad ﷺ?',
            ur: 'قرآن پاک نبی کریم ﷺ پر تدریجاً کل کتنے سال کے عرصے میں نازل ہوا؟',
            ar: 'كم سنة استغرق نزول القرآن الكريم تنزيلاً مقسطاً على النبي ﷺ؟',
          },
          explanation: {
            en: 'The Quran was revealed over approximately 23 years (13 years in Makkah and 10 years in Madinah).',
            ur: 'قرآن مجید تقریباً 23 سال کے عرصے (13 سال مکہ اور 10 سال مدینہ) میں نازل ہوا۔',
            ar: 'نزل القرآن خلال نحو 23 سنة (13 في مكة و10 في المدينة).',
          },
          options: [
            { id: 'opt1', text: { en: '23 years', ur: '23 سال', ar: '23 سنة' }, isCorrect: true },
            { id: 'opt2', text: { en: '1 year', ur: '1 سال', ar: 'سنة واحدة' }, isCorrect: false },
            { id: 'opt3', text: { en: '50 years', ur: '50 سال', ar: '50 سنة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_5',
          type: 'mcq',
          question: {
            en: 'What does the term "Muhaimin" mean when describing the Quran\'s relation to earlier books?',
            ur: 'سابقہ کتب کے مقابلے میں قرآن مجید کی صفت "مہیمن" سے کیا مراد ہے؟',
            ar: 'ما معنى كَوْن القرآن "مهيمناً" على الكتب السابقة؟',
          },
          explanation: {
            en: 'Muhaimin means the Quran is the supreme guardian, judge, and criterion confirming original truths.',
            ur: 'مہیمن کا مطلب ہے کہ قرآن سابقہ کتابوں کی اصل سچائیوں کا نگران، حاکم اور معیار ہے۔',
            ar: 'مهيمناً أي حافكاً وشاهداً ومصححاً وميزاناً على الكتب السابقة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Supreme Guardian and Criterion confirming original truth', ur: 'سابقہ اصلی سچائیوں کا نگران اور معیار', ar: 'مهيمن وميزان وحاكم مصدق للحق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'A poetry book only', ur: 'صرف شاعری کی کتاب', ar: 'كتاب شعر فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'An ancient history timeline', ur: 'قدیم تاریخ کا خاکسار', ar: 'جدول تاريخي قديم' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_6',
          type: 'true_false',
          question: {
            en: 'Was the Holy Quran revealed all at once in a single printed book bound in leather?',
            ur: 'کیا قرآن پاک ایک ہی مرتبہ میں چمڑے میں جلی ہوئی کتاب کی شکل میں نازل ہوا تھا؟',
            ar: 'هل نزل القرآن الكريم مرة واحدة كتاباً مجلداً؟',
          },
          explanation: {
            en: 'No! The Quran was revealed gradually (Ayaat and Surahs) in response to events and situations over 23 years.',
            ur: 'نہیں۔ قرآن مجید 23 سال کے عرصے میں حالات و واقعات کے مطابق تدریجاً نازل ہوا۔',
            ar: 'لا! نزل القرآن مفرقاً على مدى 23 عاماً لحكم متعددة.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Revealed gradually over 23 years)', ur: 'جھوٹ (23 سال میں تدریجاً نازل ہوا)', ar: 'خطأ (نزل مفرقاً في 23 سنة)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q6_7',
          type: 'mcq',
          question: {
            en: 'Which noble Prophet was blessed with the "Suhuf" (Scrolls) mentioned in Surah Al-A\'la?',
            ur: 'سورۃ الاعلیٰ میں کن کے "صحف" (صحیفوں) کا تذکرہ فرمایا گیا ہے؟',
            ar: 'من هما النبيان اللذان ذُكرت صحيفتاهما في سورة الأعلى؟',
          },
          explanation: {
            en: 'Surah Al-A\'la states: "Suhufi Ibraheema wa Musa" (The Scrolls of Ibrahim and Musa).',
            ur: 'سورۃ الاعلیٰ میں ہے: "صُحُفِ إِبْرَاهِيمَ وَمُوسَى"۔',
            ar: 'قال تعالى: "صحف إبراهيم وموسى".',
          },
          options: [
            { id: 'opt1', text: { en: 'Ibrahim and Musa (AS)', ur: 'حضرت ابراہیم اور حضرت موسیٰ علیہما السلام', ar: 'إبراهيم وموسى عليهما السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Nuh and Adam (AS)', ur: 'حضرت نوح اور حضرت آدم علیہما السلام', ar: 'نوح وآدم عليهما السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Yunus and Lut (AS)', ur: 'حضرت یونس اور حضرت لوط علیہما السلام', ar: 'يونس ولوط عليهما السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_8',
          type: 'true_false',
          question: {
            en: 'Is memorizing the Holy Quran (Hifz) one of the ways Allah preserved His Scripture through millions of believers?',
            ur: 'کیا لاکھوں مسلمانوں کے سینوں میں قرآن مجید کا حفظ ہونا اس کی حفاظت کا ایک اہم الٰہی طریقہ ہے؟',
            ar: 'هل حفظ القرآن الكريم في الصدور (الحفظ) وسائل حفظ الله لكتابه عبر ملايين المسلمين؟',
          },
          explanation: {
            en: 'Yes! Throughout history, millions of Huffaz have carried the exact Quran in their hearts.',
            ur: 'جی ہاں! پوری تاریخ میں لاکھوں حفاظِ کرام نے قرآن پاک کو اپنے سینوں میں من و عن محفوظ رکھا ہے۔',
            ar: 'نعم! ملايين الحفاظ يقرؤون القرآن حرفياً عن ظهر قلب عبر القرون.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_9',
          type: 'mcq',
          question: {
            en: 'What is the primary language in which the Holy Quran was revealed?',
            ur: 'قرآن مجید کس بنیادی اور مبارک زبان میں نازل ہوا؟',
            ar: 'ما هي اللغة الأساسية التي نزل بها القرآن الكريم؟',
          },
          explanation: {
            en: 'Arabic (Lisanun \'Arabiyyun Mubeen).',
            ur: 'فصیح عربی زبان۔',
            ar: 'اللغة العربية الفصحى (لسان عربي مبين).',
          },
          options: [
            { id: 'opt1', text: { en: 'Arabic (Lisanun \'Arabiyyun Mubeen)', ur: 'فصیح عربی زبان', ar: 'اللغة العربية الفصحى' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Hebrew only', ur: 'عبرانی', ar: 'العبرية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Latin', ur: 'لاطینی', ar: 'اللاتينية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Yusuf recites Surah Al-Fatiha every day in Salah. What should he do to gain deeper benefit from the Quran?',
            ur: 'منظرنامہ: یوسف روزانہ نماز میں سورۃ الفاتحہ پڑھتا ہے۔ قرآن سے مزید گہرا فائدہ حاصل کرنے کے لیے اسے کیا کرنا چاہیے؟',
            ar: 'سيناريو: يقرأ يوسف سورة الفاتحة يومياً في الصلاة. ما الذي ينبغي عليه ليعظم انتفاعه بالقرآن؟',
          },
          explanation: {
            en: 'Learn its meaning, ponder over its message (Tadabbur), and act upon its guidance.',
            ur: 'اس کا ترجمہ و تفہیم سیکھے، اس کے پیغام پر تدبر کرے اور اس کی ہدایت پر عمل کرے۔',
            ar: 'يتعلم معانيها ويتدبر آياتها ويعمل بما فيها من هداية.',
          },
          options: [
            { id: 'opt1', text: { en: 'Learn its meaning, ponder upon it, and practice it in life', ur: 'معنی سیکھے، تدبر کرے اور اپنی زندگی میں عمل کرے', ar: 'تعلم المعنى والتدبر والتطبيق العملي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Recite very fast without thinking', ur: 'بغیر سوچے بہت تیز پڑھے', ar: 'القراءة السريعة دون التفكير' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Keep the book closed on a high shelf only', ur: 'کتاب کو صرف اونچی الماری میں بند رکھے', ar: 'إغلاق المصحف فقط على الرف' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_11',
          type: 'true_false',
          question: {
            en: 'Does reading a single letter of the Holy Quran carry divine rewards (Hasanat)?',
            ur: 'کیا قرآن مجید کا ایک حرف پڑھنے پر بھی اجر و ثواب (حسنات) ملتا ہے؟',
            ar: 'هل قراءة حرف واحد من القرآن الكريم تعطى عليها حسنة؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "Whoever reads a letter from the Book of Allah will receive a reward, and that reward will be multiplied by ten."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: جو شخص اللہ کی کتاب کا ایک حرف پڑھے گا اسے ایک نیکی ملے گی جو دس گنا کی جائے گی۔',
            ar: 'نعم! قال ﷺ: "من قرأ حرفاً من كتاب الله فله به حسنة، والحسنة بعشر أمثالها".',
          },
          options: [
            { id: 'opt1', text: { en: 'True (1 letter = 10 rewards)', ur: 'سچ (1 حرف = 10 حسنات)', ar: 'صحيح (الحرف بعشر حسنات)' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_12',
          type: 'mcq',
          question: {
            en: 'What were the scribes who wrote down the Quranic verses as they were revealed during the Prophet\'s life called?',
            ur: 'نبی کریم ﷺ کی ظاہری حیات میں نازل ہونے والی آیات لکھنے والے صحابہ کو کیا کہا جاتا ہے؟',
            ar: 'ماذا كان يُسمى الصحابة الذين يكتبون آيات القرآن فور نزولها في عهد النبي ﷺ؟',
          },
          explanation: {
            en: 'Kuttab al-Wahy (The Scribes of Revelation, like Zayd ibn Thabit).',
            ur: 'کُتّابِ وحی (وحی لکھنے والے صحابہ جیسے حضرت زید بن ثابت)۔',
            ar: 'كُتّاب الوحي (مثل زيد بن ثابت رضي الله عنه).',
          },
          options: [
            { id: 'opt1', text: { en: 'Kuttab al-Wahy (Scribes of Revelation)', ur: 'کتّابِ وحی', ar: 'كُتّاب الوحي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Travelers', ur: 'مسافر', ar: 'المسافرون' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Poets', ur: 'شعراء', ar: 'الشعراء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_13',
          type: 'mcq',
          question: {
            en: 'Under whose leadership as Caliph was the Holy Quran compiled into a single official written Mushaf volume?',
            ur: 'کس خلیفہ راشد کے دورِ خلافت میں تمام صحابہ کرام کے مشورے سے قرآن مجید کو سرکاری نسخے (مصحفِ عثمانی) میں یکجا کیا گیا؟',
            ar: 'في عهد أي من الخلفاء الراشدين تم تجميع المصحف الشريف الموحد؟',
          },
          explanation: {
            en: 'First compiled under Abu Bakr (RA), and official standardized Mushaf copies were distributed under Uthman ibn Affan (RA).',
            ur: 'پہلی تدوین حضرت ابو بکر الصدیق اور پھر مصحفِ عثمانی کی سرکاری اشاعت حضرت عثمان غنی رضی اللہ عنہما کے دور میں ہوئی۔',
            ar: 'جُمع أولاً في عهد أبي بكر الصديق، ووُحدت المصاحف في عهد عثمان بن عفان رضي الله عنهما.',
          },
          options: [
            { id: 'opt1', text: { en: 'Abu Bakr (RA) and Uthman ibn Affan (RA)', ur: 'حضرت ابو بکر الصدیق اور حضرت عثمان غنی رضی اللہ عنہما', ar: 'أبو بكر الصديق وعثمان بن عفان رضي الله عنهما' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Harun al-Rashid', ur: 'ہارون الرشید', ar: 'هارون الرشيد' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Non-Muslim rulers', ur: 'غیر مسلم حکمران', ar: 'حكام غير مسلمين' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_14',
          type: 'true_false',
          question: {
            en: 'Does the Holy Quran contain guidance for moral character, social justice, family affairs, and economic fairness?',
            ur: 'کیا قرآن مجید میں اخلاق، سماجی انصاف، خاندانی معاملات اور معاشی عدل کی جامع ہدایت موجود ہے؟',
            ar: 'هل يشتمل القرآن الكريم على هداية في الأخلاق، والعدل الاجتماعي، والأسرة، والاقتصاد؟',
          },
          explanation: {
            en: 'Yes! The Quran is a complete guide covering all dimensions of personal and collective life.',
            ur: 'جی ہاں! قرآن پاک انفرادی اور اجتماعی زندگی کے تمام شعبوں کے لیے مکمل رہنما ہے۔',
            ar: 'نعم! القرآن منهج شامل لكل مجالات الحياة الفردية والجماعية.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_15',
          type: 'mcq',
          question: {
            en: 'What is the Night of Power in Ramadan in which the Quran\'s first revelation descended called?',
            ur: 'رمضان المبارک کی وہ کون سی بابرکت رات ہے جس میں قرآن مجید کا نزول شروع ہوا؟',
            ar: 'ما اسم الليلة المباركة في رمضان التي بدأ فيها نزول القرآن؟',
          },
          explanation: {
            en: 'Laylat al-Qadr (The Night of Decree/Power), described in Surah Al-Qadr.',
            ur: 'لیلۃ القدر (سورۃ القدر میں بیان کردہ رات)۔',
            ar: 'ليلة القدر (المذكورة في سورة القدر).',
          },
          options: [
            { id: 'opt1', text: { en: 'Laylat al-Qadr', ur: 'لیلۃ القدر', ar: 'ليلة القدر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Laylat al-Mi\'raj only', ur: 'صرف شبِ معراج', ar: 'ليلة الإسراء والمعراج فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Eid night', ur: 'عید کی رات', ar: 'ليلة العيد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_16',
          type: 'mcq',
          question: {
            en: 'Which Surah is referred to as "Umm al-Kitab" (The Mother of the Book) and opened the Quran?',
            ur: 'قرآن مجید کی کون سی سورۃ "ام الکتاب" (کتاب کی ماں) کے نام سے معروف ہے؟',
            ar: 'أي سورة تُلقب بـ "أم الكتاب" وتفتتح القرآن الكريم؟',
          },
          explanation: {
            en: 'Surah Al-Fatiha.',
            ur: 'سورۃ الفاتحہ۔',
            ar: 'سورة الفاتحة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Surah Al-Fatiha', ur: 'سورۃ الفاتحہ', ar: 'سورة الفاتحة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Surah Yasin', ur: 'سورۃ یٰس', ar: 'سورة يس' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Surah Al-Baqarah', ur: 'سورۃ البقرہ', ar: 'سورة البقرة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_17',
          type: 'true_false',
          question: {
            en: 'Should a person purify themselves (perform Wudu) and treat the printed Mushaf with respect and care?',
            ur: 'کیا انسان کو طہارت (وضو) اختیار کرنی چاہیے اور مصحفِ قرآن کا ادب و احترام کرنا چاہیے؟',
            ar: 'هل ينبغي للمسلم أن يتطهر (يتوضأ) ويتعامل مع المصحف الشريف بإجلال واحترام؟',
          },
          explanation: {
            en: 'Yes! Respecting the words of Allah and maintaining ritual purity for reciting from the Mushaf is highly emphasized.',
            ur: 'جی ہاں! اللہ کے کلام کا احترام اور تلاوت کے لیے باوضو ہونا ضروری و مستحب ہے۔',
            ar: 'نعم! إجلال كلام الله والطهور عند مس المصحف من تعظيم شعائر الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_18',
          type: 'mcq',
          question: {
            en: 'What is "Tadabbur" regarding the Holy Quran?',
            ur: 'قرآن مجید کے سلسلے میں "تدبر" سے کیا مراد ہے؟',
            ar: 'ما هو "التدبر" فيما يتعلق بالقرآن الكريم؟',
          },
          explanation: {
            en: 'Tadabbur means deeply pondering over the meaning, wisdom, and application of Quranic verses.',
            ur: 'تدبر کا مطلب ہے قرآن کی آیات کے مفہوم، حکمتوں اور عملی پہلوؤں پر غور و فکر کرنا۔',
            ar: 'التدبر هو التفكير العميق في معاني الآيات وحكمها والتطبيق بها.',
          },
          options: [
            { id: 'opt1', text: { en: 'Deeply reflecting and pondering over its meanings', ur: 'آیات کے معانی پر غور و فکر اور تدبر کرنا', ar: 'التفكر والتأمل العميق في معاني الآيات' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Reading without understanding a single word', ur: 'بغیر سمجھے جلدی پڑھنا', ar: 'القراءة بدون فهم إطلاقاً' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Translating into unknown codes', ur: 'اجنبی کوڈز میں ترجمہ کرنا', ar: 'الترجمة إلى رموز مجهولة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_19',
          type: 'mcq',
          question: {
            en: 'How many Total Surahs (chapters) are in the Holy Quran?',
            ur: 'قرآن پاک میں کل کتنی سورتیں ہیں؟',
            ar: 'كم عدد سور القرآن الكريم الإجمالي؟',
          },
          explanation: {
            en: 'There are exactly 114 Surahs in the Holy Quran.',
            ur: 'قرآن مجید میں بالکل 114 سورتیں ہیں۔',
            ar: 'عدد سور القرآن الكريم 114 سورة.',
          },
          options: [
            { id: 'opt1', text: { en: '114 Surahs', ur: '114 سورتیں', ar: '114 سورة' }, isCorrect: true },
            { id: 'opt2', text: { en: '100 Surahs', ur: '100 سورتیں', ar: '100 سورة' }, isCorrect: false },
            { id: 'opt3', text: { en: '150 Surahs', ur: '150 سورتیں', ar: '150 سورة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q6_20',
          type: 'mcq',
          question: {
            en: 'What is the greatest reward for a Muslim who builds a loving, lifelong connection with the Quran?',
            ur: 'قرآن پاک کے ساتھ محبت اور عملی تعلق قائم کرنے والے مسلمان کے لیے سب سے بڑا انعام کیا ہے؟',
            ar: 'ما هو الفضل الأعظم للمسلم الذي يبني صلة وثيقة ومستمرة مع القرآن الكريم؟',
          },
          explanation: {
            en: 'The Quran will intercede (Shafa\'ah) for its reciter on the Day of Judgment and elevate their status in Jannah.',
            ur: 'قرآن قیامت کے دن اپنے پڑھنے والے کی سفارش (شفاعت) کرے گا اور جنت میں اس کے درجات کو بلند کرے گا۔',
            ar: 'يكون القرآن شفيعاً لصاحبه يوم القيامة ويرفع درجاته في الجنة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Intercession (Shafa\'ah) on the Day of Judgment and elevated status in Jannah', ur: 'قیامت کے دن قرآن کی شفاعت اور جنت میں بلندیِ درجات', ar: 'شفاعة القرآن له يوم القيامة ورفعة درجاته في الجنان' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Fame on social media', ur: 'سوشل میڈیا پر شہرت', ar: 'الشهرة على شبكات التواصل' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Worldly trophies only', ur: 'صرف دنیاوی ٹرافیاں', ar: 'كؤوس دنيوية فقط' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

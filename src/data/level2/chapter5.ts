import { Category } from '../../types';

export const chapter5: Category = {
  id: 'lvl2_cat5',
  number: 5,
  title: {
    en: 'Chapter 5: Prophets of Allah (Intermediate)',
    ur: 'باب 5: اللہ کے انبیاء کرام (درمیانی سطح)',
    ar: 'الفصل 5: أنبياء الله ورسله (المستوى المتوسط)',
  },
  description: {
    en: 'Discover why Prophets were sent, their noble qualities (Sidq, Amanah, Tabligh, Ismah), and vital lessons from Adam, Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ.',
    ur: 'انبیاء کی بعثت کا مقصد، ان کے عظیم اوصاف (صدق، امانت، تبلیغ، عصمت) اور حضرت آدم، نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ کی سیرت سے قیمتی اسباق۔',
    ar: 'التعرف على الغاية من بعثة الأنبياء، وصفاتهم العلية (الصدق، الأمانة، التبليغ، العصمة)، والدروس العظيمة من سير الأنبياء عليهم السلام.',
  },
  iconName: 'Users',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat5_les1',
      title: {
        en: 'The Purpose and Noble Qualities of Prophets',
        ur: 'بعثتِ انبیاء کا مقصد اور ان کے عظیم اوصاف',
        ar: 'الغاية من بعثة الرسل وصفاتهم الجليلة',
      },
      summary: {
        en: 'Allah sent Prophets (Ambiya) to guide humanity out of darkness into the light of Tawheed. Prophets possessed divine protection (Ismah), perfect truthfulness (Sidq), honesty (Amanah), and complete delivery of Allah\'s message (Tabligh).',
        ur: 'اللہ تعالیٰ نے انسانوں کو گمراہی کی تاریکی سے نکال کر توحید کے نور کی طرف لانے کے لیے انبیاء کو بھیجا۔ انبیاء کرام عصمت، صدق، امانت اور کامل تبلیغ کی صفات سے متصف تھے۔',
        ar: 'أرسل الله الأنبياء لإخراج الناس من الظلمات إلى نور التوحيد. وكانوا متصفين بالعصمة والصدق والأمانة والتبليغ التام.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c5_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq! Why did Allah choose human beings as Prophets rather than angels?',
            ur: 'شیخ طارق! اللہ تعالیٰ نے فرشتوں کے بجائے انسانوں ہی کو اپنا نبی کیوں منتخب فرمایا؟',
            ar: 'يا شيخ طارق! لماذا اختار الله الأنبياء والرسل من البشر بدلاً من الملائكة؟',
          },
          sceneIllustration: 'Users',
        },
        {
          id: 'l2_c5_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Human Prophets live among us, experience hardships, eat food, and walk in markets—so they can be perfect role models for us to follow in daily life!',
            ur: 'انسانی انبیاء ہمارے درمیان زندگی بسر کرتے ہیں، تکالیف پر صبر کرتے ہیں، کھاتے پیتے ہیں—تاکہ وہ ہماری روزمرہ زندگی کے لیے کامل ترین نمونہ عمل بن سکیں!',
            ar: 'لأن الأنبياء من البشر يعيشون بيننا، ويركبون ويتألمون ويطعمون، فيكونون قدوة حية نقتدي بها في حياتنا اليومية!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Human Prophets served as living practical role models for humanity.',
            ur: 'انسانی انبیاء نوعِ انسانی کے لیے عملی اور زندہ نمونہ عمل تھے۔',
            ar: 'الأنبياء من البشر هم القدوة العملية التطبيقية للناس.',
          },
        },
        {
          id: 'l2_c5_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What are the main spiritual lessons we learn from Adam (AS), Nuh (AS), Ibrahim (AS), Musa (AS), and Isa (AS)?',
            ur: 'حضرت آدم، نوح، ابراہیم، موسیٰ اور عیسیٰ علیہم السلام سے ہم کیا اہم اسباق سیکھتے ہیں؟',
            ar: 'ما هي الدروس الرئيسية التي نتعلمها من سير الأنبياء عليهم السلام؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c5_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Adam (AS) teaches sincere repentance (Tawbah); Nuh (AS) teaches 950 years of patience; Ibrahim (AS) demonstrates pure Tawheed and sacrifice; Musa (AS) courage against tyranny; Isa (AS) devotion; and Prophet Muhammad ﷺ is the Seal of Prophets and mercy to all creation!',
            ur: 'حضرت آدم سے سچی توبہ، حضرت نوح سے 950 سالہ صبر، حضرت ابراہیم سے توحید و ایثار، حضرت موسیٰ سے جابر کے سامنے حق گوئی، حضرت عیسیٰ سے شفقت اور نبی کریم ﷺ سے خاتم النبیین اور رحمت للعالمین ہونے کا سبق ملتا ہے!',
            ar: 'من آدم التوبة، ومن نوح الصبر الشديد، ومن إبراهيم التوحيد الخالص، ومن موسى الشجاعة أمام الظلم، ومن عيسى الرحمة، ومحمد ﷺ خاتم الأنبياء ورحمة للعالمين!',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'Prophet Muhammad ﷺ is Khatam an-Nabiyyin (Seal of Prophets)—no new prophet will ever come after him.',
            ur: 'نبی کریم ﷺ خاتم النبیین ہیں—آپ کے بعد کوئی نیا نبی نہیں آئے گا۔',
            ar: 'محمد ﷺ هو خاتم النبيين والرسل، فلا نبي بعده.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Prophets possessed four essential traits: Sidq (Truthfulness), Amanah (Honesty), Tabligh (Conveying the Message), and Ismah (Divine Protection from sin).',
          ur: 'انبیاء کے چار بنیادی اوصاف ہیں: صدق، امانت، کامل تبلیغ اور عصمت۔',
          ar: 'للأنبياء صفات أساسية: الصدق، الأمانة، التبليغ، والعصمة عن الذنوب.',
        },
        {
          en: 'Ulul \'Azm (Prophets of Firm Resolve) are Nuh (AS), Ibrahim (AS), Musa (AS), Isa (AS), and Muhammad ﷺ.',
          ur: 'اولوا العزم انبیاء میں حضرت نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ شامل ہیں۔',
          ar: 'أولوا العزم من الرسل هم: نوح، وإبراهيم، وموسى، وعيسى، ومحمد عليهم السلام.',
        },
        {
          en: 'Prophet Muhammad ﷺ was sent for all humanity as Rahmatan lil-\'Alamin (Mercy to all worlds).',
          ur: 'نبی کریم ﷺ تمام انسانیت کے لیے "رحمت للعالمین" بنا کر بھیجے گئے۔',
          ar: 'بُعث محمد ﷺ للناس كافة ورحمة للعالمين.',
        },
      ],
      quiz: [
        {
          id: 'l2_q5_1',
          type: 'mcq',
          question: {
            en: 'What was the core central message shared by ALL prophets sent by Allah?',
            ur: 'اللہ کے بھیجے ہوئے تمام انبیاء کرام کا بنیادی اور مشترکہ پیغام کیا تھا؟',
            ar: 'ما هي الرسالة الأساسية المشتركة بين جميع أنبياء الله؟',
          },
          explanation: {
            en: 'All Prophets preached Tawheed: worshipping Allah alone without associating any partners.',
            ur: 'تمام انبیاء نے توحید کی دعوت دی: صرف ایک اللہ کی عبادت کرنا اور شرک سے بچنا۔',
            ar: 'دعوة جميع الأنبياء كانت هي التوحيد: عبادة الله وحده لا شريك له.',
          },
          options: [
            { id: 'opt1', text: { en: 'Tawheed (Worshipping Allah Alone)', ur: 'توحید (صرف ایک اللہ کی عبادت)', ar: 'التوحيد - عبادة الله وحده' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Gaining political empires only', ur: 'صرف سیاسی اقتدار حاصل کرنا', ar: 'الحصول على الممالك فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Collecting taxes', ur: 'ٹیکس جمع کرنا', ar: 'جمع الضرائب' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_2',
          type: 'true_false',
          question: {
            en: 'Does Prophet Muhammad ﷺ hold the status of Khatam an-Nabiyyin (Seal of the Prophets)?',
            ur: 'کیا نبی کریم ﷺ "خاتم النبیین" (آخری نبی) کا مقام و مرتبه رکھتے ہیں؟',
            ar: 'هل محمد ﷺ هو خاتم النبيين والرسل فلا نبي بعده؟',
          },
          explanation: {
            en: 'Yes! The Quran states in Surah Al-Ahzab: "He is the Messenger of Allah and the Seal of the Prophets."',
            ur: 'جی ہاں! قرآن مجید میں ہے: "ما كان محمد أبا أحد من رجالكم ولكن رسول الله وخاتم النبيين"۔',
            ar: 'نعم! قال تعالى: "ولكن رسول الله وخاتم النبيين".',
          },
          options: [
            { id: 'opt1', text: { en: 'True (Final Prophet)', ur: 'سچ (آخری نبی)', ar: 'صحيح (خاتم الأنبياء والمرسلين)' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_3',
          type: 'mcq',
          question: {
            en: 'What does the noble quality "Sidq" mean regarding Allah\'s Prophets?',
            ur: 'انبیاء کرام کے اوصاف میں صفت "صدق" سے کیا مراد ہے؟',
            ar: 'ماذا تعني صفة "الصدق" في حق الأنبياء والرسل؟',
          },
          explanation: {
            en: 'Sidq means absolute truthfulness in speech and message; prophets never lied.',
            ur: 'صدق کا مطلب ہے کہ انبیاء کی بات اور پیغام میں کامل سچائی تھی؛ انہوں نے کبھی جھوٹ نہیں بولا۔',
            ar: 'الصدق يعني الصدق المفهوم في جميع الأقوال والرسالة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Absolute truthfulness in speech and guidance', ur: 'بات اور ہدایت میں کامل سچائی', ar: 'الصدق التام في القول والرسالة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Physical strength only', ur: 'صرف جسمانی طاقت', ar: 'القوة البدنية فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Wealth in gold', ur: 'سونے کی دولت', ar: 'ثروة الذهب' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_4',
          type: 'mcq',
          question: {
            en: 'What key lesson do we learn from Prophet Adam\'s (AS) life when he realized his mistake?',
            ur: 'جب حضرت آدم علیہ السلام سے بھول ہوئی تو ان کے طرزِ عمل سے ہمیں کیا سبق ملتا ہے؟',
            ar: 'ما هو الدرس الأساسي الذي نتعلمه من آدم عليه السلام عندما استغفر ربه؟',
          },
          explanation: {
            en: 'Sincere repentance (Tawbah) and turning immediately to Allah in humility.',
            ur: 'فوراً عاجزی کے ساتھ اللہ کے حضور سچی توبہ اور استغفار کرنا۔',
            ar: 'المبادرة بالتوبة الصادقة والتضرع والاستغفار بين يدي الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'Immediate sincere repentance (Tawbah)', ur: 'فوری اور سچی توبہ (استغفار)', ar: 'المبادرة بالتوبة والاستغفار' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Blaming others for mistakes', ur: 'دوسروں پر الزام لگانا', ar: 'إلقاء اللوم على الغير' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Giving up hope in Allah', ur: 'اللہ سے ناامید ہونا', ar: 'اليأس من رحمة الله' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_5',
          type: 'mcq',
          question: {
            en: 'How many years did Prophet Nuh (AS) call his people to Allah with incredible perseverance?',
            ur: 'حضرت نوح علیہ السلام نے کتنے سال تک مسلسل صبر اور محنت کے ساتھ اپنی قوم کو اللہ کی طرف بلایا؟',
            ar: 'كم سنة لبث نوح عليه السلام يدعو قومه إلى الله بصبر وثبات؟',
          },
          explanation: {
            en: 'The Quran states in Surah Al-\'Ankabut: 950 years (a thousand years less fifty).',
            ur: 'قرآن کریم کی سورۃ العنکبوت کے مطابق: 950 سال (پچاس کم ایک ہزار سال)۔',
            ar: 'ذكر القرآن في سورة العنكبوت: 950 سنة (ألف سنة إلا خمسين عاماً).',
          },
          options: [
            { id: 'opt1', text: { en: '950 years', ur: '950 سال', ar: '950 سنة' }, isCorrect: true },
            { id: 'opt2', text: { en: '100 years', ur: '100 سال', ar: '100 سنة' }, isCorrect: false },
            { id: 'opt3', text: { en: '40 years', ur: '40 سال', ar: '40 سنة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_6',
          type: 'true_false',
          question: {
            en: 'Prophet Ibrahim (AS) is called "Khaleelullah" (Friend of Allah) due to his unwavering Tawheed.',
            ur: 'حضرت ابراہیم علیہ السلام کو ان کی کامل توحید کی وجہ سے "خلیل اللہ" (اللہ کا دوست) کا لقب ملا۔',
            ar: 'سُمي إبراهيم عليه السلام "خليل الله" لإخلاصه وتوحيده الثابت.',
          },
          explanation: {
            en: 'True! Allah chose Ibrahim (AS) as His Khaleel (close friend).',
            ur: 'سچ! اللہ نے حضرت ابراہیم کو اپنا خلیل (دوست) منتخب فرمایا۔',
            ar: 'صحيح! قال تعالى: "واتخذ الله إبراهيم خليلاً".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_7',
          type: 'mcq',
          question: {
            en: 'Which tyrant king did Prophet Musa (AS) confront with divine truth and courage?',
            ur: 'حضرت موسیٰ علیہ السلام نے کس سرکش بادشاہ کے سامنے ڈٹ کر حق کی دعوت دی؟',
            ar: 'من هو الملك الطاغية الذي واجهه موسى عليه السلام بشجاعة وحق؟',
          },
          explanation: {
            en: 'Pharaoh (Fir\'awn).',
            ur: 'فرعون۔',
            ar: 'فرعون.',
          },
          options: [
            { id: 'opt1', text: { en: 'Pharaoh (Fir\'awn)', ur: 'فرعون', ar: 'فرعون' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Namrud', ur: 'نمرود', ar: 'نمرود' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Abu Lahab', ur: 'ابو لہب', ar: 'أبو لهب' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_8',
          type: 'mcq',
          question: {
            en: 'What divine scripture was revealed by Allah to Prophet Isa (AS) (Jesus)?',
            ur: 'اللہ تعالیٰ نے حضرت عیسیٰ علیہ السلام پر کون سی آسمانی کتاب نازل فرمائی؟',
            ar: 'ما اسم الكتاب السماوي الذي أنزله الله على عيسى عليه السلام؟',
          },
          explanation: {
            en: 'Injeel (The Gospel).',
            ur: 'انزیل۔',
            ar: 'الإنجيل.',
          },
          options: [
            { id: 'opt1', text: { en: 'Injeel (Gospel)', ur: 'انجیل', ar: 'الإنجيل' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Tawrat', ur: 'توراۃ', ar: 'التوراة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Zabur', ur: 'زبور', ar: 'الزبور' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_9',
          type: 'true_false',
          question: {
            en: 'Did Prophet Isa (AS) perform miracles (like healing the blind) by his own power or by Allah\'s permission?',
            ur: 'کیا حضرت عیسیٰ علیہ السلام نے معجزات (جیسے اندھوں کو بینا کرنا) اپنی ذات کی طاقت سے دکھائے یا اللہ کے حکم سے؟',
            ar: 'هل كان عيسى عليه السلام يفعل المعجزات بقوته الشخصية أم بإذن الله وحمده؟',
          },
          explanation: {
            en: 'The Quran specifies repeatedly: "Bi-idhnillah" (By the leave and permission of Allah).',
            ur: 'قرآن پاک بار بار فرماتا ہے: "بإذن الله" (اللہ کے حکم اور اجازت سے)۔',
            ar: 'بين القرآن تكراراً أن المعجزات كانت "بإذن الله".',
          },
          options: [
            { id: 'opt1', text: { en: 'By Allah\'s leave (Bi-idhnillah)', ur: 'اللہ کے حکم سے (بإذن الله)', ar: 'بإذن الله سبحانه وتوفيقه' }, isCorrect: true },
            { id: 'opt2', text: { en: 'By independent divine power', ur: 'اپنی ذاتی خدائی طاقت سے', ar: 'بقوته المستقلة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Hamza faces mockery for practicing his faith at school. Which prophet\'s patience should inspire him?',
            ur: 'منظرنامہ: حمزہ کو اپنے دین پر عمل کرنے پر مذاق کا سامنا ہے۔ اسے کس نبی علیہ السلام کے صبر سے ہِمت لینی چاہیے؟',
            ar: 'سيناريو: يواجه حمزة السخرية لالتزامه بدينه في المدرسة. أي سيرة نبي تجعله يقتدي بالصبر؟',
          },
          explanation: {
            en: 'Prophet Nuh, Ibrahim, and Muhammad ﷺ, who all bore mockery with patience and made Du\'a for their people.',
            ur: 'حضرت نوح، ابراہیم، اور محمد ﷺ کے اسوہ سے، جنہوں نے استہزاء کا جواب صبر اور حسن اخلاق سے دیا۔',
            ar: 'الأنبياء كنوح وإبراهيم ومحمد ﷺ الذين صبروا على السخرية والدعوة بالحسنى.',
          },
          options: [
            { id: 'opt1', text: { en: 'All prophets, who faced mockery with noble patience and Du\'a', ur: 'تمام انبیاء جنہوں نے طعن و تشنیع کا مقابلہ صبر و دعا سے کیا', ar: 'جميع الأنبياء الذين صبروا ودعوا قومهم بالخير' }, isCorrect: true },
            { id: 'opt2', text: { en: 'He should fight everybody violently', ur: 'سب سے لڑائی کرے', ar: 'أن يقاتل الجميع بعنف' }, isCorrect: false },
            { id: 'opt3', text: { en: 'He should abandon his faith', ur: 'اپنا دین چھوڑ دے', ar: 'أن يترك دينه' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_11',
          type: 'mcq',
          question: {
            en: 'What title is given to Prophet Muhammad ﷺ in Surah Al-Anbiya regarding all creation?',
            ur: 'سورۃ الانبیاء میں پوری کائنات کے حوالے سے نبی کریم ﷺ کو کیا لقب دیا گیا ہے؟',
            ar: 'ما الوصف الذي أُطلق على محمد ﷺ في سورة الأنبياء بالنسبة للعالمين؟',
          },
          explanation: {
            en: '"Wa ma arsalnaka illa Rahmatan lil-\'Alamin" (And We have not sent you except as a mercy to the worlds).',
            ur: '"وما أرسلناك إلا رحمة للعالمين" (اور ہم نے آپ کو تمام جہانوں کے لیے رحمت بنا کر ہی بھیجا)۔',
            ar: '"وما أرسلناك إلا رحمة للعالمين".',
          },
          options: [
            { id: 'opt1', text: { en: 'Rahmatan lil-\'Alamin (Mercy to all worlds)', ur: 'رحمت للعالمین', ar: 'رحمة للعالمين' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Ruler of Arabia only', ur: 'صرف عرب کا حاکم', ar: 'حاكم العرب فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Strict punisher', ur: 'سخت سزا دینے والا', ar: 'عاقب صارم' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_12',
          type: 'true_false',
          question: {
            en: 'Were Prophets protected by Allah from committing sins in delivering the Divine Message (Ismah)?',
            ur: 'کیا انبیاء کرام اللہ کی طرف سے پیغامِ الٰہی پہنچانے میں گناہوں سے محفوظ (معصوم) تھے؟',
            ar: 'هل كان الأنبياء معصومين من الذنوب والخطأ في تبليغ رسالة الله؟',
          },
          explanation: {
            en: 'Yes! Ismah (Divine Protection) guarantees that Prophets accurately and flawlessly conveyed Allah\'s guidance.',
            ur: 'جی ہاں! عصمت سے مراد ہے کہ انبیاء نے اللہ کے پیغام کو بغیر کسی کمی یا غلطی کے پہنچایا۔',
            ar: 'نعم! العصمة تضمن تبليغ الرسالة بأمانة تامة دون خطأ.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_13',
          type: 'mcq',
          question: {
            en: 'What does "Ulul \'Azm" mean when describing the prominent Messengers?',
            ur: 'انبیاءِ کرام کے گروہ میں "اولوا العزم" سے کیا مراد ہے؟',
            ar: 'ماذا يعني مصطلح "أولوا العزم" في حق كبار الرسل؟',
          },
          explanation: {
            en: 'Messengers of Firm Resolve and extraordinary perseverance in preaching truth.',
            ur: 'کامل صبر، عزمِ مصمم اور بلند ہمت والے اولوا العزم رسول۔',
            ar: 'الرسل أصحاب الصبر العظيم والعزيمة القوية في الدعوة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Messengers of Extraordinary Firm Resolve and Patience', ur: 'بڑی ہمت اور عزم والے اولوا العزم رسول', ar: 'الرسل أصحاب العزيمة والصبر العالي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The richest kings', ur: 'سب سے امیر بادشاہ', ar: 'أغنى الملوك' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The youngest prophets', ur: 'سب سے کم عمر انبیاء', ar: 'أصغر الأنبياء سناً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_14',
          type: 'mcq',
          question: {
            en: 'Which Prophet was given the miracle of the staff turning into a serpent and splitting the sea by Allah\'s leave?',
            ur: 'اللہ کے حکم سے کس نبی کو لاٹھی کا اژدہا بننے اور سمندر کے شق ہونے کا معجزہ عطا ہوا؟',
            ar: 'من هو النبي الذي أُعطي معجزة العصا التي تحولت حية وانفلاق البحر بأمر الله؟',
          },
          explanation: {
            en: 'Prophet Musa (AS) (Moses).',
            ur: 'حضرت موسیٰ علیہ السلام۔',
            ar: 'موسى عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Prophet Musa (AS)', ur: 'حضرت موسیٰ علیہ السلام', ar: 'موسى عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Prophet Yunus (AS)', ur: 'حضرت یونس علیہ السلام', ar: 'يونس عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Prophet Yusuf (AS)', ur: 'حضرت یوسف علیہ السلام', ar: 'يوسف عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_15',
          type: 'true_false',
          question: {
            en: 'Did any Prophet ask for monetary wages or personal gold from his people in return for preaching?',
            ur: 'کیا کسی نبی علیہ السلام نے دین کی دعوت کے بدلے اپنی قوم سے کوئی اجرت یا مال و دولت مانگا؟',
            ar: 'هل طلب أحد من الأنبياء أجراً مالياً من قومه مقابل إبلاغ الدعوة؟',
          },
          explanation: {
            en: 'No! All Prophets declared: "My reward is only from the Lord of the worlds" (In ajriya illa \'ala Rabbil-\'Alamin).',
            ur: 'ہرگز نہیں! تمام انبیاء نے فرمایا: میرا اجر صرف رب العالمین کے ذمے ہے۔',
            ar: 'لا! أعلن جميع الأنبياء: "إن أجري إلا على رب العالمين".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (They asked no worldly wage from people)', ur: 'جھوٹ (انہوں نے کوئی دنیاوی اجرت نہیں مانگی)', ar: 'خطأ (لم يطلبوا أي أجر دنيوي من الناس)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q5_16',
          type: 'mcq',
          question: {
            en: 'Which Prophet built the Ark (Kashti) under Allah\'s precise instructions to save believers from the flood?',
            ur: 'سیراب کرنے والے طوفان سے مومنوں کو بچانے کے لیے کس نبی نے اللہ کی ہدایت پر کشتی تعمیر فرمائی؟',
            ar: 'من هو النبي الذي بنى السفينة بإلهام الله لينجي المؤمنين من الطوفان؟',
          },
          explanation: {
            en: 'Prophet Nuh (AS) (Noah).',
            ur: 'حضرت نوح علیہ السلام۔',
            ar: 'نوح عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Prophet Nuh (AS)', ur: 'حضرت نوح علیہ السلام', ar: 'نوح عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Prophet Sulaiman (AS)', ur: 'حضرت سلیمان علیہ السلام', ar: 'سليمان عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Prophet Dawud (AS)', ur: 'حضرت داؤد علیہ السلام', ar: 'داود عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_17',
          type: 'mcq',
          question: {
            en: 'Which Prophet rebuilt the Holy Ka\'bah in Makkah alongside his son Ismail (AS)?',
            ur: 'کس نبی نے اپنے بیٹے حضرت اسماعیل علیہ السلام کے ساتھ مل کر مکہ مکرمہ میں خانہ کعبہ کو دوبارہ تعمیر فرمایا؟',
            ar: 'من هو النبي الذي رفع قواعد البيت الحرام في مكة مع ابنه إسماعيل عليهما السلام؟',
          },
          explanation: {
            en: 'Prophet Ibrahim (AS) (Abraham).',
            ur: 'حضرت ابراہیم علیہ السلام۔',
            ar: 'إبراهيم عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Prophet Ibrahim (AS)', ur: 'حضرت ابراہیم علیہ السلام', ar: 'إبراهيم عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Prophet Hud (AS)', ur: 'حضرت ہود علیہ السلام', ar: 'هود عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Prophet Salih (AS)', ur: 'حضرت صالح علیہ السلام', ar: 'صالح عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_18',
          type: 'true_false',
          question: {
            en: 'Is it required for Muslims to love and respect every Prophet mentioned in Islamic sources?',
            ur: 'کیا مسلمانوں کے لیے تمام انبیاء کرام سے محبت اور احترام رکھنا ضروری ہے؟',
            ar: 'هل يجب على المسلمين محبة واحترام جميع الأنبياء المذكورين في الإسلام؟',
          },
          explanation: {
            en: 'Yes! Loving all Messengers of Allah is a mandatory part of Islamic belief.',
            ur: 'جی ہاں! تمام رسولوں سے محبت رکھنا ایمان کا لازمی حصہ ہے۔',
            ar: 'نعم! الإيمان بجميع الرسل ومحبتهم جزء واجب من الإيمان.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_19',
          type: 'mcq',
          question: {
            en: 'What does "Amanah" mean among the qualities of Allah\'s Messengers?',
            ur: 'انبیاء کی صفات میں "امانت" کا کیا مطلب ہے؟',
            ar: 'ما معنى "الأمانة" في حق الرسل؟',
          },
          explanation: {
            en: 'Amanah means perfect honesty and trustworthiness; they protected the Divine Message without adding or suppressing anything.',
            ur: 'امانت کا مطلب ہے کہ انہوں نے امانت داری سے پیغامِ الٰہی کی حفاظت کی اور اس میں کوئی کمی بیشی نہیں کی۔',
            ar: 'الأمانة هي الصيانة التامة للرسالة وحفظها دون زيادة أو نقصان.',
          },
          options: [
            { id: 'opt1', text: { en: 'flawless trustworthiness in delivering divine guidance', ur: 'ہدایتِ الٰہی کو کامل امانتداری کے ساتھ پہنچانا', ar: 'الأمانة التامة في حفظ وتبليغ الرسالة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Keeping gold hidden', ur: 'سونا چھپانا', ar: 'كتمان الذهب' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Being wealthy', ur: 'امیر ہونا', ar: 'أن يكون غنياً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q5_20',
          type: 'mcq',
          question: {
            en: 'Why is studying the lives of Prophets (Qisas al-Anbiya) vital for us today?',
            ur: 'آج ہمارے لیے قصص الانبیاء (انبیاء کی زندگیاں) پڑھنا کیوں ضروری ہے؟',
            ar: 'لماذا تعتبر دراسة قصص الأنبياء ضرورية لنا اليوم؟',
          },
          explanation: {
            en: 'To draw courage, learn moral character, strengthen our faith, and implement their godly example.',
            ur: 'حوصلہ، اخلاق، ایمان کی مضبوطی اور ان کے مبارک اسوہ پر عمل پیرا ہونے کے لیے۔',
            ar: 'لأخذ العبرة، وتقوية الإيمان، والتخلق بأخلاقهم العالية.',
          },
          options: [
            { id: 'opt1', text: { en: 'To strengthen faith, morality, patience, and character', ur: 'ایمان، اخلاق، صبر اور کردار کو مضبوط بنانے کے لیے', ar: 'لتقوية الإيمان والأخلاق والصبر والاقتداء بهم' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Just to pass history tests', ur: 'صرف تاریخ کا امتحان پاس کرنے کے لیے', ar: 'لاجتياز اختبار التاريخ فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'To boast knowledge', ur: 'علم کا دکھاوا کرنے کے لیے', ar: 'للتفاخر بالمعرفة' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

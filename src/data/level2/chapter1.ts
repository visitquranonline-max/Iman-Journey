import { Category } from '../../types';

export const chapter1: Category = {
  id: 'lvl2_cat1',
  number: 1,
  title: {
    en: 'Chapter 1: Knowing Allah (Ma\'rifatullah - Intermediate)',
    ur: 'باب 1: اللہ تعالیٰ کی معرفت (درمیانی سطح)',
    ar: 'الفصل 1: معرفة الله تعالى (المستوى المتوسط)',
  },
  description: {
    en: 'Deepen your knowledge of Ma\'rifatullah, Allah\'s sublime attributes, signs in creation, infinite mercy, wisdom, and the distinction between Khaliq and Makhluq.',
    ur: 'اللہ تعالیٰ کی معرفت، اس کے اسماء و صفات، کائنات میں نشانیاں، لا محدود رحمت اور خالق و مخلوق کے فرق کا گہرا مطالعہ کریں۔',
    ar: 'تعمق في معرفة الله تعالى، وأسمائه وصفاته العلى، وآياته في الكون، ورحمته وحكمته والفرق بين الخالق والمخلوق.',
  },
  iconName: 'Sun',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat1_les1',
      title: {
        en: 'Ma\'rifatullah - Knowing Our Creator',
        ur: 'معرفت الٰہی - اپنے خالق کو پہچاننا',
        ar: 'معرفة الله - التعرف على خالقنا',
      },
      summary: {
        en: 'Knowing Allah (Ma\'rifatullah) means recognizing His Oneness, reflect on His signs in the universe, understanding His Beautiful Names, and realizing that creation depends entirely on Him.',
        ur: 'معرفت الٰہی کا مطلب اللہ کی توحید کو پہچاننا، کائنات میں اس کی نشانیوں پر غور کرنا، اس کے خوبصورت ناموں کو سمجھنا اور یہ جاننا ہے کہ تمام مخلوق اس کی محتاج ہے۔',
        ar: 'معرفة الله تعني توحيده والتفكر في آياته في الكون وفهم أسمائه الحسنى والإدراك بأن الخلق كلهم فقراء إليه.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c1_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Assalamu Alaikum, Sheikh Tariq! In Level 1 we learned that Allah is One. How do we grow in Ma\'rifatullah—knowing Allah more deeply?',
            ur: 'السلام علیکم، شیخ طارق! لیول 1 میں ہم نے سیکھا کہ اللہ ایک ہے۔ ہم معرفت الٰہی یعنی اللہ کو مزید گہرائی سے کیسے پہچان سکتے ہیں؟',
            ar: 'السلام عليكم يا شيخ طارق! في المستوى الأول تعلمنا أن الله واحد. كيف ننمو في معرفة الله تعالى بشكل أعمق؟',
          },
          sceneIllustration: 'Sun',
        },
        {
          id: 'l2_c1_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Wa Alaikum Assalam Zayd! Ma\'rifatullah comes from observing Allah\'s signs (Ayat) in the night sky, deep oceans, and our own breathing, as well as studying His Divine Names.',
            ur: 'وعلیکم السلام زید! معرفت الٰہی رات کی تاریکی، تاروں، سمندروں، ہماری اپنی سانسوں اور اللہ کے خوبصورت ناموں پر تدبر کرنے سے حاصل ہوتی ہے۔',
            ar: 'وعليكم السلام يا زيد! معرفة الله تأتي بالتفكر في آيات الله في السماء والبحار وأنفاسنا، ولدراسة أسمائه الحسنى.',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Ma\'rifatullah is developed through pondering over Allah\'s creation (Tafakkur) and learning His Beautiful Names (Asma-ul-Husna).',
            ur: 'معرفت الٰہی تخلیق الٰہی میں تدبر اور اس کے اسماء الحسنیٰ کو سیکھنے سے حاصل ہوتی ہے۔',
            ar: 'تتحقق معرفة الله بالتفكر في خلقه وتعلم أسمائه الحسنى.',
          },
        },
        {
          id: 'l2_c1_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What is the absolute difference between Allah as the Creator (Khaliq) and everything else as Creation (Makhluq)?',
            ur: 'اللہ کے خالق ہونے اور باقی تمام چیزوں کے مخلوق ہونے میں بنیادی اور حتمی فرق کیا ہے؟',
            ar: 'ما هو الفرق الجوهري بين الله الخالق وكل ما سواه من المخلوقات؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c1_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Creation is dependent, limited, needs food, sleep, and has a beginning and an end. Allah, the Khaliq, is Eternal, Self-Sufficient (Al-Samad), needs nothing, and encompasses all things in knowledge and power!',
            ur: 'مخلوق محتاج، محدود، کھانے اور سونے کی محتاج ہے اور اس کی شروعات اور انجام ہوتا ہے۔ جبکہ خالقِ کائنات صمد، بے نیاز، ہمیشہ رہنے والا اور ہر چیز پر قادر ہے!',
            ar: 'المخلوق محتاج ومحدود وله بداية ونهاية، أما الله الخالق فهو الصمد الأزلي الأبدي الذي لا يحتاج إلى شيء ووسع كل شيء علماً وقدرة!',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'The Creator (Khaliq) is Eternal and Self-Sufficient (Al-Samad); creation (Makhluq) is entirely needy and dependent upon Allah.',
            ur: 'خالق ہمیشہ سے ہے اور الصمد (بے نیاز) ہے؛ جبکہ مخلوق مکمل طور پر اللہ کی محتاج ہے۔',
            ar: 'الخالق أزلي أبدي صمد، والمخلوق فقير محتاج إلى الله.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Ma\'rifatullah means knowing Allah through His Oneness, Signs, and Beautiful Names.',
          ur: 'معرفت الٰہی سے مراد اللہ کو اس کی توحید، نشانیوں اور اسماء الحسنیٰ سے پہچاننا ہے۔',
          ar: 'معرفة الله هي العلم بتوحيده وآياته وأسمائه الحسنى.',
        },
        {
          en: 'Allah\'s names like Ar-Rahman (The Most Merciful) and Al-Hakeem (The All-Wise) show His perfection.',
          ur: 'الرحمٰن اور الحکیم جیسے اسماء الٰہی اللہ تعالیٰ کی کمال صفت کو ظاہر کرتے ہیں۔',
          ar: 'أسماء الله كالرحمن والحكيم تدل على كمال صفاته جل جلاله.',
        },
        {
          en: 'Humans are needy (Faqeer) toward Allah at every breath, while Allah is Independent (Al-Ghani).',
          ur: 'انسان ہر سانس میں اللہ کا محتاج ہے جبکہ اللہ الغنی (بے نیاز) ہے۔',
          ar: 'البشر فقراء إلى الله في كل نفس، والله هو الغني الحميد.',
        },
      ],
      quiz: [
        {
          id: 'l2_q1_1',
          type: 'mcq',
          question: {
            en: 'What does the term "Ma\'rifatullah" mean?',
            ur: 'اصطلاح "معرفت الٰہی" کا کیا مطلب ہے؟',
            ar: 'ماذا يعني مصطلح "معرفة الله"؟',
          },
          explanation: {
            en: 'Ma\'rifatullah means knowing and recognizing Allah through His Oneness, Names, Attributes, and signs in creation.',
            ur: 'معرفت الٰہی کا مطلب اللہ کی توحید، اسماء و صفات اور نشانیوں سے اس کی پہچان حاصل کرنا ہے۔',
            ar: 'معرفة الله تعني العلم بالله وبأسمائه وصفاته وآياته في الكون.',
          },
          options: [
            { id: 'opt1', text: { en: 'Knowing Allah deeply', ur: 'اللہ تعالیٰ کو گہرائی سے پہچاننا', ar: 'معرفة الله تعالى بأسماء وصفات' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Learning astronomy only', ur: 'صرف فلکیات سیکھنا', ar: 'تعلم علم الفلك فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Memorizing history dates', ur: 'تاریخی تاریخیں یاد کرنا', ar: 'حفظ تواريخ التاريخ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_2',
          type: 'true_false',
          question: {
            en: 'Creation (Makhluq) is dependent on Allah for every single moment of existence.',
            ur: 'مخلوق وجود کے ہر ہر لمحے میں اللہ تعالیٰ کی محتاج ہے۔',
            ar: 'المخلوق فقير ومحتاج إلى الله في كل لحظة من وجوده.',
          },
          explanation: {
            en: 'Yes, all human beings, animals, planets, and angels depend continuously on Allah.',
            ur: 'جی ہاں، تمام انسان، جانور، سیارے اور فرشتے مسلسل اللہ کے محتاج ہیں۔',
            ar: 'نعم، جميع المخلوقات محتاجة إلى الله تعالى دائماً.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_3',
          type: 'mcq',
          question: {
            en: 'What does Allah\'s name "Al-Khaliq" mean?',
            ur: 'اللہ تعالیٰ کے اسم مبارک "الخالق" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الخالق"؟',
          },
          explanation: {
            en: 'Al-Khaliq means The Creator Who creates everything out of non-existence without any prior model.',
            ur: 'الخالق کا مطلب وہ ذات ہے جو ہر چیز کو عدم سے وجود میں لاتی ہے۔',
            ar: 'الخالق هو الذي يوجد الأشياء من العدم.',
          },
          options: [
            { id: 'opt1', text: { en: 'The All-Hearing', ur: 'سب کچھ سننے والا', ar: 'السميع' }, isCorrect: false },
            { id: 'opt2', text: { en: 'The Creator', ur: 'پیدا کرنے والا (خالق)', ar: 'الخالق' }, isCorrect: true },
            { id: 'opt3', text: { en: 'The Forgiver', ur: 'معاف کرنے والا', ar: 'الغفور' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_4',
          type: 'mcq',
          question: {
            en: 'What does the Holy Quran mean by "Ayat" in the universe?',
            ur: 'قرآن مجید میں کائنات میں موجود "آیات" سے کیا مراد ہے؟',
            ar: 'ماذا تعني "الآيات" في الكون كما جاء في القرآن؟',
          },
          explanation: {
            en: 'Ayat are signs and proof in creation (sun, stars, rain, mountains) that point to Allah\'s power and existence.',
            ur: 'آیات کا مطلب کائنات میں موجود وہ نشانیاں ہیں جو اللہ کی قدرت اور وجود پر دلالت کرتی ہیں۔',
            ar: 'الآيات هي الدلائل والعلامات في الكون الدالة على قدرة الله وجوده.',
          },
          options: [
            { id: 'opt1', text: { en: 'Signs pointing to Allah\'s greatness', ur: 'اللہ کی عظمت کی نشانیاں', ar: 'دلالات وآيات على عظمة الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Unexplained mysteries only', ur: 'صرف پراسرار راز', ar: 'أسرار غامضة فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Random natural events', ur: 'اتفاقی حادثات', ar: 'أحداث عشوائية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_5',
          type: 'mcq',
          question: {
            en: 'What is the meaning of Allah\'s attribute "Al-Samad"?',
            ur: 'اللہ تعالیٰ کی صفت "الصمد" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الصمد"؟',
          },
          explanation: {
            en: 'Al-Samad means The Self-Sufficient Master upon Whom all creation depends while He depends on no one.',
            ur: 'الصمد کا مطلب وہ بے نیاز ذات ہے جس کے سب محتاج ہیں اور وہ کسی کا محتاج نہیں۔',
            ar: 'الصمد هو السيد الذي تحتاجه جميع المخلوقات ولا يحتاج هو لأحد.',
          },
          options: [
            { id: 'opt1', text: { en: 'The Self-Sufficient Master', ur: 'بے نیاز اور صمد ذات', ar: 'السيد الصمد المستغني عن غيره' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The One who sleeps', ur: 'سو جانے والا', ar: 'الذي ينام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The temporary ruler', ur: 'عارضی حاکم', ar: 'الحاكم المؤقت' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_6',
          type: 'true_false',
          question: {
            en: 'Pondering over creation (Tafakkur) helps strengthen our faith in Allah.',
            ur: 'کائنات کی تخلیق میں تدبر (تفکر) کرنا اللہ پر ہمارے ایمان کو مضبوط کرتا ہے۔',
            ar: 'التفكر في خلق الله يساعد على تقوية إيماننا بالله.',
          },
          explanation: {
            en: 'True! Pondering over the sun, human body, and rain reveals Allah\'s immense wisdom.',
            ur: 'سچ! سورج، انسانی جسم اور بارش میں تدبر اللہ کی حکمت کو ظاہر کرتا ہے۔',
            ar: 'صحيح! التفكر يظهر حكمته وعظمته جل وعلا.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_7',
          type: 'mcq',
          question: {
            en: 'Which name of Allah highlights His all-encompassing Mercy?',
            ur: 'اللہ تعالیٰ کا کون سا اسم مبارک اس کی بے انتہا اور وسیع رحمت کو ظاہر کرتا ہے؟',
            ar: 'أي من أسماء الله يدل على رحمته الواسعة بجميع الخلائق؟',
          },
          explanation: {
            en: 'Ar-Rahman signifies the Boundless Mercy that encompasses all created beings in this world.',
            ur: 'الرحمٰن سے مراد وہ وسیع رحمت ہے جو اس دنیا میں تمام مخلوقات کو گھیرے ہوئے ہے۔',
            ar: 'الرحمن يدل على الرحمة الواسعة الشاملة لجميع الخلائق.',
          },
          options: [
            { id: 'opt1', text: { en: 'Al-Jabbar', ur: 'الجبار', ar: 'الجبار' }, isCorrect: false },
            { id: 'opt2', text: { en: 'Ar-Rahman', ur: 'الرحمٰن', ar: 'الرحمن' }, isCorrect: true },
            { id: 'opt3', text: { en: 'Al-Mumiit', ur: 'الممیت', ar: 'المميت' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_8',
          type: 'mcq',
          question: {
            en: 'What does "Al-Hakeem" mean when describing Allah?',
            ur: 'اللہ تعالیٰ کے اسم مبارک "الحکیم" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الحكيم"؟',
          },
          explanation: {
            en: 'Al-Hakeem means The All-Wise, Who places everything in its exact perfect order and timing.',
            ur: 'الحکیم کا مطلب وہ ذات ہے جو ہر کام کو حکمت اور درست وقت پر انجام دیتی ہے۔',
            ar: 'الحكيم هو الذي يضع كل شيء في موضعه الصحيح بحكمة تامة.',
          },
          options: [
            { id: 'opt1', text: { en: 'The All-Wise', ur: 'کامل حکمت والا (الحکیم)', ar: 'الحكيم ذو الحكمة التامة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The Strict judge only', ur: 'صرف سخت فیصلہ کرنے والا', ar: 'القاضي الصارم فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The Wealthy king', ur: 'دولت مند بادشاہ', ar: 'الملك الغني' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_9',
          type: 'true_false',
          question: {
            en: 'Does Allah ever get tired, slumber, or need sleep?',
            ur: 'کیا اللہ تعالیٰ کو کبھی تھکاوٹ، اونگھ یا نیند آتی ہے؟',
            ar: 'هل يصيب الله تعب أو سنة أو نوم؟',
          },
          explanation: {
            en: 'No! Ayatal-Kursi explicitly says: "La ta\'khuthuhu sinatun wa la nawm" (Neither drowsiness overcomes Him nor sleep).',
            ur: 'ہرگز نہیں! آیت الکرسی میں ہے کہ اللہ کو نہ اونگھ آتی ہے اور نہ نیند۔',
            ar: 'لا! جاء في آية الكرسي: "لا تأخذه سنة ولا نوم".',
          },
          options: [
            { id: 'opt1', text: { en: 'True (He rests)', ur: 'سچ (وہ آرام کرتا ہے)', ar: 'صحيح (يرتاح)' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Never slumbers)', ur: 'جھوٹ (کبھی نہیں اونگھتا)', ar: 'خطأ (لا تأخذه سنة ولا نوم)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q1_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Aisha sees a beautiful flower blooming in spring. How should she reflect upon Allah?',
            ur: 'منظرنامہ: عائشہ نے بہار میں ایک خوبصورت پھول کھلتے دیکھا۔ اسے اللہ تعالیٰ کو کیسے یاد کرنا چاہیے؟',
            ar: 'سيناريو: رأت عائشة زهرة جميلة تتفتح في الربيع. كيف ينبغي لها أن تتفكر في الله؟',
          },
          explanation: {
            en: 'She should say "SubhanAllah" and appreciate Allah\'s creative perfection and beauty as Al-Bari and Al-Musawwir.',
            ur: 'اسے "سبحان اللہ" کہنا چاہیے اور اللہ کی تخلیق و خوبصورتی پر تدبر کرنا چاہیے۔',
            ar: 'ينبغي أن تقول "سبحان الله" وتتفكر في إبداع الله الخالق المصور.',
          },
          options: [
            { id: 'opt1', text: { en: 'Praise Allah (SubhanAllah) as the Creator of beauty', ur: 'اللہ کی حمد و تسبیح کرے (سبحان اللہ)', ar: 'تسبح الله الخالق وتثني عليه' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Think nature did it by accident', ur: 'سوچے کہ یہ فطرت کا اتفاق ہے', ar: 'تظن أن الطبيعة فعلت ذلك صدفة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Ignore it completely', ur: 'اسے بالکل نظر انداز کر دے', ar: 'تتجاهل الأمر تماماً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_11',
          type: 'mcq',
          question: {
            en: 'What does "Al-Aleem" mean when attributed to Allah?',
            ur: 'اللہ تعالیٰ کی صفت "العلیم" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "العليم"؟',
          },
          explanation: {
            en: 'Al-Aleem means The All-Knowing, Who knows everything past, present, future, hidden, and manifest.',
            ur: 'العلیم کا مطلب وہ ذات ہے جو تمام ظاہر، باطن، ماضی اور مستقبل کا کامل علم رکھتی ہے۔',
            ar: 'العليم هو الذي يعلم كل شيء في الماضي والحاضر والمستقبل، الظاهر والباطن.',
          },
          options: [
            { id: 'opt1', text: { en: 'The All-Knowing', ur: 'سب کچھ جاننے والا (العلیم)', ar: 'العليم المحيط بكل شيء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The Powerful warrior', ur: 'طاقتور جنگجو', ar: 'المقاتل القوي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The Listener of music', ur: 'موسیقی سننے والا', ar: 'سامع الموسيقى' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_12',
          type: 'true_false',
          question: {
            en: 'Is Allah in need of our prayers and worship?',
            ur: 'کیا اللہ تعالیٰ ہماری نمازوں اور عبادتوں کا محتاج ہے؟',
            ar: 'هل الله محتاج إلى صلاتنا وعبادتنا؟',
          },
          explanation: {
            en: 'No! Allah is Al-Ghani (Self-Sufficient). Worship benefits us as humans, not Allah.',
            ur: 'ہرگز نہیں! اللہ الغنی ہے۔ عبادت کا فائدہ خود انسان کو پہنچتا ہے۔',
            ar: 'لا! الله غني عن العالمين، والعبادة تنفع الإنسان نفسه.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Allah is Al-Ghani)', ur: 'جھوٹ (اللہ بے نیاز ہے)', ar: 'خطأ (الله غني عن العالمين)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q1_13',
          type: 'mcq',
          question: {
            en: 'Why did Allah send water (rain) down from clouds according to Islamic understanding?',
            ur: 'اسلامی تعلیمات کے مطابق اللہ نے بادلوں سے بارش کیوں نازل فرمائی؟',
            ar: 'لماذا أنزل الله المطر من السحاب وفق الفهم الإسلامي؟',
          },
          explanation: {
            en: 'Rain is a mercy (Rahmah) and provision (Rizq) from Allah to give life to dead earth and sustain living creatures.',
            ur: 'بارش اللہ کی رحمت اور رزق ہے جو مردہ زمین کو زندہ کرتی اور مخلوقات کو زندگی دیتی ہے۔',
            ar: 'المطر رحمة ورزق من الله ليحيي به الأرض الميتة ويزرق الخلائق.',
          },
          options: [
            { id: 'opt1', text: { en: 'As a divine mercy and provision for living beings', ur: 'زندہ مخلوقات کے لیے رحمت اور رزق کے طور پر', ar: 'رحمة ورزقاً من الله للكائنات الحية' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Because cloud condensed without any purpose', ur: 'بغیر کسی مقصد کے', ar: 'بدون أي هدف' }, isCorrect: false },
            { id: 'opt3', text: { en: 'To flood towns randomly', ur: 'صرف تباہی مچانے کے لیے', ar: 'لإغراق المدن عشوائياً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_14',
          type: 'mcq',
          question: {
            en: 'What is the human state regarding Allah called in Islamic spiritual terminology?',
            ur: 'اسلامی روحانی اصطلاح میں اللہ کے مقابلے میں انسان کی حالت کو کیا کہا جاتا ہے؟',
            ar: 'ماذا يسمى حال الإنسان تجاه الله في الاصطلاح الإسلامي؟',
          },
          explanation: {
            en: 'Humans are in constant need and dependence (Iftiqar / Faqr) toward Allah.',
            ur: 'انسان اللہ تعالیٰ کا دائم محتاج (افتار و فقر) ہے۔',
            ar: 'الإنسان في فقر وافتياج دائم إلى الله تعالى.',
          },
          options: [
            { id: 'opt1', text: { en: 'Iftiqar (Neediness & Dependence on Allah)', ur: 'افتار (اللہ تعالیٰ کی محتاجی)', ar: 'الافتراء والفقر إلى الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Total Independence', ur: 'مکمل خود مختاری', ar: 'الاستقلالية التامة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Equal partnership', ur: 'برابری کی شراکت', ar: 'المشاركة المساوية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_15',
          type: 'true_false',
          question: {
            en: 'Can any human or creature share in Allah\'s divine sovereignty and power?',
            ur: 'کیا کوئی انسان یا مخلوق اللہ کی خدائی اور اقتدار میں شریک ہو سکتی ہے؟',
            ar: 'هل يمكن لأي إنسان أو مخلوق أن يشارك الله في ربوبيته وإلهيته؟',
          },
          explanation: {
            en: 'No! Shirk (associating partners with Allah) is strictly forbidden. Allah alone is Sovereign.',
            ur: 'ہرگز نہیں! شرک شدید حرام ہے۔ صرف اللہ ہی حاکمِ مطلق ہے۔',
            ar: 'لا! الشرك حرام، والله وحده هو المالك الحاكم.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Allah alone has no partners)', ur: 'جھوٹ (اللہ اکیلا ہے، کوئی شریک نہیں)', ar: 'خطأ (الله وحده لا شريك له)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q1_16',
          type: 'mcq',
          question: {
            en: 'What does "Al-Basir" mean?',
            ur: 'اللہ تعالیٰ کے اسم مبارک "البصیر" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "البصير"؟',
          },
          explanation: {
            en: 'Al-Basir means The All-Seeing, Who sees every ant crawling on a dark rock at night.',
            ur: 'البصیر کا مطلب سب کچھ دیکھنے والی ذات ہے، جو تاریک رات میں سیاہ پتھر پر چیونٹی کو بھی دیکھتی ہے۔',
            ar: 'البصير هو الذي يرى كل شيء ولا يخفى عليه شيء في الأرض ولا في السماء.',
          },
          options: [
            { id: 'opt1', text: { en: 'The All-Seeing', ur: 'سب کچھ دیکھنے والا (البصیر)', ar: 'البصير الذي يرى كل شيء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The Builder', ur: 'تعمیر کرنے والا', ar: 'البناء' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The Fast Runner', ur: 'تیز بھاگنے والا', ar: 'العداء السريع' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_17',
          type: 'mcq',
          question: {
            en: 'What attitude does knowing that Allah sees and hears everything instil in a believer?',
            ur: 'یہ جاننا کہ اللہ سب دیکھتا اور سنتا ہے، ایک مومن کے اندر کیا جذبہ پیدا کرتا ہے؟',
            ar: 'ما هو الشعور الذي يزرعه علم العبد بأن الله يراه ويسمعه؟',
          },
          explanation: {
            en: 'It instils Taqwa (God-consciousness), Ihsan (mindfulness), and responsibility in secret and public.',
            ur: 'یہ انسان کے اندر تقویٰ، احسان اور خلوت و جلوت میں ذمہ داری کا احساس پیدا کرتا ہے۔',
            ar: 'يزرع فيه التقوى والإحسان والمراقبة لله في السر والعلن.',
          },
          options: [
            { id: 'opt1', text: { en: 'Taqwa and Ihsan (God-consciousness)', ur: 'تقویٰ اور احسان کی صفت', ar: 'التقوى والإحسان ومراقبة الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Carelessness and pride', ur: 'لاپروائی اور غرور', ar: 'اللامبالاة والكبر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Fear of people', ur: 'لوگوں کا ڈر', ar: 'الخوف من الناس' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_18',
          type: 'true_false',
          question: {
            en: 'Are Allah\'s decisions and decrees always accompanied by wisdom (Hikmah)?',
            ur: 'کیا اللہ تعالیٰ کے تمام فیصلے حکمت سے بھرپور ہوتے ہیں؟',
            ar: 'هل أفعال الله وقضاؤه مقرون بالحكمة الدائمة؟',
          },
          explanation: {
            en: 'Yes! Allah is Al-Hakeem; even if we do not immediately grasp the reason, His wisdom is divine and perfect.',
            ur: 'جی ہاں! اللہ الحکیم ہے، اگرچہ ہم کبھی وجہ نہ سمجھ سکیں مگر اس کی حکمت کامل ہوتی ہے۔',
            ar: 'نعم! الله هو الحكيم، وكل أفعاله لحكمة بالغة.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_19',
          type: 'mcq',
          question: {
            en: 'What does "Al-Razzak" mean when referring to Allah?',
            ur: 'اللہ تعالیٰ کے اسم مبارک "الرزاق" کا کیا مطلب ہے؟',
            ar: 'ما معنى اسم الله "الرزاق"؟',
          },
          explanation: {
            en: 'Al-Razzak means The Constant Sustainer and Provider for all living creatures in the universe.',
            ur: 'الرزاق کا مطلب تمام مخلوقات کو مسلسل روزی دینے والی ذات ہے۔',
            ar: 'الرزاق هو المتكفل برزق جميع المخلوقات.',
          },
          options: [
            { id: 'opt1', text: { en: 'The Provider of Sustenance', ur: 'رزق عطا کرنے والا (الرزاق)', ar: 'الرزاق المتكفل بالرزق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The Destroyer of knowledge', ur: 'علم کو مٹانے والا', ar: 'ماحي العلم' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The Merchant', ur: 'تاجر', ar: 'التاجر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q1_20',
          type: 'mcq',
          question: {
            en: 'What is the highest goal of studying Allah\'s Names and Creation?',
            ur: 'اللہ تعالیٰ کے اسماء اور کائنات میں تدبر کا اعلیٰ ترین مقصد کیا ہے؟',
            ar: 'ما هو الهدف الأسمى من دراسة أسماء الله والتفكر في خلقه؟',
          },
          explanation: {
            en: 'To love Allah, obey Him with sincerity, and worship Him as He deserves.',
            ur: 'اللہ سے محبت کرنا، خلوص کے ساتھ اس کی اطاعت کرنا اور اس کی شایانِ شان عبادت کرنا۔',
            ar: 'محبة الله وابتغاء مرضاته وعبادته بإخلاص كما يحب ويرضى.',
          },
          options: [
            { id: 'opt1', text: { en: 'To increase in love, obedience, and sincere worship of Allah', ur: 'اللہ کی محبت، اطاعت اور خالص عبادت میں اضافہ', ar: 'الزيادة في محبة الله وطاعته وإخلاص العبادة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'To show off in debates', ur: 'مناظروں میں دکھاوا کرنا', ar: 'التفاخر في المناظرات' }, isCorrect: false },
            { id: 'opt3', text: { en: 'To become famous in the world', ur: 'دنیا میں مشہور ہونا', ar: 'أن يصبح مشهوراً في الدنيا' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

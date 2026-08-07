import { Category } from '../../types';

export const chapter9: Category = {
  id: 'lvl2_cat9',
  number: 9,
  title: {
    en: 'Chapter 9: Islamic Manners and Character (Intermediate)',
    ur: 'باب 9: اسلامی آداب و اخلاق (درمیانی سطح)',
    ar: 'الفصل 9: الآداب والأخلاق الإسلامية (المستوى المتوسط)',
  },
  description: {
    en: 'Master core Islamic virtues: Ikhlas (Sincerity), Sabr (Patience), Shukr (Gratitude), Afw (Forgiveness), honoring parents, controlling anger, generosity, and Ukhuwwah (Brotherhood).',
    ur: 'اسلامی اخلاقیات کے ستون: اخلاص، صبر، شکر، عفو و درگزر، والدین کا احترام، ضبطِ نفس، سخاوت اور باہمی اخوت کی تفہیم۔',
    ar: 'التعرف على أركان الأخلاق الإسلامية: الإخلاص، والصبر، والشكر، والعفو، وبر الوالدين، وكظم الغيظ، والسخاء، والأخوة الإيمانية.',
  },
  iconName: 'Smile',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat9_les1',
      title: {
        en: 'Essential Virtues of Islamic Akhlaq and Adab',
        ur: 'اسلامی اخلاق و آداب کے بنیادی ستون',
        ar: 'أركان الأخلاق والآداب الإسلامية',
      },
      summary: {
        en: 'Noble character (Akhlaq) is the weightiest deed on the Mizan. It is founded upon Ikhlas (Sincerity to Allah), Sabr (Patience), Shukr (Gratitude), Afw (Forgiveness), controlling anger, and honoring parents and elders.',
        ur: 'حسنِ اخلاق قیامت کے دن میزان پر سب سے بھاری عمل ہے۔ اس کی بنیاد اخلاص، صبر، شکر، عفو و درگزر، غصے پر قابو اور والدین و بڑوں کے احترام پر ہے۔',
        ar: 'حسن الخلق أثقل شيء في الميزان. وأصوله قائمة على الإخلاص، والصبر، والشكر، والعفو، وكظم الغيظ، وبر الوالدين والاحترام.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c9_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, Prophet Muhammad ﷺ said he was sent to complete noble character. What is the foundation of true Islamic Akhlaq?',
            ur: 'شیخ طارق! نبی کریم ﷺ نے فرمایا کہ میں مکارمِ اخلاق کی تکمیل کے لیے بھیجا گیا ہوں۔ سچے اسلامی اخلاق کی بنیادی کیا ہے؟',
            ar: 'يا شيخ طارق! قال النبي ﷺ إنما بعثت لأتمم مكارم الأخلاق. ما هو أساس الأخلاق الإسلامية؟',
          },
          sceneIllustration: 'Smile',
        },
        {
          id: 'l2_c9_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The foundation is Ikhlas (sincerity purely for Allah), coupled with truthfulness, patience, controlling anger, and showing mercy to people!',
            ur: 'بنیاد اخلاص (صرف اللہ کی رضا کے لیے عمل کرنا) ہے، جس کے ساتھ سچائی، صبر، غصے پر ضبط اور مخلوق پر رحم دلی شامل ہے!',
            ar: 'الأساس هو الإخلاص لله تعالى، مقترناً بالصدق والصبر وكظم الغيظ والرحمة بالناس!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Ikhlas is doing good deeds strictly for Allah\'s pleasure without seeking human praise.',
            ur: 'اخلاص کا مطلب لوگوں کی تعریف کے بجائے صرف اللہ کی رضا کے لیے نیکی کرنا ہے۔',
            ar: 'الإخلاص هو ابتغاء مرضات الله وحده بالأعمال دون مراعاة ثناء الناس.',
          },
        },
        {
          id: 'l2_c9_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'How should a Muslim handle anger when someone acts unfairly towards them?',
            ur: 'جب کوئی شخص ہمارے ساتھ زیادتی کرے تو مسلمان کو اپنے غصے پر کیسے قابو پانا چاہیے؟',
            ar: 'كيف ينبغي للمسلم أن يتعامل مع الغضب عندما يسيء إليه أحد؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'l2_c9_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The Prophet ﷺ taught that the truly strong person is not the wrestler, but the one who controls themselves when angry! Suppress anger (Kadhm al-Ghaydh), say "A\'udhu billahi minash-shaytanir-rajeem", seek Wudu, and forgive!',
            ur: 'نبی کریم ﷺ نے فرمایا: پہلوان وہ نہیں جو دوسرے کو پچھاڑ دے، بلکہ پہلوان وہ ہے جو غصے کے وقت خود پر قابو رکھے! غصہ پی جائیں، تعوذ پڑھیں، وضو کریں اور معاف کر دیں!',
            ar: 'علمنا النبي ﷺ أن القوي ليس بالصرعة، إنما القوي الذي يملك نفسه عند الغضب! كظم الغيظ والتعوذ والوضوء والعفو هو منهج النبلاء!',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Controlling anger (Kadhm al-Ghaydh) and choosing Afw (Forgiveness) elevates a believer\'s status with Allah.',
            ur: 'غصے کو پی جانا (کظمِ غیظ) اور درگزر کرنا بندے کا مقام و مرتبہ بلند کرتا ہے۔',
            ar: 'كظم الغيظ واختيار العفو يرفع منزلة العبد عند الله.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Birr al-Walidayn (Honoring parents) is commanded by Allah right after worshipping Him alone.',
          ur: 'بر والدین (والدین سے حسنِ سلوک) کا حکم اللہ نے اپنی توحید کے بلافصل بعد ارشاد فرمایا ہے۔',
          ar: 'بر الوالدين مقرون بتوحيد الله سبحانه في القرآن الكريم.',
        },
        {
          en: 'Islamic brotherhood/sisterhood (Ukhuwwah) binds believers together in love, mutual assistance, and well-wishing.',
          ur: 'اسلامی اخوت مومنین کو اپس میں محبت، باہمی اعانت اور خیر خواہی کے رشتے میں جوڑتی ہے۔',
          ar: 'الأخوة الإيمانية تجمع المسلمين على المحبة والتعاون والتناصح.',
        },
        {
          en: 'Generosity (Infaq & Jood) purifies wealth and brings barakah into life.',
          ur: 'سخاوت اور انفاق فی سبیل اللہ مال کو پاک کرتے اور زندگی میں برکت لاتے ہیں۔',
          ar: 'السخاء والإنفاق يطهران المال ويجلبان البركة.',
        },
      ],
      quiz: [
        {
          id: 'l2_q9_1',
          type: 'mcq',
          question: {
            en: 'What does "Ikhlas" mean in Islamic worship and good deeds?',
            ur: 'عبادات اور اعمالِ خیر میں "اخلاص" سے کیا مراد ہے؟',
            ar: 'ماذا يعني "الإخلاص" في العبادات والأعمال الصالحة؟',
          },
          explanation: {
            en: 'Ikhlas means performing deeds purely for Allah\'s pleasure without showing off (Riya).',
            ur: 'اخلاص کا مطلب بغیر کسی دکھاوے کے محض اللہ تعالیٰ کی رضا کے لیے عمل کرنا ہے۔',
            ar: 'الإخلاص هو تصفية العمل من كل شائبة رياء ابتغاء وجه الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'Doing deeds purely for Allah\'s pleasure without showing off', ur: 'بغیر دکھاوے کے صرف اللہ کی رضا کے لیے عمل کرنا', ar: 'إبتغاء وجه الله وحده خالياً من الرياء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Doing deeds to get applause', ur: 'لوگوں کی واہ واہ کے لیے عمل کرنا', ar: 'العمل لنيل إعجاب الناس' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Boasting about charity on social media', ur: 'سوشل میڈیا پر صدقے کا دکھاوا کرنا', ar: 'التفاخر بالصدقة على المنصات' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_2',
          type: 'true_false',
          question: {
            en: 'Is "Sabr" (Patience) limited only to enduring hard trials, or does it also include staying steadfast in obeying Allah?',
            ur: 'کیا "صبر" صرف مصیبت پر صبر کرنے تک محدود ہے یا اس میں اللہ کی اطاعت پر ڈٹے رہنا بھی شامل ہے؟',
            ar: 'هل يقتصر الصبر على الابتلاءات فقط، أم يشمل الثبات على طاعة الله أيضاً؟',
          },
          explanation: {
            en: 'Sabr includes three dimensions: 1) Patience in obeying Allah, 2) Patience in refraining from sin, and 3) Patience during trials.',
            ur: 'صبر کے تینوں شعبے ہیں: 1) طاعت پر صبر، 2) گناہ سے بچنے پر صبر، اور 3) مصیبت پر صبر۔',
            ar: 'الصبر ثلاثة أنواع: صبر على الطاعة، وصبر عن المعصية، وصبر على أقدار الله المؤلمة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Sabr includes obedience, shunning sin, and facing hardship', ur: 'صبر میں اطاعت، گناہ سے بچنا اور مصیبت پر جمنا سب شامل ہے', ar: 'يشمل الصبر على الطاعة وعن المعصية وعند البلاء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Sabr is only for illness', ur: 'صبر صرف بیماری کے لیے ہے', ar: 'الصبر للمرض فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_3',
          type: 'mcq',
          question: {
            en: 'What did Prophet Muhammad ﷺ say about the truly strong person regarding physical wrestling versus anger?',
            ur: 'نبی کریم ﷺ نے حقیقی طاقتور انسان کے بارے میں پہلوانی اور غصے کے حوالے سے کیا ارشاد فرمایا؟',
            ar: 'ماذا قال النبي ﷺ عن القوي الحقيقي مقارنة بالصارع عند الغضب؟',
          },
          explanation: {
            en: 'The Prophet ﷺ said: "The strong person is not the one who wrestles others down; the strong person is the one who controls themselves when angry."',
            ur: 'آپ ﷺ نے فرمایا: "طاقتور وہ نہیں جو لوگوں کو پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے آپ پر قابو رکھے۔"',
            ar: 'قال ﷺ: "ليس الشديد بالصُّرَعَة، إنما الشديد الذي يملك نفسه عند الغضب".',
          },
          options: [
            { id: 'opt1', text: { en: 'The strong person is the one who controls themselves when angry', ur: 'حقیقی طاقتور وہ ہے جو غصے کے وقت خود پر قابو رکھے', ar: 'الشديد هو الذي يملك نفسه عند الغضب' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The strong person is the heavy wrestler', ur: 'طاقتور پہلوان ہے', ar: 'الشديد هو المصارع القوي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The one who shouts loudest', ur: 'جو اونچی آواز سے چلائے', ar: 'الذي يصرخ بصوت عالٍ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_4',
          type: 'mcq',
          question: {
            en: 'Which act is directly commanded by Allah in the Quran immediately alongside worshipping Him alone?',
            ur: 'قرآن مجید میں اللہ کی توحید و عبادت کے بلافصل بعد کس عمل کا حکم دیا گیا ہے؟',
            ar: 'أي عمل قُرن في القرآن الكريم بعبادة الله وحده مباشرة؟',
          },
          explanation: {
            en: 'Birr al-Walidayn (Good treatment and respect to parents): "Waqada Rabbuka alla ta\'budu illa iyyahu wa bil-walidayni ihsana".',
            ur: 'والدین سے حسنِ سلوک: "وقضى ربك ألا تعبدوا إلا إياه وبالوالدين إحساناً"۔',
            ar: 'بر الوالدين: "وقضى ربك ألا تعبدوا إلا إياه وبالوالدين إحساناً".',
          },
          options: [
            { id: 'opt1', text: { en: 'Birr al-Walidayn (Good treatment to parents)', ur: 'والدین سے حسنِ سلوک و احترام', ar: 'بر الوالدين والإحسان إليهما' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Accumulating trade gold', ur: 'تجارتی سونا جمع کرنا', ar: 'ادخار الذهب' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Traveling across continents', ur: 'براعظموں کا سفر کرنا', ar: 'السفر بين القارات' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_5',
          type: 'mcq',
          question: {
            en: 'What word should never be said disrespectfully to elderly parents according to Surah Al-Isra (17:23)?',
            ur: 'سورۃ الاسراء (17:23) کے مطابق بوڑھے والدین کے سامنے ناگواری کا کون سا کلمہ بھی بولنے سے منع کیا گیا ہے؟',
            ar: 'ما الكلمة التي نهى الله عن قولها للوالدين عند الكبر في سورة الإسراء؟',
          },
          explanation: {
            en: 'Saying "Uff" (an expression of annoyance or discontent).',
            ur: 'لفظ "اف" کہنا۔',
            ar: 'قول كلمة "أُفٍّ".',
          },
          options: [
            { id: 'opt1', text: { en: 'Saying "Uff" (expression of annoyance)', ur: '"اف" تک نہ کہنا', ar: 'قول "أف" أو أية كلمة تذمر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Saying "Assalamu Alaikum"', ur: 'سلام کہنا', ar: 'قول السلام عليكم' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Saying "JazakAllahu Khairan"', ur: 'جزاك الله خيراً کہنا', ar: 'قول جزاك الله خيراً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_6',
          type: 'true_false',
          question: {
            en: 'Does forgiving someone who hurt you (Afw) decrease your honor in Allah\'s eyes?',
            ur: 'کیا کسی تکلیف دینے والے کو معاف کر دینا (عفو) اللہ کے نزدیک انسان کی عزت گھٹاتا ہے؟',
            ar: 'هل يقلل العفو عمن ظلمك من قدرك وعزك عند الله؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ said: "Allah does not increase a servant who forgives except in honor and dignity."',
            ur: 'ہرگز نہیں! آپ ﷺ نے فرمایا: "معاف کر دینے سے اللہ بندے کی عزت میں اضافہ ہی فرماتا ہے۔"',
            ar: 'لا! قال ﷺ: "وما زاد الله عبداً بعفو إلا عزاً".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Forgiveness increases a person\'s true honor)', ur: 'جھوٹ (معاف کرنا انسان کی عزت بڑھاتا ہے)', ar: 'خطأ (العفو يزيد العبد عزاً ورفعة)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q9_7',
          type: 'mcq',
          question: {
            en: 'What remedy did Prophet Muhammad ﷺ recommend when feeling sudden surge of anger?',
            ur: 'نبی کریم ﷺ نے اچانک غصے کا ابال آنے پر کون سے نبوی علاج کی تلقین فرمائی؟',
            ar: 'ما العلاج النبوي الموصى به عند الشعور بفورة الغضب؟',
          },
          explanation: {
            en: 'Seeking refuge in Allah from Shaytan ("A\'udhu billahi minash-shaytanir-rajeem"), changing position (sitting if standing), and performing Wudu.',
            ur: 'اعوذ باللہ پڑھنا، حالت بدلنا (کھڑے ہوں تو بیٹھ جانا) اور وضو کرنا۔',
            ar: 'الاستعاذة بالله من الشيطان، وتغيير الوضعية (الجلوس)، والوضوء.',
          },
          options: [
            { id: 'opt1', text: { en: 'Seek refuge from Shaytan, change position, and perform Wudu', ur: 'اعوذ باللہ پڑھنا، بیٹھ جانا اور وضو کرنا', ar: 'الاستعاذة من الشيطان وتغيير الوضعية والوضوء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Break nearby objects', ur: 'قریب کی چیزیں توڑنا', ar: 'تكسير الأشياء' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Scream loudly', ur: 'چیخنا چنگھاڑنا', ar: 'الصراخ الشديد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_8',
          type: 'mcq',
          question: {
            en: 'What is the quality of showing gratitude to Allah for His blessings called in Arabic?',
            ur: 'عربی زبان میں اللہ تعالیٰ کی نعمتوں کا شکر ادا کرنے کی صفت کو کیا کہتے ہیں؟',
            ar: 'ما اسم خلق الثناء على الله والاعتراف بنعمه باللغة العربية؟',
          },
          explanation: {
            en: 'Shukr (Gratitude).',
            ur: 'شکر۔',
            ar: 'الشكر.',
          },
          options: [
            { id: 'opt1', text: { en: 'Shukr (Gratitude)', ur: 'شکر', ar: 'الشكر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Kibr', ur: 'کبر', ar: 'الكبر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Hasad', ur: 'حسد', ar: 'الحسد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_9',
          type: 'true_false',
          question: {
            en: 'Does giving in charity (Infaq / Sadaqah) decrease a person\'s actual Halal wealth according to Hadith?',
            ur: 'کیا حدیث مبارکہ کے مطابق اللہ کی راہ میں صدقہ دینا انسان کے حلال مال کو گھٹا دیتا ہے؟',
            ar: 'هل تُنقص الصدقة المال الحلال وفق ما جاء في الحديث الشريف؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ swore: "Ma naqasat sadaqatun min mal" (Charity does not decrease wealth; it purifies and blesses it).',
            ur: 'ہرگز نہیں! آپ ﷺ نے فرمایا: "صدقہ دینے سے مال میں کمی نہیں آتی" بل کہ برکت ہوتی ہے۔',
            ar: 'لا! قال ﷺ: "ما نقصت صدقة من مال"، بل تزكيه وتبارك فيه.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Charity brings barakah and purifies wealth)', ur: 'جھوٹ (صدقہ مال کو پاک اور برکت میں اضافہ کرتا ہے)', ar: 'خطأ (الصدقة تبارك في المال وتزكيه)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q9_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Zain sees a new student sitting alone looking sad at lunchtime. What action reflects Islamic Akhlaq?',
            ur: 'منظرنامہ: زین نے لنچ کے وقت ایک نئے طالبعلم کو اکیلے اور اداس بیٹھے دیکھا۔ کون سا اقدام اسلامی اخلاق کی عکاسی کرتا ہے؟',
            ar: 'سيناريو: رأى زين طالباً جديداً يجلس بمفرده حزيناً وقت الغداء. أي تصرف يعبر عن الأخلاق؟',
          },
          explanation: {
            en: 'He approaches warmly, greets him with Salam, invites him to sit together, and offers friendship.',
            ur: 'وہ گرم جوشی سے سلام کرتا ہے، ساتھ بیٹھنے کی دعوت دیتا ہے اور دوستی کا ہاتھ بڑھاتا ہے۔',
            ar: 'يبادر بالسلام عليه ويدعوه للجلوس معه ويقدم له الصداقة والمواساة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Greet him with Salam, invite him to sit together, and offer friendship', ur: 'سلام کرے، ساتھ بیٹھنے کی دعوت دے اور دوستی کا ہاتھ بڑھائے', ar: 'إلقاء السلام ودعوته للمشاركة وتقديم الصداقة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Ignore him completely', ur: 'اسے بالکل نظر انداز کر دے', ar: 'تجاهله تماماً' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Make fun of his clothes', ur: 'اس کے کپڑوں کا مذاق اڑائے', ar: 'السخرية من ملابسه' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_11',
          type: 'mcq',
          question: {
            en: 'What is the relationship between believers described as in the Quran (49:10)?',
            ur: 'قرآن مجید (49:10) میں مومنین کا باہمی تعلق کس طرح بیان کیا گیا ہے؟',
            ar: 'كيف وصف القرآن العلاقة بين المؤمنين في سورة الحجرات (49:10)؟',
          },
          explanation: {
            en: '"Innamal-mu\'minuna ikhwah" (The believers are but brothers/sisters to one another).',
            ur: '"إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ" (مؤمن تو آپس میں بھائی بھائی ہیں)۔',
            ar: '"إنما المؤمنون إخوة".',
          },
          options: [
            { id: 'opt1', text: { en: 'Innamal-mu\'minuna ikhwah (Believers are brothers to one another)', ur: 'مؤمن آپس میں بھائی بھائی ہیں', ar: 'إنما المؤمنون إخوة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Business competitors only', ur: 'صرف تجارتی حریف', ar: 'تنافس تجاري فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Strangers', ur: 'اجنبی', ar: 'غرباء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_12',
          type: 'true_false',
          question: {
            en: 'Is backbiting (Gheebah) strictly forbidden in Islam?',
            ur: 'کیا غیبت کرنا (کسی کے پیچھے اس کی برائی کرنا) اسلام میں سخت حرام ہے؟',
            ar: 'هل الغيبة محرمة تحريماً شديداً في الإسلام؟',
          },
          explanation: {
            en: 'Yes! Surah Al-Hujurat compares backbiting to eating the dead flesh of one\'s own brother.',
            ur: 'جی ہاں! سورۃ الحجرات میں غیبت کو اپنے مردہ بھائی کا گوشت کھانے سے تشبیہ دی گئی ہے۔',
            ar: 'نعم! شبه القرآن الغيبة في سورة الحجرات بأكل لحم الأخ ميتاً.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_13',
          type: 'mcq',
          question: {
            en: 'What did Prophet Muhammad ﷺ teach regarding honoring teachers and scholars of knowledge?',
            ur: 'نبی کریم ﷺ نے اساتذہ اور علم والے بزرگوں کے احترام کے بارے میں کیا تعلیم فرمائی؟',
            ar: 'ماذا علّم النبي ﷺ بشأن احترام المعلمين والعلماء أهل العلم؟',
          },
          explanation: {
            en: 'To show respect, listen attentively, speak politely, and pray for them.',
            ur: 'ان کا ادب کرنا، توجہ سے سننا، تمیز سے بات کرنا اور ان کے لیے دعا کرنا۔',
            ar: 'توقيرهم والإصغاء إليهم والدعاء لهم والتأدب في الحديث معهم.',
          },
          options: [
            { id: 'opt1', text: { en: 'Showing respect, listening politely, and praying for them', ur: 'احترام کرنا، تمیز سے سننا اور ان کے لیے دعا کرنا', ar: 'توقيرهم والتأدب معهم والدعاء لهم' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Interrupting while they speak', ur: 'دورانِ گفتگو بات کاٹنا', ar: 'مقاطعتهم أثناء الحديث' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Arguing with arrogance', ur: 'غرور سے بحث کرنا', ar: 'الجدال بتكبر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_14',
          type: 'mcq',
          question: {
            en: 'What does "Haya" mean in Islamic moral values?',
            ur: 'اسلامی اخلاقی اقدار میں "حیا" کا کیا مطلب ہے؟',
            ar: 'ما معنى "الحياء" في القيم الأخلاقية الإسلامية؟',
          },
          explanation: {
            en: 'Haya is spiritual modesty and shyness before Allah and people that prevents one from doing shameful deeds.',
            ur: 'حیا وہ قلبی و روحانی حشم ہے جو انسان کو اللہ اور مخلوق کے سامنے بے حیائی و گناہ سے روکتی ہے۔',
            ar: 'الحياء هو خلق يبعث على ترك القبيح ويمنع من التقصير في حق صاحب الحق.',
          },
          options: [
            { id: 'opt1', text: { en: 'Modesty and spiritual shyness that prevents sin and bad conduct', ur: 'حیا و پاکدامنی جو گناہ اور برے کاموں سے روکتی ہے', ar: 'الحياء والتحرج من فعل القبيح أمام الله والناس' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Weakness in speaking truth', ur: 'حق بولنے میں کمزوری', ar: 'الضعف في قول الحق' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Hiding from society', ur: 'لوگوں سے چھپنا', ar: 'اختفاء من المجتمع' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_15',
          type: 'true_false',
          question: {
            en: 'Did Prophet Muhammad ﷺ say: "Haya (modesty) brings nothing except good"?',
            ur: 'کیا نبی کریم ﷺ نے ارشاد فرمایا: "حیا صرف خیر ہی لاتی ہے"؟',
            ar: 'هل قال النبي ﷺ: "الحياء لا يأتي إلا بخير"؟',
          },
          explanation: {
            en: 'Yes! Authentic Hadith states: "Haya brings nothing except good" (Al-Hayau la ya\'ti illa bi-khair).',
            ur: 'جی ہاں! صحیح حدیث مبارکہ میں ہے: "الحياء لا يأتي إلا بخير" (حیا صرف خیر لاتی ہے)۔',
            ar: 'نعم! قال ﷺ: "الحياء لا يأتي إلا بخير".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_16',
          type: 'mcq',
          question: {
            en: 'What is the Islamic etiquette of visiting someone\'s home?',
            ur: 'کسی کے گھر ملنے جانے کے اسلامی آداب کیا ہیں؟',
            ar: 'ما هي الآداب الإسلامية عند زيارة بيت أحد الناس؟',
          },
          explanation: {
            en: 'Knock or ring gently up to 3 times, seek permission, say Salam, and leave if no answer.',
            ur: 'نرمی سے زیادہ سے زیادہ 3 بار اجازت مانگنا، سلام کرنا اور اگر جواب نہ ملے تو لوٹ جانا۔',
            ar: 'الاستئذان ثلاثاً والسلام وعدم الانزعاج والعودة إن لم يُؤذن.',
          },
          options: [
            { id: 'opt1', text: { en: 'Seek permission up to 3 times, say Salam, and do not intrude', ur: 'تین بار اجازت مانگنا، سلام کرنا اور بلا اجازت اندر نہ جانا', ar: 'الاستئذان ثلاثاً والسلام وإذا لم يُؤذن ترجع' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Pound on the door loudly endlessly', ur: 'مسلسل زور سے دروازہ کھٹکھٹانا', ar: 'طرق الباب بقوة واستمرار' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Peep through windows', ur: 'کھڑکیوں سے اندر جھانکنا', ar: 'التلصص من النوافذ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_17',
          type: 'true_false',
          question: {
            en: 'Is returning a trust (Amanah) to its rightful owner mandatory in Islam?',
            ur: 'کیا امانت کو اس کے اصل حقدار تک لوٹانا اسلام میں لازمی فرض ہے؟',
            ar: 'هل أداء الأمانات إلى أصحابها واجب لازم في الإسلام؟',
          },
          explanation: {
            en: 'Yes! Allah commands in Surah An-Nisa: "Innallaha ya\'murukum an tu\'addul-amanati ila ahliha" (Verily Allah commands you to render trusts to those to whom they are due).',
            ur: 'جی ہاں! سورۃ النساء میں ہے: "إن الله يأمركم أن تؤدوا الأمانات إلى أهلها"۔',
            ar: 'نعم! قال تعالى: "إن الله يأمركم أن تؤدوا الأمانات إلى أهلها".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_18',
          type: 'mcq',
          question: {
            en: 'How should a believer respond when receiving news or a rumor about someone?',
            ur: 'جب کسی شخص کے بارے میں کوئی خبر یا افواہ ملے تو مومن کو کیا طرزِ عمل اختیار کرنا چاہیے؟',
            ar: 'كيف يتصرف المؤمن عندما تصله شائعة أو خبر عن أحد؟',
          },
          explanation: {
            en: 'Verify the truth (Tabayyun) before speaking or believing, as commanded in Surah Al-Hujurat (49:6).',
            ur: 'بات کرنے یا یقین کرنے سے پہلے خبر کی تحقیق (تبین) کرے، جیسے سورۃ الحجرات (49:6) میں حکم ہے۔',
            ar: 'التثبت والتبين من صحة الخبر قبل نقله أو تصديقه كما في سورة الحجرات (49:6).',
          },
          options: [
            { id: 'opt1', text: { en: 'Verify the truth (Tabayyun) carefully before spreading or acting', ur: 'آگے پھیلانے سے پہلے اچھی طرح تحقیق (تبین) کرے', ar: 'التثبت والتبين قبل النقل والتصديق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Forward the rumor immediately to everyone', ur: 'فوراً سب کو افواہ بھیج دے', ar: 'إعادة نشر الشائعة فوراً' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Add fake details', ur: 'خود سے جھوٹی باتیں ملا دے', ar: 'إضافة تفاصيل كاذبة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_19',
          type: 'mcq',
          question: {
            en: 'What is the quality of "Kadhml-Ghaydh"?',
            ur: 'اصطلاح "کظمِ غیظ" سے کیا مراد ہے؟',
            ar: 'ما معنى خلق "كظم الغيظ"؟',
          },
          explanation: {
            en: 'Suppressing and controlling anger despite having the power to react.',
            ur: 'بدلہ لینے کی طاقت رکھنے کے باوجود غصے کو پی جانا اور خود پر قابو رکھنا۔',
            ar: 'حبس النفس والسيطرة على الغضب مع القدرة على إنفاذه.',
          },
          options: [
            { id: 'opt1', text: { en: 'Suppressing anger and refraining from harsh retaliation', ur: 'غصے کو پی جانا اور سخت بدلے سے رکنا', ar: 'حبس الغضب والامتناع عن الانتقام القاسي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Shouting at animals', ur: 'جانوروں پر چلانا', ar: 'الصراخ على الحيوانات' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Breaking furniture', ur: 'فرنیچر توڑنا', ar: 'تكسير الأثاث' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q9_20',
          type: 'mcq',
          question: {
            en: 'What is the primary spiritual reward of developing noble Akhlaq in daily life?',
            ur: 'روزمرہ زندگی میں عمدہ اخلاق اپنانے کا سب سے بڑا روحانی انعام کیا ہے؟',
            ar: 'ما هي الثمرة الروحية العظمى للتخلق بالأخلاق الفاضلة في الحياة؟',
          },
          explanation: {
            en: 'Closeness to Prophet Muhammad ﷺ on Qiyamah, heavy weight on the Mizan, and Allah\'s love.',
            ur: 'قیامت کے دن نبی کریم ﷺ کا قرب، میزان میں سنگینی، اور اللہ تعالیٰ کی محبت۔',
            ar: 'القرب من النبي ﷺ يوم القيامة وثقل الميزان ومحبة الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'Closeness to Prophet Muhammad ﷺ on Qiyamah and heavy weight on Mizan', ur: 'قیامت کے دن نبی کریم ﷺ کا قرب اور میزان میں سنگینی', ar: 'القرب من النبي ﷺ يوم القيامة وثقل الميزان' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Winning sports cups only', ur: 'صرف کھیل کا کپ جیتنا', ar: 'الفوز بالكؤوس الرياضية فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Getting rich without work', ur: 'بغیر کام کے امیر ہونا', ar: 'الثراء بدون عمل' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

import { Category } from '../../types';

export const chapter2: Category = {
  id: 'lvl2_cat2',
  number: 2,
  title: {
    en: 'Chapter 2: Understanding Islam (Intermediate)',
    ur: 'باب 2: اسلام کی تفہیم (درمیانی سطح)',
    ar: 'الفصل 2: فهم الإسلام (المستوى المتوسط)',
  },
  description: {
    en: 'Understand Islam as a complete way of life, the bond between faith and righteous actions, the purpose of worship, and achieving balance between Dunya and Akhirah.',
    ur: 'اسلام کو ایک مکمل ضابطہ حیات، ایمان و عمل کا باہمی تعلق، مقصدِ عبادت اور دنیا و آخرت کے درمیان اعتدال کے اصولوں کو سمجھیں۔',
    ar: 'فهم الإسلام كمنهاج حياة شامل، والعلاقة بين الإيمان والعمل الصالح، والغاية من العبادة، والتوازن بين الدنيا والآخرة.',
  },
  iconName: 'HeartHandshake',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat2_les1',
      title: {
        en: 'Islam as a Complete Way of Life',
        ur: 'اسلام - ایک مکمل ضابطہ حیات',
        ar: 'الإسلام منهج حياة شامل',
      },
      summary: {
        en: 'Islam guides every aspect of human life: spiritual worship, moral character, family relations, honesty in trade, and kindness to society. True faith requires both internal belief (Iman) and external good actions (Amal Saliha).',
        ur: 'اسلام انسانی زندگی کے ہر پہلو کی رہنمائی کرتا ہے: عبادت، اخلاق، خاندانی تعلقات، کاروبار اور معاشرتی بھلائی۔ سچے ایمان کے لیے اندرونی تصدیق اور بیرونی عملِ صالح دونوں ضروری ہیں۔',
        ar: 'يهدي الإسلام إلى كل جانب في الحياة: العبادة، والأخلاق، والمعاملات، والتجارية والرحمة بالآخرين. والإيمان ينبغي أن يتبعه عمل صالح.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c2_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, some people think Islam is only praying in the Masjid. Is Islam more than ritual worship?',
            ur: 'شیخ طارق! کچھ لوگ سمجھتے ہیں کہ اسلام صرف مسجد میں نماز پڑھنے کا نام ہے۔ کیا اسلام محض چند عبادتوں تک محدود ہے؟',
            ar: 'يا شيخ طارق! يعتقد البعض أن الإسلام هو الصلاة في المسجد فقط. هل الإسلام أشمل من العبادات الظاهرة؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c2_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Indeed! Islam is a comprehensive way of life (Din). It governs how we speak truth, respect parents, do business honestly, treat animals with compassion, and clean our environment!',
            ur: 'بالکل! اسلام ایک مکمل ضابطہ حیات (دین) ہے۔ یہ ہمیں سچ بولنے، والدین کا احترام کرنے، ایمانداری سے تجارت کرنے، جانوروں پر رحم کرنے اور صفائی ستھرائی کا درس دیتا ہے!',
            ar: 'بالتأكيد! الإسلام دين ونظام شامل. ينظم ألسنتنا بالصدق، وبر الوالدين، والأمانة في التجارة، والرحمة بالحيوان، والنظافة!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Islam covers worship (Ibadat) and human conduct (Mu\'amalat & Akhlaq). Everything done sincerely for Allah becomes worship!',
            ur: 'اسلام عبادات اور معاملات دونوں پر محتوی ہے۔ ہر وہ اچھا کام جو اللہ کی رضا کے لیے کیا جائے، عبادت بن جاتا ہے!',
            ar: 'الإسلام يشمل العبادات والمعاملات والأخلاق، وكل عمل صالح تبتغي به وجه الله فهو عبادة!',
          },
        },
        {
          id: 'l2_c2_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What is the connection between faith in the heart (Iman) and daily actions (Amal)?',
            ur: 'دل کے ایمان اور روزمرہ کے عمل کا باہمی کیا تعلق ہے؟',
            ar: 'ما هي الصلة بين الإيمان في القلب والأعمال اليومية؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'l2_c2_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Faith is like the root of a healthy fruit tree, and good deeds are its sweet fruits! A person cannot claim deep faith without acting with honesty, prayer, and kindness.',
            ur: 'ایمان ایک پھل دار درخت کی جڑ کی طرح ہے، اور نیک اعمال اس کے شیریں پھل ہیں! کوئی شخص سچائی، نماز اور نیکی کے بغیر کامل ایمان کا دعویٰ نہیں کر سکتا۔',
            ar: 'الإيمان كجذور الشجرة الشاهقة، والأعمال الصالحة هي ثمارها الحلوة! لا يكتمل الإيمان بدون العمل الصدق والبر والعبادة.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Iman and Amal Saliha go hand in hand throughout the Holy Quran.',
            ur: 'قرآن مجید میں ایمان اور عملِ صالح کا تذکرہ ہمیشہ ایک ساتھ آتا ہے۔',
            ar: 'قرن الله عز وجل الإيمان بالعمل الصالح في آيات كثيرة من القرآن.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Islam means voluntary submission (Taslim) to the will and commandments of Allah.',
          ur: 'اسلام کا مطلب اللہ تعالیٰ کے احکامات کے سامنے رضاکارانہ تسلیم و رضا ہے۔',
          ar: 'الإسلام يعني الاستسلام التام والقيام بأوامر الله ورسوله.',
        },
        {
          en: 'Islam establishes a healthy balance: fulfilling duties to Allah and duties to human beings.',
          ur: 'اسلام حقوق اللہ اور حقوق العباد میں بہترین اعتدال قائم کرتا ہے۔',
          ar: 'يقيم الإسلام التوازن بين حقوق الله وحقوق العباد.',
        },
        {
          en: 'A Muslim seeks success in Dunya (world) and eternal salvation in Akhirah (Hereafter).',
          ur: 'ایک مسلمان دنیا کی بہتری اور آخرت کی کامیابی دونوں کا طالب ہوتا ہے۔',
          ar: 'يسعى المسلم للنجاح في الدنيا والفوز التام بالآخرة.',
        },
      ],
      quiz: [
        {
          id: 'l2_q2_1',
          type: 'mcq',
          question: {
            en: 'What does the word "Islam" mean at its core?',
            ur: 'لفظ "اسلام" کا بنیادی اور اصلی مطلب کیا ہے؟',
            ar: 'ما المعنى الأساسي لكلمة "الإسلام"؟',
          },
          explanation: {
            en: 'Islam means submitting to Allah\'s divine guidance and attaining peace through obedience to Him.',
            ur: 'اسلام کا مطلب اللہ کی ہدایت کے سامنے خود کو تسلیم کرنا اور اطاعت کے ذریعے سلامتی حاصل کرنا ہے۔',
            ar: 'الإسلام هو الاستسلام لله بالتوحيد والانقياد له بالطاعة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Submission to Allah and peace', ur: 'اطاعت الٰہی اور سلامتی', ar: 'الاستسلام لله والسلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Fame and worldly glory', ur: 'شہرت اور دنیاوی دبدبہ', ar: 'الشهرة والجاه' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Isolation from society', ur: 'لوگوں سے بالکل الگ ہو جانا', ar: 'العزلة عن المجتمع' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_2',
          type: 'true_false',
          question: {
            en: 'Islam is strictly a weekend ritual and does not regulate daily affairs like trade and family life.',
            ur: 'اسلام صرف چند منٹوں کی عبادت کا نام ہے اور تجارتی یا خاندانی معاملات سے اس کا تعلق نہیں۔',
            ar: 'الإسلام عبادة في أوقات محددة ولا ينظم الشؤون اليومية كالتجارة والأسرة.',
          },
          explanation: {
            en: 'False! Islam is a complete way of life regulating moral, economic, social, and spiritual dimensions.',
            ur: 'غلط! اسلام زندگی کے تمام اخلاقی، معاشی، سماجی اور روحانی شعبوں کی مکمل رہنمائی کرتا ہے۔',
            ar: 'خطأ! الإسلام منهج شامل ينظم شؤون الحياة كلها.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Islam governs all aspects of life)', ur: 'جھوٹ (اسلام زندگی کے تمام شعبوں کا احاطہ کرتا ہے)', ar: 'خطأ (الإسلام ينظم جميع مناحي الحياة)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q2_3',
          type: 'mcq',
          question: {
            en: 'How are faith (Iman) and righteous action (Amal Saliha) described in Islam?',
            ur: 'اسلام میں ایمان اور عملِ صالح کے باہمی تعلق کو کس طرح بیان کیا گیا ہے؟',
            ar: 'كيف وُصف ارتباط الإيمان بالعمل الصالح في الإسلام؟',
          },
          explanation: {
            en: 'Iman is the inner foundation, and Amal Saliha is the outward visible proof and fruit of that faith.',
            ur: 'ایمان اندرونی بنیاد ہے اور عملِ صالح اس کا باہری ظاہری ثبوت اور پھل ہے۔',
            ar: 'الإيمان هو الأصل الباطن والعمل الصالح ثمرته وبرهانه الظاهر.',
          },
          options: [
            { id: 'opt1', text: { en: 'They are inseparable like a tree and its fruits', ur: 'درخت اور اس کے پھل کی طرح لازمی ملزوم ہیں', ar: 'كالشجرة وثمارها لا ينفصلان' }, isCorrect: true },
            { id: 'opt2', text: { en: 'They contradict each other', ur: 'وہ ایک دوسرے کے مخالف ہیں', ar: 'يتعارضان' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Actions do not matter at all', ur: 'اعمال کی کوئی اہمیت نہیں', ar: 'الأعمال لا تهم إطلاقاً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_4',
          type: 'mcq',
          question: {
            en: 'What is "Ibadah" (Worship) in Islam?',
            ur: 'اسلامی مفہوم میں "عبادت" سے کیا مراد ہے؟',
            ar: 'ما هو مفهوم "العبادة" الواسع في الإسلام؟',
          },
          explanation: {
            en: 'Ibadah includes formal acts (prayer, fasting) and any good deed done sincerely to please Allah.',
            ur: 'عبادت میں نماز اور روزے کے علاوہ ہر وہ نیک کام شامل ہے جو اللہ کو راضی کرنے کے لیے خلوص سے کیا جائے۔',
            ar: 'العبادة اسم جامع لكل ما يحبه الله ويرضاه من الأقوال والأعمال الباطنة والظاهرة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Everything loved by Allah done with good intention', ur: 'ہر وہ عمل جو اللہ کو پسند ہو اور نیک نیتی سے کیا جائے', ar: 'كل ما يحبه الله ويرضاه من القول والعمل' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Only sitting inside a mosque', ur: 'صرف مسجد میں بیٹھے رہنا', ar: 'الجلوس في المسجد فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Chanting words without understanding', ur: 'بغیر سمجھے الفاظ دہرانا', ar: 'ترديد الكلمات دون فهم' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_5',
          type: 'true_false',
          question: {
            en: 'Does Islam encourage a person to neglect worldly responsibilities like work or family?',
            ur: 'کیا اسلام انسان کو دنیاوی ذمہ داریوں جیسے روزگار یا خاندانی دیکھ بھال کو چھوڑنے کی تعلیم دیتا ہے؟',
            ar: 'هل يدعو الإسلام إلى إهمال المسؤوليات الدنيوية كالعمل ورعاية الأسرة؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ taught balance: fulfilling worldly duties as acts of worship while preparing for Akhirah.',
            ur: 'ہرگز نہیں! نبی کریم ﷺ نے اعتدال سکھایا کہ دنیاوی فرائض بھی نیتِ خیر سے عبادت بن جاتے ہیں۔',
            ar: 'لا! علّمنا النبي ﷺ التوازن؛ فالعمل الشريف وخدمة الأهل عبادة.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Islam teaches moderation and balance)', ur: 'جھوٹ (اسلام اعتدال اور توازن سکھاتا ہے)', ar: 'خطأ (الإسلام يدعو للوسطية والتوازن)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q2_6',
          type: 'mcq',
          question: {
            en: 'Which Quranic supplication highlights the balance between Dunya and Akhirah?',
            ur: 'قرآن کریم کی کون سی مشہور دعا دنیا اور آخرت کے اعتدال کو بیان کرتی ہے؟',
            ar: 'أي دعاء قرآني يجسد التوازن بين خير الدنيا والآخرة؟',
          },
          explanation: {
            en: '"Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'athab an-nar" (Our Lord, grant us good in this world and good in the Hereafter).',
            ur: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ۔',
            ar: '"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار".',
          },
          options: [
            { id: 'opt1', text: { en: 'Rabbana atina fid-dunya hasanatan...', ur: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...', ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Asking for worldly wealth only', ur: 'صرف دنیاوی مال کی دعا', ar: 'دعاء طلب المال فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Asking to abandon earth immediately', ur: 'دنیا کو فوراً چھوڑ دینے کی دعا', ar: 'دعاء التخلي عن الأرض فوراً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_7',
          type: 'mcq',
          question: {
            en: 'What are the two major categories of human rights and duties in Islam?',
            ur: 'اسلام میں انسانی فرائض اور حقوق کی کون سی دو بڑی اقسام ہیں؟',
            ar: 'ما هما التصنيفان الكبيران للحقوق والواجبات في الإسلام؟',
          },
          explanation: {
            en: 'Rights of Allah (Huquq Allah) like worship, and Rights of Creation (Huquq al-Ibad) like honesty and kindness to people.',
            ur: 'حقوق اللہ (عبادت و توحید) اور حقوق العباد (انسانوں کے ساتھ حسنِ سلوک و عدل)۔',
            ar: 'حقوق الله (كالعبادة) وحقوق العباد (كالعدل والبر بأفراد المجتمع).',
          },
          options: [
            { id: 'opt1', text: { en: 'Huquq Allah and Huquq al-Ibad', ur: 'حقوق اللہ اور حقوق العباد', ar: 'حقوق الله وحقوق العباد' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Personal fame and power', ur: 'ذاتی شہرت اور طاقت', ar: 'الشهرة الشخصية والسلطة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Trading laws only', ur: 'صرف تجارتی قوانین', ar: 'قوانين التجارة فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_8',
          type: 'true_false',
          question: {
            en: 'If a person hurts another human being, can they wipe away the debt merely without apologizing or making amends?',
            ur: 'اگر کوئی شخص کسی دوسرے کا حق مارے، تو کیا بغیر معافی مانگے یا حق ادا کیے صرف تسبیح پڑھنے سے معافی ہو جاتی ہے؟',
            ar: 'إذا ظلم شخص إنساناً آخر، هل يزول ذنبه لمجرد الذكر دون رد الحق أو الاعتذار؟',
          },
          explanation: {
            en: 'No! Huquq al-Ibad require restoring the wrong, seeking forgiveness from the person wronged, or making restitution.',
            ur: 'ہرگز نہیں! حقوق العباد میں حقدار کا حق لوٹانا یا معافی مانگنا ضروری ہے۔',
            ar: 'لا! حقوق العباد تتطلب رد الحقوق إلى أهلها والاعتذار منهم.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Restitution/apology is required for Huquq al-Ibad)', ur: 'جھوٹ (حقوق العباد میں حق کی تلافی یا معافی ضروری ہے)', ar: 'خطأ (حقوق العباد تتطلب الاستحلال ورد الحق)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q2_9',
          type: 'mcq',
          question: {
            en: 'Scenario: Bilal is studying hard for his school exam while also keeping up with his daily prayers. What Islamic principle is he demonstrating?',
            ur: 'منظرنامہ: بلال اسکول کے امتحان کی تیاری بھی محنت سے کر رہا ہے اور پنج وقتہ نمازوں کی پابندی بھی کر رہا ہے۔ وہ کس اسلامی اصول پر عمل پیرا ہے؟',
            ar: 'سيناريو: يدرس بلال بجد لاختباره المدرسي ويحافظ أيضاً على صلواته الخمس. أي مبدأ إسلامي يطبقه؟',
          },
          explanation: {
            en: 'Bilal is combining worldly excellence with spiritual duty, achieving Islam\'s balanced way of life.',
            ur: 'بلال دنیاوی محنت کو دینی فرائض کے ساتھ ملا کر اسلام کی متوازن زندگی کا مظاہرہ کر رہا ہے۔',
            ar: 'يجمع بلال بين السعي الدنيوي والواجب الديني مطبقاً منهج الإسلام المتوازن.',
          },
          options: [
            { id: 'opt1', text: { en: 'Balance between Dunya and Din', ur: 'دنیا اور دین کے درمیان اعتدال', ar: 'التوازن بين الدنيا والدين' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Worldly greed', ur: 'دنیاوی ہوس', ar: 'الطمع الدنيوي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Wasting time', ur: 'وقت کا ضیاع', ar: 'تضييع الوقت' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_10',
          type: 'mcq',
          question: {
            en: 'What did Prophet Muhammad ﷺ say about smiles given to your brother or neighbor?',
            ur: 'نبی کریم ﷺ نے اپنے بھائی یا پڑوسی کی طرف مسکرا کر دیکھنے کے بارے میں کیا ارشاد فرمایا؟',
            ar: 'ماذا قال النبي ﷺ عن تبسمك في وجه أخيك؟',
          },
          explanation: {
            en: 'The Prophet ﷺ said: "Your smiling at your brother is an act of charity (Sadaqah)."',
            ur: 'آپ ﷺ نے فرمایا: "تمہارا اپنے بھائی کے سامنے مسکرانا بھی صدقہ ہے۔"',
            ar: 'قال النبي ﷺ: "تبسمك في وجه أخيك لك صدقة".',
          },
          options: [
            { id: 'opt1', text: { en: 'It is counted as an act of charity (Sadaqah)', ur: 'یہ صدقہ شمار ہوتا ہے', ar: 'تُكتب لك صدقة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'It is a waste of energy', ur: 'یہ وقت کا ضیاع ہے', ar: 'تضيع للطاقة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'It is forbidden in public', ur: 'یہ منع ہے', ar: 'مكروه في العلن' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_11',
          type: 'true_false',
          question: {
            en: 'Can honest business work be considered an act of worship if done with good intention?',
            ur: 'کیا ایماندارانہ کاروبار اور حلال روزی کمانا اگر نیک نیتی سے ہو تو عبادت بن سکتا ہے؟',
            ar: 'هل يمكن للعمل التجاري الصادق أن يعتبر عبادة إذا أخلص فيه النية؟',
          },
          explanation: {
            en: 'Yes! Earning Halal sustenance to support one\'s family with honesty is highly rewarded in Islam.',
            ur: 'جی ہاں! اپنے اہل و عیال کے لیے حلال روزی کمانا اسلام میں عظیم عبادت ہے۔',
            ar: 'نعم! كسب الحلال لإعالة الأسرة بأمانة له أجر عظيم عند الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_12',
          type: 'mcq',
          question: {
            en: 'What is the primary motive behind obeying Islamic teachings?',
            ur: 'اسلامی احکام کی بجا آوری کا بنیادی مقصد اور جذبہ کیا ہونا چاہیے؟',
            ar: 'ما هو الدافع الأساسي لامتثال تعاليم الإسلام؟',
          },
          explanation: {
            en: 'Love for Allah, desire for His pleasure (Rida Allah), and gratitude for His infinite blessings.',
            ur: 'اللہ تعالیٰ کی محبت، اس کی رضا کا حصول اور اس کی نعمتوں کا شکرانہ۔',
            ar: 'محبة الله وابتغاء رضوانه والشكر على نعمه العظيمة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Love for Allah and seeking His pleasure', ur: 'اللہ کی محبت اور اس کی رضا کی طلب', ar: 'محبة الله وابتغاء مرضاته' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Fear of human criticism', ur: 'لوگوں کے تنقید کا ڈر', ar: 'الخوف من نقد الناس' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Earning prizes from friends', ur: 'دوستوں سے انعام جیتنا', ar: 'الفوز بالجوائز من الأصدقاء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_13',
          type: 'mcq',
          question: {
            en: 'What is the role of sincerity (Ikhlas) in accepting our deeds before Allah?',
            ur: 'اللہ کے ہاں اعمال کی قبولیت میں اخلاص کی کیا اہمیت ہے؟',
            ar: 'ما دور الإخلاص في قبول الأعمال عند الله؟',
          },
          explanation: {
            en: 'No deed is accepted by Allah unless it is done purely for His sake without showing off (Riya).',
            ur: 'کوئی بھی عمل اللہ کے ہاں مقبول نہیں ہوتا جب تک کہ وہ دکھاوے سے پاک صرف اللہ کے لیے نہ ہو۔',
            ar: 'لا يقبل الله من الأعمال إلا ما كان خالصاً لوجهه الكريم خالياً من الرياء.',
          },
          options: [
            { id: 'opt1', text: { en: 'Deeds must be purely for Allah to be accepted', ur: 'قبولیت کے لیے عمل کا خالصتاً اللہ کے لیے ہونا ضروری ہے', ar: 'يشترط لقبول العمل أن يكون خالصاً لله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Showing off increases reward', ur: 'دکھاوا کرنے سے ثواب بڑھتا ہے', ar: 'الرياء يزيد الأجر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Intention does not matter', ur: 'نیت کی کوئی اہمیت نہیں', ar: 'النية غير مهمة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_14',
          type: 'true_false',
          question: {
            en: 'Does Islam prohibit harming animals or cutting down trees without need?',
            ur: 'کیا اسلام جانوروں کو بلا وجہ تکلیف دینے اور درختوں کو بلا ضرورت کاٹنے سے منع کرتا ہے؟',
            ar: 'هل ينهى الإسلام عن إيذاء الحيوانات وقطع الأشجار بغير حق؟',
          },
          explanation: {
            en: 'Yes! Islamic ethics mandate mercy to all creatures, environment protection, and avoiding wastefulness.',
            ur: 'جی ہاں! اسلامی اخلاقیات تمام مخلوق پر رحم اور ماحول کی حفاظت کی تاکید کرتی ہیں۔',
            ar: 'نعم! الأخلاق الإسلامية تأمر بالرحمة بالكائنات وحماية البيئة.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_15',
          type: 'mcq',
          question: {
            en: 'How does Islam view the relation between different nations and races?',
            ur: 'اسلام مختلف اقوام اور نسلوں کے باہمی تعلق کو کس نظر سے دیکھتا ہے؟',
            ar: 'كيف ينظر الإسلام إلى العلاقة بين الشعوب والأجناس؟',
          },
          explanation: {
            en: 'All humans are equal children of Adam; superiority is measured only by Taqwa (righteousness).',
            ur: 'تمام انسان آدم کی اولاد ہونے کے ناطے برابر ہیں؛ فضیلت کا واحد معیار تقویٰ ہے۔',
            ar: 'الناس جميعاً متساوون، ولا فضل لعربي على أعجمي إلا بالتقوى.',
          },
          options: [
            { id: 'opt1', text: { en: 'All humans are equal; nobility is based on Taqwa', ur: 'تمام انسان برابر ہیں، برتری کی بنیاد صرف تقویٰ ہے', ar: 'الجميع متساوون والبر بالتقوى' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Wealthier nations are superior', ur: 'امیر قومیں افضل ہیں', ar: 'الشعوب الغنية أفضل' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Skin color determines value', ur: 'جلد کا رنگ قدر متعین کرتا ہے', ar: 'لون البشرة يحدد القيمة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_16',
          type: 'mcq',
          question: {
            en: 'What is the golden rule of Islamic interpersonal behavior?',
            ur: 'باہمی تعلقات میں اسلام کا سنہری اصول کیا ہے؟',
            ar: 'ما هي القاعدة الذهبية في السلوك الإسلامي مع الآخرين؟',
          },
          explanation: {
            en: 'Love for your brother/neighbor what you love for yourself, as taught in authentic Hadith.',
            ur: 'اپنے بھائی کے لیے وہی پسند کرو جو اپنے لیے پسند کرتے ہو۔',
            ar: 'أن تحب لأخيك ما تحبه لنفسك كما جاء في الحديث الشريف.',
          },
          options: [
            { id: 'opt1', text: { en: 'Love for your brother what you love for yourself', ur: 'اپنے بھائی کے لیے وہی پسند کرو جو اپنے لیے پسند کرتے ہو', ar: 'أن تحب لأخيك ما تحبه لنفسك' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Take advantage of others', ur: 'دوسروں کا فائدہ اٹھاؤ', ar: 'استغلال الآخرين' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Ignore people in hardship', ur: 'مشکل میں لوگوں کو بھول جاؤ', ar: 'تجاهل الناس وقت الشدة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_17',
          type: 'true_false',
          question: {
            en: 'Is keeping a clean body and neat environment part of Islamic faith?',
            ur: 'کیا جسمانی صفائی اور ماحول کو ستھرا رکھنا ایمان کا حصہ ہے؟',
            ar: 'هل النظافة الشخصية والبيئية جزء من الإيمان الإسلامي؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "Purity is half of faith" (At-Tuhuru shatru-l-iman).',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: "الطهور شطر الإيمان" (پاکیزگی نصف ایمان ہے)۔',
            ar: 'نعم! قال رسول الله ﷺ: "الطهور شطر الإيمان".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_18',
          type: 'mcq',
          question: {
            en: 'What does "Taslim" mean in submission to Allah?',
            ur: 'اللہ کی اطاعت میں "تسلیم" سے کیا مراد ہے؟',
            ar: 'ماذا يعني "التسليم" لله تعالى؟',
          },
          explanation: {
            en: 'Accepting Allah\'s commands willingly with contentment, trust, and heart satisfaction.',
            ur: 'اللہ کے احکام کو دلی اطمینان، اعتماد اور رضا کے ساتھ قبول کرنا۔',
            ar: 'القبول بأحكام الله وأوامره برضا وطمأنينة ثقة بفضله وحكمته.',
          },
          options: [
            { id: 'opt1', text: { en: 'Willing acceptance of Allah\'s command with peace', ur: 'اللہ کے حکم کو دلی اطمینان اور رضامندی سے ماننا', ar: 'القبول الرضي بأحكام الله وطاعته' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Forced compliance against one\'s will', ur: 'مجبوری میں اطاعت کرنا', ar: 'الامتثال المكره' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Arguing with divine wisdom', ur: 'حکمتِ الٰہی پر اعتراض کرنا', ar: 'الاعتراض على الحكمة الإلهية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_19',
          type: 'mcq',
          question: {
            en: 'How should a Muslim respond when faced with difficulty or trial in life?',
            ur: 'جب کسی مسلمان کو زندگی میں کوئی مشکل یا آزمائش پیش آئے تو اسے کیا طرزِ عمل اختیار کرنا چاہیے؟',
            ar: 'كيف ينبغي للمسلم أن يتصرف عندما يواجه مصيبة أو ابتلاء؟',
          },
          explanation: {
            en: 'Practice Sabr (patience), make Du\'a to Allah, take reasonable remedies, and rely on Allah (Tawakkul).',
            ur: 'صبر کرے، اللہ سے دعا کرے، جائز اسباب اختیار کرے اور اللہ پر توکل کرے۔',
            ar: 'يصبر ويدعو الله ويتخذ الأسباب النافعة ويتوكل عليه سبحانه.',
          },
          options: [
            { id: 'opt1', text: { en: 'Patience (Sabr), prayer, and reliance on Allah (Tawakkul)', ur: 'صبر، دعا اور اللہ پر توکل (اعتماد)', ar: 'الصبر والدعاء والتوكل على الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Complain and lose hope entirely', ur: 'شکایت کرے اور مایوس ہو جائے', ar: 'الجزع واليأس التام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Blame others unfairly', ur: 'بلا وجہ دوسروں پر الزام لگائے', ar: 'إلقاء اللوم على الآخرين' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q2_20',
          type: 'mcq',
          question: {
            en: 'What is the ultimate benefit of following Islam as a complete way of life?',
            ur: 'اسلام کو ایک مکمل ضابطہ حیات کے طور پر اپنانے کا حتمی نتیجہ اور فائدہ کیا ہے؟',
            ar: 'ما هي الثمرة العظمى لاتباع الإسلام كمنهاج حياة شامل؟',
          },
          explanation: {
            en: 'Peace of mind in this world, noble character, and Allah\'s eternal pleasure and Jannah in the Hereafter.',
            ur: 'دنیا میں قلبی سکون، پاکیزہ کردار اور آخرت میں اللہ کی رضا و جنت کا حصول۔',
            ar: 'الطمأنينة في الدنيا والأخلاق الفاضلة ورضا الله والجنات العلى في الآخرة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Inner peace in Dunya and Allah\'s reward in Akhirah', ur: 'دنیا میں قلبی سکون اور آخرت میں اللہ کی رضامندی', ar: 'راحة البال في الدنيا والفوز برضا الله في الآخرة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Only earthly trophies', ur: 'صرف دنیاوی انعام', ar: 'الجوائز الترابية فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Becoming immune to physical illness', ur: 'جسمانی بیماریوں سے مستقل نجات', ar: 'الوقاية من المرض البدني فقط' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

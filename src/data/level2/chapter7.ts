import { Category } from '../../types';

export const chapter7: Category = {
  id: 'lvl2_cat7',
  number: 7,
  title: {
    en: 'Chapter 7: The Hereafter (Akhirah - Intermediate)',
    ur: 'باب 7: آخرت پر ایمان (درمیانی سطح)',
    ar: 'الفصل 7: اليوم الآخر والآخرة (المستوى المتوسط)',
  },
  description: {
    en: 'Understand how belief in Akhirah transforms character, the stages of Barzakh, Ba\'th (Resurrection), Gathering at Mahshar, the Scale (Mizan), and Hisab (Accountability).',
    ur: 'آخرت پر ایمان کے اخلاقی اثرات، برزخ کے مراحل، بعث (دوبارہ اٹھایا جانا)، میدانِ محشر، میزان اور حساب و کتاب کو تفصیلاً سمجھیں۔',
    ar: 'فهم أثر الإيمان باليوم الآخر في إصلاح السلوك، ومراحل البرزخ، والبعث، والشر والحشر في المحشر، والميزان والحساب.',
  },
  iconName: 'Hourglass',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat7_les1',
      title: {
        en: 'The Stages of the Hereafter and Accountability',
        ur: 'آخرت کے مراحل اور حساب و کتاب',
        ar: 'مراحل الآخرة والحساب والجزاء',
      },
      summary: {
        en: 'Belief in the Hereafter (Akhirah) gives true meaning and accountability to human life. After death, human souls pass through Barzakh, followed by Resurrection (Ba\'th), Gathering at Mahshar, Mizan (Scales of deeds), and Divine Hisab.',
        ur: 'آخرت پر ایمان انسان کی زندگی کو بامعنی اور ذمہ دار بناتا ہے۔ موت کے بعد روحیں برزخ میں رہتی ہیں، پھر بعث (دوبارہ اٹھنا)، میدانِ محشر، میزانِ عدل اور حساب کا مرحلہ آتا ہے۔',
        ar: 'الإيمان بالآخرة يعطي الحياة قيمتها وحس المسؤولية. وبعد الموت يمر الإنسان بالبرزخ ثم البعث والحشر في المحشر والميزان والحساب.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c7_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, how does remembering that we will stand before Allah on the Day of Judgment change a person\'s choices every day?',
            ur: 'شیخ طارق! یہ یاد رکھنا کہ ایک دن ہمیں اللہ کے سامنے کھڑا ہونا ہے، انسان کے روزمرہ فیصلوں کو کیسے بدل دیتا ہے؟',
            ar: 'يا شيخ طارق! كيف يغير تذكر الوقوف بين يدي الله يوم القيامة قرارات الإنسان اليومية؟',
          },
          sceneIllustration: 'Hourglass',
        },
        {
          id: 'l2_c7_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Belief in Akhirah is the ultimate moral compass! Knowing that every secret word and atom\'s weight of good or bad will be weighed makes us refrain from injustice, lie, or theft, and eagerness to do good!',
            ur: 'آخرت کا یقین انسان کے لیے سب سے بڑا اخلاقی ضامن ہے! یہ جاننا کہ ایک ایک بول اور ذرہ برابر نیکی یا بدی تولی جائے گی، انسان کو ظلم، جھوٹ اور چوری سے روکتا اور نیکی کی طرف ابھارتا ہے!',
            ar: 'الإيمان بالآخرة هو بوصلة الأخلاق الكبرى! معرفة أن كل كلمة ومثقال ذرة من خير أو شر سيوزن، يمنع الظلم والكذب والسرقة ويحث على الخیر!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Belief in Akhirah nurtures Taqwa, honesty, and responsibility in human conduct.',
            ur: 'آخرت پر ایمان انسان میں تقویٰ، سچائی اور ذمہ داری پیدا کرتا ہے۔',
            ar: 'الإيمان بالآخرة يربي التقوى والأمانة والمسؤولية في سلوك العبد.',
          },
        },
        {
          id: 'l2_c7_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What are the main stages starting from death until the final Judgment?',
            ur: 'موت سے لے کر حتمی فیصلے تک کے کون سے بڑے مراحل ہیں؟',
            ar: 'ما هي المراحل الرئيسية بدءاً من الموت حتى الحساب النهائي؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c7_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'First is Barzakh (the realm between death and Resurrection). Then Israfeel blows the Trumpet for Ba\'th (Resurrection). All humanity gathers at Mahshar, books of deeds are handed out, Mizan weighs the deeds, and Allah judges with perfect Justice and Mercy!',
            ur: 'سب سے پہلے عالمِ برزخ (موت اور قیامت کے درمیان کی دنیا) ہے؛ پھر حضرت اسرافیل صور پھونکیں گے تو بعث (زندہ اٹھایا جانا) ہوگا۔ سب انسان میدانِ محشر میں اکٹھے ہوں گے، اعمال نامے ملیں گے، میزان لگے گی اور اللہ عدل و رحمت سے فیصلہ فرمائے گا!',
            ar: 'أولاً البرزخ (بين الموت والبعث)، ثم ينفخ إسرافيل في الصور للبعث، فيحشر الناس في المحشر، وتتطاير الصحف، ويوضع الميزان، ويقضي الله بالعدل والرحمة!',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Allah judges all people with absolute Justice (\'Adl) and immense Mercy (Rahmah).',
            ur: 'اللہ تعالیٰ تمام لوگوں کا فیصلہ کامل عدل اور اپنی عظیم رحمت سے فرمائے گا۔',
            ar: 'يقضي الله بين العباد بالعدل التام والرحمة الواسعة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Barzakh is the intermediate realm where human souls rest between physical death and Qiyamah.',
          ur: 'عالمِ برزخ وہ درمیانی دنیا ہے جہاں انسانی روحیں موت اور قیامت کے درمیان رہتی ہیں۔',
          ar: 'عالم البرزخ هو الفترة الفاصلة بين الموت والبعث يوم القيامة.',
        },
        {
          en: 'Mizan is the heavy divine scale that will weigh all human deeds with mathematical perfection.',
          ur: 'میزان وہ عدل کا ترازو ہے جس پر انسانی اعمال کو کامل درستگی کے ساتھ تولا جائے گا۔',
          ar: 'الميزان هو الميزان الحقيقي الذي توزن به أعمال العباد يوم القيامة.',
        },
        {
          en: 'Good deeds done with sincerity for Allah will weigh heavily on the Mizan on that Day.',
          ur: 'اخلاص سے کیے گئے نیک اعمال قیامت کے دن میزان پر بھاری ثابت ہوں گے۔',
          ar: 'الأعمال الصالحة الخالصة لله تكون ثقيلة في الميزان يومئذ.',
        },
      ],
      quiz: [
        {
          id: 'l2_q7_1',
          type: 'mcq',
          question: {
            en: 'What is the intermediate realm experienced by souls between physical death and Resurrection called?',
            ur: 'جسمانی موت اور روزِ قیامت کے درمیان روحوں کی دنیا کو کیا کہا جاتا ہے؟',
            ar: 'ما اسم المرحلة الفاصلة التي تعيشها الأرواح بين الموت والبعث؟',
          },
          explanation: {
            en: 'Barzakh is the intermediate realm as mentioned in Surah Al-Mu\'minun.',
            ur: 'عالمِ برزخ وہ درمیانی دنیا ہے جس کا ذکر سورۃ المؤمنون میں ہے۔',
            ar: 'البرزخ هو المرحلة الفاصلة المذكورة في سورة المؤمنون.',
          },
          options: [
            { id: 'opt1', text: { en: 'Barzakh', ur: 'عالمِ برزخ', ar: 'عالم البرزخ' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Dunya only', ur: 'صرف دنیا', ar: 'الدنيا فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Sijjin only', ur: 'صرف سجین', ar: 'سجين فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_2',
          type: 'true_false',
          question: {
            en: 'Will any human being be wronged or cheated even by an atom\'s weight on the Day of Judgment?',
            ur: 'کیا قیامت کے دن کسی بھی انسان کے ساتھ ذرہ برابر بھی ظلم یا زیادتی کی جائے گی؟',
            ar: 'هل يُظلم أحد أو يُنقص من حسناته مثقال ذرة يوم القيامة؟',
          },
          explanation: {
            en: 'No! Surah Al-Anbiya states: "We shall set up scales of justice... and not a soul will be treated unjustly in the least."',
            ur: 'ہرگز نہیں! سورۃ الانبیاء میں ہے: "ونضع الموازين القسط ليوم القيامة فلا تظلم نفس شيئاً"۔',
            ar: 'لا! قال تعالى: "ونضع الموازين القسط ليوم القيامة فلا تظلم نفس شيئاً".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (No one will be wronged at all)', ur: 'جھوٹ (کسی پر ذرہ برابر بھی ظلم نہیں ہوگا)', ar: 'خطأ (لا يُظلم أحد شيئاً أبداً)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q7_3',
          type: 'mcq',
          question: {
            en: 'What does the term "Ba\'th" mean in Islamic eschatology?',
            ur: 'اسلامی عقیدے میں اصطلاح "بعث" (بعث بعد الموت) کا کیا مطلب ہے؟',
            ar: 'ماذا يعني مصطلح "البعث" في العقيدة الإسلامية؟',
          },
          explanation: {
            en: 'Ba\'th means Resurrection—bringing all humans back to life out of their graves on Qiyamah.',
            ur: 'بعث کا مطلب ہے قیامت کے دن تمام انسانوں کا اپنی قبروں سے دوبارہ زندہ کر کے اٹھایا جانا۔',
            ar: 'البعث هو إحياء الموتى وإخراجهم من قبورهم يوم القيامة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Resurrection of all dead back to life on Qiyamah', ur: 'قیامت کے دن تمام مردوں کا دوبارہ زندہ ہونا', ar: 'إحياء الموتى والبعث من القبور يوم القيامة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Sleeping forever', ur: 'ہمیشہ سوتے رہنا', ar: 'النوم الأبدي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Reincarnation into animals', ur: 'جانوروں میں تبدیل ہونا', ar: 'التناسخ إلى حيوانات' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_4',
          type: 'mcq',
          question: {
            en: 'What is the grand plain where all humanity will gather for judgment called?',
            ur: 'وہ عظیم الشان میدان جہاں تمام انسان حساب و کتاب کے لیے جمع کیے جائیں گے کیا کہلاتا ہے؟',
            ar: 'ما اسم الموقف العظيم الذي يُحشر فيه جميع الخلائق للحساب؟',
          },
          explanation: {
            en: 'Mahshar (The Place of Gathering).',
            ur: 'میدانِ محشر۔',
            ar: 'أرض المحشر.',
          },
          options: [
            { id: 'opt1', text: { en: 'Mahshar (Place of Gathering)', ur: 'میدانِ محشر', ar: 'المحشر (أرض الحشر)' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Arafat in Dunya', ur: 'دنیا کا میدانِ عرفات', ar: 'عرفات في الدنيا' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Badr', ur: 'بدر', ar: 'بدر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_5',
          type: 'mcq',
          question: {
            en: 'What is the "Mizan" on the Day of Judgment?',
            ur: 'روزِ قیامت "میزان" سے کیا مراد ہے؟',
            ar: 'ما هو "الميزان" يوم القيامة؟',
          },
          explanation: {
            en: 'The Divine Scale that accurately weighs human good and bad deeds.',
            ur: 'اللہ تعالی کا وہ ترازو جو انسانوں کے نیک و بد اعمال کو درستگی سے تولے گا۔',
            ar: 'الميزان الحقيقي الذي توزن به حسنات العباد وسيئاتهم.',
          },
          options: [
            { id: 'opt1', text: { en: 'The Divine Scales weighing human deeds', ur: 'انسانی اعمال تولنے کا الٰہی ترازو', ar: 'الميزان الذي توزن به الأعمال' }, isCorrect: true },
            { id: 'opt2', text: { en: 'A financial ledger only', ur: 'صرف مالی کھاتا', ar: 'دفتر حسابات فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'A measuring rope', ur: 'ناپنے کی رسی', ar: 'حبل قياس' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_6',
          type: 'true_false',
          question: {
            en: 'Does a person who receives their Book of Deeds in their right hand signify divine success?',
            ur: 'کیا جس شخص کو اس کا اعمال نامہ دائیں ہاتھ میں ملے، یہ الٰہی کامیابی اور خوشخبری کی علامت ہے؟',
            ar: 'هل أخذ الكتاب باليمين يوم القيامة علامة النجاة والفوز العظيم؟',
          },
          explanation: {
            en: 'Yes! Surah Al-Haqqah describes the joyful person receiving their book in the right hand saying "Ha\'umuqra\'u kitabiyah!".',
            ur: 'جی ہاں! سورۃ الحاقہ میں ہے کہ دائیں ہاتھ میں کتاب پانے والا خوشی سے کہے گا: آؤ میرا اعمال نامہ پڑھو!۔',
            ar: 'نعم! قال تعالى في سورة الحاقة: "فأما من أوتي كتابه بيمينه فيقول هاؤم اقرءوا كتابيه".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_7',
          type: 'mcq',
          question: {
            en: 'What simple phrase did Prophet Muhammad ﷺ say is light on the tongue but very heavy on the Mizan?',
            ur: 'نبی کریم ﷺ نے کس پیارے جملے کے بارے میں فرمایا کہ وہ زبان پر ہلکا ہے لیکن میزان پر بہت بھاری ہے؟',
            ar: 'ما هي الكلمتان الخفيفتان على اللسان، الثقيلتان في الميزان؟',
          },
          explanation: {
            en: '"SubhanAllahi wa bihamdihi, SubhanAllahil-\'Azeem" (Glory be to Allah and His praise, Glory be to Allah the Supreme).',
            ur: '"سبحان الله وبحمده، سبحان الله العظيم"۔',
            ar: '"سبحان الله وبحمده، سبحان الله العظيم".',
          },
          options: [
            { id: 'opt1', text: { en: 'SubhanAllahi wa bihamdihi, SubhanAllahil-\'Azeem', ur: 'سبحان الله وبحمده، سبحان الله العظيم', ar: 'سبحان الله وبحمده، سبحان الله العظيم' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Saying worldly praises', ur: 'دنیاوی تعریفیں کرنا', ar: 'المديح الدنيوي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Complaining about weather', ur: 'موسم کا گلہ کرنا', ar: 'الشكوى من الطقس' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_8',
          type: 'mcq',
          question: {
            en: 'What will be the VERY FIRST act of worship queried and accounted for on Qiyamah?',
            ur: 'قیامت کے دن عبادات میں سب سے پہلے کس عمل کا حساب لیا جائے گا؟',
            ar: 'ما هي أول عبادة يُحاسب عليها العبد يوم القيامة؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ said: "The first thing for which a person will be brought to account on the Day of Resurrection is the Salah (Prayer)."',
            ur: 'آپ ﷺ نے فرمایا: "قیامت کے دن بندے سے سب سے پہلے اس کی نماز کا حساب لیا جائے گا۔"',
            ar: 'قال ﷺ: "إن أول ما يحاسب به العبد يوم القيامة من عمله صلاته".',
          },
          options: [
            { id: 'opt1', text: { en: 'Salah (Daily Prayer)', ur: 'نماز (صلوٰۃ)', ar: 'الصلاة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Building houses', ur: 'مکان بنانا', ar: 'بناء البيوت' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Travel mileage', ur: 'سفر کی مسافت', ar: 'مسافات السفر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_9',
          type: 'true_false',
          question: {
            en: 'Can a person rely purely on their own deeds without needing Allah\'s Mercy to enter Jannah?',
            ur: 'کیا کوئی انسان اللہ کی رحمت کے بغیر محض اپنے اعمال کے بل بوتے پر جنت میں داخل ہو سکتا ہے؟',
            ar: 'هل يدخل أحد الجنة بعمله فقط دون حاجة إلى رحمة الله وفضله؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ clarified that no one enters Jannah except by Allah\'s Mercy (Rahmah). Our deeds are conditions, but entering Jannah is by Allah\'s grace.',
            ur: 'ہرگز نہیں! نبی کریم ﷺ نے فرمایا کہ کوئی بھی شخص صرف اپنے عمل سے نہیں بلکہ اللہ کی رحمت سے جنت میں جائے گا۔',
            ar: 'لا! قال ﷺ: "لن يدخل أحداً عملُه الجنةَ"، قالوا: ولا أنت؟ قال: "ولا أنا إلا أن يتغمدني الله برحمته".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Allah\'s Mercy is paramount)', ur: 'جھوٹ (اللہ کی رحمت ہی بنیادی وسیلہ ہے)', ar: 'خطأ (رحمة الله وفضله هما الأساس)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q7_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Hassan is tempted to keep a lost wallet he found. Remembering Hisab, what should he do?',
            ur: 'منظرنامہ: حسان کو گرا ہوا بٹووا ملتا ہے اور اس کا جی لالچ میں آتا ہے۔ حساب و کتاب کو یاد کرتے ہوئے اسے کیا کرنا چاہیے؟',
            ar: 'سيناريو: وجد حسان محفظة مفقودة وسولت له نفسه أخذها. فتذكر الحساب، ماذا يفعل؟',
          },
          explanation: {
            en: 'He rejects greed, searches for the rightful owner or hands it to authorities, fearing Akhirah accountability.',
            ur: 'وہ لالچ کو مسترد کرتا ہے، مالک کو تلاش کرتا ہے یا انتظامیہ کے حوالے کرتا ہے، آخرت کی جوابدہی کے ڈر سے۔',
            ar: 'يرفض الطمع ويعيدها لصاحبها أو للجهات المسؤولة خافاً الحساب.',
          },
          options: [
            { id: 'opt1', text: { en: 'Return the wallet honestly to its rightful owner', ur: 'بٹووا ایمانداری سے اس کے اصل مالک کو لوٹا دے', ar: 'رد المحفظة بأمانة إلى صاحبها' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Spend the money quickly', ur: 'پیسے فوراً خرچ کر لے', ar: 'أن ينفق المال بسرعة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Throw it in the trash', ur: 'کچرے میں پھینک دے', ar: 'رميها في القمامة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_11',
          type: 'mcq',
          question: {
            en: 'What will happen to the mountains and earth on the Day of Qiyamah as described in the Quran?',
            ur: 'قرآن مجید کے بیان کے مطابق قیامت کے دن پہاڑوں اور زمین کی کیا حالت ہوگی؟',
            ar: 'ماذا يحدث للجبال والأرض يوم القيامة كما وُصف في القرآن الكريم؟',
          },
          explanation: {
            en: 'The mountains will be crushed and scattered like wool, and the earth flattened.',
            ur: 'پہاڑ ریت اور دھنکی ہوئی اون کی طرح اڑیں گے اور زمین ہموار کر دی جائے گی۔',
            ar: 'تُدك الجبال وتكون كالعهن المنفوش وتُبسط الأرض.',
          },
          options: [
            { id: 'opt1', text: { en: 'Mountains will crumble like wool and the earth flattened', ur: 'پہاڑ دھنکی اون کی طرح ہو جائیں گے اور زمین ہموار ہوگی', ar: 'تكون الجبال كالعهن المنفوش وتبسط الأرض' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Nothing will change physically', ur: 'کچھ بھی نہیں بدلے گا', ar: 'لا يتغير شيء في الطبيعة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Mountains turn to gold', ur: 'پہاڑ سونے بن جائیں گے', ar: 'تتحول الجبال إلى ذهب' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_12',
          type: 'true_false',
          question: {
            en: 'Will parents, children, or friends be able to carry someone else\'s sins on the Day of Judgment?',
            ur: 'کیا قیامت کے دن والدین، اولاد یا دوست کسی دوسرے کے گناہوں کا بوجھ اٹھا سکیں گے؟',
            ar: 'هل يستطيع الآباء أو الأبناء تحمّل ذنوب غيرهم يوم القيامة؟',
          },
          explanation: {
            en: 'No! Surah Fatir states: "Wa la taziru waziratuw-wizra ukhra" (And no bearer of burdens shall bear the burden of another).',
            ur: 'ہرگز نہیں! سورۃ فاطر میں ہے: "ولا تزر وازرة وزر أخرى" (کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا)۔',
            ar: 'لا! قال تعالى: "ولا تزر وازرة وزر أخرى".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Every soul is responsible for its own deeds)', ur: 'جھوٹ (ہر شخص اپنے ہی عمل کا ذمہ دار ہوگا)', ar: 'خطأ (كل نفس بما كسبت رهينة)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q7_13',
          type: 'mcq',
          question: {
            en: 'What is the Pool/Reservoir of Prophet Muhammad ﷺ on Qiyamah from which believers will drink?',
            ur: 'قیامت کے دن نبی کریم ﷺ کا وہ مبارک حوض کون سا ہے جس سے مومنین سیراب ہوں گے؟',
            ar: 'ما اسم الحوض المبارك للنبي ﷺ يوم القيامة الذي يشرب منه المؤمنون؟',
          },
          explanation: {
            en: 'Al-Hawd Al-Kawthar (The Pool of Kawthar).',
            ur: 'حوضِ کوثر۔',
            ar: 'حوض الكوثر.',
          },
          options: [
            { id: 'opt1', text: { en: 'Al-Hawd Al-Kawthar', ur: 'حوضِ کوثر', ar: 'حوض الكوثر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Zamzam in Dunya', ur: 'دنیا کا زمزم', ar: 'زمزم في الدنيا' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Nahr an-Nil', ur: 'نہرِ نیل', ar: 'نهر النيل' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_14',
          type: 'mcq',
          question: {
            en: 'What is the Bridge stretched over Jahannam that all must traverse called?',
            ur: 'جہنم کے اوپر قائم وہ پل جس سے تمام انسانوں کو گزرنا ہوگا کیا کہلاتا ہے؟',
            ar: 'ما اسم الجسر الممدود على متن جهنم الذي يمر عليه الناس؟',
          },
          explanation: {
            en: 'As-Sirat (The Bridge). Believers pass according to the light of their good deeds.',
            ur: 'پل صراط۔ مومنین اپنے نیک اعمال کے نور کے مطابق اس پر سے گزریں گے۔',
            ar: 'الصراط. يمر عليه المؤمنون بنور أعمالهم الصالحة.',
          },
          options: [
            { id: 'opt1', text: { en: 'As-Sirat (The Bridge over Hellfire)', ur: 'پل صراط', ar: 'الصراط الممدود على جهنم' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Al-Barzakh', ur: 'البرزخ', ar: 'البرزخ' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Al-Mizan', ur: 'المیزان', ar: 'الميزان' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_15',
          type: 'true_false',
          question: {
            en: 'Will seven categories of righteous people be shaded under the Shade of Allah\'s Throne on Qiyamah when there is no other shade?',
            ur: 'کیا قیامت کے دن جب کوئی سایا نہیں ہوگا، سات قسم کے نیک لوگ اللہ کے عرش کے سائے تلے ہوں گے؟',
            ar: 'هل يظل الله سبعة يظلهم في ظله يوم لا ظل إلا ظله كما جاء في الحديث؟',
          },
          explanation: {
            en: 'Yes! Authentic Hadith mentions 7 groups, including a youth who grew up in the worship of Allah and a person who gives charity secretly.',
            ur: 'جی ہاں! صحیح حدیث میں 7 گروہوں کا ذکر ہے، جن میں وہ جوان جو اللہ کی عبادت میں بڑا ہوا اور وہ جو چھپا کر صدقہ دے۔',
            ar: 'نعم! قال ﷺ: "سبعة يظلهم الله في ظله يوم لا ظل إلا ظله..."، ومنهم شاب نشأ في عبادة الله.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_16',
          type: 'mcq',
          question: {
            en: 'What noble character trait weighs heaviest on the Mizan according to Hadith?',
            ur: 'حدیث شریف کے مطابق کون سا اچھا اخلاقی وصف میزانِ عدل پر سب سے بھاری ہوگا؟',
            ar: 'ما هو الخلق الذي يزن الأثقل في الميزان يوم القيامة وفق الحديث؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ said: "Nothing is heavier on the Scale of a believer on Qiyamah than Good Character (Husn al-Khuluq)."',
            ur: 'آپ ﷺ نے فرمایا: "قیامت کے دن مومن کی میزان میں خوش اخلاقی (حسنِ خلق) سے زیادہ بھاری کوئی چیز نہیں ہوگی۔"',
            ar: 'قال ﷺ: "ما من شيء أثقل في ميزان المؤمن يوم القيامة من حسن الخلق".',
          },
          options: [
            { id: 'opt1', text: { en: 'Husn al-Khuluq (Good Noble Character)', ur: 'حسنِ اخلاق (عمدہ کردار)', ar: 'حسن الخلق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Physical height', ur: 'جسمانی قد', ar: 'الطول البدني' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Expensive clothes', ur: 'قیمتی کپڑے', ar: 'الملابس الثمينة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_17',
          type: 'true_false',
          question: {
            en: 'Can sincere repentance (Tawbah) erased past sins before death arrives?',
            ur: 'کیا سچی توبہ انسان کی موت سے پہلے پچھلے گناہوں کو مٹا دیتی ہے؟',
            ar: 'هل التوبة الصادقة تمحو الذنوب السابقة قبل حضور الموت؟',
          },
          explanation: {
            en: 'Yes! The Prophet ﷺ said: "The one who repents from sin is like one who has no sin" (At-ta\'ibu min adh-dhanbi kaman la dhanba lah).',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: گناہ سے توبہ کرنے والا ایسا ہے جیسے اس نے گناہ کیا ہی نہ ہو۔',
            ar: 'نعم! قال ﷺ: "التائب من الذنب كمن لا ذنب له".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_18',
          type: 'mcq',
          question: {
            en: 'What is the person who accumulates many ritual deeds but wiped them out by oppressing or badmouthing others called in Hadith?',
            ur: 'حدیث مبارکہ میں اس شخص کو کیا نام دیا گیا ہے جو ڈھیروں نیکیوں کے باوجود دوسروں کی غیبت یا حق تلفی کی وجہ سے مفلس ہو گیا؟',
            ar: 'ماذا يُسمى من يأتي بأعمال كثيرة ولكن ضيعها بظلم الآخرين وشتمهم كما جاء في الحديث؟',
          },
          explanation: {
            en: 'Al-Muflis (The Bankrupt Person) whose good deeds are given to those he wronged.',
            ur: 'المفلس (دیوالیہ شخص) جس کی نیکیاں مظلوموں کو دے دی جاتی ہیں۔',
            ar: 'المفلس الذي تُؤخذ حسناته وتُعطى لمن ظلمهم.',
          },
          options: [
            { id: 'opt1', text: { en: 'Al-Muflis (The Bankrupt Person)', ur: 'المفلس (حق تلفی کرنے والا دیوالیہ)', ar: 'المفلس الحقيقي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The wealthiest hero', ur: 'سب سے بڑا امیر ہیرو', ar: 'البطل الأغنى' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The smart trader', ur: 'چالاک تاجر', ar: 'التاجر الذكي' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_19',
          type: 'mcq',
          question: {
            en: 'How does a true believer view the earthly life in comparison to Akhirah?',
            ur: 'ایک سچا مومن آخرت کے مقابلے میں دنیاوی زندگی کو کس نظر سے دیکھتا ہے؟',
            ar: 'كيف ينظر المؤمن الحقيقي إلى الحياة الدنيا مقارنة بالآخرة؟',
          },
          explanation: {
            en: 'As a temporary planting ground (Mazra\'at al-Akhirah) to harvest eternal rewards.',
            ur: 'آخرت کی کھیتی کے طور پر تاکہ ابدی ثواب کا پھل حاصل کیا جا سکے۔',
            ar: 'كمزرعة للآخرة للتزود منها بالأعمال الصالحة للنعيم الأبدي.',
          },
          options: [
            { id: 'opt1', text: { en: 'As a temporary journey and planting ground for Akhirah', ur: 'آخرت کی تیاری اور کھیتی کے لیے ایک عارضی سفر', ar: 'كسفر مؤقت ومزرعة للآخرة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'As the only permanent home', ur: 'واحد دائمی گھر کے طور پر', ar: 'كمنزل دائم واخير' }, isCorrect: false },
            { id: 'opt3', text: { en: 'As a place of pure entertainment', ur: 'صرف کھیل کود کا مقام', ar: 'كمكان لهو فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q7_20',
          type: 'mcq',
          question: {
            en: 'What is the ultimate hope and desire of every believer concerning the Day of Judgment?',
            ur: 'قیامت کے دن کے حوالے سے ہر مومن کی سب سے بڑی امید اور تمنا کیا ہوتی ہے؟',
            ar: 'ما هي أعظم أمنية ورجاء لكل مؤمن يوم القيامة؟',
          },
          explanation: {
            en: 'To gain Allah\'s Forgiveness, Rahmah, protection from Punishment, and enter eternal Jannah.',
            ur: 'اللہ کی مغفرت، رحمت، عذاب سے نجات اور ابدی جنت کا حصول۔',
            ar: 'الفوز بمغفرة الله ورحمته، والنجاة من النار ودخول الجنة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Gaining Allah\'s Mercy, forgiveness, and entry into Jannah', ur: 'اللہ کی رحمت، مغفرت اور جنت کا حصول', ar: 'الفوز ورحمة الله والمغفرة ودخول الجنة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Becoming ruler of earth', ur: 'زمین کا حکمران بننا', ar: 'أن يصبح حكام الأرض' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Returning back to Dunya to buy gold', ur: 'دنیا میں سونا خریدنے واپس انا', ar: 'العودة للدنيا لشراء الذهب' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

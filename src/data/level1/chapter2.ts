import { Category } from '../../types';

export const chapter2: Category = {
  id: 'lvl1_cat2',
  number: 2,
  title: {
    en: 'Chapter 2: Understanding Islam',
    ur: 'باب 2: دینِ اسلام کی سمجھ',
    ar: 'الفصل 2: فهم الإسلام',
  },
  description: {
    en: 'Discover the core meaning of Islam, what makes a person a Muslim, the 5 Pillars of Islam, and our ultimate purpose in life.',
    ur: 'اسلام کے بنیادی معنی، مسلمان ہونے کی حقیقت، ارکانِ اسلام اور ہماری زندگی کا حقیقی مقصد جانیں۔',
    ar: 'اكتشف المعنى الجوهري للإسلام، حقيقة المسلم، أركان الإسلام الخمسة، والغاية من وجودنا.',
  },
  iconName: 'BookOpen',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat2_les1',
      title: {
        en: 'The Path of Islam & Purpose of Life',
        ur: 'اسلام کا راستہ اور زندگی کا مقصد',
        ar: 'طريق الإسلام والغاية من الحياة',
      },
      summary: {
        en: 'Islam comes from the root word meaning "submission to Allah" and "peace". A Muslim is one who willingly surrenders to Allah\'s divine guidance.',
        ur: 'لفظ "اسلام" کا مادہ سلامتی اور اطاعت ہے۔ مسلمان وہ ہے جو اللہ کے احکام کے سامنے سرِ تسلیمِ خم کرے۔',
        ar: 'الإسلام مشتق من الاستسلام والاستسلام لله والسلام. والمسلم هو من خضع لأمر الله وطاعته.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c2_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, what does the word "Islam" mean, and why did Allah create us on this earth?',
            ur: 'شیخ طارق، لفظ "اسلام" کا کیا مطلب ہے اور اللہ نے ہمیں زمین پر کیوں پیدا کیا؟',
            ar: 'يا شيخ طارق، ما معنى كلمة "الإسلام" ولماذا خلقنا الله في هذه الأرض؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'c2_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Wonderful question Maryam! Islam means submitting your heart and actions to Allah and attaining true peace. In Surah Adh-Dhariyat (51:56), Allah says: "I did not create jinn and humans except to worship Me."',
            ur: 'بہت پیارا سوال مریم! اسلام کا مطلب ہے اللہ کے احکام پر چل کر دل کا سکون حاصل کرنا۔ اللہ نے قرآن میں فرمایا: "میں نے جنوں اور انسانوں کو صرف اپنی عبادت کے لیے پیدا کیا۔"',
            ar: 'سؤال رائع يا مريم! الإسلام يعني الاستسلام لله لنيل السلام والسكينة. قال الله تعالى: "وما خلقت الجن والإنس إلا ليعبدون".',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Purpose of life: Worshipping Allah alone and spreading goodness on Earth.',
            ur: 'زندگی کا مقصد: صرف اللہ کی عبادت کرنا اور دنیا میں نیکی پھیلانا۔',
            ar: 'الغاية من الحياة: عبادة الله وحده ونشر الخير في الأرض.',
          },
        },
        {
          id: 'c2_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What are the 5 essential Pillars that build the house of Islam?',
            ur: 'اسلام کا محل کن 5 بنیادی ستونوں (ارکان) پر قائم ہے؟',
            ar: 'ما هي الأركان الخمسة الأساسية التي تبني صرح الإسلام؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'c2_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The 5 Pillars of Islam are: 1. Shahadah (Testimony of Faith), 2. Salah (Daily Prayers), 3. Zakat (Charity), 4. Sawm (Fasting in Ramadan), and 5. Hajj (Pilgrimage to Makkah for those able).',
            ur: 'اسلام کے 5 ارکان ہیں: 1۔ شہادت (ایمان کی گواہی)، 2۔ نماز، 3۔ زکوٰۃ، 4۔ روزے (رمضان میں)، 5۔ حج (استطاعت رکھنے والوں کے لیے)۔',
            ar: 'أركان الإسلام خمسة: 1. الشهادتان، 2. إقام الصلاة، 3. إيتاء الزكاة، 4. صوم رمضان، 5. حج البيت لمن استطاع إليه سبيلاً.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'The 5 Pillars are Shahadah, Salah, Zakat, Sawm, and Hajj.',
            ur: 'اسلام کے 5 ارکان: کلمہ طیبہ، نماز، زکوٰۃ، روزہ اور حج ہیں۔',
            ar: 'أركان الإسلام الخمسة: الشهادتان والصلاة والزكاة والصوم والحج.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Islam brings peace, clarity, and righteousness to individual lives and society.',
          ur: 'اسلام انسان کی انفرادی اور اجتماعی زندگی میں امن، سکون اور پاکیزگی لاتا ہے۔',
          ar: 'الإسلام يجلب السلام والوضوح والصلاح للفرد والمجتمع.',
        },
        {
          en: 'A Muslim believes in all Prophets, Divine Scriptures, Angels, and the Day of Judgment.',
          ur: 'ایک سچا مسلمان تمام انبیاء، مقدس کتابوں، فرشتوں اور قیامت کے دن پر یقین رکھتا ہے۔',
          ar: 'المسلم يؤمن بجميع الأنبياء والكتب السماوية والملائكة واليوم الآخر.',
        },
        {
          en: 'Obedience to Allah brings happiness in this Dunya and eternal success in Akhirah.',
          ur: 'اللہ کے احکام پر چلنے سے دنیا میں کامیابی اور آخرت میں جنت کی ابدی نعمت ملتی ہے۔',
          ar: 'طاعة الله تحقق السعادة في الدنيا والفوز الأبدي في الآخرة.',
        },
      ],
      quiz: [
        {
          id: 'c2_q1',
          type: 'mcq',
          question: {
            en: 'What does the word "Islam" literally mean?',
            ur: 'لفظ "اسلام" کے لغوی معنی کیا ہیں؟',
            ar: 'ما المعنى اللغوي لكلمة "الإسلام"؟',
          },
          explanation: {
            en: 'Islam means submission to Allah\'s will and attaining peace.',
            ur: 'اسلام کا مطلب ہے اللہ کے احکام کی اطاعت اور سلامتی حاصل کرنا۔',
            ar: 'الإسلام يعني الاستسلام لأمر الله والتنعم بالسلام.',
          },
          options: [
            { id: '1', text: { en: 'Submission to Allah & Peace', ur: 'اطاعتِ الٰہی اور سلامتی', ar: 'الاستسلام لله والسلام' }, isCorrect: true },
            { id: '2', text: { en: 'Victory by war', ur: 'جنگ و فتح', ar: 'النصر بالحرب' }, isCorrect: false },
            { id: '3', text: { en: 'Wealth and trading', ur: 'تجارت اور مالداری', ar: 'المال والتجارة' }, isCorrect: false },
            { id: '4', text: { en: 'History reading', ur: 'تاریخ کی پڑھائی', ar: 'قراءة التاريخ' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q2',
          type: 'mcq',
          question: {
            en: 'Who is a "Muslim"?',
            ur: '"مسلمان" کسے کہتے ہیں؟',
            ar: 'من هو "المسلم"؟',
          },
          explanation: {
            en: 'A Muslim is a person who submits their will to Allah and follows Islam.',
            ur: 'مسلمان وہ شخص ہے جو اللہ کی بندگی اور اسلام کی پیروی کرتا ہے۔',
            ar: 'المسلم هو من خضع لله واتبع دين الإسلام.',
          },
          options: [
            { id: '1', text: { en: 'A person who submits to Allah\'s will', ur: 'جو شخص اللہ کی اطاعت و بندگی قبول کرتا ہے', ar: 'من يستسلم لأمر الله وطاعته' }, isCorrect: true },
            { id: '2', text: { en: 'A person born in Arab countries only', ur: 'صرف عرب ممالک میں پیدا ہونے والا', ar: 'مولود في بلاد العرب فقط' }, isCorrect: false },
            { id: '3', text: { en: 'Only scholars', ur: 'صرف علماء', ar: 'العلماء فقط' }, isCorrect: false },
            { id: '4', text: { en: 'A soldier', ur: 'صرف سپاہی', ar: 'الجندي فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q3',
          type: 'mcq',
          question: {
            en: 'According to the Quran, what is the primary purpose of human creation?',
            ur: 'قرآن مجید کے مطابق انسانی تخلیق کا بنیادی مقصد کیا ہے؟',
            ar: 'وفقاً للقرآن الكريم، ما هي الغاية الأساسية من خلق الإنسان؟',
          },
          explanation: {
            en: 'Allah states in Surah Adh-Dhariyat: "I did not create jinn and humans except to worship Me."',
            ur: 'اللہ نے فرمایا: میں نے جنوں اور انسانوں کو صرف اپنی عبادت کے لیے پیدا کیا۔',
            ar: 'قال تعالى: "وما خلقت الجن والإنس إلا ليعبدون".',
          },
          options: [
            { id: '1', text: { en: 'To worship Allah alone and do good', ur: 'صرف اللہ کی عبادت اور نیک کام کرنا', ar: 'عبادة الله وحده وعمل الخير' }, isCorrect: true },
            { id: '2', text: { en: 'To gather money only', ur: 'صرف پیسہ اکٹھا کرنا', ar: 'جمع الأموال فقط' }, isCorrect: false },
            { id: '3', text: { en: 'To sleep and eat', ur: 'صرف کھانا اور سونا', ar: 'الأكل والنوم فقط' }, isCorrect: false },
            { id: '4', text: { en: 'To build huge towers', ur: 'اونچی عمارتیں بنانا', ar: 'بناء الأبراج العالية' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q4',
          type: 'mcq',
          question: {
            en: 'How many Pillars of Islam are there?',
            ur: 'اسلام کے کتنے بنیادی ارکان ہیں؟',
            ar: 'كم عدد أركان الإسلام؟',
          },
          explanation: {
            en: 'There are 5 Pillars of Islam.',
            ur: 'اسلام کے 5 ارکان ہیں۔',
            ar: 'أركان الإسلام خمسة.',
          },
          options: [
            { id: '1', text: { en: '5 Pillars', ur: '5 ارکان', ar: '5 أركان' }, isCorrect: true },
            { id: '2', text: { en: '3 Pillars', ur: '3 ارکان', ar: '3 أركان' }, isCorrect: false },
            { id: '3', text: { en: '7 Pillars', ur: '7 ارکان', ar: '7 أركان' }, isCorrect: false },
            { id: '4', text: { en: '10 Pillars', ur: '10 ارکان', ar: '10 أركان' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q5',
          type: 'mcq',
          question: {
            en: 'What is the First Pillar of Islam?',
            ur: 'اسلام کا پہلا اور بنیادی رکن کون سا ہے؟',
            ar: 'ما هو الركن الأول من أركان الإسلام؟',
          },
          explanation: {
            en: 'Shahadah (Declaration of faith: There is no god but Allah, and Muhammad is His Messenger).',
            ur: 'شہادت (کلمہ طیبہ: اللہ کے سوا کوئی معبود نہیں اور محمد ﷺ اس کے رسول ہیں)۔',
            ar: 'الشهادتان: شهادة أن لا إله إلا الله وأن محمداً رسول الله.',
          },
          options: [
            { id: '1', text: { en: 'Shahadah (Testimony of Faith)', ur: 'شہادت (ایمان کی گواہی)', ar: 'الشهادتان' }, isCorrect: true },
            { id: '2', text: { en: 'Salah (Prayer)', ur: 'نماز', ar: 'الصلاة' }, isCorrect: false },
            { id: '3', text: { en: 'Hajj', ur: 'حج', ar: 'الحج' }, isCorrect: false },
            { id: '4', text: { en: 'Sawm', ur: 'روزہ', ar: 'الصوم' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q6',
          type: 'mcq',
          question: {
            en: 'What is the Second Pillar of Islam performed five times daily?',
            ur: 'اسلام کا دوسرا رکن کون سا ہے جو روزانہ پانچ وقت ادا کیا جاتا ہے؟',
            ar: 'ما هو الركن الثاني من أركان الإسلام الذي يؤدى خمس مرات يومياً؟',
          },
          explanation: {
            en: 'Salah (the 5 daily obligatory prayers).',
            ur: 'نماز (پانچ وقت کی فرض نمازیں)۔',
            ar: 'الصلاة (الصلوات الخمس المكتوبة).',
          },
          options: [
            { id: '1', text: { en: 'Salah (Daily Prayer)', ur: 'نماز', ar: 'الصلاة' }, isCorrect: true },
            { id: '2', text: { en: 'Zakat', ur: 'زکوٰۃ', ar: 'الزكاة' }, isCorrect: false },
            { id: '3', text: { en: 'Fasting', ur: 'روزہ', ar: 'الصوم' }, isCorrect: false },
            { id: '4', text: { en: 'Umrah', ur: 'عمرہ', ar: 'العمرة' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q7',
          type: 'mcq',
          question: {
            en: 'What is Zakat in Islam?',
            ur: 'اسلام میں زکوٰۃ کیا ہے؟',
            ar: 'ما هي الزكاة في الإسلام؟',
          },
          explanation: {
            en: 'Zakat is obligatory charity given annually to help the poor and needy.',
            ur: 'زکوٰۃ ایک مالی فرض ہے جو ناداروں اور غریبوں کی مدد کے لیے دیا جاتا ہے۔',
            ar: 'الزكاة هي حق واجب في المال للفقراء والمساكين.',
          },
          options: [
            { id: '1', text: { en: 'Obligatory charity to help the needy', ur: 'غریبوں اور ضرورت مندوں کی مدد کا مالی فرض', ar: 'حق واجب في المال للفقراء والمساكين' }, isCorrect: true },
            { id: '2', text: { en: 'Optional story telling', ur: 'کہانی سنانا', ar: 'قص القصص' }, isCorrect: false },
            { id: '3', text: { en: 'Personal savings only', ur: 'شخصی بچت', ar: 'ادخار شخصي' }, isCorrect: false },
            { id: '4', text: { en: 'Government tax', ur: 'سرکاری ٹیکس', ar: 'ضريبة حكُومية' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q8',
          type: 'mcq',
          question: {
            en: 'During which holy month do Muslims fast from dawn until sunset?',
            ur: 'مسلمان کس مبارک مہینے میں صبح صادق سے غروبِ آفتاب تک روزہ رکھتے ہیں؟',
            ar: 'في أي شهر مبارك يصوم المسلمون من الفجر إلى غروب الشمس؟',
          },
          explanation: {
            en: 'Muslims fast during the blessed month of Ramadan.',
            ur: 'مسلمان ماہِ مبارک رمضان میں روزے رکھتے ہیں۔',
            ar: 'يصوم المسلمون شهر رمضان المبارك.',
          },
          options: [
            { id: '1', text: { en: 'Ramadan', ur: 'رمضان المبارک', ar: 'رمضان المبارك' }, isCorrect: true },
            { id: '2', text: { en: 'Shawwal', ur: 'شوال', ar: 'شوال' }, isCorrect: false },
            { id: '3', text: { en: 'Muharram', ur: 'محرم الحرام', ar: 'محرم' }, isCorrect: false },
            { id: '4', text: { en: 'Rabi al-Awwal', ur: 'ربیع الاول', ar: 'ربيع الأول' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q9',
          type: 'mcq',
          question: {
            en: 'What is Hajj?',
            ur: 'حج کیا ہے؟',
            ar: 'ما هو الحج؟',
          },
          explanation: {
            en: 'Hajj is the pilgrimage to Makkah performed at least once in a lifetime if physically and financially able.',
            ur: 'حج مکہ مکرمہ کا مقدس سفر ہے جو استطاعت رکھنے پر زندگی میں ایک بار فرض ہے۔',
            ar: 'الحج هو قصد البيت الحرام بمكة للعبادة لمن استطاع إليه سبيلاً.',
          },
          options: [
            { id: '1', text: { en: 'Pilgrimage to Makkah once in life if able', ur: 'مکہ کا مقدس سفر (صاحبِ استطاعت کے لیے زندگی میں ایک بار)', ar: 'حج البيت الحرام لمن استطاع إليه سبيلاً' }, isCorrect: true },
            { id: '2', text: { en: 'Visiting the local park', ur: 'مقامی پارک کا دورہ', ar: 'زيارة الحديقة' }, isCorrect: false },
            { id: '3', text: { en: 'Weekly Friday gathering only', ur: 'صرف جمعہ کا اجتماع', ar: 'اجتماع الجمعة' }, isCorrect: false },
            { id: '4', text: { en: 'Daily jogging', ur: 'روزانہ کی ورزش', ar: 'الرياضة اليومية' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q10',
          type: 'true_false',
          question: {
            en: 'Is belief in the Six Articles of Faith (Iman) required for every Muslim?',
            ur: 'کیا ایمانیات کے 6 ارکان پر یقین رکھنا ہر مسلمان کے لیے لازمی ہے؟',
            ar: 'هل الإيمان بأركان الإيمان الستة واجب على كل مسلم؟',
          },
          explanation: {
            en: 'Yes, faith in Allah, Angels, Books, Prophets, Day of Judgment, and Divine Decree are compulsory.',
            ur: 'جی ہاں، اللہ، فرشتوں، کتابوں، انبیاء، قیامت اور تقدیر پر ایمان لانا فرض ہے۔',
            ar: 'نعم، الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر واجب.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q11',
          type: 'mcq',
          question: {
            en: 'What language was the Holy Quran revealed in?',
            ur: 'قرآن مجید کس زبان میں نازل ہوا؟',
            ar: 'بأي لغة نزل القرآن الكريم؟',
          },
          explanation: {
            en: 'The Quran was revealed in Arabic ("Inna anzalnahu Qur\'anan \'Arabiyyan").',
            ur: 'قرآن مجید فصیح عربی زبان میں نازل فرمایا گیا۔',
            ar: 'نزل القرآن الكريم باللغة العربية الفصحى.',
          },
          options: [
            { id: '1', text: { en: 'Arabic', ur: 'عربی زبان', ar: 'اللغة العربية' }, isCorrect: true },
            { id: '2', text: { en: 'English', ur: 'انگریزی', ar: 'الإنجليزية' }, isCorrect: false },
            { id: '3', text: { en: 'Persian', ur: 'فارسی', ar: 'الفارسية' }, isCorrect: false },
            { id: '4', text: { en: 'Greek', ur: 'یونانی', ar: 'اليونانية' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q12',
          type: 'mcq',
          question: {
            en: 'What is the holy book of guidance for all Muslims?',
            ur: 'تمام مسلمانوں کی ہدایت کے لیے مقدس ترین کتاب کون سی ہے؟',
            ar: 'ما هو الكتاب المقدس الهادي لجميع المسلمين؟',
          },
          explanation: {
            en: 'The Holy Quran is the final divine revelation from Allah.',
            ur: 'قرآن مجید اللہ تعالیٰ کی آخری نازل کردہ ہدایت والی کتاب ہے۔',
            ar: 'القرآن الكريم هو كتاب الله الخاتم والهدى.',
          },
          options: [
            { id: '1', text: { en: 'The Holy Quran', ur: 'قرآن مجید', ar: 'القرآن الكريم' }, isCorrect: true },
            { id: '2', text: { en: 'Dictionary', ur: 'لغت', ar: 'القاموس' }, isCorrect: false },
            { id: '3', text: { en: 'Science manual', ur: 'سائنس کا رسالہ', ar: 'كتيب العلوم' }, isCorrect: false },
            { id: '4', text: { en: 'History storybook', ur: 'تاریخی قصوں کی کتاب', ar: 'كتاب القصص' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q13',
          type: 'true_false',
          question: {
            en: 'Does obeying Allah lead to peace in this world and reward in Jannah?',
            ur: 'کیا اللہ کے احکام پر عمل کرنے سے دنیا میں سکون اور آخرت میں جنت کی کامیابی ملتی ہے؟',
            ar: 'هل تؤدي طاعة الله إلى السلام في الدنيا والجزاء بالجنة في الآخرة؟',
          },
          explanation: {
            en: 'Yes! Allah promises pure life in Dunya and highest gardens in Jannah for righteousness.',
            ur: 'جی ہاں! اللہ تعالیٰ کا نیک لوگوں کے لیے دنیا میں پاکیزہ زندگی اور جنت کا وعدہ ہے۔',
            ar: 'نعم! وعد الله المؤمنين الصالحين حياة طيبة وجنات الخلد.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q14',
          type: 'mcq',
          question: {
            en: 'What is the Qiblah direction toward which Muslims pray?',
            ur: 'نماز کے لیے مسلمانوں کی قبلہ کی سمت کس مقدس عمارت کی طرف ہوتی ہے؟',
            ar: 'ما هي قبلة المسلمين في صلاتهم؟',
          },
          explanation: {
            en: 'Muslims face the Holy Ka\'bah in Makkah Mukarramah during prayer.',
            ur: 'مسلمان مکہ مکرمہ میں واقع خانہ کعبہ کی طرف رخ کر کے نماز پڑھتے ہیں۔',
            ar: 'يتجه المسلمون نحو الكعبة المشرفة بمكة المكرمة.',
          },
          options: [
            { id: '1', text: { en: 'The Holy Ka\'bah in Makkah', ur: 'مکہ مکرمہ میں خانہ کعبہ', ar: 'الكعبة المشرفة بمكة' }, isCorrect: true },
            { id: '2', text: { en: 'The North Pole', ur: 'قطبِ شمالی', ar: 'القطب الشمالي' }, isCorrect: false },
            { id: '3', text: { en: 'The setting sun', ur: 'غروب ہوتا سورج', ar: 'الشمس المغاربة' }, isCorrect: false },
            { id: '4', text: { en: 'Any nearest mountain', ur: 'کوئی بھی قریب کا پہاڑ', ar: 'أي جبل قريب' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q15',
          type: 'mcq',
          question: {
            en: 'What phrase do Muslims say before starting any good action or eating food?',
            ur: 'مسلمان کوئی بھی اچھا کام یا کھانا شروع کرنے سے پہلے کیا پڑھتے ہیں؟',
            ar: 'ماذا يقول المسلم قبل البدء بأي عمل صالح أو تناول الطعام؟',
          },
          explanation: {
            en: 'Bismillah-ir-Rahman-ir-Raheem means "In the name of Allah, the Most Gracious, the Most Merciful."',
            ur: 'بسم اللہ الرحمن الرحیم پڑھ کر ہر نیک کام کا آغاز کیا جاتا ہے۔',
            ar: 'بسم الله الرحمن الرحيم تبدأ بها كل الأعمال الطيبة.',
          },
          options: [
            { id: '1', text: { en: 'Bismillah-ir-Rahman-ir-Raheem', ur: 'بسم اللہ الرحمن الرحیم', ar: 'بسم الله الرحمن الرحيم' }, isCorrect: true },
            { id: '2', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
            { id: '3', text: { en: 'Allahu Akbar', ur: 'اللہ اکبر', ar: 'الله أكبر' }, isCorrect: false },
            { id: '4', text: { en: 'Astaghfirullah', ur: 'استغفر اللہ', ar: 'أستغفر الله' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q16',
          type: 'true_false',
          question: {
            en: 'Is Islam only meant for one tribe or race, or for all humanity?',
            ur: 'کیا دینِ اسلام صرف کسی ایک خاص قوم کے لیے ہے یا تمام انسانیت کے لیے؟',
            ar: 'هل الإسلام لعرِق واحد أم لجميع البشرية؟',
          },
          explanation: {
            en: 'Islam is a universal guidance sent for all human beings of every race and color.',
            ur: 'اسلام تمام انسانوں اور تمام رنگ و نسل کے لوگوں کے لیے عالمگیر ہدایت ہے۔',
            ar: 'الإسلام دين عالمي لجميع البشر من كل جنس ولون.',
          },
          options: [
            { id: '1', text: { en: 'Universal for all humanity', ur: 'تمام انسانیت کے لیے عالمگیر دین', ar: 'عالمي لكل البشرية' }, isCorrect: true },
            { id: '2', text: { en: 'Only for one small group', ur: 'صرف کسی ایک گروہ کے لیے', ar: 'لمجموعة صغيرة فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q17',
          type: 'mcq',
          question: {
            en: 'What does "Halal" mean in Islamic terms?',
            ur: 'اسلامی اصطلاح میں "حلال" کا کیا مطلب ہے؟',
            ar: 'ما معنى "حلال" في الشريعة الإسلامية؟',
          },
          explanation: {
            en: 'Halal means pure, lawful, and allowed by Allah.',
            ur: 'حلال کا مطلب ہے وہ چیز جو جائز، پاکیزہ اور پسندیدہ ہو۔',
            ar: 'الحلال هو المباح والماذون فيه شَرعاً.',
          },
          options: [
            { id: '1', text: { en: 'Lawful, pure, and allowed by Allah', ur: 'پاکیزہ، جائز اور اللہ کی اجازت یافتہ', ar: 'المباح والطاهر وما أذِن الله به' }, isCorrect: true },
            { id: '2', text: { en: 'Forbidden and bad', ur: 'حرام اور ناپسندیدہ', ar: 'المحرم والسيء' }, isCorrect: false },
            { id: '3', text: { en: 'Expensive item', ur: 'مہنگی چیز', ar: 'شيء غالي الثمن' }, isCorrect: false },
            { id: '4', text: { en: 'Dangerous product', ur: 'خطرناک چیز', ar: 'منتج خطير' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q18',
          type: 'mcq',
          question: {
            en: 'What does "Haram" mean?',
            ur: '"حرام" کا کیا مطلب ہے؟',
            ar: 'ما معنى "حرام"؟',
          },
          explanation: {
            en: 'Haram means strictly forbidden and unlawful by Allah.',
            ur: 'حرام کا مطلب ہے جو چیز شریعت میں سختی سے منع کی گئی ہو۔',
            ar: 'الحرام هو الممنوع والمحرم شرعاً.',
          },
          options: [
            { id: '1', text: { en: 'Forbidden and unlawful by Allah', ur: 'اللہ اور اس کے رسول کا منع کردہ گناہ', ar: 'المحرم والممنوع شرعاً' }, isCorrect: true },
            { id: '2', text: { en: 'Permitted and recommended', ur: 'جائز اور پسندیدہ', ar: 'المستحب والمباح' }, isCorrect: false },
            { id: '3', text: { en: 'Healthy food', ur: 'صحت بخش کھانا', ar: 'الطعام الصحي' }, isCorrect: false },
            { id: '4', text: { en: 'Clean water', ur: 'صاف پانی', ar: 'الماء النقي' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q19',
          type: 'true_false',
          question: {
            en: 'Does a Muslim treat parents with extreme kindness and respect?',
            ur: 'کیا ایک مسلمان پر والدین کے ساتھ انتہائی حسنِ سلوک اور احترام کرنا فرض ہے؟',
            ar: 'هل يجب على المسلم معاملة الوالدين بوفاء وإحسان وعطف؟',
          },
          explanation: {
            en: 'Yes! Allah commands in Quran: "And lower to them the wing of humility out of mercy."',
            ur: 'جی ہاں! اللہ نے قرآن میں والدین کے ساتھ احسان اور عاجزی کا حکم دیا ہے۔',
            ar: 'نعم! قال الله تعالى: "واخفض لهما جناح الذل من الرحمة".',
          },
          options: [
            { id: '1', text: { en: 'True (High duty in Islam)', ur: 'سچ (اسلام میں عظیم ترین فرض)', ar: 'صحيح (واجب عظيم)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c2_q20',
          type: 'mcq',
          question: {
            en: 'What is the reward promised by Allah for sincere believers who obey Him?',
            ur: 'اللہ پر سچا ایمان لانے اور اس کی اطاعت کرنے والوں کے لیے کیا عظیم انعام ہے؟',
            ar: 'ما هو الأجر العظيم الذي وعد الله به المؤمنين الصادقين المطيعين؟',
          },
          explanation: {
            en: 'Allah promises Jannah (Paradise) filled with eternal happiness, rivers, and peace.',
            ur: 'اللہ نے سچے مومنوں کے لیے ابدی جنت کی باغات اور نعمتوں کا وعدہ فرمایا ہے۔',
            ar: 'وعد الله المؤمنين بجنات النعيم الخالدة.',
          },
          options: [
            { id: '1', text: { en: 'Jannah (Paradise)', ur: 'جنت الفردوس', ar: 'جنات النعيم (الجنة)' }, isCorrect: true },
            { id: '2', text: { en: 'Temporary toy', ur: 'عارضی کھلونا', ar: 'لعبة مؤقتة' }, isCorrect: false },
            { id: '3', text: { en: 'Nothing at all', ur: 'کچھ بھی نہیں', ar: 'لا شيء' }, isCorrect: false },
            { id: '4', text: { en: 'Hardship only', ur: 'صرف مشقت', ar: 'مشقة فقط' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

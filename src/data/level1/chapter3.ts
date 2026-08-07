import { Category } from '../../types';

export const chapter3: Category = {
  id: 'lvl1_cat3',
  number: 3,
  title: {
    en: 'Chapter 3: Iman (Belief System)',
    ur: 'باب 3: ایمان اور ارکانِ ایمان',
    ar: 'الفصل 3: الإيمان وأركانه',
  },
  description: {
    en: 'Understand the Six Pillars of Faith (Iman) in detail: Belief in Allah, Angels, Divine Books, Prophets, Day of Judgment, and Qadr.',
    ur: 'ایمان کے 6 بنیادی ارکان کو تفصیل سے سمجھیں: اللہ، فرشتے، آسمانی کتابیں، انبیاء، قیامت اور تقدیر۔',
    ar: 'تفهم أركان الإيمان الستة بالتفصيل: الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر.',
  },
  iconName: 'Shield',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat3_les1',
      title: {
        en: 'The Six Pillars of Iman',
        ur: 'ارکانِ ایمان کی تفصیل',
        ar: 'أركان الإيمان الستة',
      },
      summary: {
        en: 'Iman means sincere belief in the heart, statement on the tongue, and actions of the body. It rests firmly on six essential articles of faith.',
        ur: 'ایمان کا مطلب دل کی تصدیق، زبان کا اقرار اور اعضاء کا عمل ہے۔ یہ چھ محکم بنیادوں پر قائم ہے۔',
        ar: 'الإيمان هو إقرار باللسان وتصديق بالقلب وعمل بالجوارح. ويقوم على ستة أركان.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c3_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, what is the difference between Islam and Iman?',
            ur: 'شیخ طارق، اسلام اور ایمان میں کیا فرق ہے؟',
            ar: 'يا شيخ طارق، ما الفرق بين الإسلام والإيمان؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'c3_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Great inquiry Zayd! Prophet Muhammad ﷺ explained in the famous Hadith Jibril: Islam is the outward pillars of worship, while Iman is the deep inward belief of the heart!',
            ur: 'شاندار سوال زید! حدیثِ جبرائیل میں نبی کریم ﷺ نے فرمایا: اسلام ظاہری اعمال (نماز، روزہ وغیرہ) کا نام ہے، جبکہ ایمان دل کے پختہ یقین کا نام ہے!',
            ar: 'سؤال ممتاز يا زيد! في حديث جبريل المشهور: الإسلام هو الأعمال الظاهرة، والإيمان هو الاعتقاد القلبي الراسخ!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Iman is firm belief in the heart in the 6 Articles of Faith.',
            ur: 'ایمان دل کی اس گہری تصدیق کو کہتے ہیں جو 6 بنیادی عقائد پر مبنی ہے۔',
            ar: 'الإيمان هو التصديق الجازم بالقلب بأركان العقيدة الستة.',
          },
        },
        {
          id: 'c3_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What are the 6 Pillars of Iman?',
            ur: 'ایمان کے 6 ارکان کون سے ہیں؟',
            ar: 'ما هي أركان الإيمان الستة؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'c3_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The 6 Pillars of Iman are: 1. Belief in Allah, 2. His Angels, 3. His Revealed Books, 4. His Messengers, 5. The Last Day (Akhirah), and 6. Qadr (Divine Decree - both good and bad comes from Allah\'s wisdom).',
            ur: 'ایمان کے 6 ارکان یہ ہیں: 1۔ اللہ پر ایمان، 2۔ فرشتوں پر ایمان، 3۔ آسمانی کتابوں پر ایمان، 4۔ انبیاء و رسل پر ایمان، 5۔ قیامت کے دن پر ایمان، 6۔ اور اچھی و بری تقدیر پر ایمان۔',
            ar: 'أركان الإيمان الستة: 1. الإيمان بالله، 2. وملائكته، 3. وكتبه، 4. ورسله، 5. واليوم الآخر، 6. والقدر خيره وشره من الله.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'Belief in Qadr means trusting that Allah decrees everything with infinite wisdom.',
            ur: 'تقدیر پر ایمان کا مطلب یہ یقین رکھنا ہے کہ اللہ کا ہر فیصلہ حکمت پر مبنی ہے۔',
            ar: 'الإيمان بالقدر يعني اليقين بتقدير الله لكل شيء بحكمته البالغة.',
          },
        },
      ],
      importantPoints: [
        {
          en: '1st Pillar: Belief in Allah as the Only Worthy God.',
          ur: 'پہلا رکن: اللہ کے معبودِ برحق ہونے پر ایمان۔',
          ar: 'الركن الأول: الإيمان بالله وحده لا شريك له.',
        },
        {
          en: '2nd Pillar: Belief in Angels created from light who obey Allah.',
          ur: 'دوسرا رکن: نور سے بنے فرشتوں پر ایمان۔',
          ar: 'الركن الثاني: الإيمان بالملائكة الكرام.',
        },
        {
          en: '3rd & 4th Pillars: Belief in all divine Books (Quran, Injil, Zabur, Tawrat) and Messengers.',
          ur: 'تیسرا اور چوتھا رکن: تمام الہامی کتابوں اور تمام انبیاء پر ایمان۔',
          ar: 'الركن الثالث والرابع: الإيمان بالكتب السماوية والرسل الكرام.',
        },
        {
          en: '5th & 6th Pillars: Belief in the Day of Judgment and Qadr (Divine Destiny).',
          ur: 'پانچواں اور چھٹا رکن: قیامت کے دن اور تقدیر کے خیر و شر پر ایمان۔',
          ar: 'الركن الخامس والسادس: الإيمان باليوم الآخر والقدر خيره وشره.',
        },
      ],
      quiz: [
        {
          id: 'c3_q1',
          type: 'mcq',
          question: {
            en: 'How many Pillars of Iman (Articles of Faith) are there in Islam?',
            ur: 'اسلام میں ایمان کے کتنے بنیادی ارکان ہیں؟',
            ar: 'كم عدد أركان الإيمان في الإسلام؟',
          },
          explanation: {
            en: 'There are 6 Pillars of Iman as taught by Prophet Muhammad ﷺ in Hadith Jibril.',
            ur: 'حدیثِ جبرائیل کے مطابق ایمان کے 6 ارکان ہیں۔',
            ar: 'أركان الإيمان ستة كما بينها حديث جبريل عليه السلام.',
          },
          options: [
            { id: '1', text: { en: '6 Pillars', ur: '6 ارکان', ar: '6 أركان' }, isCorrect: true },
            { id: '2', text: { en: '5 Pillars', ur: '5 ارکان', ar: '5 أركان' }, isCorrect: false },
            { id: '3', text: { en: '4 Pillars', ur: '4 ارکان', ar: '4 أركان' }, isCorrect: false },
            { id: '4', text: { en: '10 Pillars', ur: '10 ارکان', ar: '10 أركان' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q2',
          type: 'mcq',
          question: {
            en: 'What is the First Pillar of Iman?',
            ur: 'ایمان کا سب سے پہلا اور اہم ترین رکن کون سا ہے؟',
            ar: 'ما هو الركن الأول والأهم من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Allah (Amantu Billahi).',
            ur: 'اللہ تعالیٰ پر ایمان (آمنت باللہ)۔',
            ar: 'الإيمان بالله تعالى.',
          },
          options: [
            { id: '1', text: { en: 'Belief in Allah', ur: 'اللہ تعالیٰ پر ایمان', ar: 'الإيمان بالله' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in wealth', ur: 'دولت پر ایمان', ar: 'الإيمان بالمال' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in stars', ur: 'ستاروں پر ایمان', ar: 'الإيمان بالنجوم' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in magic', ur: 'جادو پر ایمان', ar: 'الإيمان بالسحر' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q3',
          type: 'mcq',
          question: {
            en: 'What is the Second Pillar of Iman?',
            ur: 'ایمان کا دوسرا رکن کون سا ہے؟',
            ar: 'ما هو الركن الثاني من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Allah\'s Angels (Wa Mala\'ikatihi).',
            ur: 'اللہ کے فرشتوں پر ایمان (و ملائکته)۔',
            ar: 'الإيمان بملائكته.',
          },
          options: [
            { id: '1', text: { en: 'Belief in Allah\'s Angels', ur: 'اللہ کے فرشتوں پر ایمان', ar: 'الإيمان بملائكة الله' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in gravity', ur: 'کشِ ثقل پر ایمان', ar: 'الإيمان بالجاذبية' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in money', ur: 'پیسے پر ایمان', ar: 'الإيمان بالنقود' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in solar power', ur: 'شمسی توانائی', ar: 'الإيمان بالطاقة' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q4',
          type: 'mcq',
          question: {
            en: 'What is the Third Pillar of Iman?',
            ur: 'ایمان کا تیسرا رکن کون سا ہے؟',
            ar: 'ما هو الركن الثالث من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Allah\'s Divine Scriptures (Wa Kutubihi).',
            ur: 'اللہ کی نازل کردہ کتابوں پر ایمان (و کتبه)۔',
            ar: 'الإيمان بكتبه السماوية.',
          },
          options: [
            { id: '1', text: { en: 'Belief in Allah\'s Books', ur: 'اللہ کی مقدس کتابوں پر ایمان', ar: 'الإيمان بكتبه السماوية' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in history novels', ur: 'تاریخی ناولز پر ایمان', ar: 'الإيمان بالروايات' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in newspapers', ur: 'اخبارات پر ایمان', ar: 'الإيمان بالصحف' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in poetry', ur: 'شاعری پر ایمان', ar: 'الإيمان بالشعر' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q5',
          type: 'mcq',
          question: {
            en: 'What is the Fourth Pillar of Iman?',
            ur: 'ایمان کا چوتھا رکن کون سا ہے؟',
            ar: 'ما هو الركن الرابع من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Allah\'s Messengers and Prophets (Wa Rusulihi).',
            ur: 'اللہ کے تمام انبیاء و رسل پر ایمان (و رسله)۔',
            ar: 'الإيمان برسل الله وأنبياءه.',
          },
          options: [
            { id: '1', text: { en: 'Belief in Allah\'s Prophets & Messengers', ur: 'اللہ کے تمام انبیاء و رسل پر ایمان', ar: 'الإيمان برسل الله وأنبياءه' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in kings only', ur: 'صرف بادشاہوں پر ایمان', ar: 'الإيمان بالملوك فقط' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in philosophers', ur: 'فلاسفہ پر ایمان', ar: 'الإيمان بالفلاسفة' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in athletes', ur: 'کھلاڑیوں پر ایمان', ar: 'الإيمان بالرياضيين' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q6',
          type: 'mcq',
          question: {
            en: 'What is the Fifth Pillar of Iman?',
            ur: 'ایمان کا پانچواں رکن کون سا ہے؟',
            ar: 'ما هو الركن الخامس من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in the Day of Judgment / Hereafter (Wal Yawmil Akhir).',
            ur: 'قیامت اور آخرت کے دن پر ایمان (و اليوم الآخر)۔',
            ar: 'الإيمان باليوم الآخر.',
          },
          options: [
            { id: '1', text: { en: 'Belief in the Day of Judgment (Akhirah)', ur: 'قیامت اور آخرت کے دن پر ایمان', ar: 'الإيمان باليوم الآخر' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in birthday celebrations', ur: 'سالگرہ کے دن پر ایمان', ar: 'الإيمان بعيد الميلاد' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in winter season', ur: 'موسمِ سرما پر ایمان', ar: 'الإيمان بفصل الشتاء' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in eclipse', ur: 'گرہن پر ایمان', ar: 'الإيمان بالكسوف' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q7',
          type: 'mcq',
          question: {
            en: 'What is the Sixth Pillar of Iman?',
            ur: 'ایمان کا چھٹا رکن کون سا ہے؟',
            ar: 'ما هو الركن السادس من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Qadr - Divine Decree and Destiny (Wal Qadri Khayrihi wa Sharrihi minallahi Ta\'ala).',
            ur: 'تقدیر یعنی ہر نفع و نقصان کا اللہ کے فیصلے سے ہونے پر ایمان۔',
            ar: 'الإيمان بالقدر خيره وشره من الله تعالى.',
          },
          options: [
            { id: '1', text: { en: 'Belief in Qadr (Divine Destiny)', ur: 'تقدیر کے خیر و شر پر ایمان', ar: 'الإيمان بالقدر خيره وشره' }, isCorrect: true },
            { id: '2', text: { en: 'Belief in good luck charms', ur: 'خوش قسمتی کے تعویذ', ar: 'الإيمان بالحظ والتمائم' }, isCorrect: false },
            { id: '3', text: { en: 'Belief in horoscopes', ur: 'علمِ نجوم پر ایمان', ar: 'الإيمان بالأبراج' }, isCorrect: false },
            { id: '4', text: { en: 'Belief in random chaos', ur: 'حادثاتی انتشار پر ایمان', ar: 'الإيمان بالفوضى العشوائية' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q8',
          type: 'true_false',
          question: {
            en: 'Must a Muslim believe in ALL Prophets without rejecting any single one?',
            ur: 'کیا ایک مسلمان کے لیے تمام انبیاء کرام پر بغیر کسی تفریق کے ایمان لانا ضروری ہے؟',
            ar: 'هل يجب على المسلم الإيمان بجميع الأنبياء دون تكذيب أي منهم؟',
          },
          explanation: {
            en: 'Yes! The Quran states: "We make no distinction between any of His messengers."',
            ur: 'جی ہاں! قرآن میں فرمایا: ہم اس کے رسولوں میں سے کسی کے درمیان فرق نہیں کرتے۔',
            ar: 'نعم! قال تعالى: "لا نفرق بين أحد من رسله".',
          },
          options: [
            { id: '1', text: { en: 'True (Must believe in all Prophets)', ur: 'سچ (تمام انبیاء پر ایمان فرض ہے)', ar: 'صحيح (يجب الإيمان بالجميع)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q9',
          type: 'mcq',
          question: {
            en: 'What Famous Hadith contains the full definition of Islam, Iman, and Ihsan?',
            ur: 'کون سی مشہور حدیث مبارکہ میں اسلام، ایمان اور احسان کی مکمل تعریف کی گئی ہے؟',
            ar: 'ما هو الحديث الشريف الشهير الذي يضم تعريف الإسلام والإيمان والإحسان؟',
          },
          explanation: {
            en: 'Hadith Jibril (where Angel Jibril came in human form to teach the companions).',
            ur: 'حدیثِ جبرائیل (جس میں حضرت جبرائیل نے صحابہ کے سامنے سوالات پوچھے)۔',
            ar: 'حديث جبريل عليه السلام المشهور.',
          },
          options: [
            { id: '1', text: { en: 'Hadith Jibril', ur: 'حدیثِ جبرائیل علیہ السلام', ar: 'حديث جبريل عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Hadith of Travel', ur: 'حدیثِ سفر', ar: 'حديث السفر' }, isCorrect: false },
            { id: '3', text: { en: 'Hadith of Market', ur: 'حدیثِ بازار', ar: 'حديث السوق' }, isCorrect: false },
            { id: '4', text: { en: 'Hadith of Rain', ur: 'حدیثِ بارش', ar: 'حديث المطر' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q10',
          type: 'mcq',
          question: {
            en: 'What does "Ihsan" mean as explained by Prophet Muhammad ﷺ?',
            ur: 'نبی کریم ﷺ کے ارشاد کے مطابق "احسان" کا کیا مقام اور مطلب ہے؟',
            ar: 'ما معنى "الإحسان" كما بينه النبي ﷺ؟',
          },
          explanation: {
            en: 'Ihsan means worshipping Allah as if you see Him, and if you do not see Him, knowing that He sees you.',
            ur: 'احسان کا مطلب ہے اللہ کی ایسی عبادت کرنا گویا تو اسے دیکھ رہا ہے، ورنہ یہ یقین رکھنا کہ وہ تجھے دیکھ رہا ہے۔',
            ar: 'الإحسان أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك.',
          },
          options: [
            { id: '1', text: { en: 'Worshipping Allah as if you see Him', ur: 'اللہ کی ایسی عبادت گویا آپ اسے دیکھ رہے ہیں', ar: 'أن تعبد الله كأنك تراه' }, isCorrect: true },
            { id: '2', text: { en: 'Buying expensive clothes', ur: 'مہنگے کپڑے پہننا', ar: 'شراء الملابس الثمينة' }, isCorrect: false },
            { id: '3', text: { en: 'Building big castles', ur: 'بڑے قلعے بنانا', ar: 'بناء القصور' }, isCorrect: false },
            { id: '4', text: { en: 'Talking fast', ur: 'تیز بولنا', ar: 'الكلام السريع' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q11',
          type: 'true_false',
          question: {
            en: 'Does Iman increase through good deeds and decrease through sins?',
            ur: 'کیا نیک اعمال سے ایمان میں اضافہ ہوتا ہے اور گناہوں سے کمی آتی ہے؟',
            ar: 'هل يزيد الإيمان بالطاعات وينقص بالمعاصي؟',
          },
          explanation: {
            en: 'Yes, scholars explain that performing good deeds strengthens Iman in our hearts.',
            ur: 'جی ہاں، نیک اعمال سے ایمان کا نور اور مضبوطی بڑھتی ہے۔',
            ar: 'نعم، الإيمان يزيد بالطاعات وينقص بالمعاصي.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q12',
          type: 'mcq',
          question: {
            en: 'When a Muslim faces a trial or hardship, what should they remember about Qadr?',
            ur: 'جب ایک مسلمان پر کوئی ازمائش آئے تو اسے تقدیر کے بارے میں کیا یاد رکھنا چاہیے؟',
            ar: 'عندما يواجه المسلم بلاءً أو صعوبة، ماذا يتذكر عن القدر؟',
          },
          explanation: {
            en: 'That Allah planned it with wisdom, and patience (Sabr) brings immense reward.',
            ur: 'یہ کہ اللہ کے ہر فیصلے میں حکمت ہے اور صبر کرنے پر عظیم اجر ہے۔',
            ar: 'أن قدر الله فيه حكمة، وأن الصبر عليه أجر عظيم.',
          },
          options: [
            { id: '1', text: { en: 'Allah decreed it with wisdom, so be patient & make Dua', ur: 'اللہ کے فیصلے میں حکمت ہے، پس صبر اور دعا کریں', ar: 'قدر الله فيه حكمة فالصبر والدعاء خيراً' }, isCorrect: true },
            { id: '2', text: { en: 'Complain constantly', ur: 'ہر وقت شکایت کرنا', ar: 'التذمر المستمر' }, isCorrect: false },
            { id: '3', text: { en: 'Blame others unfairly', ur: 'دوسروں پر غلط الزام لگانا', ar: 'لوم الآخرين ظلماً' }, isCorrect: false },
            { id: '4', text: { en: 'Give up entirely', ur: 'مکمل ہمت ہار جانا', ar: 'الاستسلام التام' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q13',
          type: 'mcq',
          question: {
            en: 'What declaration enters a person into the fold of Islam and Iman?',
            ur: 'کون سا مبارک کلمہ انسان کو اسلام اور ایمان کے دائرے میں داخل کرتا ہے؟',
            ar: 'ما هي الكلمة التي يدخل بها الإنسان في الإسلام والإيمان؟',
          },
          explanation: {
            en: 'The Shahadah: "La ilaha illallah, Muhammadur Rasulullah".',
            ur: 'کلمہ شہادت: لا الٰہ الا اللہ محمد رسول اللہ۔',
            ar: 'الشهادتان: لا إله إلا الله محمد رسول الله.',
          },
          options: [
            { id: '1', text: { en: 'Shahadah (Kalimah Tayyibah)', ur: 'کلمہ طیبہ (شہادت)', ar: 'الشهادتان (كلمة التوحيد)' }, isCorrect: true },
            { id: '2', text: { en: 'Pledge of allegiance to king', ur: 'بادشاہ کا حلف', ar: 'يمين الولاء للملك' }, isCorrect: false },
            { id: '3', text: { en: 'School anthem', ur: 'اسکول کا ترانہ', ar: 'نشيد المدرسة' }, isCorrect: false },
            { id: '4', text: { en: 'Medical oath', ur: 'طبی حلف', ar: 'القسم الطبي' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q14',
          type: 'true_false',
          question: {
            en: 'Does true Iman show in how we treat our family, neighbors, and strangers?',
            ur: 'کیا سچے ایمان کا اثر ہمارے گھر والوں، پڑوسیوں اور عام لوگوں کے ساتھ ہمارے اخلاق پر نظر آتا ہے؟',
            ar: 'هل يظهر الإيمان الصادق في أسلوب معاملتنا لأهلنا وجيراننا والناس؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "The most complete believers in faith are those best in character."',
            ur: 'جی ہاں! نبی ﷺ نے فرمایا: مومنوں میں سب سے کامل ایمان والے وہ ہیں جو اخلاق میں سب سے اچھے ہیں۔',
            ar: 'نعم! قال النبي ﷺ: "أكمل المؤمنين إيماناً أحسنهم خُلقاً".',
          },
          options: [
            { id: '1', text: { en: 'True (Good character reflects Iman)', ur: 'سچ (اچھا اخلاق ایمان کا آئینہ ہے)', ar: 'صحيح (حسن الخلق انعكاس للإيمان)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q15',
          type: 'mcq',
          question: {
            en: 'What is the arabic term for "Belief in the Day of Judgment"?',
            ur: 'قیامت اور آخرت کے دن پر ایمان لانے کی عربی اصطلاح کیا ہے؟',
            ar: 'ما المصطلح العربي للإيمان بيوم القيامة؟',
          },
          explanation: {
            en: 'Al-Iman bil-Yawm al-Akhir (Belief in the Last Day).',
            ur: 'الایمان بالیوم الآخر (آخرت کے دن پر ایمان)۔',
            ar: 'الإيمان باليوم الآخر.',
          },
          options: [
            { id: '1', text: { en: 'Al-Iman bil-Yawm al-Akhir', ur: 'الایمان بالیوم الآخر', ar: 'الإيمان باليوم الآخر' }, isCorrect: true },
            { id: '2', text: { en: 'Al-Iman bil-Mali', ur: 'الایمان بالمال', ar: 'الإيمان بالمال' }, isCorrect: false },
            { id: '3', text: { en: 'Al-Iman bit-Tijarah', ur: 'الایمان بالتجارۃ', ar: 'الإيمان بالتجارة' }, isCorrect: false },
            { id: '4', text: { en: 'Al-Iman bil-Lughah', ur: 'الایمان باللغۃ', ar: 'الإيمان باللغة' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q16',
          type: 'mcq',
          question: {
            en: 'What should a believer say when good news or a blessing happens?',
            ur: 'جب کوئی خوشخبری یا نعمت ملے تو مسلمان کو زبان سے کیا کہنا چاہیے؟',
            ar: 'ماذا يقول المؤمن عند حصول نعمة أو خبر سار؟',
          },
          explanation: {
            en: 'Alhamdulillah or MashaAllah (All praise is for Allah / As Allah willed).',
            ur: 'الحمد للہ یا ماشاء اللہ بولنا چاہیے۔',
            ar: 'الحمد لله أو ما شاء الله.',
          },
          options: [
            { id: '1', text: { en: 'Alhamdulillah / MashaAllah', ur: 'الحمد للہ / ماشاء اللہ', ar: 'الحمد لله / ما شاء الله' }, isCorrect: true },
            { id: '2', text: { en: 'Oh no', ur: 'اوہ نہیں', ar: 'يا للأسف' }, isCorrect: false },
            { id: '3', text: { en: 'I am the greatest', ur: 'میں سب سے بڑا ہوں', ar: 'أنا العظيم' }, isCorrect: false },
            { id: '4', text: { en: 'Silence', ur: 'خاموشی', ar: 'الصمت' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q17',
          type: 'true_false',
          question: {
            en: 'Does believing in the Divine Books mean believing that all original scriptures came from Allah?',
            ur: 'کیا آسمانی کتابوں پر ایمان لانے کا مطلب یہ ہے کہ تمام اصل الہامی کتابیں اللہ کی طرف سے نازل ہوئی تھیں؟',
            ar: 'هل الإيمان بالكتب يعني التصديق بأن جميع الكتب السماوية الأصلية من عند الله؟',
          },
          explanation: {
            en: 'Yes, every genuine revealed book originally came from Allah as guidance.',
            ur: 'جی ہاں، اللہ نے ہر دور میں اپنی کتابیں ہدایت بنا کر نازل فرمائیں۔',
            ar: 'نعم، جميع الكتب السماوية في أصلها هدىً ونورٌ من عند الله.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q18',
          type: 'mcq',
          question: {
            en: 'Who taught humanity how to practice Iman and worship Allah correctly?',
            ur: 'انسانوں کو ایمان پر چلنے اور صحیح عبادت کا طریقہ کس نے سکھایا؟',
            ar: 'من علم البشرية كيفية ممارسة الإيمان والعبادة الصحيحة؟',
          },
          explanation: {
            en: 'The noble Prophets and Messengers sent by Allah.',
            ur: 'اللہ کے بھیجے ہوئے پاکیزہ انبیاء کرام نے۔',
            ar: 'أنبياء الله ورسله الكرام.',
          },
          options: [
            { id: '1', text: { en: 'The Prophets and Messengers', ur: 'انبیاء اور رسل علیہم السلام', ar: 'الأنبياء والرسل عليهم السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Selfish politicians', ur: 'سیاستدانوں نے', ar: 'السياسيون الانانيون' }, isCorrect: false },
            { id: '3', text: { en: 'Storywriters', ur: 'کہانی نویسوں نے', ar: 'كُتاب القصص' }, isCorrect: false },
            { id: '4', text: { en: 'Traders', ur: 'تاجروں نے', ar: 'التجار' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q19',
          type: 'mcq',
          question: {
            en: 'What is "Taqwa"?',
            ur: '"تقویٰ" کا کیا مطلب ہے؟',
            ar: 'ما معنى "التقوى"؟',
          },
          explanation: {
            en: 'Taqwa is God-consciousness, awareness of Allah, obeying Him and avoiding His displeasure.',
            ur: 'تقویٰ کا مطلب ہے اللہ کا خوف و محبت دل میں رکھنا، نیکی کرنا اور گناہ سے بچنا۔',
            ar: 'التقوى هي خشية الله ومراقبته وفعل طاعته واجتناب معصيته.',
          },
          options: [
            { id: '1', text: { en: 'God-consciousness and obedience to Allah', ur: 'اللہ کا خوف، محبّت اور اطاعت', ar: 'خشية الله ومراقبته وطاعته' }, isCorrect: true },
            { id: '2', text: { en: 'Fearing people', ur: 'لوگوں کا ڈر', ar: 'الخوف من الناس' }, isCorrect: false },
            { id: '3', text: { en: 'Being wealthy', ur: 'امیر ہونا', ar: 'الثراء' }, isCorrect: false },
            { id: '4', text: { en: 'Fast running', ur: 'تیز دوڑنا', ar: 'الركض السريع' }, isCorrect: false },
          ],
        },
        {
          id: 'c3_q20',
          type: 'true_false',
          question: {
            en: 'Is the Holy Quran preserved by Allah from any changes or errors until the Day of Judgment?',
            ur: 'کیا قرآن مجید کو اللہ نے قیامت تک ہر قسم کی تبدیلی اور تحریف سے محفوظ فرمایا ہے؟',
            ar: 'هل حفظ الله القرآن الكريم من أي تغيير أو تحريف إلى يوم القيامة؟',
          },
          explanation: {
            en: 'Yes! Allah declares in Surah Al-Hijr (15:9): "Indeed, it is We who sent down the Quran and indeed, We will be its guardian."',
            ur: 'جی ہاں! اللہ تعالیٰ نے فرمایا: "بے شک ہم نے اس ذکر (قرآن) کو نازل کیا اور ہم ہی اس کی حفاظت کرنے والے ہیں۔"',
            ar: 'نعم! قال الله تعالى: "إنّا نحن نزّلنا الذكر وإنّا له لحافظون".',
          },
          options: [
            { id: '1', text: { en: 'True (Divinely preserved forever)', ur: 'سچ (ہمیشہ کے لیے محفوظ)', ar: 'صحيح (محفوظ بحفظ الله الأبدي)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

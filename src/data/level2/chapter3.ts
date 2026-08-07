import { Category } from '../../types';

export const chapter3: Category = {
  id: 'lvl2_cat3',
  number: 3,
  title: {
    en: 'Chapter 3: Iman - The 6 Pillars (Intermediate)',
    ur: 'باب 3: ایمان کے 6 ارکان (درمیانی سطح)',
    ar: 'الفصل 3: أركان الإيمان الستة (المستوى المتوسط)',
  },
  description: {
    en: 'Explore the 6 Pillars of Iman in detail: Belief in Allah, His Angels, Revealed Books, Messengers, the Last Day, and Divine Decree (Qadr).',
    ur: 'ایمان کے 6 ارکان کی گہری تفہیم: اللہ، فرشتوں، آسمانی کتابوں، رسولوں، قیامت کے دن اور تقدیر پر ایمان۔',
    ar: 'دراسة أركان الإيمان الستة بتفصيل متوسط: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.',
  },
  iconName: 'ShieldCheck',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat3_les1',
      title: {
        en: 'Deepening Faith in the 6 Pillars of Iman',
        ur: 'ایمان کے چھ بنیادی ارکان میں پختگی',
        ar: 'الترسيخ في أركان الإيمان الستة',
      },
      summary: {
        en: 'The Prophet Muhammad ﷺ defined Iman in Hadith Jibreel as believing in Allah, His Angels, His Books, His Messengers, the Last Day, and Qadr (Divine Decree - both good and bad).',
        ur: 'حدیثِ جبرائیل میں نبی کریم ﷺ نے ایمان کی تعریف بیان فرمائی: اللہ، اس کے فرشتوں، کتابوں، رسولوں، آخرت کے دن اور تقدیرِ الٰہی پر پختہ ایمان رکھنا۔',
        ar: 'بين النبي ﷺ الإيمان في حديث جبريل المشهور: أن تؤمن بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، وتؤمن بالقدر خيره وشره.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c3_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq! In Hadith Jibreel, Angel Jibril asked about Iman. What are the 6 Pillars of Iman that every Muslim must firm inside their heart?',
            ur: 'شیخ طارق! حدیثِ جبرائیل میں حضرت جبرائیل نے ایمان کے بارے میں پوچھا۔ وہ کون سے 6 ارکان ہیں جن پر ہر مسلمان کا کامل یقین ہونا ضروری ہے؟',
            ar: 'يا شيخ طارق! في حديث جبريل، سأل الملك جبريل عن الإيمان. ما هي أركان الإيمان الستة التي يجب أن يستقر عليها قلب كل مسلم؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'l2_c3_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The 6 Pillars are: 1) Belief in Allah, 2) His Angels, 3) His Scriptures, 4) His Messengers, 5) The Day of Judgment, and 6) Al-Qadr (Allah\'s divine decree and measure).',
            ur: 'ایمان کے 6 ارکان یہ ہیں: 1) اللہ پر ایمان، 2) اس کے فرشتوں پر، 3) اس کی نازل کردہ کتابوں پر، 4) اس کے انبیاء پر، 5) قیامت کے دن پر، اور 6) اچھی اور بری تقدیر پر۔',
            ar: 'أركان الإيمان الستة هي: 1) الإيمان بالله، 2) وملائكته، 3) وكتبه، 4) ورسله، 5) واليوم الآخر، 6) والقدر خيره وشره.',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'All 6 Pillars of Iman form a single unified light; denying even one pillar breaks the perfection of Iman.',
            ur: 'ایمان کے تمام 6 ارکان ایک ہی نور ہیں؛ ان میں سے کسی ایک کا بھی انکار ایمان کی کامل حالت کو ختم کر دیتا ہے۔',
            ar: 'أركان الإيمان مترابطة كالجسد الواحد، ولا يصح الإيمان إلا بالاعتقاد بها جميعاً.',
          },
        },
        {
          id: 'l2_c3_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'How does belief in Qadr (Divine Decree) bring peace to a Muslim\'s heart when facing unexpected challenges?',
            ur: 'تقدیر (قدر) پر ایمان لانا کسی بھی مشکل یا ناگہانی حالت میں مسلمان کے دل کو کیسے سکون بخشتا ہے؟',
            ar: 'كيف يمنح الإيمان بالقدر الطمأنينة لقلب المسلم عند مواجهة التحديات المفاجئة؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'l2_c3_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'When we know that Allah knew everything before creating the world and that nothing happens without His wisdom, we do not despair over loss nor boast over gain! We pray, strive our best, and trust Allah.',
            ur: 'جب ہم یہ جانتے ہیں کہ اللہ کے علم میں ہر چیز پہلے سے ہے اور کوئی واقعہ اس کی حکمت کے بغیر نہیں ہوتا، تو ہم نقصان پر مایوس نہیں ہوتے اور نہ کامیابی پر غرور کرتے ہیں! ہم کوشش کرتے ہیں اور اللہ پر توکل کرتے ہیں۔',
            ar: 'عندما نعلم أن الله علِم كل شيء وحفظه بحكمته، لا نأسى على ما فاتنا ولا نفرح بما أوتينا فرح كبر! نعمل الأسباب ونتوكل على الله.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Belief in Qadr brings tranquility: a believer strives actively with patience (Sabr) and gratitude (Shukr).',
            ur: 'تقدیر پر ایمان دل کو سکون دیتا ہے: مومن محنت کرتا ہے، مصیبت میں صبر اور نعمت پر شکر ادا کرتا ہے۔',
            ar: 'الإيمان بالقدر يورث الرضا والسكينة: يصبر عند البلاء ويشكر عند النعماء.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Iman increases through good deeds, dhikr, Quran reading, and decreases through neglect and sin.',
          ur: 'ایمان نیک اعمال، ذکر، تلاوتِ قرآن سے بڑھتا ہے اور غفلت و گناہ سے کمزور ہوتا ہے۔',
          ar: 'الإيمان يزيد بطاعة الله والذكر وتلاوة القرآن، وينقص بالمعصية والغفلة.',
        },
        {
          en: 'All divine books originally came from Allah to guide nations to pure Tawheed.',
          ur: 'تمام آسمانی کتابیں اصل میں اللہ ہی کی طرف سے توحید کی ہدایت کے لیے نازل ہوئی تھیں۔',
          ar: 'جميع الكتب السماوية نزلت أساساً للهداية والتوحيد.',
        },
        {
          en: 'Qadr means Allah knows all things, wrote them down in Al-Lauh Al-Mahfuz, wills them, and creates them.',
          ur: 'تقدیر کا مطلب ہے کہ اللہ ہر چیز کا علم رکھتا ہے، لوحِ محفوظ میں لکھ رکھا ہے، اس کی مشیت اور تخلیق شامل ہے۔',
          ar: 'مراتب القدر أربع: علم الله، وكتابته في اللوح المحفوظ، ومشيئته، وخلقه للأشياء.',
        },
      ],
      quiz: [
        {
          id: 'l2_q3_1',
          type: 'mcq',
          question: {
            en: 'How many Pillars of Iman are listed in the authentic Sunnah (Hadith Jibreel)?',
            ur: 'حدیثِ جبرائیل میں ایمان کے کتنے ارکان بیان کیے گئے ہیں؟',
            ar: 'كم عدد أركان الإيمان كما جاء في الحديث الصحيح (حديث جبريل)؟',
          },
          explanation: {
            en: 'There are exactly 6 Pillars of Iman.',
            ur: 'ایمان کے بالکل 6 بنیادی ارکان ہیں۔',
            ar: 'أركان الإيمان ستة أركان.',
          },
          options: [
            { id: 'opt1', text: { en: '5 Pillars', ur: '5 ارکان', ar: '5 أركان' }, isCorrect: false },
            { id: 'opt2', text: { en: '6 Pillars', ur: '6 ارکان', ar: '6 أركان' }, isCorrect: true },
            { id: 'opt3', text: { en: '7 Pillars', ur: '7 ارکان', ar: '7 أركان' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_2',
          type: 'true_false',
          question: {
            en: 'Belief in Qadr means believing that Allah knows, wrote, willed, and created all things.',
            ur: 'تقدیر پر ایمان کا مطلب یہ ہے کہ اللہ نے ہر چیز کا علم رکھا، لکھا، ارادہ فرمایا اور پیدا کیا۔',
            ar: 'الإيمان بالقدر يعني الاعتقاد بأن الله علم وكتب وشاء وخلق كل شيء.',
          },
          explanation: {
            en: 'True! These are the four levels of Qadr (Al-Ilm, Al-Kitabah, Al-Mashi\'ah, Al-Khalq).',
            ur: 'سچ! یہ تقدیر کے چار درجات (علم، کتابت، مشیت، اور خلق) ہیں۔',
            ar: 'صحيح! هذه مراتب القدر الأربع.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_3',
          type: 'mcq',
          question: {
            en: 'Which of the following is the 3rd Pillar of Iman?',
            ur: 'مندرجہ ذیل میں سے ایمان کا تیسرا رکن کون سا ہے؟',
            ar: 'أي مما يلي هو الركن الثالث من أركان الإيمان؟',
          },
          explanation: {
            en: 'Belief in Allah\'s Revealed Books (Kutub) is the 3rd pillar.',
            ur: 'اللہ تعالی کی نازل کردہ کتابوں پر ایمان رکھنا تیسرا رکن ہے۔',
            ar: 'الإيمان بالكتب السماوية المنزلة هو الركن الثالث.',
          },
          options: [
            { id: 'opt1', text: { en: 'Belief in Revealed Books', ur: 'آسمانی کتابوں پر ایمان', ar: 'الإيمان بالكتب المنزلة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Belief in wealth', ur: 'مال پر ایمان', ar: 'الإيمان بالمال' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Belief in angels only', ur: 'صرف فرشتوں پر ایمان', ar: 'الإيمان بالملائكة فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_4',
          type: 'mcq',
          question: {
            en: 'What happens to a person\'s Iman when they consistently perform good deeds and remember Allah?',
            ur: 'جب انسان مسلسل نیک اعمال کرتا ہے اور اللہ کا ذکر کرتا ہے تو اس کے ایمان میں کیا تبدیلی آتی ہے؟',
            ar: 'ماذا يحدث لإيمان العبد عندما يداوم على الطاعات وذكر الله؟',
          },
          explanation: {
            en: 'Iman increases and becomes stronger through obedience and good deeds.',
            ur: 'اطاعت اور نیک اعمال کے ذریعے ایمان میں اضافہ اور پختگی آتی ہے۔',
            ar: 'يزيد الإيمان ويقوى بالطاعات والأعمال الصالحة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Iman increases and strengthens', ur: 'ایمان بڑھتا اور مضبوط ہوتا ہے', ar: 'يزيد الإيمان ويقوى' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Iman decreases', ur: 'ایمان گھٹ جاتا ہے', ar: 'ينقص الإيمان' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Nothing changes at all', ur: 'کوئی تبدیلی نہیں آتی', ar: 'لا يتغير شيء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_5',
          type: 'true_false',
          question: {
            en: 'Can a person be considered a complete believer if they reject belief in the Day of Judgment?',
            ur: 'کیا کوئی شخص کامل مومن ہو سکتا ہے اگر وہ قیامت کے دن کا انکار کرے؟',
            ar: 'هل يعتبر الشخص مؤمناً كاملاً إذا أنكر البعث واليوم الآخر؟',
          },
          explanation: {
            en: 'No, belief in the Day of Judgment (Yawm al-Qiyamah) is an essential pillar of Iman.',
            ur: 'ہرگز نہیں، قیامت کے دن پر ایمان لانا ایمان کا بنیادی رکن ہے۔',
            ar: 'لا، فالإيمان باليوم الآخر ركن أساسي من أركان الإيمان.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Belief in Akhirah is required)', ur: 'جھوٹ (آخرت پر ایمان شرط ہے)', ar: 'خطأ (الإيمان باليوم الآخر ركن واجب)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q3_6',
          type: 'mcq',
          question: {
            en: 'Which pillar of Iman teaches us that Allah sent human messengers to guide every community?',
            ur: 'ایمان کا کون سا رکن ہمیں یہ سکھاتا ہے کہ اللہ نے ہر قوم کی ہدایت کے لیے انسانوں میں سے رسول بھیجے؟',
            ar: 'أي ركن من أركان الإيمان يعلمنا أن الله أرسل رسلاً من البشر لهداية كل أمة؟',
          },
          explanation: {
            en: 'Belief in Allah\'s Messengers (Rusul).',
            ur: 'اللہ تعالیٰ کے رسولوں (انبیاء) پر ایمان رکھنا۔',
            ar: 'الإيمان بالرسل عليهم السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Belief in the Messengers (Rusul)', ur: 'رسولوں (انبیاء) پر ایمان', ar: 'الإيمان بالرسل' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Belief in Qadr only', ur: 'صرف تقدیر پر ایمان', ar: 'الإيمان بالقدر فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Belief in outer space', ur: 'خلائی سائنس پر ایمان', ar: 'الإيمان بالفضاء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_7',
          type: 'mcq',
          question: {
            en: 'Where is Allah\'s complete pre-recorded decree written?',
            ur: 'اللہ تعالیٰ کی لکھی ہوئی تمام کائناتی تقدیر کہاں محفوظ ہے؟',
            ar: 'أين دُونت مقادير الخلائق المكتوبة قبل خلق السماوات والأرض؟',
          },
          explanation: {
            en: 'In Al-Lauh Al-Mahfuz (The Preserved Tablet).',
            ur: 'لوحِ محفوظ میں۔',
            ar: 'في اللوح المحفوظ.',
          },
          options: [
            { id: 'opt1', text: { en: 'In Al-Lauh Al-Mahfuz (The Preserved Tablet)', ur: 'لوحِ محفوظ میں', ar: 'في اللوح المحفوظ' }, isCorrect: true },
            { id: 'opt2', text: { en: 'In human history books', ur: 'انسانی تاریخ کی کتابوں میں', ar: 'في كتب التاريخ الإنساني' }, isCorrect: false },
            { id: 'opt3', text: { en: 'It is nowhere written', ur: 'کہیں نہیں لکھی ہوئی', ar: 'ليست مكتوبة في مكان' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_8',
          type: 'true_false',
          question: {
            en: 'Does belief in Qadr mean a human should stop trying and sitting idle without making effort?',
            ur: 'کیا تقدیر پر ایمان کا مطلب یہ ہے کہ انسان محنت اور کوشش کرنا چھوڑ کر بے کار بیٹھ جائے؟',
            ar: 'هل يعني الإيمان بالقدر ترك العمل والاتكال والجلوس دون أخذ بالأسباب؟',
          },
          explanation: {
            en: 'No! The Prophet ﷺ commanded: "Strive for what benefits you, seek help from Allah, and do not feel helpless." (Ibris ala ma yanfa\'uk).',
            ur: 'ہرگز نہیں! نبی کریم ﷺ نے فرمایا: اپنے فائدے کے لیے کوشش کرو، اللہ سے مدد مانگو اور عاجز نہ بنو۔',
            ar: 'لا! قال ﷺ: "احرص على ما ينفعك واستعن بالله ولا تعجز".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (We must work hard and put trust in Allah)', ur: 'جھوٹ (ہمیں محنت کے ساتھ اللہ پر توکل کرنا چاہیے)', ar: 'خطأ (يجب العمل والأخذ بالأسباب مع التوكل)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q3_9',
          type: 'mcq',
          question: {
            en: 'What are the two complementary emotional states of a true believer in all conditions?',
            ur: 'ہر حال میں ایک سچے مومن کی دو باہمی مکمل کیفیات کون سی ہوتی ہیں؟',
            ar: 'ما هما الحالتان الإيمانيتان المتكاملتان للمسلم في كل أحواله؟',
          },
          explanation: {
            en: 'Gratitude (Shukr) in ease and success, and Patience (Sabr) in hardship and trial.',
            ur: 'نعمت و آسانی میں شکر، اور آزمائش و تنگی میں صبر۔',
            ar: 'الشكر عند النعماء والرخاء، والصبر عند البلاء والشدة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Shukr (Gratitude) and Sabr (Patience)', ur: 'شکر اور صبر', ar: 'الشكر والصبر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Anger and Pride', ur: 'غصہ اور غرور', ar: 'الغضب والكبر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Greed and Envy', ur: 'لالچ اور حسد', ar: 'الطمع والحسد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Tariq prepared well for an exam, but didn\'t get top mark. What is the most faithful attitude?',
            ur: 'منظرنامہ: طارق نے امتحان کے لیے بھرپور محنت کی، لیکن پہلا نمبر نہ آ سکا۔ ایمان کے تقاضے کے مطابق اسے کیا رویہ اختیار کرنا چاہیے؟',
            ar: 'سيناريو: استعد طارق جيداً للاختبار، لكنه لم يحصل على الدرجة الأولى. ما هو الموقف الأكثر إيماناً؟',
          },
          explanation: {
            en: 'He says "Qadarullah wa ma sha\'a fa\'al" (Allah decreed and what He willed occurred), remains patient, and learns for next time.',
            ur: 'وہ کہے "قدر اللہ و ما شاء فعل" (اللہ کی یہی تقدیر تھی اور اس نے جو چاہا کیا)، صبر کرے اور آئندہ مزید بہتری کی کوشش کرے۔',
            ar: 'يقول "قدر الله وما شاء فعل"، ويصبر ويسعى للتحسين مستقبلاً.',
          },
          options: [
            { id: 'opt1', text: { en: 'Accept Allah\'s decree gracefully and keep striving', ur: 'اللہ کی تقدیر پر راضی رہے اور کوشش جاری رکھے', ar: 'الرضا بقدر الله والاستمرار في السعي' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Tear up books in anger', ur: 'غصے میں کتابیں پھاڑ دے', ar: 'تمزيق الكتب غضباً' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Stop going to school', ur: 'اسکول جانا چھوڑ دے', ar: 'ترك المدرسة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_11',
          type: 'true_false',
          question: {
            en: 'Belief in Angels means recognizing that they are noble servants who never disobey Allah.',
            ur: 'فرشتوں پر ایمان کا مطلب یہ ماننا ہے کہ وہ اللہ کے معزز بندے ہیں جو کبھی نافرمانی نہیں کرتے۔',
            ar: 'الإيمان بالملائكة يعني الاعتقاد بأنهم عباد مكرمون لا يعصون الله ما أمرهم.',
          },
          explanation: {
            en: 'True! Surah At-Tahrim describes angels as: "They do not disobey Allah in what He commands them and do what they are commanded."',
            ur: 'سچ! قرآن مجید میں ہے کہ فرشتے اللہ کے احکامات کی نافرمانی نہیں کرتے اور وہی کرتے ہیں جو حکم دیا جائے۔',
            ar: 'صحيح! قال تعالى: "لا يعصون الله ما أمرهم ويفعلون ما يؤمرون".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_12',
          type: 'mcq',
          question: {
            en: 'Which of the following is NOT one of the 6 Pillars of Iman?',
            ur: 'مندرجہ ذیل میں سے کون سا عنصر ایمان کے 6 ارکان میں شامل نہیں ہے؟',
            ar: 'أي مما يلي ليس من أركان الإيمان الستة؟',
          },
          explanation: {
            en: 'Wealth/Accumulating money is not a pillar of Iman; belief in Books, Angels, Prophets, Allah, Last Day, Qadr are the 6 pillars.',
            ur: 'مال جمع کرنا ایمان کا رکن نہیں ہے؛ جبکہ اللہ، فرشتے، کتابیں، رسول، آخرت اور تقدیر ارکان ہیں۔',
            ar: 'جمع المال ليس ركناً من أركان الإيمان.',
          },
          options: [
            { id: 'opt1', text: { en: 'Accumulating worldly wealth', ur: 'دنیاوی مال و دولت جمع کرنا', ar: 'جمع الأموال الدنيوية' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Belief in Angels', ur: 'فرشتوں پر ایمان', ar: 'الإيمان بالملائكة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Belief in Qadr', ur: 'تقدیر پر ایمان', ar: 'الإيمان بالقدر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_13',
          type: 'mcq',
          question: {
            en: 'Why did Allah send Divine Books to human prophets?',
            ur: 'اللہ تعالیٰ نے اپنے انسانی انبیاء پر آسمانی کتابیں کیوں نازل فرمائیں؟',
            ar: 'لماذا أنزل الله الكتب السماوية على الأنبياء من البشر؟',
          },
          explanation: {
            en: 'To provide clear light, guidance, laws, and truth for humanity to live rightly.',
            ur: 'انسانوں کے لیے روشن ہدایت، قوانین اور سچائی فراہم کرنے کے لیے۔',
            ar: 'لتوفير النور والهداية والأحكام والحق للبشرية.',
          },
          options: [
            { id: 'opt1', text: { en: 'To guide humans toward truth and light', ur: 'انسانوں کو سچائی اور نور کی ہدایت دینے کے لیے', ar: 'لهداية الناس إلى الحق والنور' }, isCorrect: true },
            { id: 'opt2', text: { en: 'For entertainment only', ur: 'صرف تفریح کے لیے', ar: 'للتسلية فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'To keep secrets hidden forever', ur: 'رازوں کو ہمیشہ کے لیے چھپانے کے لیے', ar: 'لإخفاء الأسرار للأبد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_14',
          type: 'true_false',
          question: {
            en: 'Do Muslims believe in all prophets of Allah without discriminating or insulting any prophet?',
            ur: 'کیا مسلمان تمام انبیاء کرام پر بغیر کسی تفریق یا توہین کے ایمان رکھتے ہیں؟',
            ar: 'هل يؤمن المسلمون بجميع أنبياء الله دون تفريق أو إساءة لأحدهم؟',
          },
          explanation: {
            en: 'Yes! The Quran states: "La nufarriqu bayna ahadim mir-rusulih" (We make no distinction between any of His messengers).',
            ur: 'جی ہاں! قرآن پاک فرماتا ہے: ہم اللہ کے رسولوں میں سے کسی کے درمیان تفریق نہیں کرتے۔',
            ar: 'نعم! قال تعالى: "لا نفرق بين أحد من رسله".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_15',
          type: 'mcq',
          question: {
            en: 'What is the term for the core inner conviction of the heart in Islam?',
            ur: 'اسلام میں دل کے پختہ اور سچے یقین کو کیا کہتے ہیں؟',
            ar: 'ما المصطلح الدال على التصديق اليقيني بالقلب في الإسلام؟',
          },
          explanation: {
            en: 'Iman (Faith rooted in the heart).',
            ur: 'ایمان (دل کا پختہ یقین)۔',
            ar: 'الإيمان (التصديق الراسخ بالقلب).',
          },
          options: [
            { id: 'opt1', text: { en: 'Iman', ur: 'ایمان', ar: 'الإيمان' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Sihr', ur: 'سحر', ar: 'السحر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Khasarah', ur: 'خسارہ', ar: 'الخسارة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_16',
          type: 'mcq',
          question: {
            en: 'What does believing in the "Last Day" (Yawm al-Akhir) remind every human being about?',
            ur: 'آخرت کے دن پر ایمان انسان کو کس بات کی یاد دہانی کرواتا ہے؟',
            ar: 'بماذا يذكر الإيمان باليوم الآخر كل إنسان؟',
          },
          explanation: {
            en: 'That this worldly life is temporary and we will be held accountable for our actions before Allah.',
            ur: 'یہ کہ دنیا کی زندگی عارضی ہے اور ہمارے ہر عمل کا اللہ کے سامنے حساب ہوگا-۔',
            ar: 'بأن الحياة الدنيا مؤقتة وأننا محاسبون أمام الله على أعمالنا.',
          },
          options: [
            { id: 'opt1', text: { en: 'Accountability for all our deeds before Allah', ur: 'اللہ کے سامنے تمام اعمال کی جوابدہی', ar: 'المحاسبة على أعمالنا أمام الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'That worldly life lasts forever', ur: 'کہ دنیاوی زندگی ہمیشہ رہے گی', ar: 'أن الدنيا دائمية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'That deeds have no consequences', ur: 'کہ اعمال کا کوئی نتیجہ نہیں نکلتا', ar: 'أن الأعمال بلا نتائج' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_17',
          type: 'true_false',
          question: {
            en: 'Does a Muslim\'s Iman stay identical at all times, or does it rise and fall depending on spiritual state?',
            ur: 'کیا مسلمان کا ایمان ہمیشہ ایک جیسا رہتا ہے یا اطاعت و گناہ کے ساتھ گھٹتا بڑھتا ہے؟',
            ar: 'هل يظل إيمان المسلم ثابتاً لا يتغير أم يزيد بالطاعة وينقص بالمعصية؟',
          },
          explanation: {
            en: 'According to Ahl us-Sunnah, Iman increases with obedience to Allah and decreases with sins.',
            ur: 'اہل سنت کے مطابق ایمان اطاعت سے بڑھتا ہے اور گناہوں سے کم ہوتا ہے۔',
            ar: 'الإيمان يزيد بالطاعة وينقص بالمعصية.',
          },
          options: [
            { id: 'opt1', text: { en: 'Iman increases with obedience & decreases with sin', ur: 'ایمان اطاعت سے بڑھتا اور گناہ سے کم ہوتا ہے', ar: 'الإيمان يزيد بالطاعة وينقص بالمعصية' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Iman never changes under any condition', ur: 'ایمان میں کبھی کوئی تبدیلی نہیں آتی', ar: 'الإيمان لا يتغير أبداً' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_18',
          type: 'mcq',
          question: {
            en: 'Which noble Angel brought down the Holy Quran to Prophet Muhammad ﷺ?',
            ur: 'نبی کریم ﷺ کے پاس مقدس قرآن پاک لانے والے معزز فرشتے کون سے ہیں؟',
            ar: 'من هو الملك الكريم الذي نزل بالقرآن على النبي محمد ﷺ؟',
          },
          explanation: {
            en: 'Angel Jibreel (AS) (Gabriel).',
            ur: 'حضرت جبرائیل علیہ السلام۔',
            ar: 'جبريل عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Angel Mikaeel (AS)', ur: 'حضرت میکائیل علیہ السلام', ar: 'ميكائيل عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Angel Israfeel (AS)', ur: 'حضرت اسرافیل علیہ السلام', ar: 'إسرافيل عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_19',
          type: 'mcq',
          question: {
            en: 'How should a believer react when blessed with a great gift or accomplishment?',
            ur: 'جب کسی مومن کو کوئی بڑی نعمت یا کامیابی حاصل ہو تو اسے کیا ردعمل دینا چاہیے؟',
            ar: 'كيف يتصرف المؤمن عندما يُرزق بنعمة أو إنجاز كبير؟',
          },
          explanation: {
            en: 'Say "Alhamdulillah", remain humble, and attribute the success to Allah\'s favor.',
            ur: '"الحمد للہ" کہے، عاجزی اختیار کرے اور کامیابی کو اللہ کا فضل سمجھے۔',
            ar: 'يحمد الله (الحمد لله) ويتواضع ويعزو الفضل لله.',
          },
          options: [
            { id: 'opt1', text: { en: 'Praise Allah (Alhamdulillah) and stay humble', ur: 'اللہ کی حمد (الحمد للہ) کرے اور عاجز رہے', ar: 'حمد الله والتواضع له' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Boast arrogant words to look superior', ur: 'غرور کے بول بولے', ar: 'التكبر والتفاخر على الناس' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Forget Allah entirely', ur: 'اللہ کو بالکل بھول جائے', ar: 'نسيان فضل الله' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q3_20',
          type: 'mcq',
          question: {
            en: 'What is the ultimate reward promised for those who maintain true Iman and Amal Saliha?',
            ur: 'سچا ایمان اور عملِ صالح اختیار کرنے والوں کے لیے کس عظیم انعام کا وعدہ فرمایا گیا ہے؟',
            ar: 'ما هو الأجر العظيم الموعود لمن حقق الإيمان والعمل الصالح؟',
          },
          explanation: {
            en: 'Allah\'s Eternal Pleasure (Ridwanullah) and everlasting Jannah in the Hereafter.',
            ur: 'اللہ کی دائمی رضا اور آخرت کی ہمیشگی والی جنت۔',
            ar: 'رضوان الله الأبدي وجنات النعيم الخالدة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Allah\'s Pleasure and eternal Jannah', ur: 'اللہ تعالیٰ کی رضا اور ابدی جنت', ar: 'رضا الله وجنات النعيم' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Temporary gold coins only', ur: 'صرف چند عارضی سکے', ar: 'عملات ذهبية مؤقتة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'No reward at all', ur: 'کوئی انعام نہیں', ar: 'لا يوجد أجر' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

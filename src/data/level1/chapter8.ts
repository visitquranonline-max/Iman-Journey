import { Category } from '../../types';

export const chapter8: Category = {
  id: 'lvl1_cat8',
  number: 8,
  title: {
    en: 'Chapter 8: Jannah and Jahannam',
    ur: 'باب 8: جنت اور جہنم کا بیان',
    ar: 'الفصل 8: الجنة والنار',
  },
  description: {
    en: 'Explore the eternal rewards of Jannah (Paradise) prepared for righteous believers, and the warning of Jahannam (Hellfire).',
    ur: 'اہلِ ایمان کے لیے تیار کردہ جنت الفردوس کی نعمتوں اور جہنم کی وعید کے بارے میں حکمت کے ساتھ تعلیم حاصل کریں۔',
    ar: 'تعلم عن نعيم الجنة الخالد المعد للمتقين، والتحذير من نار جهنم والحث على العمل الصالح.',
  },
  iconName: 'Sparkles',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat8_les1',
      title: {
        en: 'The Abode of Eternal Peace & The Warning',
        ur: 'دارِ السلام اور ڈرانے کا ذکر',
        ar: 'دار السلام والتحذير الإلهي',
      },
      summary: {
        en: 'Jannah is the home of ultimate joy, beauty, and peace prepared by Allah for those who believe and do righteous deeds.',
        ur: 'جنت سلامتی، مسرت اور نعمتوں کا وہ ابدی گھر ہے جسے اللہ نے اپنے ایمان دار اور نیک بندوں کے لیے بنایا ہے۔',
        ar: 'الجنة هي دار السلام والنعيم المقيم التي أعدها الله للذين آمنوا وعملوا الصالحات.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c8_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, can you describe what Jannah is like for those who enter it?',
            ur: 'شیخ طارق، کیا آپ بتا سکتے ہیں کہ جنت کیسی ہے اور وہاں کیا کیا نعمتیں ہوں گی؟',
            ar: 'يا شيخ طارق، هل لك أن تصف لنا الجنة وما أعده الله للمؤمنين فيها؟',
          },
          sceneIllustration: 'Sparkles',
        },
        {
          id: 'c8_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'SubhanAllah Maryam! Prophet Muhammad ﷺ said Jannah has rewards that "no eye has ever seen, no ear has ever heard, and no human mind has ever conceived!" Rivers of milk and honey flow, palaces of gold, and no sickness, sadness, or aging exists there!',
            ur: 'سبحان اللہ مریم! نبی کریم ﷺ نے فرمایا: جنت میں ایسی نعمتیں ہیں جنہیں نہ کسی آنکھ نے دیکھا، نہ کسی کان نے سنا اور نہ انسان کے دل میں ان کا خیال گزرا! وہاں نہ کوئی بیماری ہوگی، نہ دکھ اور نہ بڑھاپا۔',
            ar: 'سبحان الله يا مريم! قال النبي ﷺ في الجنة: "ما لا عين رأت، ولا أذن سمعت، ولا خطر على قلب بشر!" فيها أنهار ومساكن طيبة ولا مرض ولا حزن ولا هرم.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Jannah contains eternal delight, complete health, youth, and peace.',
            ur: 'جنت میں دائمی خوشی، کامل صحت، جوانی اور سلامتی کا ماحول ہوگا۔',
            ar: 'الجنة فيها النعيم المقيم والشباب الدائم والسلام الأبدي.',
          },
        },
        {
          id: 'c8_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What is the greatest blessing in Jannah above all rivers and palaces?',
            ur: 'تمام باغات، محلوں اور نہروں سے بڑھ کر جنت کی سب سے بڑی اور افضل ترین نعمت کیا ہوگی؟',
            ar: 'ما هي أعظم نعمة في الجنة فوق كل الأنهار والقصور؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'c8_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The highest, most breathtaking blessing in Jannah is getting to see Allah Ta\'ala Himself! When the veil is removed, looking at Allah\'s Majestic Countenance will bring the greatest joy conceivable.',
            ur: 'جنت کی سب سے بڑی نعمت اللہ تعالیٰ کا دیدارِ مبارک ہے! جب حجاب اٹھے گا تو اللہ کو دیکھنا تمام نعمتوں سے بڑھ کر خوشی کا باعث بنے گا۔',
            ar: 'أعظم نعمة في الجنة هي رؤية وجه الله الكريم! قال تعالى: "وجوه يومئذ ناضرة إلى ربها ناظرة".',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Seeing Allah\'s Glorious Countenance is the supreme reward of Jannah.',
            ur: 'اللہ تعالیٰ کا دیدار جنت کی تمام نعمتوں سے افضل ترین انعام ہے۔',
            ar: 'النظر إلى وجه الله الكريم هو أعلى نعم أهل الجنة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Jannah has 8 gates, including Ar-Rayyan dedicated for those who fast.',
          ur: 'جنت کے 8 دروازے ہیں، جن میں سے باب الرّیان روزے داروں کے لیے مخصوص ہے۔',
          ar: 'للجنة ثمانية أبواب، منها باب الريان المخصص للصائمين.',
        },
        {
          en: 'Jannat al-Firdaus is the highest peak of Jannah directly beneath Allah\'s Throne.',
          ur: 'جنت الفردوس جنت کا اعلیٰ ترین درجہ ہے جو عرشِ الٰہی کے عین نیچے ہے۔',
          ar: 'جنات الفردوس هي أعلى درجات الجنة وتحت عرش الرحمن مباشرة.',
        },
        {
          en: 'Jahannam is Allah\'s place of punishment for unrepentant disbelievers and tyrants.',
          ur: 'جہنم سرکش، ظالم اور بغیر توبہ مرنے والے کافروں کے لیے سزاہ گاہ ہے۔',
          ar: 'جهنم دار العقاب المخصصة للظالمين والمعاندين الذين لم يتوبوا.',
        },
        {
          en: 'Fearing Jahannam and longing for Jannah motivates a Muslim to pray, give charity, and stay honest.',
          ur: 'جنت کی شوق اور جہنم کا ڈر انسان کو نیک اعمال اور سچائی کی ترغیب دیتا ہے۔',
          ar: 'الخوف من النار والرجاء في الجنة يدفعان المسلم للتقوى والعمل الصالح.',
        },
      ],
      quiz: [
        {
          id: 'c8_q1',
          type: 'mcq',
          question: {
            en: 'What is "Jannah"?',
            ur: '"جنت" کا کیا مطلب ہے اور یہ کیا ہے؟',
            ar: 'ما هي "الجنة"؟',
          },
          explanation: {
            en: 'Jannah is Paradise — the eternal abode of peace and bliss created by Allah for believers.',
            ur: 'جنت اہل ایمان کے لیے تیار کردہ دائمی سلامتی اور نعمتوں کا گھر ہے۔',
            ar: 'الجنة هي دار النعيم الأبدي التي أعدها الله للمؤمنين.',
          },
          options: [
            { id: '1', text: { en: 'Paradise — eternal abode of bliss for believers', ur: 'جنت — مومنوں کے لیے ابدی نعمتوں کا گھر', ar: 'الجنة — دار النعيم الخالد للمؤمنين' }, isCorrect: true },
            { id: '2', text: { en: 'A hotel in Dunya', ur: 'دنیا کا ایک ہوٹل', ar: 'فندق في الدنيا' }, isCorrect: false },
            { id: '3', text: { en: 'A temporary forest', ur: 'عارضی جنگل', ar: 'غابة مؤقتة' }, isCorrect: false },
            { id: '4', text: { en: 'An amusement park on earth', ur: 'زمین پر ایک تفریح گاہ', ar: 'حديقة ألعاب في الأرض' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q2',
          type: 'mcq',
          question: {
            en: 'How many gates (doors) does Jannah have?',
            ur: 'جنت کے کل کتنے مبارک دروازے ہیں؟',
            ar: 'كم عدد أبواب الجنة؟',
          },
          explanation: {
            en: 'Jannah has 8 Gates as confirmed by Prophet Muhammad ﷺ in Hadith.',
            ur: 'احادیثِ مبارکہ کے مطابق جنت کے 8 دروازے ہیں۔',
            ar: 'للجنة ثمانية أبواب.',
          },
          options: [
            { id: '1', text: { en: '8 Gates', ur: '8 دروازے', ar: '8 أبواب' }, isCorrect: true },
            { id: '2', text: { en: '3 Gates', ur: '3 دروازے', ar: '3 أبواب' }, isCorrect: false },
            { id: '3', text: { en: '10 Gates', ur: '10 دروازے', ar: '10 أبواب' }, isCorrect: false },
            { id: '4', text: { en: '100 Gates', ur: '100 دروازے', ar: '100 باب' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q3',
          type: 'mcq',
          question: {
            en: 'What is the special gate of Jannah called through which ONLY those who fast (Sawm) will enter?',
            ur: 'جنت کا وہ خاص دروازہ کون سا ہے جس سے صرف روزہ دار داخل ہوں گے؟',
            ar: 'ما اسم باب الجنة المخصص للدخول منه للصائمين فقط؟',
          },
          explanation: {
            en: 'Bab Ar-Rayyan is the dedicated gate for fasting believers.',
            ur: 'باب الرّیان صرف روزے داروں کے لیے بنایا گیا ہے۔',
            ar: 'باب الريان هو باب الصائمين.',
          },
          options: [
            { id: '1', text: { en: 'Bab Ar-Rayyan', ur: 'باب الرّیان', ar: 'باب الريان' }, isCorrect: true },
            { id: '2', text: { en: 'Bab as-Salah', ur: 'باب الصلاۃ', ar: 'باب الصلاة' }, isCorrect: false },
            { id: '3', text: { en: 'Bab as-Sadaqah', ur: 'باب الصدقہ', ar: 'باب الصدقة' }, isCorrect: false },
            { id: '4', text: { en: 'Bab al-Jihad', ur: 'باب جہاد', ar: 'باب الجهاد' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q4',
          type: 'mcq',
          question: {
            en: 'What is the highest and most supreme level of Jannah directly beneath Allah\'s Throne?',
            ur: 'جنت کا سب سے اعلیٰ اور افضل ترین درجہ کون سا ہے جو عرشِ الٰہی کے ٹھیک نیچے ہے؟',
            ar: 'ما هي أعلى وأفضل درجات الجنة والموجودة تحت عرش الرحمن مباشرة؟',
          },
          explanation: {
            en: 'Jannat al-Firdaus (Firdaus al-A\'la). Prophet Muhammad ﷺ told us to ask Allah for Firdaus!',
            ur: 'جنت الفردوس جنت کا اعلیٰ ترین درجہ ہے۔',
            ar: 'جنات الفردوس الأعلى هي أعلى الجنان.',
          },
          options: [
            { id: '1', text: { en: 'Jannat al-Firdaus', ur: 'جنت الفردوس', ar: 'جنات الفردوس' }, isCorrect: true },
            { id: '2', text: { en: 'Jannat al-Mawa', ur: 'جنت الماویٰ', ar: 'جنات المأوى' }, isCorrect: false },
            { id: '3', text: { en: 'Jannat Adn', ur: 'جنت عدن', ar: 'جنات عدن' }, isCorrect: false },
            { id: '4', text: { en: 'Dar us-Salam', ur: 'دار السلام', ar: 'دار السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q5',
          type: 'mcq',
          question: {
            en: 'What is the ultimate, greatest joy for the dwellers of Jannah?',
            ur: 'جنت میں اہل الجنت کے لیے سب سے بڑی اور لازوال خوشی کیا ہوگی؟',
            ar: 'ما هو أعظم نعيم يمن به الله على أهل الجنة؟',
          },
          explanation: {
            en: 'Seeing Allah\'s Glorious Countenance (Nazar ila Wajhillah).',
            ur: 'اللہ تعالیٰ کا دیدار کرنا۔',
            ar: 'الرؤية إلى وجه الله الكريم.',
          },
          options: [
            { id: '1', text: { en: 'Beholding the Face of Allah Ta\'ala', ur: 'اللہ تعالیٰ کے دیدارِ مبارک کا شرف', ar: 'الرؤية إلى وجه الله الكريم' }, isCorrect: true },
            { id: '2', text: { en: 'Eating fruit', ur: 'پھل کھانا', ar: 'أكل الفاكهة' }, isCorrect: false },
            { id: '3', text: { en: 'Wearing silk', ur: 'ریشم پہننا', ar: 'لبس الحرير' }, isCorrect: false },
            { id: '4', text: { en: 'Sleeping late', ur: 'دیر تک سونا', ar: 'النوم المتأخر' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q6',
          type: 'true_false',
          question: {
            en: 'Will people in Jannah ever get sick, grow old, die, or feel sad?',
            ur: 'کیا جنت میں انسان کبھی بیمار، بوڑھا، غمگین ہوگا یا اسے موت آئے گی؟',
            ar: 'هل يمرضُ أو يهرمُ أو يحزنُ أو يموتُ أحدٌ في الجنة؟',
          },
          explanation: {
            en: 'No! Dwellers of Jannah will remain forever young, healthy, happy, and alive eternally.',
            ur: 'جی نہیں! جنت میں کوئی بیماری، بوڑھاپا، دکھ یا موت نہیں ہوگی، سب ہمیشہ جوان اور خوش رہیں گے۔',
            ar: 'لا! أهل الجنة أصحاء شبابٌ مخلدون بلا حزن ولا مرض ولا موت.',
          },
          options: [
            { id: '1', text: { en: 'No, forever healthy, young, & happy', ur: 'جی نہیں، ہمیشہ صحت مند، جوان اور خوش رہیں گے', ar: 'لا، شباب وصحة وسعادة أبدية' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, like Dunya', ur: 'جی ہاں، دنیا کی طرح', ar: 'نعم كالدنيا' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q7',
          type: 'mcq',
          question: {
            en: 'What kinds of rivers flow through Jannah as mentioned in the Quran?',
            ur: 'قرآنِ پاک کے مطابق جنت میں کن چیزوں کی نہریں جاری ہوں گی؟',
            ar: 'ما هي الأنهار المذكورة في القرآن الكريم التي تجري في الجنة؟',
          },
          explanation: {
            en: 'Surah Muhammad (47:15) mentions rivers of pure water, milk, non-intoxicating drink, and pure honey.',
            ur: 'پاکیزہ پانی، دودھ، اور خالص شہد کی نہریں۔',
            ar: 'أنهار من ماء غير آسن وألبان وعسل مصفى.',
          },
          options: [
            { id: '1', text: { en: 'Rivers of pure water, milk, & pure honey', ur: 'شفاف پانی، خالص دودھ اور شہد کی نہریں', ar: 'أنهار من ماء وفاكهة وعسل مصفى وألبان' }, isCorrect: true },
            { id: '2', text: { en: 'Rivers of muddy water', ur: 'گندے پانی کی نہریں', ar: 'أنهار من ماء كدر' }, isCorrect: false },
            { id: '3', text: { en: 'Rivers of oil', ur: 'تیل کی نہریں', ar: 'أنهار من زيت' }, isCorrect: false },
            { id: '4', text: { en: 'No rivers at all', ur: 'کوئی نہر نہیں', ar: 'لا أنهار' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q8',
          type: 'mcq',
          question: {
            en: 'What is Jahannam?',
            ur: '"جہنم" کیا ہے؟',
            ar: 'ما هي "جهنم"؟',
          },
          explanation: {
            en: 'Jahannam is Hellfire — created by Allah as a place of punishment for disbelievers and oppressors.',
            ur: 'جہنم وہ اگلی سزاہ گاہ ہے جو اللہ نے اپنے نافرمانوں اور ظالموں کے لیے بنائی ہے۔',
            ar: 'جهنم هي النار التي أعدها الله للعاصين والظالمين الكافرين.',
          },
          options: [
            { id: '1', text: { en: 'Hellfire — place of punishment for unrepentant evil', ur: 'جہنم — گناہوں اور سرکشی کی سزاہ گاہ', ar: 'النار — دار العقاب الشديد للظالمين' }, isCorrect: true },
            { id: '2', text: { en: 'A cold ice rink', ur: 'برف کا میدان', ar: 'حلبة تزلج' }, isCorrect: false },
            { id: '3', text: { en: 'A dark cave in Makkah', ur: 'مکہ کا ایک غار', ar: 'كهف بمكة' }, isCorrect: false },
            { id: '4', text: { en: 'None of the above', ur: 'ان میں سے کوئی نہیں', ar: 'لا شيء مما سبق' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q9',
          type: 'true_false',
          question: {
            en: 'Does Allah warn us about Jahannam out of mercy so we avoid bad deeds and repent?',
            ur: 'کیا اللہ تعالیٰ ہمیں اپنی رحمت کے تحت جہنم سے ڈراتا ہے تاکہ ہم برائیوں سے بچیں اور توبہ کریں؟',
            ar: 'هل يحذرنا الله من جهنم رحمةً بنا لنبتعد عن السيئات ونتوب؟',
          },
          explanation: {
            en: 'Yes! Allah\'s warnings are a mercy to guide us away from sins toward Jannah.',
            ur: 'جی ہاں! اللہ کی وعیدیں اور ڈرانا انسان کو سیدھی راہ اور توبہ پر لانے کے لیے ہے۔',
            ar: 'نعم! التحذير الإلهي رحمة ليدل العالم على سبيل النجاة.',
          },
          options: [
            { id: '1', text: { en: 'True (Divine mercy warning us to do good)', ur: 'سچ (رحمتِ الٰہی جو ہمیں نیکی پر لاتی ہے)', ar: 'صحيح (تحذير رحيم للعمل الصالح)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q10',
          type: 'mcq',
          question: {
            en: 'How many gates does Jahannam have according to the Quran (Surah Al-Hijr 15:44)?',
            ur: 'سورۃ الحجر کے مطابق جہنم کے کتنے دروازے ہیں؟',
            ar: 'كم عدد أبواب جهنم كما ذكر القرآن الكريم في سورة الحجر؟',
          },
          explanation: {
            en: 'The Quran specifies that Jahannam has 7 gates ("Laha sab\'atu abwab").',
            ur: 'قرآن پاک میں ارشاد ہے کہ جہنم کے 7 دروازے ہیں۔',
            ar: 'قال تعالى: "لها سبعة أبواب لكل باب منهم جزء مقسوم".',
          },
          options: [
            { id: '1', text: { en: '7 Gates', ur: '7 دروازے', ar: '7 أبواب' }, isCorrect: true },
            { id: '2', text: { en: '8 Gates', ur: '8 دروازے', ar: '8 أبواب' }, isCorrect: false },
            { id: '3', text: { en: '10 Gates', ur: '10 دروازے', ar: '10 أبواب' }, isCorrect: false },
            { id: '4', text: { en: '1 Gate', ur: '1 دروازہ', ar: 'باب واحد' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q11',
          type: 'mcq',
          question: {
            en: 'What key character traits qualify a Muslim for entering Jannah by Allah\'s mercy?',
            ur: 'اللہ کی رحمت سے کون سی اہم صفات انسان کو جنت کا مستحق بناتی ہیں؟',
            ar: 'ما هي الصفات الأساسية التي تؤهل المسلم لدخول الجنة برحمة الله؟',
          },
          explanation: {
            en: 'Tawheed, regular Salah, honesty, kindness to parents, giving charity, and seeking forgiveness.',
            ur: 'توحید، پابندیِ نماز، سچائی، والدین کے ساتھ حسنِ سلوک اور توبہ و استغفار۔',
            ar: 'التوحيد والصلاة والبر والصدق والصدقة والتوبة.',
          },
          options: [
            { id: '1', text: { en: 'Tawheed, Salah, honesty, kindness, and Tawbah', ur: 'توحید، نماز، سچائی، حسنِ سلوک اور توبہ', ar: 'التوحيد والصلاة والصدق والإحسان والتوبة' }, isCorrect: true },
            { id: '2', text: { en: 'Pride and arrogance', ur: 'تکبر اور غرور', ar: 'الكبر والغرور' }, isCorrect: false },
            { id: '3', text: { en: 'Lying and stealing', ur: 'جھوٹ اور چوری', ar: 'الكذب والسرقة' }, isCorrect: false },
            { id: '4', text: { en: 'Cheating others', ur: 'دھوکہ دہی', ar: 'الخداع' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q12',
          type: 'true_false',
          question: {
            en: 'Can a person enter Jannah purely through their own deeds without Allah\'s mercy?',
            ur: 'کیا کوئی شخص صرف اپنے اعمال کی بنیاد پر بغیر اللہ کی رحمت کے جنت میں جا سکتا ہے؟',
            ar: 'هل يدخل أحد الجنة بعمله فقط دون رحمة الله وفضله؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ said: "No one\'s deeds will enter him into Jannah except by Allah\'s mercy."',
            ur: 'جی نہیں! آپ ﷺ نے فرمایا: کوئی شخص اپنے عمل سے نہیں بلکہ اللہ کے فضل و رحمت سے جنت میں جائے گا۔',
            ar: 'لا! قال النبي ﷺ: "لن يدخل أحداً عملُه الجنةَ قالوا ولا أنت؟ قال: ولا أنا إلا أن يتغمدني الله برحمة".',
          },
          options: [
            { id: '1', text: { en: 'No, everyone enters Jannah by Allah\'s Mercy', ur: 'جی نہیں، تمام لوگ اللہ کی رحمت سے ہی جنت میں جائیں گے', ar: 'لا، الجميع يدخلون الجنة برحمة الله' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, deeds alone are enough', ur: 'جی ہاں، صرف عمل کافی ہے', ar: 'نعم العمل وحده يكفي' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q13',
          type: 'mcq',
          question: {
            en: 'What is the river in Jannah granted specifically to Prophet Muhammad ﷺ?',
            ur: 'جنت میں ہمارے پیارے آقا ﷺ کو خصوصی طور پر عطاء کردہ نہر کا کیا نام ہے؟',
            ar: 'ما اسم النهر الخاص الممنوح للنبي محمد ﷺ في الجنة؟',
          },
          explanation: {
            en: 'Al-Kawthar as mentioned in Surah Al-Kawthar ("Inna a\'tainakal-Kawthar").',
            ur: 'نہرِ کوثر (انا اعطیناک الکوثر)۔',
            ar: 'نهر الكوثر (إنا أعطيناك الكوثر).',
          },
          options: [
            { id: '1', text: { en: 'Al-Kawthar', ur: 'نہرِ کوثر', ar: 'نهر الكوثر' }, isCorrect: true },
            { id: '2', text: { en: 'Salsabil', ur: 'سلسبیل', ar: 'سلسبيل' }, isCorrect: false },
            { id: '3', text: { en: 'Tasnim', ur: 'تسنیم', ar: 'تسنيم' }, isCorrect: false },
            { id: '4', text: { en: 'Kafur', ur: 'کافور', ar: 'كافور' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q14',
          type: 'mcq',
          question: {
            en: 'What is the spring in Jannah called "Salsabil"?',
            ur: 'جنت کے اس پاکیزہ چشمے کا کیا نام ہے جس کا ذکر قرآن میں "سلسبیل" آیا ہے؟',
            ar: 'ما هي "سلسبيل" المذكورة في القرآن الكريم؟',
          },
          explanation: {
            en: 'Salsabil is a delicious, smooth-flowing spring in Jannah.',
            ur: 'سلسبیل جنت کا ایک میٹھا اور مبارک چشمہ ہے۔',
            ar: 'عين في الجنة سلسة جرعها.',
          },
          options: [
            { id: '1', text: { en: 'A smooth-flowing pure spring in Jannah', ur: 'جنت کا ایک جاری و پاکیزہ چشمہ', ar: 'عين عذبة سلسة الشرب في الجنة' }, isCorrect: true },
            { id: '2', text: { en: 'A mountain peak', ur: 'پہاڑ کی چوٹی', ar: 'قمة جبل' }, isCorrect: false },
            { id: '3', text: { en: 'A golden gate', ur: 'سنہرا دروازہ', ar: 'باب ذهبي' }, isCorrect: false },
            { id: '4', text: { en: 'A tree branch', ur: 'درخت کی ٹہنی', ar: 'غصن شجرة' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q15',
          type: 'true_false',
          question: {
            en: 'Will there be any jealousy, hatred, or bad words in Jannah?',
            ur: 'کیا جنت میں کوئی حسد، بغض، کینہ یا فضول و بری بات چیت ہوگی؟',
            ar: 'هل يوجد حسد أو حقد أو لغو في الجنة؟',
          },
          explanation: {
            en: 'No! Surah Al-Hijr states: "We will remove whatever is in their breasts of resentment, as brothers upon thrones facing each other."',
            ur: 'جی نہیں! اللہ جنت والوں کے دلوں سے حسد و کینہ بالکل پاک فرما دے گا۔',
            ar: 'لا! قال تعالى: "ونزعنا ما في صدورهم من غل إخواناً على سرر متقابلين".',
          },
          options: [
            { id: '1', text: { en: 'No, hearts purified completely from all ill-will', ur: 'جی نہیں، تمام حسد و بغض سے پاک دل ہوں گے', ar: 'لا، القلوب طاهرة من كل غل وحسد' }, isCorrect: true },
            { id: '2', text: { en: 'Yes', ur: 'جی ہاں', ar: 'نعم' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q16',
          type: 'mcq',
          question: {
            en: 'What tree in Jannah is so huge that a rider on a fast horse could travel in its shade for 100 years without crossing it?',
            ur: 'جنت کے اس عظیم الشان درخت کا کیا نام ہے جس کے سائے میں تیز سوار 100 سال تک چلتا رہے پھر بھی ختم نہ ہو؟',
            ar: 'ما اسم الشجرة العظيمة بالجنة التي يسير الركب في ظلها مائة عام لا يقطعها؟',
          },
          explanation: {
            en: 'Shajarat Tooba (or the gigantic trees of Jannah mentioned in Hadith).',
            ur: 'طوبیٰ درخت۔',
            ar: 'شجرة طوبى وشجر الجنة العظيم.',
          },
          options: [
            { id: '1', text: { en: 'Shajarat Tooba', ur: 'طوبیٰ درخت', ar: 'شجرة طوبى' }, isCorrect: true },
            { id: '2', text: { en: 'Zaqqum', ur: 'زقوم', ar: 'الزقوم' }, isCorrect: false },
            { id: '3', text: { en: 'Olive tree', ur: 'زیتون کا درخت', ar: 'شجرة الزيتون' }, isCorrect: false },
            { id: '4', text: { en: 'Fig tree', ur: 'انجیر کا درخت', ar: 'شجرة التين' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q17',
          type: 'mcq',
          question: {
            en: 'What supplication did Prophet Muhammad ﷺ teach us to recite 3 times daily asking for Jannah?',
            ur: 'نبی کریم ﷺ نے دن میں 3 بار جنت مانگنے کے لیے کیا مسنون دعا سکھائی؟',
            ar: 'ما هو الدعاء الذي علمه النبي ﷺ لسؤال الجنة ثلاث مرات؟',
          },
          explanation: {
            en: '"Allahumma inni as\'alukal-Jannah" (O Allah, I ask You for Jannah).',
            ur: '"اللهم إني أسألك الجنة" (اے اللہ! میں تجھ سے جنت کا سوال کرتا ہوں)۔',
            ar: '"اللهم إني أسألك الجنة".',
          },
          options: [
            { id: '1', text: { en: 'Allahumma inni as\'alukal-Jannah', ur: 'اللهم إني أسألك الجنة', ar: 'اللهم إني أسألك الجنة' }, isCorrect: true },
            { id: '2', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
            { id: '3', text: { en: 'Alhamdulillah', ur: 'الحمد للہ', ar: 'الحمد لله' }, isCorrect: false },
            { id: '4', text: { en: 'Allahu Akbar', ur: 'اللہ اکبر', ar: 'الله أكبر' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q18',
          type: 'mcq',
          question: {
            en: 'What prayer seeks Allah\'s protection from Jahannam?',
            ur: 'جہنم کی آگ سے اللہ کی پناہ مانگنے کے لیے کون سی دعا پڑھی جاتی ہے؟',
            ar: 'ما هو الدعاء للاستعاذة من نار جهنم؟',
          },
          explanation: {
            en: '"Allahumma ajirni minan-nar" (O Allah, protect me from the Fire).',
            ur: '"اللهم أجرني من النار" (اے اللہ! مجھے آگ سے نجات دے)۔',
            ar: '"اللهم أجرني من النار".',
          },
          options: [
            { id: '1', text: { en: 'Allahumma ajirni minan-nar', ur: 'اللهم أجرني من النار', ar: 'اللهم أجرني من النار' }, isCorrect: true },
            { id: '2', text: { en: 'Bismillah', ur: 'بسم اللہ', ar: 'بسم الله' }, isCorrect: false },
            { id: '3', text: { en: 'Astaghfirullah', ur: 'استغفر اللہ', ar: 'أستغفر الله' }, isCorrect: false },
            { id: '4', text: { en: 'Labaik', ur: 'لبیک', ar: 'لبيك' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q19',
          type: 'true_false',
          question: {
            en: 'If a believer makes a mistake, will sincere Tawbah (repentance) wipe away sins and reopen the path to Jannah?',
            ur: 'اگر کسی بندے سے کوئی غلطی ہو جائے تو کیا سچی توبہ گناہوں کو مٹا کر دوبارہ جنت کا راستہ کھول دیتی ہے؟',
            ar: 'إذا أخطأ العبد، هل تمحو التوبة الصادقة السيئات وتفتح طريق الجنة مجدداً؟',
          },
          explanation: {
            en: 'Yes! Allah loves those who repent frequently ("Innallaha yuhibbut-tawwabina").',
            ur: 'جی ہاں! اللہ تعالیٰ توبہ کرنے والوں کو بہت پسند فرماتا ہے۔',
            ar: 'نعم! إن الله يحب التوابين ويحب المتطهرين.',
          },
          options: [
            { id: '1', text: { en: 'True (Allah\'s mercy and Tawbah wipes all sins)', ur: 'سچ (توبہ سے گناہ معاف ہو جاتے ہیں)', ar: 'صحيح (التوبة تمحو الذنوب)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c8_q20',
          type: 'mcq',
          question: {
            en: 'What should be our main intention when performing any good deed in Islam?',
            ur: 'اسلام میں کوئی بھی نیکی کرتے وقت ہماری سب سے بنیادی نیت کیا ہونی چاہیے؟',
            ar: 'ما هي النية الأساسية الواجبة عند عمل أي خير في الإسلام؟',
          },
          explanation: {
            en: 'To seek only Allah\'s pleasure (Ikhlas) and love.',
            ur: 'صرف اور صرف اللہ تعالیٰ کی رضا اور خوشنودی حاصل کرنا (اخلاص)۔',
            ar: 'ابتغاء مرضات الله وحده (الإخلاص).',
          },
          options: [
            { id: '1', text: { en: 'To seek Allah\'s pleasure and love alone (Ikhlas)', ur: 'صرف اللہ تعالیٰ کی رضا اور محبّت (اخلاص)', ar: 'ابتغاء وجه الله ومرضاته وحده' }, isCorrect: true },
            { id: '2', text: { en: 'To get praise on social media', ur: 'سوشل میڈیا پر تعریف پانا', ar: 'لنيل الثناء في وسائل التواصل' }, isCorrect: false },
            { id: '3', text: { en: 'To show off to neighbors', ur: 'پڑوسیوں کو دکھانا', ar: 'للمباهاة أمام الجيران' }, isCorrect: false },
            { id: '4', text: { en: 'To get money from people', ur: 'لوگوں سے مال بٹورنا', ar: 'لكسب المال من الناس' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

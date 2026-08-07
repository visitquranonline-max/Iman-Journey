import { Category } from '../../types';

export const chapter10: Category = {
  id: 'lvl1_cat10',
  number: 10,
  title: {
    en: 'Chapter 10: Prophet Muhammad ﷺ – Life and Teachings',
    ur: 'باب 10: سیرتِ مصطفیٰ ﷺ اور تعلیمات',
    ar: 'الفصل 10: السيرة النبوية الشريفة وتعاليمها',
  },
  description: {
    en: 'Journey through the blessed life of Prophet Muhammad ﷺ: Birth, Prophethood, Hijrah, Conquest of Makkah, and eternal Seerah lessons.',
    ur: 'نبی کریم حضرت محمد مصطفیٰ ﷺ کی بابرکت سیرتِ طیبہ، ہجرت، فتح مکہ اور سنتِ نبوی کا ایمان افروز مطالعہ کریں۔',
    ar: 'استكشف السيرة العطرة للنبي محمد ﷺ: مولده، بعثته، هجرته، فتح مكة، والدروس الخالدة من حياته.',
  },
  iconName: 'Crown',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat10_les1',
      title: {
        en: 'The Mercy to All Worlds (Rahmatul-lil-\'Alamin)',
        ur: 'رحمۃ للعالمین ﷺ کی حیاتِ مبارکہ',
        ar: 'رحمة للعالمين ﷺ حياته الشريفة',
      },
      summary: {
        en: 'Prophet Muhammad ﷺ was born in Makkah and raised as a model of honesty (Al-Amin). He transformed humanity through divine light, compassion, and ultimate mercy.',
        ur: 'آپ ﷺ مکہ مکرمہ میں پیدا ہوئے اور النبی الصادق و الامین کے لقب سے معروف ہوئے۔ آپ نے دنیا کو اندھیروں سے نکال کر ہدایت کا نور عطا فرمایا۔',
        ar: 'ولد النبي ﷺ بمكة وكان يُلقب بالصادق الأمين. بعثه الله ليخرج الناس من الظلمات إلى النور بالرحمة والعدل.',
      },
      estimatedMinutes: 7,
      dialogues: [
        {
          id: 'c10_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, why is loving Prophet Muhammad ﷺ so essential to completing our Iman?',
            ur: 'شیخ طارق، ہمارے ایمان کو مکمل کرنے کے لیے نبی کریم ﷺ کی محبت اتنی ضروری کیوں ہے؟',
            ar: 'يا شيخ طارق، لماذا تُعتبر محبة النبي محمد ﷺ شرطاً كمال الإيمان؟',
          },
          sceneIllustration: 'Crown',
        },
        {
          id: 'c10_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Because Prophet Muhammad ﷺ is Allah\'s final messenger, sent as a Mercy to all creation (Rahmatul-lil-\'Alamin)! Prophet Muhammad ﷺ said: "None of you truly believes until I am more beloved to him than his child, his parent, and all of mankind."',
            ur: 'کیونکہ آپ ﷺ تمام جہانوں کے لیے رحمت بنا کر بھیجے گئے! آپ ﷺ نے فرمایا: "تم میں سے کوئی اس وقت تک کامل مومن نہیں ہو سکتا جب تک میں اسے اس کے والدین، اولاد اور تمام انسانوں سے زیادہ محبوب نہ ہو جاؤں۔"',
            ar: 'لأن الله بعثه رحمة للعالمين! قال ﷺ: "لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده والناس أجمعين".',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Loving Prophet Muhammad ﷺ more than anyone else is the core condition of true Iman.',
            ur: 'نبی کریم ﷺ سے تمام مخلوق سے بڑھ کر محبّت کرنا ایمان کا اصل روح ہے۔',
            ar: 'محبة النبي ﷺ المقدمة على كل أحد هي روح الإيمان.',
          },
        },
        {
          id: 'c10_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What were the major milestones in the life of Prophet Muhammad ﷺ?',
            ur: 'آپ ﷺ کی سیرتِ طیبہ کے اہم ترین اور تاریخی مراحل کون سے ہیں؟',
            ar: 'ما هي أهم المحطات التاريخية في السيرة النبوية؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'c10_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: '1. Birth in Makkah (Year of Elephant), 2. First revelation at age 40 in Cave Hira, 3. Preaching Tawheed in Makkah for 13 years, 4. Hijrah to Madinah, 5. Establishing the Islamic state & brotherhood (Muwakhat), 6. Peaceful Conquest of Makkah (Fath Makkah), and 7. Farewell Pilgrimage!',
            ur: '1۔ مکہ میں ولادت با سعادت (عام الفیل)، 2۔ 40 سال کی عمر میں غار حرا میں پہلی وحی، 3۔ مکہ میں 13 سال دعوتِ توحید، 4۔ مدینہ منورہ ہجرت، 5۔ مواخات کا قائم کرنا، 6۔ فتحِ مکہ کا عظیم تاریخی معجزہ، اور 7۔ خطبہ حجۃ الوداع!،',
            ar: '1. مولده بمكة (عام الفيل)، 2. البعث في غار حراء سن 40، 3. الدعوة بمكة 13 سنة، 4. الهجرة إلى المدينة، 5. المؤاخاة، 6. فتح مكة العظيم، 7. حجة الوداع.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'The Prophet ﷺ forgave all his Makkan enemies during Fath Makkah, establishing unmatched mercy.',
            ur: 'فتحِ مکہ کے دن آپ ﷺ نے اپنے تمام جانی دشمنوں کو معاف فرما کر عفو و درگزر کی بے مثال تاریخ رقم کی۔',
            ar: 'ضرب النبي ﷺ أروع الأمثلة في العفو عند فتح مكة بقوله: "اذكروا اذهبوا فأنتم الطلاقاء".',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Prophet Muhammad ﷺ was known as Al-Sadiq (The Truthful) and Al-Amin (The Trustworthy) even before Prophethood.',
          ur: 'اعلانِ نبوت سے قبل بھی مکہ کے لوگ آپ ﷺ کو "الصادق" اور "الامین" کہہ کر پکارتے تھے۔',
          ar: 'كان يلقب بالصادق الأمين بمكة قبل بعثته الشريفة.',
        },
        {
          en: 'Hijrah (Migration from Makkah to Madinah) marks the start of the Islamic Hijri Calendar.',
          ur: 'مکہ سے مدینہ منورہ ہجرت سے اسلامی ہجری تقویم (کیلنڈر) کا آغاز ہوتا ہے۔',
          ar: 'تعد الهجرة النبوية بداية التقويم الهجري الإسلامي.',
        },
        {
          en: 'The Prophet\'s Mosque (Al-Masjid an-Nabawi) in Madinah is the second holiest mosque in Islam.',
          ur: 'مدینہ منورہ میں واقع مسجدِ نبوی الشریف دنیا کی دوسری مقدس ترین مسجد ہے۔',
          ar: 'المسجد النبوي بالمدينة المنورة هو ثاني أفضل المساجد في الإسلام.',
        },
        {
          en: 'Following the Prophet\'s Sunnah in daily life is the guarantee of success in Dunya and Akhirah.',
          ur: 'سنتِ نبوی پر قدم بقدم چلنا ہی دنیا اور آخرت میں کامیابی کی ضمانت ہے۔',
          ar: 'اتّباع سنته الشريفة هو الطريق المؤدي للفلاح في الدارين.',
        },
      ],
      quiz: [
        {
          id: 'c10_q1',
          type: 'mcq',
          question: {
            en: 'In which holy city was Prophet Muhammad ﷺ born?',
            ur: 'نبی کریم حضرت محمد مصطفیٰ ﷺ کی ولادت با سعادت کس مبارک شہر میں ہوئی؟',
            ar: 'في أي مدينة مباركة ولد النبي محمد ﷺ؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ was born in Makkah al-Mukarramah in the Year of the Elephant (570 CE).',
            ur: 'آپ ﷺ کی ولادت مکہ مکرمہ میں عام الفیل کے سال ہوئی۔',
            ar: 'ولد النبي ﷺ بمكة المكرمة في عام الفيل.',
          },
          options: [
            { id: '1', text: { en: 'Makkah al-Mukarramah', ur: 'مکہ مکرمہ', ar: 'مكة المكرمة' }, isCorrect: true },
            { id: '2', text: { en: 'Madinah al-Munawwarah', ur: 'مدینہ منورہ', ar: 'المدينة المنورة' }, isCorrect: false },
            { id: '3', text: { en: 'Jerusalem (Al-Quds)', ur: 'یروشلم (القدس)', ar: 'القدس الشريف' }, isCorrect: false },
            { id: '4', text: { en: 'Ta\'if', ur: 'طائف', ar: 'الطائف' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q2',
          type: 'mcq',
          question: {
            en: 'What were the two famous titles given to young Prophet Muhammad ﷺ by the Makkans due to his honesty?',
            ur: 'اعلانِ نبوت سے پہلے اہل مکہ آپ ﷺ کو سچائی اور امانت داری کی وجہ سے کن دو القاب سے پکارتے تھے؟',
            ar: 'ما اللقبان المألوفان اللذان أطلقهما أهل مكة على النبي ﷺ قبل بعثته لصدقه؟',
          },
          explanation: {
            en: 'Al-Sadiq (The Truthful) and Al-Amin (The Trustworthy).',
            ur: 'الصادق (سچا) اور الامین (امانت دار)۔',
            ar: 'الصادق والأمين.',
          },
          options: [
            { id: '1', text: { en: 'Al-Sadiq and Al-Amin', ur: 'الصادق اور الامین', ar: 'الصادق والأمين' }, isCorrect: true },
            { id: '2', text: { en: 'Al-Hakim and Al-Khatib', ur: 'الحکیم اور الخطیب', ar: 'الحكيم والخطيب' }, isCorrect: false },
            { id: '3', text: { en: 'Al-Tajir and Al-Sha\'ir', ur: 'التاجر اور الشاعر', ar: 'التاجر والشاعر' }, isCorrect: false },
            { id: '4', text: { en: 'None of the above', ur: 'ان میں سے کوئی نہیں', ar: 'لا شيء مما سبق' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q3',
          type: 'mcq',
          question: {
            en: 'At what age did Prophet Muhammad ﷺ receive the first Divine Revelation in Cave Hira?',
            ur: 'غارِ حرا میں پہلی وحی نازل ہوتے وقت ہمارے آقا ﷺ کی عمر مبارک کتنی تھی؟',
            ar: 'كم كان عمر النبي ﷺ عندما نزل عليه الوحي لأول مرة في غار حراء؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ was 40 years old when Jibreel (AS) brought the first revelation.',
            ur: 'جب حضرت جبرائیل علیہ السلام نے پہلی وحی پہنچائی تو آپ ﷺ کی عمر مبارک 40 سال تھی۔',
            ar: 'كان عمره 40 سنة عند نزول الوحي.',
          },
          options: [
            { id: '1', text: { en: '40 Years old', ur: '40 سال', ar: '40 سنة' }, isCorrect: true },
            { id: '2', text: { en: '25 Years old', ur: '25 سال', ar: '25 سنة' }, isCorrect: false },
            { id: '3', text: { en: '63 Years old', ur: '63 سال', ar: '63 سنة' }, isCorrect: false },
            { id: '4', text: { en: '50 Years old', ur: '50 سال', ar: '50 سنة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q4',
          type: 'mcq',
          question: {
            en: 'Who was the blessed first wife of Prophet Muhammad ﷺ and the very first person to embrace Islam?',
            ur: 'آپ ﷺ کی کون سی مبارک زواجہِ مطہرہ سب سے پہلے اسلام قبول کرنے والی شرف حاصل کرنے والی شخصیت ہیں؟',
            ar: 'من هي أول زوجات النبي ﷺ وأول من آمن به ودخل في الإسلام مطلقاً؟',
          },
          explanation: {
            en: 'Sayyidatuna Khadijah bint Khuwaylid (RA).',
            ur: 'حضرت سیدہ خدیجہ الکبریٰ رضی اللہ عنہا!،',
            ar: 'السيدة خديجة بنت خويلد رضي الله عنها.',
          },
          options: [
            { id: '1', text: { en: 'Khadijah bint Khuwaylid (RA)', ur: 'حضرت خدیجہ بنت خویلد رضی اللہ عنہا', ar: 'خديجة بنت خويلد رضي الله عنها' }, isCorrect: true },
            { id: '2', text: { en: 'Aisha bint Abi Bakr (RA)', ur: 'حضرت عائشہ صدیقہ رضی اللہ عنہا', ar: 'عائشة بنت أبي بكر رضي الله عنها' }, isCorrect: false },
            { id: '3', text: { en: 'Hafsa bint Umar (RA)', ur: 'حضرت حفصہ رضی اللہ عنہا', ar: 'حفصة بنت عمر رضي الله عنها' }, isCorrect: false },
            { id: '4', text: { en: 'Fatimah bint Muhammad (RA)', ur: 'حضرت فاطمہ الزہراء رضی اللہ عنہا', ar: 'فاطمة الزهراء رضي الله عنها' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q5',
          type: 'mcq',
          question: {
            en: 'Who was the first male adult companion to accept Islam?',
            ur: 'مردوں میں سب سے پہلے اسلام قبول کرنے والے کون سے جلیل القدر صحابی ہیں؟',
            ar: 'من هو أول من آمن بالرسول ﷺ من الرجال الأحرار؟',
          },
          explanation: {
            en: 'Sayyiduna Abu Bakr as-Siddiq (RA).',
            ur: 'حضرت ابوبکر صدیق رضی اللہ تعالیٰ عنہ!،',
            ar: 'أبو بكر الصديق رضي الله عنه.',
          },
          options: [
            { id: '1', text: { en: 'Sayyiduna Abu Bakr as-Siddiq (RA)', ur: 'حضرت ابوبکر صدیق رضی اللہ عنہ', ar: 'أبو بكر الصديق رضي الله عنه' }, isCorrect: true },
            { id: '2', text: { en: 'Sayyiduna Umar ibn al-Khattab (RA)', ur: 'حضرت عمر فاروق رضی اللہ عنہ', ar: 'عمر بن الخطاب رضي الله عنه' }, isCorrect: false },
            { id: '3', text: { en: 'Sayyiduna Uthman ibn Affan (RA)', ur: 'حضرت عثمان غنی رضی اللہ عنہ', ar: 'عثمان بن عفان رضي الله عنه' }, isCorrect: false },
            { id: '4', text: { en: 'Sayyiduna Khalid ibn al-Walid (RA)', ur: 'حضرت خالد بن ولید رضی اللہ عنہ', ar: 'خالد بن الوليد رضي الله عنه' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q6',
          type: 'mcq',
          question: {
            en: 'Who was the first youth/child to accept Islam?',
            ur: 'بچوں میں سب سے پہلے اسلام کی دولت کس نے حاصل کی؟',
            ar: 'من هو أول من آمن بالرسول ﷺ من الصبيان والشباب؟',
          },
          explanation: {
            en: 'Sayyiduna Ali ibn Abi Talib (RA) accepted Islam at a young age.',
            ur: 'حضرت علی ابن ابی طالب رضی اللہ عنہ نے بچپن میں ہی اسلام قبول فرمایا۔',
            ar: 'علي بن أبي طالب رضي الله عنه.',
          },
          options: [
            { id: '1', text: { en: 'Sayyiduna Ali ibn Abi Talib (RA)', ur: 'حضرت علی ابن ابی طالب رضی اللہ عنہ', ar: 'علي بن أبي طالب رضي الله عنه' }, isCorrect: true },
            { id: '2', text: { en: 'Sayyiduna Zayd ibn Harithah (RA)', ur: 'حضرت زید بن حارثہ رضی اللہ عنہ', ar: 'زيد بن حارثة رضي الله عنه' }, isCorrect: false },
            { id: '3', text: { en: 'Sayyiduna Anas ibn Malik (RA)', ur: 'حضرت انس بن مالک رضی اللہ عنہ', ar: 'أنس بن مالك رضي الله عنه' }, isCorrect: false },
            { id: '4', text: { en: 'Sayyiduna Bilal ibn Rabah (RA)', ur: 'حضرت بلال حبشی رضی اللہ عنہ', ar: 'بلال بن رباح رضي الله عنه' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q7',
          type: 'mcq',
          question: {
            en: 'What is the migration of Muslims from Makkah to Madinah called?',
            ur: 'مسلمانوں کا مکہ مکرمہ سے مدینہ منورہ منتقل ہونے کا تاریخی واقعہ کیا کہلاتا ہے؟',
            ar: 'ماذا تسمى هجرة المسلمين التاريخية من مكة إلى المدينة؟',
          },
          explanation: {
            en: 'Al-Hijrah (The Great Migration).',
            ur: 'ہجرتِ مدینہ (الھجرۃ)۔',
            ar: 'الهجرة النبوية المباركة.',
          },
          options: [
            { id: '1', text: { en: 'Al-Hijrah', ur: 'ہجرت (الھجرۃ)', ar: 'الهجرة النبوية' }, isCorrect: true },
            { id: '2', text: { en: 'Al-Isra', ur: 'اسراء', ar: 'الإسراء' }, isCorrect: false },
            { id: '3', text: { en: 'Al-Miraj', ur: 'معراج', ar: 'المعراج' }, isCorrect: false },
            { id: '4', text: { en: 'Al-Ghazwah', ur: 'غزوہ', ar: 'الغزوة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q8',
          type: 'mcq',
          question: {
            en: 'What were the Muslim helpers residing in Madinah who welcomed the Makkah migrants called?',
            ur: 'مدینہ منورہ کے ان پر خلوص مسلمانوں کو کیا کہا جاتا ہے جنہوں نے مکہ کے مہاجرین کا استقبال کیا اور مدد کی؟',
            ar: 'ماذا يسمى أهل المدينة المنورة الذين استقبلوا المهاجرين ونشروهم بنصرتهم؟',
          },
          explanation: {
            en: 'Ansar (The Helpers), while the Makkah migrants were called Muhajirun.',
            ur: 'انصار (مددگار) اور مکہ سے آنے والوں کو مہاجرین کہا جاتا ہے۔',
            ar: 'الأنصار (بينما القادمون من مكة هم المهاجرون).',
          },
          options: [
            { id: '1', text: { en: 'Ansar (The Helpers)', ur: 'انصار (مددگار)', ar: 'الأنصار' }, isCorrect: true },
            { id: '2', text: { en: 'Muhajirun', ur: 'مہاجرین', ar: 'المهاجرون' }, isCorrect: false },
            { id: '3', text: { en: 'Bedouins', ur: 'بدوی', ar: 'البدو' }, isCorrect: false },
            { id: '4', text: { en: 'Quraysh', ur: 'قریش', ar: 'قريش' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q9',
          type: 'mcq',
          question: {
            en: 'Which miraculous night journey took Prophet Muhammad ﷺ from Makkah to Jerusalem and then up through the Seven Heavens?',
            ur: 'نبی کریم ﷺ کے مکہ سے القدس اور پھر ساتوں آسمانوں پر تشریف لے جانے والے معجزاتی سفر کا کیا نام ہے؟',
            ar: 'ما اسم الرحلة المعجزة للنبي ﷺ من مكة إلى القدس ثم إلى السماوات السبع؟',
          },
          explanation: {
            en: 'Al-Isra\' wal-Mi\'raj (The Night Journey and Ascension).',
            ur: 'واقعہ اسراء و معراج۔',
            ar: 'رحلة الإسراء والمعراج.',
          },
          options: [
            { id: '1', text: { en: 'Al-Isra\' wal-Mi\'raj', ur: 'واقعہ اسراء و معراج', ar: 'الإسراء والمعراج' }, isCorrect: true },
            { id: '2', text: { en: 'Ghazwa Badr', ur: 'غزوہِ بدر', ar: 'غزوة بدر' }, isCorrect: false },
            { id: '3', text: { en: 'Sulh al-Hudaybiya', ur: 'صلح حدیبیہ', ar: 'صلح الحديبية' }, isCorrect: false },
            { id: '4', text: { en: 'Fath Makkah', ur: 'فتح مکہ', ar: 'فتح مكة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q10',
          type: 'mcq',
          question: {
            en: 'Which fundamental daily pillar of Islam was prescribed as a gift directly during Isra and Mi\'raj?',
            ur: 'معراج شریف کے اس مبارک معجزاتی سفر کے موقع پر امتِ مسلمہ کو کون सा عظیم تحفہ بلا واسطہ عطا ہوا؟',
            ar: 'ما هي الفريضة العظيمة التي فُرضت مباشرةً كهدية للأمة خلال رحلة المعراج؟',
          },
          explanation: {
            en: 'The 5 Daily Prayers (Salah) were commanded directly during Mi\'raj.',
            ur: 'پنجگانہ نمازیں معراج کے موقع پر تحفے میں فرض کی گئیں۔',
            ar: 'الصلوات الخمس المكتوبة.',
          },
          options: [
            { id: '1', text: { en: 'The 5 Daily Prayers (Salah)', ur: 'پنجگانہ فرض نمازیں (صلوۃ)', ar: 'الصلوات الخمس' }, isCorrect: true },
            { id: '2', text: { en: 'Zakat', ur: 'زکوۃ', ar: 'الزكاة' }, isCorrect: false },
            { id: '3', text: { en: 'Fasting Ramadan', ur: 'رمضان کے روزے', ar: 'صوم رمضان' }, isCorrect: false },
            { id: '4', text: { en: 'Hajj', ur: 'حج', ar: 'الحج' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q11',
          type: 'mcq',
          question: {
            en: 'What was the first major battle in Islamic history where 313 Muslims defeated a 1000-strong army with Allah\'s help?',
            ur: 'اسلامی تاریخ کا وہ پہلا معرکہ کون سا ہے جس میں 313 مسلمانوں نے اللہ کی نصرت سے 1000 کے لشکر کو شکست دی؟',
            ar: 'ما هي أول معركة خاضها المسلمون (313 مقاتلاً) وانتصروا فيها بفضل الله على ألف كافر؟',
          },
          explanation: {
            en: 'Ghazwat Badr (The Battle of Badr) on 17th Ramadan.',
            ur: 'غزوہِ بدر (17 رمضان المبارک)۔',
            ar: 'غزوة بدر الكبرى (17 رمضان).',
          },
          options: [
            { id: '1', text: { en: 'Ghazwat Badr (Battle of Badr)', ur: 'غزوہِ بدر', ar: 'غزوة بدر الكبرى' }, isCorrect: true },
            { id: '2', text: { en: 'Ghazwat Uhud', ur: 'غزوہِ احد', ar: 'غزوة أُحد' }, isCorrect: false },
            { id: '3', text: { en: 'Ghazwat al-Khandaq', ur: 'غزوہِ خندق', ar: 'غزوة الخندق' }, isCorrect: false },
            { id: '4', text: { en: 'Ghazwat Tabuk', ur: 'غزوہِ تبوک', ar: 'غزوة تبوك' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q12',
          type: 'mcq',
          question: {
            en: 'What memorable words did Prophet Muhammad ﷺ speak to his Makkan enemies during Fath Makkah (Conquest of Makkah)?',
            ur: 'فتحِ مکہ کے دن آپ ﷺ نے اپنے قریشی دشمنوں سے کیا تاریخ ساز جملہ ارشاد فرمایا؟',
            ar: 'ما المقولة الخالدة التي قالها النبي ﷺ لأهل مكة يوم الفتح الأعظم؟',
          },
          explanation: {
            en: '"Go, for you are all free!" (Ith-habu fa-antum at-tulaqa\'). He forgave them unconditionally.',
            ur: '"جاؤ، آج کے دن تم سب آزاد ہو!" (عفوِ عمومی)۔',
            ar: '"اذهبوا فأنتم الطلقاء" معلناً العفو العام.',
          },
          options: [
            { id: '1', text: { en: '"Go, for you are all free!" (Unconditional forgiveness)', ur: '"جاؤ، آج تم سب آزاد ہو!" (مکمل معافی)', ar: '"اذهبوا فأنتم الطلقاء" (العفو الشامل)' }, isCorrect: true },
            { id: '2', text: { en: '"Pay fines"', ur: '"جرمانہ ادا کرو"', ar: '"ادفعوا الغرامة"' }, isCorrect: false },
            { id: '3', text: { en: '"Leave Arabia"', ur: '"عرب سے نکل جاؤ"', ar: '"اخرجوا من الجزيرة"' }, isCorrect: false },
            { id: '4', text: { en: 'None', ur: 'کوئی نہیں', ar: 'لا شيء' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q13',
          type: 'mcq',
          question: {
            en: 'What was the famous sermon delivered by Prophet Muhammad ﷺ near Mount Arafat declaring human equality and rights?',
            ur: 'جبلِ عرفات پر نبی کریم ﷺ نے انسانی مساوات اور حقوق کا کون سا عالمی چارٹر پیش فرمایا؟',
            ar: 'ما اسم الخطبة الخالدة التي ألقاها النبي ﷺ في عرفة وأسست لحقوق الإنسان والمساواة؟',
          },
          explanation: {
            en: 'Khutbat Hajjat al-Wida (The Farewell Sermon).',
            ur: 'خطبہ حجۃ الوداع (آخری خطبہ)۔',
            ar: 'خطبة حجة الوداع.',
          },
          options: [
            { id: '1', text: { en: 'Khutbat Hajjat al-Wida (Farewell Sermon)', ur: 'خطبہ حجۃ الوداع', ar: 'خطبة حجة الوداع' }, isCorrect: true },
            { id: '2', text: { en: 'Khutbat Eid', ur: 'خطبہ عید', ar: 'خطبة العيد' }, isCorrect: false },
            { id: '3', text: { en: 'Khutbat Juma\'ah', ur: 'خطبہ جمعہ', ar: 'خطبة الجمعة' }, isCorrect: false },
            { id: '4', text: { en: 'Khutbat Nikah', ur: 'خطبہ نکاح', ar: 'خطبة النكاح' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q14',
          type: 'mcq',
          question: {
            en: 'What powerful declaration of human equality was proclaimed in the Farewell Sermon regarding race?',
            ur: 'خطبہ حجۃ الوداع میں نسل و رنگ کی برتری کے خاتمے کے بارے میں کیا اعلان کیا گیا؟',
            ar: 'ما المبدأ السامي الذي أعلنه النبي ﷺ في خطبة الوداع بشأن المساواة بين البشر؟',
          },
          explanation: {
            en: '"An Arab has no superiority over a non-Arab... except by Taqwa (piety). All mankind are from Adam."',
            ur: 'کسی عربی کو عجمی پر اور عجمی کو عربی پر کوئی فضیلت نہیں مگر تقویٰ کی بنیاد پر۔',
            ar: 'لا فضل لعربي على أعجمي ولا لأحمر على أسود إلا بالتقوى.',
          },
          options: [
            { id: '1', text: { en: 'No race/Arab is superior to another except through Taqwa (piety)', ur: 'کسی نسل کو دوسرے پر فوقیت نہیں مگر تقویٰ سے', ar: 'لا فضل لأحد على أحد إلا بالتقوى' }, isCorrect: true },
            { id: '2', text: { en: 'Rich people are better', ur: 'امیر لوگ بہتر ہیں', ar: 'الأغنياء أفضل' }, isCorrect: false },
            { id: '3', text: { en: 'Arabs are superior to all', ur: 'عرب سب سے افضل ہیں', ar: 'العرب أفضل من الجميع' }, isCorrect: false },
            { id: '4', text: { en: 'Kings are higher', ur: 'بادشاہ اونچے ہیں', ar: 'الملوك أعلى شأناً' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q15',
          type: 'mcq',
          question: {
            en: 'What two heavy, unalterable sources did Prophet Muhammad ﷺ leave behind for us to never stray if held fast?',
            ur: 'آپ ﷺ نے ہمارے لیے کن دو مضبوط سرچشموں کو چھوڑنے کی وصیت فرمائی تاکہ ہم گمراہ نہ ہوں؟',
            ar: 'ما هما الثقلان المصدران اللذان تركهما النبي ﷺ لن نضل إن تمسكنا بهما أبداً؟',
          },
          explanation: {
            en: 'The Book of Allah (The Quran) and the Sunnah of Prophet Muhammad ﷺ.',
            ur: 'اللہ کی کتاب (قرآنِ مجید) اور نبی اکرم ﷺ کی سنت۔',
            ar: 'كتاب الله وسنة نبيه ﷺ.',
          },
          options: [
            { id: '1', text: { en: 'The Quran and the Prophet\'s Sunnah', ur: 'قرآنِ مجید اور سنتِ نبوی ﷺ', ar: 'كتاب الله وسنة رسوله ﷺ' }, isCorrect: true },
            { id: '2', text: { en: 'Gold and silver', ur: 'سونا اور چاندی', ar: 'الذهب والفضة' }, isCorrect: false },
            { id: '3', text: { en: 'Houses and land', ur: 'مکانات اور زمین', ar: 'البيوت والأراضي' }, isCorrect: false },
            { id: '4', text: { en: 'Philosophical books', ur: 'فلسفے کی کتابیں', ar: 'كتب الفلسفة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q16',
          type: 'true_false',
          question: {
            en: 'Is sending Durood and Salaam (Salawat) upon Prophet Muhammad ﷺ commanded in the Holy Quran?',
            ur: 'کیا قرآنِ پاک میں نبی کریم ﷺ پر درود و سلام بھیجنے کا صریح حکم موجود ہے؟',
            ar: 'هل الصلاة والسلام على النبي ﷺ أمرٌ مذكورٌ ومأمورٌ به في القرآن الكريم؟',
          },
          explanation: {
            en: 'Yes! Surah Al-Ahzab (33:56): "Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings upon him and salute him with worthy greetings."',
            ur: 'جی ہاں! سورۃ الاحزاب میں ارشاد ہے: "ان اللہ وملائکتہ یصلون علی النبی..."۔',
            ar: 'نعم! قال تعالى: "إن الله وملائكته يصلون على النبي يا أيها الذين آمنوا صلوا عليه وسلموا تسليماً".',
          },
          options: [
            { id: '1', text: { en: 'True (Surah Al-Ahzab 33:56)', ur: 'سچ (سورۃ الاحزاب میں واضح حکم ہے)', ar: 'صحيح (سورة الأحزاب 56)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q17',
          type: 'mcq',
          question: {
            en: 'At what age did Prophet Muhammad ﷺ complete his earthly mission and pass away in Madinah?',
            ur: 'ہمارے پیارے آقا حضرت محمد مصطفیٰ ﷺ کس عمر مبارک میں مدینہ منورہ میں وصال فرما گئے؟',
            ar: 'في أي سن تُوفي الرسول الكريم ﷺ بالمدينة المنورة بعد أداء الأمانة؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ passed away at the age of 63 in 11 AH (632 CE).',
            ur: 'آپ ﷺ 63 سال کی عمر مبارک میں 11 ہجری کو وصال فرما گئے۔',
            ar: 'تُوفي النبي ﷺ عن عمر 63 سنة في السنة 11 هجرية.',
          },
          options: [
            { id: '1', text: { en: '63 Years old', ur: '63 سال کی عمر میں', ar: '63 سنة' }, isCorrect: true },
            { id: '2', text: { en: '40 Years old', ur: '40 سال', ar: '40 سنة' }, isCorrect: false },
            { id: '3', text: { en: '70 Years old', ur: '70 سال', ar: '70 سنة' }, isCorrect: false },
            { id: '4', text: { en: '80 Years old', ur: '80 سال', ar: '80 سنة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q18',
          type: 'mcq',
          question: {
            en: 'What is the "Sunnah"?',
            ur: '"سنت" کا کیا مطلب ہے؟',
            ar: 'ما هي "السنة" النبوية الشريفة؟',
          },
          explanation: {
            en: 'Sunnah refers to the teachings, actions, sayings, character, and silent approvals of Prophet Muhammad ﷺ.',
            ur: 'سنت سے مراد آپ ﷺ کے اقوال، افعال، سیرت، اخلاق اور تقریری صحائف ہیں۔',
            ar: 'السنة هي كل ما أُثر عن النبي ﷺ من قول أو فعل أو تقرير أو صفة.',
          },
          options: [
            { id: '1', text: { en: 'Sayings, actions, & teachings of Prophet Muhammad ﷺ', ur: 'آپ ﷺ کے مبارک ارشادات، افعال اور طریقہ زندگی', ar: 'أقوال وأفعال وتقارير النبي ﷺ' }, isCorrect: true },
            { id: '2', text: { en: 'Cultural traditions', ur: 'علاقائی روایت', ar: 'عادات تقاليد' }, isCorrect: false },
            { id: '3', text: { en: 'Poetry', ur: 'شاعری', ar: 'الشعر' }, isCorrect: false },
            { id: '4', text: { en: 'Old stories', ur: 'قدیم کہانیاں', ar: 'قصص قديمة' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q19',
          type: 'true_false',
          question: {
            en: 'Is Prophet Muhammad ﷺ the Seal of the Prophets (Khatam an-Nabiyyin) with no prophets coming after him?',
            ur: 'کیا حضرت محمد مصطفیٰ ﷺ خاتم النبیین ہیں اور آپ کے بعد کوئی نبی نہیں آئے گا؟',
            ar: 'هل النبي محمد ﷺ هو خاتم النبيين والمرسلين ولا نبي بعده؟',
          },
          explanation: {
            en: 'Yes! The Quran proclaims: "Muhammad is not the father of any man among you, but he is the Messenger of Allah and the Seal of the Prophets" (33:40).',
            ur: 'جی ہاں! آپ ﷺ خاتم النبیین ہیں اور سلسلہِ نبوت آپ پر مکمل ہو چکا ہے۔',
            ar: 'نعم! قال تعالى: "ولكن رسول الله وخاتم النبيين".',
          },
          options: [
            { id: '1', text: { en: 'True (Final Messenger of Allah)', ur: 'سچ (آپ اللہ کے آخری اور خاتم الانبیاء ہیں)', ar: 'صحيح (خاتم الأنبياء والمرسلين)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c10_q20',
          type: 'mcq',
          question: {
            en: 'What is the best way to demonstrate our love for Prophet Muhammad ﷺ every day?',
            ur: 'نبی اکرم ﷺ سے سچی محبت کا روزمرہ عملی اظہار کس طرح ہوتا ہے؟',
            ar: 'ما هي أفضل طريقة عملية لإظهار محبتنا للنبي ﷺ يومياً؟',
          },
          explanation: {
            en: 'By sending Durood on him, adopting his Sunnah, practicing good manners, and obeying Allah\'s commands.',
            ur: 'آپ ﷺ پر کثرت سے درود و سلام بھیج کر، آپ کی سنت پر عمل کر کے اور اخلاق سنوار کر۔',
            ar: 'بالصلاة عليه واتباع سنته والتخلق بأخلاقه وطاعة الله.',
          },
          options: [
            { id: '1', text: { en: 'Reciting Durood, following his Sunnah, and practicing Akhlaq', ur: 'کثرت سے درود پڑھنا، سنت پر عمل کرنا اور اچھے اخلاق اپنایا', ar: 'كثرة الصلاة عليه واتباع سنته وحسن الخلق' }, isCorrect: true },
            { id: '2', text: { en: 'Only wearing green clothes once a year', ur: 'سال میں ایک دن ہرا لباس پہننا', ar: 'لبس الأخضر مرة بالسنة' }, isCorrect: false },
            { id: '3', text: { en: 'Talking without doing good deeds', ur: 'بغیر عمل کے باتیں کرنا', ar: 'الحديث دون عمل' }, isCorrect: false },
            { id: '4', text: { en: 'None of the above', ur: 'ان میں سے کوئی نہیں', ar: 'لا شيء مما سبق' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

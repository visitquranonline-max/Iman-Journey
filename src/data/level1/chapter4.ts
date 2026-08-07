import { Category } from '../../types';

export const chapter4: Category = {
  id: 'lvl1_cat4',
  number: 4,
  title: {
    en: 'Chapter 4: The World of Angels',
    ur: 'باب 4: فرشتوں کی نورانی دنیا',
    ar: 'الفصل 4: عالم الملائكة',
  },
  description: {
    en: 'Explore the noble world of Angels: their creation from light, pure qualities, constant obedience, and major named angels and their divine duties.',
    ur: 'فرشتوں کی نورانی دنیا، ان کی خصوصیات، صفات، اطاعت اور مشہور فرشتوں اور ان کی ذمہ داریوں کو تفصیلاً جانیں۔',
    ar: 'استكشف عالم الملائكة الكرام: خلقهم من نور، صفاتهم، طاعتهم الدائمة، وأشهرهم ومهامهم العظيمة.',
  },
  iconName: 'Sparkles',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat4_les1',
      title: {
        en: 'Attributes & Duties of Allah\'s Angels',
        ur: 'فرشتوں کی صفات اور ذمہ داریاں',
        ar: 'صفات ملائكة الله ومهامهم',
      },
      summary: {
        en: 'Angels are noble creations created by Allah from light (Noor). They never disobey Allah and carry out His commands continuously.',
        ur: 'فرشتے اللہ کی معزز اور نورانی مخلوق ہیں جو کبھی اللہ کی نافرمانی نہیں کرتے اور ہر وقت اس کے احکام کی تعمیل کرتے ہیں۔',
        ar: 'الملائكة خلق كرام خلقهم الله من نور، لا يعصون الله ما أمرهم ويفعلون ما يؤمرون.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c4_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, what are angels made of, and do they eat or sleep like us?',
            ur: 'شیخ طارق، فرشتے کس چیز سے بنے ہیں اور کیا وہ بھی ہماری طرح کھاتے پیتے اور سوتے ہیں؟',
            ar: 'يا شيخ طارق، مم خُلق الملائكة؟ وهل يأكلون أو ينامون مثلنا؟',
          },
          sceneIllustration: 'Sparkles',
        },
        {
          id: 'c4_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Prophet Muhammad ﷺ informed us that Allah created angels from pure Light (Noor)! They do not eat, drink, sleep, or have physical desires. They have wings and worship Allah constantly without tiring.',
            ur: 'نبی کریم ﷺ نے فرمایا کہ اللہ نے فرشتوں کو نور سے پیدا کیا۔ وہ نہ کھاتے ہیں، نہ پیتے ہیں، نہ سوتے ہیں اور ہر وقت اللہ کی نوری پروں کے ساتھ عبادت میں مشغول رہتے ہیں۔',
            ar: 'أخبرنا النبي ﷺ أن الله خلق الملائكة من نور! لا يأكلون ولا يشربون ولا ينامون، يسبحون الليل والنهار لا يفترون.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Angels are created from Light (Noor) and never sin or disobey Allah.',
            ur: 'فرشتے نور سے بنے ہیں اور وہ کبھی گناہ یا اللہ کی نافرمانی نہیں کرتے۔',
            ar: 'الملائكة مخلُوقون من نور ولا يعصون الله أبداً.',
          },
        },
        {
          id: 'c4_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Who are the greatest famous angels and what are their duties?',
            ur: 'سب سے زیادہ مشہور فرشتے کون سے ہیں اور ان کے کیا کیا کام ہیں؟',
            ar: 'من هم أعظم الملائكة المشهورين وما هي مهامهم؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'c4_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Jibreel (AS) brought Revelation to Prophets; Mikaeel (AS) oversees rain and sustenance; Israfeel (AS) will blow the Trumpet for the Last Day; Malak al-Mawt takes souls; Kiraman Katibin write our deeds; Munkar and Nakir question in the grave.',
            ur: 'حضرت جبرائیل علیہ السلام انبیاء پر وحی لاتے تھے؛ میکائیل علیہ السلام بارش اور روزی کے نگہبان ہیں؛ اسرافیل علیہ السلام صور پھونکیں گے؛ ملک الموت روح قبض کرتے ہیں؛ کراماً کاتبین ہمارے اعمال لکھتے ہیں۔',
            ar: 'جبريل عليه السلام ينزل بالوحي؛ ميكائيل موكل بالمطر والرزق؛ إسرافيل ينفخ في الصور؛ ملك الموت يقبض الأرواح؛ والكرام الكاتبون يكتبون الأعمال.',
          },
          sceneIllustration: 'BookOpen',
          keyPoint: {
            en: 'Every person has noble guardian angels recording their deeds day and night.',
            ur: 'ہر انسان کے ساتھ کراماً کاتبین فرشتے دن رات اعمال لکھتے ہیں۔',
            ar: 'لكل إنسان ملائكة كرام يكتبون أعماله ليلاً ونهاراً.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Angels are created from Light (Noor) and possess tremendous speed and beauty.',
          ur: 'فرشتے نور سے پیدا کیے گئے ہیں اور ان کے پاس زبردست رفتار اور طاقت ہے۔',
          ar: 'خُلق الملائكة من نور ولديهم قوة وسرعة عظيمة.',
        },
        {
          en: 'Jibreel (AS) is the leader of angels and brought the Quran to Prophet Muhammad ﷺ.',
          ur: 'حضرت جبرائیل علیہ السلام تمام فرشتوں کے سردار ہیں جو نبی کریم ﷺ پر قرآن لائے۔',
          ar: 'جبريل عليه السلام سيد الملائكة وهو من نزل بالقرآن على النبي ﷺ.',
        },
        {
          en: 'Kiraman Katibin (Noble Writers) record every good and bad deed we do.',
          ur: 'کراماً کاتبین ہمارے ہر اچھے اور برے عمل کو تحریر کرتے ہیں۔',
          ar: 'الكرام الكاتبون يسجلون كل حسنة وسيئة نعملها.',
        },
        {
          en: 'Angels ask Allah for forgiveness for believers who seek knowledge and do good.',
          ur: 'فرشتے علم حاصل کرنے والے اور نیکی کرنے والے اہل ایمان کے لیے مغفرت کی دعائیں کرتے ہیں۔',
          ar: 'الملائكة تستغفر للمؤمنين وطالب العلم والدعاة إلى الخير.',
        },
      ],
      quiz: [
        {
          id: 'c4_q1',
          type: 'mcq',
          question: {
            en: 'What material did Allah create angels from?',
            ur: 'اللہ تعالیٰ نے فرشتوں کو کس چیز سے پیدا فرمایا؟',
            ar: 'مِمَّ خلق اللهُ الملائكةَ؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ stated in Sahih Muslim that angels were created from Light (Noor).',
            ur: 'حدیث مبارکہ میں ہے کہ فرشتوں کو نور سے پیدا کیا گیا۔',
            ar: 'في الحديث الصحيح: "خُلقت الملائكة من نور".',
          },
          options: [
            { id: '1', text: { en: 'Light (Noor)', ur: 'نور سے', ar: 'من نور' }, isCorrect: true },
            { id: '2', text: { en: 'Smokeless Fire', ur: 'بے دھواں آگ سے', ar: 'من نار' }, isCorrect: false },
            { id: '3', text: { en: 'Clay', ur: 'مٹی سے', ar: 'من طين' }, isCorrect: false },
            { id: '4', text: { en: 'Water only', ur: 'صرف پانی سے', ar: 'من ماء فقط' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q2',
          type: 'mcq',
          question: {
            en: 'Which Angel was responsible for bringing Allah\'s divine revelation (Wahyi) to Prophets?',
            ur: 'انبیائے کرام کے پاس اللہ کا پیغام اور وحی لانے پر کون سے فرشتے مقرر تھے؟',
            ar: 'من هو الملك الموكل بالنزول بالوحي على الأنبياء عليهم السلام؟',
          },
          explanation: {
            en: 'Angel Jibreel (Gabriel) AS brought revelations to Prophets, including the Quran to Prophet Muhammad ﷺ.',
            ur: 'حضرت جبرائیل علیہ السلام انبیاء پر وحی اور قرآن پاک لاتے تھے۔',
            ar: 'جبريل عليه السلام هو الروح الأمين الذي نزل بالوحي.',
          },
          options: [
            { id: '1', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Angel Mikaeel (AS)', ur: 'حضرت میکائیل علیہ السلام', ar: 'ميكائيل عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Angel Israfeel (AS)', ur: 'حضرت اسرافیل علیہ السلام', ar: 'إسرافيل عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Angel Ridwan (AS)', ur: 'حضرت رضوان علیہ السلام', ar: 'رضوان عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q3',
          type: 'mcq',
          question: {
            en: 'Which Angel is tasked by Allah with managing rain, weather, and sustenance (Rizq)?',
            ur: 'بارش، ہواؤں اور مخلوقات کے رزق کے انتظام پر کون سے فرشتے مقرر ہیں؟',
            ar: 'من هو الملك الموكل بالمطر والنبات والأرزاق؟',
          },
          explanation: {
            en: 'Angel Mikaeel (Michael) AS oversees rain and provisions.',
            ur: 'حضرت میکائیل علیہ السلام بارش اور روزی کی تقسیم پر مقرر ہیں۔',
            ar: 'ميكائيل عليه السلام موكل بالمطر والرزق.',
          },
          options: [
            { id: '1', text: { en: 'Angel Mikaeel (AS)', ur: 'حضرت میکائیل علیہ السلام', ar: 'ميكائيل عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Angel Malik', ur: 'فرشتہ مالک', ar: 'مالك عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Munkar', ur: 'منکر', ar: 'منكر' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q4',
          type: 'mcq',
          question: {
            en: 'Which Angel will blow the Trumpet (Soor) on the Day of Judgment?',
            ur: 'قیامت کے دن صور پھونکنے کی عظیم ذمہ داری کس فرشتے کے سپرد ہے؟',
            ar: 'من هو الملك الموكل بالنفخ في الصور يوم القيامة؟',
          },
          explanation: {
            en: 'Angel Israfeel (Raphael) AS holds the Trumpet ready to blow at Allah\'s command.',
            ur: 'حضرت اسرافیل علیہ السلام صور پھونکیں گے۔',
            ar: 'إسرافيل عليه السلام ينفخ في الصور بإذن الله.',
          },
          options: [
            { id: '1', text: { en: 'Angel Israfeel (AS)', ur: 'حضرت اسرافیل علیہ السلام', ar: 'إسرافيل عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Angel Mikaeel (AS)', ur: 'حضرت میکائیل علیہ السلام', ar: 'ميكائيل عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Nakir', ur: 'نکیر', ar: 'نكير' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q5',
          type: 'mcq',
          question: {
            en: 'What is the Angel of Death called in Islam?',
            ur: 'اسلام میں روح قبض کرنے والے فرشتے کو کیا کہا جاتا ہے؟',
            ar: 'ما اسم الملك الموكل بقبض الأرواح في القرآن والسنة؟',
          },
          explanation: {
            en: 'He is called Malak al-Mawt (The Angel of Death).',
            ur: 'ان کا نام ملک الموت (موت کا فرشتہ) ہے۔',
            ar: 'يسمى في القرآن ملك الموت.',
          },
          options: [
            { id: '1', text: { en: 'Malak al-Mawt (Angel of Death)', ur: 'ملک الموت', ar: 'ملك الموت' }, isCorrect: true },
            { id: '2', text: { en: 'Ridwan', ur: 'رضوان', ar: 'رضوان' }, isCorrect: false },
            { id: '3', text: { en: 'Malik', ur: 'مالک', ar: 'مالك' }, isCorrect: false },
            { id: '4', text: { en: 'Munkar', ur: 'منکر', ar: 'منكر' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q6',
          type: 'mcq',
          question: {
            en: 'What are the two Angels on our right and left shoulders who write our deeds called?',
            ur: 'ان دو فرشتوں کو کیا کہتے ہیں جو ہمارے دائیں اور بائیں کندھے پر ہمارے اعمال لکھتے ہیں؟',
            ar: 'ما اسم الملكين اللذين يكتبان حسنات الإنسان وسيئاته؟',
          },
          explanation: {
            en: 'They are called Kiraman Katibin (Honorable Writers). Raqib and Atid.',
            ur: 'ان کو کراماً کاتبین (معزز لکھنے والے) کہا جاتا ہے۔',
            ar: 'يسميان الكرام الكاتبين (رقيب وعتيد).',
          },
          options: [
            { id: '1', text: { en: 'Kiraman Katibin (Raqib and Atid)', ur: 'کراماً کاتبین (رقیب اور عتید)', ar: 'الكرام الكاتبون (رقيب وعتيد)' }, isCorrect: true },
            { id: '2', text: { en: 'Munkar and Nakir', ur: 'منکر اور نکیر', ar: 'منكر ونكير' }, isCorrect: false },
            { id: '3', text: { en: 'Jibril and Mikaeel', ur: 'جبرائیل اور میکائیل', ar: 'جبريل وميكائيل' }, isCorrect: false },
            { id: '4', text: { en: 'Harut and Marut', ur: 'ہاروت اور ماروت', ar: 'هاروت وماروت' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q7',
          type: 'mcq',
          question: {
            en: 'Which two Angels question people in the grave (Barzakh)?',
            ur: 'قبر (برزخ) میں انسان سے سوال و جواب کرنے والے دو فرشتے کون ہیں؟',
            ar: 'من هما الملكان اللذان يسألان الميت في القبر؟',
          },
          explanation: {
            en: 'Munkar and Nakir ask three questions in the grave about Lord, Religion, and Prophet.',
            ur: 'منکر اور نکیر قبر میں تین سوالات (رب، دین اور نبی کے متعلق) پوچھتے ہیں۔',
            ar: 'منكر ونكير يسألان العبد في قبره عن ربه ودينه ونبيه.',
          },
          options: [
            { id: '1', text: { en: 'Munkar and Nakir', ur: 'منکر اور نکیر', ar: 'منكر ونكير' }, isCorrect: true },
            { id: '2', text: { en: 'Jibreel and Mikaeel', ur: 'جبرائیل اور میکائیل', ar: 'جبريل وميكائيل' }, isCorrect: false },
            { id: '3', text: { en: 'Israfeel and Malik', ur: 'اسرافیل اور مالک', ar: 'إسرافيل ومالك' }, isCorrect: false },
            { id: '4', text: { en: 'Ridwan and Raqib', ur: 'رضوان اور رقیب', ar: 'رضوان ورقيب' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q8',
          type: 'true_false',
          question: {
            en: 'Do Angels ever disobey Allah\'s commands?',
            ur: 'کیا فرشتے کبھی اللہ کے کسی حکم کی نافرمانی کرتے ہیں؟',
            ar: 'هل يعصي الملائكةُ اللهَ في أي أمر؟',
          },
          explanation: {
            en: 'No! Surah At-Tahrim (66:6) tells us: "They do not disobey Allah in what He commands them but do what they are commanded."',
            ur: 'جی نہیں! قرآن پاک میں ہے: وہ اللہ کے احکام کی نافرمانی نہیں کرتے اور وہی کرتے ہیں جس کا حکم دیا جائے۔',
            ar: 'لا! قال تعالى: "لا يعصون الله ما أمرهم ويفعلون ما يؤمرون".',
          },
          options: [
            { id: '1', text: { en: 'No, never disobey', ur: 'جی نہیں، کبھی نافرمانی نہیں کرتے', ar: 'لا، لا يعصون الله أبداً' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, sometimes', ur: 'جی ہاں، کبھی کبھی', ar: 'نعم بعض الأحيان' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q9',
          type: 'true_false',
          question: {
            en: 'Do Angels have gender (male or female) or need food and drink?',
            ur: 'کیا فرشتوں کی کوئی جنس (نر یا مادہ) ہوتی ہے یا وہ کھانا پینا کھاتے ہیں؟',
            ar: 'هل للملائكة جنس (ذكر أو أنثى) أو يحتاجون للأكل والشرب؟',
          },
          explanation: {
            en: 'No, angels are free from gender, eating, drinking, and human bodily desires.',
            ur: 'جی نہیں، فرشتے مذکر و مؤنث اور کھانے پینے کی حاجات سے پاک ہیں۔',
            ar: 'لا، الملائكة لا يوصفون بذكورة ولا أُنُوثة ولا يأكلون ولا يشربون.',
          },
          options: [
            { id: '1', text: { en: 'No gender, no food/drink needed', ur: 'کوئی جنس نہیں، کھانے پینے کی حاجت نہیں', ar: 'ليس لهم جنس ولا يحتاجون طعاماً ولا شراباً' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, they eat like us', ur: 'جی ہاں، ہماری طرح کھاتے ہیں', ar: 'نعم يأكلون مثلنا' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q10',
          type: 'mcq',
          question: {
            en: 'Who is the guardian Angel of Jannah (Paradise)?',
            ur: 'جنت کا خازن اور نگران فرشتہ کون ہے؟',
            ar: 'من هو الملك الخازن للجنة؟',
          },
          explanation: {
            en: 'Angel Ridwan (AS) is the keeper of Jannah.',
            ur: 'حضرت رضوان علیہ السلام جنت کے دربان اور نگہبان ہیں۔',
            ar: 'رضوان عليه السلام هو خازن الجنة.',
          },
          options: [
            { id: '1', text: { en: 'Angel Ridwan (AS)', ur: 'حضرت رضوان علیہ السلام', ar: 'رضوان عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Angel Malik (AS)', ur: 'حضرت مالک علیہ السلام', ar: 'مالك عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Angel Israfeel', ur: 'اسرافیل', ar: 'إسرافيل' }, isCorrect: false },
            { id: '4', text: { en: 'Munkar', ur: 'منکر', ar: 'منكر' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q11',
          type: 'mcq',
          question: {
            en: 'Who is the keeper Angel of Jahannam (Hellfire)?',
            ur: 'جہنم کے خازن اور نگران فرشتے کا نام کیا ہے؟',
            ar: 'ما اسم الملك الخازن للنار (جهنم)؟',
          },
          explanation: {
            en: 'Angel Malik (AS) is the chief keeper of Hellfire.',
            ur: 'حضرت مالک علیہ السلام جہنم کے نگران فرشتے ہیں۔',
            ar: 'مالك عليه السلام هو خازن النار.',
          },
          options: [
            { id: '1', text: { en: 'Angel Malik (AS)', ur: 'حضرت مالک علیہ السلام', ar: 'مالك عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Angel Ridwan (AS)', ur: 'حضرت رضوان علیہ السلام', ar: 'رضوان عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Jibreel (AS)', ur: 'جبرائیل', ar: 'جبريل' }, isCorrect: false },
            { id: '4', text: { en: 'Atid', ur: 'عتید', ar: 'عتيد' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q12',
          type: 'true_false',
          question: {
            en: 'Do angels lower their wings in respect for a student seeking Islamic knowledge?',
            ur: 'کیا فرشتے علمِ دین حاصل کرنے والے طالب علم کے لیے خوشی سے اپنے پر بچھاتے ہیں؟',
            ar: 'هل تضع الملائكة أجنحتها لرضا طالب العلم بما يطلب؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "The angels lower their wings for the seeker of knowledge, out of pleasure for what he does."',
            ur: 'جی ہاں! حدیث میں ہے کہ فرشتے طالب علم کے قدموں تلے اپنے پر بچھاتے ہیں۔',
            ar: 'نعم! قال رسول الله ﷺ: "إن الملائكة لتضع أجنحتها لطالب العلم رضا بما يصنع".',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q13',
          type: 'mcq',
          question: {
            en: 'Do angels possess wings as described in Surah Fatir in the Quran?',
            ur: 'کیا فرشتوں کے پر ہوتے ہیں جیسا کہ سورہ فاطر میں قرآن پاک نے ذکر فرمایا ہے؟',
            ar: 'هل للملائكة أجنحة كما ورد في سورة فاطر بالقرآن الكريم؟',
          },
          explanation: {
            en: 'Yes, Allah created angels with two, three, four, or many more wings (Angel Jibreel had 600 wings!).',
            ur: 'جی ہاں! قرآن پاک میں ان کے پروں کا ذکر ہے (حضرت جبرائیل کے 600 پر تھے)۔',
            ar: 'نعم، قال تعالى: "جاعل الملائكة رسلاً أولي أجنحة مثنى وثلاث ورُباع".',
          },
          options: [
            { id: '1', text: { en: 'Yes, 2, 3, 4 or many more wings', ur: 'جی ہاں، 2، 3، 4 اور اس سے بھی زیادہ پر', ar: 'نعم، أولي أجنحة مثنى وثلاث ورباع وأكثر' }, isCorrect: true },
            { id: '2', text: { en: 'No wings at all', ur: 'بالکل کوئی پر نہیں ہوتے', ar: 'ليس لهم أجنحة' }, isCorrect: false },
            { id: '3', text: { en: 'Only artificial feathers', ur: 'صرف مصنوعی پر', ar: 'ريش صناعي فقط' }, isCorrect: false },
            { id: '4', text: { en: 'Metal propellers', ur: 'دھاتی پروانے', ar: 'مراوح معدنية' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q14',
          type: 'true_false',
          question: {
            en: 'Are there immensely many angels worshiping Allah that only Allah knows their exact total number?',
            ur: 'کیا فرشتوں کی تعداد اتنی زیادہ ہے کہ صرف اللہ ہی ان کی صحیح گنتی جانتا ہے؟',
            ar: 'هل عدد الملائكة كثير جداً لا يعلم حصرهم إلا الله؟',
          },
          explanation: {
            en: 'Yes! The Quran states: "And none knows the soldiers of your Lord except Him."',
            ur: 'جی ہاں! قرآن میں ہے: اور آپ کے رب کے لشکروں کو اس کے سوا کوئی نہیں جانتا۔',
            ar: 'نعم! قال تعالى: "وما يعلم جنود ربك إلا هو".',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q15',
          type: 'mcq',
          question: {
            en: 'What is Al-Bait al-Ma\'mur in the heavens where 70,000 angels pray every single day?',
            ur: 'آسمانوں میں "البيت المعمور" کیا ہے جہاں روزانہ 70 ہزار فرشتے طواف اور عبادت کرتے ہیں؟',
            ar: 'ما هو البيت المعمور في السماء الذي يصلي فيه سبعون ألف ملك كل يوم؟',
          },
          explanation: {
            en: 'Al-Bait al-Ma\'mur is the heavenly Ka\'bah directly above the Ka\'bah on earth, where 70,000 new angels enter daily.',
            ur: 'البيت المعمور آسمانوں میں خانہ کعبہ کا قبلہ ہے جہاں روزانہ 70 ہزار نئے فرشتے عبادت کرتے ہیں۔',
            ar: 'البيت المعمور هو كعبة أهل السماء يدخله كل يوم 70 ألف ملك لا يعودون إليه.',
          },
          options: [
            { id: '1', text: { en: 'The Heavenly Ka\'bah directly above the earthly Ka\'bah', ur: 'آسمانوں میں خانہ کعبہ کی سیدھ میں فرشتوں کا قبلہ', ar: 'كعبة أهل السماء فوق الكعبة المشرفة' }, isCorrect: true },
            { id: '2', text: { en: 'A mountain on earth', ur: 'زمین پر ایک پہاڑ', ar: 'جبل على الأرض' }, isCorrect: false },
            { id: '3', text: { en: 'A palace in Rome', ur: 'روم کا محل', ar: 'قصر روماني' }, isCorrect: false },
            { id: '4', text: { en: 'An island', ur: 'ایک جزیرہ', ar: 'جزيرة' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q16',
          type: 'mcq',
          question: {
            en: 'What happens to the bad deed written by the angel on the left if a Muslim repents sincerely?',
            ur: 'اگر ایک مسلمان گناہ کے بعد سچی توبہ کر لے تو بائیں کندھے کا فرشتہ لکھے ہوئے گناہ کے ساتھ کیا کرتا ہے؟',
            ar: 'ماذا يحدث للسيئة التي كتبها ملك اليسار إذا استغفر المسلم وتاب؟',
          },
          explanation: {
            en: 'By Allah\'s mercy, when a person repents, Allah erases the bad deed completely.',
            ur: 'اللہ کی رحمت سے سچی توبہ کرنے پر وہ گناہ بالکل مٹا دیا جاتا ہے۔',
            ar: 'برحمة الله، إذا تاب العبد يمحي الله السيئة تماماً.',
          },
          options: [
            { id: '1', text: { en: 'Allah erases the bad deed completely', ur: 'اللہ تعالیٰ اس گناہ کو بالکل مٹا دیتا ہے', ar: 'يمحوها الله بفضله ورحمته' }, isCorrect: true },
            { id: '2', text: { en: 'It stays forever and multiplies', ur: 'وہ ہمیشہ رہتا ہے اور بڑھتا ہے', ar: 'تبقى وتتضاعف' }, isCorrect: false },
            { id: '3', text: { en: 'It turns into stone', ur: 'وہ پتھر بن جاتا ہے', ar: 'تتحول لحجر' }, isCorrect: false },
            { id: '4', text: { en: 'Nothing changes', ur: 'کچھ تبدیل نہیں ہوتا', ar: 'لا شيء يتغير' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q17',
          type: 'true_false',
          question: {
            en: 'Can angels take human form when Allah permits them to deliver messages?',
            ur: 'کیا اللہ کے حکم سے فرشتے انسان کی شکل میں ظاہر ہو سکتے ہیں؟',
            ar: 'هل يستطيع الملائكة التمثل بصورة بشر بإذن الله؟',
          },
          explanation: {
            en: 'Yes, Angel Jibreel came to Prophet Muhammad ﷺ and Maryam (AS) in the form of a man.',
            ur: 'جی ہاں، حضرت جبرائیل علیہ السلام انسانی روپ میں تشریف لائے تھے۔',
            ar: 'نعم، تمثل جبريل عليه السلام برجل أمام النبي ﷺ ومريم.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q18',
          type: 'mcq',
          question: {
            en: 'Do angels pray for Allah\'s blessings upon those who send Salawat (Darood) upon Prophet Muhammad ﷺ?',
            ur: 'کیا فرشتے ان لوگوں کے لیے رحمت کی دعا کرتے ہیں جو نبی کریم ﷺ پر درود شریف بھیجتے ہیں؟',
            ar: 'هل تصلي الملائكة وتستغفر لمن يصلي على النبي ﷺ؟',
          },
          explanation: {
            en: 'Yes! Angels pray for anyone sending blessings upon Prophet Muhammad ﷺ.',
            ur: 'جی ہاں! فرشتے درود شریف پڑھنے والے کے لیے درجات کی بلندی اور استغفار کرتے ہیں۔',
            ar: 'نعم! تصلي الملائكة على من يصلي على النبي ﷺ.',
          },
          options: [
            { id: '1', text: { en: 'Yes, angels pray for them continuously', ur: 'جی ہاں، فرشتے ان کے لیے دعائے رحمت کرتے ہیں', ar: 'نعم وتستغفر لهم الملائكة' }, isCorrect: true },
            { id: '2', text: { en: 'No', ur: 'جی نہیں', ar: 'لا' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q19',
          type: 'mcq',
          question: {
            en: 'Which angels carry the Glorious Throne (Arsh) of Allah?',
            ur: 'اللہ تعالیٰ کے عظیم عرش کو اٹھانے والے فرشتوں کو کیا کہا جاتا ہے؟',
            ar: 'ما اسم الملائكة الموكلين بحمل العرش؟',
          },
          explanation: {
            en: 'Hamalat al-Arsh (Carriers of the Throne).',
            ur: 'حملۃ العرش (عرشِ الٰہی کو اٹھانے والے فرشتے)۔',
            ar: 'حملة العرش.',
          },
          options: [
            { id: '1', text: { en: 'Hamalat al-Arsh (Carriers of the Throne)', ur: 'حملۃ العرش', ar: 'حملة العرش' }, isCorrect: true },
            { id: '2', text: { en: 'Munkar and Nakir', ur: 'منکر اور نکیر', ar: 'منكر ونكير' }, isCorrect: false },
            { id: '3', text: { en: 'Atid', ur: 'عتید', ar: 'عتيد' }, isCorrect: false },
            { id: '4', text: { en: 'Harut', ur: 'ہاروت', ar: 'هاروت' }, isCorrect: false },
          ],
        },
        {
          id: 'c4_q20',
          type: 'true_false',
          question: {
            en: 'Does believing in angels help us remember that we are never alone and our deeds matter?',
            ur: 'کیا فرشتوں پر ایمان سے انسان کو یاد رہتا ہے کہ وہ اکیلا نہیں ہے اور اس کے اعمال کا حساب ہے؟',
            ar: 'هل الإيمان بالملائكة يذكرنا بأننا لسنا وحدنا وأن أعمالنا مسجلة؟',
          },
          explanation: {
            en: 'Yes! Knowing noble angels write our actions gives us comfort and encourages good manners.',
            ur: 'جی ہاں! فرشتوں کی موجودگی کا احساس انسان کو نیک عمل کی ترغیب دیتا ہے۔',
            ar: 'نعم! الإيمان بالملائكة يبعث على المراقبة والعمل الصالح.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

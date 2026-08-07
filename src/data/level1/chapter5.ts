import { Category } from '../../types';

export const chapter5: Category = {
  id: 'lvl1_cat5',
  number: 5,
  title: {
    en: 'Chapter 5: Prophets of Allah',
    ur: 'باب 5: انبیائے کرام علیہم السلام',
    ar: 'الفصل 5: أنبياء الله ورسله',
  },
  description: {
    en: 'Learn why Allah sent Prophets to guide humanity, the difference between Nabi and Rasool, and stories of major Messengers.',
    ur: 'اللہ نے انسانوں کی ہدایت کے لیے انبیاء کو کیوں بھیجا، نبی اور رسول میں فرق، اور جلیل القدر انبیاء کی سیرت جانیں۔',
    ar: 'تعلم لماذا أرسل الله الأنبياء لهداية البشرية، والفرق بين النبي والرسول، وسير أولي العزم من الرسل.',
  },
  iconName: 'Crown',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat5_les1',
      title: {
        en: 'The Honored Guides of Humanity',
        ur: 'انسانیت کے رہنما انبیائے کرام',
        ar: 'هداة البشرية المكرمون',
      },
      summary: {
        en: 'Prophets are the most truthful and noble human beings chosen by Allah to guide people from darkness to the light of Tawheed.',
        ur: 'انبیاء کرام اللہ کے منتخب کردہ سب سے سچے اور برگزیدہ انسان ہیں جو لوگوں کو گمراہی سے نکال کر توحید کی روشنی کی طرف لائے۔',
        ar: 'الأنبياء هم أصفياء خلق الله اختارهم الله لهداية الناس من الظلمات إلى نور التوحيد.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c5_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, why did Allah send Prophets to mankind throughout history?',
            ur: 'شیخ طارق، اللہ تعالیٰ نے تمام دور میں انسانیت کے پاس انبیاء کرام کو کیوں بھیجا؟',
            ar: 'يا شيخ طارق، لماذا أرسل الله الأنبياء إلى البشرية عبر التاريخ؟',
          },
          sceneIllustration: 'Crown',
        },
        {
          id: 'c5_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Allah sent Prophets because He loves humanity and wants us to know the truth! Without prophets, humans would be lost without knowing how to worship Allah or live righteously.',
            ur: 'اللہ نے اپنے بندوں پر رحم فرماتے ہوئے انبیاء کو بھیجا تاکہ لوگ گمراہ نہ ہوں۔ انبیاء نے انسانوں کو سچی عبادت، اخلاق اور زندگی کا سیدھا راستہ دکھایا۔',
            ar: 'أرسل الله الأنبياء رحمة منه بالبشر ليعلموهم التوحيد والأخلاق ويعرفوهم بالطريق المستقيم.',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'All Prophets brought the exact same core message: Worship Allah alone without partner.',
            ur: 'تمام انبیاء کی بنیادی دعوت ایک ہی تھی: صرف ایک اللہ کی عبادت کرو اور شرک سے بچو۔',
            ar: 'جميع الأنبياء جاءوا بدعوة واحدة: اعبدوا الله وحده ما لكم من إله غيره.',
          },
        },
        {
          id: 'c5_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What is the difference between a Nabi and a Rasool?',
            ur: 'نبی اور رسول میں کیا بنیادی فرق ہے؟',
            ar: 'ما الفرق بين النبي والرسول؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'c5_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Every Rasool is a Nabi, but a Rasool is given a new Divine Book or Shariah law, while a Nabi continues and revives the previous Prophet\'s teachings! Prophet Muhammad ﷺ is both Nabi and Rasool, and the Seal of All Prophets.',
            ur: 'رسول کو نئی شریعت یا کتاب دی جاتی ہے جبکہ نبی پہلے سے موجود شریعت کی تبلیغ فرماتے ہیں۔ ہمارے آقا حضرت محمد ﷺ آخری نبی اور رسول ہیں۔',
            ar: 'الرسول يُوحى إليه بشريعة جديدة، والنبي يتبع شريعة من قبله. ونبينا محمد ﷺ هو خاتم الأنبياء والمرسلين.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'Prophet Muhammad ﷺ is Khatam an-Nabiyyin - The Final Prophet after whom no prophet will ever come.',
            ur: 'حضرت محمد ﷺ خاتم النبیین ہیں، آپ کے بعد قیامت تک کوئی نیا نبی نہیں آئے گا۔',
            ar: 'النبي محمد ﷺ هو خاتم النبيين ولا نبي بعده إلى يوم القيامة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Adam (AS) is the father of mankind and the first Prophet of Allah.',
          ur: 'حضرت آدم علیہ السلام تمام انسانیت کے باپ اور سب سے پہلے نبی ہیں۔',
          ar: 'آدم عليه السلام هو أبو البشر وأول الأنبياء.',
        },
        {
          en: 'Ulul \'Azm (Messengers of Strong Determination): Nuh, Ibrahim, Musa, Isa, and Muhammad (Peace be upon them).',
          ur: 'اولوالعزم رسول 5 ہیں: نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ۔',
          ar: 'أولو العزم من الرسل خمسة: نوح، إبراهيم، موسى، عيسى، ومحمد عليهم السلام.',
        },
        {
          en: 'Every Prophet was truthful, trustworthy (Al-Ameen), sinless in conveying the message, and kind.',
          ur: 'تمام انبیاء صادق، امین، معصوم عن الخطا اور انتہائی شفیق و مہربان تھے۔',
          ar: 'جميع الأنبياء كان يصفون بالصدق والأمانة والعصمة في التبليغ.',
        },
        {
          en: 'Belief in all Prophets mentioned in the Quran is compulsory for every Muslim.',
          ur: 'قرآن مجید میں مذکور تمام انبیاء کرام پر ایمان لانا ہر مسلمان پر فرض ہے۔',
          ar: 'الإيمان بجميع أنبياء الله المذكورين واجب على كل مسلم.',
        },
      ],
      quiz: [
        {
          id: 'c5_q1',
          type: 'mcq',
          question: {
            en: 'Who was the very first human being and the first Prophet created by Allah?',
            ur: 'سب سے پہلے انسان اور سب سے پہلے نبی کون تھے جنہیں اللہ نے پیدا فرمایا؟',
            ar: 'من هو أول بشر وأول نبي خلقه الله تعالى؟',
          },
          explanation: {
            en: 'Prophet Adam (AS) was the first human and first Prophet.',
            ur: 'حضرت آدم علیہ السلام سب سے پہلے انسان اور پہلے نبی تھے۔',
            ar: 'آدم عليه السلام هو أول البشر وأول الأنبياء.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Adam (AS)', ur: 'حضرت آدم علیہ السلام', ar: 'آدم عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Nuh (AS)', ur: 'حضرت نوح علیہ السلام', ar: 'نوح عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Ibrahim (AS)', ur: 'حضرت ابراہیم علیہ السلام', ar: 'إبراهيم عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Idris (AS)', ur: 'حضرت ادریس علیہ السلام', ar: 'إدريس عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q2',
          type: 'mcq',
          question: {
            en: 'Who is the Last and Final Prophet sent to all mankind?',
            ur: 'تمام انسانوں کے لیے بھیجے گئے آخری اور خاتم الانبیاء کون ہیں؟',
            ar: 'من هو النبي الخاتم المرسل إلى البشرية جمعاء؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ is the Seal of Prophets (Khatam an-Nabiyyin).',
            ur: 'حضرت محمد مصطفیٰ ﷺ خاتم النبیین اور آخری رسول ہیں۔',
            ar: 'محمد ﷺ هو خاتم الأنبياء والمرسلين.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Muhammad ﷺ', ur: 'حضرت محمد مصطفیٰ ﷺ', ar: 'محمد ﷺ' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Isa (AS)', ur: 'حضرت عیسیٰ علیہ السلام', ar: 'عيسى عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Musa (AS)', ur: 'حضرت موسیٰ علیہ السلام', ar: 'موسى عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Dawud (AS)', ur: 'حضرت داؤد علیہ السلام', ar: 'داود عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q3',
          type: 'mcq',
          question: {
            en: 'What core message did ALL Prophets bring to their people?',
            ur: 'تمام انبیاء کرام اپنی اقوام کے پاس کیا بنیادی اور مشترکہ پیغام لے کر آئے؟',
            ar: 'ما هي الرسالة الأساسية المشتركة التي جاء بها جميع الأنبياء؟',
          },
          explanation: {
            en: 'Tawheed: Worship Allah alone without making any partners with Him.',
            ur: 'توحید: صرف ایک اللہ کی عبادت کرنا اور شرک سے پرہیز کرنا۔',
            ar: 'التوحيد: عبادة الله وحده لا شريك له.',
          },
          options: [
            { id: '1', text: { en: 'Tawheed (Worship Allah alone)', ur: 'توحید (صرف ایک اللہ کی بندگی)', ar: 'التوحيد (عبادة الله وحده)' }, isCorrect: true },
            { id: '2', text: { en: 'To build golden statues', ur: 'سونے کے مجسمے بنانا', ar: 'صناعة التماثيل الذهبية' }, isCorrect: false },
            { id: '3', text: { en: 'To seek worldly fame', ur: 'دنیاوی شہرت پانا', ar: 'نيل الشهرة الدنيوية' }, isCorrect: false },
            { id: '4', text: { en: 'To collect taxes', ur: 'ٹیکس جمع کرنا', ar: 'جمع الضرائب' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q4',
          type: 'mcq',
          question: {
            en: 'Which Prophet built the Ark (Great Ship) to save believers from the flood?',
            ur: 'کس پیغمبر نے طوفان سے سچے ایمان والوں کو بچانے کے لیے عظیم کشتی (سفینہ) بنائی؟',
            ar: 'من هو النبي الذي بنى السفينة لنجاة المؤمنين من الطوفان؟',
          },
          explanation: {
            en: 'Prophet Nuh (Noah) AS built the Ark on Allah\'s command.',
            ur: 'حضرت نوح علیہ السلام نے اللہ کے حکم سے کشتی تیار فرمائی۔',
            ar: 'نوح عليه السلام بنى السفينة بأمر الله.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Nuh (AS)', ur: 'حضرت نوح علیہ السلام', ar: 'نوح عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Hud (AS)', ur: 'حضرت ہود علیہ السلام', ar: 'هود عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Saleh (AS)', ur: 'حضرت صالح علیہ السلام', ar: 'صالح عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Lut (AS)', ur: 'حضرت لوط علیہ السلام', ar: 'لوط عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q5',
          type: 'mcq',
          question: {
            en: 'Which Prophet is known as Khalilullah (The Intimate Friend of Allah)?',
            ur: 'کس پیغمبرِ گرامی کا لقب "خلیل اللہ" (اللہ کا سچا دوست) ہے؟',
            ar: 'من هو النبي الملقب بـ "خليل الله"؟',
          },
          explanation: {
            en: 'Prophet Ibrahim (Abraham) AS is titled Khalilullah.',
            ur: 'حضرت ابراہیم علیہ السلام کو خلیل اللہ کہا جاتا ہے۔',
            ar: 'إبراهيم عليه السلام هو خليل الرحمن.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Ibrahim (AS)', ur: 'حضرت ابراہیم علیہ السلام', ar: 'إبراهيم عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Ismail (AS)', ur: 'حضرت اسماعیل علیہ السلام', ar: 'إسماعيل عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Ishaq (AS)', ur: 'حضرت اسحاق علیہ السلام', ar: 'إسحاق عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Ya\'qub (AS)', ur: 'حضرت یعقوب علیہ السلام', ar: 'يعقوب عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q6',
          type: 'mcq',
          question: {
            en: 'Which two Prophets rebuilt the Holy Ka\'bah together in Makkah?',
            ur: 'کن دو جلیل القدر انبیاء نے مل کر مکہ مکرمہ میں خانہ کعبہ کی تعمیرِ نو فرمائی؟',
            ar: 'من هما النبيان اللذان رفعا القواعد من البيت الحرام (الكعبة) بمكة؟',
          },
          explanation: {
            en: 'Prophet Ibrahim (AS) and his son Prophet Ismail (AS) raised the foundations of Ka\'bah.',
            ur: 'حضرت ابراہیم اور ان کے بیٹے حضرت اسماعیل علیہما السلام نے مل کر کعبہ بنایا۔',
            ar: 'إبراهيم وإسماعيل عليهما السلام.',
          },
          options: [
            { id: '1', text: { en: 'Ibrahim (AS) & Ismail (AS)', ur: 'حضرت ابراہیم اور حضرت اسماعیل علیہما السلام', ar: 'إبراهيم وإسماعيل عليهما السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Musa (AS) & Harun (AS)', ur: 'حضرت موسیٰ اور حضرت ہارون علیہما السلام', ar: 'موسى وهارون عليهما السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Dawud (AS) & Sulaiman (AS)', ur: 'حضرت داؤد اور حضرت سلیمان علیہما السلام', ar: 'داود وسليمان عليهما السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Adam (AS) & Seth (AS)', ur: 'حضرت آدم اور حضرت شیث علیہما السلام', ar: 'آدم وشيث عليهما السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q7',
          type: 'mcq',
          question: {
            en: 'Which Prophet was granted the miracle of speaking directly with Allah on Mount Toor (Kalimullah)?',
            ur: 'کوہِ طور پر کس پیغمبر کو اللہ سے براہِ راست کلام کرنے کا شرف حاصل ہوا (کلیم اللہ)؟',
            ar: 'من هو النبي الكليم الذي كلمه الله تكليماً عند طور سيناء؟',
          },
          explanation: {
            en: 'Prophet Musa (Moses) AS was honored to speak with Allah at Mount Toor.',
            ur: 'حضرت موسیٰ علیہ السلام کو کوہِ طور پر کلیم اللہ ہونے کا اعزاز ملا۔',
            ar: 'موسى عليه السلام هو كليم الله.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Musa (AS)', ur: 'حضرت موسیٰ علیہ السلام', ar: 'موسى عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Isa (AS)', ur: 'حضرت عیسیٰ علیہ السلام', ar: 'عيسى عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Yunus (AS)', ur: 'حضرت یونس علیہ السلام', ar: 'يونس عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Yusuf (AS)', ur: 'حضرت یوسف علیہ السلام', ar: 'يوسف عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q8',
          type: 'mcq',
          question: {
            en: 'Which Prophet was born miraculously without a father to Mother Maryam (Virgin Mary)?',
            ur: 'کون سے پیغمبر بغیر باپ کے حضرت مریم علیہا السلام کے بطنِ مبارک سے معجزانہ طور پر پیدا ہوئے؟',
            ar: 'من هو النبي الذي ولد معجزةً بغير أب من أمه مريم الصديقة؟',
          },
          explanation: {
            en: 'Prophet Isa (Jesus) AS was created miraculously by Allah\'s command "Kun" (Be).',
            ur: 'حضرت عیسیٰ علیہ السلام اللہ کے حکم "کن" سے پیدا ہوئے۔',
            ar: 'عيسى بن مريم عليه السلام ولد معجزة بكلمة من الله.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Isa (AS)', ur: 'حضرت عیسیٰ علیہ السلام', ar: 'عيسى عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Yahya (AS)', ur: 'حضرت یحییٰ علیہ السلام', ar: 'يحيى عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Zakariyya (AS)', ur: 'حضرت زکریا علیہ السلام', ar: 'زكريا عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Ayub (AS)', ur: 'حضرت ایوب علیہ السلام', ar: 'أيوب عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q9',
          type: 'mcq',
          question: {
            en: 'Which Prophet was swallowed by a large whale and recited the famous Dua in darkness?',
            ur: 'کون سے پیغمبر مچھلی کے پیٹ میں رہے اور اندھیروں میں مشہور دعا و تسبیح پڑھی؟',
            ar: 'من هو النبي الذي التقمه الحوت ودعا ربه في الظلمات؟',
          },
          explanation: {
            en: 'Prophet Yunus (Jonah) AS prayed: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin".',
            ur: 'حضرت یونس علیہ السلام نے آیتِ کریمہ کے ذریعے مچھلی کے پیٹ میں دعا مانگی۔',
            ar: 'يونس عليه السلام (ذو النون) دعا في بطن الحوت.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Yunus (AS)', ur: 'حضرت یونس علیہ السلام', ar: 'يونس عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Shuaib (AS)', ur: 'حضرت شعیب علیہ السلام', ar: 'شعيب عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Hud (AS)', ur: 'حضرت ہود علیہ السلام', ar: 'هود عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Lut (AS)', ur: 'حضرت لوط علیہ السلام', ar: 'لوط عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q10',
          type: 'mcq',
          question: {
            en: 'Which Prophet was blessed with understanding the language of birds, animals, and jinn?',
            ur: 'کس پیغمبر کو پرندوں، جانوروں اور جنات کی بولیاں سمجھنے کا معجزہ عطا ہوا؟',
            ar: 'من هو النبي الذي سُخرت له الريح والجن وعلِم منطق الطير؟',
          },
          explanation: {
            en: 'Prophet Sulaiman (Solomon) AS ruled a vast kingdom and understood animal speech.',
            ur: 'حضرت سلیمان علیہ السلام کو پرندوں اور جانوروں کی زبان کا علم دیا گیا۔',
            ar: 'سليمان عليه السلام علمه الله منطق الطير والحيوان.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Sulaiman (AS)', ur: 'حضرت سلیمان علیہ السلام', ar: 'سليمان عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Dawud (AS)', ur: 'حضرت داؤد علیہ السلام', ar: 'داود عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Yusuf (AS)', ur: 'حضرت یوسف علیہ السلام', ar: 'يوسف عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Harun (AS)', ur: 'حضرت ہارون علیہ السلام', ar: 'هارون عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q11',
          type: 'mcq',
          question: {
            en: 'Which Prophet is famous in Islam for exceptional patience during severe trials and illness?',
            ur: 'شدید بیماری اور آزمائش میں بے مثال صبر کے لیے کون سے پیغمبر مشہور ہیں؟',
            ar: 'من هو النبي المشهور بالصبر العظيم على البلاء والمرض؟',
          },
          explanation: {
            en: 'Prophet Ayyub (Job) AS remained constantly patient and thankful to Allah during his test.',
            ur: 'حضرت ایوب علیہ السلام اپنے صبر کی وجہ سے مشہور ہیں۔',
            ar: 'أيوب عليه السلام ضرب أروع أمثلة الصبر.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Ayyub (AS)', ur: 'حضرت ایوب علیہ السلام', ar: 'أيوب عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Ilyas (AS)', ur: 'حضرت الیاس علیہ السلام', ar: 'إلياس عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Al-Yasa (AS)', ur: 'حضرت اليسع علیہ السلام', ar: 'اليسع عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Dhul-Kifl (AS)', ur: 'حضرت ذو الکفل علیہ السلام', ar: 'ذو الكفل عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q12',
          type: 'mcq',
          question: {
            en: 'Which Prophet was gifted extraordinary beauty and the miracle of interpreting dreams?',
            ur: 'کس پیغمبر کو بے مثال حسن اور خوابوں کی سچی تعبیر کا علم عطا فرمایا گیا تھا؟',
            ar: 'من هو النبي الذي أُعطي شطر الحسن وعلِم تأويل الأحاديث (الرؤى)؟',
          },
          explanation: {
            en: 'Prophet Yusuf (Joseph) AS possessed beautiful character and dream interpretation skills.',
            ur: 'حضرت یوسف علیہ السلام کو خوبصورتی اور خوابوں کی تعبیر کا علم دیا گیا۔',
            ar: 'يوسف عليه السلام أعطي شطر الحسن وتأويل الأحلام.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Yusuf (AS)', ur: 'حضرت یوسف علیہ السلام', ar: 'يوسف عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Binyamin', ur: 'حضرت بنیامین', ar: 'بنيامين' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Shu\'aib', ur: 'حضرت شعیب', ar: 'شعيب' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Hud', ur: 'حضرت ہود', ar: 'هود' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q13',
          type: 'true_false',
          question: {
            en: 'Are all Prophets sinless (Ma\'sum) regarding disobeying Allah or corrupting the revelation?',
            ur: 'کیا تمام انبیاء معصوم ہیں یعنی وہ کسی گناہ یا پیغام الٰہی کی غلطی سے پاک ہیں؟',
            ar: 'هل الأنبياء معصومون من الكبائر والمعاصي في تبليغ الرسالة؟',
          },
          explanation: {
            en: 'Yes, Allah protected all His Prophets from sin and falsehood.',
            ur: 'جی ہاں، اللہ نے تمام انبیاء کو گناہوں اور غلطیوں سے معصوم بنایا۔',
            ar: 'نعم، الأنبياء معصومون بحفظ الله تعالى.',
          },
          options: [
            { id: '1', text: { en: 'True (Sinless & protected by Allah)', ur: 'سچ (گناہوں سے معصوم)', ar: 'صحيح (معصومون بحفظ الله)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q14',
          type: 'mcq',
          question: {
            en: 'What title is given to the group of 5 greatest determined Messengers in Islam?',
            ur: 'قرآن میں 5 سب سے عظیم اور ہمت والے رسولوں کے گروہ کو کیا لقب دیا گیا ہے؟',
            ar: 'ما اللقب الذي أطلق على الرسل الخمسة الكبار أصحاب العزم والتصميم؟',
          },
          explanation: {
            en: 'Ulul \'Azm min ar-Rusul (Messengers of Strong Determination).',
            ur: 'اولوالعزم من الرسل (صبر و ہمت والے رسول)۔',
            ar: 'أولو العزم من الرسل.',
          },
          options: [
            { id: '1', text: { en: 'Ulul \'Azm min ar-Rusul', ur: 'اولوالعزم من الرسل', ar: 'أولو العزم من الرسل' }, isCorrect: true },
            { id: '2', text: { en: 'As-Sahabah', ur: 'صحابہ کرام', ar: 'الصحابة' }, isCorrect: false },
            { id: '3', text: { en: 'Al-Ansar', ur: 'انصار', ar: 'الأنصار' }, isCorrect: false },
            { id: '4', text: { en: 'Al-Muhajirun', ur: 'مہاجرین', ar: 'المهاجرون' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q15',
          type: 'true_false',
          question: {
            en: 'Will any new Prophet ever come after Prophet Muhammad ﷺ?',
            ur: 'کیا حضرت محمد مصطفیٰ ﷺ کے بعد قیامت تک کوئی نیا نبی آ سکتا ہے؟',
            ar: 'هل يمكن أن يأتي أي نبي جديد بعد النبي محمد ﷺ؟',
          },
          explanation: {
            en: 'No! Prophet Muhammad ﷺ is Khatam an-Nabiyyin (The Seal of the Prophets).',
            ur: 'جی نہیں! آپ ﷺ آخری نبی ہیں اور نبوت کا سلسلہ آپ پر مکمل ہو چکا ہے۔',
            ar: 'لا! محمد ﷺ هو خاتم النبيين ولا نبي بعده.',
          },
          options: [
            { id: '1', text: { en: 'No, Prophet Muhammad ﷺ is the final Prophet', ur: 'جی نہیں، آپ ﷺ آخری نبی ہیں', ar: 'لا، محمد ﷺ هو خاتم النبيين' }, isCorrect: true },
            { id: '2', text: { en: 'Yes', ur: 'جی ہاں', ar: 'نعم' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q16',
          type: 'mcq',
          question: {
            en: 'What greeting do Muslims say when mentioning any Prophet of Allah?',
            ur: 'جب کسی نبی علیہ السلام کا نام مبارک لیا جائے تو مسلمان کیا مؤدبانہ جملہ پڑھتے ہیں؟',
            ar: 'ماذا يقول المسلم عند ذكر اسم أحد أنبياء الله الكرام؟',
          },
          explanation: {
            en: 'Alaihis Salam (Peace be upon him).',
            ur: 'علیہ السلام (ان پر سلامتی ہو)۔',
            ar: 'عليه السلام (صلوات الله وسلامه عليه).',
          },
          options: [
            { id: '1', text: { en: 'Alaihis Salam (AS)', ur: 'علیہ السلام', ar: 'عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Radiyallahu Anhu', ur: 'رضی اللہ عنہ', ar: 'رضي الله عنه' }, isCorrect: false },
            { id: '3', text: { en: 'Rahimahullah', ur: 'رحمہ اللہ', ar: 'رحمه الله' }, isCorrect: false },
            { id: '4', text: { en: 'JazakAllah', ur: 'جزاک اللہ', ar: 'جزاك الله' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q17',
          type: 'mcq',
          question: {
            en: 'What praise is offered specifically when mentioning Prophet Muhammad ﷺ?',
            ur: 'ہمارے پیارے آقا حضرت محمد ﷺ کا نامِ گرامی سن کر یا لکھ کر کیا درود پڑھا جاتا ہے؟',
            ar: 'ما الصلاة المخصوصة التي نقرؤها عند ذكر اسم نبينا محمد ﷺ؟',
          },
          explanation: {
            en: 'Sallallahu Alaihi Wa Sallam (May Allah\'s peace and blessings be upon him).',
            ur: 'صلی اللہ علیہ وآلہ وسلم۔',
            ar: 'صلى الله عليه وسلم.',
          },
          options: [
            { id: '1', text: { en: 'Sallallahu Alaihi Wa Sallam (ﷺ)', ur: 'صلی اللہ علیہ والہ وسلم (ﷺ)', ar: 'صلى الله عليه وسلم (ﷺ)' }, isCorrect: true },
            { id: '2', text: { en: 'SubhanAllah', ur: 'سبحان اللہ', ar: 'سبحان الله' }, isCorrect: false },
            { id: '3', text: { en: 'Astaghfirullah', ur: 'استغفر اللہ', ar: 'أستغفر الله' }, isCorrect: false },
            { id: '4', text: { en: 'Inna Lillahi', ur: 'انا للہ', ar: 'إنا لله' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q18',
          type: 'true_false',
          question: {
            en: 'Did every Prophet show beautiful manners, honesty, and kindness to their people?',
            ur: 'کیا تمام انبیاء نے اپنی قوموں کے ساتھ اعلیٰ ترین اخلاق، سچائی اور نرمی کا مظاہرہ فرمایا؟',
            ar: 'هل اتصف جميع الأنبياء بحسن الخلق والصدق والرحمة مع أقوامهم؟',
          },
          explanation: {
            en: 'Yes, Prophets were the absolute best role models in morality and nobility.',
            ur: 'جی ہاں، انبیاء کرام اخلاق اور سچائی کا بہترین نمونہ تھے۔',
            ar: 'نعم، الأنبياء هم القدوة الحسنة والأعلى خُلقاً.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q19',
          type: 'mcq',
          question: {
            en: 'Which Prophet was given the miracle of iron becoming soft in his hands like clay?',
            ur: 'کس پیغمبر کو یہ معجزہ ملا تھا کہ لوہا ان کے ہاتھوں میں موم کی طرح نرم ہو جاتا تھا؟',
            ar: 'من هو النبي الذي أُلين له الحديد في يده كالعجين؟',
          },
          explanation: {
            en: 'Prophet Dawud (David) AS was given the miracle of soft iron to make coats of armor.',
            ur: 'حضرت داؤد علیہ السلام کے لیے لوہا نرم کر دیا گیا تھا۔',
            ar: 'داود عليه السلام ألان الله له الحديد.',
          },
          options: [
            { id: '1', text: { en: 'Prophet Dawud (AS)', ur: 'حضرت داؤد علیہ السلام', ar: 'داود عليه السلام' }, isCorrect: true },
            { id: '2', text: { en: 'Prophet Sulaiman (AS)', ur: 'حضرت سلیمان علیہ السلام', ar: 'سليمان عليه السلام' }, isCorrect: false },
            { id: '3', text: { en: 'Prophet Lut (AS)', ur: 'حضرت لوط علیہ السلام', ar: 'لوط عليه السلام' }, isCorrect: false },
            { id: '4', text: { en: 'Prophet Hud (AS)', ur: 'حضرت ہود علیہ السلام', ar: 'هود عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'c5_q20',
          type: 'true_false',
          question: {
            en: 'By following the Sunnah of Prophet Muhammad ﷺ, do we earn Allah\'s love and eternal success?',
            ur: 'کیا نبی کریم ﷺ کی سنت کی پیروی کرنے سے ہمیں اللہ کی محبت اور دائم کامیابی ملتی ہے؟',
            ar: 'هل باتباع سنة النبي محمد ﷺ ننال محبة الله والفلاح الدائم؟',
          },
          explanation: {
            en: 'Yes! Allah says in Surah Ali \'Imran (3:31): "Say, [O Muhammad], If you love Allah, then follow me, [so] Allah will love you."',
            ur: 'جی ہاں! قرآن پاک میں ہے: فرما دیجیے کہ اگر تم اللہ سے محبت رکھتے ہو تو میری پیروی کرو، اللہ تم سے محبت کرے گا۔',
            ar: 'نعم! قال تعالى: "قل إن كنتم تحبون الله فاتبعوني يحببكم الله".',
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

import { Category } from '../../types';

export const chapter4: Category = {
  id: 'lvl2_cat4',
  number: 4,
  title: {
    en: 'Chapter 4: Angels of Allah (Intermediate)',
    ur: 'باب 4: اللہ کے فرشتے (درمیانی سطح)',
    ar: 'الفصل 4: الملائكة الكرام (المستوى المتوسط)',
  },
  description: {
    en: 'Learn the nature of Angels created from light, their unwavering obedience to Allah, Kiraman Katibin, and the roles of Jibreel, Mikaeel, Israfeel, and Malak al-Mawt.',
    ur: 'نور سے پیدا شدہ فرشتوں کی بندگی، کراماً کاتبین کی ذمہ داری، اور حضرت جبرائیل، میکائیل، اسرافیل اور ملک الموت کے اہم فرائض کا مطالعہ کریں۔',
    ar: 'التعرف على طبيعة الملائكة المخلوقين من نور، وطاعتهم المطلقة لله، والكرام الكاتبين، ومهام جبريل وميكائيل وإسرافيل وملك الموت.',
  },
  iconName: 'Feather',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat4_les1',
      title: {
        en: 'The Noble Creation and Roles of Angels',
        ur: 'فرشتوں کی پاکیزہ خلقت اور عظیم فرائض',
        ar: 'خلق الملائكة الكرام ومهامهم العظيمة',
      },
      summary: {
        en: 'Angels (Mala\'ikah) are created from light (Nur). They do not eat, sleep, or possess free will to disobey Allah. They continuously glorify Allah and carry out His commands throughout the universe.',
        ur: 'فرشتے نور سے پیدا کیے گئے ہیں۔ وہ کھاتے پیتے، سوتے یا اللہ کی نافرمانی نہیں کرتے۔ وہ مسلسل اللہ کی تسبیح بیان کرتے ہیں اور کائنات میں اس کے احکام بجا لاتے ہیں۔',
        ar: 'خلق الله الملائكة من نور؛ لا يأكلون ولا يشربون ولا يعصون الله ما أمرهم، ويفعلون ما يُؤمرون ويديمون التسبيح.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c4_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, what are angels created from, and do they have choices like human beings?',
            ur: 'شیخ طارق! فرشتے کس چیز سے پیدا کیے گئے ہیں اور کیا وہ انسانوں کی طرح خود مختار ہیں؟',
            ar: 'يا شيخ طارق! ممّ خُلقت الملائكة، وهل لهم اختيار كالبشر؟',
          },
          sceneIllustration: 'Sparkles',
        },
        {
          id: 'l2_c4_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Angels are created from light (Nur), as taught by Prophet Muhammad ﷺ. Unlike humans, angels do not experience desire or anger; they carry out Allah\'s orders instantly with joyful obedience!',
            ur: 'رسول اللہ ﷺ نے فرمایا کہ فرشتے نور سے پیدا کیے گئے ہیں۔ انسانوں کے برعکس ان کے اندر خواہش یا غصہ نہیں ہوتا؛ وہ اللہ کا ہر حکم فوراً اور خوشی سے پورا کرتے ہیں!',
            ar: 'خُلقت الملائكة من نور كما أخبر النبي ﷺ. وليس لديهم شهوات أو غضب، بل ينفذون أمر الله فوراً وبطاعة تامة!',
          },
          sceneIllustration: 'Feather',
          keyPoint: {
            en: 'Angels are created from light (Nur) and possess flawless obedience to Allah.',
            ur: 'فرشتے نور سے پیدا ہوئے ہیں اور اللہ کی کامل اطاعت کرتے ہیں۔',
            ar: 'الملائكة مخلوقون من نور وطاعتهم لله تامة مطلقة.',
          },
        },
        {
          id: 'l2_c4_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Who are the noble recording angels sitting on our shoulders?',
            ur: 'ہمارے شانوں پر جو معزز فرشتے ہمارے اعمال لکھتے ہیں انہیں کیا کہا جاتا ہے؟',
            ar: 'من هم الملكان الكريمان اللذان يكتبان أعمالنا؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'l2_c4_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'They are Kiraman Katibin (The Honorable Recorders). The angel on the right writes down our good deeds, and the angel on the left writes down our sins when we do not repent.',
            ur: 'انہیں "کراماً کاتبین" یعنی معزز لکھنے والے کہتے ہیں۔ دائیں طرف کا فرشتہ نیکیاں لکھتا ہے اور بائیں طرف کا فرشتہ برائیاں تب درج کرتا ہے جب بندہ توبہ نہ کرے۔',
            ar: 'هما الكرام الكاتبون. يكتب الملك عن اليمين الحسنات، ويكتب الملك عن الشمال السيئات إن لم يتب العبد.',
          },
          sceneIllustration: 'CheckCircle2',
          keyPoint: {
            en: 'Kiraman Katibin continuously record our words and actions, encouraging us to maintain truth and good deeds.',
            ur: 'کراماً کاتبین ہمارے ہر قول و فعل کو ریکارڈ کرتے ہیں جو ہمیں نیکی اور سچائی پر ابھارتا ہے۔',
            ar: 'الكرام الكاتبون يسجلون أقوالنا وأفعالنا مما يحثنا على الإحسان والصدق.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Jibreel (AS) is the leader of angels responsible for conveying Divine Revelation (Wahy).',
          ur: 'حضرت جبرائیل علیہ السلام تمام فرشتوں کے سردار ہیں جو وحیِ الٰہی لانے پر مامور تھے۔',
          ar: 'جبريل عليه السلام هو أمين الوحي ورئيس الملائكة المقربين.',
        },
        {
          en: 'Mikaeel (AS) oversees rain, vegetation, and natural provisions by Allah\'s command.',
          ur: 'حضرت میکائیل علیہ السلام اللہ کے حکم سے بارش، نباتات اور روزی کی تقسیم پر مامور ہیں۔',
          ar: 'ميكائيل عليه السلام موكل بالقطر (المطر) والنبات والأرزاق بإذن الله.',
        },
        {
          en: 'Israfeel (AS) will blow the Trumpet (Sur) to announce the Day of Resurrection.',
          ur: 'حضرت اسرافیل علیہ السلام قیامت کے موقع پر صور پھونکنے کی ذمہ داری پر فائز ہیں۔',
          ar: 'إسرافيل عليه السلام هو الملك الموكل بالنفخ في الصور يوم القيامة.',
        },
      ],
      quiz: [
        {
          id: 'l2_q4_1',
          type: 'mcq',
          question: {
            en: 'What substance were Angels created from according to authentic Hadith?',
            ur: 'صحیح حدیث کے مطابق فرشتے کس چیز سے پیدا کیے گئے ہیں؟',
            ar: 'مما خُلقت الملائكة وفق الحديث الشريف الصحيح؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ stated: "Angels were created from light (Nur). "',
            ur: 'رسول اللہ ﷺ نے فرمایا: "فرشتے نور سے پیدا کیے گئے ہیں۔"',
            ar: 'قال رسول الله ﷺ: "خُلقت الملائكة من نور".',
          },
          options: [
            { id: 'opt1', text: { en: 'Light (Nur)', ur: 'نور', ar: 'نور' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Smokeless fire', ur: 'بے دھوئیں کی آگ', ar: 'نار' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Clay', ur: 'مٹی', ar: 'طين' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_2',
          type: 'true_false',
          question: {
            en: 'Do Angels disobey Allah or fall into pride and rebellion?',
            ur: 'کیا فرشتے کبھی اللہ کی نافرمانی کرتے ہیں یا تکبر میں مبتلا ہوتے ہیں؟',
            ar: 'هل يعصي الملائكة ربهم أو يستكبرون عن عبادته؟',
          },
          explanation: {
            en: 'No! Angels obey Allah perfectly and carry out all commands without error or sin.',
            ur: 'ہرگز نہیں! فرشتے اللہ کی مکمل اطاعت کرتے ہیں اور کوئی گناہ نہیں کرتے۔',
            ar: 'لا! الملائكة معصومون لا يعصون الله ما أمرهم.',
          },
          options: [
            { id: 'opt1', text: { en: 'True (They never disobey)', ur: 'سچ (وہ کبھی نافرمانی نہیں کرتے)', ar: 'صحيح (لا يعصون الله أبدًا)' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_3',
          type: 'mcq',
          question: {
            en: 'Which Angel was responsible for bringing Wahy (Revelation) to all Prophets?',
            ur: 'تمام انبیاء کرام کے پاس وحی لانے کی ذمہ داری کس معزز فرشتے کی تھی؟',
            ar: 'من هو الملك الموكل بنزول الوحي على الأنبياء والرسل؟',
          },
          explanation: {
            en: 'Angel Jibreel (AS) (Gabriel) was entrusted with delivering Allah\'s revelation.',
            ur: 'حضرت جبرائیل علیہ السلام پر وحی نازل کرنے کی ذمہ داری تھی۔',
            ar: 'جبريل عليه السلام هو أمين الوحي.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Angel Mikaeel (AS)', ur: 'حضرت میکائیل علیہ السلام', ar: 'ميكائيل عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Angel Israfeel (AS)', ur: 'حضرت اسرافیل علیہ السلام', ar: 'إسرافيل عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_4',
          type: 'mcq',
          question: {
            en: 'What is the responsibility assigned to Angel Mikaeel (AS)?',
            ur: 'حضرت میکائیل علیہ السلام کے سپرد کون سی اہم ذمہ داری ہے؟',
            ar: 'ما هي المهمة الموكلة إلى الملك ميكائيل عليه السلام؟',
          },
          explanation: {
            en: 'Mikaeel (AS) oversees rain, clouds, plants, and natural provisions by Allah\'s command.',
            ur: 'حضرت میکائیل علیہ السلام اللہ کے حکم سے بارش، بادل، نباتات اور رزق پر مامور ہیں۔',
            ar: 'ميكائيل عليه السلام موكل بالمطر والقطر والنبات.',
          },
          options: [
            { id: 'opt1', text: { en: 'Rain, clouds, and nourishment by Allah\'s leave', ur: 'اللہ کے حکم سے بارش اور نباتات کی ذمہ داری', ar: 'المطر والنبات والأرزاق بإذن الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Blowing the Trumpet', ur: 'صور پھونکنا', ar: 'النفخ في الصور' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Taking human souls', ur: 'روحیں قبض کرنا', ar: 'قبض الأرواح' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_5',
          type: 'mcq',
          question: {
            en: 'What are the recording angels who write human deeds called in the Quran?',
            ur: 'انسانوں کے اعمال درج کرنے والے فرشتوں کو قرآن مجید میں کیا نام دیا گیا ہے؟',
            ar: 'ما اسم الملكين اللذين يكتبان أعمال العباد في القرآن الكريم؟',
          },
          explanation: {
            en: 'Kiraman Katibin ("Honorable Recorders").',
            ur: 'کراماً کاتبین (معزز لکھنے والے)۔',
            ar: 'الكرام الكاتبون.',
          },
          options: [
            { id: 'opt1', text: { en: 'Kiraman Katibin', ur: 'کراماً کاتبین', ar: 'الكرام الكاتبون' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Mu\'aqqibat only', ur: 'صرف معقبات', ar: 'المعقبات فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Jinn', ur: 'جن', ar: 'الجن' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_6',
          type: 'true_false',
          question: {
            en: 'Do Angels require food, drinks, or physical rest like humans?',
            ur: 'کیا فرشتوں کو انسانوں کی طرح کھانے، پینے یا جسمانی آرام کی ضرورت ہوتی ہے؟',
            ar: 'هل يحتاج الملائكة إلى الطعام والشراب والراحة كالبشر؟',
          },
          explanation: {
            en: 'No, angels are created purely spiritual beings who worship Allah without fatigue.',
            ur: 'نہیں۔ فرشتے نورانی مخلوق ہیں جو بغیر کسی تھکن کے اللہ کی عبادت کرتے ہیں۔',
            ar: 'لا، الملائكة عباد لا يطعمون ولا يشربون ولا يتعبون.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (They do not eat or sleep)', ur: 'جھوٹ (وہ کھانے پینے سے پاک ہیں)', ar: 'خطأ (لا يأكلون ولا ينامون)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q4_7',
          type: 'mcq',
          question: {
            en: 'Which Angel is tasked with blowing the Sur (Trumpet) on the Day of Judgment?',
            ur: 'قیامت کے دن صور (ترنم) پھونکنے کی ذمہ داری کس فرشتے کے سپرد کی گئی ہے؟',
            ar: 'من هو الملك الموكل بالنفخ في الصور يوم القيامة؟',
          },
          explanation: {
            en: 'Angel Israfeel (AS).',
            ur: 'حضرت اسرافیل علیہ السلام۔',
            ar: 'إسرافيل عليه السلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angel Israfeel (AS)', ur: 'حضرت اسرافیل علیہ السلام', ar: 'إسرافيل عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Angel Jibreel (AS)', ur: 'حضرت جبرائیل علیہ السلام', ar: 'جبريل عليه السلام' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Angel Ridwan', ur: 'حضرت رضوان', ar: 'رضوان عليه السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_8',
          type: 'mcq',
          question: {
            en: 'What is the noble Angel tasked with taking souls at death named in authentic Islamic sources?',
            ur: 'معتبر اسلامی ذرائع میں موت کے وقت روح قبض کرنے والے فرشتے کو کیا کہا جاتا ہے؟',
            ar: 'ما اسم الملك الموكل بقبض الأرواح في المصادر الإسلامية؟',
          },
          explanation: {
            en: 'In the Quran he is referred to as "Malak al-Mawt" (The Angel of Death).',
            ur: 'قرآن مجید میں ان کا نام "ملک الموت" بیان فرمایا گیا ہے۔',
            ar: 'يسمى في القرآن "ملك الموت".',
          },
          options: [
            { id: 'opt1', text: { en: 'Malak al-Mawt (Angel of Death)', ur: 'ملک الموت', ar: 'ملك الموت' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Malik', ur: 'مالک', ar: 'مالك' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Atid', ur: 'عتید', ar: 'عتيد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_9',
          type: 'true_false',
          question: {
            en: 'Are there angels who protect human beings from harm by Allah\'s command (Mu\'aqqibat)?',
            ur: 'کیا اللہ کے حکم سے انسانوں کی حفاظت پر مامور فرشتے (معقبات) موجود ہیں؟',
            ar: 'هل هناك ملائكة يحفظون الإنسان بأمر الله (المعقبات)؟',
          },
          explanation: {
            en: 'Yes! Surah Ar-Ra\'d states: "For him [each person] are angels range in succession, before him and behind him, guarding him by Allah\'s command."',
            ur: 'جی ہاں! سورۃ الرعد میں ذکر ہے کہ انسان کے آگے اور پیچھے محافظ فرشتے موجود ہیں جو اللہ کے حکم سے اس کی حفاظت کرتے ہیں۔',
            ar: 'نعم! قال تعالى: "له معقبات من بين يديه ومن خلفه يحفظونه من أمر الله".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Layla thinks about telling a lie, but remembers the angel on her left and right. What should she do?',
            ur: 'منظرنامہ: لیلیٰ جھوٹ بولنے کا سوچتی ہے، لیکن اسے اپنے دائیں اور بائیں طرف کے فرشتوں کا خیال آتا ہے۔ اسے کیا کرنا چاہیے؟',
            ar: 'سيناريو: فكرت ليلى في الكذب، لكنها تذكرت الملكين عن يمينها وشمالها. ماذا ينبغي لها أن تفعل؟',
          },
          explanation: {
            en: 'She refrains from lying, speaks the truth, and earns the reward of truthfulness.',
            ur: 'وہ جھوٹ سے باز رہتی ہے، سچ بولتی ہے اور سچائی کا ثواب حاصل کرتی ہے۔',
            ar: 'تتجنب الكذب وتقول الصدق وتفوز بأجر الصادقين.',
          },
          options: [
            { id: 'opt1', text: { en: 'Avoid lying and speak the truth for Allah\'s sake', ur: 'جھوٹ سے بچے اور اللہ کی رضا کے لیے سچ بولے', ar: 'تترك الكذب وتقول الحق ابتغاء مرضاة الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Lie quietly thinking no one notices', ur: 'خاموشی سے جھوٹ بول دے', ar: 'تكذب بصمت ظانة ألا أحد يراها' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Argue with her parents', ur: 'والدین سے بحث کرے', ar: 'تتجادل مع أهليها' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_11',
          type: 'mcq',
          question: {
            en: 'Who are Munkar and Nakir?',
            ur: 'منکر اور نکیر کون سے دو فرشتے ہیں؟',
            ar: 'من هما منكر ونكير؟',
          },
          explanation: {
            en: 'They are the two angels who question a deceased person in the grave about their Lord, religion, and Prophet.',
            ur: 'وہ دو فرشتے جو قبر میں میت سے اس کے رب، دین اور نبی کے بارے میں سوالات کرتے ہیں۔',
            ar: 'هما الملكان اللذان يسألان الميت في القبر عن ربه ودينه ونبيه.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angels who question the deceased in the grave', ur: 'قبر میں سوالات کرنے والے فرشتے', ar: 'الملكان اللذان يسألان الميت في القبر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Guardians of rain', ur: 'بارش کے نگہبان', ar: 'حراس المطر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Keepers of Paradise', ur: 'جنت کے چوکیدار', ar: 'خزنة الجنة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_12',
          type: 'true_false',
          question: {
            en: 'Are Angels gendered beings that have sons or daughters?',
            ur: 'کیا فرشتے مرد یا عورت کی صنف رکھتے ہیں یا ان کی اولاد ہوتی ہے؟',
            ar: 'هل الملائكة ذكور أو إناث ويتناسلون؟',
          },
          explanation: {
            en: 'No! Angels do not have gender, nor do they marry or produce offspring.',
            ur: 'نہیں۔ فرشتے مذکر و مؤنث کی صنف سے پاک ہیں اور نہ ہی ان کا تناسل ہوتا ہے۔',
            ar: 'لا! الملائكة منزهون عن الذكورة والأنوثة والتناسل.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (Angels have no gender or offspring)', ur: 'جھوٹ (فرشتے صنف اور اولاد سے پاک ہیں)', ar: 'خطأ (الملائكة ليسوا ذكوراً ولا إناثاً)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q4_13',
          type: 'mcq',
          question: {
            en: 'Who is the guardian angel of Jannah (Paradise)?',
            ur: 'جنت کا نگران فرشتہ کون ہے؟',
            ar: 'من هو الملك خازن الجنة؟',
          },
          explanation: {
            en: 'Angel Ridwan (AS) is known as the keeper/guardian of Jannah.',
            ur: 'حضرت رضوان علیہ السلام جنت کے نگران فرشتے ہیں۔',
            ar: 'الملك رضوان عليه السلام هو خازن الجنة.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angel Ridwan (AS)', ur: 'حضرت رضوان علیہ السلام', ar: 'رضوان عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Malik', ur: 'مالک', ar: 'مالك' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Jibreel', ur: 'جبرائیل', ar: 'جبريل' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_14',
          type: 'mcq',
          question: {
            en: 'Who is the keeper/guardian angel of Jahannam (Hellfire)?',
            ur: 'جہنم کے نگران فرشتے کا نام کیا ہے؟',
            ar: 'من هو الملك خازن النار؟',
          },
          explanation: {
            en: 'Angel Malik is the guardian of Jahannam as mentioned in Surah Az-Zukhruf.',
            ur: 'حضرت مالک جہنم کے نگران فرشتے ہیں جن کا تذکرہ سورۃ الزخرف میں ہے۔',
            ar: 'الملك مالك هو خازن النار كما جاء في سورة الزخرف.',
          },
          options: [
            { id: 'opt1', text: { en: 'Angel Malik', ur: 'حضرت مالک', ar: 'مالك عليه السلام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Ridwan', ur: 'رضوان', ar: 'رضوان' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Mikail', ur: 'میکائیل', ar: 'ميكائيل' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_15',
          type: 'true_false',
          question: {
            en: 'Do Angels attend gatherings where the Quran is recited and Allah is remembered (Halaqat al-Dhikr)?',
            ur: 'کیا فرشتے ان مجالس میں شرکت کرتے ہیں جہاں قرآن پاک پڑھا جاتا اور اللہ کا ذکر ہوتا ہے؟',
            ar: 'هل تحف الملائكة مجالس الذكر وتلاوة القرآن؟',
          },
          explanation: {
            en: 'Yes! Authentic Hadith states that angels search for circles of Dhikr, surround them with their wings, and descend tranquility upon them.',
            ur: 'جی ہاں! صحیح حدیث میں ہے کہ فرشتے ذکر کی مجالس کو اپنے پروں سے ڈھانپ لیتے ہیں اور سکینت نازل ہوتی ہے۔',
            ar: 'نعم! جاء في الحديث أن الملائكة تحف مجالس الذكر بأجنحتها وتنزل عليهم السكينة.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_16',
          type: 'mcq',
          question: {
            en: 'How many wings can Angels possess as stated in Surah Fatir?',
            ur: 'سورۃ فاطر میں بیان کے مطابق فرشتوں کے کتنے کتنے پر ہو سکتے ہیں؟',
            ar: 'كم عدداً من الأجنحة يمكن أن يمتلكه الملائكة كما جاء في سورة فاطر؟',
          },
          explanation: {
            en: 'Surah Fatir mentions angels having two, three, four, or even more wings as Allah wills.',
            ur: 'سورۃ فاطر میں ہے کہ فرشتوں کے دو دو، تین تین، چار چار اور اس سے بھی زیادہ پر ہوتے ہیں۔',
            ar: 'ذكرت سورة فاطر أن للملائكة أجنحة مثنى وثلاث ورباع ويزيد الله ما يشاء.',
          },
          options: [
            { id: 'opt1', text: { en: 'Two, three, four, or more as Allah wills', ur: 'دو، تین، چار یا اس سے بھی زیادہ', ar: 'مثنى وثلاث ورباع وما يشاء الله' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Only 1 wing always', ur: 'ہمیشہ صرف ایک پر', ar: 'جناح واحد فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Angels have no wings at all', ur: 'فرشتوں کا کوئی پر نہیں ہوتا', ar: 'لا توجد أجنحة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_17',
          type: 'mcq',
          question: {
            en: 'How did Angel Jibreel (AS) appear when Prophet Muhammad ﷺ saw him in his full divine original form?',
            ur: 'جب نبی کریم ﷺ نے حضرت جبرائیل علیہ السلام کو ان کی اصل صورت میں دیکھا تو ان کا کیسا نظارہ تھا؟',
            ar: 'كيف ظهر جبريل عليه السلام عندما رآه النبي ﷺ على صورته الأصلية؟',
          },
          explanation: {
            en: 'He had 600 wings covering the entire horizon between heaven and earth.',
            ur: 'ان کے 600 پر تھے جنہوں نے زمین و آسمان کے پورے افق کو ڈھانپ رکھا تھا۔',
            ar: 'كان له ستمائة جناح قد سد بها الأفق بين السماء والأرض.',
          },
          options: [
            { id: 'opt1', text: { en: 'Having 600 wings covering the horizon', ur: '600 پروں کے ساتھ پورا افق ڈھانپے ہوئے', ar: 'له 600 جناح سدت الأفق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Like a small bird', ur: 'چھوٹے پرندے کی طرح', ar: 'كطائر صغير' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Like a statue', ur: 'مجسمے کی طرح', ar: 'كتمثال' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_18',
          type: 'true_false',
          question: {
            en: 'Do Angels send blessings (Salawat) upon those who teach good to people?',
            ur: 'کیا فرشتے لوگوں کو خیر کی تعلیم دینے والوں کے لیے استغفار اور دعائے خیر کرتے ہیں؟',
            ar: 'هل تصلي الملائكة وتستغفر لمعلم الناس الخير؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "Allah and His angels pray for the one who teaches good to people."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: "اللہ اور اس کے فرشتے خیر کی تعلیم دینے والے پر درود بھیجتے اور دعا کرتے ہیں۔"',
            ar: 'نعم! قال رسول الله ﷺ: "إن الله وملائكته ليصلون على معلم الناس الخير".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_19',
          type: 'mcq',
          question: {
            en: 'What effect should belief in Kiraman Katibin have on a Muslim\'s behavior when alone?',
            ur: 'کراماً کاتبین پر ایمان مسلمان کے تنہائی کے رویے پر کیا اثر ڈالتا ہے؟',
            ar: 'ما هو أثر الإيمان بالكرام الكاتبين على سلوك المسلم في خلوته؟',
          },
          explanation: {
            en: 'It creates Haya (modesty) and honesty, knowing that Allah and His angels record every action.',
            ur: 'یہ حیا اور پاکدامنی پیدا کرتا ہے، یہ جانتے ہوئے کہ اللہ اور اس کے فرشتے ہر چیز درج کر رہے ہیں۔',
            ar: 'يورث الحياء والتقوى والصدق لمعرفته بتسجيل أعماله.',
          },
          options: [
            { id: 'opt1', text: { en: 'Maintaining modesty, honesty, and piety in secret', ur: 'تنہائی میں بھی حیا، سچائی اور تقویٰ اختیار کرنا', ar: 'الالتزام بالحياء والصدق والتقوى في السر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Doing wrong secretly thinking no one sees', ur: 'یہ سوچ کر چھپ کر برائی کرنا کہ کوئی نہیں دیکھ رہا', ar: 'فعل الشر خفية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Feeling hopeless', ur: 'مایوس ہو جانا', ar: 'الشعور باليأس' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q4_20',
          type: 'mcq',
          question: {
            en: 'What is the primary continuous worship performed by Angels in the heavens?',
            ur: 'آسمانوں میں فرشتوں کی مسلسل اور سب سے بڑی عبادت کیا ہے؟',
            ar: 'ما هي العبادة المستمرة الرئيسية التي يؤديها الملائكة في السماوات؟',
          },
          explanation: {
            en: 'Tasbeeh (Glorifying Allah) night and day without ceasing or getting exhausted.',
            ur: 'دن رات بغیر تھکے اللہ کی تسبیح و تحمید بیان کرنا۔',
            ar: 'تسبيح الله والثناء عليه ليلاً ونهاراً لا يفترون.',
          },
          options: [
            { id: 'opt1', text: { en: 'Tasbeeh and Glorification of Allah continuously', ur: 'مسلسل اللہ کی تسبیح و پاکی بیان کرنا', ar: 'تسبيح الله وتمجيده دائماً دون فتر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Building worldly towns', ur: 'دنیاوی شہر تعمیر کرنا', ar: 'بناء المدن الدنيوية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Sleeping long hours', ur: 'طویل نیند سونا', ar: 'النوم لسطور طويلة' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

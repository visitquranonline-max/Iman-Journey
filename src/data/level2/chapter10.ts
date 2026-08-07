import { Category } from '../../types';

export const chapter10: Category = {
  id: 'lvl2_cat10',
  number: 10,
  title: {
    en: 'Chapter 10: Seerah & Madinan Epoch (Intermediate)',
    ur: 'باب 10: سیرتِ نبوی و دورِ مدنی (درمیانی سطح)',
    ar: 'الفصل 10: السيرة النبوية والعهد المدني (المستوى المتوسط)',
  },
  description: {
    en: 'Explore the Madinan era: Hijrah, Mu\'akhah (Brotherhood), strategic battles (Badr, Uhud, Khandaq), Hudaybiyyah diplomacy, the merciful Conquest of Makkah, and the Farewell Sermon.',
    ur: 'دورِ مدنی کی درخشاں سیرت: ہجرت، مواخاتِ مدینہ، غزوات (بدر، احد، خندق)، صلحِ حدیبیہ، فتحِ مکہ کا عفوِ عام اور خطبہ حَجۃ الوداع کی عالمی تعلیمات۔',
    ar: 'استكشاف العهد المدني: الهجرة، المؤاخاة، الغزوات (بدر، أُحد، الخندق)، صلح الحديبية، فتح مكة، وحجة الوداع وصيتها بالإنسانية.',
  },
  iconName: 'Compass',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat10_les1',
      title: {
        en: 'Lessons from the Madinan Period, Battles, and Farewell Sermon',
        ur: 'دورِ مدنی، غزوات اور خطبہ حجۃ الوداع کے لافانی اسباق',
        ar: 'دروس من العهد المدني الغزوات وحجة الوداع',
      },
      summary: {
        en: 'In Madinah, Prophet Muhammad ﷺ established Mu\'akhah (Brotherhood) between Ansar and Muhajirun. Through trials of Badr, Uhud, and Khandaq, wisdom of Hudaybiyyah, and forgiving Conquest of Makkah, he delivered the Farewell Sermon enshrining human rights and racial equality.',
        ur: 'مدینہ منورہ میں آپ ﷺ نے انصار و مہاجرین کے درمیان مواخات قائم فرمائی۔ غزواتِ بدر، احد، خندق، صلح حدیبیہ اور فتحِ مکہ کے بعد خطبہ حجۃ الوداع میں انسانی حقوق اور مساوات کا منشور عطا فرمایا۔',
        ar: 'أسس النبي ﷺ المؤاخاة في المدينة. وعبر بدر وأحد والخندق وصلح الحديبية وفتح مكة العظيم، ألقى خطبة الوداع لترسيخ حقوق الإنسان والمساواة.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c10_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, what was the spirit of "Mu\'akhah" (Brotherhood) established by Prophet Muhammad ﷺ in Madinah?',
            ur: 'شیخ طارق! مدینہ منورہ میں نبی کریم ﷺ کے قائم کردہ "مواخات" کے جذبے کی کیا حقیقت تھی؟',
            ar: 'يا شيخ طارق! ما هي روح "المؤاخاة" التي أقامها النبي ﷺ في المدينة المنورة؟',
          },
          sceneIllustration: 'Compass',
        },
        {
          id: 'l2_c10_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'The Ansar (helpers of Madinah) shared their homes, land, and wealth with the Muhajirun (emigrants from Makkah) in an unprecedented display of selfless love and Islamic unity!',
            ur: 'انصارِ مدینہ نے مکہ سے ہجرت کر کے انے والے مہاجرین کے ساتھ اپنے گھر، زمینیں اور مال و دولت ایثار اور محبت کی بے مثال تاریخ رقم کرتے ہوئے بانٹ لیے!',
            ar: 'قاسم الأنصار في المدينة إخوانهم المهاجرين الديار والأموال والأرض في أروع صورة للإيثار والأخوة الإسلامية عبر التاريخ!',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Mu\'akhah demonstrated unmatched selflessness (Ithar) and brotherhood between Muslims.',
            ur: 'مواخات مسلمانوں کے درمیان بے مثال ایثار اور باہمی اخوت کی علامت تھی۔',
            ar: 'المؤاخاة نموذج فريد للإيثار والتضامن بين المسلمين.',
          },
        },
        {
          id: 'l2_c10_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What made the Conquest of Makkah (Fath Makkah) so unique in military history?',
            ur: 'فتحِ مکہ ملٹری ہسٹری میں اتنی منفرد اور ممتاز کیوں شمار کی جاتی ہے؟',
            ar: 'ما الذي جعل فتح مكة فريداً واستثنائياً في التاريخ العسكري؟',
          },
          sceneIllustration: 'Shield',
        },
        {
          id: 'l2_c10_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'It was a victory of complete mercy without bloodshed! Prophet Muhammad ﷺ entered Makkah in utter humility, declaring a general amnesty to his former persecutors: "Go, for you are free!" (Ithhabu fa-antum at-tulaqa\')!',
            ur: 'یہ بغیر کسی خون خرادے کے کامل رحمت کی فتح تھی! آپ ﷺ عاجزی سے مکہ داخل ہوئے اور ظلم کرنے والے پرانے دشمنوں کو عمومی معافی دی: "جاؤ آج تم پر کوئی گرفت نہیں، تم سب آزاد ہو!"۔',
            ar: 'كان فتحاً بغير دماء! دخل النبي ﷺ متواضعاً وأعلن العفو العام عن أعدائه الأداء: "اذهبوا فأنتم الطلاقاء"!.',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'At Fath Makkah, Prophet Muhammad ﷺ set the highest world standard of forgiveness and mercy.',
            ur: 'فتحِ مکہ کے موقع پر آپ ﷺ نے دنیا کے سامنے معافی اور رحم دلی کی بلند ترین مثال قائم فرمائی۔',
            ar: 'ضرب النبي ﷺ في فتح مكة أروع أسرار التسامح والعفو عند القدرة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Battle of Badr teaches that ultimate victory depends on divine support and faith, not raw numbers.',
          ur: 'غزوہ بدر سے سبق ملتا ہے کہ نصرت الٰہی کا دارومدار ظاہری گنتی پر نہیں بلکہ ایمان پر ہے۔',
          ar: 'غزوة بدر علمت المسلمين أن النصر من عند الله وليس بالعدد ولا بالعدة.',
        },
        {
          en: 'Treaty of Hudaybiyyah was a masterclass in strategic peace, foresight, and diplomacy.',
          ur: 'صلحِ حدیبیہ حکمتِ عملی، دور اندیشی اور پُر امن سفارت کاری کا شاہکار تھی۔',
          ar: 'صلح الحديبية كان فتحاً مبيناً وحكمة سياسية واستراتيجية رفيعة.',
        },
        {
          en: 'The Farewell Sermon (Khutbat Hajjat al-Wada\') abolished racism, interest/usury (Riba), and established rights for women.',
          ur: 'خطبہ حَجۃ الوداع نے نسل پرستی، سود کا خاتمہ کیا اور خواتین و انسانوں کے حقوق قائم کیے۔',
          ar: 'خطبة حجة الوداع حرمت الدماء والأموال والربا والتمييز العنصري، وأوصت بالنساء.',
        },
      ],
      quiz: [
        {
          id: 'l2_q10_1',
          type: 'mcq',
          question: {
            en: 'What was the revolutionary bond established between Muhajirun and Ansar in Madinah called?',
            ur: 'مدینہ منورہ میں مہاجرین اور انصار کے درمیان قائم ہونے والے تاریخ ساز رشتے کو کیا کہتے ہیں؟',
            ar: 'ما اسم أصل رابطة الإخاء التاريخية التي عقدها النبي ﷺ بين المهاجرين والأنصار؟',
          },
          explanation: {
            en: 'Mu\'akhah (The Pact of Brotherhood).',
            ur: 'مواخاتِ مدینہ (اخوت کا معاہدہ)۔',
            ar: 'المؤاخاة بين المهاجرين والأنصار.',
          },
          options: [
            { id: 'opt1', text: { en: 'Mu\'akhah (Pact of Brotherhood)', ur: 'مواخاتِ مدینہ', ar: 'المؤاخاة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Commercial alliance', ur: 'تجارتی اتحاد', ar: 'تحالف تجاري' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Tribe merge', ur: 'قبائلی مدغم', ar: 'اندماج قبلي' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_2',
          type: 'true_false',
          question: {
            en: 'Did Muslims win the Battle of Badr despite being severely outnumbered (313 vs 1000)?',
            ur: 'کیا مسلمانوں نے شدید قلتِ تعداد (313 بمقابلہ 1000) کے باوجود اللہ کی نصرت سے غزوہ بدر جیتا؟',
            ar: 'هل انتصر المسلمون في غزوة بدر بفضل الله رغم قلة عددهم (313 ضد 1000)؟',
          },
          explanation: {
            en: 'Yes! On 17th Ramadan 2 AH, 313 ill-equipped believers defeated the heavily armed Makkan army.',
            ur: 'جی ہاں! 17 رمضان 2 ہجری کو 313 مسلمانوں نے مکہ کے ایک ہزار کے مسلح لشکر کو شکست دی۔',
            ar: 'نعم! في 17 رمضان 2 هـ انتصر 313 مؤمناً على جيش المشركين العارم.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_3',
          type: 'mcq',
          question: {
            en: 'What critical lesson was highlighted during the Battle of Uhud regarding archers leaving their post early?',
            ur: 'غزوہ احد میں تیر اندازوں کے تیر اندازی کا درہ چھوڑنے کے واقعے سے کیا اہم ترین سبق ملا؟',
            ar: 'ما الدرس العظيم المستفاد من ترك الرماة لمواقعهم في غزوة أُحد؟',
          },
          explanation: {
            en: 'The vital necessity of strict obedience to prophetic leadership and remaining disciplined.',
            ur: 'قیادت اور نبی کریم ﷺ کے حکم کی کامل اطاعت و انضباط کی بنیادی اہمیت۔',
            ar: 'أهمية الطاعة التامة لأوامر القيادة والالتزام بالتعليمات.',
          },
          options: [
            { id: 'opt1', text: { en: 'The critical necessity of obedience to prophetic command and discipline', ur: 'نبی کریم ﷺ کے حکم کی اطاعت اور نظم و ضبط کا لزوم', ar: 'ضرورة الطاعة التامة لأوامر النبي والالتزام بالانضباط' }, isCorrect: true },
            { id: 'opt2', text: { en: 'That physical armor is useless', ur: 'کہ زرہ بیکار ہے', ar: 'أن الدروع لا تنفع' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Deserting early is good', ur: 'جلدی جگہ چھوڑنا اچھا ہے', ar: 'ترك الموقع مبكراً أمر جيد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_4',
          type: 'mcq',
          question: {
            en: 'Whose brilliant proposal was it to dig a trench (Khandaq) around Madinah to defend against invading allied armies?',
            ur: 'مدینہ منورہ کو متحد دشمن لشکروں سے بچانے کے لیے خندق کھودنے کا بہترین مشورہ کس صحابی نے دیا تھا؟',
            ar: 'من هو الصحابي الذي أشار بحفر الخندق حول المدينة لدفع أحزاب المشركين؟',
          },
          explanation: {
            en: 'Salman al-Farsi (RA).',
            ur: 'حضرت سلمان فارسی رضی اللہ عنہ۔',
            ar: 'سلمان الفارسي رضي الله عنه.',
          },
          options: [
            { id: 'opt1', text: { en: 'Salman al-Farsi (RA)', ur: 'حضرت سلمان فارسی رضی اللہ عنہ', ar: 'سلمان الفارسي رضي الله عنه' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Bilal ibn Rabah (RA)', ur: 'حضرت بلال رضی اللہ عنہ', ar: 'بلال بن رباح رضي الله عنه' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Khalid ibn al-Walid (RA)', ur: 'حضرت خالد بن ولید رضی اللہ عنہ', ar: 'خالد بن الوليد رضي الله عنه' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_5',
          type: 'true_false',
          question: {
            en: 'Did Allah refer to the Treaty of Hudaybiyyah in Surah Al-Fath as "Fathan Mubeena" (A Manifest Victory)?',
            ur: 'کیا اللہ تعالیٰ نے قرآن کریم (سورۃ الفتح) میں صلحِ حدیبیہ کو "فتحيًّا مَّبِينًا" (کھلی فتح) قرار دیا؟',
            ar: 'هل سمى الله تعالى صلح الحديبية في سورة الفتح "فتحاً مبيناً"؟',
          },
          explanation: {
            en: 'Yes! "Inna fatahna laka fathan mubeena" referred directly to the strategic peace opening hearts to Islam.',
            ur: 'جی ہاں! "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا" صلحِ حدیبیہ کے بارے میں نازل ہوئی۔',
            ar: 'نعم! قال تعالى: "إنا فتحنا لك فتحاً مبيناً" في شأن صلح الحديبية.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_6',
          type: 'mcq',
          question: {
            en: 'In which Hijri year did the victorious, peaceful Conquest of Makkah (Fath Makkah) take place?',
            ur: 'فتحِ مکہ کا عظیم الشان اور پُرامن واقعہ کس ہجری سال میں پیش آیا؟',
            ar: 'في أي سنة هجرية وقع فتح مكة المبارك؟',
          },
          explanation: {
            en: 'In 8 AH (8th year after Hijrah), in the blessed month of Ramadan.',
            ur: 'رمضان المبارک 8 ہجری میں۔',
            ar: 'في شهر رمضان من السنة الثامنة للهجرة (8 هـ).',
          },
          options: [
            { id: 'opt1', text: { en: '8 AH', ur: '8 ہجری', ar: '8 هـ' }, isCorrect: true },
            { id: 'opt2', text: { en: '2 AH', ur: '2 ہجری', ar: '2 هـ' }, isCorrect: false },
            { id: 'opt3', text: { en: '20 AH', ur: '20 ہجری', ar: '20 هـ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_7',
          type: 'mcq',
          question: {
            en: 'What memorable proclamation did Prophet Muhammad ﷺ utter to his defeated Quraysh persecutors at Fath Makkah?',
            ur: 'فتحِ مکہ کے دن نبی کریم ﷺ نے ظلم کرنے والے قریش کو معاف کرتے ہوئے کیا تاریخی جملہ ارشاد فرمایا؟',
            ar: 'ما هي الجملة الخالدة التي قالها النبي ﷺ لقريش بعد فتح مكة؟',
          },
          explanation: {
            en: '"Ithhabu fa-antum at-tulaqa\'" (Go, for you are free!).',
            ur: '"اذْهَبُوا فَأَنْتُمُ الطُّلَقَاءُ" (جاؤ تم سب آزاد ہو!)۔',
            ar: '"اذهبوا فأنتم الطلاقاء".',
          },
          options: [
            { id: 'opt1', text: { en: 'Ithhabu fa-antum at-tulaqa\' (Go, for you are free!)', ur: 'جاؤ، تم سب آزاد ہو!', ar: 'اذهبوا فأنتم الطلاقاء' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Pay gold taxes now', ur: 'اب سونا ٹیکس ادا کرو', ar: 'ادفعوا الضرائب الذهبية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Leave Makkah forever', ur: 'مکہ ہمیشہ کے لیے چھوڑ دو', ar: 'اخرجوا من مكة للأبد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_8',
          type: 'true_false',
          question: {
            en: 'Did Prophet Muhammad ﷺ declare at the Farewell Sermon (Khutbat Hajjat al-Wada\') that no Arab has superiority over a non-Arab except in Taqwa?',
            ur: 'کیا نبی کریم ﷺ نے خطبہ حَجۃ الوداع میں اعلان فرمایا کہ کسی عربی کو عجمی پر تقویٰ کے سوا کوئی فضیلت نہیں؟',
            ar: 'هل أعلن النبي ﷺ في خطبة الوداع أنه لا فضل لعربي على عجمي إلا بالتقوى؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ explicitly declared racial equality: "An Arab has no superiority over a non-Arab... except by piety and good action."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: کسی عربی کو عجمی پر اور کسی عجمی کو عربی پر تقویٰ کے سوا کوئی فضیلت حاصل نہیں۔',
            ar: 'نعم! قال ﷺ: "لا فضل لعربي على عجمي ولا لعجمي على عربي ولا لأحمر على أسود إلا بالتقوى".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_9',
          type: 'mcq',
          question: {
            en: 'What financial injustice did Prophet Muhammad ﷺ declare completely abolished in the Farewell Sermon?',
            ur: 'خطبہ حَجۃ الوداع میں آپ ﷺ نے کس معاشی و مالی ظلم کو مکمل طور پر باطل و منسوخ قرار دیا؟',
            ar: 'ما هو الظلم المالي والاستغلال الذي ألغاه النبي ﷺ تماماً في خطبة الوداع؟',
          },
          explanation: {
            en: 'Usury / Interest (Riba).',
            ur: 'سود (ربا)۔',
            ar: 'الربا جميعاً.',
          },
          options: [
            { id: 'opt1', text: { en: 'Riba (Usury / Interest)', ur: 'سود (ربا)', ar: 'الربا' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Trade markets', ur: 'تجارت', ar: 'التجارة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Gardening', ur: 'باغبانی', ar: 'الزراعة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Bilal reads about the Farewell Sermon. How can he apply its teachings in his school community?',
            ur: 'منظرنامہ: بلال خطبہ حَجۃ الوداع کے بارے میں پڑھتا ہے۔ وہ اپنے اسکول میں اس کی تعلیمات کو کیسے نافذ کر سکتا ہے؟',
            ar: 'سيناريو: قرأ بلال عن خطبة الوداع. كيف يطبق تعاليمها في مدرسته؟',
          },
          explanation: {
            en: 'By treating classmates of all races, backgrounds, and statuses with equal dignity and rejecting discrimination.',
            ur: 'تمام نسلوں اور پس منظر کے ہم جماعتوں کے ساتھ یکساں احترام کا برتاؤ کرے اور ہر قسم کے تعصب کو مسترد کرے۔',
            ar: 'بمعاملة زملائه من جميع الجنسيات والصفات باحترام متساوٍ ورفض التمييز.',
          },
          options: [
            { id: 'opt1', text: { en: 'Treating classmates of every background with equal respect and rejecting discrimination', ur: 'ہر پس منظر کے ساتھیوں سے یکساں احترام کا برتاؤ اور تعصب کا خاتمہ', ar: 'معاملة جميع الزملاء باحترام ومساواة ورفض التمييز العنصري' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Forming exclusive clubs', ur: 'مخصوص کلب بنانا', ar: 'تكوين أندية حصرية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Bragging about family wealth', ur: 'خاندانی دولت کا دکھاوا کرنا', ar: 'التفاخر بثراء العائلة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_11',
          type: 'true_false',
          question: {
            en: 'Did Prophet Muhammad ﷺ emphasize the gentle treatment, rights, and honor of women in his Farewell Sermon?',
            ur: 'کیا نبی کریم ﷺ نے خطبہ حَجۃ الوداع میں عورتوں کے ساتھ حسنِ سلوک، حقوق اور احترام کی بالخصوص وصیت فرمائی؟',
            ar: 'هل أوصى النبي ﷺ بالنساء خيراً وباحترام حقوقهن ورعايتهن في خطبة الوداع؟',
          },
          explanation: {
            en: 'Yes! He said: "I enjoin you to treat women kindly, for they are your partners..."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: "عورتوں کے معاملے میں خیر و حسنِ سلوک کی وصیت لو... وہ تمہاری شریکِ حیات ہیں"۔',
            ar: 'نعم! قال ﷺ: "استوصوا بالنساء خيراً؛ فإنهن عوان عندكم".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_12',
          type: 'mcq',
          question: {
            en: 'What document created by Prophet Muhammad ﷺ in Madinah established civil rights and religious freedom for all tribes?',
            ur: 'نبی کریم ﷺ نے مدینہ منورہ پہنچ کر تمام قبائل اور مذاہب کے لیے حقوق و مذہبی آزادی پر مبنی کون سا منشور تیار فرمایا؟',
            ar: 'ما هي الوثيقة التاريخية التي كتبها النبي ﷺ في المدينة لتنظيم الحقوق وحرية الاعتقاد؟',
          },
          explanation: {
            en: 'Mithaq al-Madinah (The Constitution / Charter of Madinah).',
            ur: 'میثاقِ مدینہ (دستورِ مدینہ)۔',
            ar: 'صحيفة المدينة (وثيقة المدينة).',
          },
          options: [
            { id: 'opt1', text: { en: 'Mithaq al-Madinah (Charter of Madinah)', ur: 'میثاقِ مدینہ', ar: 'صحيفة المدينة المنورة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'The Makkah Contract', ur: 'معاہدہ مکہ', ar: 'عقد مكة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'The Syrian Trade Pact', ur: 'شامی تجارتی معاہدہ', ar: 'حلف الشام التجاري' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_13',
          type: 'mcq',
          question: {
            en: 'What primary mosque was constructed in Madinah shortly after the Hijrah that served as the center of community life?',
            ur: 'ہجرت کے فوراً بعد مدینہ منورہ میں کون سی تاریخی مسجد تعمیر کی گئی جو اسلامی معاشرے کا مرکز بنی؟',
            ar: 'ما اسم المسجد النبوي الشريف الذي بُني فور الهجرة وكان مركزاً للأمة؟',
          },
          explanation: {
            en: 'Al-Masjid An-Nabawi (The Prophet\'s Mosque).',
            ur: 'مسجدِ نبوی الشریف۔',
            ar: 'المسجد النبوي الشريف.',
          },
          options: [
            { id: 'opt1', text: { en: 'Al-Masjid An-Nabawi', ur: 'مسجدِ نبوی الشریف', ar: 'المسجد النبوي الشريف' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Al-Azhar', ur: 'مسجد الازہر', ar: 'جامع الأزهر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Cordoba Mosque', ur: 'مسجد قرطبہ', ar: 'مسجد قرطبة' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_14',
          type: 'true_false',
          question: {
            en: 'Were idols in and around the Ka\'bah cleansed and removed upon the peaceful entry during Conquest of Makkah?',
            ur: 'کیا فتحِ مکہ کے دن کعبہ شریف کے اندر اور ارد گرد موجود تمام بتوں کو ہٹا کر پاک کر دیا گیا تھا؟',
            ar: 'هل تم تطهير الكعبة المشرفة وما حولها من الأصنام يوم فتح مكة؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ pointed at the idols reciting Surah Al-Isra: "Jaa\'al-haqqu wa zahaqal-batil" (Truth has come and falsehood has vanished).',
            ur: 'جی ہاں! آپ ﷺ نے بتوں کو ہٹاتے ہوئے آیت پڑھی: "جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ" (حق آ گیا اور باطل مٹ گیا)۔',
            ar: 'نعم! كان ﷺ يطعن الأصنام ويقول: "جاء الحق وزهق الباطل إن الباطل كان زهوقاً".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_15',
          type: 'mcq',
          question: {
            en: 'What two main sources did Prophet Muhammad ﷺ state he left behind for humanity to never go astray if held tightly?',
            ur: 'خطبہ حَجۃ الوداع میں آپ ﷺ نے ہدایت کے کن دو عظیم سرچشموں کا تذکرہ فرمایا جنہیں مضبوطی سے تھامنے پر کبھی گمراہی نہیں ہوگی؟',
            ar: 'ما هما المصدران العظيمان اللذان تركهما النبي ﷺ للأمة لن تضل ما تمسكت بهما؟',
          },
          explanation: {
            en: 'The Quran (Book of Allah) and the Sunnah of His Messenger ﷺ.',
            ur: 'کتاب اللہ (قرآن مجید) اور سنتِ رسول ﷺ۔',
            ar: 'كتاب الله وسنة نبيه ﷺ.',
          },
          options: [
            { id: 'opt1', text: { en: 'The Quran and the Sunnah of Prophet Muhammad ﷺ', ur: 'قرآن مجید اور سنتِ رسول ﷺ', ar: 'كتاب الله وسنة رسوله ﷺ' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Gold coins and silver vessels', ur: 'سونے چاندی کے سکے', ar: 'الذهب والفضة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Philosophical poetry books', ur: 'فلسفیانہ شعر و شاعری', ar: 'كتب الفلسفة والشعر' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_16',
          type: 'true_false',
          question: {
            en: 'Was Prophet Muhammad\'s ﷺ entire Seerah a practical implementation of the Holy Quran?',
            ur: 'کیا نبی کریم ﷺ کی پوری سیرتِ طیبہ قرآن مجید کا عملی نمونہ و تفسیر تھی؟',
            ar: 'هل كانت سيرة النبي ﷺ التطبيق العملي الكامل للقرآن الكريم؟',
          },
          explanation: {
            en: 'Yes! When Sayyidah Aishah (RA) was asked about the Prophet\'s character, she replied: "Kana khuluquhul-Quran" (His character was the Quran).',
            ur: 'جی ہاں! حضرت عائشہ رضی اللہ عنہا سے جب آپ ﷺ کے خلق کے بارے میں پوچھا گیا تو انہوں نے فرمایا: "کَانَ خُلُقُهُ الْقُرْآنَ" (آپ کا اخلاق قرآن ہی تھا)۔',
            ar: 'نعم! سُئلت عائشة رضي الله عنها عن خلق النبي فقالت: "كان خلقه القرآن".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_17',
          type: 'mcq',
          question: {
            en: 'What verse was revealed on Mount Arafat during the Farewell Pilgrimage declaring the completion of the Deen?',
            ur: 'حَجۃ الوداع کے موقع پر میدانِ عرفات میں دین کی مکمل ہونے کی کون سی تاریخی آیت نازل ہوئی؟',
            ar: 'ما هي الآية الكريمة التي نزلت يوم عرفة في حجة الوداع تعلن إكمال الدين؟',
          },
          explanation: {
            en: 'Surah Al-Ma\'idah (5:3): "Al-yawma akmaltu lakum deenakum wa atmamtu \'alaikum ni\'mati..." (This day I have perfected for you your religion...).',
            ur: 'سورۃ المائدہ (5:3): "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي..."۔',
            ar: '"اليوم أكملت لكم دينكم وأتممت عليكم نعمتي ورضيت لكم الإسلام ديناً".',
          },
          options: [
            { id: 'opt1', text: { en: 'Al-yawma akmaltu lakum deenakum (Surah Al-Ma\'idah 5:3)', ur: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (سورۃ المائدہ 5:3)', ar: 'اليوم أكملت لكم دينكم وأتممت عليكم نعمتي (المائدة: 3)' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Ayat al-Kursi', ur: 'آیت الکرسی', ar: 'آية الكرسي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Surah Al-Ikhlas', ur: 'سورۃ الاخلاص', ar: 'سورة الإخلاص' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_18',
          type: 'mcq',
          question: {
            en: 'What was the approximate number of Muslims present at the Farewell Pilgrimage listening to Khutbat Hajjat al-Wada\'?',
            ur: 'خطبہ حَجۃ الوداع سنتے وقت میدانِ عرفات میں کتنے صحابہ کرام اور مسلمان موجود تھے؟',
            ar: 'كم كان عدد المسلمين التقديري الحاضرين في حجة الوداع للاستماع إلى الخطبة؟',
          },
          explanation: {
            en: 'Over 100,000 companions (around 120,000 to 140,000 Muslims).',
            ur: 'ایک لاکھ سے زائد صحابہ کرام (تقریباً 120,000 سے 140,000)۔',
            ar: 'أكثر من 100 ألف صحابي (نحو 120,000 إلى 140,000 مسلم).',
          },
          options: [
            { id: 'opt1', text: { en: 'Over 100,000 companions', ur: 'ایک لاکھ سے زائد صحابہ کرام', ar: 'أكثر من 100,000 صحابي' }, isCorrect: true },
            { id: 'opt2', text: { en: '100 people', ur: '100 لوگ', ar: '100 شخص' }, isCorrect: false },
            { id: 'opt3', text: { en: '1,000 people', ur: '1000 لوگ', ar: '1,000 شخص' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_19',
          type: 'true_false',
          question: {
            en: 'Did Prophet Muhammad ﷺ ask the companions at the end of the Farewell Sermon: "Have I conveyed the Message?", and they responded "Yes!"?',
            ur: 'کیا خطبہ حَجۃ الوداع کے اختتام پر آپ ﷺ نے صحابہ سے پوچھا: "کیا میں نے پیغام پہنچا دیا؟"، اور صحابہ نے جواب دیا "جی ہاں!"؟',
            ar: 'هل سأل النبي ﷺ صحابته في ختام الخطبة: "ألا هل بلغت؟"، فقالوا: "نعم!"؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ raised his index finger to the sky saying: "O Allah, bear witness! O Allah, bear witness!" (Allahumma-shhad).',
            ur: 'جی ہاں! آپ ﷺ نے انگشتِ شہادت آسمان کی طرف اٹھا کر تین بار فرمایا: "اے اللہ! تو گواہ رہنا!"۔',
            ar: 'نعم! ورفع أصبعه الشريفة إلى السماء وقال: "اللهم اشهد، اللهم اشهد".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q10_20',
          type: 'mcq',
          question: {
            en: 'What is our lifelong responsibility after studying the Seerah of Prophet Muhammad ﷺ?',
            ur: 'نبی کریم ﷺ کی سیرتِ طیبہ کا مطالعہ کرنے کے بعد ہم پر زندگی بھر کی کیا بنیادی ذمہ داری عائد ہوتی ہے؟',
            ar: 'ما هي مسؤوليتنا المستمرة في الحياة بعد دراسة السيرة النبوية الشريفة؟',
          },
          explanation: {
            en: 'To love the Prophet ﷺ, follow his Sunnah in everyday life, show mercy to all people, and convey Islam\'s beautiful teachings.',
            ur: 'آپ ﷺ سے محبت رکھنا، زندگی میں سنت پر عمل کرنا، مخلوق پر رحم کرنا اور اسلام کے خوبصورت پیغام کو عام کرنا۔',
            ar: 'محبة النبي ﷺ، واتباع سنته الشريفة، والرحمة بالناس، ونشر هداية الإسلام.',
          },
          options: [
            { id: 'opt1', text: { en: 'To love the Prophet ﷺ, follow his Sunnah daily, show mercy, and embody Islam', ur: 'آپ ﷺ سے محبت، روزمرہ زندگی میں اتباعِ سنت، رحم دلی اور اسلام کی سچی تصویر بننا', ar: 'محبة النبي ﷺ واتباع سنته يومياً والرحمة والتمسك بهديه' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Just store books on a shelf', ur: 'صرف الماری میں کتابیں رکھنا', ar: 'تخزين الكتب على الرفوف فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Argue on internet forums', ur: 'انٹرنیٹ پر بلا وجہ بحث کرنا', ar: 'الجدال العقيم' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

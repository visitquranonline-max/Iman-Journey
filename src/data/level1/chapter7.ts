import { Category } from '../../types';

export const chapter7: Category = {
  id: 'lvl1_cat7',
  number: 7,
  title: {
    en: 'Chapter 7: The Hereafter (Akhirah)',
    ur: 'باب 7: آخرت کی زندگی',
    ar: 'الفصل 7: اليوم الآخر والآخرة',
  },
  description: {
    en: 'Understand the journey of the soul after death: Barzakh, Resurrection, the Day of Judgment, Accountability, and Eternal Destination.',
    ur: 'موت کے بعد روح کے سفر، عالمِ برزخ، بعث بعد الموت، روزِ قیامت، حساب کتاب اور ابدی زندگی کے بارے میں جانیں۔',
    ar: 'تفهم رحلة النفس بعد الموت: البرزخ، البعث، يوم القيامة، الحساب، والمصير الأبدي.',
  },
  iconName: 'Compass',
  badgeColor: 'bg-amber-600',
  lessons: [
    {
      id: 'lvl1_cat7_les1',
      title: {
        en: 'The Eternal Realm & Day of Accounting',
        ur: 'ابدی زندگی اور حساب و کتاب کا دن',
        ar: 'الدار الآخرة ويوم الحساب',
      },
      summary: {
        en: 'Belief in Akhirah teaches us that this Dunya is merely a temporary exam room. The real, everlasting life begins after death.',
        ur: 'آخرت پر ایمان ہمیں سکھاتا ہے کہ یہ دنیا عارضی امتحانی گاہ ہے، جبکہ حقیقی اور ابدی زندگی کا آغاز موت کے بعد ہوتا ہے۔',
        ar: 'الإيمان بالآخرة يعلمنا أن الدنيا دار ابتلاء واختبار مؤقتة، وأن الحياة الحقيقية الدائمة هي بعد الموت.',
      },
      estimatedMinutes: 6,
      dialogues: [
        {
          id: 'c7_d1',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'Sheikh Tariq, why is believing in Akhirah (The Hereafter) so important for a Muslim?',
            ur: 'شیخ طارق، ایک مسلمان کے لیے آخرت پر ایمان لانا اتنا اہم کیوں ہے؟',
            ar: 'يا شيخ طارق، لماذا يعتبر الإيمان باليوم الآخر مهماً جداً للمسلم؟',
          },
          sceneIllustration: 'Compass',
        },
        {
          id: 'c7_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Belief in Akhirah gives justice and meaning to life! Without Akhirah, people might think good deeds go unrewarded and bad deeds unpunished. But on Yawm al-Qiyamah, Allah will reward every tiny atom of good!',
            ur: 'آخرت کا عقیدہ زندگی میں انصاف اور مقصد پیدا کرتا ہے۔ اگر آخرت نہ ہوتی تو انسان سوچتا کہ نیکی ضائع ہو جائے گی۔ مگر قیامت کے دن اللہ ذرّہ برابر نیکی کا اجر بھی عطا فرمائے گا۔',
            ar: 'الإيمان بالآخرة يحقق العدل الإلهي المطلق! ففي يوم القيامة يجزي الله كل إنسان على مثقال ذرة من خير أو شر.',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Dunya is the place of action; Akhirah is the place of complete justice and reward.',
            ur: 'دنیا عمل کی جگہ ہے، جبکہ آخرت کامل انصاف اور بدلے کی جگہ ہے۔',
            ar: 'الدنيا دار عمل بلا حساب، والآخرة دار حساب بلا عمل.',
          },
        },
        {
          id: 'c7_d3',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'What are the main stages of the journey after death?',
            ur: 'موت کے بعد روح کے سفر کے اہم مراحل کون سے ہیں؟',
            ar: 'ما هي المراحل الرئيسية لرحلة الإنسان بعد الموت؟',
          },
          sceneIllustration: 'BookOpen',
        },
        {
          id: 'c7_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: '1. Death & Barzakh (interval in grave), 2. Resurrection (Ba\'th when Trumpet is blown), 3. Hashr (gathering on Mahshar plain), 4. Hisab (Scales & books of deeds), 5. Crossing Sirat Bridge to Jannah or Jahannam!',
            ur: '1۔ موت اور برزخ (قبر)، 2۔ بعث بعد الموت (صور کا پھونکا جانا)، 3۔ حشر (میدانِ محشر میں جمع ہونا)، 4۔ حساب و میزان، 5۔ پل صراط سے گزر کر جنت یا جہنم کا فیصلہ۔',
            ar: '1. الموت والبرزخ، 2. البعث بعد النفخ في الصور، 3. الحشر، 4. الحساب والميزان، 5. الصراط والمصير إلى الجنة أو النار.',
          },
          sceneIllustration: 'Heart',
          keyPoint: {
            en: 'Whoever does an atom\'s weight of good will see it on the Day of Judgment.',
            ur: 'جو ذرّہ برابر بھی نیکی کرے گا، وہ قیامت کے دن اس کا اجر دیکھ لے گا۔',
            ar: 'فمن يعمل مثقال ذرة خيراً يره.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Barzakh is the intermediate barrier state between death and Resurrection.',
          ur: 'برزخ موت سے لے کر قیامت تک کا درمیانی مرحلہ ہے۔',
          ar: 'البرزخ هو المرحلة الفاصلة بين الموت والبعث.',
        },
        {
          en: 'Mizan is the Divine Scale that weighs good and bad deeds with absolute perfection.',
          ur: 'میزان وہ ترازو ہے جس پر ہر انسان کے اچھے اور برے اعمال تو لے جائیں گے۔',
          ar: 'الميزان توزن به الأعمال يوم القيامة بدقة متناهية.',
        },
        {
          en: 'As-Sirat is the bridge over Jahannam through which believers cross safely into Jannah.',
          ur: 'پل صراط جہنم کے اوپر سے گزرنے والا راستہ ہے جسے اہل ایمان باحفاظت عبور کریں گے۔',
          ar: 'الصراط جسر منصوب فوق جهنم يعبره المؤمنون بسلام إلى الجنة.',
        },
        {
          en: 'Sincere repentance (Tawbah) and good deeds prepare us for a triumphant journey in Akhirah.',
          ur: 'سچی توبہ اور نیک اعمال آخرت کے اس سفر کو آسان اور کامیاب بناتے ہیں۔',
          ar: 'التوبة النصوح والعمل الصالح يضمنان النجاح في رحلة الآخرة.',
        },
      ],
      quiz: [
        {
          id: 'c7_q1',
          type: 'mcq',
          question: {
            en: 'What does the Arabic word "Akhirah" mean?',
            ur: 'عربی لفظ "آخرت" کا کیا مطلب ہے؟',
            ar: 'ما معنى كلمة "الآخرة" في اللغة والشريعة؟',
          },
          explanation: {
            en: 'Akhirah means The Hereafter / The Everlasting Life after death.',
            ur: 'آخرت کا مطلب ہے موت کے بعد کی ابدی زندگی۔',
            ar: 'الآخرة هي الحياة الأبدية بعد الموت.',
          },
          options: [
            { id: '1', text: { en: 'The Hereafter / Life after death', ur: 'موت کے بعد کی زندگی (آخرت)', ar: 'الحياة الآخرة بعد الموت' }, isCorrect: true },
            { id: '2', text: { en: 'Yesterday', ur: 'گزرا ہوا کل', ar: 'الأمس' }, isCorrect: false },
            { id: '3', text: { en: 'The current year', ur: 'موجودہ سال', ar: 'السنة الحالية' }, isCorrect: false },
            { id: '4', text: { en: 'Early morning', ur: 'صبح کا وقت', ar: 'الصباح الباكر' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q2',
          type: 'mcq',
          question: {
            en: 'What is the temporary worldly life called in Islamic terminology?',
            ur: 'اس عارضی دنیاوی زندگی کو اسلامی اصطلاح میں کیا کہتے ہیں؟',
            ar: 'ماذا تسمى الحياة الدنيوية المؤقتة في الاصطلاح الإسلامي؟',
          },
          explanation: {
            en: 'Dunya (The lower, temporary world).',
            ur: 'دنیا (عارضی اور نچلی زندگی)۔',
            ar: 'الدنيا (الحياة الدنيوية العاجلة).',
          },
          options: [
            { id: '1', text: { en: 'Dunya', ur: 'دنیا', ar: 'الدنيا' }, isCorrect: true },
            { id: '2', text: { en: 'Barzakh', ur: 'برزخ', ar: 'البرزخ' }, isCorrect: false },
            { id: '3', text: { en: 'Firdaus', ur: 'فردوس', ar: 'الفردوس' }, isCorrect: false },
            { id: '4', text: { en: 'Kawthar', ur: 'کوثر', ar: 'الكوثر' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q3',
          type: 'mcq',
          question: {
            en: 'What is "Barzakh"?',
            ur: '"برزخ" کسے کہتے ہیں؟',
            ar: 'ما هو "البرزخ"؟',
          },
          explanation: {
            en: 'Barzakh is the resting realm of souls between physical death and Resurrection.',
            ur: 'برزخ وہ درمیانی دنیا ہے جو انسان کی موت سے لے کر دوبارہ اٹھائے جانے تک قائم ہے۔',
            ar: 'البرزخ هو عالم الأرواح بين الموت والبعث.',
          },
          options: [
            { id: '1', text: { en: 'The soul\'s realm between death and Resurrection', ur: 'موت سے لے کر قیامت تک کا درمیانی مرحلہ', ar: 'عالم الأرواح والقبور بين الموت والبعث' }, isCorrect: true },
            { id: '2', text: { en: 'A city in Sham', ur: 'شام کا ایک شہر', ar: 'مدينة في الشام' }, isCorrect: false },
            { id: '3', text: { en: 'A deep ocean', ur: 'ایک گہرا سمندر', ar: 'محيط عميق' }, isCorrect: false },
            { id: '4', text: { en: 'A market place', ur: 'ایک منڈی', ar: 'سوق تجاري' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q4',
          type: 'mcq',
          question: {
            en: 'What is the event called when all human beings will be brought back to life from graves?',
            ur: 'اس واقعے کو کیا کہتے ہیں جب تمام انسانوں کو ان کی قبروں سے دوبارہ زندہ کر کے اٹھایا جائے گا؟',
            ar: 'ما اسم الحدث الذي يُعاد فيه البعث والإحياء لجميع البشر من قبورهم؟',
          },
          explanation: {
            en: 'Ba\'th / Resurrection (Al-Ba\'th ba\'dal Mawt).',
            ur: 'بعث بعد الموت (دوبارہ زندہ ہونا)۔',
            ar: 'البعث بعد الموت.',
          },
          options: [
            { id: '1', text: { en: 'Al-Ba\'th (Resurrection)', ur: 'بعث بعد الموت', ar: 'البعث بعد الموت' }, isCorrect: true },
            { id: '2', text: { en: 'Migration', ur: 'ہجرت', ar: 'الهجرة' }, isCorrect: false },
            { id: '3', text: { en: 'Eclipse', ur: 'گرہن', ar: 'الكسوف' }, isCorrect: false },
            { id: '4', text: { en: 'Tawaf', ur: 'طواف', ar: 'الطواف' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q5',
          type: 'mcq',
          question: {
            en: 'What is the plain called where all humanity will gather for judgment on the Day of Judgment?',
            ur: 'قیامت کے دن جہاں تمام انسانیت حساب کتاب کے لیے جمع ہوگی اس میدان کو کیا کہتے ہیں؟',
            ar: 'ما اسم الميدان الذي يجتمع فيه جميع الخلق للحساب يوم القيامة؟',
          },
          explanation: {
            en: 'Maidan al-Hashr (The Plain of Gathering).',
            ur: 'میدانِ محشر (جمع ہونے کا میدان)۔',
            ar: 'أرض المحشر (ميدان الحشر).',
          },
          options: [
            { id: '1', text: { en: 'Maidan al-Hashr (The Plain of Gathering)', ur: 'میدانِ محشر', ar: 'ميدان الحشر' }, isCorrect: true },
            { id: '2', text: { en: 'Valley of Badr', ur: 'وادیِ بدر', ar: 'وادي بدر' }, isCorrect: false },
            { id: '3', text: { en: 'Gaza strip', ur: 'غزہ', ar: 'غزة' }, isCorrect: false },
            { id: '4', text: { en: 'Mount Sinai', ur: 'طورِ سینا', ar: 'طور سيناء' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q6',
          type: 'mcq',
          question: {
            en: 'What is the Mizan in Akhirah?',
            ur: 'آخرت میں "میزان" کیا ہے؟',
            ar: 'ما هو "الميزان" يوم القيامة؟',
          },
          explanation: {
            en: 'The Mizan is the Divine Scale created by Allah to weigh good and bad deeds.',
            ur: 'میزان وہ عدل کا ترازو ہے جس پر بندوں کے اعمال تو لے جائیں گے۔',
            ar: 'الميزان هو ميزان العدل الإلهي لوزن أعمال العباد.',
          },
          options: [
            { id: '1', text: { en: 'The Divine Scale that weighs human deeds', ur: 'وہ ترازو جو اعمال کو تولے گا', ar: 'ميزان العدل لوزن أعمال العباد' }, isCorrect: true },
            { id: '2', text: { en: 'A golden crown', ur: 'ایک سنہرا تاج', ar: 'تاج ذهبي' }, isCorrect: false },
            { id: '3', text: { en: 'A book cover', ur: 'کتاب کا سرورق', ar: 'غلاف كتاب' }, isCorrect: false },
            { id: '4', text: { en: 'A fountain pen', ur: 'ایک قلم', ar: 'قلم حبر' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q7',
          type: 'mcq',
          question: {
            en: 'What will happen to those whose good deeds weigh heavier on the Mizan than bad deeds?',
            ur: 'جن لوگوں کی نیکیوں کا پلڑا برائیوں سے بھاری ہوگا ان کا انجام کیا ہوگا؟',
            ar: 'ما مصير من ثقلت موازينه بالحسنات يوم القيامة؟',
          },
          explanation: {
            en: 'Surah Al-Qari\'ah tells us: "He will be in a pleasant life in Jannah!"',
            ur: 'قرآن پاک کے مطابق جس کا پلوڑا بھاری ہوا وہ پسندیدہ اور پرسکون زندگی (جنت) میں ہوگا۔',
            ar: 'قال تعالى: "فهو في عيشة راضية" في الجنة.',
          },
          options: [
            { id: '1', text: { en: 'They will enter Jannah in supreme success', ur: 'وہ کامیابی کے ساتھ جنت میں داخل ہوں گے', ar: 'يدخلون الجنة في عيشة راضية' }, isCorrect: true },
            { id: '2', text: { en: 'They will be forgotten', ur: 'انہیں بھلا دیا جائے گا', ar: 'يُنسون' }, isCorrect: false },
            { id: '3', text: { en: 'They go back to Dunya', ur: 'وہ دنیا میں واپس آئیں گے', ar: 'يعودون للدنيا' }, isCorrect: false },
            { id: '4', text: { en: 'None of the above', ur: 'ان میں سے کوئی نہیں', ar: 'لا شيء مما سبق' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q8',
          type: 'mcq',
          question: {
            en: 'What is "As-Sirat"?',
            ur: '"پلِ صراط" کیا ہے؟',
            ar: 'ما هو "الصراط"؟',
          },
          explanation: {
            en: 'As-Sirat is the bridge set over Jahannam that everyone must cross on the way to Jannah.',
            ur: 'پل صراط جہنم کے اوپر سے گزرنے والا باریک راستہ ہے جو جنت کی طرف جاتا ہے۔',
            ar: 'الصراط جسر منصوب فوق جهنم للعبور إلى الجنة.',
          },
          options: [
            { id: '1', text: { en: 'The bridge set over Jahannam to reach Jannah', ur: 'جہنم پر قائم شدہ برج جس سے گزر کر جنت جانا ہے', ar: 'الجسر المنصوب فوق جهنم للوصول للجنة' }, isCorrect: true },
            { id: '2', text: { en: 'A highway in Arabia', ur: 'عرب کی ایک سڑک', ar: 'طريق في الجزيرة العربية' }, isCorrect: false },
            { id: '3', text: { en: 'A boat', ur: 'ایک کشتی', ar: 'قارب' }, isCorrect: false },
            { id: '4', text: { en: 'A garden wall', ur: 'باغ کی دیوار', ar: 'جدار حديقة' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q9',
          type: 'mcq',
          question: {
            en: 'How will righteous believers cross As-Sirat?',
            ur: 'پرہیزگار اور نیک مسلمان پل صراط کو کیسے عبور کریں گے؟',
            ar: 'كيف يعبر المؤمنون الصالحون الصراط؟',
          },
          explanation: {
            en: 'Depending on their light and deeds, some like lightning, some like wind, fast horses, or running.',
            ur: 'اپنے اعمال اور نور کے مطابق، کچھ بجلی کی کڑک کی طرح، کچھ تیز ہوا اور گھوڑے کی طرح گزر جائیں گے۔',
            ar: 'حسب نورهم وأعمالهم، كالبرق وكالريح وكأجاويد الخيل.',
          },
          options: [
            { id: '1', text: { en: 'Swiftly like lightning, wind, or fast horses', ur: 'بجلی کی کڑک، تیز ہوا یا گھوڑے کی رفتار سے', ar: 'كالبرق والريح والجواد السريع بسلام' }, isCorrect: true },
            { id: '2', text: { en: 'By airplane', ur: 'جہاز کے ذریعے', ar: 'بالطائرة' }, isCorrect: false },
            { id: '3', text: { en: 'By train', ur: 'ٹرین سے', ar: 'بالقطار' }, isCorrect: false },
            { id: '4', text: { en: 'They will get stuck forever', ur: 'وہ ہمیشہ اٹکے رہیں گے', ar: 'يتعثرون للأبد' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q10',
          type: 'true_false',
          question: {
            en: 'Will anyone be wronged or given less than their true reward on the Day of Judgment?',
            ur: 'کیا قیامت کے دن کسی انسان پر رتی برابر بھی ظلم یا ناانصافی ہوگی؟',
            ar: 'هل يُظلم أحد أو يُنقص من أجره شيئاً يوم القيامة؟',
          },
          explanation: {
            en: 'No! Allah says: "And your Lord does not wrong anyone" (Surah Al-Kahf 18:49).',
            ur: 'جی نہیں! اللہ تعالیٰ نے فرمایا: آپ کا رب کسی پر ظلم نہیں کرتا۔',
            ar: 'لا! قال تعالى: "ولا يظلم ربك أحداً".',
          },
          options: [
            { id: '1', text: { en: 'No, complete and perfect justice for all', ur: 'جی نہیں، تمام مخلوق کے ساتھ کامل عدل ہوگا', ar: 'لا، العدل الكامل للجميع' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, people will be wronged', ur: 'جی ہاں، ظلم ہوگا', ar: 'نعم يُظلم الناس' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q11',
          type: 'mcq',
          question: {
            en: 'What blessed reservoir water (Hawd) will Prophet Muhammad ﷺ give to his followers on the Day of Judgment?',
            ur: 'قیامت کی شدید پیاس میں ہمارے نبی ﷺ اپنے امتیوں کو کس مبارک حوض کا پانی پلائیں گے؟',
            ar: 'ما اسم الحوض الميمون الذي يسقي منه النبي ﷺ أمته يوم القيامة؟',
          },
          explanation: {
            en: 'Hawd al-Kawthar (The Basin of Kawthar), water whiter than milk and sweeter than honey.',
            ur: 'حوضِ کوثر جس کا پانی دودھ سے زیادہ سفید اور شہد سے زیادہ میٹھا ہے۔',
            ar: 'حوض الكوثر أبيض من اللبن وأحلى من العسل.',
          },
          options: [
            { id: '1', text: { en: 'Hawd al-Kawthar', ur: 'حوضِ کوثر', ar: 'حوض الكوثر' }, isCorrect: true },
            { id: '2', text: { en: 'Zamzam well', ur: 'کنواں زمزم', ar: 'بئر زمزم' }, isCorrect: false },
            { id: '3', text: { en: 'Nile river', ur: 'دریائے نیل', ar: 'نهر النيل' }, isCorrect: false },
            { id: '4', text: { en: 'Euphrates', ur: 'دریائے فرات', ar: 'نهر الفرات' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q12',
          type: 'true_false',
          question: {
            en: 'Will a person who drinks once from Hawd al-Kawthar ever feel thirsty again?',
            ur: 'کیا حوضِ کوثر کا ایک گھونٹ پینے والا انسان اس کے بعد کبھی دوبارہ پیاسا ہوگا؟',
            ar: 'هل يظمأُ مَنْ شَرِبَ شربةً من حوض الكوثر بعدَها أبداً؟',
          },
          explanation: {
            en: 'No! Hadith states: "Whoever drinks a sip from it will never experience thirst ever again!"',
            ur: 'جی نہیں! جو ایک بار پی لے گا اسے پھر کبھی پیاس نہیں لگے گی۔',
            ar: 'لا! من شرب منه شربة لا يظمأ بعدها أبداً.',
          },
          options: [
            { id: '1', text: { en: 'Never feel thirsty ever again', ur: 'کبھی دوبارہ پیاس نہیں لگے گی', ar: 'لا يظمأ بعدها أبداً' }, isCorrect: true },
            { id: '2', text: { en: 'Will be thirsty in 5 minutes', ur: '5 منٹ بعد پھر پیاس لگے گی', ar: 'يظمأ بعد 5 دقائق' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q13',
          type: 'mcq',
          question: {
            en: 'In which hand will the righteous believers receive their Book of Deeds on Judgment Day?',
            ur: 'قیامت کے دن نیک اور پرہیزگار لوگوں کو ان کا نامہِ اعمال کس ہاتھ میں دیا جائے گا؟',
            ar: 'في أي يد يُعطى المؤمن الصالح كتاب أعماله يوم القيامة؟',
          },
          explanation: {
            en: 'In their RIGHT hand with great joy and ease.',
            ur: 'دائیں ہاتھ میں مسرت اور خوشی کے ساتھ۔',
            ar: 'في يده اليمنى بفرح وسرور.',
          },
          options: [
            { id: '1', text: { en: 'Right hand (Yameen)', ur: 'دائیں ہاتھ میں (یمین)', ar: 'في اليد اليمنى' }, isCorrect: true },
            { id: '2', text: { en: 'Left hand', ur: 'بائیں ہاتھ میں', ar: 'في اليد اليسرى' }, isCorrect: false },
            { id: '3', text: { en: 'Behind their back', ur: 'پیٹھ کے پیچھے', ar: 'وراء ظهره' }, isCorrect: false },
            { id: '4', text: { en: 'No book given', ur: 'کوئی کتاب نہیں ملے گی', ar: 'لا يُعطى كتاباً' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q14',
          type: 'mcq',
          question: {
            en: 'What does "Shafa\'ah" mean regarding Prophet Muhammad ﷺ on the Day of Judgment?',
            ur: 'قیامت کے دن نبی کریم ﷺ کی "شفاعت" کا کیا مطلب ہے؟',
            ar: 'ما معنى "الشفاعة" للنبي محمد ﷺ يوم القيامة؟',
          },
          explanation: {
            en: 'Shafa\'ah is Intercession — Prophet Muhammad ﷺ pleading to Allah to relieve hardship and grant Jannah to believers.',
            ur: 'شفاعت کا مطلب ہے نبی کریم ﷺ کا امتیوں کی بخشش اور بلندیِ درجات کے لیے اللہ کے حضور سفارش فرمانا۔',
            ar: 'الشفاعة هي طلب النبي ﷺ من الله تعالى الرحمة والجنة لأمته.',
          },
          options: [
            { id: '1', text: { en: 'Intercession to ask Allah\'s forgiveness & entry to Jannah', ur: 'اللہ سے امتیوں کے لیے معافی اور جنت کی سفارش کرنا', ar: 'الشفاعة لأمته للدخول إلى الجنة' }, isCorrect: true },
            { id: '2', text: { en: 'Building houses in Dunya', ur: 'دنیا میں مکانات بنانا', ar: 'بناء البيوت في الدنيا' }, isCorrect: false },
            { id: '3', text: { en: 'Trading food', ur: 'خوراک کی تجارت', ar: 'تجارة الطعام' }, isCorrect: false },
            { id: '4', text: { en: 'Writing books', ur: 'کتابیں لکھنا', ar: 'كتابة الكتب' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q15',
          type: 'true_false',
          question: {
            en: 'Can anyone know the exact date or time when the Day of Judgment will occur?',
            ur: 'کیا اللہ کے سوا کوئی بھی شخص یا فرشتہ قیامت کے قائم ہونے کی حتمی تاریخ جانتا ہے؟',
            ar: 'هل يعلم أحد تاريخ يوم القيامة أو ساعته بالضبط إلا الله؟',
          },
          explanation: {
            en: 'No! The knowledge of the exact Hour belongs exclusively to Allah alone.',
            ur: 'جی نہیں! قیامت کا حتمی وقت صرف اللہ تعالیٰ ہی کے علم میں ہے۔',
            ar: 'لا! علم الساعة عند الله وحده لا شريك له.',
          },
          options: [
            { id: '1', text: { en: 'No, only Allah knows the exact Hour', ur: 'جی نہیں، صرف اللہ ہی کو حتمی وقت کا علم ہے', ar: 'لا، لا يعلم وقتها إلا الله وحده' }, isCorrect: true },
            { id: '2', text: { en: 'Yes, astrologers know', ur: 'جی ہاں، نجومی جانتے ہیں', ar: 'نعم يعلمه المنججون' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q16',
          type: 'mcq',
          question: {
            en: 'What essential question will be asked first on Judgment Day about daily worship?',
            ur: 'قیامت کے دن سب سے پہلے کس اہم عبادت کا حساب لیا جائے گا؟',
            ar: 'ما هي العبادة التي يُحاسب عليها العبد أولاً يوم القيامة؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ said: "The first thing for which a servant will be called to account on Judgment Day is Salah (Prayer)."',
            ur: 'نبی کریم ﷺ نے فرمایا: قیامت کے دن بندے سے سب سے پہلے نماز کا حساب لیا جائے گا۔',
            ar: 'أول ما يحاسب عليه العبد يوم القيامة الصلاة.',
          },
          options: [
            { id: '1', text: { en: 'Salah (Daily Prayers)', ur: 'نماز (نمازِ پنجگانہ)', ar: 'الصلاة' }, isCorrect: true },
            { id: '2', text: { en: 'How much money made', ur: 'کتنا پیسہ کمایا', ar: 'كم جمع من المال' }, isCorrect: false },
            { id: '3', text: { en: 'What car driven', ur: 'کون سی گاڑی چلائی', ar: 'نوع السيارة' }, isCorrect: false },
            { id: '4', text: { en: 'How many followers on phone', ur: 'فون پر کتنے فالوورز تھے', ar: 'عدد المتابعين' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q17',
          type: 'true_false',
          question: {
            en: 'Does remembering death and Akhirah encourage us to be kind and avoid hurting people?',
            ur: 'کیا آخرت اور موت کی یاد انسان کو مہربان بناتی ہے اور ظلم سے روکتی ہے؟',
            ar: 'هل تذكر الموت والآخرة يدفعنا للإحسان وتجنب إيذاء الآخرين؟',
          },
          explanation: {
            en: 'Yes! Remembering accountability keeps our hearts humble and focused on good deeds.',
            ur: 'جی ہاں! اخرت کا ڈر اور فکر انسان کو ظلم سے بچاتی ہے اور اخلاق سنوارتی ہے۔',
            ar: 'نعم! تذكر الحساب يبعث على التواضع وعمل الخير.',
          },
          options: [
            { id: '1', text: { en: 'True', ur: 'سچ (جی ہاں)', ar: 'صحيح' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q18',
          type: 'mcq',
          question: {
            en: 'What is "Sadaqah Jariyah"?',
            ur: '"صدقہ جاریہ" کا کیا مطلب ہے؟',
            ar: 'ما هي "الصدقة الجارية"؟',
          },
          explanation: {
            en: 'A continuous charity (like digging a water well, building a mosque, or teaching Quran) that yields reward even after death.',
            ur: 'ایسی نیکی (جیسے کنواں کھدوانا، مسجد بنانا یا علم سکھانا) جس کا ثواب موت کے بعد بھی ملتا رہتا ہے۔',
            ar: 'صدقة يستمر أجرها للميت بعد وفاته كبناء مسجد أو حفر بئر أو تعليم علم نافع.',
          },
          options: [
            { id: '1', text: { en: 'Continuous charity giving reward even after death', ur: 'ایسی نیکی جس کا ثواب موت کے بعد بھی جاری رہتا ہے', ar: 'صدقة يستمر أجرها بعد الموت' }, isCorrect: true },
            { id: '2', text: { en: 'One-time meal', ur: 'ایک وقت کا کھانا', ar: 'وجبة واحدة' }, isCorrect: false },
            { id: '3', text: { en: 'Buying a toy', ur: 'کھلونا خریدنا', ar: 'شراء لعبة' }, isCorrect: false },
            { id: '4', text: { en: 'Shopping discount', ur: 'خریداری پر چھوٹ', ar: 'خصم تجاري' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q19',
          type: 'true_false',
          question: {
            en: 'Will those who repented sincerely before death find Allah Most Forgiving on Judgment Day?',
            ur: 'کیا وہ لوگ جنہوں نے موت سے پہلے سچی توبہ کر لی، قیامت کے دن اللہ کو انتہائی معاف فرمانے والا پائیں گے؟',
            ar: 'هل يجدُ التائبون توبةً نصوحاً قبل الموت اللهَ غفوراً رحيماً يوم القيامة؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "The one who repents from sin is like one who has no sin."',
            ur: 'جی ہاں! سچی توبہ کرنے والا ایسا ہے جیسے اس نے گناہ کیا ہی نہ ہو۔',
            ar: 'نعم! قال النبي ﷺ: "التائب من الذنب كمن لا ذنب له".',
          },
          options: [
            { id: '1', text: { en: 'True (Allah forgives all sins through Tawbah)', ur: 'سچ (توبہ سے تمام گناہ معاف ہو جاتے ہیں)', ar: 'صحيح (التوبة تمحو ما قبلها)' }, isCorrect: true },
            { id: '2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'c7_q20',
          type: 'mcq',
          question: {
            en: 'What prayer should a Muslim make asking for goodness in both Dunya and Akhirah?',
            ur: 'ایک مسلمان کو دنیا اور آخرت دونوں کی بھلائی کے لیے کون سی جامع مسنون دعا مانگنی چاہیے؟',
            ar: 'ما هي الدعاء الجامع لخير الدنيا والآخرة؟',
          },
          explanation: {
            en: '"Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar".',
            ur: '"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار"۔',
            ar: '"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار".',
          },
          options: [
            { id: '1', text: { en: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan...', ur: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار', ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار' }, isCorrect: true },
            { id: '2', text: { en: 'Give me money only', ur: 'مجھے صرف روپیہ دو', ar: 'أعطني المال فقط' }, isCorrect: false },
            { id: '3', text: { en: 'Make me famous', ur: 'مجھے مشہور کر دو', ar: 'اجعلني مشهوراً' }, isCorrect: false },
            { id: '4', text: { en: 'None', ur: 'کوئی نہیں', ar: 'لا شيء' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

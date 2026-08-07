import { Category } from '../../types';

export const chapter8: Category = {
  id: 'lvl2_cat8',
  number: 8,
  title: {
    en: 'Chapter 8: Jannah and Jahannam (Intermediate)',
    ur: 'باب 8: جنت اور جہنم (درمیانی سطح)',
    ar: 'الفصل 8: الجنة والنار (المستوى المتوسط)',
  },
  description: {
    en: 'Understand the ultimate eternal abodes: the blessings and peace of Jannah for believers, the warning of Jahannam, and the power of sincere Tawbah.',
    ur: 'ابدی ٹھکانوں کی حقیقت: مومنین کے لیے جنت کی نعمتیں اور راحت، جہنم کی وعید اور سچی توبہ کی طاقت کا گہرا جائزہ۔',
    ar: 'فهم الدارين الأبديتين: نعيم الجنة للمؤمنين وسلامها، والتحذير من النار، وقوة التوبة الصادقة.',
  },
  iconName: 'Sparkles',
  badgeColor: 'bg-emerald-600',
  lessons: [
    {
      id: 'lvl2_cat8_les1',
      title: {
        en: 'The Eternal Abodes: Jannah and Jahannam',
        ur: 'ابدی ٹھکانے: جنت اور جہنم',
        ar: 'الداران الباقيتان: الجنة والنار',
      },
      summary: {
        en: 'Jannah is the abode of eternal bliss, peace, and honor created for those who believe and do good deeds. Jahannam is a severe warning against rebellion, injustice, and major sins, reminding humans to practice sincere repentance (Tawbah).',
        ur: 'جنت سلامتی، لازوال نعمتوں اور عزت کا ابدی گھر ہے جو مومنین اور نیکوکاروں کے لیے تیار کیا گیا ہے۔ جہنم سرکشی اور ظلم پر ڈرانے والا گھر ہے جو انسان کو توبہ پر ابھارتا ہے۔',
        ar: 'الجنة دار السلام والنعيم المقيم أعدت للمتقين. والنار تحذير من العصيان والظلم، لتذكر العبد بأهمية التوبة النصوح.',
      },
      estimatedMinutes: 8,
      dialogues: [
        {
          id: 'l2_c8_d1',
          character: 'maryam',
          characterName: { en: 'Maryam', ur: 'مریم', ar: 'مريم' },
          avatar: '👧',
          speech: {
            en: 'Sheikh Tariq, how does the Quran describe the beauty, rivers, and peace of Jannah for those who do good?',
            ur: 'شیخ طارق! قرآن پاک میں نیکی کرنے والوں کے لیے جنت کے حسن، نہروں اور سلامتی کا کیا نقشہ کھینچا گیا ہے؟',
            ar: 'يا شيخ طارق! كيف وصف القرآن الكريم جمال الجنة وأنهارها وسلامها للمحسنين؟',
          },
          sceneIllustration: 'Sparkles',
        },
        {
          id: 'l2_c8_d2',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'Jannah has rewards that no eye has ever seen, no ear has ever heard, and no human heart has ever conceived! There is no illness, aging, grief, or fatigue, only pure joy and rivers of milk, honey, and pure water!',
            ur: 'جنت میں ایسی نعمتیں ہیں جو نہ کسی آنکھ نے دیکھیں، نہ کسی کان نے سنیں، اور نہ کسی انسان کے دل میں ان کا گمان گزرا! وہاں نہ بیماری ہے، نہ بڑھاپا، نہ غم، نہ تھکن—صرف ابدی خوشی اور دودھ و شہد کی نہریں ہیں!',
            ar: 'في الجنة ما لا عين رأت ولا أذن سمعت ولا خطر على قلب بشر! لا مرض ولا كبر ولا حزن ولا تعب، بل سرور دائم وأنهار من لبن وعسل وماء!',
          },
          sceneIllustration: 'Sun',
          keyPoint: {
            en: 'Jannah is the ultimate eternal home of bliss, free from all sorrow, sickness, or fatigue.',
            ur: 'جنت ابدی نعمتوں کا گھر ہے جو تمام غموں، بیماریوں اور تھکاوٹ سے پاک ہے۔',
            ar: 'الجنة هي دار النعيم الأبدي الخالية من كل حزن ومرض ونصب.',
          },
        },
        {
          id: 'l2_c8_d3',
          character: 'zayd',
          characterName: { en: 'Zayd', ur: 'زید', ar: 'زيد' },
          avatar: '👦',
          speech: {
            en: 'What is the absolute greatest reward for the people of Jannah above all other blessings?',
            ur: 'جنت میں تمام نعمتوں سے بڑھ کر جنتیوں کے لیے سب سے بڑا انعام کیا ہوگا؟',
            ar: 'ما هي النعمة العظمى الأجلّ لأهل الجنة فوق كل نعيم؟',
          },
          sceneIllustration: 'Heart',
        },
        {
          id: 'l2_c8_d4',
          character: 'tariq',
          characterName: { en: 'Sheikh Tariq', ur: 'شیخ طارق', ar: 'الشيخ طارق' },
          avatar: '👳‍♂️',
          speech: {
            en: 'It is Ru\'yatullah—beholding the Countenance of Allah the Most Generous! Surah Al-Qiyamah says: "Faces that Day will be radiant, looking at their Lord."',
            ur: 'وہ ہے "رؤیتِ الٰہی"—اپنے ربِ کریم کا دیدارہ! سورۃ القیامۃ میں ہے: "وُجُوهٌ يَوْمَئِذٍ نَاضِرَةٌ إِلَى رَبِّهَا نَاظِرَةٌ" (اس دن کچھ چہرے طراوت والے اپنے رب کو دیکھ رہے ہوں گے)۔',
            ar: 'هي رؤية وجه الله الكريم! قال تعالى في سورة القيامة: "وجوه يومئذ ناضرة إلى ربها ناظرة".',
          },
          sceneIllustration: 'Sparkles',
          keyPoint: {
            en: 'Seeing Allah\'s Countenance (Ru\'yatullah) is the supreme pleasure of Jannah.',
            ur: 'اللہ تعالیٰ کا دیدار (رؤیتِ الٰہی) اہل الجنت کا سب سے بڑا انعام ہے۔',
            ar: 'رؤية وجه الله الكريم هي أعظم نعيم يمن به الله على أهل الجنة.',
          },
        },
      ],
      importantPoints: [
        {
          en: 'Jannah has eight doors, including Bab As-Sadaqah, Bab Ar-Rayyan (for those who fast), and Bab As-Salah.',
          ur: 'جنت کے 8 دروازے ہیں، جن میں باب الصدقہ، باب الريان (روزے داروں کے لیے)، اور باب الصلاۃ شامل ہیں۔',
          ar: 'للجنة ثمانية أبواب منها باب الريان للصائمين وباب الصدقة وباب الصلاة.',
        },
        {
          en: 'Jahannam is a serious divine warning against unrepented sins, encouraging believers to seek Tawbah.',
          ur: 'جہنم گناہوں پر سنجیدہ الٰہی وعید ہے جو مومن کو سچی توبہ کی طرف راغب کرتی ہے۔',
          ar: 'النار تحذير شديد يدعو العبد للفرار إلى الله والتوبة النصوح.',
        },
        {
          en: 'Tawbah Nasuha (sincere repentance) wipes away sins completely when done before death.',
          ur: 'توبہ نصوح (سچی توبہ) گناہوں کو مکمل طور پر مٹا دیتی ہے جب وہ موت سے قبل کی جائے۔',
          ar: 'التوبة النصوح تمحو السئيات وتفتح أبواب الرحمة قبل الموت.',
        },
      ],
      quiz: [
        {
          id: 'l2_q8_1',
          type: 'mcq',
          question: {
            en: 'What famous Hadith phrase describes the unimaginable blessings of Jannah?',
            ur: 'حدیث شریف میں جنت کی بے مثال نعمتوں کی وضاحت کس مبارک جملے سے کی گئی ہے؟',
            ar: 'ما هي العبارة النبوية الشهيرة التي تصف نعيم الجنة الذي لا يتصوره عقل؟',
          },
          explanation: {
            en: 'Prophet Muhammad ﷺ described Jannah: "In it is what no eye has seen, no ear has heard, and no human heart has conceived."',
            ur: 'آپ ﷺ نے فرمایا: "اس میں وہ نعمتیں ہیں جو نہ کسی آنکھ نے دیکھیں، نہ کسی کان نے سنیں اور نہ کسی دل میں ان کا خیال گزرا۔"',
            ar: 'قال ﷺ: "فيها ما لا عين رأت، ولا أذن سمعت، ولا خطر على قلب بشر".',
          },
          options: [
            { id: 'opt1', text: { en: 'What no eye has seen, no ear heard, nor human heart conceived', ur: 'نہ کسی آنکھ نے دیکھا، نہ کان نے سنا، نہ دل میں خیال گزرا', ar: 'ما لا عين رأت ولا أذن سمعت ولا خطر على قلب بشر' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Like earthly hotels', ur: 'دنیاوی ہوٹلوں کی طرح', ar: 'كالفنادق الدنيوية' }, isCorrect: false },
            { id: 'opt3', text: { en: 'A temporary park', ur: 'ایک عارضی پارک', ar: 'منتزه مؤقت' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_2',
          type: 'true_false',
          question: {
            en: 'Is there any sickness, aging, grief, or death inside Jannah?',
            ur: 'کیا جنت میں کوئی بیماری، بڑھاپا، غم یا موت ہوگی؟',
            ar: 'هل يوجد في الجنة مرض أو كبر في السن أو حزن أو موت؟',
          },
          explanation: {
            en: 'No! The people of Jannah live in perpetual youth, health, joy, and eternal life.',
            ur: 'ہرگز نہیں! اہل الجنت ہمیشہ جوان، تندرست، خوش اور زندہ رہیں گے۔',
            ar: 'لا! أهل الجنة في شباب وصحة وسرور وخلود دائم.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (No sickness, death, or grief exists in Jannah)', ur: 'جھوٹ (جنت میں بیماری، غم یا موت نہیں ہوگی)', ar: 'خطأ (لا مرض ولا حزن ولا موت في الجنة)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q8_3',
          type: 'mcq',
          question: {
            en: 'What is the special gate of Jannah reserved specifically for those who observe Saum (Fasting)?',
            ur: 'جنت کا وہ کون سا مخصوص دروازہ ہے جو صرف روزے داروں کے لیے مخصوص فرمایا گیا ہے؟',
            ar: 'ما اسم باب الجنة الخاص بالصائمين؟',
          },
          explanation: {
            en: 'Bab Ar-Rayyan is the door reserved for those who fast for Allah\'s sake.',
            ur: 'باب الريان روزے داروں کے لیے مخصوص ہے۔',
            ar: 'باب الريان هو الباب المخصص للصائمين.',
          },
          options: [
            { id: 'opt1', text: { en: 'Bab Ar-Rayyan', ur: 'باب الريان', ar: 'باب الريان' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Bab As-Sadaqah', ur: 'باب الصدقہ', ar: 'باب الصدقة' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Bab Al-Jihad', ur: 'باب الجهاد', ar: 'باب الجهاد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_4',
          type: 'mcq',
          question: {
            en: 'How many total main gates does Jannah possess as mentioned in authentic Hadith?',
            ur: 'صحیح احادیث کے مطابق جنت کے کل کتنے بنیادی دروازے ہیں؟',
            ar: 'كم عدد أبواب الجنة الرئيسية كما ورد في الحديث الصحيح؟',
          },
          explanation: {
            en: 'There are 8 gates of Jannah.',
            ur: 'جنت کے 8 دروازے ہیں۔',
            ar: 'للجنة 8 أبواب.',
          },
          options: [
            { id: 'opt1', text: { en: '8 Gates', ur: '8 دروازے', ar: '8 أبواب' }, isCorrect: true },
            { id: 'opt2', text: { en: '4 Gates', ur: '4 دروازے', ar: '4 أبواب' }, isCorrect: false },
            { id: 'opt3', text: { en: '100 Gates', ur: '100 دروازے', ar: '100 باب' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_5',
          type: 'mcq',
          question: {
            en: 'What is the absolute highest level of Jannah situated right underneath Allah\'s Throne?',
            ur: 'جنت کا سب سے اعلیٰ اور بلند مقام کون سا ہے جو اللہ تعالیٰ کے عرش کے بالکل نیچے ہے؟',
            ar: 'ما هي أعلى درجة في الجنة وتقع تحت عرش الرحمن مباشرة؟',
          },
          explanation: {
            en: 'Jannat al-Firdaus (Al-Firdaus Al-A\'la).',
            ur: 'جنت الفردوس الاعلیٰ۔',
            ar: 'جنات الفردوس الأعلى.',
          },
          options: [
            { id: 'opt1', text: { en: 'Jannat al-Firdaus', ur: 'جنت الفردوس الاعلیٰ', ar: 'جنات الفردوس الأعلى' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Jannat al-Ma\'wa', ur: 'جنت المأویٰ', ar: 'جنات المأوى' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Dar as-Salam', ur: 'دار السلام', ar: 'دار السلام' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_6',
          type: 'true_false',
          question: {
            en: 'Is beholding Allah\'s Countenance (Ru\'yatullah) considered the greatest blessing of Jannah?',
            ur: 'کیا اللہ کے دیدار (رؤیتِ الٰہی) کا شرف حاصل ہونا جنت کی تمام نعمتوں سے بڑا انعام ہے؟',
            ar: 'هل تعتبر رؤية وجه الله الكريم أعظم نعيم أهل الجنة إطلاقاً؟',
          },
          explanation: {
            en: 'Yes! The Prophet ﷺ said when the dwellers of Jannah look at Allah\'s Face, they will forget all other pleasures.',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا کہ جب جنتی اللہ تعالیٰ کا دیدار کریں گے تو وہ باقی تمام نعمتیں بھول جائیں گے۔',
            ar: 'نعم! قال ﷺ إن أهل الجنة إذا ينظرون إلى وجه ربهم ينسون كل نعيم سواها.',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_7',
          type: 'mcq',
          question: {
            en: 'What is the purpose of divine warnings about Jahannam in Quranic revelation?',
            ur: 'قرآن مجید میں جہنم کی وعید بیان فرمانے کا بنیادی مقصد کیا ہے؟',
            ar: 'ما الغرض الهادف من التحذيرات القرأنية عن النار؟',
          },
          explanation: {
            en: 'To awaken human conscience, deter people from tyranny/sin, and inspire sincere Tawbah (repentance).',
            ur: 'انسانی ضمیر کو بیدار کرنا، گناہ اور ظلم سے روکنا اور سچی توبہ کی طرف لانا۔',
            ar: 'لإيقاظ الضمير الإنساني والردع عن الظلم وحث العبد على التوبة.',
          },
          options: [
            { id: 'opt1', text: { en: 'To deter from sin and inspire sincere repentance and righteousness', ur: 'گناہ سے روکنا اور سچی توبہ و نیکی کی ترغیب دینا', ar: 'للتخويف المنجي والردع عن الذنوب والحث على التوبة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'To cause despair only', ur: 'صرف مایوس کرنا', ar: 'لإيقاع اليأس فقط' }, isCorrect: false },
            { id: 'opt3', text: { en: 'For dramatic stories', ur: 'صرف کہانیاں سنانا', ar: 'للقصص الدرامية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_8',
          type: 'mcq',
          question: {
            en: 'What are the essential steps of Tawbah Nasuha (sincere repentance)?',
            ur: 'توبہ نصوح (سچی توبہ) کے بنیادی اور لازمی شرائط کیا ہیں؟',
            ar: 'ما هي الشروط الأساسية للتوبة النصوح المقبولة عند الله؟',
          },
          explanation: {
            en: 'Stopping the sin, feeling genuine remorse, resolving never to return to it, and restoring human rights if infringed.',
            ur: 'گناہ سے فوراً رک جانا، شرمندگی محسوس کرنا، آئندہ نہ کرنے کا پختہ عزم اور اگر کسی کا حق مارا ہو تو اسے ادا کرنا۔',
            ar: 'الإقلاع عن الذنب، والندم، والعزم على عدم العود، ورد الحقوق للعباد.',
          },
          options: [
            { id: 'opt1', text: { en: 'Stopping sin, feeling remorse, resolving not to return, and making amends', ur: 'گناہ چھوڑنا، شرمندہ ہونا، نہ لوٹنے کا عزم اور حق کی تلافی', ar: 'الإقلاع عن الذنب والندم والعزم على عدم العودة ورد الحقوق' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Continuing the sin while asking forgiveness orally', ur: 'گناہ جاری رکھتے ہوئے زبان سے معافی مانگنا', ar: 'الاستمرار في الذنب مع الاستغفار اللفظي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Blaming others', ur: 'دوسروں کو قصوروار ٹھہرانا', ar: 'إلقاء اللوم على الغير' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_9',
          type: 'true_false',
          question: {
            en: 'Does Allah accept the Tawbah of a servant as long as the soul has not reached the throat at death?',
            ur: 'کیا اللہ تعالیٰ انسان کی توبہ موت کی غرغرہ کی حالت سے پہلے تک قبول فرماتا ہے؟',
            ar: 'هل يقبل الله توبة العبد ما لم يغرغر عند الموت؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "Allah accepts the repentance of a servant as long as the death rattle has not begun."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: "اللہ بندے کی توبہ قبول فرماتا ہے جب تک کہ نزع کا وقت نہ آ جائے۔"',
            ar: 'نعم! قال ﷺ: "إن الله يقبل توبة العبد ما لم يغرغر".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_10',
          type: 'mcq',
          question: {
            en: 'Scenario: Amina accidentally loses her temper and speaks rudely to her mother. How should she do Tawbah?',
            ur: 'منظرنامہ: آمنہ سے غلطی سے غصے میں والدہ سے تلخ کلامی ہو گئی۔ اسے توبہ کس طرح کرنی چاہیے؟',
            ar: 'سيناريو: فقدت أمينة أعصابها بالخطأ وتكلمت بحدة مع أمها. كيف تتوب؟',
          },
          explanation: {
            en: 'She seeks Allah\'s forgiveness, immediately apologizes warmly to her mother, and seeks her blessing.',
            ur: 'وہ اللہ سے استغفار کرے، فوراً والدہ سے معافی مانگے اور انہیں راضی کرے۔',
            ar: 'تستغفر الله، وتعتذر لأمها فوراً وتبتغي رضاها.',
          },
          options: [
            { id: 'opt1', text: { en: 'Seek Allah\'s forgiveness and apologize to her mother warmly', ur: 'اللہ سے استغفار کرے اور والدہ سے عاجزی سے معافی مانگے', ar: 'تستغفر الله وتعتذر لأمها بحرارة وترضيها' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Ignore her mother for days', ur: 'کئی دن والدہ سے بات نہ کرے', ar: 'تجاهل أمها أياماً' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Pretend nothing happened', ur: 'انجان بن جائے', ar: 'التظاهر بعدم حدوث شيء' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_11',
          type: 'mcq',
          question: {
            en: 'What are the rivers flowing inside Jannah made of as described in Surah Muhammad?',
            ur: 'سورۃ محمد میں بیان کے مطابق جنت کی نہریں کن پاکیزہ چیزوں کی ہیں؟',
            ar: 'مما تتكون أنهار الجنة كما وُصفت في سورة محمد؟',
          },
          explanation: {
            en: 'Rivers of pure water, milk whose taste never changes, non-intoxicating delicious drink, and pure honey.',
            ur: 'صاف ستھرے پانی، ذائقہ نہ بدلنے والے دودھ، لذت بخش مشروب اور خالص شہد کی نہریں۔',
            ar: 'أنهار من ماء غير آسن، وأنهار من لبن لم يتغير طعمه، وأنهار من عسل مصفى.',
          },
          options: [
            { id: 'opt1', text: { en: 'Pure water, fresh milk, pure honey, and delicious drinks', ur: 'صاف پانی، خالص دودھ، شہد اور لذت بخش مشروبات', ar: 'ماء غير آسن، ولبن لم يتغير طعمه، وعسل مصفى' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Muddy rivers', ur: 'مٹیلا پانی', ar: 'أنهار طين' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Salt water', ur: 'نمکین پانی', ar: 'ماء مالح' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_12',
          type: 'true_false',
          question: {
            en: 'Will there be any jealousy, hatred, or malice in the hearts of the people of Jannah?',
            ur: 'کیا جنتیوں کے سینوں میں ایک دوسرے کے لیے کوئی کینہ، حسد یا بغض رہے گا؟',
            ar: 'هل يكون في قلوب أهل الجنة شيء من الغل والحسد والبغضاء؟',
          },
          explanation: {
            en: 'No! Surah Al-Hijr states: "We shall remove whatever bitterness is in their breasts; as brothers, on couches facing each other."',
            ur: 'ہرگز نہیں! سورۃ الحجر میں ہے: "ونزعنا ما في صدورهم من غل إخواناً على سرر متقابلين"۔',
            ar: 'لا! قال تعالى: "ونزعنا ما في صدورهم من غل إخواناً على سرر متقابلين".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (All hatred and malice will be completely removed)', ur: 'جھوٹ (تمام کینہ و حسد بالکل پاک کر دیا جائے گا)', ar: 'خطأ (يُنـزع كل الغل والحسد من قلوبهم)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q8_13',
          type: 'mcq',
          question: {
            en: 'What is the tree in Jannah under whose shade a rider could travel for a hundred years without crossing it?',
            ur: 'جنت کا وہ درخت کون سا ہے جس کے سائے تلے گھڑ سوار سو سال تک چلے پھر بھی اس کا سایا ختم نہیں ہوگا؟',
            ar: 'ما هي الشجرة في الجنة التي يسير الراكب في ظلها مائة عام لا يقطعها؟',
          },
          explanation: {
            en: 'The immense tree of Jannah mentioned in authentic Hadith (like Shajarat Tuba).',
            ur: 'حدیث شریف میں بیان کردہ عظیم الشان درخت (شجرۃ طوبیٰ)۔',
            ar: 'الشجرة العظيمة في الجنة المذكورة في الحديث الصحيح (شجرة طوبى).',
          },
          options: [
            { id: 'opt1', text: { en: 'The great tree of Jannah whose shade spans 100 years journey', ur: 'جنت کا وہ عظیم درخت جس کا سایا 100 سال کی مسافت پر محیط ہے', ar: 'شجرة الجنة العظيمة التي يسير الراكب في ظلها 100 عام' }, isCorrect: true },
            { id: 'opt2', text: { en: 'A small bonsai plant', ur: 'چھوٹا سا پودا', ar: 'نبات صغير' }, isCorrect: false },
            { id: 'opt3', text: { en: 'A desert cactus', ur: 'صحرائی ناگپھنی', ar: 'صبار صحراوي' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_14',
          type: 'mcq',
          question: {
            en: 'What key action protects a Muslim from Jahannam according to the Prophet\'s teachings?',
            ur: 'فرمانِ نبوی ﷺ کے مطابق کون سا بنیادی عمل مسلمان کو جہنم سے بچانے کا ذریعہ بنتا ہے؟',
            ar: 'ما هو العمل الأساسي الذي يقي العبد من النار وفق التعاليم النبوية؟',
          },
          explanation: {
            en: 'Authentic faith (Tawheed), regular Salah, giving Sadaqah even half a date, and shunning major sins.',
            ur: 'پختہ توحید، نماز کی پابندی، آدھی کھجور کا صدقہ دینا اور گناہوں سے بچنا۔',
            ar: 'التوحيد الصادق، الصلاة، والصدقة ولو بشق تمرة، واجتناب الكبائر.',
          },
          options: [
            { id: 'opt1', text: { en: 'Tawheed, regular Salah, Sadaqah (even half a date), and good deeds', ur: 'توحید، نماز، صدقہ (چاہے آدھی کھجور ہو) اور نیک اعمال', ar: 'التوحيد والمحافظة على الصلاة والصدقة والأعمال الصالحة' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Accumulating paper money', ur: 'کاغذی نوٹ جمع کرنا', ar: 'جمع الورق النقدي' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Wearing gold rings', ur: 'سونے کی انگوٹھیاں پہننا', ar: 'لبس الخواتم الذهبية' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_15',
          type: 'true_false',
          question: {
            en: 'Will believers in Jannah ever be asked to leave Jannah or be evicted?',
            ur: 'کیا جنتیوں کو کبھی بھی جنت سے نکلنے یا ہٹائے جانے کا کہا جائے گا؟',
            ar: 'هل يُطلب من أهل الجنة الخروج منها أو يُخرجون منها أبداً؟',
          },
          explanation: {
            en: 'No! Surah Al-Kahf states: "Khalidina fiha la yabghuna \'anha hiwala" (They will abide therein forever, desiring no change).',
            ur: 'ہرگز نہیں! سورۃ الکہف میں ہے: وہ اس میں ہمیشہ رہیں گے اور وہاں سے نکلنا نہیں چاہیں گے۔',
            ar: 'لا! قال تعالى: "خالدين فيها لا يبغون عنها حولاً".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: false },
            { id: 'opt2', text: { en: 'False (They abide in Jannah eternally)', ur: 'جھوٹ (وہ ہمیشہ جنت میں رہیں گے)', ar: 'خطأ (خالدون فيها أبدًا)' }, isCorrect: true },
          ],
        },
        {
          id: 'l2_q8_16',
          type: 'mcq',
          question: {
            en: 'What greeting will angels deliver to the inhabitants of Jannah upon entry?',
            ur: 'جنت میں داخل ہوتے وقت فرشتے جنتیوں کو کیا کہہ کر مبارکباد اور سلام پیش کریں گے؟',
            ar: 'ما هي التحية التي يحيي بها الملائكة أهل الجنة عند دخولها؟',
          },
          explanation: {
            en: '"Salamun \'Alaikum bima sabartum fa-ni\'ma \'uqba-d-dar" (Peace be upon you for what you patiently endured; excellent is the final home!).',
            ur: '"سَلاَمٌ عَلَيْكُم بِمَا صَبَرْتُمْ فَنِعْمَ عُقْبَى الدَّارِ"۔',
            ar: '"سلام عليكم بما صبرتم فنعم عقبى الدار".',
          },
          options: [
            { id: 'opt1', text: { en: 'Salamun \'Alaikum bima sabartum (Peace upon you for your patience)', ur: 'سلام علیکم بما صبرتم (تمہارے صبر کے بدلے تم پر سلامتی ہو)', ar: 'سلام عليكم بما صبرتم فنعم عقبى الدار' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Pay entry tickets', ur: 'ٹکٹ ادا کرو', ar: 'ادفعوا التذاكر' }, isCorrect: false },
            { id: 'opt3', text: { en: 'Go back to earth', ur: 'زمین پر واپس جاؤ', ar: 'عودوا إلى الأرض' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_17',
          type: 'true_false',
          question: {
            en: 'Is a believer encouraged to ask Allah specifically for Jannat al-Firdaus Al-A\'la in their daily Du\'as?',
            ur: 'کیا مسلمان کو اپنی دعاؤں میں خصوصیت کے ساتھ اللہ سے "جنت الفردوس الاعلیٰ" مانگنے کی ترغیب دی گئی ہے؟',
            ar: 'هل يُستحب للمسلم أن يسأل الله دائماً الفردوس الأعلى في دعائه؟',
          },
          explanation: {
            en: 'Yes! Prophet Muhammad ﷺ said: "When you ask Allah, ask Him for Al-Firdaus, for it is the highest part of Jannah."',
            ur: 'جی ہاں! آپ ﷺ نے فرمایا: جب بھی اللہ سے سوال کرو تو فردوس کا سوال کرو کیونکہ وہ جنت کا سب سے اعلیٰ مقام ہے۔',
            ar: 'نعم! قال ﷺ: "إذا سألتم الله فاسألوه الفردوس؛ فإنه أعلى الجنة وأوسط الجنة".',
          },
          options: [
            { id: 'opt1', text: { en: 'True', ur: 'سچ', ar: 'صحيح' }, isCorrect: true },
            { id: 'opt2', text: { en: 'False', ur: 'جھوٹ', ar: 'خطأ' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_18',
          type: 'mcq',
          question: {
            en: 'What is the state of age and youth for everyone inside Jannah?',
            ur: 'جنت کے تمام رہنے والوں کے لیے عمر اور جوانی کی کیا حالت ہوگی؟',
            ar: 'ما هي حالة العمر والشباب لجميع أهل الجنة؟',
          },
          explanation: {
            en: 'Everyone will be in the prime of youth (33 years old) and will never age or grow frail.',
            ur: 'تمام جنتی اپنے شباب و جوانی (33 سال کی عمر) کی بہترین حالت میں ہوں گے اور کبھی بوڑھے نہیں ہوں گے۔',
            ar: 'يكون جميع أهل الجنة في أوج شبابهم (33 عاماً) ولا يهرمون أبداً.',
          },
          options: [
            { id: 'opt1', text: { en: 'In perpetual youth (33 years old) never growing old', ur: 'ہمیشہ جوان (33 سال) رہیں گے، کبھی بوڑھے نہیں ہوں گے', ar: 'في شباب دائم (33 سنة) لا يهرمون أبداً' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Elderly with walking sticks', ur: 'بزرگ لاٹھی کے ساتھ', ar: 'شيوخ بعصي' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_19',
          type: 'mcq',
          question: {
            en: 'What happens when a servant makes sincere Tawbah and follows it with good deeds?',
            ur: 'جب بندہ سچی توبہ کرتا ہے اور اس کے بعد نیک اعمال کرتا ہے تو اس کے ساتھ کیا معاملہ ہوتا ہے؟',
            ar: 'ماذا يحدث عندما يتوب العبد توبة نصوحاً ويتبعها بالعمل الصالح؟',
          },
          explanation: {
            en: 'Allah forgives the sins, and Surah Al-Furqan states Allah transforms bad deeds into good deeds (Yubaddilullahu sayyi\'atihim hasanat).',
            ur: 'اللہ گناہوں کو معاف فرماتا ہے اور سورۃ الفرقان کے مطابق برائیوں کو نیکیوں میں بدل دیتا ہے۔',
            ar: 'يغفر الله ذنوبه، ويبدل الله سيئاته حسنات كما في سورة الفرقان.',
          },
          options: [
            { id: 'opt1', text: { en: 'Allah forgives sins and transforms bad deeds into good deeds', ur: 'اللہ گناہ معاف فرماتا اور برائیوں کو نیکیوں میں بدل دیتا ہے', ar: 'يغفر الله ذنوبه ويبدل سيئاته حسنات' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Sins remain forever', ur: 'گناہ ہمیشہ رہتے ہیں', ar: 'تبقى السيئات للابد' }, isCorrect: false },
          ],
        },
        {
          id: 'l2_q8_20',
          type: 'mcq',
          question: {
            en: 'What is the ultimate mindset a Muslim maintains between hope (Raja) and fear (Khawf)?',
            ur: 'مسلمان کو امید (رجاء) اور خوف (خوفِ خدا) کے درمیان کیسا توازن قائم رکھنا چاہیے؟',
            ar: 'ما هي الطريقة الإيمانية المثلى في الجمع بين الخوف والرجاء؟',
          },
          explanation: {
            en: 'Hoping eagerly for Allah\'s immense Mercy while fearing His anger and shunning sin.',
            ur: 'اللہ کی وسیع رحمت کی امید رکھنا اور اس کی ناراضگی و گناہوں سے ڈرنا۔',
            ar: 'يرجو رحمة الله الواسعة، ويخاف عذابه ويتجنب معصيته.',
          },
          options: [
            { id: 'opt1', text: { en: 'Hoping for Allah\'s Mercy while fearing His punishment and shunning sin', ur: 'رحمت الٰہی کی امید رکھنا اور نافرمانی سے ڈرنا', ar: 'رجاء رحمة الله مع خوف عقابه واجتناب الذنب' }, isCorrect: true },
            { id: 'opt2', text: { en: 'Total carelessness', ur: 'مکمل لاپروائی', ar: 'اللامبالاة الكلية' }, isCorrect: false },
          ],
        },
      ],
    },
  ],
};

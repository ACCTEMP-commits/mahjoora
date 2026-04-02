const categories = [
    { id: "daily", name: "سنن اليوم والليلة", count: 5 },
    { id: "prayer", name: "سنن الصلاة", count: 4 },
    { id: "home", name: "سنن المنزل", count: 4 },
    { id: "social", name: "سنن التعامل", count: 4 },
    { id: "travel", name: "سنن السفر", count: 3 },
    { id: "occasions", name: "سنن المناسبات", count: 4 },
];

const sunnahs = [{
        id: "m3",
        title: "الإطالة في الجلوس بين السجدتين",
        category: "prayer",
        categoryName: "سنن الصلاة",
        summary: "أن تطيل في الجلوس الذي بين السجدتين في الصلاة",
        hasImage: true,
        thumb: "linear-gradient(135deg, #2955d7, #091126), radial-gradient(circle at top right, #7ab2ff, transparent 45%)",
        excerpt: "نص مثال مختصر في بداية الصفحة يعرّف بهذه السنة ويقدم لمحة سريعة عنها.",
        fullText: "نص مثال لنص الحديث الكامل. هذا المحتوى تجريبي فقط ومخصص للتصميم والعرض البصري دون استخدام حديث فعلي. يمكن لاحقًا استبداله بالمحتوى الحقيقي داخل نفس الهيكل.",
        chain: "نص مثال للسند يظهر هنا بالطريقة التي تريد عرضها لاحقًا داخل صفحة التفاصيل.",
        featured: true,
    },
    {
        id: "b7",
        title: "لعق اليد بعد الطعام",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "قال صلى الله عليه وسلم: إذا أكل أحدُكم الطَّعامَ فلا يمسَحْ يدَيْه حتَّى يلعقَها ، أو يلعَقَها ، ولا يرفعُ صحفةً حتَّى يلعقَها أو يلعقَها ، فإنَّ آخرَ الطَّعامِ فيه برَكةٌ",
        hasImage: true,
        thumb: "linear-gradient(135deg, #2955d7, #091126), radial-gradient(circle at top right, #7ab2ff, transparent 45%)",
        excerpt: "نص مثال مختصر في بداية الصفحة يعرّف بهذه السنة ويقدم لمحة سريعة عنها.",
        fullText: "نص مثال لنص الحديث الكامل. هذا المحتوى تجريبي فقط ومخصص للتصميم والعرض البصري دون استخدام حديث فعلي. يمكن لاحقًا استبداله بالمحتوى الحقيقي داخل نفس الهيكل.",
        chain: "نص مثال للسند يظهر هنا بالطريقة التي تريد عرضها لاحقًا داخل صفحة التفاصيل.",
        featured: true,
    },
    {
        id: "c1",
        title: "الصلاة بالنعال",
        category: "prayer",
        categoryName: "سنن الصلاة",
        summary: "الصلاة في النعال الطاهرة",
        hasImage: true,
        thumb: "linear-gradient(135deg, #2955d7, #091126), radial-gradient(circle at top right, #7ab2ff, transparent 45%)",
        excerpt: "نص مثال مختصر في بداية الصفحة يعرّف بهذه السنة ويقدم لمحة سريعة عنها.",
        fullText: "نص مثال لنص الحديث الكامل. هذا المحتوى تجريبي فقط ومخصص للتصميم والعرض البصري دون استخدام حديث فعلي. يمكن لاحقًا استبداله بالمحتوى الحقيقي داخل نفس الهيكل.",
        chain: "نص مثال للسند يظهر هنا بالطريقة التي تريد عرضها لاحقًا داخل صفحة التفاصيل.",
        featured: true,
    },
    {
        id: "c2",
        title: "سنّة التّسليم على الصّبيان",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "سنة التسليم عللى الصبيان الصغار",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "c3",
        title: "قول بارك الله لكما لمن تزوج",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "قول بارك الله لكما لمن تزوج",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "c4",
        title: "سنّة عدم قول لو لما قضاه الله",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "سنّة عدم قول \"لو\" وما شابهها من الملفوظات",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "c5",
        title: "سد الأذن باليد عند سماع معازف",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "سد الأذنين باليد عند سماع مزمار الشياطين -الموسسيقى-",
        hasImage: true,
        thumb: "url('image.png')",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "b8",
        title: "وضع السواك بجانبك عند النوم",
        category: "daily",
        categoryName: "سنن اليوم والليلة",
        summary: "أن تضع السواك بجانبك عند النوم فإذا استيقظت بدأت بالاستياك",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "b9",
        title: "كيفية جمع نواة التمر",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "السنة عند إخراج نواة التمر من الفم وضعه بين ظاهر الأصبعين السبابة والوسطى وليس بباطن اليد",
        hasImage: true,
        thumb: "url('image1.png')",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: true
    }, {
        id: "b6",
        title: "الدعاء لمن رأى مبتلى",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "قال صلى الله عليه وسلم: من رأى مبتلى فقال :  الحمد لله الذي عافاني مما ابتلاك به و فضلني على كثير ممن خلق تفضيلا . لم يصبه ذلك البلاء",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "m1",
        title: "ذكر يقال في الصباح والمساء مهجور",
        category: "daily",
        categoryName: "سنن اليوم والليلة",
        summary: "قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا أَصْبَحَ أَحَدُكُمْ فَلْيَقُلْ أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثَلَاثًا وَإِذَا أَمْسَى فَلْيَقُلْ مِثْلَ ذَلِكَ",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "إذا أصبحت تقول أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثلاث مرات وإذا أمسيت تقول أمسيت أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        fullText: "عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا أَصْبَحَ أَحَدُكُمْ فَلْيَقُلْ أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثَلَاثًا وَإِذَا أَمْسَى فَلْيَقُلْ مِثْلَ ذَلِكَ",
        chain: "نص مثال للسند أو المرجع بصياغة تجريبية قابلة للاستبدال.",
        featured: true,
    },
    {
        id: "b5",
        title: "صلاة ركعتين عند الخروج من البيت وعند الدخول",
        category: "home",
        categoryName: "سنن المنزل",
        summary: "قال رسول الله صلى الله عليه وسلم : ذا خرجت من منزلك فصل ركعتين يمنعانك من مخرج السوء ، وإذا دخلت منزلك فصل ركعتين يمنعانك من مدخل السوء",
        hasImage: false,
        excerpt: "مختصر تمهيدي يبين فكرة السنة في أول الصفحة بأسلوب سهل.",
        fullText: "نص مثال مطول يُستخدم هنا بدل الحديث الكامل. يمكن أن يمتد لعدة جمل لتجربة عرض الفقرات داخل صندوق النص.",
        chain: "نص مثال للسند أو المصدر يوضع في قسم مستقل أسفل النص الكامل.",
        featured: false,
    },
    {
        id: "b2",
        title: "سنة مهجورة عند التشهد في الاّذان",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "إذا قال المؤذن أشهد ألا إله إلا الله تقول وأنا وإذا قال أشهد أن محمداً رسول الله تقول وأنا",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "b4",
        title: "الدعاء عند دخول المنزل",
        category: "home",
        categoryName: "سنن المنزل",
        summary: "إذا ولَج الرجلُ بيتَه فليقلْ: اللهمَّ إني أسألُك خيرَ المَولجِ، وخيرَ المخرجِ، بسمِ اللهِ ولجْنا، وبسمِ اللهِ خرجنا، وعلى اللهِ ربِّنا توكلنا، ثم ليسلمْ على أهلِه",
        hasImage: false,
        excerpt: "مختصر تمهيدي يبين فكرة السنة في أول الصفحة بأسلوب سهل.",
        fullText: "نص مثال مطول يُستخدم هنا بدل الحديث الكامل. يمكن أن يمتد لعدة جمل لتجربة عرض الفقرات داخل صندوق النص.",
        chain: "نص مثال للسند أو المصدر يوضع في قسم مستقل أسفل النص الكامل.",
        featured: false,
    },
    {
        id: "b1",
        title: "صيغة مهجورة للصلاة على الرسول ﷺ",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِ مُحَمَّدٍ , كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ , وَبَارِكْ عَلَى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِ مُحَمَّدٍ , كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        hasImage: false,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "excerpt",
        fullText: "النص الكامل",
        featured: false
    },
    {
        id: "a5",
        title: "عدم السلام بالإشارة بالكف والأصابع",
        category: "social",
        categoryName: "سنن التعامل",
        summary: "إذا لقيت أحد وأردت أن تسلم عليه فلا تشر إليه بكفك فهذا تشبه بالنصارى",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "إذا أصبحت تقول أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثلاث مرات وإذا أمسيت تقول أمسيت أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        fullText: "عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا أَصْبَحَ أَحَدُكُمْ فَلْيَقُلْ أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثَلَاثًا وَإِذَا أَمْسَى فَلْيَقُلْ مِثْلَ ذَلِكَ",
        chain: "نص مثال للسند أو المرجع بصياغة تجريبية قابلة للاستبدال.",
        featured: true,
    },
    {
        id: "a6",
        title: "رد التثاؤب ومقاومته وعدم إصدار صوت",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "قال صلى الله عليه وسلم:  التثاؤبُ من الشيطانِ، فإذا تثاءب أحدُكم فليردَّه ما استطاع، فإنَّ أحدَكم إذا قال : ها، ضحك الشيطانُ",
        hasImage: false,
        excerpt: "مختصر الصفحة هنا يعطي فكرة سريعة للقارئ.",
        fullText: "نص مثال يستخدم لاختبار الفقرات والعناوين والمسافات في هذا النوع من الصفحات.",
        chain: "نص مثال للسند مكتوب بصياغة تجريبية.",
        featured: false,
    },
    {
        id: "m5",
        title: "وضع اليد على موضع الألم والدعاء",
        category: "home",
        categoryName: "سنن المنزل",
        summary: "وضع اليد اليمنى على موضع الألم والدعاء بأدعية...",
        hasImage: false,
        excerpt: "مختصر تمهيدي يبين فكرة السنة في أول الصفحة بأسلوب سهل.",
        fullText: "نص مثال مطول يُستخدم هنا بدل الحديث الكامل. يمكن أن يمتد لعدة جمل لتجربة عرض الفقرات داخل صندوق النص.",
        chain: "نص مثال للسند أو المصدر يوضع في قسم مستقل أسفل النص الكامل.",
        featured: true,
    },
    {
        id: "a4",
        title: "صلاة ركعتين عند الخروج من البيت وعند الدخول",
        category: "home",
        categoryName: "سنن المنزل",
        summary: "عن أبى هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم: (إذا خرجت من منزلك فصل ركعتين يمنعانك من مخرج السوء ، وإذا دخلت منزلك فصل ركعتين يمنعانك من مدخل السوء)",
        hasImage: false,
        excerpt: "مختصر تمهيدي يبين فكرة السنة في أول الصفحة بأسلوب سهل.",
        fullText: "نص مثال مطول يُستخدم هنا بدل الحديث الكامل. يمكن أن يمتد لعدة جمل لتجربة عرض الفقرات داخل صندوق النص.",
        chain: "نص مثال للسند أو المصدر يوضع في قسم مستقل أسفل النص الكامل.",
        featured: true,
    },
    {
        id: "m44",
        title: "قراءة سورة الزلزلة في صلاة الفجر",
        category: "prayer",
        categoryName: "سنن الصلاة",
        summary: "قراءة سورة الزلزلة في صلاة الفجر في الركعتين ولا تكون على الدوام، وصلاة الفجر السنة فيها الإطالة، والقراءة من طوال المفصل",
        hasImage: true,
        thumb: "linear-gradient(135deg, #12307c, #081125), radial-gradient(circle at 70% 20%, #6ca6ff, transparent 35%)",
        excerpt: "مختصر افتتاحي يوضح السياق العام بطريقة مناسبة للقراءة السريعة.",
        fullText: "نص مثال للنص الكامل يوضع في هذا المكان. تمت المحافظة على بنية تسمح بإضافة نصوص أطول مستقبلًا دون تغيير التصميم.",
        chain: "نص مثال للسند مكتوب هنا لأغراض العرض فقط.",
        featured: false,
    },
    {
        id: "m2",
        title: "قول أبشر",
        category: "social",
        categoryName: "سنن التعامل",
        summary: "من السنة أن تقول: أبشر. كان رسول الله صلى الله عليه وسلم يقول أبشر",
        hasImage: true,
        excerpt: "من السنة أن تقول:أبشر",
        fullText: " ",
        chain: "نص مثال للسند أو التوثيق الداخلي.",
        featured: false,
    },
    {
        id: "m6",
        title: "علاج قسوة القلب",
        category: "social",
        categoryName: "سنن التعامل",
        summary: "مما جاء عن الرسول صلى الله عليه وسلم لعلاج قسوة القلب",
        hasImage: true,
        excerpt: "من السنة أن تقول:أبشر",
        fullText: " ",
        chain: "نص مثال للسند أو التوثيق الداخلي.",
        featured: false,
    },
    {
        id: "a1",
        title: "سنّة التّداوي بالعسل",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "أنَّ رَجُلًا أتى النَّبيَّ صلَّى اللهُ عليه وسلَّم فقال: أخي يَشتَكي بَطنَه، فقال: اسقِه عَسَلًا، ثُمَّ أتى الثَّانيةَ، فقال: اسقِه عَسَلًا، ثُمَّ أتاه الثَّالِثةَ، فقال: اسقِه عَسَلًا، ثُمَّ أتاه فقال: قد فعَلتُ؟ فقال: صَدَقَ اللهُ، وكَذَبَ بَطنُ أخيك، اسقِه عَسَلًا، فسَقاه فبَرَأ.",
        hasImage: false,
        excerpt: "مختصر الصفحة هنا يعطي فكرة سريعة للقارئ.",
        fullText: "نص مثال يستخدم لاختبار الفقرات والعناوين والمسافات في هذا النوع من الصفحات.",
        chain: "نص مثال للسند مكتوب بصياغة تجريبية.",
        featured: false,
    },
    {
        id: "a2",
        title: "شكر النّاس",
        category: "social",
        categoryName: "سنن التعامل",
        summary: "قال صلّى الله عليه وسلّم: مَن لا يشكرُ النَّاسَ لا يشكرُ اللهَ \n [التّرمذيّ حسن صحيح/ الأدب المفرد صحيح بلفظ مقارب]",
        hasImage: false,
        excerpt: "من السنة أن تقول:أبشر",
        fullText: " ",
        chain: "نص مثال للسند أو التوثيق الداخلي.",
        featured: false,
    },
    {
        id: "b3",
        title: "ذكر يقال عند دخول بلد أو قرية جديدة ",
        category: "travel",
        categoryName: "سنن السفر",
        summary: "اللهم رب السماوات السبع وما أظللن، ورب الأرضين السبع وما أقللن، ورب الشياطين وما أضللن، ورب الرياح وما ذرين، فإنا نسألك خير هذه القرية وخير أهلها، ونعوذ بك من شرها وشر أهلها وشر ما فيها.",
        hasImage: false,
        thumb: "linear-gradient(135deg, #2447b8, #060c18), radial-gradient(circle at center, #8ab7ff, transparent 30%)",
        excerpt: "وصف تمهيدي قصير جدًا حتى يبدأ القارئ من ملخص واضح.",
        fullText: "عن صهيب رضي الله عنه: أن النبي صلى الله عليه وسلم لم ير قرية يريد دخولها إلا قال حين يراها: اللهم رب السماوات السبع وما أظللن، ورب الأرضين السبع وما أقللن، ورب الشياطين وما أضللن، ورب الرياح وما ذرين، فإنا نسألك خير هذه القرية وخير أهلها، ونعوذ بك من شرها وشر أهلها وشر ما فيها",
        chain: "هذا أيضًا نص مثال للسند أو المرجع.",
        featured: true,
    },
    {
        id: "l1",
        title: "دعاء السفر",
        category: "travel",
        categoryName: "سنن السفر",
        summary: "تعديل",
        hasImage: false,
        thumb: "linear-gradient(135deg, #2447b8, #060c18), radial-gradient(circle at center, #8ab7ff, transparent 30%)",
        excerpt: "وصف تمهيدي قصير جدًا حتى يبدأ القارئ من ملخص واضح.",
        fullText: "عن صهيب رضي الله عنه: أن النبي صلى الله عليه وسلم لم ير قرية يريد دخولها إلا قال حين يراها: اللهم رب السماوات السبع وما أظللن، ورب الأرضين السبع وما أقللن، ورب الشياطين وما أضللن، ورب الرياح وما ذرين، فإنا نسألك خير هذه القرية وخير أهلها، ونعوذ بك من شرها وشر أهلها وشر ما فيها",
        chain: "هذا أيضًا نص مثال للسند أو المرجع.",
        featured: true,
    },
    {
        id: "m200",
        title: "دعاء مهجور في الرّكوع والسّجود",
        category: "prayer",
        categoryName: "سنن الصلاة",
        summary: "كان النَّبيُّ صلَّى اللهُ عليه وسلَّم يقولُ في رُكوعِه وسُجودِه: سُبحانَك اللهُمَّ رَبَّنا وبحَمدِك، اللهُمَّ اغفِرْ لي.",
        hasImage: true,
        thumb: "linear-gradient(135deg, #12307c, #081125), radial-gradient(circle at 70% 20%, #6ca6ff, transparent 35%)",
        excerpt: "مختصر افتتاحي يوضح السياق العام بطريقة مناسبة للقراءة السريعة.",
        fullText: "نص مثال للنص الكامل يوضع في هذا المكان. تمت المحافظة على بنية تسمح بإضافة نصوص أطول مستقبلًا دون تغيير التصميم.",
        chain: "نص مثال للسند مكتوب هنا لأغراض العرض فقط.",
        featured: false,
    },
    {
        id: "m99",
        title: "الدعاء يوم الأربعاء بين الظهر والعصر",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "الدعاء يوم الأربعاء بين صلاتي الظهر والعصر من مظان أوقات استجابة الدعاء",
        hasImage: false,
        excerpt: "مختصر الصفحة هنا يعطي فكرة سريعة للقارئ.",
        fullText: "نص مثال يستخدم لاختبار الفقرات والعناوين والمسافات في هذا النوع من الصفحات.",
        chain: "نص مثال للسند مكتوب بصياغة تجريبية.",
        featured: false,
    },
    {
        id: "a3",
        title: "صلاة ركعتين بعد الوضوء",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "صلاة ركعتين بعد الوضوء يترتب عليها أجر عظيم إن شاء الله",
        hasImage: false,
        excerpt: "مختصر الصفحة هنا يعطي فكرة سريعة للقارئ.",
        fullText: "نص مثال يستخدم لاختبار الفقرات والعناوين والمسافات في هذا النوع من الصفحات.",
        chain: "نص مثال للسند مكتوب بصياغة تجريبية.",
        featured: false,
    }, {
        id: "m10",
        title: "دعاء يقال عند أذان المغرب",
        category: "daily",
        categoryName: "سنن اليوم والليلة",
        summary: "دعاء عن الرسول صلى الله عليه وسلم يقال عند اّذان المغرب",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "إذا أصبحت تقول أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثلاث مرات وإذا أمسيت تقول أمسيت أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        fullText: "عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا أَصْبَحَ أَحَدُكُمْ فَلْيَقُلْ أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثَلَاثًا وَإِذَا أَمْسَى فَلْيَقُلْ مِثْلَ ذَلِكَ",
        chain: "نص مثال للسند أو المرجع بصياغة تجريبية قابلة للاستبدال.",
        featured: true,
    }, {
        id: "m11",
        title: "الاكتحال عند النّوم",
        category: "daily",
        categoryName: "سنن اليوم والليلة",
        summary: "سنة الاكتحال قبل النوم وكيفية الاكتحال تكون في اليمنى ثلاث مرات واليسرى مرتين",
        hasImage: true,
        thumb: "linear-gradient(135deg, #17348e, #07101f), radial-gradient(circle at left top, #4f86ff, transparent 40%)",
        excerpt: "إذا أصبحت تقول أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثلاث مرات وإذا أمسيت تقول أمسيت أُثْنِيَ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        fullText: "عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا أَصْبَحَ أَحَدُكُمْ فَلْيَقُلْ أَصْبَحْتُ أُثْنِيَ عَلَيْكَ حَمْدًا وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ثَلَاثًا وَإِذَا أَمْسَى فَلْيَقُلْ مِثْلَ ذَلِكَ",
        chain: "نص مثال للسند أو المرجع بصياغة تجريبية قابلة للاستبدال.",
        featured: true,
    },
    {
        id: "m77",
        title: "الدعاء عند شرب اللبن",
        category: "occasions",
        categoryName: "سنن المناسبات",
        summary: "قال صلى الله عليه وسلم:  ومن سقاهُ اللَّهُ لبَنًا فليقلِ اللَّهمَّ بارِك لنا فيهِ وزدنا منْهُ",
        hasImage: true,
        excerpt: "مختصر الصفحة هنا يعطي فكرة سريعة للقارئ.",
        fullText: "نص مثال يستخدم لاختبار الفقرات والعناوين والمسافات في هذا النوع من الصفحات.",
        chain: "نص مثال للسند مكتوب بصياغة تجريبية.",
        featured: false,
    },
    {
        id: "m8",
        title: "دعاء عند الاّذان",
        category: "daily",
        categoryName: "سنن اليوم والليلة",
        summary: "دعاء عند الاّذان يترتب عليه أجر عظيم إن شاء الله",
        hasImage: true,
        thumb: "linear-gradient(135deg, #3e71ff, #0a1225), radial-gradient(circle at top, #b7d3ff, transparent 40%)",
        excerpt: "نص تمهيدي مختصر يسبق المحتوى الطويل.",
        fullText: "نص مثال للنص الكامل مع إمكانية تمدده لاحقًا عند إدخال بيانات واقعية.",
        chain: "نص مثال للسند أو الإحالة.",
        featured: false,
    },
];

const categoryGrid = document.getElementById("category-grid");
const featuredGrid = document.getElementById("featured-grid");
const filtersContainer = document.getElementById("filters");
const cardsGrid = document.getElementById("cards-grid");

let activeCategory = "all";

function renderCategories() {
    categoryGrid.innerHTML = categories
        .map(
            (category) => `
        <article class="category-card">
          <span>قسم</span>
          <strong>${category.name}</strong>
          <span>${category.count} عناصر تجريبية</span>
        </article>
      `
        )
        .join("");
}

function cardTemplate(item, featured = false) {
    const thumb = item.hasImage ?
        `<div class="card-thumb" style="--thumb-bg:${item.thumb}; background-size: contain;"></div>` :
        "";

    return `
    <article class="card ${featured ? "featured-card" : ""}">
      ${thumb}
      <div class="card-body">
        <span class="card-meta">${item.categoryName}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="card-footer">
          <span>${item.hasImage ? "بطاقة بصورة" : "بطاقة نصية"}</span>
          <div class="detail-switch">
            <a class="read-more" href="details-alt.html?id=${item.id}">عرض التفاصيل</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
    const featuredItems = sunnahs.filter((item) => item.featured).slice(0, 4);
    featuredGrid.innerHTML = featuredItems.map((item) => cardTemplate(item, true)).join("");
}

function renderFilters() {
    const options = [{ id: "all", name: "الكل" }, ...categories];
    filtersContainer.innerHTML = options
        .map(
            (option) => `
        <button class="filter-chip ${option.id === activeCategory ? "active" : ""}" data-category="${option.id}">
          ${option.name}
        </button>
      `
        )
        .join("");

    filtersContainer.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;
            renderFilters();
            renderCards();
        });
    });
}

function renderCards() {
    const items =
        activeCategory === "all" ?
        sunnahs :
        sunnahs.filter((item) => item.category === activeCategory);

    if (!items.length) {
        cardsGrid.innerHTML = `<div class="empty-state">لا توجد عناصر في هذا القسم حاليًا.</div>`;
        return;
    }

    cardsGrid.innerHTML = items.map((item) => cardTemplate(item)).join("");
}

renderCategories();
renderFeatured();
renderFilters();
renderCards();
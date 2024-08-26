/*const dummyData = [
  {
    id: 1,
    eventNameCategoryEn: 'Family Religious Ceremony',
    eventNameCategoryHe: 'טקס דתי משפחתי',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Bar/Bat Mitzvah',
    eventTitleHe: 'בר/בת מצווה',
    eventTitleAr: 'بار/بات ميتسفا',
    eventHour: '7 PM',
    eventDate: '2024-09-15',
    eventImage: '../../public/eventImages/BarBatMitzvah.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-BarBatMitzvah.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Tel-Aviv',
    eventPlaceHe: 'תל-אביב',
    eventPlaceAr: 'تل أبيب',
    eventDescriptionEn: [
      'Join us as we celebrate Yael"s Bat Mitzvah, a special milestone in her journey to adulthood. Please be our guest for the ceremony and joyous celebration.',
    ],

    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת בת המצווה של יעל,',
      'ציון דרך מיוחד בדרכה לבגרות.',
      'נשמח לארח אתכם בטקס ובחגיגה משמחת.',
    ],
    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بحفل بات ميتسفا لياعيل،',
      'محطة هامة في طريقها نحو البلوغ.',
      'يرجى أن تكونوا ضيوفنا في الحفل والاحتفال البهيج.',
    ],
  },

  {
    id: 2,
    eventNameCategoryEn: 'Jewish Holiday Celebration',
    eventNameCategoryHe: 'חג יהודי משפחתי',
    eventNameCategoryAr: 'احتفال عطلة يهودية',
    eventTitleEn: 'Rosh Hashanah',
    eventTitleHe: 'ראש השנה',
    eventTitleAr: 'روش هاشناه',
    eventHour: '6 PM',
    eventDate: '2024-10-03',
    eventImage: '../../public/eventImages/RoshHashanah.JPG',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-RoshHashanah.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Jerusalem',
    eventPlaceHe: 'ירושלים',
    eventPlaceAr: 'القدس',
    eventDescriptionEn: [
      'Join us for a joyful Rosh Hashanah celebration,',
      'as we welcome the Jewish New Year with family and friends.',
      'Enjoy a festive meal and meaningful traditions.',
    ],
    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת ראש השנה שמחה,',
      'בה נברך את השנה החדשה עם משפחה וחברים.',
      'תיהנו מארוחה חגיגית וממסורות משמעותיות.',
    ],
    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بعيد روش هاشناه،',
      'حيث نرحب بالسنة اليهودية الجديدة مع العائلة والأصدقاء.',
      'استمتعوا بوجبة احتفالية وتقاليد مميزة.',
    ],
  },
  {
    id: 3,
    eventNameCategoryEn: 'Family Religious Celebration',
    eventNameCategoryHe: 'חגיגה דתית משפחתית',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Eid al-Fitr',
    eventTitleHe: 'עיד אל-פיטר',
    eventTitleAr: 'عيد الفطر',
    eventHour: '8 AM',
    eventDate: '2024-04-10',
    eventImage: '../../public/eventImages/Eid-Al-Fitr.JPG',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/BarBatMitzvah.jpg',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Haifa',
    eventPlaceHe: 'חיפה',
    eventPlaceAr: 'حيفا',
    eventDescriptionEn: [
      'Celebrate Eid al-Fitr with us as we mark the end of Ramadan,',
      'a time of joy, prayer, and togetherness with family and friends.',
      'Join us for a festive morning filled with traditional foods and warm greetings.',
    ],
    eventDescriptionHe: [
      'חגגו איתנו את עיד אל-פיטר בסיום חודש הרמדאן,',
      'זמן של שמחה, תפילה ואחדות עם משפחה וחברים.',
      'הצטרפו אלינו לבוקר חגיגי מלא במאכלים מסורתיים וברכות חמות.',
    ],
    eventDescriptionAr: [
      'احتفلوا معنا بعيد الفطر مع نهاية شهر رمضان،',
      'وقت من الفرح، والصلاة، والتآلف مع العائلة والأصدقاء.',
      'انضموا إلينا في صباح احتفالي مليء بالأطعمة التقليدية والتحيات الدافئة.',
    ],
  },
  {
    id: 4,
    eventNameCategoryEn: 'Family Religious Celebration',
    eventNameCategoryHe: 'חגיגה דתית משפחתית',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Eid al-Adha',
    eventTitleHe: 'עיד אל-אדחה',
    eventTitleAr: 'عيد الأضحى',
    eventHour: '10 AM',
    eventDate: '2024-06-17',
    eventImage: '../../public/eventImages/Eid-al-Adha.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-Eid-al-Adha.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Nazareth',
    eventPlaceHe: 'נצרת',
    eventPlaceAr: 'الناصرة',
    eventDescriptionEn: [
      'Join us in celebrating Eid al-Adha,',
      'a festival of sacrifice and unity with family and friends.',
      'Experience a day filled with tradition, shared meals, and heartfelt prayers.',
    ],
    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת עיד אל-אדחה,',
      'חג של קורבן ואחדות עם משפחה וחברים.',
      'חוו יום מלא במסורות, ארוחות משותפות ותפילות כנות.',
    ],
    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بعيد الأضحى،',
      'عيد من التضحية والوحدة مع العائلة والأصدقاء.',
      'استمتعوا بيوم مليء بالتقاليد، والوجبات المشتركة، والصلاة الصادقة.',
    ],
  },
  {
    id: 5,
    eventNameCategoryEn: 'Family Celebration',
    eventNameCategoryHe: 'חגיגה משפחתית',
    eventNameCategoryAr: 'احتفال عائلي',
    eventTitleEn: 'Wedding',
    eventTitleHe: 'חתונה',
    eventTitleAr: 'زفاف',
    eventHour: '6 PM',
    eventDate: '2024-12-20',
    eventImage: '../../public/eventImages/Wedding.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-Wedding.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Netanya',
    eventPlaceHe: 'נתניה',
    eventPlaceAr: 'نتانيا',
    eventDescriptionEn: [
      'Join us for a beautiful wedding celebration,',
      'as we unite two families in love and joy.',
      'Please be our guest for an evening of heartfelt vows, dining, and dancing.',
    ],
    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת חתונה יפה,',
      'כפי שאנו מאחדים שני משפחות באהבה ושמחה.',
      'נשמח לארח אתכם לערב של נדרים כנים, ארוחה וריקודים.',
    ],
    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بزفاف جميل،',
      'حيث نلتقي بين عائلتين بالحب والفرح.',
      'يرجى أن تكونوا ضيوفنا في سهرة مليئة بالوعود الصادقة، والطعام، والرقص.',
    ],
  },
]

export default dummyData
*/

const dummyData = [
  {
    id: 1,
    eventNameCategoryEn: 'Family Religious Ceremony',
    eventNameCategoryHe: 'טקס דתי משפחתי',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Bar/Bat Mitzvah',
    eventTitleHe: 'בר/בת מצווה',
    eventTitleAr: 'بار/بات ميتسفا',
    eventHour: '7 PM',
    eventDate: '2024-09-15',
    eventImage: '../../public/eventImages/BarBatMitzvah.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-BarBatMitzvah.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Tel-Aviv',
    eventPlaceHe: 'תל-אביב',
    eventPlaceAr: 'تل أبيب',
    eventDescriptionEn: [
      'Join us as we celebrate Yael"s Bat Mitzvah, a special milestone in her journey to adulthood. Please be our guest for the ceremony and joyous celebration.',
    ],

    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת בת המצווה של יעל, ציון דרך מיוחד בדרכה לבגרות. נשמח לארח אתכם בטקס ובחגיגה משמחת.',
    ],

    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بحفل بات ميتسفا لياعيل، محطة هامة في طريقها نحو البلوغ. يرجى أن تكونوا ضيوفنا في الحفل والاحتفال البهيج.',
    ],
  },

  {
    id: 2,
    eventNameCategoryEn: 'Jewish Holiday Celebration',
    eventNameCategoryHe: 'חג יהודי משפחתי',
    eventNameCategoryAr: 'احتفال عطلة يهودية',
    eventTitleEn: 'Rosh Hashanah',
    eventTitleHe: 'ראש השנה',
    eventTitleAr: 'روش هاشناه',
    eventHour: '6 PM',
    eventDate: '2024-10-03',
    eventImage: '../../public/eventImages/RoshHashanah.JPG',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-RoshHashanah.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Jerusalem',
    eventPlaceHe: 'ירושלים',
    eventPlaceAr: 'القدس',
    eventDescriptionEn: [
      'Join us for a joyful Rosh Hashanah celebration, as we welcome the Jewish New Year with family and friends. Enjoy a festive meal and meaningful traditions.',
    ],

    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת ראש השנה שמחה, בה נברך את השנה החדשה עם משפחה וחברים. תיהנו מארוחה חגיגית וממסורות משמעותיות.',
    ],

    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بعيد روش هاشناه، حيث نرحب بالسنة اليهودية الجديدة مع العائلة والأصدقاء. استمتعوا بوجبة احتفالية وتقاليد مميزة.',
    ],
  },
  {
    id: 3,
    eventNameCategoryEn: 'Family Religious Celebration',
    eventNameCategoryHe: 'חגיגה דתית משפחתית',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Eid al-Fitr',
    eventTitleHe: 'עיד אל-פיטר',
    eventTitleAr: 'عيد الفطر',
    eventHour: '8 AM',
    eventDate: '2024-04-10',
    eventImage: '../../public/eventImages/Eid-Al-Fitr.JPG',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/BarBatMitzvah.jpg',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Haifa',
    eventPlaceHe: 'חיפה',
    eventPlaceAr: 'حيفا',
    eventDescriptionEn: [
      'Celebrate Eid al-Fitr with us as we mark the end of Ramadan, a time of joy, prayer, and togetherness with family and friends. Join us for a festive morning filled with traditional foods and warm greetings.',
    ],

    eventDescriptionHe: [
      'חגגו איתנו את עיד אל-פיטר בסיום חודש הרמדאן, זמן של שמחה, תפילה ואחדות עם משפחה וחברים. הצטרפו אלינו לבוקר חגיגי מלא במאכלים מסורתיים וברכות חמות.',
    ],

    eventDescriptionAr: [
      'احتفلوا معنا بعيد الفطر مع نهاية شهر رمضان، وقت من الفرح، والصلاة، والتآلف مع العائلة والأصدقاء. انضموا إلينا في صباح احتفالي مليء بالأطعمة التقليدية والتحيات الدافئة.',
    ],
  },
  {
    id: 4,
    eventNameCategoryEn: 'Family Religious Celebration',
    eventNameCategoryHe: 'חגיגה דתית משפחתית',
    eventNameCategoryAr: 'احتفال ديني عائلي',
    eventTitleEn: 'Eid al-Adha',
    eventTitleHe: 'עיד אל-אדחה',
    eventTitleAr: 'عيد الأضحى',
    eventHour: '10 AM',
    eventDate: '2024-06-17',
    eventImage: '../../public/eventImages/Eid-al-Adha.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-Eid-al-Adha.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Nazareth',
    eventPlaceHe: 'נצרת',
    eventPlaceAr: 'الناصرة',
    eventDescriptionEn: [
      'Join us in celebrating Eid al-Adha, a festival of sacrifice and unity with family and friends. Experience a day filled with tradition, shared meals, and heartfelt prayers.',
    ],

    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת עיד אל-אדחה, חג של קורבן ואחדות עם משפחה וחברים. חוו יום מלא במסורות, ארוחות משותפות ותפילות כנות.',
    ],

    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بعيد الأضحى، عيد من التضحية والوحدة مع العائلة والأصدقاء. استمتعوا بيوم مليء بالتقاليد، والوجبات المشتركة، والصلاة الصادقة.',
    ],
  },
  {
    id: 5,
    eventNameCategoryEn: 'Family Celebration',
    eventNameCategoryHe: 'חגיגה משפחתית',
    eventNameCategoryAr: 'احتفال عائلي',
    eventTitleEn: 'Wedding',
    eventTitleHe: 'חתונה',
    eventTitleAr: 'زفاف',
    eventHour: '6 PM',
    eventDate: '2024-12-20',
    eventImage: '../../public/eventImages/Wedding.jpg',
    eventImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    backgroundImage: '../../public/eventImages/Bg-Wedding.JPG',
    backgroundImgStyle: {
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    eventPlaceEn: 'Netanya',
    eventPlaceHe: 'נתניה',
    eventPlaceAr: 'نتانيا',
    eventDescriptionEn: [
      'Join us for a beautiful wedding celebration, as we unite two families in love and joy. Please be our guest for an evening of heartfelt vows, dining, and dancing.',
    ],

    eventDescriptionHe: [
      'הצטרפו אלינו לחגיגת חתונה יפה, כפי שאנו מאחדים שני משפחות באהבה ושמחה. נשמח לארח אתכם לערב של נדרים כנים, ארוחה וריקודים.',
    ],

    eventDescriptionAr: [
      'انضموا إلينا للاحتفال بزفاف جميل، حيث نلتقي بين عائلتين بالحب والفرح. يرجى أن تكونوا ضيوفنا في سهرة مليئة بالوعود الصادقة، والطعام، والرقص.',
    ],
  },
]

export default dummyData

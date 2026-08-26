/* Classical Music Quiz Game — question bank (bilingual: he / en)
   Edit this file to add, remove, or change questions.
   Text fields are { he: "...", en: "..." } objects; structural fields
   (points, type, audio, image, answerIndex) are shared across languages.
*/

var POP_CATEGORIES = [
  {
    icon: "🎤",
    name: { he: "פזמונים ומצעדים", en: "Songs & Charts" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזה שיר שבר את השיא למספר השבועות הרצוף הגדול ביותר במקום הראשון במצעד ה-Billboard Hot 100, כששהה שם 19 שבועות ב-2019?", en: "Which song broke the record for most consecutive weeks at #1 on the Billboard Hot 100, staying there for 19 weeks in 2019?" },
        options: {
          he: ["Old Town Road", "Despacito", "Shape of You", "Uptown Funk"],
          en: ["Old Town Road", "Despacito", "Shape of You", "Uptown Funk"]
        },
        answerIndex: 0,
        fact: { he: "השיר, של ליל נאס איקס בשיתוף בילי ריי סיירוס, שבר את השיא הקודם של 16 שבועות, שהיה שייך במשותף לשירים \"One Sweet Day\" (מריה קארי ו-Boyz II Men) ו-\"Despacito\".", en: "The song, by Lil Nas X featuring Billy Ray Cyrus, broke the previous record of 16 weeks, which had been shared by 'One Sweet Day' (Mariah Carey & Boyz II Men) and 'Despacito'." }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזה שיר ריקודים משנת 1996, של הדואט לוס דל ריו, שהה 14 שבועות במקום הראשון במצעד ה-Billboard Hot 100 והפך לאחד ממטורפי הריקוד הגדולים של העשור?", en: "Which 1996 dance song by the duo Los Del Río spent 14 weeks at #1 on the Billboard Hot 100, becoming one of the biggest dance crazes of the decade?" },
        options: {
          he: ["Macarena", "Cotton Eye Joe", "Gangnam Style", "The Cup of Life"],
          en: ["Macarena", "Cotton Eye Joe", "Gangnam Style", "The Cup of Life"]
        },
        answerIndex: 0,
        fact: { he: "למרות שהוא מושר כמעט כולו בספרדית, \"Macarena\" הפך ללהיט ענק גם בארה\"ב, וזכה לריקוד ייחודי משלו שמבוצע בחתונות ובמסיבות ברחבי העולם עד היום.", en: "Despite being sung almost entirely in Spanish, 'Macarena' became a massive crossover hit in the US and even got its own dance routine, still performed at weddings and parties worldwide." }
      },
      {
        points: 300, type: "text",
        prompt: { he: "הביצוע של ויטני יוסטון לאיזו בלדה, שהופיעה בפסקול הסרט \"The Bodyguard\", שהה 14 שבועות במקום הראשון במצעד ה-Billboard Hot 100 בשנים 1992-1993 - שיא אמריקאי לזמנו?", en: "Whitney Houston's cover of which ballad, featured on The Bodyguard soundtrack, spent 14 weeks at #1 on the Billboard Hot 100 in 1992-93 - a US chart record at the time?" },
        options: {
          he: ["I Will Always Love You", "Greatest Love of All", "I Wanna Dance with Somebody", "Saving All My Love for You"],
          en: ["I Will Always Love You", "Greatest Love of All", "I Wanna Dance with Somebody", "Saving All My Love for You"]
        },
        answerIndex: 0,
        fact: { he: "השיר נכתב ובוצע במקור על ידי דולי פרטון ב-1973 כשיר קאנטרי. הגרסה של יוסטון הפכה לסינגל הפיזי הנמכר ביותר אי פעם על ידי אמנית.", en: "The song was originally written and recorded by Dolly Parton in 1973 as a country tune. Houston's version became the best-selling physical single by a woman in music history." }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איזה שיר, שיצא לראשונה ב-1994, הגיע למקום הראשון במצעד ה-Billboard Hot 100 בפעם הראשונה רק בדצמבר 2019 - כעבור 25 שנה - הודות לזינוק בהאזנות בסטרימינג בכל עונת חגים?", en: "Which song, originally released in 1994, finally reached #1 on the Billboard Hot 100 for the first time in December 2019 - 25 years after its release - thanks to streaming surges every holiday season?" },
        options: {
          he: ["All I Want for Christmas Is You", "Last Christmas", "Fantasy", "Kiss from a Rose"],
          en: ["All I Want for Christmas Is You", "Last Christmas", "Fantasy", "Kiss from a Rose"]
        },
        answerIndex: 0,
        fact: { he: "הלהיט החגיגי של מריה קארי שבר את השיא לטיפוס הארוך ביותר למקום הראשון בתולדות מצעד ה-Billboard Hot 100, כשהגיע לפסגה עשרות שנים אחרי צאתו לאור.", en: "Mariah Carey's holiday classic set the record for the longest climb to #1 in Billboard Hot 100 history, hitting the top spot decades after its original release." }
      }
    ]
  },
  {
    icon: "🌟",
    name: { he: "אמנים ולהקות פופ", en: "Pop Artists & Bands" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזו להקת פופ שוודית, שהוקמה ב-1972 והתפרסמה בזכות להיטים כמו \"Dancing Queen\" ו-\"Mamma Mia\", ניצחה באירוויזיון 1974?", en: "Which Swedish pop group, formed in 1972 and famous for hits like 'Dancing Queen' and 'Mamma Mia,' won the Eurovision Song Contest in 1974?" },
        options: {
          he: ["ABBA", "Ace of Base", "Roxette", "a-ha"],
          en: ["ABBA", "Ace of Base", "Roxette", "a-ha"]
        },
        answerIndex: 0,
        fact: { he: "אבבה ניצחה באירוויזיון עם השיר \"Waterloo\" בייצוג שוודיה - הניצחון שיגר את הקריירה הבינלאומית שלה והפך אותה לאחת מהלהקות הנמכרות ביותר בהיסטוריה.", en: "ABBA won Eurovision with the song 'Waterloo,' representing Sweden - the victory launched their international career and made them one of the best-selling music acts of all time." }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזו להקת בנות בריטית קמה ב-1994 לאחר שחברותיה ענו למודעה בעיתון שחיפשה בחורות צעירות \"נועזות ושאפתניות\", והתפרסמה בזכות כינויים כמו פוש וסקרי?", en: "Which British girl group formed in 1994 after answering a newspaper ad looking for 'streetwise, ambitious' young women, and became known for members' nicknames like Posh and Scary?" },
        options: {
          he: ["Spice Girls", "Girls Aloud", "Little Mix", "Bananarama"],
          en: ["Spice Girls", "Girls Aloud", "Little Mix", "Bananarama"]
        },
        answerIndex: 0,
        fact: { he: "ויקטוריה בקהאם, שכונתה \"פוש ספייס\", הפכה מאוחר יותר למעצבת אופנה ונישאה לכדורגלן דייויד בקהאם; הלהקה נותרה אחת מלהקות הבנות הנמכרות בהיסטוריה.", en: "Victoria Beckham, known as 'Posh Spice,' later became a fashion designer and married footballer David Beckham; the group remains one of the best-selling girl groups in history." }
      },
      {
        points: 300, type: "text",
        prompt: { he: "איזו זמרת פופ החלה את דרכה בתוכנית \"The New Mickey Mouse Club\" של דיסני לצד כוכבים עתידיים כמו ג'סטין טימברלייק, לפני שפתחה בקריירת סולו עם \"...Baby One More Time\" ב-1998?", en: "Which pop star began her career on Disney Channel's 'The New Mickey Mouse Club' alongside future stars like Justin Timberlake, before launching a solo career with '...Baby One More Time' in 1998?" },
        options: {
          he: ["Britney Spears", "Christina Aguilera", "Jessica Simpson", "Mandy Moore"],
          en: ["Britney Spears", "Christina Aguilera", "Jessica Simpson", "Mandy Moore"]
        },
        answerIndex: 0,
        fact: { he: "ספירס התגלתה כשרה בגיל צעיר בלואיזיאנה, והפכה ברבות הימים למי שכונתה \"נסיכת הפופ\", אחת מהאמניות הנמכרות ביותר בהיסטוריה.", en: "Spears was discovered singing at a young age in Louisiana and went on to become known as the 'Princess of Pop,' one of the best-selling music artists of all time." }
      },
      {
        points: 400, type: "text",
        prompt: { he: "להקת הפופ-רוק Coldplay - כריס מרטין, ג'וני באקלנד, גיא בריימן ו-וויל צ'מפיון - הוקמה ב-1996 כשארבעתם היו סטודנטים באיזו אוניברסיטה בלונדון?", en: "The pop-rock band Coldplay - Chris Martin, Jonny Buckland, Guy Berryman, and Will Champion - formed in 1996 while all four were students at which London university?" },
        options: {
          he: ["University College London", "King's College London", "Imperial College London", "London School of Economics"],
          en: ["University College London", "King's College London", "Imperial College London", "London School of Economics"]
        },
        answerIndex: 0,
        fact: { he: "הלהקה הופיעה במקור תחת השם \"Starfish\", ורק ב-1998 אימצה את השם Coldplay - שם ש\"שאלה\" מלהקה אחרת שכבר לא רצתה בו.", en: "The band originally performed under the name 'Starfish' before adopting the name Coldplay in 1998, a name borrowed from another band that no longer wanted it." }
      }
    ]
  },
  {
    icon: "🕺",
    name: { he: "תרבות פופ ועובדות", en: "Pop Culture & Facts" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזה ערוץ טלוויזיה מוזיקלי עלה לאוויר ב-1 באוגוסט 1981, וחולל מהפכה בשיווק מוזיקת הפופ בכך ששם את הקליפים במרכז תרבות הנוער?", en: "Which music television channel launched on August 1, 1981, and revolutionized pop music marketing by putting music videos at the center of youth culture?" },
        options: {
          he: ["MTV", "VH1", "BET", "CMT"],
          en: ["MTV", "VH1", "BET", "CMT"]
        },
        answerIndex: 0,
        fact: { he: "הקליפ הראשון ש-MTV שידר אי פעם היה \"Video Killed the Radio Star\" של הלהקה The Buggles - בחירה אירונית במיוחד.", en: "The very first music video MTV ever played was 'Video Killed the Radio Star' by The Buggles - a fittingly ironic choice." }
      },
      {
        points: 200, type: "text",
        prompt: { he: "מהו שמו של ז'אנר מוזיקת הפופ הקוריאני שפרץ לפופולריות עולמית בשנות ה-2010, בהובלת להקות כמו BTS ו-BLACKPINK?", en: "What is the name of the genre of Korean pop music that exploded in global popularity during the 2010s, led by groups like BTS and BLACKPINK?" },
        options: {
          he: ["K-pop", "J-pop", "C-pop", "Mandopop"],
          en: ["K-pop", "J-pop", "C-pop", "Mandopop"]
        },
        answerIndex: 0,
        fact: { he: "ב-2018, האלבום \"Love Yourself: Tear\" של BTS הפך לאלבום הקיי-פופ הראשון אי פעם שהגיע למקום הראשון במצעד האלבומים Billboard 200 בארה\"ב.", en: "In 2018, BTS's album 'Love Yourself: Tear' became the first K-pop album ever to top the Billboard 200 albums chart in the US." }
      },
      {
        points: 300, type: "text",
        prompt: { he: "איזה תת-ז'אנר של מוזיקת פופ, שהתפתח בסוף שנות ה-70 וה-80 בידי להקות כמו Depeche Mode ו-Pet Shop Boys, מתאפיין בשימוש נרחב בסינתיסייזרים ותופי מכונה?", en: "Which pop subgenre, pioneered in the late 1970s and '80s by acts like Depeche Mode and the Pet Shop Boys, is defined by its heavy use of synthesizers and drum machines?" },
        options: {
          he: ["Synth-pop", "Britpop", "New Wave", "Eurodance"],
          en: ["Synth-pop", "Britpop", "New Wave", "Eurodance"]
        },
        answerIndex: 0,
        fact: { he: "הסינת'-פופ הושפע מאוד מחלוצי אלקטרוניקה מוקדמים כמו Kraftwerk, והפיק להיטי ענק כמו \"Don't You Want Me\" של The Human League, שהיה מקום ראשון בבריטניה בחג המולד 1981.", en: "Synth-pop was heavily influenced by earlier electronic pioneers like Kraftwerk, and produced huge chart hits such as The Human League's 'Don't You Want Me,' a UK Christmas #1 in 1981." }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איזו חברת תקליטים, שנוסדה על ידי ברי גורדי בדטרויט ב-1959, הפכה לאגדית בזכות עיצוב ה\"סאונד של Motown\" והשקת כוכבים כמו סטיבי וונדר, דיאנה רוס ולהקת The Supremes, וסמוקי רובינסון?", en: "Which record label, founded by Berry Gordy in Detroit in 1959, became legendary for defining the 'Motown Sound' and launching stars like Stevie Wonder, Diana Ross & The Supremes, and Smokey Robinson?" },
        options: {
          he: ["Motown Records", "Stax Records", "Atlantic Records", "Chess Records"],
          en: ["Motown Records", "Stax Records", "Atlantic Records", "Chess Records"]
        },
        answerIndex: 0,
        fact: { he: "השם Motown נגזר מהכינוי של דטרויט \"Motor Town\". נהוג לומר שלהקת הליווי הפנימית של החברה, ה-Funk Brothers, ניגנה ביותר להיטי מקום ראשון מאשר הביטלס, אלביס פרסלי והרולינג סטונס גם יחד.", en: "Motown got its name from Detroit's nickname 'Motor Town.' Its in-house session band, the Funk Brothers, is often said to have played on more #1 hits than the Beatles, Elvis Presley, and the Rolling Stones combined." }
      }
    ]
  }
];

var ROCK_CATEGORIES = [
  {
    icon: "🎸",
    name: { he: "שירים ולהיטי רוק", en: "Songs & Rock Hits" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזו להקה הקליטה את השיר האייקוני \"Hotel California\"?", en: "Which band recorded the iconic song \"Hotel California\"?" },
        options: {
          he: ["איגלס", "פליטווד מק", "הדורז", "סטילי דן"],
          en: ["Eagles", "Fleetwood Mac", "The Doors", "Steely Dan"]
        },
        answerIndex: 0,
        fact: {
          he: "השיר \"Hotel California\" זכה בפרס גראמי לתקליט השנה בשנת 1978, והוא נחשב עד היום לאחד השירים המושמעים ביותר בתחנות רוק קלאסי.",
          en: "\"Hotel California\" won the Grammy Award for Record of the Year in 1978, and the song remains one of the most-played tracks on classic rock radio to this day."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "באיזה אלבום של להקת לד זפלין נכלל השיר הקלאסי \"Stairway to Heaven\", אלבום שיצא לאור מבלי שהודפס עליו שם כלשהו?", en: "Which Led Zeppelin album features the classic song \"Stairway to Heaven\" and was released with no title printed anywhere on its cover?" },
        options: {
          he: ["לד זפלין IV", "פיזיקל גרפיטי", "האוסז אוף דה הולי", "לד זפלין II"],
          en: ["Led Zeppelin IV", "Physical Graffiti", "Houses of the Holy", "Led Zeppelin II"]
        },
        answerIndex: 0,
        fact: {
          he: "לאלבום, המכונה בפי כול לד זפלין IV, לא הופיע כל שם או כותרת על העטיפה המקורית - רק תמונה וארבעה סמלים תעלומתיים, כשכל אחד מחברי הלהקה בחר סמל משלו.",
          en: "The album, commonly known as Led Zeppelin IV, displayed no band name or title on its original cover - just an image and four cryptic symbols, one chosen by each band member."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "לאיזו בלדת רוק של גאנז אנד רוזז יש קליפ שאורכו כמעט תשע דקות, אחד הארוכים ביותר ששודרו אי פעם ב-MTV, ובו מופיעה תזמורת מלאה?", en: "Which Guns N' Roses power ballad has a music video nearly nine minutes long, one of the longest ever aired on MTV, featuring a full orchestra?" },
        options: {
          he: ["November Rain", "Sweet Child O' Mine", "Paradise City", "Don't Cry"],
          en: ["November Rain", "Sweet Child O' Mine", "Paradise City", "Don't Cry"]
        },
        answerIndex: 0,
        fact: {
          he: "לפי הערכות, הפקת הקליפ עלתה כמיליון וחצי דולר, מה שהפך אותו לאחד מהקליפים היקרים ביותר של תקופתו.",
          en: "The video reportedly cost around $1.5 million to produce, making it one of the most expensive music videos of its era."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איזה אלבום רוק מוכר רשמית על ידי גוף התקליטים האמריקאי RIAA כאלבום הנמכר ביותר בתולדות ארצות הברית, עם מכירות שעוקפות אפילו את Thriller של מייקל ג'קסון?", en: "Which rock album is certified by the RIAA as the best-selling album in United States history, with sales that surpass even Michael Jackson's Thriller?" },
        options: {
          he: ["איגלס - Their Greatest Hits (1971-1975)", "לד זפלין IV", "פליטווד מק - Rumours", "פינק פלויד - The Dark Side of the Moon"],
          en: ["Eagles - Their Greatest Hits (1971-1975)", "Led Zeppelin IV", "Fleetwood Mac - Rumours", "Pink Floyd - The Dark Side of the Moon"]
        },
        answerIndex: 0,
        fact: {
          he: "לפי אישור RIAA, אלבום הלהיטים הגדולים של איגלס הוסמך למכירות של למעלה מ-38 מיליון עותקים בארצות הברית בלבד, מה שמעמיד אותו לפני Thriller במכירות המוסמכות בשוק האמריקאי.",
          en: "As of its RIAA certification, the Eagles' greatest-hits compilation has been certified for over 38 million units sold in the United States alone, edging out Thriller in certified domestic sales."
        }
      }
    ]
  },
  {
    icon: "🤘",
    name: { he: "אמנים ולהקות רוק", en: "Rock Artists & Bands" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "מיק ג'אגר וקית' ריצ'רדס הם צמד היוצרים המרכזי של איזו להקת רוק אגדית?", en: "Mick Jagger and Keith Richards are the core songwriting duo of which legendary rock band?" },
        options: {
          he: ["הרולינג סטונז", "הו", "לד זפלין", "פינק פלויד"],
          en: ["The Rolling Stones", "The Who", "Led Zeppelin", "Pink Floyd"]
        },
        answerIndex: 0,
        fact: {
          he: "ג'אגר וריצ'רדס הכירו כשהיו ילדים, ונפגשו שוב כמתבגרים בזכות אהבה משותפת לתקליטי בלוז אמריקאיים, עד שהקימו יחד את הרולינג סטונז ב-1962.",
          en: "Jagger and Richards met as young children, then reconnected as teenagers over a shared love of American blues records, eventually forming The Rolling Stones in 1962."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזו להקת פרוגרסיב רוק נוסדה בלונדון בשנת 1965 על ידי סיד בארט, רוג'רווטרס, ניק מייסון וריצ'רד רייט?", en: "Which progressive rock band was founded in London in 1965 by Syd Barrett, Roger Waters, Nick Mason and Richard Wright?" },
        options: {
          he: ["פינק פלויד", "ג'נסיס", "ייס", "קינג קרימזון"],
          en: ["Pink Floyd", "Genesis", "Yes", "King Crimson"]
        },
        answerIndex: 0,
        fact: {
          he: "סיד בארט, מוביל היצירה והזמר הראשי המקורי של הלהקה, עזב אותה ב-1968 בעקבות הידרדרות במצבו הנפשי, והוחלף על ידי הגיטריסט דייויד גילמור.",
          en: "Syd Barrett, the band's original creative leader and lead singer, left in 1968 due to declining mental health and was replaced by guitarist David Gilmour."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "מה השם האמיתי שאיתו נולד סלאש, הגיטריסט של גאנז אנד רוזז?", en: "Guns N' Roses guitarist Slash was born under what real name?" },
        options: {
          he: ["סול הדסון", "מייקל בלזרי", "וויליאם ביילי", "אנתוני קידיס"],
          en: ["Saul Hudson", "Michael Balzary", "William Bailey", "Anthony Kiedis"]
        },
        answerIndex: 0,
        fact: {
          he: "סלאש נולד באנגליה ועבר ללוס אנג'לס בילדותו; לפי הסיפור המקובל, כינויו ניתן לו על ידי חבר משפחה, השחקן סימור קאסל, כי הוא תמיד מיהר בין אנשים תוך כדי שיחה.",
          en: "Slash was born in England and moved to Los Angeles as a child; his nickname was reportedly given by family friend, actor Seymour Cassel, because he was always dashing between people while talking."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "השם פליטווד מק מורכב משמות המשפחה של שניים ממקימיה. איזה גיטריסט וזמר הקים בפועל את הלהקה ב-1967 ועזב אותה כבר ב-1970?", en: "Fleetwood Mac takes its name from two of its founding members' surnames. Which guitarist and singer actually founded the band in 1967 and left it in 1970?" },
        options: {
          he: ["פיטר גרין", "לינדסי באקינגהאם", "בוב וולש", "דני קירוואן"],
          en: ["Peter Green", "Lindsey Buckingham", "Bob Welch", "Danny Kirwan"]
        },
        answerIndex: 0,
        fact: {
          he: "פליטווד מק החלה כלהקת בלוז בריטית בהובלת הגיטריסט פיטר גרין, שקרא ללהקה על שם התופף מיק פליטווד והבסיסט ג'ון מק'וי; רק לאחר חילופי הרכב רבים היא הפכה ללהקת פופ-רוק.",
          en: "Fleetwood Mac began as a British blues band led by guitarist Peter Green, who named the group after drummer Mick Fleetwood and bassist John McVie; it later transformed into a pop-rock act following many lineup changes."
        }
      }
    ]
  },
  {
    icon: "🥁",
    name: { he: "היסטוריה ותרבות הרוק", en: "Rock History & Culture" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזה פסטיבל מוזיקה אייקוני משנת 1969, שנערך בחוות חלב בצפון מדינת ניו יורק, הפך לסמל מובהק של תרבות הנגד?", en: "Which iconic 1969 music festival, held on a dairy farm in upstate New York, became a defining symbol of the counterculture era?" },
        options: {
          he: ["וודסטוק", "פסטיבל מונטריי פופ", "פסטיבל האי ווייט", "המופע החינמי באלטמונט"],
          en: ["Woodstock", "Monterey Pop Festival", "Isle of Wight Festival", "Altamont Free Concert"]
        },
        answerIndex: 0,
        fact: {
          he: "לוודסטוק הגיעו כ-400,000 איש, הרבה יותר ממה שהמארגנים ציפו, ופקקי התנועה שנוצרו אילצו חלק מהאמנים להגיע לבמה במסוקים.",
          en: "Woodstock drew an estimated 400,000 attendees - far more than organizers expected - and the resulting traffic jams forced many performers to reach the stage by helicopter."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזה תת-ז'אנר רוק, המאופיין בשירים קצרים ומהירים ובאתוס \"תעשה זאת בעצמך\", הובל באמצע שנות ה-70 על ידי להקות כמו הרמונס וסקס פיסטולז?", en: "Which rock subgenre, defined by short, fast songs and a do-it-yourself ethic, was pioneered in the mid-1970s by bands like the Ramones and the Sex Pistols?" },
        options: {
          he: ["פאנק רוק", "גלאם רוק", "פרוגרסיב רוק", "יאכט רוק"],
          en: ["Punk rock", "Glam rock", "Progressive rock", "Yacht rock"]
        },
        answerIndex: 0,
        fact: {
          he: "הסאונד הגולמי והמצומצם של הפאנק רוק נולד בין השאר כתגובת נגד לסגנון המהוקצע והמורכב של הפרוגרסיב רוק ששלט בתחילת שנות ה-70.",
          en: "The raw, stripped-down sound of punk rock emerged partly as a reaction against the elaborate, polished style of progressive rock that dominated the early 1970s."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "איזה שם ניתן לתנועת הרוק שיצאה מסיאטל בסוף שנות ה-80 ותחילת שנות ה-90, ששילבה אנרגיית פאנק עם מטאל כבד, ונפוצה בזכות להקות כמו סאונדגארדן ופרל ג'אם?", en: "What name was given to the Seattle rock movement of the late 1980s and early 1990s that blended punk energy with heavy metal, popularized by bands such as Soundgarden and Pearl Jam?" },
        options: {
          he: ["גראנג'", "בריטפופ", "ניו וייב", "אמו"],
          en: ["Grunge", "Britpop", "New Wave", "Emo"]
        },
        answerIndex: 0,
        fact: {
          he: "אופנת הגראנג' - חולצות פלנל, ג'ינסים קרועים ונעלי קרב - הפכה למיינסטרים כמעט בן לילה, בעיקר בזכות חברת התקליטים הסיאטלית Sub Pop והפריצה המסחרית הפתאומית של הז'אנר בשנים 1991-1992.",
          en: "Grunge fashion - flannel shirts, ripped jeans, combat boots - went mainstream almost overnight thanks largely to Seattle label Sub Pop and the genre's sudden commercial breakthrough in 1991-1992."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "הגיטריסט של להקת הקינקס, דייב דייויס, יצר צליל גיטרה מעוות פורץ דרך עבור הלהיט \"You Really Got Me\" משנת 1964, על ידי פגיעה מכוונת באיזה ציוד?", en: "Kinks guitarist Dave Davies famously created an early distorted guitar tone for the 1964 hit \"You Really Got Me\" by physically damaging which piece of equipment?" },
        options: {
          he: ["רמקול המגבר שלו", "הפיקאפ של הגיטרה", "כבל הגיטרה", "יחידת ההדהוד של המגבר"],
          en: ["His amplifier's speaker cone", "His guitar's pickup", "His guitar cable", "His amp's reverb tank"]
        },
        answerIndex: 0,
        fact: {
          he: "דייויס חתך את רמקול המגבר הקטן שלו בסכין גילוח כדי לקבל צליל גס ומעוות, טריק שנחשב כיום לאחד המבשרים המוקדמים של סאונד הגיטרה בהארד רוק ובמטאל הכבד.",
          en: "Davies slit his small amplifier's speaker cone with a razor blade to get a raw, fuzzy tone, a trick widely cited as an early precursor to hard rock and heavy metal guitar sounds."
        }
      }
    ]
  }
];

var ISRAELI_CATEGORIES = [
  {
    icon: "🎶",
    name: { he: "שירים ולהיטים ישראליים", en: "Israeli Songs & Hits" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזה שיר ישראלי מסורתי הפך ללהיט עולמי והושר בחתונות ובאירועים יהודיים ברחבי העולם?", en: "Which traditional Israeli song became a worldwide hit, sung at weddings and Jewish celebrations around the globe?" },
        options: {
          he: ["ירושלים של זהב", "אל תגידי לי שלום", "הבה נגילה", "בשנה הבאה"],
          en: ["Yerushalayim Shel Zahav", "Al Tagidi Li Shalom", "Hava Nagila", "Bashana Haba'a"]
        },
        answerIndex: 2,
        fact: {
          he: "'הבה נגילה' מבוססת על מנגינה חסידית עתיקה, וקיבלה מילים עבריות בתחילת המאה ה-20. הזמר הבינלאומי הארי בלפונטה הקליט גרסה משלה שסייעה להפוך אותה ללהיט מוכר בכל העולם.",
          en: "'Hava Nagila' is based on an old Hasidic melody and received Hebrew lyrics in the early 20th century. International singer Harry Belafonte recorded a version that helped turn it into a globally recognized hit."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזה שיר איקוני נכתב על ידי נעמי שמר וזכה למעמד של המנון בלתי רשמי לירושלים?", en: "Which iconic song, written by Naomi Shemer, became an unofficial anthem for Jerusalem?" },
        options: {
          he: ["הבה נגילה", "ירושלים של זהב", "שיר לשלום", "אל כל אלה"],
          en: ["Hava Nagila", "Yerushalayim Shel Zahav (Jerusalem of Gold)", "Shir LaShalom", "Al Kol Eleh"]
        },
        answerIndex: 1,
        fact: {
          he: "השיר הוצג לראשונה בפסטיבל הזמר הישראלי במאי 1967, כשלושה שבועות בלבד לפני מלחמת ששת הימים. לאחר איחוד ירושלים הוסיפה נעמי שמר בית נוסף לשיר, שמתאר את השופר הנשמע ליד הכותל.",
          en: "The song premiered at the Israel Song Festival in May 1967, just three weeks before the Six-Day War. After Jerusalem's reunification, Naomi Shemer added an extra verse describing the shofar sounding at the Western Wall."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "מי כתבו יחד את השיר האופטימי 'בשנה הבאה', שהפך לסמל של תקווה בזמר העברי?", en: "Who co-wrote the optimistic song 'Bashana Haba'a' (Next Year), which became a symbol of hope in Hebrew song?" },
        options: {
          he: ["שלום חנוך ואריק איינשטיין", "נעמי שמר ויעקב רוטבליט", "דני סנדרסון וגידי גוב", "אהוד מנור ונורית הירש"],
          en: ["Shalom Hanoch and Arik Einstein", "Naomi Shemer and Yaakov Rotblit", "Danny Sanderson and Gidi Gov", "Ehud Manor and Nurit Hirsh"]
        },
        answerIndex: 3,
        fact: {
          he: "השיר נכתב ב-1970 ולראשונה הושר בביצועה של הזמרת עילנית. עם השנים הוא הפך לאחד השירים המוקלטים והמושמעים ביותר בישראל, ובוצע גם בגרסאות באנגלית ובשפות נוספות ברחבי העולם.",
          en: "The song was written in 1970 and first performed by singer Ilanit. Over the years it became one of the most recorded and performed songs in Israel, and has been covered in English and other languages around the world."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איזה שיר שלום נודע לשמצה כששר אותו ראש הממשלה יצחק רבין בעצרת בכיכר מלכי ישראל בתל אביב, רגעים לפני התנקשותו ב-1995?", en: "Which peace song became infamous after Prime Minister Yitzhak Rabin sang it at a rally in Tel Aviv's Kings of Israel Square, moments before his assassination in 1995?" },
        options: {
          he: ["ירושלים של זהב", "שיר לשלום", "אל כל אלה", "יש לי כפר קטן"],
          en: ["Yerushalayim Shel Zahav", "Shir LaShalom (Song for Peace)", "Al Kol Eleh", "Yesh Li Kfar Katan"]
        },
        answerIndex: 1,
        fact: {
          he: "השיר נכתב ב-1969 על ידי יעקב רוטבליט (מילים) ויאיר רוזנבלום (לחן) והושר לראשונה על ידי להקת הנח״ל. דף המילים המקופל, שהיה בכיסו של רבין באותו ערב, נמצא מוכתם בדם לאחר האירוע והפך לסמל היסטורי.",
          en: "The song was written in 1969 by Yaakov Rotblit (lyrics) and Yair Rosenblum (music), first performed by the Nahal military band. The folded lyrics sheet that was in Rabin's pocket that evening was found stained with blood after the shooting and became a historic symbol."
        }
      }
    ]
  },
  {
    icon: "🎙️",
    name: { he: "אמנים ולהקות ישראליות", en: "Israeli Artists & Bands" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "איזה זמר, שהתפרסם עם השיר 'הפרח בגני', זכה לכינוי 'מלך הזמר המזרחי'?", en: "Which singer, famous for the song 'HaPerach BeGani', earned the title 'King of Mizrahi Music'?" },
        options: {
          he: ["אריק איינשטיין", "שלמה ארצי", "זוהר ארגוב", "יהורם גאון"],
          en: ["Arik Einstein", "Shlomo Artzi", "Zohar Argov", "Yehoram Gaon"]
        },
        answerIndex: 2,
        fact: {
          he: "זוהר ארגוב, יליד ראשון לציון ממשפחה ממוצא תימני, פרץ לתודעה הישראלית ב-1982 עם השיר 'הפרח בגני', שנחשב עד היום להמנון הבלתי רשמי של הזמר המזרחי בישראל.",
          en: "Zohar Argov, born in Rishon LeZion to a family of Yemenite descent, broke into Israeli consciousness in 1982 with 'HaPerach BeGani,' still considered the unofficial anthem of Mizrahi music in Israel today."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "איזו להקה אגדית, שהוציאה רק שני אלבומי אולפן, נחשבת לאחת המשפיעות ביותר בתולדות הפופ-רוק הישראלי?", en: "Which legendary band, which released only two studio albums, is considered one of the most influential in the history of Israeli pop-rock?" },
        options: {
          he: ["תיסלם", "כוורת", "משינה", "הגשש החיוור"],
          en: ["Tislam", "Kaveret (Poogy)", "Mashina", "HaGashash HaHiver"]
        },
        answerIndex: 1,
        fact: {
          he: "להקת כוורת פעלה בין השנים 1973-1976 בלבד, אך זכתה למעמד אגדי. ב-1974 היא ייצגה את ישראל באירוויזיון בבריטון עם השיר 'נתתי לה חיי' וסיימה במקום השביעי.",
          en: "Kaveret was active only between 1973 and 1976, yet achieved legendary status. In 1974 it represented Israel at the Eurovision Song Contest in Brighton with 'Natati La Khayai,' finishing seventh."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "איזה זמר-יוצר מכונה 'אבי הרוק הישראלי' בזכות הכנסת סאונד הגיטרה החשמלית לזמר העברי בשנות ה-70?", en: "Which singer-songwriter is known as the 'Father of Israeli Rock' for introducing electric guitar rock sound into Hebrew song in the 1970s?" },
        options: {
          he: ["מתי כספי", "עידן רייכל", "אהוד בנאי", "שלום חנוך"],
          en: ["Matti Caspi", "Idan Raichel", "Ehud Banai", "Shalom Hanoch"]
        },
        answerIndex: 3,
        fact: {
          he: "האלבום של שלום חנוך 'מחכים למשיח' (1985) נחשב לאחד מאלבומי הרוק החשובים בתולדות המוזיקה הישראלית, ושילב לראשונה ביקורת חברתית חדה עם סאונד רוקנרול חשמלי.",
          en: "Shalom Hanoch's album 'Waiting for the Messiah' (1985) is considered one of the most important rock albums in Israeli music history, combining sharp social commentary with an electric rock and roll sound for the first time."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איזו זמרת ילידת פולין, שעלתה לישראל בילדותה, בנתה קריירה של יותר משישה עשורים והקליטה גם אלבומים בשפת היידיש?", en: "Which Poland-born singer, who immigrated to Israel as a child, built a career spanning more than six decades and also recorded albums in Yiddish?" },
        options: {
          he: ["חוה אלברשטיין", "אילנית", "יהודית רביץ", "רבקה זוהר"],
          en: ["Chava Alberstein", "Ilanit", "Yehudit Ravitz", "Rivka Zohar"]
        },
        answerIndex: 0,
        fact: {
          he: "חוה אלברשטיין נולדה בפולין ב-1946 ועלתה לישראל בילדותה. לצד קריירה ענפה בעברית היא נחשבת לאחת הזמרות הבולטות בעולם בשירה ביידיש, ושילבה בין המסורת היהודית-אירופית לזמר הישראלי המודרני.",
          en: "Chava Alberstein was born in Poland in 1946 and immigrated to Israel as a child. Alongside a prolific Hebrew-language career, she is considered one of the world's leading singers in Yiddish, blending Jewish-European tradition with modern Israeli song."
        }
      }
    ]
  },
  {
    icon: "🇮🇱",
    name: { he: "תרבות ויורוויזיון", en: "Culture & Eurovision" },
    questions: [
      {
        points: 100, type: "text",
        prompt: { he: "באיזו שנה זכתה ישראל בפעם הראשונה בתחרות האירוויזיון, עם השיר 'א-ב-ני-בי'?", en: "In which year did Israel win the Eurovision Song Contest for the first time, with the song 'A-Ba-Ni-Bi'?" },
        options: {
          he: ["1973", "1978", "1983", "1998"],
          en: ["1973", "1978", "1983", "1998"]
        },
        answerIndex: 1,
        fact: {
          he: "את השיר ביצעו יזהר כהן ולהקת אלפא-בטא. השיר מבוסס על 'שפת הבי', משחק מילים ילדים ישראלי מוכר, שבו מכניסים את ההברה 'בי' בין ההברות של כל מילה.",
          en: "The song was performed by Izhar Cohen and the group Alphabeta. It's built around 'B-language,' a well-known Israeli children's wordplay where the syllable 'bi' is inserted between the syllables of each word."
        }
      },
      {
        points: 200, type: "text",
        prompt: { he: "מי ייצגה את ישראל באירוויזיון 2018 וזכתה במקום הראשון עם השיר 'Toy', מה שהוביל לכך שהתחרות ב-2019 נערכה בתל אביב?", en: "Who represented Israel at Eurovision 2018 and won first place with the song 'Toy,' leading the 2019 contest to be held in Tel Aviv?" },
        options: {
          he: ["דנה אינטרנשיונל", "נטע ברזילי", "עידן רייכל", "נועה קירל"],
          en: ["Dana International", "Netta Barzilai", "Idan Raichel", "Noa Kirel"]
        },
        answerIndex: 1,
        fact: {
          he: "הניצחון ב-2018 היה ניצחונה הרביעי של ישראל באירוויזיון, ובזכותו התארחה התחרות בישראל בפעם השלישית בתולדותיה, הפעם במרכז הבינלאומי לאירועים בתל אביב.",
          en: "The 2018 win was Israel's fourth Eurovision victory, and as a result the contest was hosted in Israel for the third time in its history, this time at the Tel Aviv Convention Center."
        }
      },
      {
        points: 300, type: "text",
        prompt: { he: "באיזו שנה זכתה ישראל באירוויזיון בפעם השנייה ברציפות, עם השיר 'הללויה', ואף אירחה את התחרות בעצמה?", en: "In which year did Israel win Eurovision for the second consecutive time, with the song 'Hallelujah,' and even hosted the contest itself?" },
        options: {
          he: ["1980", "1978", "1979", "1981"],
          en: ["1980", "1978", "1979", "1981"]
        },
        answerIndex: 2,
        fact: {
          he: "את השיר ביצעו גלי עטרי ולהקת מילק אנד האני. משום שישראל ניצחה גם בשנה הקודמת, היא זכתה בזכות האירוח לתחרות 1979, שנערכה בירושלים.",
          en: "The song was performed by Gali Atari and the group Milk and Honey. Because Israel had also won the previous year, it earned the right to host the 1979 contest, which took place in Jerusalem."
        }
      },
      {
        points: 400, type: "text",
        prompt: { he: "איך נקראת תחנת הרדיו המוזיקלית של גלי צה״ל, שהוקמה ב-1993 ומשמיעה כמעט אך ורק מוזיקה, והפכה לגורם משפיע מאוד בעיצוב מצעד הפזמונים הישראלי?", en: "What is the name of the Army Radio music station, established in 1993, which plays almost exclusively music and became a highly influential force in shaping the Israeli hit parade?" },
        options: {
          he: ["רדיוס 100FM", "כאן גימל", "רדיו תל אביב", "גלגלצ"],
          en: ["Radius 100FM", "Kan Gimmel", "Radio Tel Aviv", "Galgalatz"]
        },
        answerIndex: 3,
        fact: {
          he: "השם 'גלגלצ' משלב בין 'גלי צה״ל' לבין 'גלגל', בהתייחסות לכך שהתחנה שודרה במקור בעיקר לנהגים בכבישים. עד היום היא נחשבת לאחת התחנות המשפיעות ביותר על הצלחת שירים חדשים בישראל.",
          en: "The name 'Galgalatz' combines 'Galei Tzahal' (Army Radio) with 'galgal' (wheel), referencing its original focus on broadcasting to drivers on the road. It remains one of the most influential stations for breaking new songs in Israel today."
        }
      }
    ]
  }
];

var MUSICIAN_PHOTOS = {
  classical: [
    {
      points: 100, type: "photo", image: "images/musicians/classical-beethoven.jpg",
      options: {
        he: ["לודוויג ואן בטהובן", "וולפגנג אמדאוס מוצרט", "יוהנס ברהמס", "פרנץ שוברט"],
        en: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johannes Brahms", "Franz Schubert"]
      },
      answerIndex: 0,
      fact: {
        he: "דיוקן זה מאת יוזף קרל שטילר משנת 1820 הוא התמונה המזוהה ביותר עם בטהובן, ומציג אותו אוחז בכתב היד של המיסה החגיגית שלו.",
        en: "This 1820 portrait by Joseph Karl Stieler is the most reproduced image of Beethoven, showing him holding the manuscript of his Missa Solemnis."
      }
    },
    {
      points: 200, type: "photo", image: "images/musicians/classical-mozart.jpg",
      options: {
        he: ["וולפגנג אמדאוס מוצרט", "יוזף היידן", "אנטוניו סאליירי", "כריסטוף ויליבלד גלוק"],
        en: ["Wolfgang Amadeus Mozart", "Joseph Haydn", "Antonio Salieri", "Christoph Willibald Gluck"]
      },
      answerIndex: 0,
      fact: {
        he: "דיוקן בלתי גמור זה מאת יוהאן נפומוק דלה קרוצ'ה (1780–81) נחשב לאחת הדמויות המהימנות ביותר של מוצרט, שצויר מהחיים ולא מהזיכרון.",
        en: "This unfinished portrait by Johann Nepomuk della Croce (1780-81) is considered one of the most accurate likenesses of Mozart, painted from life rather than from memory."
      }
    },
    {
      points: 300, type: "photo", image: "images/musicians/classical-bach.jpg",
      options: {
        he: ["יוהן סבסטיאן באך", "גאורג פרידריך הנדל", "גאורג פיליפ טלמן", "דיטריך בוקסטהודה"],
        en: ["Johann Sebastian Bach", "George Frideric Handel", "Georg Philipp Telemann", "Dieterich Buxtehude"]
      },
      answerIndex: 0,
      fact: {
        he: "לבאך נולדו 20 ילדים משני נישואים, וכמה מהם — ובהם קרל פיליפ עמנואל באך ויוהן כריסטיאן באך — הפכו בעצמם למלחינים נחשבים.",
        en: "Bach fathered 20 children across two marriages, and several of them — including C.P.E. Bach and J.C. Bach — became celebrated composers in their own right."
      }
    },
    {
      points: 400, type: "photo", image: "images/musicians/classical-tchaikovsky.jpg",
      options: {
        he: ["פיוטר איליץ' צ'ייקובסקי", "סרגיי רחמנינוב", "ניקולאי רימסקי-קורסקוב", "מודסט מוסורגסקי"],
        en: ["Pyotr Ilyich Tchaikovsky", "Sergei Rachmaninoff", "Nikolai Rimsky-Korsakov", "Modest Mussorgsky"]
      },
      answerIndex: 0,
      fact: {
        he: "בניגוד לבטהובן או מוצרט, צ'ייקובסקי חי עד עידן הצילום — זהו תצלום אמיתי שלו, לא דיוקן מצויר.",
        en: "Unlike Beethoven or Mozart, Tchaikovsky lived into the age of photography — this is an actual photograph of him, not a painted portrait."
      }
    }
  ],
  pop: [
    {
      points: 100, type: "photo", image: "images/musicians/pop-michael-jackson.jpg",
      options: {
        he: ["מייקל ג'קסון", "פרינס", "ליונל ריצ'י", "סטיבי וונדר"],
        en: ["Michael Jackson", "Prince", "Lionel Richie", "Stevie Wonder"]
      },
      answerIndex: 0,
      fact: {
        he: "התמונה צולמה בטקס בבית הלבן במאי 1984, שבו הנשיא רייגן העניק לג'קסון תעודת הוקרה על כך שאִפשר שימוש באחד משיריו בקמפיין נגד נהיגה בשכרות.",
        en: "This photo is from a May 1984 White House ceremony where President Reagan awarded Jackson a commendation for allowing one of his songs to be used in a drunk-driving prevention campaign."
      }
    },
    {
      points: 200, type: "photo", image: "images/musicians/pop-beyonce.jpg",
      options: {
        he: ["ביונסה", "ריהאנה", "אליישה קיז", "וויטני יוסטון"],
        en: ["Beyoncé", "Rihanna", "Alicia Keys", "Whitney Houston"]
      },
      answerIndex: 0,
      fact: {
        he: "ביונסה התפרסמה לראשונה כסולנית של Destiny's Child, לפני שיצאה לדרך אחת הקריירות הסוליות המצליחות בהיסטוריית הפופ.",
        en: "Beyoncé first found fame as the lead singer of Destiny's Child before launching one of the most successful solo careers in pop history."
      }
    },
    {
      points: 300, type: "photo", image: "images/musicians/pop-elton-john.jpg",
      options: {
        he: ["אלטון ג'ון", "בילי ג'ואל", "רוד סטיוארט", "ג'ורג' מייקל"],
        en: ["Elton John", "Billy Joel", "Rod Stewart", "George Michael"]
      },
      answerIndex: 0,
      fact: {
        he: "שמו האמיתי של אלטון ג'ון הוא רג'ינלד קנת' דווייט — הוא שינה אותו רשמית ב-1972, בהשראת שני חברים מהרכב הנעורים שלו, Bluesology.",
        en: "Elton John's real name is Reginald Kenneth Dwight — he legally changed it in 1972, partly inspired by two bandmates from his early group, Bluesology."
      }
    },
    {
      points: 400, type: "photo", image: "images/musicians/pop-madonna.jpg",
      options: {
        he: ["מדונה", "סינדי לופר", "דבי הארי", "פט בנטאר"],
        en: ["Madonna", "Cyndi Lauper", "Debbie Harry", "Pat Benatar"]
      },
      answerIndex: 0,
      fact: {
        he: "מדונה עברה לניו יורק ב-1978 עם כ-35 דולר בלבד בכיסה, בנחישות להפוך לרקדנית מקצועית — עוד לפני שפנתה למוזיקה.",
        en: "Madonna moved to New York City in 1978 with only about $35 to her name, determined to become a professional dancer before pivoting to music."
      }
    }
  ],
  rock: [
    {
      points: 100, type: "photo", image: "images/musicians/rock-beatles.jpg",
      options: {
        he: ["הביטלס", "הרולינג סטונז", "הו", "הקינקס"],
        en: ["The Beatles", "The Rolling Stones", "The Who", "The Kinks"]
      },
      answerIndex: 0,
      fact: {
        he: 'התמונה צולמה בפברואר 1964, בשבוע שבו הגיעו הביטלס לארה"ב והופיעו בתוכנית "The Ed Sullivan Show" בפני כ-73 מיליון צופים.',
        en: "This photo is from February 1964, the week The Beatles arrived in America and appeared on The Ed Sullivan Show, watched by roughly 73 million viewers."
      }
    },
    {
      points: 200, type: "photo", image: "images/musicians/rock-freddie-mercury.jpg",
      options: {
        he: ["פרדי מרקורי", "רוברט פלאנט", "רוג'ר דלטרי", "רוד סטיוארט"],
        en: ["Freddie Mercury", "Robert Plant", "Roger Daltrey", "Rod Stewart"]
      },
      answerIndex: 0,
      fact: {
        he: "פרדי מרקורי נולד בשם פארוח בולסרה בזנזיבר, ובילה חלק מילדותו בהודו לפני שמשפחתו עברה לאנגליה.",
        en: "Freddie Mercury was born Farrokh Bulsara in Zanzibar and spent part of his childhood in India before his family moved to England."
      }
    },
    {
      points: 300, type: "photo", image: "images/musicians/rock-david-bowie.jpg",
      options: {
        he: ["דייויד בואי", "לו ריד", "איגי פופ", "מארק בולאן"],
        en: ["David Bowie", "Lou Reed", "Iggy Pop", "Marc Bolan"]
      },
      answerIndex: 0,
      fact: {
        he: "העיניים השונות-למראה של דייויד בואי נבעו מקטטה בנעוריו שגרמה לאישון אחד להישאר מורחב לצמיתות — ולא, כפי שרבים חושבים, משני צבעי עיניים שונים.",
        en: "David Bowie's differently colored-looking eyes were the result of a teenage fight that left one pupil permanently dilated — not, as often assumed, two different eye colors."
      }
    },
    {
      points: 400, type: "photo", image: "images/musicians/rock-jimi-hendrix.jpg",
      options: {
        he: ["ג'ימי הנדריקס", "אריק קלפטון", "קרלוס סנטנה", "ג'ימי פייג'"],
        en: ["Jimi Hendrix", "Eric Clapton", "Carlos Santana", "Jimmy Page"]
      },
      answerIndex: 0,
      fact: {
        he: "ג'ימי הנדריקס היה ברובו מוזיקאי שלמד לבד, וניגן בתחילת דרכו על גיטרה לימניים שהפך ומיתר מחדש, מכיוון שגיטרות לשמאליים היו קשות להשגה.",
        en: "Jimi Hendrix was largely self-taught and initially played a right-handed guitar flipped upside-down and restrung, since left-handed models were hard to find."
      }
    }
  ],
  israeli: [
    {
      points: 100, type: "photo", image: "images/musicians/israeli-netta.jpg",
      options: {
        he: ["נטע ברזילי", "דנה אינטרנשיונל", "נועה קירל", "עדן גולן"],
        en: ["Netta Barzilai", "Dana International", "Noa Kirel", "Eden Golan"]
      },
      answerIndex: 0,
      fact: {
        he: "נטע ברזילי זכתה באירוויזיון עבור ישראל ב-2018 עם השיר \"Toy\", שהתפרסם בזכות אפקטי הקול הייחודיים שלו ומסר של העצמה נשית.",
        en: "Netta Barzilai won the Eurovision Song Contest for Israel in 2018 with her song 'Toy', known for its distinctive vocal sound effects and message of female empowerment."
      }
    },
    {
      points: 200, type: "photo", image: "images/musicians/israeli-idan-raichel.jpg",
      options: {
        he: ["עידן רייכל", "אביב גפן", "שלמה ארצי", "דודו טסה"],
        en: ["Idan Raichel", "Aviv Geffen", "Shlomo Artzi", "Dudu Tassa"]
      },
      answerIndex: 0,
      fact: {
        he: "עידן רייכל מוכר כמייסד הפרויקט של עידן רייכל, המשלב מילים בעברית עם מסורות מוזיקליות אתיופיות, תימניות ועוד ממגוון קהילות בישראל.",
        en: "Idan Raichel is known for founding The Idan Raichel Project, which blends Hebrew lyrics with Ethiopian, Yemenite, and other musical traditions from across Israel's diverse communities."
      }
    },
    {
      points: 300, type: "photo", image: "images/musicians/israeli-dana-international.jpg",
      options: {
        he: ["דנה אינטרנשיונל", "עופרה חזה", "ריטה", "אייל גולן"],
        en: ["Dana International", "Ofra Haza", "Rita", "Eyal Golan"]
      },
      answerIndex: 0,
      fact: {
        he: "דנה אינטרנשיונל זכתה באירוויזיון עבור ישראל ב-1998 עם השיר \"Diva\", והפכה לאמנית הטרנסג'נדרית הגלויה הראשונה שזוכה בתחרות.",
        en: "Dana International won Eurovision for Israel in 1998 with 'Diva', becoming the first openly transgender artist to win the contest."
      }
    },
    {
      points: 400, type: "photo", image: "images/musicians/israeli-noa-kirel.jpg",
      options: {
        he: ["נועה קירל", "עדן בן זקן", "אגם בוחבוט", "סטלה"],
        en: ["Noa Kirel", "Eden Ben Zaken", "Agam Buhbut", "Stella"]
      },
      answerIndex: 0,
      fact: {
        he: "נועה קירל ייצגה את ישראל באירוויזיון 2023 עם השיר \"Unicorn\", וסיימה במקום השלישי — אחת התוצאות הטובות ביותר של ישראל בעידן המודרני של התחרות.",
        en: "Noa Kirel represented Israel at Eurovision 2023 with 'Unicorn', finishing third overall — one of Israel's best results in the contest's modern era."
      }
    }
  ]
};

window.QUIZ_DATA = {
  genres: {
    classical: {
      name: { he: "קלאסית", en: "Classical" },
      icon: "🎻",
      rounds: [
    {
      name: { he: "סיבוב 1 — להיטים מוכרים", en: "Round 1 — Familiar Favorites" },
      categories: [
        {
          icon: "🎧",
          name: { he: "זהו את הלחן", en: "Name That Tune" },
          questions: [
            {
              points: 100, type: "audio", audio: "audio/fur-elise.ogg",
              prompt: { he: "הקשיבו היטב — איזו יצירה זו?", en: "Listen closely — which piece is this?" },
              options: {
                he: ["בטהובן — לאליזה", "מוצרט — מארש טורקי", "שופן — ואלס הדקה", "שוברט — אווה מריה"],
                en: ["Beethoven — Für Elise", "Mozart — Turkish March", "Chopin — Minute Waltz", "Schubert — Ave Maria"]
              },
              answerIndex: 0,
              fact: {
                he: "\"לאליזה\" פורסמה רק ב-1867 — 40 שנה אחרי מותו של בטהובן. איש אינו יודע בוודאות מי הייתה \"אליזה\".",
                en: "“Für Elise” wasn't published until 1867 — 40 years after Beethoven's death. Nobody knows for certain who “Elise” actually was."
              }
            },
            {
              points: 200, type: "audio", audio: "audio/vivaldi-spring.ogg",
              prompt: { he: "קונצ'רטו לכינור זה פותח מחזור מפורסם בן ארבעה חלקים. איזו יצירה זו?", en: "This violin concerto opens a famous set of four. Which piece is it?" },
              options: {
                he: ["פכלבל — קאנון ברה מז'ור", "ויוואלדי — האביב (ארבע העונות)", "הנדל — מוזיקת מים", "קורלי — קונצ'רטו לחג המולד"],
                en: ["Pachelbel — Canon in D", "Vivaldi — Spring (The Four Seasons)", "Handel — Water Music", "Corelli — Christmas Concerto"]
              },
              answerIndex: 1,
              fact: {
                he: "\"ארבע העונות\" היא אחת הדוגמאות המוקדמות והמפורטות ביותר ל\"מוזיקה תיאורית\" — ויוואלדי אף פרסם סונטות (שירים) שמתארים כל עונה לצד התווים.",
                en: "The Four Seasons is one of the earliest detailed examples of “program music” — Vivaldi even published sonnets describing each season alongside the score."
              }
            },
            {
              points: 300, type: "audio", audio: "audio/toccata-fugue-bach.ogg",
              prompt: { he: "כנראה שמעתם את זה בבית רדוף רוחות או בסרט אימה. איזו יצירה זו?", en: "You've probably heard this in a haunted house or horror movie. Which piece is it?" },
              options: {
                he: ["הנדל — המשיח", "בוקסטהודה — פסקליה ברה מינור", "באך — טוקטה ופוגה ברה מינור", "באך — קונצ'רטו ברנדנבורגי מס' 3"],
                en: ["Handel — Messiah", "Buxtehude — Passacaglia in D minor", "Bach — Toccata and Fugue in D minor", "Bach — Brandenburg Concerto No. 3"]
              },
              answerIndex: 2,
              fact: {
                he: "היצירה כה קשורה לסצנות מפחידות בסרטים עד שרבים מופתעים לגלות שחוקרים מסוימים מטילים ספק בכך שבאך בכלל כתב אותה.",
                en: "This piece is so tied to spooky movie scenes that many are surprised some scholars actually dispute whether Bach wrote it at all."
              }
            },
            {
              points: 400, type: "audio", audio: "audio/eine-kleine-nachtmusik.ogg",
              prompt: { he: "סרנדה עליזה למיתרים — איך קוראים לה?", en: "A cheerful string serenade — what's it called?" },
              options: {
                he: ["היידן — סימפוניית ההפתעה", "מוצרט — סימפוניה מס' 40", "בוקריני — מינואט", "מוצרט — סרנדה קטנה בלילה"],
                en: ["Haydn — Surprise Symphony", "Mozart — Symphony No. 40", "Boccherini — Minuet", "Mozart — Eine kleine Nachtmusik"]
              },
              answerIndex: 3,
              fact: {
                he: "השם \"Eine kleine Nachtmusik\" פירושו \"קצת מוזיקת לילה\". היא נכתבה כסרנדה — מוזיקת בידור קלה, לא יצירה לאולם קונצרטים.",
                en: "The title literally means “A Little Night Music.” It was written as a serenade — lighter entertainment music, not a concert-hall showpiece."
              }
            }
          ]
        },
        {
          icon: "🎼",
          name: { he: "תורת המוסיקה ומונחים", en: "Music Theory & Terms" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "מה משמעות סימן העוצמה \"פורטה\" (forte)?", en: "What does the dynamic marking “forte” mean?" },
              options: { he: ["חזק", "חלש", "מהיר", "איטי"], en: ["Loud", "Soft", "Fast", "Slow"] },
              answerIndex: 0,
              fact: {
                he: "סימני עוצמה כמו פורטה (f) ופיאנו (p) מציינים לנגן באיזו עוצמה לנגן — כלי הפסנתר (פיאנופורטה) אף נקרא על שם יכולתו לנגן גם חזק וגם חלש!",
                en: "Dynamics like forte (f) and piano (p) tell performers how loud or soft to play — the piano (the instrument) is even named for its ability to play both loud and soft!"
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "מה מציין סימן הטמפו \"אלגרו\" (allegro)?", en: "What does the tempo marking “allegro” indicate?" },
              options: {
                he: ["טמפו איטי וחגיגי", "טמפו מהיר ותוסס", "סגנון שירה", "סוג אקורד"],
                en: ["A slow, solemn tempo", "A fast, lively tempo", "A style of singing", "A type of chord"]
              },
              answerIndex: 1,
              fact: {
                he: "סימני טמפו כמעט תמיד כתובים באיטלקית, מכיוון שמלחינים איטלקים שלטו בתיווי המוזיקה המודפס בראשית המאה ה-17 — והמסורת נשארה.",
                en: "Tempo markings are almost always in Italian, because Italian composers dominated early published music notation in the 1600s — and the tradition stuck."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "כמה פרקים יש בדרך כלל בסימפוניה מהתקופה הקלאסית?", en: "How many movements does a typical Classical-era symphony have?" },
              options: { he: ["1", "4", "7", "12"], en: ["1", "4", "7", "12"] },
              answerIndex: 1,
              fact: {
                he: "המבנה הסטנדרטי הוא בדרך כלל מהיר–איטי–ריקוד (מינואט/שרצו)–מהיר, מבנה שגובש בעיקר בידי היידן.",
                en: "The standard structure is fast – slow – dance (minuet/scherzo) – fast, a form largely crystallized by Haydn."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "\"קונצ'רטו\" מתואר בצורה הטובה ביותר כ:", en: "A “concerto” is best described as:" },
              options: {
                he: ["יצירה לפסנתר סולו בלבד", "ריקוד ב-3/4", "יצירה שבה סולן מלווה בתזמורת", "יצירה ללא כלים, רק קולות"],
                en: ["A piece for solo piano only", "A dance in 3/4 time", "A piece featuring a soloist accompanied by an orchestra", "A piece with no instruments, voices only"]
              },
              answerIndex: 2,
              fact: {
                he: "המילה מגיעה מהאיטלקית \"concertare\", שמשמעה \"להתאחד\" — והיא מדגישה את האיזון בין הסולן לתזמורת.",
                en: "The word comes from the Italian “concertare,” meaning “to join together” — highlighting the balance between soloist and ensemble."
              }
            }
          ]
        },
        {
          icon: "📜",
          name: { he: "מלחינים והיסטוריה", en: "Composers & History" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "איזה מלחין המשיך ליצור יצירות מופת גם אחרי שהתחרש לחלוטין?", en: "Which composer kept composing masterpieces after becoming completely deaf?" },
              options: { he: ["מוצרט", "ויוואלדי", "בטהובן", "שופן"], en: ["Mozart", "Vivaldi", "Beethoven", "Chopin"] },
              answerIndex: 2,
              fact: {
                he: "בטהובן החל לאבד את שמיעתו בסוף שנות ה-20 לחייו, וכשהתקיימה בכורת הסימפוניה התשיעית שלו הוא היה כמעט חירש לגמרי — לפי הסיפור נאלצו להסב אותו כדי שיראה את הקהל מוחא כפיים, כי לא שמע זאת.",
                en: "Beethoven began losing his hearing in his late 20s and was nearly deaf by the premiere of his Ninth Symphony — he reportedly had to be turned around to see the audience applauding because he couldn't hear it."
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "מוצרט הוא הדוגמה המפורסמת בהיסטוריה לאיזה סוג של כישרון?", en: "Mozart is history's most famous example of what kind of talent?" },
              options: { he: ["מי שפרח מאוחר", "חובבן שלמד לבד", "מלחין צבאי", "ילד פלא"], en: ["Late bloomer", "Self-taught amateur", "Military composer", "Child prodigy"] },
              answerIndex: 3,
              fact: {
                he: "מוצרט כבר הלחין וניגן לפני מלכי אירופה בגיל 6, בסיבוב הופעות עם אביו ואחותו ברחבי היבשת.",
                en: "Mozart was composing and performing for European royalty by age 6, touring with his father and sister across the continent."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "איזו תקופה מוזיקלית קודמת כרונולוגית לאחרות?", en: "Which musical era comes chronologically first?" },
              options: {
                he: ["הרומנטיקה", "הבארוק", "התקופה הקלאסית", "המאה ה-20 / המודרנית"],
                en: ["Romantic", "Baroque", "Classical", "20th century / Modern"]
              },
              answerIndex: 1,
              fact: {
                he: "הסדר הכללי הוא בארוק ← קלאסי ← רומנטי ← מאה 20/מודרני — אם כי הגבולות בין התקופות מטושטשים ושנויים במחלוקת בקרב היסטוריונים.",
                en: "The general order is Baroque → Classical → Romantic → 20th century/Modern — though the boundaries between them are blurry and still debated by historians."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "בכורתה של איזו יצירה גרמה למהומה מפורסמת בקהל?", en: "The premiere of which work famously caused a riot in the audience?" },
              options: {
                he: ["המשיח מאת הנדל", "הסימפוניה החמישית של בטהובן", "המיסה בסי מינור של באך", "פולחן האביב של סטרווינסקי"],
                en: ["Handel's Messiah", "Beethoven's 5th Symphony", "Bach's Mass in B minor", "Stravinsky's The Rite of Spring"]
              },
              answerIndex: 3,
              fact: {
                he: "בבכורה הפריזאית ב-1913, הקצבים הצורמים והכוריאוגרפיה הבלתי שגרתית של הבלט גרמו, על פי עדויות, לקטטות ממש בקהל.",
                en: "At its 1913 Paris premiere, the ballet's jarring rhythms and unconventional choreography reportedly caused fistfights to break out in the audience."
              }
            }
          ]
        },
        {
          icon: "🎻",
          name: { he: "הכירו את התזמורת", en: "Meet the Orchestra" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "לאיזו משפחת כלים שייך הכינור?", en: "Which instrument family does the violin belong to?" },
              options: {
                he: ["כלי נשיפה מעץ", "כלי מיתר", "כלי נשיפה ממתכת", "כלי הקשה"],
                en: ["Woodwinds", "Strings", "Brass", "Percussion"]
              },
              answerIndex: 1,
              fact: {
                he: "מקטע המיתרים הוא הגדול ביותר בתזמורת, וכולל בדרך כלל כינורות, ויולות, צ'לו וקונטרבס.",
                en: "The string section is the largest in the orchestra, typically including violins, violas, cellos, and double basses."
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "איזה מהבאים הוא כלי נשיפה ממתכת?", en: "Which of these is a brass instrument?" },
              options: { he: ["חליל", "קלרינט", "חצוצרה", "טימפני"], en: ["Flute", "Clarinet", "Trumpet", "Timpani"] },
              answerIndex: 2,
              fact: {
                he: "כלי נשיפה ממתכת מפיקים צליל כשהנגן \"מזמזם\" בשפתיו לתוך פומית — הגובה משתנה עם מתח השפתיים ושילובי הבוכנות.",
                en: "Brass instruments produce sound when the player “buzzes” their lips into a mouthpiece — pitch changes with lip tension and valve combinations."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "מי נחשב ל\"מנהיג\" של מקטע המיתרים בתזמורת, בדרך כלל הכנר הראשון?", en: "Who is considered the “leader” of the orchestra's string section, usually the first-chair violinist?" },
              options: {
                he: ["המנצח", "הצ'לן הראשי", "הכנר הראשי (קונצרטמייסטר)", "המתופף"],
                en: ["The conductor", "The principal cellist", "The concertmaster", "The percussionist"]
              },
              answerIndex: 2,
              fact: {
                he: "הקונצרטמייסטר הוא בדרך כלל הכנר הראשון בתזמורת, האחרון שעולה לבמה לפני הופעה, והוא זה שנותן את הרמז לתחילת כיוונון האבוב.",
                en: "The concertmaster is typically the last musician to walk on stage before a performance, and cues the oboe's tuning note."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "איזה כלי נותן את גובה הכיוונון הסטנדרטי (לה) לפני קונצרט תזמורתי?", en: "Which instrument gives the standard tuning pitch (A) before an orchestral concert?" },
              options: { he: ["פסנתר", "כינור", "חצוצרה", "אבוב"], en: ["Piano", "Violin", "Trumpet", "Oboe"] },
              answerIndex: 3,
              fact: {
                he: "הצליל של האבוב יציב מאוד וחודר, מה שמקל על כל מקטעי התזמורת להתכוונן לפיו.",
                en: "The oboe's pitch is very stable and its penetrating tone cuts through the ensemble, making it easy for every section to match."
              }
            }
          ]
        }
      ]
    },
    {
      name: { he: "סיבוב 2 — מתקדמים", en: "Round 2 — Advanced" },
      categories: [
        {
          icon: "🎧",
          name: { he: "זהו את הלחן", en: "Name That Tune" },
          questions: [
            {
              points: 100, type: "audio", audio: "audio/sugar-plum-fairy.ogg",
              prompt: { he: "יצירת בלט נוצצת וקסומה — איזו יצירה זו?", en: "A glittering, magical-sounding ballet number — which piece is this?" },
              options: {
                he: ["פרוקופייב — ריקוד האבירים", "רימסקי-קורסקוב — טיסת הדבורה", "צ'ייקובסקי — ריקוד פיית הסוכר", "צ'ייקובסקי — ואלס הפרחים"],
                en: ["Prokofiev — Dance of the Knights", "Rimsky-Korsakov — Flight of the Bumblebee", "Tchaikovsky — Dance of the Sugar Plum Fairy", "Tchaikovsky — Waltz of the Flowers"]
              },
              answerIndex: 2,
              fact: {
                he: "הצליל הנוצץ והמסתורי מגיע מהצ'לסטה, כלי מקלדת שצ'ייקובסקי גילה בנסיעה לפריז ומיהר להשתמש בו לפני שמלחין רוסי אחר יקדים אותו.",
                en: "The eerie, glittering sound comes from the celesta, a keyboard instrument Tchaikovsky discovered on a trip to Paris and rushed to use before any other Russian composer could."
              }
            },
            {
              points: 200, type: "audio", audio: "audio/clair-de-lune.opus",
              prompt: { he: "יצירת פסנתר חלומית ומוארת ירח — איך קוראים לה?", en: "A dreamy, moonlit piano piece — what's it called?" },
              options: {
                he: ["שופן — נוקטורן אופוס 9 מס' 2", "סאטי — ג'ימנופדי מס' 1", "דביסי — אור הירח (Clair de Lune)", "ראוול — פאבאן לנסיכה מתה"],
                en: ["Chopin — Nocturne Op. 9 No. 2", "Satie — Gymnopédie No. 1", "Debussy — Clair de Lune", "Ravel — Pavane pour une infante défunte"]
              },
              answerIndex: 2,
              fact: {
                he: "\"Clair de Lune\" פירושו \"אור ירח\" בצרפתית — זהו הפרק השלישי בסוויטת \"Suite bergamasque\" של דביסי, בהשראת שיר של פול ורלן.",
                en: "“Clair de Lune” means “moonlight” in French — it's the third movement of Debussy's Suite bergamasque, inspired by a Paul Verlaine poem."
              }
            },
            {
              points: 300, type: "audio", audio: "audio/beethoven-symphony5.ogg",
              prompt: { he: "ארבעה תווים פותחים מפורסמים — איזו סימפוניה זו?", en: "Four famous opening notes — what symphony is this?" },
              options: {
                he: ["מוצרט — סימפוניה מס' 40", "ברהמס — סימפוניה מס' 1", "בטהובן — סימפוניה מס' 5", "בטהובן — סימפוניה מס' 9"],
                en: ["Mozart — Symphony No. 40", "Brahms — Symphony No. 1", "Beethoven — Symphony No. 5", "Beethoven — Symphony No. 9"]
              },
              answerIndex: 2,
              fact: {
                he: "המוטיב הפותח המפורסם מתואר לעיתים כ\"הגורל דופק בדלת\" — אם כי לא ברור אם בטהובן עצמו אמר זאת.",
                en: "The famous opening motif is often described as “fate knocking at the door” — though it's unclear whether Beethoven himself ever actually said that."
              }
            },
            {
              points: 400, type: "audio", audio: "audio/mountain-king.ogg",
              prompt: { he: "היצירה מתחילה בלחישה ומתפתחת לשיא סוער. מהי?", en: "This piece creeps quietly and then builds into a thundering climax. What is it?" },
              options: {
                he: ["מוסורגסקי — ליל כל הקדושים על ההר הקרח", "דוקאס — שוליית הקוסם", "סן-סנס — מחול המוות", "גריג — בהיכל מלך ההר"],
                en: ["Mussorgsky — Night on Bald Mountain", "Dukas — The Sorcerer's Apprentice", "Saint-Saëns — Danse Macabre", "Grieg — In the Hall of the Mountain King"]
              },
              answerIndex: 3,
              fact: {
                he: "היצירה נכתבה עבור המחזה \"פר גינט\" של איבסן, ומתארת במוזיקה טרולים הרודפים אחרי הגיבור — מלחישה שקטה ועד תזזית סוערת.",
                en: "Written for Ibsen's play Peer Gynt, this piece musically depicts trolls chasing the hero, building from a whisper to a frenzy."
              }
            }
          ]
        },
        {
          icon: "🎼",
          name: { he: "תורת המוסיקה ומונחים", en: "Music Theory & Terms" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "\"סונטה\" בדרך כלל מתייחסת ל:", en: "A “sonata” typically refers to:" },
              options: {
                he: ["אריה מאופרה", "ריקוד עממי", "יצירה רב-פרקית לכלי אחד או שניים", "יצירה לתזמורת מלאה בלבד"],
                en: ["An opera aria", "A folk dance", "A multi-movement piece for one or two instruments", "A piece for full orchestra only"]
              },
              answerIndex: 2,
              fact: {
                he: "המונח \"צורת סונטה\" מתאר גם מבנה מוזיקלי מסוים (הצגה–פיתוח–רקפיטולציה) שמופיע בתוך פרקים ביצירות גדולות יותר, כולל סימפוניות.",
                en: "“Sonata form” also names a specific structural pattern (exposition–development–recapitulation) used within movements of many larger works, including symphonies."
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "מה משמעות \"קרשנדו\" (crescendo)?", en: "What does “crescendo” mean?" },
              options: {
                he: ["הולך ונחלש בהדרגה", "נעצר לפתע", "הולך ומתחזק בהדרגה", "מנוגן מהר מאוד"],
                en: ["Gradually getting softer", "Suddenly stopping", "Gradually getting louder", "Playing very fast"]
              },
              answerIndex: 2,
              fact: {
                he: "ההפך ממנו, \"דקרשנדו\" (או \"דימינואנדו\"), פירושו הולך ונחלש בהדרגה — שניהם מסומנים בתווים בסימני \"מזלג\".",
                en: "Its opposite, “decrescendo” (or “diminuendo”), means gradually getting softer — both are shown in sheet music with “hairpin” symbols."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "בכתיב מוזיקלי, מה מציין \"סימן שתיקה\" (rest)?", en: "In music notation, what does a “rest” indicate?" },
              options: {
                he: ["צליל חלש מאוד", "צליל מוחזק", "שינוי סולם", "פרק זמן של שתיקה"],
                en: ["A very soft note", "A held note", "A change of key", "A period of silence"]
              },
              answerIndex: 3,
              fact: {
                he: "לסימני שתיקה יש משכי זמן משלהם בדיוק כמו לתווים — שלמה, חצי, רבע וכו' — והם חשובים לקצב לא פחות מהתווים עצמם.",
                en: "Rests have their own durations just like notes do — whole, half, quarter, and so on — and are just as important to rhythm as the notes themselves."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "מהי \"פוגה\" (fugue)?", en: "What is a “fugue”?" },
              options: {
                he: ["מנגינה אחת המנוגנת בכלי אחד", "שיר אהבה רומנטי איטי", "יצירה קונטרפונקטית שבה נושא מוצג ומחוקה בין כמה קולות", "סוג של תרשים ישיבה בתזמורת"],
                en: ["A single melody played by one instrument", "A slow romantic love song", "A contrapuntal piece where a theme is introduced and imitated across multiple voices", "A type of orchestral seating chart"]
              },
              answerIndex: 2,
              fact: {
                he: "באך היה אמן אגדי של הפוגה — יצירתו \"אמנות הפוגה\" דוחפת את הצורה עד לגבולות הטכניים המוחלטים שלה.",
                en: "Bach was a legendary master of the fugue — his “The Art of Fugue” pushes the form to its absolute technical limits."
              }
            }
          ]
        },
        {
          icon: "📜",
          name: { he: "מלחינים והיסטוריה", en: "Composers & History" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "איזה מלחין בארוקי, שהיה גם כומר קתולי שכונה \"הכומר האדום\", כתב את \"ארבע העונות\"?", en: "Which Baroque composer, also a Catholic priest nicknamed “The Red Priest,” wrote The Four Seasons?" },
              options: {
                he: ["יוהן סבסטיאן באך", "אנטוניו ויוואלדי", "גאורג פיליפ טלמן", "הנרי פרסל"],
                en: ["Johann Sebastian Bach", "Antonio Vivaldi", "Georg Philipp Telemann", "Henry Purcell"]
              },
              answerIndex: 1,
              fact: {
                he: "ויוואלדי הוסמך לכמורה, אך זכור כמעט אך ורק בזכות המוזיקה שלו — הוא כתב למעלה מ-500 קונצ'רטי.",
                en: "Vivaldi was ordained as a priest but is remembered almost entirely for his music — he wrote over 500 concertos."
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "איזו מלחינה ופסנתרנית וירטואוזית נודעת מהמאה ה-19 הייתה אשתו של רוברט שומאן?", en: "Which acclaimed 19th-century composer and virtuoso pianist was Robert Schumann's wife?" },
              options: {
                he: ["פאני מנדלסון", "איימי ביץ'", "קלרה שומאן", "סיסיל שמינד"],
                en: ["Fanny Mendelssohn", "Amy Beach", "Clara Schumann", "Cécile Chaminade"]
              },
              answerIndex: 2,
              fact: {
                he: "קלרה שומאן המשיכה להופיע ולהלחין עשרות שנים אחרי מות בעלה, וקידמה את המוזיקה שלו (ושל ברהמס) ברחבי אירופה.",
                en: "Clara Schumann kept performing and composing for decades after her husband's death, championing his (and Brahms's) music across Europe."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "איזה מלחין כתב את הבלט \"פולחן האביב\", שגרם למהומה מפורסמת בבכורתו?", en: "Which composer wrote the riot-inducing ballet The Rite of Spring?" },
              options: {
                he: ["סרגיי פרוקופייב", "דמיטרי שוסטקוביץ'", "איגור סטרווינסקי", "אהרן קופלנד"],
                en: ["Sergei Prokofiev", "Dmitri Shostakovich", "Igor Stravinsky", "Aaron Copland"]
              },
              answerIndex: 2,
              fact: {
                he: "הסגנון של סטרווינסקי השתנה באופן דרמטי לאורך הקריירה הארוכה שלו — מרומנטיקה רוסית עשירה, דרך מודרניזם חד, ועד ניאו-קלאסיציזם.",
                en: "Stravinsky's style shifted dramatically across his long career — from lush Russian Romanticism to spiky modernism to neoclassicism."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "איזה מלחין נפטר לפני שסיים את הרקוויאם (מיסת האשכבה) שלו, והשאיר את השלמתה לתלמיד?", en: "Which composer died before finishing his own Requiem (funeral mass), leaving it to be completed by a student?" },
              options: {
                he: ["לודוויג ואן בטהובן", "וולפגנג אמדאוס מוצרט", "פרנץ שוברט", "יוהנס ברהמס"],
                en: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Franz Schubert", "Johannes Brahms"]
              },
              answerIndex: 1,
              fact: {
                he: "הרקוויאם של מוצרט הושלם על ידי תלמידו פרנץ קסבר זיסמאיר לאחר מותו של מוצרט ב-1791 — הנסיבות המסתוריות הזינו אגדות, כולל האגדה השקרית שמלחין יריב הרעיל אותו.",
                en: "Mozart's Requiem was completed by his student Franz Xaver Süssmayr after Mozart died in 1791 — the mysterious circumstances fueled myths, including the false legend that a rival poisoned him."
              }
            }
          ]
        },
        {
          icon: "🎻",
          name: { he: "הכירו את התזמורת", en: "Meet the Orchestra" },
          questions: [
            {
              points: 100, type: "text",
              prompt: { he: "איזה מהבאים הוא כלי נשיפה מעץ, למרות שהוא לרוב עשוי ממתכת כיום?", en: "Which of these is a woodwind instrument, even though it's usually made of metal today?" },
              options: { he: ["חצוצרה", "חליל", "כינור", "טימפני"], en: ["Trumpet", "Flute", "Violin", "Timpani"] },
              answerIndex: 1,
              fact: {
                he: "כלי נשיפה מעץ מסווגים לפי אופן הפקת הצליל — נשיפת אוויר דרך שפה או פתח — לא לפי החומר שממנו הם עשויים; חלילים מודרניים עשויים בדרך כלל ממתכת.",
                en: "Woodwinds are classified by how they produce sound — blowing air across or through a reed or edge — not by what material they're made of."
              }
            },
            {
              points: 200, type: "text",
              prompt: { he: "מהו הכלי הגדול והנמוך ביותר במשפחת המיתרים בתזמורת?", en: "What is the largest and lowest-pitched member of the string family in an orchestra?" },
              options: { he: ["צ'לו", "ויולה", "קונטרבס", "נבל"], en: ["Cello", "Viola", "Double bass", "Harp"] },
              answerIndex: 2,
              fact: {
                he: "נגני קונטרבס מנגנים לרוב בעמידה או על שרפרף גבוה, כי הכלי גבוה כמעט כמו אדם.",
                en: "Double bass players often stand or sit on a tall stool to play, because the instrument is roughly as tall as a person."
              }
            },
            {
              points: 300, type: "text",
              prompt: { he: "מהו התפקיד העיקרי של המנצח?", en: "What is the main role of the conductor?" },
              options: {
                he: ["לנגן את המנגינה בכלי מוביל", "לכוונן כל כלי בנפרד לפני ההופעה", "להוביל את הטמפו, העוצמות והפרשנות עבור התזמורת", "לכתוב את דברי ההסבר בתוכניה"],
                en: ["To play the melody on a lead instrument", "To tune every instrument individually before the show", "To lead tempo, dynamics, and interpretation for the ensemble", "To write the program notes"]
              },
              answerIndex: 2,
              fact: {
                he: "מנצחים אינם מפיקים כל צליל בעצמם — כל תפקידם הוא להעביר לנגנים תזמון וביטוי באמצעות תנועות ידיים וגוף.",
                en: "Conductors don't produce any sound themselves — their entire job is communicating timing and expression to the musicians through gesture."
              }
            },
            {
              points: 400, type: "text",
              prompt: { he: "איזה כלי הקשה מכוון, המורכב מקערות נחושת גדולות, ניתן לכוונן במהלך ההופעה בעזרת דוושת רגל?", en: "Which tuned percussion instrument consists of large copper kettles and can be adjusted mid-performance with a foot pedal?" },
              options: { he: ["קסילופון", "תוף צד", "משולש", "טימפני"], en: ["Xylophone", "Snare drum", "Triangle", "Timpani"] },
              answerIndex: 3,
              fact: {
                he: "בניגוד לרוב התופים, הטימפני מכוונים לגבהים מסוימים — נגן מיומן יכול לכוון אותם מחדש בשקט, תוך כדי ניגון, בעזרת הדוושה.",
                en: "Unlike most drums, timpani are tuned to specific pitches — a skilled player can retune them silently, mid-piece, using the pedal."
              }
            }
          ]
        }
      ]
    }
      ]
    },

    pop: {
      name: { he: "פופ", en: "Pop" },
      icon: "🎤",
      rounds: [
        { name: { he: "פופ", en: "Pop" }, categories: POP_CATEGORIES }
      ]
    },

    rock: {
      name: { he: "רוק", en: "Rock" },
      icon: "🎸",
      rounds: [
        { name: { he: "רוק", en: "Rock" }, categories: ROCK_CATEGORIES }
      ]
    },

    israeli: {
      name: { he: "מוזיקה ישראלית", en: "Israeli Music" },
      icon: "🇮🇱",
      rounds: [
        { name: { he: "מוזיקה ישראלית", en: "Israeli Music" }, categories: ISRAELI_CATEGORIES }
      ]
    }
  },

  musicianRoundName: { he: "מי המוזיקאי? — סיבוב תמונות", en: "Who's That Musician? — Photo Round" },
  musicianPhotos: MUSICIAN_PHOTOS,

  finalEncore: {
    prompt: {
      he: "מלחין זה כתב 9 סימפוניות, היה ידוע באובססיה שלו לספור בדיוק 60 פולי קפה לקפה של הבוקר שלו, ודחף את הסימפוניה האחרונה שלו אל קצוות הסגנון הקלאסי. מי היה זה?",
      en: "This composer wrote 9 symphonies, was famously obsessive about counting exactly 60 coffee beans for his morning coffee, and pushed his final symphony to the edges of the Classical style. Who was he?"
    },
    options: {
      he: ["יוהנס ברהמס", "פרנץ יוזף היידן", "לודוויג ואן בטהובן", "גוסטב מאהלר"],
      en: ["Johannes Brahms", "Franz Joseph Haydn", "Ludwig van Beethoven", "Gustav Mahler"]
    },
    answerIndex: 2,
    fact: {
      he: "טקס הקפה הקפדני של בטהובן הוא רק אחת מהתכונות המוזרות המתועדות על ידי בני זמנו — הוא גם נהג לשפוך מים קרים על ראשו, מתוך אמונה שזה מחדד את היצירתיות שלו, למורת רוחם של בעלי הדירה שלו.",
      en: "Beethoven's fastidious coffee ritual is one of many quirks documented by his contemporaries — he was also known to pour cold water over his head, convinced it sharpened his creativity, much to his landlords' dismay."
    }
  }
};

window.STRINGS = {
  he: {
    setupEyebrow: "משחק קבוצתי בהנחיית מנחה",
    setupTitle: "חידון המוזיקה",
    setupTagline: "הקשיבו, למדו והתחרו — ערב משחק בסגנון חידון ידע על מוזיקה קלאסית, פופ, רוק ומוזיקה ישראלית.",
    teamsHeading: "קבוצות",
    addTeam: "+ הוספת קבוצה",
    startGame: "התחילו משחק",
    setupHint: "2–6 קבוצות. ניתן לשנות שמות קבוצות בכל עת לפני ההתחלה.",
    resumeBannerText: "נמצא משחק פעיל במחשב זה.",
    resumeGame: "המשך משחק",
    chooseGenres: "בחרו סגנונות מוזיקה",
    whoIsThisMusician: "מי המוזיקאי הזה?",
    removeTeamTitle: "הסרת קבוצה",
    teamWord: "קבוצה",
    finishRound: "סיימו סיבוב",
    finishRoundFinal: "סיימו סיבוב — לאנקור האחרון",
    startTimer: "התחילו טיימר 30 שניות",
    pauseTimer: "השהו טיימר",
    resumeTimer: "המשיכו טיימר",
    timeUp: "הזמן נגמר!",
    revealAnswer: "חשפו תשובה",
    didYouKnow: "האם ידעתם?",
    awardTitle: "הענקת הנקודות ל:",
    backToBoard: "חזרה ללוח",
    finalEncoreEyebrow: "אנקור אחרון",
    wagerRoundTitle: "סיבוב ההימור",
    wagerTagline: "כל קבוצה כותבת בסתר הימור (0 עד לניקוד הנוכחי שלה). הזינו את ההימור של כל קבוצה, ואז נעלו אותו.",
    scoreLabel: "ניקוד:",
    lockWagers: "נעלו הימורים וחשפו שאלה",
    wageredLabel: "הימרו:",
    markWagers: "סמנו את תוצאת ההימור של כל קבוצה:",
    correct: "נכון",
    incorrect: "לא נכון",
    showResults: "הציגו תוצאות סופיות",
    bravo: "כל הכבוד!",
    finalResults: "תוצאות סופיות",
    newGame: "משחק חדש",
    ptsSuffix: " נק׳",
    optionLetters: ["א", "ב", "ג", "ד"],
    langToggleLabel: "EN"
  },
  en: {
    setupEyebrow: "A group game hosted by you",
    setupTitle: "Music Quiz",
    setupTagline: "Listen, learn, and compete — a Jeopardy-style game night about Classical, Pop, Rock, and Israeli music.",
    teamsHeading: "Teams",
    addTeam: "+ Add team",
    startGame: "Start Game",
    setupHint: "2–6 teams. You can rename teams anytime before starting.",
    resumeBannerText: "A game in progress was found on this computer.",
    resumeGame: "Resume Game",
    chooseGenres: "Choose your music styles",
    whoIsThisMusician: "Who is this musician?",
    removeTeamTitle: "Remove team",
    teamWord: "Team",
    finishRound: "Finish Round →",
    finishRoundFinal: "Finish Round → Final Encore",
    startTimer: "Start 30s Timer",
    pauseTimer: "Pause Timer",
    resumeTimer: "Resume Timer",
    timeUp: "Time's up!",
    revealAnswer: "Reveal Answer",
    didYouKnow: "Did you know?",
    awardTitle: "Award these points to:",
    backToBoard: "Back to Board",
    finalEncoreEyebrow: "Final Encore",
    wagerRoundTitle: "Wager Round",
    wagerTagline: "Each team secretly writes down a wager (0 up to their current score). Enter each team's wager below, then lock it in.",
    scoreLabel: "score:",
    lockWagers: "Lock In Wagers & Reveal Question",
    wageredLabel: "wagered",
    markWagers: "Mark each team's wager:",
    correct: "Correct",
    incorrect: "Incorrect",
    showResults: "Show Final Results",
    bravo: "Bravo!",
    finalResults: "Final Results",
    newGame: "New Game",
    ptsSuffix: " pts",
    optionLetters: ["A", "B", "C", "D"],
    langToggleLabel: "עב"
  }
};

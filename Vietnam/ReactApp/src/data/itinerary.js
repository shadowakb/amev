// Main itinerary data extracted and restructured from Vietnam/idk
export const itineraryData = [
  {
    day: 1,
    date: 'Aug 7 (Thu)',
    location: 'Una to New Delhi / In Flight',
    accommodation: 'In-flight',
    morning: [
      { 
        text: 'Journey to Delhi: Our adventure begins! 🚂', 
        description: 'Time to pack our bags and head to Una Railway Station - Vietnam, here we come!',
        text_hi: 'दिल्ली की यात्रा: हमारा रोमांच शुरू! 🚂',
        description_hi: 'अपने बैग पैक करने और ऊना रेलवे स्टेशन जाने का समय - वियतनाम, हम आ रहे हैं!'
      },
      { 
        text: 'Depart Una by train at 13:23 - All aboard! 🎵', 
        description: 'Train journey time! Let\'s grab some snacks, find good seats, and enjoy this 5-hour ride to Delhi.',
        text_hi: 'ऊना से ट्रेन द्वारा 13:23 बजे प्रस्थान - सब सवार! 🎵',
        description_hi: 'ट्रेन यात्रा का समय! कुछ नाश्ता लेते हैं, अच्छी सीटें ढूंढते हैं, और दिल्ली के इस 5 घंटे के सफर का आनंद लेते हैं।'
      }
    ],
    afternoon: [
      { 
        text: 'Delhi arrival at 18:25 - We made it! 🙌', 
        description: 'Wonderful! We\'ve reached New Delhi Railway Station. Time to collect our luggage and head to the airport.',
        text_hi: 'दिल्ली आगमन 18:25 बजे - हमने कर लिया! 🙌',
        description_hi: 'बहुत बढ़िया! हम न्यू दिल्ली रेलवे स्टेशन पहुंच गए हैं। अब अपना सामान लेकर एयरपोर्ट जाने का समय है।'
      },
      { 
        text: 'Airport transfer by cab/Metro - Going international! ✈️', 
        description: 'Let\'s decide between Metro or cab for our comfortable journey to DEL airport.',
        text_hi: 'कैब/मेट्रो से एयरपोर्ट ट्रांसफर - अंतर्राष्ट्रीय जा रहे हैं! ✈️',
        description_hi: 'DEL एयरपोर्ट की अपनी आरामदायक यात्रा के लिए मेट्रो या कैब के बीच चुनते हैं।'
      }
    ],
    evening: [
      { 
        text: 'Flight check-in time - Passports ready! 📔', 
        description: 'Here we go! Check-in, security, and then we\'re Vietnam-bound. How exciting!',
        text_hi: 'फ्लाइट चेक-इन का समय - पासपोर्ट तैयार! 📔',
        description_hi: 'चलिए! चेक-इन, सिक्यूरिटी, और फिर हम वियतनाम के लिए रवाना। कितना रोमांचक!'
      },
      { 
        text: 'DEL departure at 00:05 - Farewell India! 🇮🇳➡️🇻🇳', 
        description: 'Our midnight flight begins this wonderful adventure. See you soon, Vietnam!',
        text_hi: 'DEL से 00:05 बजे प्रस्थान - अलविदा भारत! 🇮🇳➡️🇻🇳',
        description_hi: 'हमारी मध्यरात्रि की उड़ान इस सुंदर रोमांच की शुरुआत करती है। जल्दी मिलते हैं, वियतनाम!'
      }
    ],
    notes: 'Train: Una to New Delhi (13:23-18:25)\nFlight: DEL-HAN (VN 00:05)',
    keyLocations: [
      { 
        name: 'New Delhi Railway Station', 
        query: 'New Delhi Railway Station, India', 
        type: 'travelHub', 
        description: 'One of the busiest railway stations in India, serving as a major transportation hub.',
        description_hi: 'भारत के सबसे व्यस्त रेलवे स्टेशनों में से एक, जो एक प्रमुख परिवहन केंद्र के रूप में कार्य करता है।'
      },
      { 
        name: 'Indira Gandhi International Airport (DEL)', 
        query: 'Indira Gandhi International Airport, New Delhi, India', 
        type: 'airport', 
        description: 'India\'s largest airport, serving as the primary international gateway to the country.',
        description_hi: 'भारत का सबसे बड़ा हवाई अड्डा, जो देश के लिए प्राथमिक अंतर्राष्ट्रीय प्रवेश द्वार के रूप में कार्य करता है।'
      }
    ]
  },
  {
    day: 2,
    date: 'Aug 8 (Fri)',
    location: 'Hanoi',
    accommodation: 'Oriental Suites Hotel & Spa',
    morning: [
      { 
        text: 'Hanoi Arrival: We\'ll arrive at HAN (05:40).', 
        description: 'Welcome to Hanoi! After our overnight flight, we\'ll arrive early morning.',
        text_hi: 'हनोई आगमन: हम HAN (05:40) पर पहुंचेंगे।',
        description_hi: 'हनोई में आपका स्वागत है! हमारी रात भर की उड़ान के बाद, हम सुबह जल्दी पहुंचेंगे।'
      },
      { 
        text: 'Transfer to Oriental Suites Hotel & Spa (Old Quarter).', 
        description: 'Let\'s head directly to our charming hotel in the bustling Old Quarter.',
        text_hi: 'ओरिएंटल सूट्स होटल एंड स्पा (ओल्ड क्वार्टर) में स्थानांतरण करें।',
        description_hi: 'आइए, हम सीधे हलचल भरे ओल्ड क्वार्टर में अपने आकर्षक होटल की ओर चलें।'
      },
      { 
        text: 'Drop luggage; early check-in (if available).', 
        description: 'Even if our room isn\'t ready, we can drop our bags and start exploring.',
        text_hi: 'सामान छोड़ें; जल्दी चेक-इन (यदि उपलब्ध हो)।',
        description_hi: 'भले ही हमारा कमरा तैयार न हो, हम अपना सामान छोड़ सकते हैं और घूमना शुरू कर सकते हैं।'
      },
      { 
        text: 'Refresh & enjoy breakfast.', 
        description: 'Let\'s freshen up and energize with a delicious Vietnamese breakfast at our hotel or a nearby cafe.',
        text_hi: 'ताज़ा हों और नाश्ते का आनंद लें।',
        description_hi: 'आइए, हम अपने होटल या पास के कैफे में स्वादिष्ट वियतनामी नाश्ते के साथ ताज़ा हों और ऊर्जा प्राप्त करें।'
      }
    ],
    afternoon: [
      { 
        text: 'Old Quarter Immersion: Let\'s start immersing ourselves in Hanoi\'s bustling Old Quarter on foot. We can wander through its narrow streets, each traditionally specializing in different trades.', 
        description: 'We\'ll explore the 36 Streets of the Old Quarter, famous for their unique goods and vibrant atmosphere.',
        text_hi: 'ओल्ड क्वार्टर में विसर्जन: आइए, हम हनोई के हलचल भरे ओल्ड क्वार्टर में पैदल ही खुद को डुबोना शुरू करें। हम इसकी संकरी गलियों में घूम सकते हैं, प्रत्येक पारंपरिक रूप से विभिन्न व्यवसायों में विशेषज्ञता रखती है।',
        description_hi: 'हम ओल्ड क्वार्टर की 36 गलियों का अन्वेषण करेंगे, जो अपने अद्वितीय सामानों और जीवंत वातावरण के लिए प्रसिद्ध हैं।'
      }
    ],
    evening: [
      { 
        text: 'Cultural Evening: We\'ll attend a traditional Water Puppet Show at the Thang Long Theatre, a unique Vietnamese art form.', 
        description: 'We\'ll be captivated by the ancient art of water puppetry, telling folk tales and legends.',
        text_hi: 'सांस्कृतिक शाम: हम थांग लॉन्ग थिएटर में एक पारंपरिक जल कठपुतली शो में भाग लेंगे, जो एक अद्वितीय वियतनामी कला रूप है।',
        description_hi: 'हम जल कठपुतली की प्राचीन कला से मोहित हो जाएंगे, जो लोक कथाओं और किंवदंतियों को बताती है।'
      }
    ],
    notes: 'Hotel: Oriental Suites Hotel & Spa\nFlight: HAN Arrival 05:40\nWater Puppet Show: [Add Booking Link/Time Here]',
    keyLocations: [
      { 
        name: 'Noi Bai International Airport (HAN)', 
        query: 'Noi Bai International Airport, Hanoi, Vietnam', 
        type: 'airport', 
        description: 'Hanoi\'s main international airport, located about 45 minutes from the city center.',
        description_hi: 'हनोई का मुख्य अंतर्राष्ट्रीय हवाई अड्डा, शहर के केंद्र से लगभग 45 मिनट की दूरी पर स्थित है।'
      },
      { 
        name: 'Oriental Suites Hotel & Spa, Hanoi', 
        query: 'Oriental Suites Hotel & Spa, Hanoi, Vietnam', 
        type: 'hotel', 
        description: 'Our comfortable hotel located in the heart of Hanoi\'s Old Quarter, offering easy access to attractions.',
        description_hi: 'हनोई के ओल्ड क्वार्टर के केंद्र में स्थित हमारा आरामदायक होटल, आकर्षणों तक आसान पहुँच प्रदान करता है।'
      },
      { 
        name: 'Hanoi Old Quarter', 
        query: 'Hanoi Old Quarter, Hanoi, Vietnam', 
        type: 'landmark', 
        description: 'The historic commercial center of Hanoi with narrow streets, traditional architecture, and vibrant street life.',
        description_hi: 'हनोई का ऐतिहासिक व्यावसायिक केंद्र जिसमें संकरी गलियां, पारंपरिक वास्तुकला और जीवंत सड़क जीवन है।'
      },
      { 
        name: 'Thang Long Water Puppet Theatre, Hanoi', 
        query: 'Thang Long Water Puppet Theatre, Hanoi, Vietnam', 
        type: 'landmark', 
        description: 'A fascinating cultural experience - traditional Vietnamese water puppets perform on water! Truly unique and beautiful 🎭',
        description_hi: 'एक मनमोहक सांस्कृतिक अनुभव - traditional Vietnamese water puppets पानी पर प्रदर्शन करती हैं! वास्तव में अनोखा और सुंदर 🎭'
      }
    ]
  },
  {
    day: 3,
    date: 'Aug 9 (Sat)',
    location: 'Hanoi / Ha Long Bay',
    accommodation: 'Oriental Suites Hotel & Spa',
    morning: [
      {
        text: 'Cruise Departure: We\'ll be picked up from our hotel by Limousine Bus for our Cozy Bay Day Cruise.',
        description: 'Let\'s start our day early for the scenic journey to the UNESCO World Heritage Site.',
        text_hi: 'क्रूज प्रस्थान: हमारे कोज़ी बे डे क्रूज के लिए लिमोसिन बस द्वारा होटल से पिकअप करें।',
        description_hi: 'आइए, यूनेस्को विश्व धरोहर स्थल की सुंदर यात्रा के लिए अपने दिन की शुरुआत जल्दी करें।'
      }
    ],
    afternoon: [
      {
        text: 'Bay Exploration: We\'ll enjoy a delicious Buffet Lunch served on board as we cruise through the stunning limestone karsts.',
        description: 'Let\'s savor a meal with breathtaking views of the emerald waters and towering islands.',
        text_hi: 'खाड़ी अन्वेषण: जब हम शानदार चूना पत्थर के कार्स्टों से गुजरते हैं, तो बोर्ड पर परोसे गए स्वादिष्ट बुफे दोपहर के भोजन का आनंद लें।',
        description_hi: 'आइए, पन्ना जैसे पानी और विशाल द्वीपों के लुभावने दृश्यों के साथ भोजन का स्वाद लें।'
      }
    ],
    evening: [
      {
        text: 'Return to Hanoi: At 18:00, we\'ll depart by bus from Ha Long Bay.',
        description: 'Let\'s begin our journey back to the capital after a day of natural wonders.',
        text_hi: 'हनोई लौटें: 18:00 बजे, हा लॉन्ग खाड़ी से बस द्वारा प्रस्थान करें।',
        description_hi: 'आइए, प्राकृतिक चमत्कारों के एक दिन के बाद राजधानी वापस अपनी यात्रा शुरू करें।'
      }
    ],
    notes: 'Tour: Cozy Bay Day Cruise (Ha Long Bay)\nPick-up: 07:50 AM',
    keyLocations: [
      {
        name: 'Sung Sot Cave, Ha Long Bay',
        query: 'Sung Sot Cave, Ha Long Bay, Vietnam',
        type: 'landmark',
        description: 'One of the most famous and largest caves in Ha Long Bay, known for its impressive stalactites and stalagmites.',
        description_hi: 'हा लॉन्ग खाड़ी की सबसे प्रसिद्ध और सबसे बड़ी गुफाओं में से एक, जो अपनी प्रभावशाली स्टैलेक्टाइट्स और स्टैलेग्माइट्स के लिए जानी जाती है।'
      },
      {
        name: 'Ti Top Island, Ha Long Bay',
        query: 'Ti Top Island, Ha Long Bay, Vietnam',
        type: 'landmark',
        description: 'A popular island in Ha Long Bay with a beautiful beach and a viewpoint offering panoramic bay vistas.',
        description_hi: 'हा लॉन्ग खाड़ी में एक लोकप्रिय द्वीप, जिसमें एक सुंदर समुद्र तट और मनोरम खाड़ी दृश्यों की पेशकश करने वाला एक दृष्टिकोण है।'
      }
    ]
  },
  {
    day: 4,
    date: 'Aug 10 (Sun)',
    location: 'Hanoi / Ninh Binh',
    accommodation: 'Oriental Suites Hotel & Spa',
    morning: [
      {
        text: 'Ninh Binh Adventure: We\'ll be picked up from our hotel for our Hoa Lu - Trang An - Mua Cave tour.',
        description: 'Let\'s embark on a day trip to the stunning landscapes of Ninh Binh, often called "Ha Long Bay on land."',
        text_hi: 'निन्ह बिन्ह एडवेंचर: हमारे होआ लू - ट्रांग एन - मुआ गुफा दौरे के लिए होटल से पिकअप करें।',
        description_hi: 'आइए, निन्ह बिन्ह के शानदार परिदृश्यों की दिन यात्रा पर निकलें, जिसे अक्सर "जमीन पर हा लॉन्ग खाड़ी" कहा जाता है।'
      }
    ],
    afternoon: [
      {
        text: 'Tràng An boat ride: We\'ll embark on a captivating boat ride through caves and serene waterways.',
        description: 'Let\'s glide through the tranquil rivers amidst limestone karsts and rice paddies.',
        text_hi: 'ट्रांग एन नाव की सवारी: गुफाओं और शांत जलमार्गों से होते हुए एक मनोरम नाव की सवारी पर निकलें।',
        description_hi: 'आइए, चूना पत्थर के कार्स्टों और धान के खेतों के बीच शांत नदियों से होकर गुजरें।'
      }
    ],
    evening: [
      {
        text: 'Return to Hanoi: We\'ll drive back to Hanoi after a day of exploring Vietnam\'s natural beauty.',
        description: 'Let\'s conclude our day trip with a comfortable ride back to the capital.',
        text_hi: 'हनोई लौटें: वियतनाम की प्राकृतिक सुंदरता की खोज के एक दिन के बाद हनोई वापस ड्राइव करें।',
        description_hi: 'आइए, राजधानी वापस एक आरामदायक सवारी के साथ अपनी दिन यात्रा समाप्त करें।'
      }
    ],
    notes: 'Tour: Hoa Lu-Trang An-Mua Cave Tour\nPick-up: Approx. 07:30-08:00 AM',
    keyLocations: [
      {
        name: 'Oriental Suites Hotel & Spa, Hanoi',
        query: 'Oriental Suites Hotel & Spa, Hanoi, Vietnam',
        type: 'hotel',
        description: 'Our comfortable hotel located in the heart of Hanoi\'s Old Quarter, offering easy access to attractions.',
        description_hi: 'हनोई के ओल्ड क्वार्टर के केंद्र में स्थित हमारा आरामदायक होटल, आकर्षणों तक आसान पहुँच प्रदान करता है।'
      },
      {
        name: 'Hoa Lu Ancient Capital, Ninh Binh',
        query: 'Hoa Lu Ancient Capital, Ninh Binh, Vietnam',
        type: 'landmark',
        description: 'The historic capital of Vietnam in the 10th and 11th centuries, featuring ancient temples.',
        description_hi: '10वीं और 11वीं शताब्दी में वियतनाम की ऐतिहासिक राजधानी, जिसमें प्राचीन मंदिर हैं।'
      },
      {
        name: 'Trang An Scenic Landscape, Ninh Binh',
        query: 'Trang An Scenic Landscape, Ninh Binh, Vietnam',
        type: 'landmark',
        description: 'A UNESCO World Heritage site known for its spectacular boat tours through caves and karst landscapes.',
        description_hi: 'एक यूनेस्को विश्व धरोहर स्थल जो गुफाओं और karst landscapes के माध्यम से शानदार नाव यात्राओं के लिए जाना जाता है।'
      },
      {
        name: 'Mua Cave, Ninh Binh',
        query: 'Mua Cave, Ninh Binh, Vietnam',
        type: 'landmark',
        description: 'Famous for its challenging climb to the peak offering breathtaking panoramic views of Ninh Binh.',
        description_hi: 'अपनी चुनौतीपूर्ण चढ़ाई के लिए प्रसिद्ध जो Ninh Binh के लुभावने panoramic views प्रदान करती है।'
      }
    ]
  },
  {
    day: 5,
    date: 'Aug 11 (Mon)',
    location: 'Hoi An',
    accommodation: 'Royal Riverside Hoi An Hotel & Spa',
    morning: [
      {
        text: 'Flight to Da Nang: Let\'s check out from Oriental Suites Hotel & Spa and fly to Central Vietnam.',
        description: 'We\'ll get ready for our domestic flight to Central Vietnam.',
        text_hi: 'दा नांग के लिए उड़ान: ओरिएंटल सूट्स होटल एंड स्पा से चेक आउट करें और मध्य वियतनाम के लिए उड़ान भरें।',
        description_hi: 'हम मध्य वियतनाम के लिए अपनी घरेलू उड़ान की तैयारी करेंगे।'
      }
    ],
    afternoon: [
      {
        text: 'Hoi An Ancient Town: Let\'s begin exploring the enchanting Hoi An Ancient Town on foot.',
        description: 'We\'ll wander through the UNESCO World Heritage site, admiring its unique architecture.',
        text_hi: 'होई एन प्राचीन शहर: आइए, हम होई एन प्राचीन शहर की पैदल ही खोज शुरू करें।',
        description_hi: 'हम यूनेस्को विश्व धरोहर स्थल में घूमेंगे, इसकी अद्वितीय वास्तुकला की प्रशंसा करेंगे।'
      }
    ],
    evening: [
      {
        text: 'Lantern evening: Let\'s enjoy the enchanting lantern-lit streets of Hoi An.',
        description: 'Let\'s experience the magical transformation of Hoi An as thousands of colorful lanterns illuminate the town.',
        text_hi: 'लालटेन की शाम: होई एन की मोहक लालटेन-जगमगाती गलियों का आनंद लें।',
        description_hi: 'आइए, हम होई एन के जादुई परिवर्तन को देखें क्योंकि हजारों रंगीन लालटेन शहर को रोशन करते हैं।'
      }
    ],
    notes: 'Flight: VJ-545 HAN-DAD (07:20-08:40)\nHotel: Royal Riverside Hoi An Hotel & Spa',
    keyLocations: [
      {
        name: 'Royal Riverside Hoi An Hotel & Spa',
        query: 'Royal Riverside Hoi An Hotel & Spa, Hoi An, Vietnam',
        type: 'hotel',
        description: 'Our riverside hotel in Hoi An, offering beautiful river views and easy access to the Ancient Town.',
        description_hi: 'होई एन में हमारा नदी किनारे का होटल, जो सुंदर नदी के दृश्य और प्राचीन शहर तक आसान पहुंच प्रदान करता है।'
      },
      {
        name: 'Hoi An Ancient Town',
        query: 'Hoi An Ancient Town, Hoi An, Vietnam',
        type: 'landmark',
        description: 'A UNESCO World Heritage Site famous for its well-preserved ancient architecture and vibrant cultural atmosphere.',
        description_hi: 'एक यूनेस्को विश्व धरोहर स्थल जो अपनी अच्छी तरह से संरक्षित प्राचीन वास्तुकला और जीवंत सांस्कृतिक वातावरण के लिए प्रसिद्ध है।'
      },
      {
        name: 'Noi Bai International Airport (HAN)',
        query: 'Noi Bai International Airport, Hanoi, Vietnam',
        type: 'airport',
        description: 'Hanoi\'s main international airport, located about 45 minutes from the city center.',
        description_hi: 'हनोई का मुख्य अंतर्राष्ट्रीय हवाई अड्डा, शहर के केंद्र से लगभग 45 मिनट की दूरी पर स्थित है।'
      },
      {
        name: 'Da Nang International Airport (DAD)',
        query: 'Da Nang International Airport, Da Nang, Vietnam',
        type: 'airport',
        description: 'Our departure airport from Central Vietnam.',
        description_hi: 'मध्य वियतनाम से हमारा प्रस्थान हवाई अड्डा।'
      }
    ]
  },
  {
    day: 6,
    date: 'Aug 12 (Tue)',
    location: 'Hoi An',
    accommodation: 'Royal Riverside Hoi An Hotel & Spa',
    morning: [
      {
        text: 'Hoi An Immersion: Let\'s enjoy breakfast at our hotel.',
        description: 'We\'ll start our day with a delicious meal at our riverside hotel.',
        text_hi: 'होई एन विसर्जन: हमारे होटल में नाश्ते का आनंद लें।',
        description_hi: 'हम अपने नदी के किनारे के होटल में एक स्वादिष्ट भोजन के साथ अपने दिन की शुरुआत करेंगे।'
      },
      {
        text: 'Choose Our Adventure: We can pick from a variety of enriching activities: Participate in a hands-on Cooking Class to learn Vietnamese culinary secrets OR embark on a leisurely Cycling Tour through the serene rice paddies and local villages like Tra Que Vegetable Village OR simply relax by our hotel\'s pool or indulge in a spa treatment.',
        description: 'Let\'s tailor our morning to our interests, whether it\'s culinary exploration, active discovery, or pure relaxation.',
        text_hi: 'हमारा रोमांच चुनें: विभिन्न प्रकार की समृद्ध गतिविधियों में से चुनें: वियतनामी पाक रहस्यों को सीखने के लिए एक व्यावहारिक कुकिंग क्लास में भाग लें या शांत धान के खेतों और ट्रा क्वे वेजिटेबल विलेज जैसे स्थानीय गांवों के माध्यम से एक आरामदायक साइकिलिंग टूर पर निकलें या बस हमारे होटल के पूल के किनारे आराम करें या स्पा उपचार का आनंद लें।',
        description_hi: 'आइए, हम अपनी सुबह को अपनी रुचियों के अनुसार तैयार करें, चाहे वह पाक अन्वेषण हो, सक्रिय खोज हो, या शुद्ध विश्राम हो।'
      }
    ],
    afternoon: [
      {
        text: 'Afternoon Delights: Lunch in Hoi An.',
        description: 'Let\'s enjoy another delightful meal in Hoi An.',
        text_hi: 'दोपहर की खुशियाँ: होई एन में दोपहर का भोजन।',
        description_hi: 'आइए, हम होई एन में एक और स्वादिष्ट भोजन का आनंद लें।'
      },
      {
        text: 'Continue chosen activity or relax by the hotel pool/spa.',
        description: 'Let\'s make the most of our time in Hoi An.',
        text_hi: 'चुनी हुई गतिविधि जारी रखें या होटल के पूल/स्पा में आराम करें।',
        description_hi: 'आइए, हम होई एन में अपने समय का अधिकतम लाभ उठाएं।'
      },
      {
        text: 'Explore more of Hoi An Ancient Town for souvenir shopping or revisit favorite spots. Perhaps consider getting custom-tailored clothing or shoes.',
        description: 'Hoi An is famous for its tailors – a great opportunity for custom-made items.',
        text_hi: 'स्मृति चिन्ह की खरीदारी के लिए होई एन प्राचीन शहर का और अन्वेषण करें या पसंदीदा स्थानों पर फिर से जाएं। शायद कस्टम-निर्मित कपड़े या जूते प्राप्त करने पर विचार करें।',
        description_hi: 'होई एन अपने दर्जी के लिए प्रसिद्ध है – कस्टम-निर्मित वस्तुओं के लिए एक शानदार अवसर।'
      }
    ],
    evening: [
      {
        text: 'Ancient Town Evening: Let\'s enjoy our final charming evening in Hoi An with a delightful dinner.',
        description: 'We\'ll savor the last flavors of Hoi An.',
        text_hi: 'प्राचीन शहर की शाम: होई एन में एक रमणीय रात के खाने के साथ हमारी अंतिम आकर्षक शाम का आनंद लें।',
        description_hi: 'हम होई एन के अंतिम स्वादों का आनंद लेंगे।'
      },
      {
        text: 'Take a last serene stroll through the lantern-lit ancient town, reflecting on its unique charm before our move to Da Nang.',
        description: 'Let\'s cherish the magical atmosphere of Hoi An by night.',
        text_hi: 'दा नांग जाने से पहले इसकी अद्वितीय आकर्षण पर विचार करते हुए, लालटेन-जगमगाते प्राचीन शहर के माध्यम से एक अंतिम शांत टहल लें।',
        description_hi: 'आइए, रात में होई एन के जादुई वातावरण को संजोएं।'
      }
    ],
    notes: 'Hoi An Activities: [Add Cooking Class/Cycling Tour/Spa details/Booking Links Here]\nHotel: Royal Riverside Hoi An Hotel & Spa (Check-out 13/Aug)',
    keyLocations: [
      {
        name: 'Royal Riverside Hoi An Hotel & Spa',
        query: 'Royal Riverside Hoi An Hotel & Spa, Hoi An, Vietnam',
        type: 'hotel',
        description: 'Our riverside hotel in Hoi An, offering beautiful river views and easy access to the Ancient Town.',
        description_hi: 'होई एन में हमारा नदी किनारे का होटल, जो सुंदर नदी के दृश्य और प्राचीन शहर तक आसान पहुंच प्रदान करता है।'
      },
      {
        name: 'Hoi An Ancient Town',
        query: 'Hoi An Ancient Town, Hoi An, Vietnam',
        type: 'landmark',
        description: 'A UNESCO World Heritage Site famous for its well-preserved ancient architecture and vibrant cultural atmosphere.',
        description_hi: 'एक यूनेस्को विश्व धरोहर स्थल जो अपनी अच्छी तरह से संरक्षित प्राचीन वास्तुकला और जीवंत सांस्कृतिक वातावरण के लिए प्रसिद्ध है।'
      },
      {
        name: 'Tra Que Vegetable Village, Hoi An',
        query: 'Tra Que Vegetable Village, Hoi An, Vietnam',
        type: 'landmark',
        description: 'A charming organic farming village where traditional Vietnamese agricultural methods are still practiced. Perfect for cycling tours and cooking classes!',
        description_hi: 'एक मनमोहक organic farming village जहाँ अभी भी traditional Vietnamese agricultural methods का प्रयोग होता है। Cycling tours और cooking classes के लिए perfect!'
      }
    ]
  },
  {
    day: 7,
    date: 'Aug 13 (Wed)',
    location: 'Da Nang / Ba Na Hills',
    accommodation: 'The Nalod Da Nang',
    morning: [
      {
        text: 'Morning Move to Da Nang: Let\'s enjoy breakfast at Royal Riverside Hoi An Hotel & Spa.',
        description: 'We\'ll have our last breakfast in Hoi An before heading to Da Nang.',
        text_hi: 'दा नांग के लिए सुबह की यात्रा: रॉयल रिवरसाइड होई एन होटल एंड स्पा में नाश्ते का आनंद लें।',
        description_hi: 'हम दा नांग जाने से पहले होई एन में अपना आखिरी नाश्ता करेंगे।'
      },
      {
        text: 'Check out from hotel.',
        description: 'Let\'s complete our check-out process.',
        text_hi: 'होटल से चेक आउट करें।',
        description_hi: 'आइए, हम अपनी चेक-आउट प्रक्रिया पूरी करें।'
      },
      {
        text: 'Transfer from Hoi An to The Nalod Da Nang (approx. 45-60 min). Drop luggage at hotel.',
        description: 'A comfortable transfer to our new base in Da Nang.',
        text_hi: 'होई एन से द नालोड दा नांग (लगभग 45-60 मिनट) में स्थानांतरण करें। होटल में सामान छोड़ें।',
        description_hi: 'दा नांग में हमारे नए आधार पर एक आरामदायक स्थानांतरण।'
      }
    ],
    afternoon: [
      {
        text: 'Ba Na Hills Adventure: Transfer from hotel to Ba Na Hills (approx. 1h - 1h 15m from Da Nang).',
        description: 'Let\'s embark on a scenic drive to the famous Ba Na Hills mountain resort.',
        text_hi: 'बा ना हिल्स एडवेंचर: होटल से बा ना हिल्स (दा नांग से लगभग 1 घंटे - 1 घंटे 15 मिनट) में स्थानांतरण करें।',
        description_hi: 'आइए, प्रसिद्ध बा ना हिल्स माउंटेन रिसॉर्ट तक एक सुंदर ड्राइव पर निकलें।'
      },
      {
        text: 'Ascend: Let\'s take the cable car ride up to the mountain resort.',
        description: 'We\'ll experience one of the world\'s longest and highest cable car systems.',
        text_hi: 'चढ़ाई: माउंटेन रिसॉर्ट तक केबल कार की सवारी करें।',
        description_hi: 'आइए, दुनिया की सबसे लंबी और सबसे ऊंची केबल कार प्रणालियों में से एक का अनुभव करें।'
      },
      {
        text: 'Discovery: Let\'s spend our afternoon exploring the various attractions: walk across the iconic Golden Bridge, wander through the charming French Village, enjoy the thrills at Fantasy Park, and stroll through Le Jardin D\'Amour gardens.',
        description: 'We\'ll immerse ourselves in the unique blend of natural beauty and themed attractions.',
        text_hi: 'खोज: हमारी दोपहर विभिन्न आकर्षणों की खोज में बिताएं: प्रतिष्ठित गोल्डन ब्रिज पर चलें, आकर्षक फ्रेंच विलेज में घूमें, फैंटेसी पार्क में रोमांच का आनंद लें, और ले जार्डिन डी\'अमौर उद्यानों में टहलें।',
        description_hi: 'आइए, हम प्राकृतिक सुंदरता और थीम वाले आकर्षणों के अद्वितीय मिश्रण में खुद को डुबो दें।'
      }
    ],
    evening: [
      {
        text: 'Return to Da Nang: We\'ll take cable car down from Ba Na Hills.',
        description: 'Let\'s descend from the mountain after a day of fun.',
        text_hi: 'दा नांग लौटें: बा ना हिल्स से केबल कार से नीचे उतरें।',
        description_hi: 'आइए, मज़ेदार दिन के बाद पहाड़ से नीचे उतरें।'
      },
      {
        text: 'Return to The Nalod Da Nang and formally check into our room.',
        description: 'Let\'s settle into our hotel in Da Nang.',
        text_hi: 'द नालोड दा नांग लौटें और औपचारिक रूप से हमारे कमरे में चेक-इन करें।',
        description_hi: 'आइए, हम दा नांग में अपने होटल में बस जाएं।'
      }
    ],
    notes: 'Hotel: The Nalod Da Nang (Check-in 13/Aug)\nBa Na Hills: [Add Ticket Info/Transfer Details Here]',
    keyLocations: [
      {
        name: 'The Nalod Da Nang',
        query: 'The Nalod Da Nang, Da Nang, Vietnam',
        type: 'hotel',
        description: 'Our modern hotel in Da Nang, offering comfortable stays and city access.',
        description_hi: 'दा नांग में हमारा आधुनिक होटल, जो आरामदायक ठहरने और शहर तक पहुँच प्रदान करता है।'
      },
      {
        name: 'Ba Na Hills, Da Nang',
        query: 'Ba Na Hills, Da Nang, Vietnam',
        type: 'landmark',
        description: 'A mountain resort complex featuring the Golden Bridge, French Village, and various entertainment options.',
        description_hi: 'गोल्डन ब्रिज, फ्रेंच विलेज और विभिन्न मनोरंजन विकल्पों की विशेषता वाला एक पर्वतीय रिसॉर्ट परिसर।'
      }
    ]
  },
  {
    day: 8,
    date: 'Aug 14 (Thu)',
    location: 'Da Nang',
    accommodation: 'The Nalod Da Nang',
    morning: [
      {
        text: 'Coastal Exploration: Let\'s enjoy breakfast at The Nalod Da Nang.',
        description: 'We\'ll start our day with breakfast at our hotel.',
        text_hi: 'तटीय अन्वेषण: द नालोड दा नांग में नाश्ते का आनंद लें।',
        description_hi: 'हम अपने होटल में नाश्ते के साथ अपने दिन की शुरुआत करेंगे।'
      },
      {
        text: 'Visit Marble Mountains (recommended early morning for cooler temperatures). We can explore the intricate caves, ancient pagodas, and enjoy panoramic views from the peaks.',
        description: 'Let\'s discover the stunning caves and temples carved into these limestone hills.',
        text_hi: 'मार्बल पर्वत का दौरा करें (ठंडे तापमान के लिए सुबह जल्दी अनुशंसित)। हम जटिल गुफाओं, प्राचीन पैगोडाओं का अन्वेषण कर सकते हैं, और चोटियों से मनोरम दृश्यों का आनंद ले सकते हैं।',
        description_hi: 'आइए, हम इन चूना पत्थर की पहाड़ियों में खुदी हुई शानदार गुफाओं और मंदिरों की खोज करें।'
      }
    ],
    afternoon: [
      {
        text: 'Beach Relaxation & Iconic Lady Buddha: Lunch in Da Nang.',
        description: 'Let\'s enjoy a meal near the coast.',
        text_hi: 'समुद्र तट पर विश्राम और प्रतिष्ठित लेडी बुद्ध: दा नांग में दोपहर का भोजन।',
        description_hi: 'आइए, हम तट के पास भोजन का आनंद लें।'
      },
      {
        text: 'Relax and unwind at My Khe Beach, known for its long stretches of white sand. We can swim, sunbathe, or simply enjoy the sea breeze.',
        description: 'Let\'s enjoy one of Vietnam\'s most beautiful beaches.',
        text_hi: 'माई खे समुद्र तट पर आराम करें और तनावमुक्त हों, जो अपनी लंबी सफेद रेत के लिए जाना जाता है। हम तैर सकते हैं, धूप सेंक सकते हैं, या बस समुद्री हवा का आनंद ले सकते हैं।',
        description_hi: 'आइए, हम वियतनाम के सबसे खूबसूरत समुद्र तटों में से एक का आनंद लें।'
      },
      {
        text: 'Visit the majestic Lady Buddha statue at Linh Ung Pagoda on Son Tra Peninsula, offering stunning panoramic views of Da Nang city and its coastline.',
        description: 'Let\'s admire the towering statue and the expansive views over the city and sea.',
        text_hi: 'सोन त्रा प्रायद्वीप पर लिन्ह उंग पैगोडा में राजसी लेडी बुद्ध प्रतिमा का दौरा करें, जो दा नांग शहर और इसकी तटरेखा के शानदार मनोरम दृश्य पेश करती है।',
        description_hi: 'आइए, हम विशाल प्रतिमा और शहर और समुद्र के विस्तृत दृश्यों की प्रशंसा करें।'
      }
    ],
    evening: [
      {
        text: 'City Lights: Evening stroll along the Han River promenade.',
        description: 'Let\'s enjoy a leisurely walk along the river, admiring the city lights.',
        text_hi: 'शहर की रोशनी: हान नदी के किनारे शाम की सैर।',
        description_hi: 'आइए, हम शहर की रोशनी की प्रशंसा करते हुए नदी के किनारे एक आरामदायक टहल का आनंद लें।'
      },
      {
        text: 'See the illuminated Dragon Bridge (note: fire/water show typically on Sat/Sun evenings).',
        description: 'Even without the show, the Dragon Bridge is an impressive sight when lit up at night.',
        text_hi: 'प्रकाशित ड्रैगन ब्रिज देखें (ध्यान दें: आग/पानी का शो आमतौर पर शनि/रवि शाम को होता है)।',
        description_hi: 'शो के बिना भी, ड्रैगन ब्रिज रात में जलाए जाने पर एक प्रभावशाली दृश्य है।'
      }
    ],
    notes: 'Marble Mountains: [Add Entry Fee Info Here]\nMy Khe Beach: [Location]\nLady Buddha: [Location]',
    keyLocations: [
      {
        name: 'The Nalod Da Nang',
        query: 'The Nalod Da Nang, Da Nang, Vietnam',
        type: 'hotel',
        description: 'Our modern hotel in Da Nang, offering comfortable stays and city access.',
        description_hi: 'दा नांग में हमारा आधुनिक होटल, जो आरामदायक ठहरने और शहर तक पहुँच प्रदान करता है।'
      },
      {
        name: 'Marble Mountains, Da Nang',
        query: 'Marble Mountains, Da Nang, Vietnam',
        type: 'landmark',
        description: 'A cluster of five limestone and marble hills, home to caves, tunnels, and Buddhist sanctuaries.',
        description_hi: 'पांच चूना पत्थर और संगमरमर की पहाड़ियों का एक समूह, गुफाओं, सुरंगों और बौद्ध अभयारण्यों का घर।'
      },
      {
        name: 'My Khe Beach, Da Nang',
        query: 'My Khe Beach, Da Nang, Vietnam',
        type: 'landmark',
        description: 'A long, beautiful sandy beach popular for swimming and relaxation.',
        description_hi: 'तैराकी और विश्राम के लिए लोकप्रिय एक लंबा, सुंदर रेतीला समुद्र तट।'
      },
      {
        name: 'Lady Buddha, Da Nang',
        query: 'Lady Buddha, Da Nang, Vietnam',
        type: 'landmark',
        description: 'The tallest Buddha statue in Vietnam, located on Son Tra Peninsula, offering stunning panoramic views of Da Nang city and its coastline.',
        description_hi: 'वियतनाम में सबसे ऊंची बुद्ध प्रतिमा, सोन त्रा प्रायद्वीप पर स्थित है, जो मनोरम दृश्य प्रस्तुत करती है।'
      }
    ]
  },
  {
    day: 9,
    date: 'Aug 15 (Fri)',
    location: 'Da Nang to India',
    accommodation: 'In-flight (DEL-UNA)',
    morning: [
      {
        text: 'Leisure & Departure Prep: Let\'s enjoy breakfast at The Nalod Da Nang.',
        description: 'We\'ll have our final breakfast in Vietnam.',
        text_hi: 'अवकाश और प्रस्थान की तैयारी: द नालोड दा नांग में नाश्ते का आनंद लें।',
        description_hi: 'हम वियतनाम में अपना आखिरी नाश्ता करेंगे।'
      },
      {
        text: 'Leisure time for last-minute souvenir shopping or relaxation.',
        description: 'Let\'s grab any last-minute gifts or simply relax before our journey home.',
        text_hi: 'अंतिम समय की स्मृति चिन्ह की खरीदारी या विश्राम के लिए खाली समय।',
        description_hi: 'आइए, हम घर वापसी की यात्रा से पहले कोई भी अंतिम समय के उपहार लें या बस आराम करें।'
      },
      {
        text: 'Check out from The Nalod Da Nang.',
        description: 'Let\'s complete our check-out process.',
        text_hi: 'द नालोड दा नांग से चेक आउट करें।',
        description_hi: 'आइए, हम अपनी चेक-आउट प्रक्रिया पूरी करें।'
      },
      {
        text: 'Transfer to Da Nang (DAD) airport (approx. 15-20 min from hotel).',
        description: 'A short and convenient transfer to the airport.',
        text_hi: 'दा नांग (DAD) हवाई अड्डे पर स्थानांतरण करें (होटल से लगभग 15-20 मिनट)।',
        description_hi: 'हवाई अड्डे तक एक छोटा और सुविधाजनक स्थानांतरण।'
      }
    ],
    afternoon: [
      {
        text: 'Domestic Flight & Hanoi Transit: Let\'s check in for Vietnam Airlines VN-7198.',
        description: 'We\'ll check in for our flight to Hanoi.',
        text_hi: 'घरेलू उड़ान और हनोई ट्रांजिट: वियतनाम एयरलाइंस VN-7198 के लिए चेक-इन करें।',
        description_hi: 'हम हनोई के लिए अपनी उड़ान के लिए चेक-इन करेंगे।'
      },
      {
        text: 'Depart Da Nang (DAD) at 15:25.',
        description: 'Our flight departs mid-afternoon.',
        text_hi: 'दा नांग (DAD) से 15:25 बजे प्रस्थान करें।',
        description_hi: 'हमारी उड़ान दोपहर में प्रस्थान करती है।'
      },
      {
        text: 'Arrive Hanoi (HAN) Terminal 1 at 16:50.',
        description: 'We\'ll arrive in Hanoi for our connecting flight.',
        text_hi: 'हनोई (HAN) टर्मिनल 1 पर 16:50 बजे पहुंचें।',
        description_hi: 'हम अपनी कनेक्टिंग उड़ान के लिए हनोई पहुंचेंगे।'
      }
    ],
    evening: [
      {
        text: 'International Flight to New Delhi: Let\'s check in for Vietnam Airlines VN-981.',
        description: 'We\'ll check in for our international flight home.',
        text_hi: 'नई दिल्ली के लिए अंतर्राष्ट्रीय उड़ान: वियतनाम एयरलाइंस VN-981 के लिए चेक-इन करें।',
        description_hi: 'आइए, हम घर वापसी के लिए अपनी अंतर्राष्ट्रीय उड़ान के लिए चेक-इन करें।'
      },
      {
        text: 'Depart Hanoi (HAN) Terminal 2 at 19:05.',
        description: 'Our flight to New Delhi departs in the evening.',
        text_hi: 'हनोई (HAN) टर्मिनल 2 से 19:05 बजे प्रस्थान करें।',
        description_hi: 'नई दिल्ली के लिए हमारी उड़ान शाम को प्रस्थान करती है।'
      },
      {
        text: 'Arrive New Delhi (DEL) Terminal 3 at 22:05.',
        description: 'We\'ll arrive back in India.',
        text_hi: 'नई दिल्ली (DEL) टर्मिनल 3 पर 22:05 बजे पहुंचें।',
        description_hi: 'आइए, हम भारत वापस पहुंचें।'
      }
    ],
    notes: 'Flight 1: VN-7198 DAD-HAN (15:25-16:50)\nFlight 2: VN-981 HAN-DEL (19:05-22:05)\nTrain: New Delhi-Una (BOOKING PENDING)',
    keyLocations: [
      {
        name: 'The Nalod Da Nang',
        query: 'The Nalod Da Nang, Da Nang, Vietnam',
        type: 'hotel',
        description: 'Our modern hotel in Da Nang, offering comfortable stays and city access.',
        description_hi: 'दा नांग में हमारा आधुनिक होटल, जो आरामदायक ठहरने और शहर तक पहुँच प्रदान करता है।'
      },
      {
        name: 'Da Nang International Airport (DAD)',
        query: 'Da Nang International Airport, Da Nang, Vietnam',
        type: 'airport',
        description: 'Our departure airport from Central Vietnam.',
        description_hi: 'मध्य वियतनाम से हमारा प्रस्थान हवाई अड्डा।'
      },
      {
        name: 'Noi Bai International Airport (HAN)',
        query: 'Noi Bai International Airport, Hanoi, Vietnam',
        type: 'airport',
        description: 'Our transit airport in Hanoi, with domestic (T1) and international (T2) terminals.',
        description_hi: 'हनोई में हमारा ट्रांजिट हवाई अड्डा, जिसमें घरेलू (T1) और अंतर्राष्ट्रीय (T2) टर्मिनल हैं।'
      },
      {
        name: 'Indira Gandhi International Airport (DEL)',
        query: 'Indira Gandhi International Airport, New Delhi, India',
        type: 'airport',
        description: 'India\'s largest airport, serving as the primary international gateway to the country.',
        description_hi: 'भारत का सबसे बड़ा हवाई अड्डा, जो देश के लिए प्राथमिक अंतर्राष्ट्रीय प्रवेश द्वार के रूप में कार्य करता है।'
      }
    ]
  },
  {
    day: 10,
    date: 'Aug 16 (Sat)',
    location: 'India',
    accommodation: 'Home',
    morning: [
      {
        text: 'Arrival Home: We\'ll arrive at Una Railway Station.',
        description: 'Our train arrives at Una, completing our long journey.',
        text_hi: 'घर आगमन: हम ऊना रेलवे स्टेशन पहुंचेंगे।',
        description_hi: 'हमारी ट्रेन ऊना पहुंचती है, हमारी लंबी यात्रा पूरी करती है।'
      },
      {
        text: 'Travel from Una Railway Station back to our home.',
        description: 'A short final trip to our residence.',
        text_hi: 'ऊना रेलवे स्टेशन से अपने घर वापस यात्रा करें।',
        description_hi: 'हमारे निवास स्थान तक एक छोटी अंतिम यात्रा।'
      }
    ],
    afternoon: [
      {
        text: 'Rest and reflect on our amazing Vietnam adventure!',
        description: 'Time to unpack, rest, and cherish the memories of our incredible journey.',
        text_hi: 'आराम करें और हमारे अद्भुत वियतनाम रोमांच पर विचार करें!',
        description_hi: 'सामान खोलने, आराम करने और हमारी अविश्वसनीय यात्रा की यादों को संजोने का समय।'
      }
    ],
    evening: [],
    notes: 'End of our wonderful Vietnam journey! 🇻🇳✈️🏠',
    keyLocations: [
      {
        name: 'Una Railway Station',
        query: 'Una Railway Station, Una, India',
        type: 'travel',
        description: 'Our final destination, marking the end of our Vietnam adventure.',
        description_hi: 'हमारी अंतिम मंजिल, हमारे वियतनाम रोमांच के अंत का प्रतीक।'
      }
    ]
  }
];

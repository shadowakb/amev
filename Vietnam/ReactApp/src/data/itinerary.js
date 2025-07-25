// Vietnam Family Trip Itinerary - 4 people, 10 days
export const itineraryData = [
  {
    day: 1,
    date: 'Aug 7 (Thu)',
    location: 'Una to New Delhi (by Train) / In Flight',
    accommodation: 'In-flight',
    morning: [
      { 
        text: 'Journey to Delhi begins 🚂', 
        description: 'Time to pack up and head to Una Railway Station. Our Vietnam trip starts with this train journey to Delhi.',
        text_hi: 'दिल्ली की यात्रा शुरू 🚂',
        description_hi: 'समान पैक करके ऊना रेलवे स्टेशन जाने का समय। हमारी Vietnam यात्रा दिल्ली की इस ट्रेन यात्रा से शुरू होती है।'
      },
      { 
        text: 'Train Departure: Una 13:23', 
        description: 'Good idea to grab some snacks and maybe download entertainment for the 5-hour journey to Delhi. Comfortable train ride ahead.',
        text_hi: 'ट्रेन प्रस्थान: ऊना 13:23',
        description_hi: 'दिल्ली की 5 घंटे की यात्रा के लिए कुछ snacks और entertainment download करना अच्छा idea है।'
      }
    ],
    afternoon: [
      { 
        text: 'Delhi Arrival 18:25', 
        description: 'Arrival at New Delhi Railway Station. The station can be busy, so good to stay together while collecting luggage and heading to the airport.',
        text_hi: 'दिल्ली आगमन 18:25',
        description_hi: 'न्यू दिल्ली रेलवे स्टेशन पहुंचना। स्टेशन व्यस्त हो सकता है, इसलिए luggage लेते समय साथ रहना अच्छा है।'
      },
      { 
        text: 'Airport Transfer ✈️', 
        description: 'Transfer to DEL airport - we can choose between Metro or cab. With 4 people and luggage, cab might be more comfortable.',
        text_hi: 'एयरपोर्ट ट्रांसफर ✈️',
        description_hi: 'DEL airport का transfer - Metro (सस्ती) या cab के बीच चुन सकते हैं। 4 लोग और luggage के साथ cab अधिक comfortable हो सकती है।'
      }
    ],
    evening: [
      { 
        text: 'Flight Check-in 📔', 
        description: 'Check-in, security, and duty-free shopping if there\'s time. Then we\'re Vietnam-bound on the midnight flight.',
        text_hi: 'फ्लाइट चेक-इन 📔',
        description_hi: 'Check-in, security, और अगर समय हो तो duty-free shopping। फिर midnight flight से Vietnam जाना है।'
      },
      { 
        text: 'Midnight Flight DEL 00:05 🇮🇳➡️🇻🇳', 
        description: 'Late night departure to Vietnam. Good to try getting some rest on the flight for the early morning arrival.',
        text_hi: 'मध्यरात्रि की उड़ान DEL 00:05 🇮🇳➡️🇻🇳',
        description_hi: 'Vietnam के लिए देर रात की departure। सुबह जल्दी arrival के लिए flight में आराम करना अच्छा रहेगा।'
      }
    ],
    notes: 'Train: Una to New Delhi (13:23-18:25)\nFlight: DEL-HAN (VN 00:05)',
    keyLocations: [
      { 
        name: 'New Delhi Railway Station', 
        query: 'New Delhi Railway Station, India', 
        type: 'travelHub', 
        description: 'Major railway hub - expect crowds but efficient services. Keep family together here!',
        description_hi: 'प्रमुख रेलवे hub - भीड़ की अपेक्षा करें लेकिन efficient services। यहाँ family को साथ रखें!'
      },
      { 
        name: 'Indira Gandhi International Airport (DEL)', 
        query: 'Indira Gandhi International Airport, New Delhi, India', 
        type: 'airport', 
        description: 'India\'s biggest airport - has everything you need. Terminal 3 is where the magic happens for international flights!',
        description_hi: 'भारत की सबसे बड़ी airport - जो चाहिए सब है। Terminal 3 में international flights के लिए जादू होता है!'
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
        text: 'Vietnam Arrival - HAN 05:40 🇻🇳', 
        description: 'Early morning arrival in Hanoi. Immigration, baggage claim, then transfer to our hotel in the Old Quarter.',
        text_hi: 'वियतनाम आगमन - HAN 05:40 🇻🇳',
        description_hi: 'हनोई में सुबह जल्दी arrival। Immigration, baggage claim, फिर Old Quarter में हमारे hotel का transfer।'
      },
      { 
        text: 'Hotel Transfer to Oriental Suites (Old Quarter)', 
        description: 'Transfer to our hotel in the heart of Hanoi\'s Old Quarter - great central location for exploring.',
        text_hi: 'ओरिएंटल सूट्स (ओल्ड क्वार्टर) में होटल ट्रांसफर',
        description_hi: 'हनोई के Old Quarter के केंद्र में हमारे hotel का transfer - explore करने के लिए बेहतरीन central location।'
      },
      { 
        text: 'Drop luggage & freshen up', 
        description: 'Even if rooms aren\'t ready, we can freshen up and store bags. Time to get oriented and have some coffee/tea.',
        text_hi: 'सामान छोड़ें और तरोताजा हों',
        description_hi: 'भले ही rooms तैयार न हों, हम fresh हो सकते हैं और bags store कर सकते हैं। Orient होने और coffee/tea पीने का समय।'
      },
      { 
        text: 'Vietnamese Breakfast ☕', 
        description: 'First Vietnamese meal - trying local breakfast options like pho, Vietnamese coffee, or fresh baguettes.',
        text_hi: 'वियतनामी नाश्ता ☕',
        description_hi: 'पहला Vietnamese meal - pho, Vietnamese coffee, या fresh baguettes जैसे local breakfast options try करना।'
      }
    ],
    afternoon: [
      {
        text: 'Old Quarter Walking Tour & Hoan Kiem Lake 🚶‍♀️',
        description: 'Exploring the famous 36 Streets on foot, then visiting iconic Hoan Kiem Lake with Ngoc Son Temple and the red Huc Bridge. Each street traditionally specializes in different crafts and trades. Perfect for photos and cultural immersion.',
        text_hi: 'ओल्ड क्वार्टर पैदल यात्रा और होआन किएम झील 🚶‍♀️',
        description_hi: 'प्रसिद्ध 36 Streets को पैदल explore करना, फिर प्रतिष्ठित Hoan Kiem Lake, Ngoc Son Temple और लाल Huc Bridge देखना। Photos और cultural immersion के लिए perfect।'
      }
    ],
    evening: [
      { 
        text: 'Water Puppet Show at Thang Long Theatre 🎭', 
        description: 'Traditional Vietnamese water puppet performance - a unique 1000+ year old art form. The show runs about an hour with live traditional music. Good cultural experience for the family.',
        text_hi: 'थांग लॉन्ग थिएटर में जल कठपुतली शो 🎭',
        description_hi: 'पारंपरिक Vietnamese water puppet performance - एक unique 1000+ साल पुराना art form। Live traditional music के साथ लगभग एक घंटे का show।'
      }
    ],
    notes: 'Hotel: Oriental Suites Hotel & Spa (Old Quarter location - perfect!)\nFlight: HAN Arrival 05:40 (Vietnam time)\nWater Puppet Show: Evening performance at Thang Long Theatre',
    keyLocations: [
      { 
        name: 'Noi Bai International Airport (HAN)', 
        query: 'Noi Bai International Airport, Hanoi, Vietnam', 
        type: 'airport', 
        description: 'Modern airport, about 45 mins to city center. Airport transfer arranged - no stress!',
        description_hi: 'आधुनिक airport, city center से लगभग 45 मिनट। Airport transfer arranged - कोई tension नहीं!'
      },
      { 
        name: 'Oriental Suites Hotel & Spa, Hanoi', 
        query: 'Oriental Suites Hotel & Spa, Hanoi, Vietnam', 
        type: 'hotel', 
        description: 'Our home base in the heart of Old Quarter! Walking distance to everything important. Perfect location for family exploration.',
        description_hi: 'Old Quarter के दिल में हमारा home base! सभी important चीजों तक walking distance। Family exploration के लिए perfect location।'
      },
      {
        name: 'Hanoi Old Quarter',
        query: 'Hanoi Old Quarter, Hanoi, Vietnam',
        type: 'landmark',
        description: 'Historic center of Hanoi with traditional streets, local food vendors, and traditional architecture representing Vietnamese culture.',
        description_hi: 'हनोई का ऐतिहासिक केंद्र जहां traditional streets, local food vendors, और traditional architecture हैं जो Vietnamese संस्कृति का प्रतिनिधित्व करती है।'
      },
      {
        name: 'Hoan Kiem Lake, Hanoi',
        query: 'Hoan Kiem Lake, Hanoi, Vietnam',
        type: 'landmark',
        description: 'Iconic central lake in Hanoi with Ngoc Son Temple and the famous red Huc Bridge. Perfect for peaceful walks and photography.',
        description_hi: 'हनोई की प्रतिष्ठित केंद्रीय झील जिसमें Ngoc Son Temple और प्रसिद्ध लाल Huc Bridge है। शांत सैर और photography के लिए perfect।'
      },
      { 
        name: 'Thang Long Water Puppet Theatre, Hanoi', 
        query: 'Thang Long Water Puppet Theatre, Hanoi, Vietnam', 
        type: 'landmark', 
        description: 'Mind-blowing cultural experience! Traditional Vietnamese water puppets performing ancient stories on water. Absolutely magical! 🎭',
        description_hi: 'दिमाग उड़ाने वाला cultural experience! पानी पर ancient stories perform करती traditional Vietnamese water puppets। बिल्कुल magical! 🎭'
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
        text: 'Ha Long Bay Day Trip 🌊 Limousine Bus Pickup',
        description: 'Early start for our day trip to Ha Long Bay. Comfortable limousine bus pickup from the hotel for the UNESCO World Heritage Site visit.',
        text_hi: 'हा लॉन्ग बे डे ट्रिप 🌊 लिमोसिन बस पिकअप',
        description_hi: 'Ha Long Bay day trip के लिए जल्दी start। UNESCO World Heritage Site visit के लिए hotel से comfortable limousine bus pickup।'
      }
    ],
    afternoon: [
      {
        text: '🚢 Cruise & Cave Exploration + Buffet Lunch',
        description: 'Boat cruise through the limestone karsts of Ha Long Bay, visiting caves and enjoying buffet lunch on deck. Good opportunities for photos and sightseeing.',
        text_hi: '🚢 क्रूज और गुफा अन्वेषण + बुफे लंच',
        description_hi: 'Ha Long Bay के limestone karsts के बीच boat cruise, caves visit करना और deck पर buffet lunch। Photos और sightseeing के लिए अच्छे opportunities।'
      }
    ],
    evening: [
      {
        text: 'Return Journey to Hanoi (18:00 departure)',
        description: 'Time to head back after an incredible day! Everyone will be tired but so happy. Perfect time to share photos and talk about our favorite moments from Ha Long Bay.',
        text_hi: 'हनोई वापसी यात्रा (18:00 departure)',
        description_hi: 'एक incredible day के बाद वापस जाने का समय! सभी थक जाएंगे लेकिन बहुत खुश होंगे।'
      }
    ],
    notes: 'Tour: Cozy Bay Day Cruise (Ha Long Bay) - UNESCO World Heritage Site!\nPick-up: 07:50 AM from hotel\nIncludes: Transportation, boat cruise, cave visits, buffet lunch',
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
        text: 'Ninh Binh "Ha Long Bay on Land" Adventure! ⛰️',
        description: 'Another epic day trip! This time to Ninh Binh - seriously, it\'s called "Ha Long Bay on land" and you\'ll see why. Ancient capitals, boat rides through caves, and stunning mountain views. Perfect for the whole family!',
        text_hi: 'निन्ह बिन्ह "जमीन पर हा लॉन्ग बे" एडवेंचर! ⛰️',
        description_hi: 'एक और epic day trip! इस बार Ninh Binh - सच में, इसे "जमीन पर हा लॉन्ग बे" कहते हैं और आप समझ जाएंगे क्यों।'
      }
    ],
    afternoon: [
      {
        text: '🚣‍♀️ Trang An Boat Journey Through Caves & Ancient Sites',
        description: 'The highlight of the day! Peaceful boat rides through limestone caves and waterways, visiting ancient temples, and seeing rice paddies that look like paintings. So relaxing and beautiful - perfect for photos and family bonding!',
        text_hi: '🚣‍♀️ गुफाओं और प्राचीन स्थलों के माध्यम से ट्रांग एन नाव यात्रा',
        description_hi: 'दिन का highlight! Limestone caves और waterways के through शांतिपूर्ण boat rides, ancient temples visit करना।'
      }
    ],
    evening: [
      {
        text: 'Return to Hanoi - Ha Long Bay and Ninh Binh Complete 🎉',
description: 'Ha Long Bay and Ninh Binh visits completed. Time to return to Hanoi, rest, and prepare for tomorrow\'s flight to Central Vietnam.',
        text_hi: 'हनोई वापस - दो अद्भुत दिन पूरे! 🎉',
        description_hi: 'हमारे पास कैसे couple of days थे! Ha Long Bay और Ninh Binh - Vietnam seriously stunning है।'
      }
    ],
    notes: 'Tour: Hoa Lu Ancient Capital + Trang An UNESCO Site + Mua Cave viewpoint\nPick-up: 07:30-08:00 AM\nIncludes: All transportation, boat rides, entrance fees, lunch',
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
        text: 'Flight to Central Vietnam! ✈️ HAN → Da Nang (07:20-08:40)',
        description: 'Domestic flight from Hanoi to Da Nang, followed by transfer to Hoi An to see the traditional lantern displays.',
        text_hi: 'मध्य वियतनाम के लिए उड़ान! ✈️ HAN → दा नांग (07:20-08:40)',
        description_hi: 'अगले adventure की ओर बढ़ते हुए! हनोई से दा नांग तक छोटी domestic flight, फिर सीधे magical town Hoi An।'
      }
    ],
    afternoon: [
      {
        text: 'First Taste of Hoi An Ancient Town Magic! 🏮',
        description: 'Welcome to UNESCO World Heritage paradise! The moment we step into Hoi An, it feels like stepping back in time. Traditional yellow buildings, river views, and that perfect ancient charm that makes this place so special.',
        text_hi: 'होई एन प्राचीन शहर के जादू का पहला स्वाद! 🏮',
        description_hi: 'UNESCO World Heritage paradise में स्वागत! Hoi An में कदम रखते ही लगता है जैसे time में वापस गए हैं।'
      }
    ],
    evening: [
      {
        text: 'Lantern-lit Evening Stroll ✨',
        description: 'Hoi An\'s famous evening transformation. As the sun sets, colorful lanterns illuminate the ancient town streets. Nice opportunity for evening photos and exploring the town.',
        text_hi: 'लालटेन से जगमगाती शाम की सैर ✨',
        description_hi: 'Hoi An का famous evening transformation। सूरज डूबने पर colorful lanterns ancient town की गलियों को रोशन करती हैं।'
      }
    ],
    notes: 'Flight: VJ-545 HAN-DAD (07:20-08:40) - Domestic flight\nHotel: Royal Riverside Hoi An Hotel & Spa (Riverside location!)\nTransfer: Da Nang Airport → Hoi An (45 mins)',
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
        text: 'Hoi An Full Experience Day! 🌅 Riverside Breakfast',
        description: 'Time to soak in all that Hoi An has to offer! Starting with breakfast by the river - what a perfect way to begin the day.',
        text_hi: 'होई एन पूर्ण अनुभव दिवस! 🌅 नदी के किनारे नाश्ता',
        description_hi: 'Hoi An के सभी अनुभवों में सोखने का समय! नदी के किनारे नाश्ते से शुरुआत - दिन शुरू करने का कितना perfect तरीका।'
      },
      {
        text: '🍳 Activity Options: Cooking Class OR 🚴‍♀️ Village Cycling OR 🧘‍♀️ Spa Relaxation',
        description: 'We can choose from Vietnamese cooking class, cycling through Tra Que vegetable village, or relaxing at the hotel spa/pool. Each option works well for families.',
        text_hi: '🍳 गतिविधि विकल्प: कुकिंग क्लास या 🚴‍♀️ गांव साइकिलिंग या 🧘‍♀️ स्पा आराम',
        description_hi: 'Vietnamese cooking class, Tra Que vegetable village cycling, या hotel spa/pool में आराम में से चुन सकते हैं।'
      }
    ],
    afternoon: [
      {
        text: 'Hoi An Local Flavors & Shopping Spree! 🛍️',
        description: 'Lunch at a local spot, then it\'s shopping time! Hoi An is famous for custom tailoring - we could get some amazing clothes made. Plus souvenir hunting and just enjoying the charming streets.',
        text_hi: 'होई एन स्थानीय स्वाद और शॉपिंग स्प्री! 🛍️',
        description_hi: 'Local spot पर lunch, फिर shopping time! Hoi An custom tailoring के लिए famous है - हम कुछ amazing कपड़े बनवा सकते हैं।'
      },
      {
        text: 'Japanese Covered Bridge & Ancient House Visits',
        description: 'The iconic spots we can\'t miss! The 400-year-old Japanese bridge is so Instagram-worthy, and the ancient merchant houses show what life was like centuries ago.',
        text_hi: 'जापानी कवर्ड ब्रिज और प्राचीन घर की यात्रा',
        description_hi: 'जो iconic spots हम miss नहीं कर सकते! 400 साल पुराना Japanese bridge बहुत Instagram-worthy है।'
      }
    ],
    evening: [
      {
        text: 'Final Hoi An Evening 🏮',
        description: 'Last evening in Hoi An. Dinner featuring Vietnamese specialties, followed by a walk through the lantern-lit streets. Optional lantern boat ride on the Thu Bon River.',
        text_hi: 'अंतिम जादुई होई एन शाम 🏮✨',
        description_hi: 'इस incredible place में हमारी आखिरी रात! Vietnamese specialties के साथ special dinner, फिर lantern-lit streets से एक और enchanting walk।'
      }
    ],
    notes: 'Activity Options: Cooking Class at Thuan Tinh Island / Tra Que Village Cycling Tour / Hotel Spa\nHoi An Specialties to try: Cao Lau noodles, White Rose dumplings, Banh Mi\nShopping: Custom tailoring (24-48 hours), lanterns, silk products\nOptional: Thu Bon River lantern boat ride',
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
        text: 'Farewell Hoi An, Hello Da Nang! 👋 Last Riverside Breakfast',
        description: 'Final morning in Hoi An. Breakfast by the river, then transfer to Da Nang for the remainder of the Vietnam itinerary.',
        text_hi: 'अलविदा होई एन, नमस्ते दा नांग! 👋 अंतिम नदी के किनारे नाश्ता',
        description_hi: 'Bittersweet सुबह जब हम magical Hoi An को अलविदा कहते हैं! नदी के किनारे अंतिम नाश्ता।'
      },
      {
        text: 'Transfer to Da Nang & Hotel Check-in (45-60 mins drive)',
        description: 'Comfortable drive to Da Nang and drop our bags at The Nalod hotel. Time to get ready for our EPIC Ba Na Hills adventure!',
        text_hi: 'दा नांग में स्थानान्तरण और होटल चेक-इन (45-60 मिनट की ड्राइव)',
        description_hi: 'Da Nang तक comfortable drive और The Nalod hotel में bags drop करना। हमारे EPIC Ba Na Hills adventure के लिए तैयार होने का समय!'
      }
    ],
    afternoon: [
      {
        text: '🏔️ Ba Na Hills Day Trip',
        description: 'Visit to Ba Na Hills mountain resort complex. Features the Golden Bridge with giant stone hand sculptures, French-style village, and mountain views.',
        text_hi: '🏔️ बा ना हिल्स डे ट्रिप',
        description_hi: 'Ba Na Hills mountain resort complex की visit। Giant stone hand sculptures के साथ Golden Bridge, French-style village, और mountain views।'
      },
      {
        text: '🚡 Cable Car Ride + 🌉 Golden Bridge Visit',
        description: 'Cable car ride up to the mountain resort (one of the world\'s longest), followed by walking across the Golden Bridge with its distinctive stone hand supports.',
        text_hi: '🚡 केबल कार राइड + 🌉 गोल्डन ब्रिज विजिट',
        description_hi: 'Mountain resort तक cable car ride (दुनिया की सबसे लंबी में से एक), फिर distinctive stone hand supports के साथ Golden Bridge पर चलना।'
      },
      {
        text: '🏰 French Village + 🎡 Fantasy Park Fun!',
        description: 'Explore the charming French colonial village, ride the attractions at Fantasy Park, and enjoy the beautiful gardens. Something for everyone in the family!',
        text_hi: '🏰 फ्रेंच विलेज + 🎡 फैंटेसी पार्क मज़ा!',
        description_hi: 'Charming French colonial village explore करें, Fantasy Park में attractions पर ride करें। Family में सबके लिए कुछ न कुछ!'
      }
    ],
    evening: [
      {
        text: 'Return to Da Nang - What a Day! 🌅',
        description: 'Cable car down from the mountains (amazing sunset views if we\'re lucky!), then back to our Da Nang hotel. Everyone will be tired but SO happy with all the incredible photos and memories!',
        text_hi: 'दा नांग वापसी - कैसा दिन था! 🌅',
        description_hi: 'पहाड़ों से cable car down (अगर भाग्य अच्छा हो तो amazing sunset views!), फिर अपने Da Nang hotel वापस।'
      }
    ],
    notes: 'Hotel: The Nalod Da Nang (Modern hotel in city center)\nBa Na Hills includes: Cable car, Golden Bridge, French Village, Fantasy Park, gardens\nTips: Wear comfortable shoes, bring camera/phone, cooler weather in mountains',
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
        text: 'Da Nang Exploration Day! 🏔️ Early Morning Marble Mountains',
        description: 'Perfect day to explore Da Nang\'s highlights! Starting early at Marble Mountains (cooler temps + fewer crowds). These limestone hills have amazing caves, temples, and killer views - great for photos!',
        text_hi: 'दा नांग एक्सप्लोरेशन डे! 🏔️ सुबह जल्दी मार्बल माउंटेन्स',
        description_hi: 'Da Nang के highlights explore करने के लिए perfect दिन! Marble Mountains पर जल्दी शुरुआत (ठंडा तापमान + कम भीड़)।'
      }
    ],
    afternoon: [
      {
        text: '🏖️ My Khe Beach Relaxation Time!',
        description: 'Time to chill! My Khe Beach is absolutely beautiful - white sand, clear water, perfect for swimming and just relaxing. Great spot for family beach time and some well-deserved rest.',
        text_hi: '🏖️ माई खे बीच रिलैक्सेशन टाइम!',
        description_hi: 'Chill करने का समय! My Khe Beach बिल्कुल beautiful है - white sand, clear water, swimming और relaxing के लिए perfect।'
      },
      {
        text: '🙏 Lady Buddha Statue Visit - Spiritual & Scenic!',
        description: 'The tallest Buddha statue in Vietnam! Located on Son Tra Peninsula with incredible panoramic views of Da Nang city and coastline. So peaceful and the views are absolutely stunning!',
        text_hi: '🙏 लेडी बुद्धा स्टैच्यू विजिट - आध्यात्मिक और प्राकृतिक!',
        description_hi: 'Vietnam की सबसे ऊंची Buddha statue! Son Tra Peninsula पर स्थित incredible panoramic views के साथ।'
      }
    ],
    evening: [
      {
        text: '🌉 Dragon Bridge & Han River Evening Walk',
        description: 'Perfect way to end our Da Nang day! Evening stroll along Han River, see the famous Dragon Bridge lit up (it breathes fire on weekends!), and enjoy the city lights. Great final evening in Vietnam!',
        text_hi: '🌉 ड्रैगन ब्रिज और हान नदी की शाम की सैर',
        description_hi: 'हमारे Da Nang day को end करने का perfect तरीका! Han River के किनारे शाम की सैर, famous Dragon Bridge को lit up देखना।'
      }
    ],
    notes: 'Da Nang Highlights Checklist:\n• Marble Mountains (early morning visit)\n• My Khe Beach (swimming & relaxation)\n• Lady Buddha Statue (panoramic views)\n• Dragon Bridge (evening illumination)\n• Han River walk (city lights)',
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
        text: 'Final Morning in Vietnam 🇻🇳',
        description: 'Last Vietnamese breakfast and time for any final souvenir shopping before heading to the airport. End of our Vietnam trip.',
        text_hi: 'वियतनाम में अंतिम सुबह 🇻🇳',
        description_hi: 'अंतिम Vietnamese breakfast और airport जाने से पहले किसी भी final souvenir shopping का समय। हमारी Vietnam trip का अंत।'
      },
      {
        text: 'Airport Transfer - The Journey Home Begins ✈️',
        description: '15-20 minute drive to Da Nang airport. Time to review the Vietnam travel experiences including Ha Long Bay, Hoi An, Ba Na Hills, and other visited locations.',
        text_hi: 'एयरपोर्ट ट्रांसफर - घर की यात्रा शुरू ✈️',
        description_hi: 'Da Nang airport तक छोटी 15-20 मिनट की drive। सभी amazing experiences पर विचार करने का समय।'
      }
    ],
    afternoon: [
      {
        text: '🛫 Domestic Flight: Da Nang → Hanoi (15:25-16:50)',
        description: 'First flight of our journey home! Quick domestic hop back to Hanoi for our international connection. Time to start processing all those incredible memories!',
        text_hi: '🛫 घरेलू उड़ान: दा नांग → हनोई (15:25-16:50)',
        description_hi: 'घर की यात्रा की पहली flight! हमारे international connection के लिए Hanoi वापस quick domestic hop।'
      }
    ],
    evening: [
      {
        text: '🌍 International Flight Home: Hanoi → Delhi (19:05-22:05)',
        description: 'International flight back to Delhi. Time to settle in for the journey home and maybe go through some of the photos from the trip.',
        text_hi: '🌍 घर के लिए अंतर्राष्ट्रीय उड़ान: हनोई → दिल्ली (19:05-22:05)',
        description_hi: 'Delhi वापस international flight। घर की यात्रा के लिए settle in करने का समय और maybe trip की कुछ photos देखना।'
      }
    ],
    notes: 'Flight Schedule:\n• Da Nang → Hanoi: VN-7198 (15:25-16:50) Domestic\n• Hanoi → Delhi: VN-981 (19:05-22:05) International\n• Transit time in Hanoi: ~2 hours\n• Total travel time: ~9 hours\n• Train Delhi → Una: TO BE BOOKED',
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
        text: 'Home Arrival 🏠 Train at Una',
        description: 'Train arrival at Una Railway Station - we\'re back home after our 10-day Vietnam trip.',
        text_hi: 'घर वापसी 🏠 ऊना में ट्रेन',
        description_hi: 'Una Railway Station पर train arrival - हमारी 10-day Vietnam trip के बाद घर वापस।'
      },
      {
        text: 'Home Sweet Home Journey 💕',
        description: 'That familiar ride from the station to home - but everything feels a bit different now. We\'ve got so many stories to tell and photos to share!',
        text_hi: 'होम स्वीट होम जर्नी 💕',
        description_hi: 'Station से घर तक वही परिचित सवारी - लेकिन अब सब कुछ थोड़ा अलग लगता है। हमारे पास बताने के लिए कई कहानियां हैं!'
      }
    ],
    afternoon: [
      {
        text: 'Unpacking & Photo Review 📸',
        description: 'Time to unpack, rest, and go through all the photos from our Vietnam trip. Good time to start organizing memories from the journey.',
        text_hi: 'अनपैकिंग और फोटो रिव्यू 📸',
        description_hi: 'Unpack करने, आराम करने, और हमारी Vietnam trip की सभी photos देखने का समय। यात्रा की यादों को organize करने का अच्छा समय।'
      }
    ],
    evening: [],
    notes: 'Vietnam Family Trip Complete!\nTotal Days: 10 days\nRoute: India → Vietnam → India\nKey destinations visited: Hanoi, Ha Long Bay, Ninh Binh, Hoi An, Da Nang',
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

// Vietnam Weather Data for August 2025
// Based on historical weather patterns and seasonal averages

export const vietnamWeatherData = {
  // August is peak summer/rainy season in Vietnam
  'Hanoi': {
    cityName: 'Hanoi',
    cityName_hi: 'हनोई',
    month: 'August',
    month_hi: 'अगस्त',
    season: 'Hot & Humid Rainy Season',
    season_hi: 'गर्म और आर्द्र बारिश का मौसम',
    
    // Temperature data
    temperature: {
      high_celsius: 33,
      low_celsius: 26,
      high_fahrenheit: 91,
      low_fahrenheit: 79,
      feels_like_celsius: 38,
      feels_like_fahrenheit: 100
    },
    
    // Weather conditions
    humidity: 85,
    rainfall_probability: 75,
    rainfall_mm: 280,
    uv_index: 8,
    wind_speed_kmh: 12,
    
    // Daily weather pattern
    weather_pattern: {
      morning: {
        condition_en: 'Hot & Humid',
        condition_hi: 'गर्म और आर्द्र',
        temperature_celsius: 28,
        humidity: 80,
        description_en: 'Warm and muggy start to the day',
        description_hi: 'दिन की गर्म और उमस भरी शुरुआत'
      },
      afternoon: {
        condition_en: 'Very Hot',
        condition_hi: 'बहुत गर्म',
        temperature_celsius: 33,
        humidity: 85,
        description_en: 'Peak heat with high humidity',
        description_hi: 'उच्च आर्द्रता के साथ चरम गर्मी'
      },
      evening: {
        condition_en: 'Thunderstorms Likely',
        condition_hi: 'तूफान की संभावना',
        temperature_celsius: 29,
        humidity: 90,
        description_en: 'Afternoon thunderstorms common',
        description_hi: 'दोपहर के तूफान आम हैं'
      }
    },
    
    // Clothing recommendations
    clothing: {
      essential_en: ['Light cotton clothes', 'Umbrella/raincoat', 'Comfortable walking shoes', 'Hat/cap', 'Sunglasses'],
      essential_hi: ['हल्के सूती कपड़े', 'छाता/रेनकोट', 'आरामदायक चलने के जूते', 'टोपी', 'धूप का चश्मा'],
      avoid_en: ['Heavy fabrics', 'Dark colors', 'Leather shoes', 'Tight clothing'],
      avoid_hi: ['भारी कपड़े', 'गहरे रंग', 'चमड़े के जूते', 'तंग कपड़े']
    },
    
    // Activity recommendations
    activities: {
      best_times_en: ['Early morning (6-9 AM)', 'Late evening (6-8 PM)', 'Indoor activities during midday'],
      best_times_hi: ['सुबह जल्दी (6-9 AM)', 'देर शाम (6-8 PM)', 'दोपहर में इनडोर गतिविधियां'],
      outdoor_tips_en: ['Stay hydrated', 'Seek shade frequently', 'Plan indoor activities 11 AM - 4 PM'],
      outdoor_tips_hi: ['हाइड्रेटेड रहें', 'बार-बार छाया की तलाश करें', '11 AM - 4 PM इनडोर गतिविधियों की योजना बनाएं']
    }
  },

  'Hoi An': {
    cityName: 'Hoi An',
    cityName_hi: 'होई एन',
    month: 'August',
    month_hi: 'अगस्त',
    season: 'Hot & Rainy Season',
    season_hi: 'गर्म और बारिश का मौसम',
    
    temperature: {
      high_celsius: 34,
      low_celsius: 25,
      high_fahrenheit: 93,
      low_fahrenheit: 77,
      feels_like_celsius: 40,
      feels_like_fahrenheit: 104
    },
    
    humidity: 82,
    rainfall_probability: 70,
    rainfall_mm: 220,
    uv_index: 9,
    wind_speed_kmh: 15,
    
    weather_pattern: {
      morning: {
        condition_en: 'Warm & Humid',
        condition_hi: 'गर्म और आर्द्र',
        temperature_celsius: 27,
        humidity: 78,
        description_en: 'Pleasant for early morning walks',
        description_hi: 'सुबह की सैर के लिए सुखद'
      },
      afternoon: {
        condition_en: 'Hot & Sunny',
        condition_hi: 'गर्म और धूप',
        temperature_celsius: 34,
        humidity: 82,
        description_en: 'Very hot, seek air conditioning',
        description_hi: 'बहुत गर्म, एयर कंडीशनिंग की तलाश करें'
      },
      evening: {
        condition_en: 'Scattered Showers',
        condition_hi: 'बिखरी हुई बारिश',
        temperature_celsius: 28,
        humidity: 85,
        description_en: 'Evening showers bring relief',
        description_hi: 'शाम की बारिश राहत लाती है'
      }
    },
    
    clothing: {
      essential_en: ['Lightweight breathable fabrics', 'Waterproof jacket', 'Sandals', 'Sun hat', 'Swimwear'],
      essential_hi: ['हल्के सांस लेने वाले कपड़े', 'वाटरप्रूफ जैकेट', 'सैंडल', 'धूप की टोपी', 'स्विमवियर'],
      avoid_en: ['Synthetic materials', 'Heavy jeans', 'Closed shoes all day', 'Long sleeves in midday'],
      avoid_hi: ['सिंथेटिक सामग्री', 'भारी जींस', 'पूरे दिन बंद जूते', 'दोपहर में लंबी आस्तीन']
    },
    
    activities: {
      best_times_en: ['Early morning (5:30-8 AM)', 'Evening (5-7 PM)', 'Night markets after 7 PM'],
      best_times_hi: ['सुबह जल्दी (5:30-8 AM)', 'शाम (5-7 PM)', '7 PM के बाद नाइट मार्केट'],
      outdoor_tips_en: ['Carry water bottle', 'Use sunscreen SPF 30+', 'Take breaks in cafes'],
      outdoor_tips_hi: ['पानी की बोतल ले जाएं', 'SPF 30+ सनस्क्रीन का उपयोग करें', 'कैफे में ब्रेक लें']
    }
  },

  'Da Nang': {
    cityName: 'Da Nang',
    cityName_hi: 'दा नांग',
    month: 'August',
    month_hi: 'अगस्त',
    season: 'Hot Beach Weather',
    season_hi: 'गर्म समुद्री तट का मौसम',
    
    temperature: {
      high_celsius: 35,
      low_celsius: 26,
      high_fahrenheit: 95,
      low_fahrenheit: 79,
      feels_like_celsius: 41,
      feels_like_fahrenheit: 106
    },
    
    humidity: 78,
    rainfall_probability: 65,
    rainfall_mm: 180,
    uv_index: 10,
    wind_speed_kmh: 18,
    
    weather_pattern: {
      morning: {
        condition_en: 'Warm & Breezy',
        condition_hi: 'गर्म और हवादार',
        temperature_celsius: 28,
        humidity: 75,
        description_en: 'Perfect for beach activities',
        description_hi: 'समुद्री तट की गतिविधियों के लिए बिल्कुल सही'
      },
      afternoon: {
        condition_en: 'Very Hot',
        condition_hi: 'बहुत गर्म',
        temperature_celsius: 35,
        humidity: 78,
        description_en: 'Hottest part of the day',
        description_hi: 'दिन का सबसे गर्म हिस्सा'
      },
      evening: {
        condition_en: 'Warm with Sea Breeze',
        condition_hi: 'समुद्री हवा के साथ गर्म',
        temperature_celsius: 30,
        humidity: 80,
        description_en: 'Cooling sea breeze in evening',
        description_hi: 'शाम में ठंडी समुद्री हवा'
      }
    },
    
    clothing: {
      essential_en: ['Beach wear', 'Light cotton shirts', 'Flip-flops', 'Wide-brim hat', 'Rash guard for swimming'],
      essential_hi: ['बीच वियर', 'हल्की सूती शर्ट', 'फ्लिप-फ्लॉप', 'चौड़ी किनारी वाली टोपी', 'तैराकी के लिए रैश गार्ड'],
      avoid_en: ['Black clothing', 'Heavy materials', 'Formal shoes', 'Long pants during day'],
      avoid_hi: ['काले कपड़े', 'भारी सामग्री', 'फॉर्मल जूते', 'दिन के दौरान लंबी पैंट']
    },
    
    activities: {
      best_times_en: ['Early morning beach (6-9 AM)', 'Evening beach (5-7 PM)', 'Indoor sightseeing 10 AM - 4 PM'],
      best_times_hi: ['सुबह जल्दी समुद्र तट (6-9 AM)', 'शाम का समुद्र तट (5-7 PM)', 'इनडोर दर्शनीय स्थल 10 AM - 4 PM'],
      outdoor_tips_en: ['High SPF sunscreen essential', 'Drink coconut water', 'Swim during cooler hours'],
      outdoor_tips_hi: ['उच्च SPF सनस्क्रीन आवश्यक', 'नारियल पानी पिएं', 'ठंडे घंटों में तैरें']
    }
  }
};

// Helper function to get weather data for a specific city
export const getWeatherDataForCity = (cityName) => {
  if (!cityName || typeof cityName !== 'string') {
    return null;
  }
  
  const normalizedCity = cityName.toLowerCase();
  
  if (normalizedCity.includes('hanoi')) {
    return vietnamWeatherData['Hanoi'];
  } else if (normalizedCity.includes('hoi an')) {
    return vietnamWeatherData['Hoi An'];
  } else if (normalizedCity.includes('da nang')) {
    return vietnamWeatherData['Da Nang'];
  }
  
  return null;
};

// Helper function to get temperature in preferred unit
export const getTemperatureDisplay = (tempData, unit = 'celsius', language = 'en') => {
  if (unit === 'fahrenheit') {
    return `${tempData.high_fahrenheit}°F / ${tempData.low_fahrenheit}°F`;
  }
  return `${tempData.high_celsius}°C / ${tempData.low_celsius}°C`;
};

// Helper function to get weather recommendations for time of day
export const getWeatherRecommendations = (weatherData, timeOfDay, language = 'en') => {
  if (!weatherData || !weatherData.weather_pattern[timeOfDay]) {
    return null;
  }
  
  const pattern = weatherData.weather_pattern[timeOfDay];
  return {
    condition: language === 'hi' ? pattern.condition_hi : pattern.condition_en,
    temperature: pattern.temperature_celsius,
    humidity: pattern.humidity,
    description: language === 'hi' ? pattern.description_hi : pattern.description_en
  };
};

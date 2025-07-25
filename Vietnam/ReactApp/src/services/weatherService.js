// Weather Service using OpenWeatherMap API
// For production, you would need to add your API key to environment variables

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'demo_key';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// City coordinates for Vietnam locations
const CITY_COORDINATES = {
  'Hanoi': { lat: 21.0285, lon: 105.8542 },
  'Hoi An': { lat: 15.8801, lon: 108.338 },
  'Da Nang': { lat: 16.0544, lon: 108.2022 }
};

// Fallback weather data for August (in case API is unavailable)
const FALLBACK_WEATHER_DATA = {
  'Hanoi': {
    temperature: { current: 30, feels_like: 35, min: 26, max: 33 },
    humidity: 85,
    pressure: 1013,
    visibility: 8000,
    uv_index: 8,
    wind_speed: 12,
    weather_main: 'Thunderstorm',
    weather_description: 'scattered thunderstorms',
    icon: '11d'
  },
  'Hoi An': {
    temperature: { current: 32, feels_like: 38, min: 25, max: 34 },
    humidity: 82,
    pressure: 1012,
    visibility: 9000,
    uv_index: 9,
    wind_speed: 15,
    weather_main: 'Rain',
    weather_description: 'light rain',
    icon: '10d'
  },
  'Da Nang': {
    temperature: { current: 33, feels_like: 39, min: 26, max: 35 },
    humidity: 78,
    pressure: 1014,
    visibility: 10000,
    uv_index: 10,
    wind_speed: 18,
    weather_main: 'Clear',
    weather_description: 'clear sky',
    icon: '01d'
  }
};

// Function to get current weather data
export const getCurrentWeather = async (cityName) => {
  try {
    const coordinates = CITY_COORDINATES[cityName];
    if (!coordinates) {
      throw new Error(`Coordinates not found for ${cityName}`);
    }

    // If no API key is provided, use fallback data
    if (WEATHER_API_KEY === 'demo_key') {
      console.log(`Using fallback weather data for ${cityName}`);
      return {
        success: true,
        data: FALLBACK_WEATHER_DATA[cityName],
        source: 'fallback'
      };
    }

    const response = await fetch(
      `${WEATHER_BASE_URL}/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      data: {
        temperature: {
          current: Math.round(data.main.temp),
          feels_like: Math.round(data.main.feels_like),
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max)
        },
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: data.visibility,
        wind_speed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        weather_main: data.weather[0].main,
        weather_description: data.weather[0].description,
        icon: data.weather[0].icon
      },
      source: 'api'
    };

  } catch (error) {
    console.warn(`Weather API failed for ${cityName}, using fallback data:`, error.message);
    return {
      success: true,
      data: FALLBACK_WEATHER_DATA[cityName],
      source: 'fallback',
      error: error.message
    };
  }
};

// Function to get UV Index (requires separate API call)
export const getUVIndex = async (cityName) => {
  try {
    const coordinates = CITY_COORDINATES[cityName];
    if (!coordinates || WEATHER_API_KEY === 'demo_key') {
      // Return fallback UV data
      const fallbackUV = { 'Hanoi': 8, 'Hoi An': 9, 'Da Nang': 10 };
      return { success: true, uv_index: fallbackUV[cityName] || 8, source: 'fallback' };
    }

    const response = await fetch(
      `${WEATHER_BASE_URL}/uvi?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`UV API error: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, uv_index: Math.round(data.value), source: 'api' };

  } catch (error) {
    console.warn(`UV API failed for ${cityName}:`, error.message);
    const fallbackUV = { 'Hanoi': 8, 'Hoi An': 9, 'Da Nang': 10 };
    return { success: true, uv_index: fallbackUV[cityName] || 8, source: 'fallback' };
  }
};

// Function to get weather icon URL
export const getWeatherIconUrl = (iconCode, size = '2x') => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

// Function to get weather recommendations based on current conditions
export const getWeatherRecommendations = (weatherData, language = 'en') => {
  const { temperature, humidity, weather_main } = weatherData;
  
  const recommendations = {
    clothing: [],
    activities: [],
    health: []
  };

  // Temperature-based recommendations
  if (temperature.current > 32) {
    recommendations.clothing.push(
      language === 'hi' ? 'हल्के रंग के कपड़े पहनें' : 'Wear light-colored clothing'
    );
    recommendations.health.push(
      language === 'hi' ? 'बहुत पानी पिएं' : 'Drink plenty of water'
    );
  }

  // Humidity-based recommendations
  if (humidity > 80) {
    recommendations.clothing.push(
      language === 'hi' ? 'सांस लेने वाले कपड़े चुनें' : 'Choose breathable fabrics'
    );
  }

  // Weather condition-based recommendations
  if (weather_main.includes('Rain') || weather_main.includes('Thunderstorm')) {
    recommendations.clothing.push(
      language === 'hi' ? 'छाता या रेनकोट ले जाएं' : 'Carry umbrella or raincoat'
    );
    recommendations.activities.push(
      language === 'hi' ? 'इनडोर गतिविधियों की योजना बनाएं' : 'Plan indoor activities'
    );
  }

  // General hot weather recommendations
  if (temperature.current > 30) {
    recommendations.activities.push(
      language === 'hi' ? 'सुबह जल्दी या शाम को बाहर जाएं' : 'Go out early morning or evening'
    );
  }

  return recommendations;
};

// Function to determine if weather is suitable for outdoor activities
export const isGoodForOutdoorActivities = (weatherData) => {
  const { temperature, weather_main } = weatherData;
  
  // Not good if too hot, raining, or stormy
  if (temperature.current > 35) return false;
  if (weather_main.includes('Rain')) return false;
  if (weather_main.includes('Thunderstorm')) return false;
  
  return true;
};

// Function to get localized weather description
export const getLocalizedWeatherDescription = (weatherData, language = 'en') => {
  const { weather_main, weather_description } = weatherData;
  
  const translations = {
    'Clear': { en: 'Clear Sky', hi: 'साफ आसमान' },
    'Clouds': { en: 'Cloudy', hi: 'बादल' },
    'Rain': { en: 'Rainy', hi: 'बारिश' },
    'Thunderstorm': { en: 'Thunderstorm', hi: 'तूफान' },
    'Drizzle': { en: 'Light Rain', hi: 'हल्की बारिश' },
    'Mist': { en: 'Misty', hi: 'धुंधला' },
    'Haze': { en: 'Hazy', hi: 'धुंधला' }
  };
  
  return translations[weather_main]?.[language] || weather_description;
};

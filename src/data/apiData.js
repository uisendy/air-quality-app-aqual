const APP_ID = '7771f6d8da515cc8943b9f6d81e4afc8';
const AP_BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const FORCAST_AP_BASE_URL =
  'http://api.openweathermap.org/data/2.5/air_pollution/forecast?';
const GEO_BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
const limit = 5;

export const geoURL = (location) =>
  `${GEO_BASE_URL}q=${location}&limit=${limit}&appid=${APP_ID}`;

export const airQualityURL = (lat, lon) =>
  `${AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

export const forcastAqURL = (lat, lon) =>
  `${FORCAST_AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

export const aqiRatings = [
  {
    aqi: 1,
    color: 'rgb(0, 128, 0, 0.5)',
    borderColor: 'rgb(0, 128, 0)',
    rating: 'Excellent',
    comment: 'No health implications.',
  },
  {
    aqi: 2,
    color: 'rgb(156, 234, 82, 0.5)',
    borderColor: 'rgb(156, 234, 82)',
    rating: 'Good',
    comment:
      'Some pollutants may slightly affect very few hypersensitive individuals.',
  },
  {
    aqi: 3,
    color: 'rgb(255, 165, 0, 0.5)',
    borderColor: 'rgb(255, 165, 0)',
    rating: 'Moderately Polluted',
    comment:
      'Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent.',
  },
  {
    aqi: 4,
    color: 'rgb(232, 96, 47, 0.5)',
    borderColor: 'rgb(232, 96, 47)',
    rating: 'Heavily Polluted',
    comment:
      'Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected.',
  },
  {
    aqi: 5,
    color: 'rgb(255, 0, 0, 0.5)',
    borderColor: 'rgb(255, 0, 0)',
    rating: 'Severely Polluted',
    comment:
      'Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities.',
  },
];

export default aqiRatings;

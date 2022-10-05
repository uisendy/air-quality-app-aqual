const APP_ID = '7771f6d8da515cc8943b9f6d81e4afc8';
const AP_BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const GEO_BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
const limit = 5;

export const geoURL = (location) =>
  `${GEO_BASE_URL}q=${location}&limit=${limit}&appid=${APP_ID}`;

export const airQualityURL = (lat, lon) =>
  `${AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

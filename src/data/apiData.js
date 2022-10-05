const APP_ID = '7771f6d8da515cc8943b9f6d81e4afc8';
const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
const limit = 5;

export const geoURL = (location) =>
  `${BASE_URL}q=${location}&limit=${limit}&appid=${APP_ID}`;

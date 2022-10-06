import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './airQualitySlice';
import searchLocationsReducer from './searchLocationsSlice';
import fetchForcastAq from './forcastAqSlice';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    locations: searchLocationsReducer,
    forcastAq: fetchForcastAq,
  },
});

export default store;

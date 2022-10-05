import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './airQualitySlice';
import searchLocationsReducer from './searchLocationsSlice';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    locations: searchLocationsReducer,
  },
});

export default store;

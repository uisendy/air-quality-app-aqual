import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './airQualitySlice';
import searchLocationsReducer from './searchLocationsSlice';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    searchLocations: searchLocationsReducer,
  },
});

export default store;

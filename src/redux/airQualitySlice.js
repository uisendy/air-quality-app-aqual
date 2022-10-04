import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  airQuality: {
    coord: {
      lon: -0.092,
      lat: 51.5156,
    },
    list: [
      {
        main: {
          aqi: 2,
        },
        components: {
          co: 178.58,
          no: 0.64,
          no2: 10.11,
          o3: 82.25,
          so2: 6.2,
          pm2_5: 2.59,
          pm10: 3.63,
          nh3: 0.12,
        },
        dt: 1664889997,
      },
    ],
  },
  status: 'idle',
  error: 'null',
};

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {},
});

export const getAirQuality = (state) => state.airQuality.airQuality;

export default airQualitySlice.reducer;

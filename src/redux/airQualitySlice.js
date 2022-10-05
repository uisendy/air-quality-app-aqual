import { nanoid, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { airQualityURL } from '../data/apiData';

const initialState = {
  airQuality: {},
  status: 'idle',
  error: 'null',
};

export const fetchAirQuality = createAsyncThunk(
  'airQuality/fetchAirQuality',
  async (coordinates) => {
    console.log(coordinates);
    try {
      const response = await axios.get(
        airQualityURL(coordinates.lat, coordinates.lon),
      );
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {},
});

export const getAirQuality = (state) => state.airQuality.airQuality;

export default airQualitySlice.reducer;

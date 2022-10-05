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
  extraReducers(builder) {
    builder
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.airQuality = action.payload;
      })
      .addCase(fetchAirQuality.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAirQuality = (state) => state.airQuality.airQuality;

export default airQualitySlice.reducer;

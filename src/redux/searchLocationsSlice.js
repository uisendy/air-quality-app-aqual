import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: { location: 'Abuja' },
  status: 'idle',
  error: 'null',
};

const searchLocationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
});

export const getSearchLocations = (state) => state.location.location;

export default searchLocationsSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const homeslice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    isLocationSeleted: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLocationSelected: (state, action) => {
      state.isLocationSeleted = action.payload;
    },
  },
});

//actions
export const {
  setLoading,
  setrestaurants,
  setcategories,
  setfoods,
  setLocationSelected,
} = homeslice.actions;

export default homeslice.reducer;

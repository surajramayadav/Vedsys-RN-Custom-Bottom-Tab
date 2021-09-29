import {createSlice} from '@reduxjs/toolkit';

export const loginslice = createSlice({
  name: 'login',
  initialState: {
    isLogged: false,
    coordinates: {
      lat: null,
      lng: null,
    },
    user: [],
    address: [],
    userHabits: {
      smoke: false,
      walk: false,
      walkTimes: null,
      grocery: false,
      groceryTimes: null,
      prescription: false,
    },
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },

    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setUserHabits: (state, action) => {
      console.log('setUserHabits', state, action);
      state.userHabits = {...state.userHabits, ...action.payload};
    },
  },
});

//actions
export const {setIsLogged, setUser, setCoordinates, setAddress, setUserHabits} =
  loginslice.actions;

export default loginslice.reducer;

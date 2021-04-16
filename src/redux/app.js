import { createSlice } from '@reduxjs/toolkit';
import { getUserAuthData } from './auth';

const slice = createSlice({
  name: 'app',
  initialState: {
    initialized: false,
  },
  reducers: {
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
});

export const { setInitialized } = slice.actions;

export const initializeApp = () => async (dispatch) => {
  await dispatch(getUserAuthData());
  dispatch(setInitialized());
};

export default slice.reducer;

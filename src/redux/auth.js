import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../components/api/api';

const slice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    authWrang: false,
  },
  reducers: {
    setAuthUserData: (state, action) => {
      const { id, login, email, isAuth } = action.payload;
      state.userId = id;
      state.login = login;
      state.email = email;
      state.isAuth = isAuth;
    },
    setAuthWrang: (state, action) => {
      state.authWrang = action.payload;
    },
  },
});

export const { setAuthUserData, setAuthWrang } = slice.actions;

export const getUserAuthData = () => async (dispatch) => {
  const { data } = await authAPI.me();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData({ id, login, email, isAuth: true }));
  }
};

export const login = (email, password, rememberMe) => (dispatch) => {
  dispatch(setAuthWrang(false));
  authAPI.login(email, password, rememberMe).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(getUserAuthData());
    } else {
      dispatch(setAuthWrang(true));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData({ id: null, login: null, email: null, isAuth: false })
      );
    }
  });
};

export default slice.reducer;

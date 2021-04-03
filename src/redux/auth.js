import { createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../components/api/api'

const slice = createSlice({
  name: 'profile',
  initialState: {
    userId: null,
    login: null,
    email: null,
    isAuth: false
  },
  reducers: {
    setAuthUserData: (state, action) => {
      const { id, login, email, isAuth } = action.payload
      console.log(id, login, email, isAuth)
      state.userId = id
      state.login = login
      state.email = email
      state.isAuth = isAuth
    }
  }
})

export const { setAuthUserData } = slice.actions

export const getUserAuthData = () => dispatch => {
  authAPI.me()
    .then(({ data }) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setAuthUserData({ id, login, email, isAuth: true }))
      }
    })
}

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe)
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(getUserAuthData())
      }
    })
}

export const logout = () => dispatch => {
  authAPI.logout()
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData({ id: null, login: null, email: null, isAuth: false }))
      }
    })
}

export default slice.reducer
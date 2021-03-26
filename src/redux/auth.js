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
      const { id, login, email } = action.payload
      state.userId = id
      state.login = login
      state.email = email
      state.isAuth = true
    }
  }
})

export const { setAuthUserData } = slice.actions

export const getUserAuthData = () => dispatch => {
  authAPI.me()
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data))
      }
    })
}

export default slice.reducer
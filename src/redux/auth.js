import { createSlice } from '@reduxjs/toolkit'

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

export default slice.reducer
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    follow: (state, action) => {
      state.users.map(x => {
        if (x.id === action.payload) {
          x.followed = true
        }
        return x
      })
    },
    unFollow: (state, action) => {
      state.users.map(x => {
        if (x.id === action.payload) {
          x.followed = false
        }
        return x
      })
    }
  }
})

export const { follow, unFollow, setUsers } = slice.actions
export default slice.reducer
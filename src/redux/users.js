import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageCount: 25,
    pageSize: 50,
    currentPage: 1,
    loading: true,
    following: false
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
      state.loading = false
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
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
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setFollowing: (state, action) => {
      state.following = action.payload
    }
  }
})

export const { follow, unFollow, setUsers, setCurrentPage, setLoading, setFollowing } = slice.actions
export default slice.reducer
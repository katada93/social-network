import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../components/api/api";

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageCount: 25,
    pageSize: 50,
    currentPage: 1,
    loading: true,
    following: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
      state.loading = false
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    acceptFollow: (state, action) => {
      state.users.map(user => {
        if (user.id === action.payload) {
          user.followed = true
        }
        return user
      })
    },
    acceptUnFollow: (state, action) => {
      state.users.map(user => {
        if (user.id === action.payload) {
          user.followed = false
        }
        return user
      })
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setFollowing: (state, action) => {
      const { followProgress, userId } = action.payload
      followProgress ? state.following = userId : state.following = null
    }
  }
})

export const { acceptFollow, acceptUnFollow, setUsers, setCurrentPage, setLoading, setFollowing } = slice.actions

export const fetchUsers = (pageSize, currentPage) => async dispatch => {
  dispatch(setLoading(true))
  const { items } = await userAPI.getUsers(pageSize, currentPage)
  dispatch(setUsers(items))
}

export const unFollow = (userId) => dispatch => {
  dispatch(setFollowing({ followProgress: true, userId }))
  userAPI.unFollow(userId)
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(acceptUnFollow(userId))
      }
      dispatch(setFollowing({ followProgress: false, userId: userId }))
    })
}

export const follow = (userId) => dispatch => {
  dispatch(setFollowing({ followProgress: true, userId }))
  userAPI.follow(userId)
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(userId))
      }
      dispatch(setFollowing({ followProgress: false, userId: userId }))
    })
}

export default slice.reducer
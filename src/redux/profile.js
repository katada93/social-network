import { createSlice } from '@reduxjs/toolkit'
import { profileAPI } from '../components/api/api'

const slice = createSlice({
  name: 'profile',
  initialState: {
    posts: [
      { id: 1, message: "My first post", likesCount: 17 },
      { id: 2, message: "My second post", likesCount: 12 },
      { id: 3, message: "My third post", likesCount: 24 }
    ],
    profile: null,
    status: ''
  },
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: state.posts.length + 1,
        message: action.payload,
        likesCount: Math.floor(Math.random() * 100)
      }
      state.posts.push(newPost)
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

export const { addPost, setUserProfile, setStatus } = slice.actions

export const getProfile = (userId) => async dispatch => {
  const { data } = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async dispatch => {
  const { data } = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(({ data }) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
}

export default slice.reducer
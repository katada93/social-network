import { createSlice } from '@reduxjs/toolkit'

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
    rm: state => {
      state.arr.pop()
    },
    addValue: (state, action) => {
      state.arr.push(action.payload)
    }
  }
})

export const { addPost, rm, addValue } = slice.actions

export default slice.reducer
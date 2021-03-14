import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg', followed: true, fullName: 'Muslim', status: 'Is Married', location: { city: 'Grozny', country: 'Russia' } },
      { id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg', followed: false, fullName: 'Isa', status: 'Qwerty', location: { city: 'Rostov', country: 'Russia' } },
      { id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg', followed: false, fullName: 'Lecha', status: 'Qwerty', location: { city: 'Rostov', country: 'Russia' } },
      { id: 4, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg', followed: true, fullName: 'Musa', status: 'Asdfgh', location: { city: 'Moscov', country: 'Russia' } }
    ]
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

export const { follow, unFollow } = slice.actions
export default slice.reducer
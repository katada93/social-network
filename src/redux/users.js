import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
    setUsers: (state, action) => {
      state.items.push(action.payload)
    }
  }
})
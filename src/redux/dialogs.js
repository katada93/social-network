import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'dialogs',
  initialState: {
    dialogs: [
      { id: 1, name: 'Isa' },
      { id: 2, name: 'Musa' },
      { id: 3, name: 'Akhmad' },
      { id: 4, name: 'Mansur' },
      { id: 5, name: 'Islam' },
      { id: 6, name: 'Aslan' }
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Hello, I`m fine' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'My name is Sena!!!' }
    ]
  },
  reducers: {
    sendMessage: (state, action) => {
      const body = {
        id: state.messages.length + 1,
        message: action.payload
      }
      state.messages.push(body)
    }
  }
})

export const { sendMessage } = slice.actions
export default slice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    arr: [1, 2, 3]
  },
  reducers: {
    add: state => {
      state.arr.push(1)
    },
    rm: state => {
      state.arr.pop()
    },
    addValue: (state, action) => {
      state.arr.push(action.payload)
    }
  }
})

export const { add, rm, addValue } = counterSlice.actions

export const asyncAction = () => async (dispatch) => {
  setTimeout(() => dispatch(addValue(5)), 2000)
}

export default counterSlice.reducer
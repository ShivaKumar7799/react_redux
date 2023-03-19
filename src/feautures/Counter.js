import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : "user",
  initialState : {value : 0},
  reducers : {
    increment : (state,action) => {
      state.value = action.payload
    },
    decrement : (state, action) => {
      state.value = state.value - 1
    }
  }
})

export {counterSlice}

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer

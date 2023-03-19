import { createSlice } from "@reduxjs/toolkit";

const secondCounterSlice = createSlice({
  name : "secondCounter",
  initialState : {
    value : 20
  },
  reducers : {
    secondIncrement : (state,action) => {
      state.value = action.payload
    },
    secondDecrement : (state,action) => {
      state.value = state.value - 1
    }
  }
})

export {secondCounterSlice}

export const {secondIncrement, secondDecrement} = secondCounterSlice.actions
export default secondCounterSlice.reducer
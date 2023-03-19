import { createSlice } from "@reduxjs/toolkit";

const apiDataSlice = createSlice({
  name : "apiData",
  initialState : {
    value : {
      getData : []
    }
  },
  reducers : {
    saveApiData : (state,action) => {
      state.value.getData = action.payload
    }
  }
})

export {apiDataSlice}

export const {saveApiData} = apiDataSlice.actions

export default apiDataSlice.reducer
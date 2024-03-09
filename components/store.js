import { createSlice } from "@reduxjs/toolkit";

export const appChatSlice = createSlice({
  name: "appchat",
  initialState: {
    wData: null,
    unit: 'c',
    city: 'mumbai'
  },
  reducers: {

    setWData: (state, action) => {
      state.wData = action.payload;
    },

    setUnit: (state, action) => {
      state.unit = action.payload;
    },

    setCity: (state, action)=> {
      state.city = action.payload;
    },
  },
});

export const {
  setWData,
  setUnit,
  setCity
} = appChatSlice.actions;
export default appChatSlice.reducer;

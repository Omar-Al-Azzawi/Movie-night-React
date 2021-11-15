import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: [],
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
  },
});
export const { addToWatchList } = watchSlice.actions;
export default watchSlice.reducer;

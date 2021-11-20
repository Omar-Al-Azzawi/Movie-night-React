import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    removeFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
  },
});
export const { addToWatchList, removeFromWatchList } = watchSlice.actions;
export default watchSlice.reducer;

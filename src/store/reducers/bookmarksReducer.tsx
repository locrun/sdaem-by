import { createSlice } from "@reduxjs/toolkit";

type Bookmarks = {
  isActive: number | null;
};

const initialState: Bookmarks = {
  isActive: null,
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setIsFavorite(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const { setIsFavorite } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;

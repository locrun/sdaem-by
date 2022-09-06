import { createSlice } from "@reduxjs/toolkit";

type IRecommendState = {
  isClicked: boolean;
};

const initialState: IRecommendState = {
  isClicked: false,
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setIsClicked(state, action) {
      state.isClicked = action.payload;
    },
  },
});

export const { setIsClicked } = recommendSlice.actions;
export default recommendSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type IModalState = {
  isActive: boolean;
};

const initialState: IModalState = {
  isActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = modalSlice.actions;
export default modalSlice.reducer;

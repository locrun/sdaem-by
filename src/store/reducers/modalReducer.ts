import { createSlice } from "@reduxjs/toolkit";

type IModalState = {
  isActive: boolean;
  flag: string;
};

const initialState: IModalState = {
  isActive: false,
  flag: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsActive(state, action) {
      state.isActive = action.payload;
      if (action.payload === false) {
        document.body.classList.remove("hidden");
      }
    },
    setFlag(state, action) {
      state.flag = action.payload;
    },
  },
});

export const { setIsActive, setFlag } = modalSlice.actions;
export default modalSlice.reducer;

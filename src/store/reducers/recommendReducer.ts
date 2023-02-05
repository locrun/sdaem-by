import { createSlice } from "@reduxjs/toolkit";
import { recommend } from "../../data/recommendate";

export interface IPropsRecommended {
  id: number;
  name: string;
  key: string;
  room?: string;
  area?: string;
  [index: string]: string | number | undefined;
}

type IRecommendState = {
  active: {
    isClicked: boolean;
    id?: number;
    data: IPropsRecommended[];
  };

  flag: string;
};

const initialState: IRecommendState = {
  active: {
    isClicked: false,
    id: 0,
    data: recommend,
  },
  flag: "null",
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setCurrentData(state, action) {
      state.active = action.payload;
      if (state.active.isClicked) {
        const selected = recommend.filter(
          (item) => item.id === state.active.id
        );
        state.active.data = selected;
      }
      if (!state.active.isClicked) {
        state.active.data = recommend;
      }
    },
    setFlag(state, action) {
      state.flag = action.payload;
    },
  },
});

export const { setCurrentData, setFlag } = recommendSlice.actions;
export default recommendSlice.reducer;

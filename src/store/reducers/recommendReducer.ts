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
};

const initialState: IRecommendState = {
  active: {
    isClicked: false,
    id: 0,
    data: recommend,
  },
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
  },
});

export const { setCurrentData } = recommendSlice.actions;
export default recommendSlice.reducer;

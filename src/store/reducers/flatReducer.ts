import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { flatFetch } from "../thunks/flatThunk";
import { IFlats } from "../../Interfaces/IFlats";

type IFlatState = {
  flat: IFlats[];
  loading: boolean;
  error: string | null;

  values: {
    cityName: null | string;
    rooms: null | string;
    minPrice: null | string;
    maxPrice: null | string;
    area: null | string;
    metro: null | string;
  };

  minsk: {
    metro: null | string;
    area: null | string;
  };
};

const initialState: IFlatState = {
  flat: [],
  loading: false,
  error: null,
  values: {
    cityName: "Минск",
    rooms: null,
    minPrice: null,
    maxPrice: null,
    area: null,
    metro: null,
  },
  minsk: {
    metro: null,
    area: null,
  },
};
const flatSlice = createSlice({
  name: "flat",
  initialState,
  reducers: {
    getFilterValues(state, action) {
      console.log(action);
      state.values = action.payload;
    },
    getMinskValues(state, action) {
      console.log(action);
      state.minsk = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(flatFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(flatFetch.fulfilled, (state, action) => {
        state.flat = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getFilterValues, getMinskValues } = flatSlice.actions;
export default flatSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

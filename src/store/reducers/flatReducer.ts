import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchFlat } from "../thunks/flatThunk";
import { IFlats } from "../../Interfaces/IFlats";

type IFlatState = {
  flat: IFlats[];
  loading: boolean;
  error: string | null;
  flatsData: {
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
  flatsData: {
    cityName: null,
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
    getDataFlats(state, action) {
      console.log(action);
      state.flatsData = action.payload;
    },
    getMinskValues(state, action) {
      state.minsk = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlat.fulfilled, (state, action) => {
        state.flat = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getDataFlats, getMinskValues } = flatSlice.actions;
export default flatSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

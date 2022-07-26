import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchBaths } from "../thunks/bathsThunk";
import { IBaths } from "../../Interfaces/IBaths";

type IBathsState = {
  baths: IBaths[];
  loading: boolean;
  error: string | null;
  bathsData: {
    cityName: null | string;
    type: null | string;
    minPrice: null | string;
    maxPrice: null | string;
    rooms: null | string;
  };
};

const initialState: IBathsState = {
  baths: [],
  loading: false,
  error: null,
  bathsData: {
    cityName: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    rooms: null,
  },
};
const bathsSlice = createSlice({
  name: "baths",
  initialState,
  reducers: {
    setBaths(state, action) {
      state.bathsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBaths.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBaths.fulfilled, (state, action) => {
        state.baths = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setBaths } = bathsSlice.actions;
export default bathsSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchCottages } from "../thunks/cottagesThunk";
import { ICottages } from "../../Interfaces/ICottages";

type ICottagesState = {
  cottages: ICottages[];
  loading: boolean;
  error: string | null;
  cottagesData: {
    cityName: null | string;
    type: null | string;
    minPrice: null | string;
    maxPrice: null | string;
    rooms: null | string;
  };
};

const initialState: ICottagesState = {
  cottages: [],
  loading: false,
  error: null,
  cottagesData: {
    cityName: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    rooms: null,
  },
};
const cottagesSlice = createSlice({
  name: "cottages",
  initialState,
  reducers: {
    setCottages(state, action) {
      state.cottagesData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCottages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCottages.fulfilled, (state, action) => {
        state.cottages = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCottages } = cottagesSlice.actions;
export default cottagesSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

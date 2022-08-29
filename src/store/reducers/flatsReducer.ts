import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchFlats } from "../thunks/flatThunk";
import { IResponseData } from "../../Interfaces/IResponseData";

type IFlatsState = {
  flats: IResponseData[];
  loading: boolean;
  error: string | null;
};

const initialState: IFlatsState = {
  flats: [],
  loading: false,
  error: null,
};
const flatsSlice = createSlice({
  name: "flats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlats.fulfilled, (state, action) => {
        state.flats = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default flatsSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchBaths } from "../thunks/bathsThunk";
import { IResponseData } from "../../Interfaces/IResponseData";

type IBathsState = {
  baths: IResponseData[];
  loading: boolean;
  error: string | null;
};

const initialState: IBathsState = {
  baths: [],
  loading: false,
  error: null,
};
const bathsSlice = createSlice({
  name: "baths",
  initialState,
  reducers: {},
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

export default bathsSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchCottages } from "../thunks/cottagesThunk";
import { IResponseData } from "../../Interfaces/IResponseData";

type ICottagesState = {
  cottages: IResponseData[];
  loading: boolean;
  error: string | null;
};

const initialState: ICottagesState = {
  cottages: [],
  loading: false,
  error: null,
};
const cottagesSlice = createSlice({
  name: "cottages",
  initialState,
  reducers: {},
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

export default cottagesSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

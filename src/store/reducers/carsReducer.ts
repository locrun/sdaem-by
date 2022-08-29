import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchCars } from "../thunks/carsThunk";
import { IResponseData } from "../../Interfaces/IResponseData";

type ICarsState = {
  cars: IResponseData[];
  loading: boolean;
  error: string | null;
};

const initialState: ICarsState = {
  cars: [],
  loading: false,
  error: null,
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

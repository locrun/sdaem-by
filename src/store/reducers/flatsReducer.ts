import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { fetchFlats } from "../thunks/flatThunk";
import { IFlats } from "../../Interfaces/IFlats";

type IFlatsState = {
  flats: IFlats[];
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

  sortValue: {
    value: string;
    label: string;
  };

  minsk: {
    metro: null | string;
    area: null | string;
  };
  active: string;
};

const initialState: IFlatsState = {
  flats: [],
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
  sortValue: {
    value: "По умолчанию",
    label: "По умолчанию",
  },
  minsk: {
    metro: null,
    area: null,
  },
  active: "tiles",
};
const flatsSlice = createSlice({
  name: "flats",
  initialState,
  reducers: {
    setFlats(state, action) {
      state.flatsData = action.payload;
    },
    setMinsk(state, action) {
      state.minsk = action.payload;
    },
    toggleProductsCards(state, action) {
      state.active = action.payload;
    },
    setValueToSortByPrice(state, action) {
      state.sortValue = action.payload;
    },
  },
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

export const {
  setFlats,
  setMinsk,
  toggleProductsCards,
  setValueToSortByPrice,
} = flatsSlice.actions;
export default flatsSlice.reducer;
function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

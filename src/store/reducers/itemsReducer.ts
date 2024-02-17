import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";
import { api } from "../../constants/api";

type RequestStatus = "init" | "loading" | "success" | "error";
export type SortType = "price-up" | "price-down" | "none";

interface IItemsState {
  items: IResponseData[];
  filters: IItemsStateFilters | null;
  status: RequestStatus;
  sort: SortType;
  errorMessage: string | null;
}

export interface IItemsStateFilters {
  city?: string;
  area?: string;
  metro?: string;
  type?: string;
  room?: string;
  priceMin?: string;
  priceMax?: string;
  capacity?: string;
}

const initialState: IItemsState = {
  items: [],
  status: "init",
  sort: "none",
  errorMessage: null,
  filters: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    resetFilters(state) {
      state.filters = null;
    },
    setFilterData(state, action: PayloadAction<IItemsStateFilters>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
        state.filters = null;
        state.sort = "none";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.errorMessage = String(action.payload);
        state.status = "error";
      }),
});

export type ItemType = "flats" | "cars" | "baths" | "cottages";

interface FetchItemsParams {
  type: ItemType;
}

export const fetchItems = createAsyncThunk<IResponseData[], FetchItemsParams>(
  "fetchItems",
  async (params, { rejectWithValue }) => {
    const path = api[params.type];

    const response = await fetch(path);

    if (!response.ok) {
      const text = await response.text();
      return rejectWithValue(text);
    }

    const data = await response.json();
    return data;
  }
);

export const { reducer: itemsReducer, actions: itemActions } = itemsSlice;

import { createSlice } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";

type IFilterState = {
  stateData: {
    id: number | null;
    city: string;
    area: string;
    metro: string;
    type?: string;
    room: string;
    priceMin: string;
    priceMax: string;
    capacity: string;
  };

  sortValue: {
    value: string;
    label: string;
  };
  filteredData: IResponseData[];
  duplicateData: IResponseData[];
  active: string;
};

const initialState: IFilterState = {
  stateData: {
    id: null,
    city: "",
    room: "",
    area: "",
    metro: "",
    type: "",
    priceMin: "",
    priceMax: "",
    capacity: "",
  },

  sortValue: {
    value: "По умолчанию",
    label: "По умолчанию",
  },

  filteredData: [],
  duplicateData: [],
  active: "tiles",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedData(state, action) {
      state.stateData = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    setDublicateData(state, action) {
      state.duplicateData = action.payload;
    },
    toggleProductsCards(state, action) {
      state.active = action.payload;
    },
    selectedValueForSort(state, action) {
      state.sortValue = action.payload;
    },

    resetFilter(state) {
      state.sortValue = { value: "По умолчанию", label: "По умолчанию" };
      state.stateData.city = "";
      state.stateData.room = "";
      state.stateData.area = "";
      state.stateData.metro = "";
      state.stateData.type = "";
      state.stateData.priceMin = "";
      state.stateData.priceMax = "";
      state.stateData.capacity = "";
    },
  },
});

export const {
  setSelectedData,
  setFilteredData,
  resetFilter,
  setDublicateData,
  toggleProductsCards,
  selectedValueForSort,
} = filterSlice.actions;
export default filterSlice.reducer;

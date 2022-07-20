import { COTTAGES_URL } from "../../constants/cottagesUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Cottages = {
  id: number;
  image: string;
  city: string;
  type: string;
  price: string;
  capacity: string;
  rooms: string;
  square: string;
  label: string;
  description: string;
  cottages: [];
};

export const fetchCottages = createAsyncThunk<
  Cottages[],
  undefined,
  { rejectValue: string }
>("cottages/fetchCottages", async (_, { rejectWithValue }) => {
  const response = await fetch(`${COTTAGES_URL}`);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

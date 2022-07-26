import { BATHS_URL } from "../../constants/bathsUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Baths = {
  items: {
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
  }[];

  baths: [];
  bathsOptions: [{ value: string; label: string }];
};

export const fetchBaths = createAsyncThunk<
  Baths[],
  undefined,
  { rejectValue: string }
>("baths/fetchCottages", async (_, { rejectWithValue }) => {
  const response = await fetch(`${BATHS_URL}`);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

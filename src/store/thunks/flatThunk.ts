import { FLAT_URL } from "../../constants/flatUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

type flat = {
  id: number;
  city: string;
  address: string;
  metro: string;
  area: string;
  image: string;
  price: string;
  capacity: string;
  rooms: string;
  square: string;
  label: string;
  description: string;
  contacts: {
    avatar: string;
    title: string;
    name: string;
    tel: string;
    email: string;
  };
  socials: string[];
  flat: [];
};

export const flatFetch = createAsyncThunk<
  flat[],
  string | undefined,
  { rejectValue: string }
>("flat/flatFetch", async (city, { rejectWithValue }) => {
  const response = await fetch(`${FLAT_URL}`);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

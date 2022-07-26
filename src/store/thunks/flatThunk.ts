import { FLAT_URL } from "../../constants/flatUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Flats = {
  items: {
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
  }[];

  flats: [];
  capacityOptions: [{ value: string; label: string }];
  areaOptions: [{ value: string; label: string }];
  metroOptions: [{ value: string; label: string }];
  cityOptions: [{ value: string; label: string }];
  roomsOptions: [{ value: string; label: string }];
  kitchen: string[];
  games: string[];
};

export const fetchFlats = createAsyncThunk<
  Flats[],
  string | undefined,
  { rejectValue: string }
>("flat/fetchFlat", async (city, { rejectWithValue }) => {
  const response = await fetch(`${FLAT_URL}`);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

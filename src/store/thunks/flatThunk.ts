import { FLATS } from "../../constants/query";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";

export const fetchFlats = createAsyncThunk<
  IResponseData[],
  string | undefined,
  { rejectValue: string }
>("flat/fetchFlats", async (city, { rejectWithValue }) => {
  const response = await fetch(FLATS);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

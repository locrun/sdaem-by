import { api } from "../../constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IResponseData } from "../../Interfaces/IResponseData";

export const fetchBaths = createAsyncThunk<
  IResponseData[],
  undefined,
  { rejectValue: string }
>("baths/fetchBaths", async (_, { rejectWithValue }) => {
  const response = await fetch(api.baths);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

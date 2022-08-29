import { COTTAGES } from "../../constants/query";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";

export const fetchCottages = createAsyncThunk<
  IResponseData[],
  undefined,
  { rejectValue: string }
>("cottages/fetchCottages", async (_, { rejectWithValue }) => {
  const response = await fetch(COTTAGES);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

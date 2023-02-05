import { api } from "../../constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponseData } from "../../Interfaces/IResponseData";

export const fetchCars = createAsyncThunk<
  IResponseData[],
  undefined,
  { rejectValue: string }
>("cars/fetchCars", async (_, { rejectWithValue }) => {
  const response = await fetch(api.cars);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

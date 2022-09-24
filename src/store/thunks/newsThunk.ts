import { api } from "../../constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

type News = {
  id: number;
  title: string;
  previewText: string;
  fullText: string;
  image: string;
  date: string;
  news: [];
};

export const fetchNews = createAsyncThunk<
  News[],
  undefined,
  { rejectValue: string }
>("news/fetchNews", async (_, { rejectWithValue }) => {
  const response = await fetch(api.news);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

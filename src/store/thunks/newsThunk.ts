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
  number,
  { rejectValue: string }
>("news/fetchNews", async (pageCount, { rejectWithValue }) => {
  const response = await fetch(
    `https://62c1f527eff7f7856f17e0ab.mockapi.io/api/news/sdaem-by?page=${pageCount}&limit=9`
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

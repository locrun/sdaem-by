import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import flatReducer from "./reducers/flatReducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    flat: flatReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

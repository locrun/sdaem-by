import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import flatsReducer from "./reducers/flatsReducer";
import cottagesReducer from "./reducers/cottagesReducer";
import bathsReducer from "./reducers/bathsReducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    flats: flatsReducer,
    cottages: cottagesReducer,
    baths: bathsReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

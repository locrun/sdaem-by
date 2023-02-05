import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import flatsReducer from "./reducers/flatsReducer";
import cottagesReducer from "./reducers/cottagesReducer";
import bathsReducer from "./reducers/bathsReducer";
import carsReducer from "./reducers/carsReducer";
import modalReducer from "./reducers/modalReducer";
import filterReducer from "./reducers/filterReducer";
import recommendReducer from "./reducers/recommendReducer";
import bookmarksReducer from "./reducers/bookmarksReducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    flats: flatsReducer,
    cottages: cottagesReducer,
    baths: bathsReducer,
    cars: carsReducer,
    modal: modalReducer,
    filter: filterReducer,
    recommend: recommendReducer,
    bookmarks: bookmarksReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

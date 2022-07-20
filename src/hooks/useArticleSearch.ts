import { useEffect, useState, useMemo } from "react";

import { useAppSelector, useAppDispatch } from "./redux/redux-hooks";

import { INews } from "../Interfaces/INews";
import { fetchNews } from "../store/thunks/newsThunk";
import { setFilterValue } from "../store/reducers/newsReducer";

//import { createSearchParams } from "react-router-dom";
// setSearchParams(createSearchParams({ filter: e.target.value }))

export const useArticleSearch = (valueFromUrl: string) => {
  const dispatch = useAppDispatch();
  const { news, loading, error } = useAppSelector((state) => state.news);
  const [filteredData, setFilterdData] = useState<INews[]>();

  useEffect(() => {
    if (valueFromUrl === "") {
      dispatch(fetchNews());
      dispatch(setFilterValue(""));
    }
  }, [dispatch, valueFromUrl]);

  useEffect(() => {
    setFilterdData(news);
  }, [news]);

  const handleArticleSearch = () => {
    let filteredNewsData = news?.filter((news) => {
      const regExp = new RegExp(valueFromUrl, "i");
      return regExp.test(news.title);
    });
    dispatch(setFilterValue(valueFromUrl));
    setFilterdData(filteredNewsData);
  };

  return {
    handleArticleSearch,
    filteredData,
  };
};

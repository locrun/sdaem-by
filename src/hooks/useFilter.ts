import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  setFilteredData,
  setDublicateData,
} from "../store/reducers/filterReducer";
import { useLocation } from "react-router";
import { path } from "../constants/pages";
import { IResponseData } from "../Interfaces/IResponseData";

export const useFilter = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { flats } = useAppSelector((state) => state.flats);
  const { cottages } = useAppSelector((state) => state.cottages);
  const { baths } = useAppSelector((state) => state.baths);
  const { cars } = useAppSelector((state) => state.cars);
  const { filteredData, duplicateData, stateData, sortValue } = useAppSelector(
    (state) => state.filter
  );
  const { flag } = useAppSelector((state) => state.recommend);
  const [currentFetchData, setCurrentFetchData] = useState<IResponseData[]>();

  useEffect(() => {
    switch (location.pathname) {
      case path.home:
        return setCurrentFetchData(flats);
      case path.apartments:
        return setCurrentFetchData(flats);
      case path.cottages:
        return setCurrentFetchData(cottages);
      case path.baths:
        return setCurrentFetchData(baths);
      case path.cars:
        return setCurrentFetchData(cars);
    }
  }, [baths, cars, cottages, currentFetchData, flats, location.pathname]);

  useEffect(() => {
    filterFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFetchData, dispatch, stateData.city]);

  useEffect(() => {
    if (flag === "recommendActive") {
      filterFunction();
    }
    if (flag === "reset") {
      filterFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  //Фильтрация на главной странице
  useEffect(() => {
    if (location.pathname === path.home) {
      filterFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentFetchData,
    dispatch,
    location.pathname,
    stateData.area,
    stateData.capacity,
    stateData.city,
    stateData.metro,
    stateData.priceMax,
    stateData.priceMin,
    stateData.room,
    stateData.type,
  ]);

  // Функция фильтрация
  const filterFunction = () => {
    let filtered = currentFetchData
      ?.filter((item: { city: string }) =>
        stateData.city ? item.city === stateData.city : true
      )
      .filter((item: { room: string }) =>
        stateData.room ? parseInt(item.room) === parseInt(stateData.room) : true
      )
      .filter((item: { price: string }) =>
        stateData.priceMin && stateData?.priceMax
          ? parseInt(item.price) >= parseInt(stateData.priceMin) &&
            parseInt(item.price) <= parseInt(stateData.priceMax)
          : true
      )
      .filter((item: { metro: string }) =>
        stateData.metro ? item.metro === stateData.metro : true
      )
      .filter((item: { area: string }) =>
        stateData.area ? item.area === stateData.area : true
      )
      .filter((item: { type: string }) =>
        stateData.type ? item.type === stateData.type : true
      )
      .filter((item: { capacity: string }) =>
        stateData.capacity
          ? item.capacity.split(" ")[0] === stateData.capacity
          : true
      );

    dispatch(setFilteredData(filtered));
    dispatch(setDublicateData(filtered));
  };

  //Сортировка по цене
  useEffect(() => {
    const filtered = [...filteredData];
    if (sortValue.value === "По возрастанию цены") {
      filtered.sort((a: any, b: any) => a.price - b.price);
      dispatch(setFilteredData(filtered));
    } else if (sortValue.value === "По убыванию цены") {
      filtered.sort((a: any, b: any) => b.price - a.price);
      dispatch(setFilteredData(filtered));
    } else {
      dispatch(setFilteredData(duplicateData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sortValue]);

  return {
    filterFunction,
  };
};

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAppSelector } from "./redux/redux-hooks";
import { path } from "../constants/path";

export const useFilter = () => {
  const location = useLocation();
  const { flats, flatsData, sortValue, minsk } = useAppSelector(
    (state) => state.flats
  );
  const { cottages, cottagesData } = useAppSelector((state) => state.cottages);
  const { baths, bathsData } = useAppSelector((state) => state.baths);
  // const { cars, carsData } = useAppSelector((state) => state.cars);

  const [currentFetchData, setCurrentFetchData] = useState<any>([]);
  const [dispatch, setDispath] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    switch (location.pathname) {
      case path.HOME:
        return setCurrentFetchData(flats[7]?.items);

      case path.APARTMENTS:
        return setCurrentFetchData(flats[7]?.items);

      case path.COTTAGES:
        return setCurrentFetchData(cottages[1]?.items);

      case path.BATHS:
        return setCurrentFetchData(baths[1]?.items);

      case path.CARS:
        return console.log("CARS");
    }
  }, [baths, cottages, flats, location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case path.HOME:
        return setDispath(flatsData);

      case path.APARTMENTS:
        return setDispath(flatsData);

      case path.COTTAGES:
        return setDispath(cottagesData);

      case path.BATHS:
        return setDispath(bathsData);

      case path.CARS:
        return console.log("CARS");
    }
  }, [flatsData, cottagesData, bathsData, location.pathname]);

  useEffect(() => {
    const filtered = currentFetchData
      ?.filter((item: { city: string }) =>
        dispatch.cityName ? item.city === dispatch.cityName : true
      )
      .filter((item: { rooms: string }) =>
        dispatch.rooms
          ? parseInt(item.rooms) === parseInt(dispatch.rooms)
          : true
      )
      .filter((item: { type: string }) =>
        dispatch.type ? item.type === dispatch.type : true
      )
      .filter((item: { area: string }) =>
        dispatch.area ? item.area === dispatch.area : true
      )
      .filter((item: { price: string }) =>
        dispatch.minPrice && dispatch.maxPrice
          ? parseInt(item.price) >= parseInt(dispatch.minPrice) &&
            parseInt(item.price) <= parseInt(dispatch.maxPrice)
          : true
      );

    if (sortValue.value === "По возрастанию цены") {
      filtered?.sort((a: any, b: any) => a.price - b.price);
    } else if (filtered && sortValue.value === "По убыванию цены") {
      filtered?.sort((a: any, b: any) => b.price - a.price);
    }

    setFilteredData(filtered);
  }, [
    currentFetchData,
    dispatch.cityName,
    dispatch.rooms,
    dispatch.type,
    dispatch.area,
    dispatch.minPrice,
    dispatch.maxPrice,
    sortValue.value,
  ]);

  const minskData = flats[7]?.items
    .filter((flat) => flat.city === "Минск")
    .filter((flat) => (minsk.metro ? minsk.metro === flat.metro : true))
    .filter((flat) => (minsk.area ? minsk.area === flat.area : true));

  return {
    filteredData,
    minskData,
  };
};

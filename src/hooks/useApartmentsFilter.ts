import { useEffect, useState } from "react";
import { IFlats } from "../Interfaces/IFlats";
import { useAppSelector } from "./redux/redux-hooks";

export const useApartmentsFilter = () => {
  const { flat, flatsData, minsk } = useAppSelector((state) => state.flat);

  const [filteredApartmentsData, setFilteredApartmentsData] = useState<
    IFlats[]
  >([]);

  useEffect(() => {
    let filteredApartmentsData = flat
      .filter((flat) =>
        flatsData.cityName ? flat.city === flatsData.cityName : true
      )
      .filter((flat) =>
        flatsData.rooms ? flat.rooms === flatsData.rooms : true
      )
      .filter((flat) => (flatsData.area ? flat.area === flatsData.area : true))
      .filter((flat) =>
        flatsData.minPrice && flatsData.maxPrice
          ? Number(flat.price) >= Number(flatsData.minPrice) &&
            Number(flat.price) <= Number(flatsData.maxPrice)
          : true
      );
    setFilteredApartmentsData(filteredApartmentsData);
  }, [
    flat,
    flatsData.area,
    flatsData.cityName,
    flatsData.maxPrice,
    flatsData.minPrice,
    flatsData.rooms,
  ]);

  const minskData = flat
    .filter((flat) => flat.city === "Минск")
    .filter((flat) => (minsk.metro ? minsk.metro === flat.metro : true))
    .filter((flat) => (minsk.area ? minsk.area === flat.area : true));

  return {
    filteredApartmentsData,
    minskData,
  };
};

import { useEffect, useState } from "react";
import { ICottages } from "../Interfaces/ICottages";
import { useAppSelector } from "./redux/redux-hooks";

export const useCarsFilter = () => {
  const { cottages, cottagesData } = useAppSelector((state) => state.cottages);
  const [filteredCarsData, setFilteredCarsData] = useState<ICottages[]>([]);

  useEffect(() => {
    let filteredData = cottages
      .filter((cottages) =>
        cottagesData.cityName ? cottages.city === cottagesData.cityName : true
      )
      .filter((cottages) =>
        cottagesData.rooms ? cottages.rooms === cottagesData.rooms : true
      )
      .filter((cottages) =>
        cottagesData.type ? cottages.type === cottagesData.type : true
      )
      .filter((cottages) =>
        cottagesData.minPrice && cottagesData.maxPrice
          ? Number(cottages.price) >= Number(cottagesData.minPrice) &&
            Number(cottages.price) <= Number(cottagesData.maxPrice)
          : true
      );
    setFilteredCarsData(filteredData);
  }, [cottages, cottagesData]);

  return {
    filteredCarsData,
  };
};

import { useAppSelector } from "./redux/redux-hooks";

export const useFilter = () => {
  const { flat, values, minsk } = useAppSelector((state) => state.flat);

  const filteredData = flat
    .filter((flat) => (values.cityName ? flat.city === values.cityName : true))
    .filter((flat) => (values.rooms ? flat.rooms === values.rooms : true))
    .filter((flat) => (values.area ? flat.area === values.area : true))
    .filter((flat) =>
      values.minPrice && values.maxPrice
        ? Number(flat.price) >= Number(values.minPrice) &&
          Number(flat.price) <= Number(values.maxPrice)
        : true
    );

  const minskData = flat
    .filter((flat) => flat.city === "Минск")
    .filter((flat) => (minsk.metro ? minsk.metro === flat.metro : true))
    .filter((flat) => (minsk.area ? minsk.area === flat.area : true));

  return {
    filteredData,
    minskData,
  };
};

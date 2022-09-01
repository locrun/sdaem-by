import { FC, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch } from "../../hooks/redux/redux-hooks"
import { useFilter } from "../../hooks/useFilter"

import { Recommended } from "./section-recommended/Recommended"
import { Products } from "./section-products/Products"
import { ShowMap } from "./section-showmap/ShowMap"
import { Filter as FilterUI } from "../../components/FilterUI/Filter/Filter"
import { fetchFlats } from "../../store/thunks/flatThunk";
import { fetchCottages } from "../../store/thunks/cottagesThunk";
import { fetchBaths } from "../../store/thunks/bathsThunk";
import { fetchCars } from "../../store/thunks/carsThunk";


import { path } from "../../constants/pages";

export const Catalog: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case path.APARTMENTS:
        dispatch(fetchFlats());
        break;
      case path.COTTAGES:
        dispatch(fetchCottages());
        break;
      case path.BATHS:
        dispatch(fetchBaths());
        break;
      case path.CARS:
        dispatch(fetchCars());
        break;
      default:
    }
  }, [dispatch, location.pathname]);

  const { submitFilteringFunction } = useFilter()

  const onHandleSubmit = () => {
    submitFilteringFunction()
  }
  return (
    <>
      <Recommended />
      <FilterUI onSubmitForm={onHandleSubmit} />
      <Products />
      <ShowMap />
    </>
  )
}

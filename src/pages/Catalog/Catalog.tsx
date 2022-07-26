import { FC, useEffect } from "react"
import { useAppDispatch } from "../../hooks/redux/redux-hooks";
import { useLocation } from "react-router";
import { fetchCottages } from "../../store/thunks/cottagesThunk";
import { fetchFlats } from "../../store/thunks/flatThunk";
import { fetchBaths } from "../../store/thunks/bathsThunk";

import { Recommended } from "./section-recommended/Recommended"
import { DiffButtons } from "./section-diffbuttons/DiffButtons"
import { Products } from "./section-products/Products"
import { ShowMap } from "./section-showmap/ShowMap"

import { Title } from "../../components/Title/Title"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { Filter } from "../../components/Filter/Filter"

import { path } from "../../constants/path";

import { useTitle } from "../../hooks/useTitle"
import classes from "./Catalog.module.scss"

export const Catalog: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const { title } = useTitle()

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
      // case path.CARS:
      //   dispatch(fetchCars());
      //   break
      default:
        break;
    }

  }, [dispatch, location.pathname]);
  return (
    <>
      <div className={classes.recommendWrapper}>
        <div className="container">
          <Breadcrumbs name={"Квартиры в Минске"} />
          <Title className={classes.title}>
            {title}
          </Title>
        </div>
        <Recommended />
      </div>
      <div className={classes.filterWrapper}>
        <div className="container">
          <Filter />
        </div>
      </div>
      <Products />
      <ShowMap />
    </>
  )
}


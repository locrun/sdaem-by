import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { Recommended } from "./section-recommended/Recommended";
import { Products } from "./section-products/Products";
import { ShowMap } from "./section-showmap/ShowMap";
import { Filter as FilterUI } from "../../components/FilterUI/Filter/Filter";

import { ItemType, fetchItems } from "../../store/reducers/itemsReducer";

export const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const { type } = useParams<{ type: ItemType }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!type) {
      return navigate("/catalog/flats");
    }
    dispatch(fetchItems({ type: type }));
  }, [dispatch, type]);

  return (
    <>
      <Recommended />
      <FilterUI />
      <Products />
      <ShowMap />
    </>
  );
};

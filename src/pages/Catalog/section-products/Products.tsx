import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks";

import { setValueToSortByPrice } from "../../../store/reducers/flatsReducer";

import { useFilter } from "../../../hooks/useFilter"
import { usePagination } from "../../../hooks/usePagination";

import { DiffButtons } from "../section-diffbuttons/DiffButtons";
import { Autocomplete } from "../../../components/Autocomplete/Autocomplete";
import { Title } from "../../../components/Title/Title";
import { TiledCards } from "../../../components/TiledCards/TiledCards";
import { ListCards } from "../../../components/ListCards/ListCards";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ShareButtons } from "../../../components/ShareButtons/ShareButtons";

import { ICards } from "../../../Interfaces/ICards";

import classes from "./Products.module.scss"

const options = [
  { value: "По умолчанию", label: "По умолчанию" },
  { value: "По возрастанию цены", label: "По возрастанию цены" },
  { value: "По убыванию цены", label: "По убыванию цены" }
]

export const Products: FC = () => {
  const dispatch = useAppDispatch()

  const { active } = useAppSelector(state => state.flats)

  const { filteredData } = useFilter()

  const displayPerPage = active === "tiles" ? 6 : 3

  const { pageCount, slicedArray, handlePageChange, forcePage }
    = usePagination(displayPerPage, filteredData)

  return (
    <section>
      <div className="container">
        <div className={classes.flex}>
          <Autocomplete
            options={options}
            placeholder="По умолчанию"
            classNames={classes.select}
            onChange={(newValue) => dispatch(setValueToSortByPrice(newValue))}
          />
          <DiffButtons />
        </div>
        <Title className={classes.title}>
          Найдено 234 результата
        </Title>
        {active === "tiles" &&
          <div className={classes.tilesCardWrapper}>
            {slicedArray?.map((items: ICards) =>
              <TiledCards
                key={items.id}
                data={items}
                className={classes.shadow}
              />
            )}
          </div>
        }
        {active === "list" &&
          <div className={classes.listCardWrapper}>
            {slicedArray?.map((items: ICards) =>
              <ListCards
                key={items.id}
                data={items}
                className={classes.shadow} />
            )}
          </div>
        }
        <div className={classes.bottom}>
          <Pagination
            forcePage={forcePage - 1}
            pageCount={pageCount.length}
            onChange={handlePageChange}
          />
          <ShareButtons />
        </div>
      </div>
    </section>)
};

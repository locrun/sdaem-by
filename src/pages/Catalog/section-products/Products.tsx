import { FC } from "react";

import { SingleValue } from "react-select";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux-hooks";
import { selectedValueForSort } from "../../../store/reducers/filterReducer";

import { usePagination } from "../../../hooks/usePagination";
import { usePageTitle } from "../../../hooks/usePageTitle";

import { DiffButtons } from "../section-diffbuttons/DiffButtons";
import { SelectSortPrice } from "../../../components/FilterUI/SelectSortPrice/SelectSortPrice";
import { TiledCards } from "../../../components/Cards/TiledCards/TiledCards";
import { ListCards } from "../../../components/Cards/ListCards/ListCards";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ShareButtons } from "../../../components/ShareButtons/ShareButtons";

import { NothingFound } from "../../../components/Notification/NothingFound/NothingFound";


import { ISelectOption } from "../../../Interfaces/ISelectOption";
import { IResponseData } from "../../../Interfaces/IResponseData";


import cn from "classnames"
import classes from "./Products.module.scss"


export const Products: FC = () => {

  const dispatch = useAppDispatch()
  const { title } = usePageTitle()

  const { active, filteredData } = useAppSelector(state => state.filter)

  const displayPerPage = active === "tiles" ? 6 : 3
  const { pageCount, slicedArray, handlePageChange, forcePage }
    = usePagination(displayPerPage, filteredData)

  const onChangeHandler = (newValue: SingleValue<ISelectOption>) => {
    dispatch(selectedValueForSort({
      value: newValue?.value,
      label: newValue?.value
    }))
  }
  return (
    <section>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.flex}>
            <div className={classes.ml}>
              <SelectSortPrice onChangeHandler={onChangeHandler} />
            </div>
            <DiffButtons />
          </div>
          <h3 className={classes.title}>
            {filteredData && <span> Найдено {filteredData?.length} результата</span>}
          </h3>
          {

            slicedArray?.length === 0 ?
              <div className={classes.spinwrap}>
                <NothingFound />
              </div>
              :
              active === "tiles" &&
              <div className={classes.tilesCardWrapper}>
                {slicedArray?.map((items: IResponseData) =>
                  <TiledCards key={items.id} data={items} className={cn(classes.shadow, classes.mb)} />
                )}
              </div>
          }

          {active === "list" &&
            <div className={classes.listCardWrapper}>
              {slicedArray?.map((items: IResponseData) =>
                <ListCards key={items.id} data={items} className={classes.shadow} />
              )}
            </div>
          }
          <div className={classes.bottom}>
            <Pagination
              forcePage={forcePage - 1}
              pageCount={pageCount.length}
              onChange={handlePageChange}
            />
            <ShareButtons
              title={title}
              url={"https://sdaem.by/"}
              catalogPage
            />
          </div>
        </div>
      </div>
    </section>
  )
};


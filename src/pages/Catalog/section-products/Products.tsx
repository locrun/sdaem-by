import { FC, useMemo, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../hooks/redux-hooks";

import { usePagination } from "../../../hooks/usePagination";
import { usePageTitle } from "../../../hooks/usePageTitle";

import { DiffButtons } from "../section-diffbuttons/DiffButtons";
import { SelectSortPrice } from "../../../components/FilterUI/SelectSortPrice/SelectSortPrice";
import { TiledCards } from "../../../components/Cards/TiledCards/TiledCards";
import { ListCards } from "../../../components/Cards/ListCards/ListCards";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ShareButtons } from "../../../components/ShareButtons/ShareButtons";

import { NothingFound } from "../../../components/Notification/NothingFound/NothingFound";

import { IResponseData } from "../../../Interfaces/IResponseData";

import cn from "classnames";
import classes from "./Products.module.scss";
import { SortType, itemActions } from "../../../store/reducers/itemsReducer";

const LIST_ITEMS_PER_PAGE = 3;
const CARD_ITEMS_PER_PAGE = 6;

export const Products: FC = () => {
  const dispatch = useAppDispatch();
  const { title } = usePageTitle();
  const [view, setView] = useState<"list" | "cards">("list");

  const { items, status, sort, filters, errorMessage } = useAppSelector(
    (state) => state.items
  );

  const filteredItems = useMemo(() => {
    const filteredItems = !filters
      ? items
      : items.filter((item) => {
          if (filters?.city && item.city !== filters.city) {
            return false;
          }

          if (filters?.room && parseInt(item.room) === parseInt(filters.room)) {
            return false;
          }

          if (
            filters?.priceMin &&
            parseInt(filters.priceMin) > parseInt(item.price)
          ) {
            return false;
          }

          if (
            filters?.priceMax &&
            parseInt(filters.priceMax) < parseInt(item.price)
          ) {
            return false;
          }

          if (filters?.metro && item.metro !== filters.metro) {
            return false;
          }

          if (filters?.area && item.area !== filters.area) {
            return false;
          }

          if (filters?.type && item.type !== filters.type) {
            return false;
          }

          if (filters?.capacity && item.capacity !== filters.capacity) {
            return false;
          }

          return true;
        });

    if (sort === "none") {
      return filteredItems;
    }

    return filteredItems.sort((a, b) => {
      if (sort === "price-down") {
        return parseInt(b.price, 10) - parseInt(a.price, 10);
      }

      return parseInt(a.price, 10) - parseInt(b.price, 10);
    });
  }, [items, sort, filters]);

  const displayPerPage =
    view === "list" ? LIST_ITEMS_PER_PAGE : CARD_ITEMS_PER_PAGE;

  const {
    pageCount,
    page,
    handlePageChange,
    items: paginatedFilteredItems,
  } = usePagination(filteredItems, displayPerPage);

  const onSortChange = (newValue: SortType) => {
    dispatch(itemActions.setSort(newValue));
  };

  const renderContent = () => {
    if (status === "loading" || status === "init") {
      return <div className={classes.spinwrap}>Loading...</div>;
    }

    if (status === "error") {
      return (
        <div className={classes.spinwrap}>
          Error!
          <br />
          {errorMessage}
        </div>
      );
    }

    if (filteredItems.length === 0) {
      <div className={classes.spinwrap}>
        <NothingFound />
      </div>;
    }

    if (view === "cards") {
      return (
        <div className={classes.tilesCardWrapper}>
          {paginatedFilteredItems.map((items: IResponseData) => (
            <TiledCards
              key={items.id}
              data={items}
              className={cn(classes.shadow, classes.mb)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className={classes.listCardWrapper}>
        {paginatedFilteredItems.map((items: IResponseData) => (
          <ListCards key={items.id} data={items} className={classes.shadow} />
        ))}
      </div>
    );
  };

  return (
    <section>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.flex}>
            <div className={classes.ml}>
              <SelectSortPrice onSortChange={onSortChange} />
            </div>
            <DiffButtons view={view} onViewChange={setView} />
          </div>
          {filteredItems.length > 0 && (
            <h3 className={classes.title}>
              <span> Найдено {filteredItems.length} результата</span>
            </h3>
          )}

          {renderContent()}
          <div className={classes.bottom}>
            <Pagination
              forcePage={page}
              pageCount={pageCount}
              onChange={({ selected }) => handlePageChange(selected)}
            />
            <ShareButtons title={title} url={"https://sdaem.by/"} catalogPage />
          </div>
        </div>
      </div>
    </section>
  );
};

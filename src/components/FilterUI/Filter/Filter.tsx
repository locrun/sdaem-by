import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux-hooks";

import { MoreOptions } from "../MoreOptions/MoreOptions";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import { InputGroup } from "./InputGroup/InputGroup";
import { SelectGroup } from "./SelectGroup/SelectGroup";

import { path } from "../../../constants/pages";
import cn from "classnames";
import classes from "./Filter.module.scss";
import {
  IItemsStateFilters,
  itemActions,
} from "../../../store/reducers/itemsReducer";
import { IFilterUpdatePayload } from "./types";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState<IItemsStateFilters>({});

  const homePath = location.pathname === "/" ? true : false;
  const [openOptions, setOptions] = useState(false);

  const onFilterChange = (filter: IFilterUpdatePayload) => {
    setFilters((oldFilters) => ({
      ...oldFilters,
      [filter.key]: filter.value,
    }));
  };

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(itemActions.setFilterData(filters));

    if (location.pathname === path.home) navigate("/catalog/flats");
  };

  const onResetFilter = () => {
    setFilters({});
  };

  const onToggleMoreOptions = () => {
    setOptions((prevState) => !prevState);
  };

  return (
    <div className={classes.filterWrapper}>
      <div
        className={cn(classes.container, {
          [classes.containerTransform]: !homePath,
        })}
      >
        <form onSubmit={onHandleSubmit}>
          <div
            className={cn(classes.wrapper, {
              [classes._radiusNone]: openOptions,
              [classes.wrapperTransform]: !homePath,
            })}
          >
            <div className={classes.content}>
              <SelectGroup filters={filters} onFilterChange={onFilterChange} />
              <InputGroup filters={filters} onFilterChange={onFilterChange} />
              <ButtonGroup
                onResetFilters={onResetFilter}
                moreOptionsOpened={openOptions}
                onToggleMoreOptions={onToggleMoreOptions}
              />
            </div>
          </div>
          {openOptions && (
            <MoreOptions filters={filters} onFilterChange={onFilterChange} />
          )}
        </form>
      </div>
    </div>
  );
};

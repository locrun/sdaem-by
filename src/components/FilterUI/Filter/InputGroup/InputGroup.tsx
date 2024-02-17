import { FC } from "react";
import { useLocation } from "react-router";
import { useAppSelector } from "../../../../hooks/redux-hooks";

import { SingleValue } from "react-select";
import { path } from "../../../../constants/pages";

import { ISelectOption } from "../../../../Interfaces/ISelectOption";

import cn from "classnames";
import classes from "./InputGroup.module.scss";
import { IItemsStateFilters } from "../../../../store/reducers/itemsReducer";
import { IFilterUpdatePayload } from "../types";

export interface IPropsInput {
  filters: IItemsStateFilters;
  onFilterChange: (newValue: IFilterUpdatePayload) => void;
}
export const InputGroup: FC<IPropsInput> = ({ filters, onFilterChange }) => {
  const location = useLocation();
  const homePath = location.pathname === path.home ? true : false;

  return (
    <div
      className={cn(classes.autocomplete, {
        [classes.transform]: !homePath,
      })}
    >
      <span className={classes.label}>Цена за сутки (BYN)</span>
      <span>
        <input
          value={filters.priceMin}
          className={classes.from}
          type="text"
          placeholder="От"
          onChange={(e) =>
            onFilterChange({
              value: e.target.value,
              key: "priceMin",
            })
          }
          minLength={2}
          maxLength={4}
        />
        <span>-</span>
        <input
          value={filters.priceMax}
          className={classes.to}
          type="text"
          placeholder="До"
          onChange={(e) =>
            onFilterChange({
              value: e.target.value,
              key: "priceMax",
            })
          }
          minLength={2}
          maxLength={4}
        />
      </span>
    </div>
  );
};

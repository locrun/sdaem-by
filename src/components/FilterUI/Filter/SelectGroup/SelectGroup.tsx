import { FC, useState } from "react";
import { useLocation } from "react-router";

import { Autocomplete } from "../../../Autocomplete/Autocomplete";

import { cityOptions, roomsOptions } from "../../../../data/dataOptions";
import { path } from "../../../../constants/pages";

import cn from "classnames";
import classes from "./SelectGroup.module.scss";
import { IItemsStateFilters } from "../../../../store/reducers/itemsReducer";
import { IFilterUpdatePayload } from "../types";

export interface IPropsSelectGroup {
  filters: IItemsStateFilters;
  isHidden?: boolean;
  className?: string;
  onFilterChange: (newValue: IFilterUpdatePayload) => void;
}

export const SelectGroup: FC<IPropsSelectGroup> = ({
  filters,
  onFilterChange,
}) => {
  const location = useLocation();
  const homePath = location.pathname === path.home ? true : false;

  let [defaultValue] = useState({ value: "Выберите", label: "Выберите" });
  let cityValue = filters.city
    ? { value: filters.city, label: filters.city }
    : defaultValue;
  let roomValue = filters.room
    ? { value: filters.room, label: filters.room }
    : defaultValue;

  return (
    <>
      {homePath && (
        <div className={classes.autocomplete}>
          <span className={classes.label}>Город</span>
          <Autocomplete
            value={cityValue}
            options={cityOptions}
            onChange={(newValue) => {
              onFilterChange({
                key: "city",
                value: newValue?.value,
              });
            }}
            classNames={classes.select}
          />
        </div>
      )}
      <div
        className={cn(classes.autocomplete, {
          [classes.transform]: !homePath,
        })}
      >
        <span className={classes.label}>Комнаты</span>
        <Autocomplete
          value={roomValue}
          options={roomsOptions}
          onChange={(newValue) => {
            onFilterChange({
              key: "room",
              value: newValue?.value,
            });
          }}
          classNames={classes.select}
        />
      </div>
    </>
  );
};

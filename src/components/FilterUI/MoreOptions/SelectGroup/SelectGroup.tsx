import { FC, useState } from "react";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { Autocomplete } from "../../../Autocomplete/Autocomplete";
import { IPropsSelectGroup } from "../../Filter/SelectGroup/SelectGroup";
import {
  capacityOptions,
  areaOptions,
  metroOptions,
} from "../../../../data/dataOptions";

import cn from "classnames";
import classes from "./SelectGroup.module.scss";

export const SelectGroup: FC<IPropsSelectGroup> = ({
  filters,
  onFilterChange,
}) => {
  let [defaultValue] = useState({ value: "Выберите", label: "Выберите" });
  let metroValue = filters.metro
    ? { value: filters.metro, label: filters.metro }
    : defaultValue;
  let areaValue = filters.area
    ? { value: filters.area, label: filters.area }
    : defaultValue;
  let capacityValue = filters.capacity
    ? { value: filters.capacity, label: filters.capacity }
    : defaultValue;

  return (
    <>
      <div className={classes.autocomplete}>
        <span>Спальные места</span>
        <Autocomplete
          value={capacityValue}
          options={capacityOptions}
          placeholder={"Выберите"}
          classNames={classes.select}
          onChange={(newValue) =>
            onFilterChange({ key: "capacity", value: newValue?.value })
          }
        />
      </div>
      <div className={classes.autocomplete}>
        <span>Район</span>
        <Autocomplete
          value={areaValue}
          options={areaOptions}
          placeholder={"Выберите"}
          classNames={cn(classes.select)}
          onChange={(newValue) =>
            onFilterChange({ key: "area", value: newValue?.value })
          }
        />
      </div>
      <div className={classes.autocomplete}>
        <span>Метро</span>
        <Autocomplete
          value={metroValue}
          options={metroOptions}
          placeholder={"Выберите"}
          classNames={cn(classes.select)}
          onChange={(newValue) =>
            onFilterChange({ key: "metro", value: newValue?.value })
          }
        />
      </div>
    </>
  );
};

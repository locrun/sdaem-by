import { FC } from "react";

import { SelectGroup } from "../MoreOptions/SelectGroup/SelectGroup";
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup";

import classes from "./MoreOptions.module.scss";
import { IFilterUpdatePayload } from "../Filter/types";
import { IItemsStateFilters } from "../../../store/reducers/itemsReducer";

interface MoreOptionProps {
  filters: IItemsStateFilters;
  onFilterChange: (newValue: IFilterUpdatePayload) => void;
}

export const MoreOptions: FC<MoreOptionProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <>
      <div className={classes.selectWrapper}>
        <SelectGroup filters={filters} onFilterChange={onFilterChange} />
      </div>
      <div className={classes.checkboxWrapper}>
        <CheckboxGroup />
      </div>
    </>
  );
};

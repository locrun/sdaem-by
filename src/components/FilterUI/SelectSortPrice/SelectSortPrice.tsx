import { FC } from "react";
import { Autocomplete } from "../../Autocomplete/Autocomplete";

import classes from "./SelectSortPrice.module.scss";
import { SortType } from "../../../store/reducers/itemsReducer";

const options: { label: string; value: SortType }[] = [
  { value: "none", label: "По умолчанию" },
  { value: "price-up", label: "По возрастанию цены" },
  { value: "price-down", label: "По убыванию цены" },
];

interface IPropsSelectSortPrice {
  onSortChange: (newValue: SortType) => void;
}

export const SelectSortPrice: FC<IPropsSelectSortPrice> = ({
  onSortChange,
}) => {
  return (
    <Autocomplete
      options={options}
      placeholder="По умолчанию"
      classNames={classes.select}
      onChange={(option) => {
        const newValue = option ? (option.value as SortType) : "none";
        onSortChange(newValue);
      }}
    />
  );
};

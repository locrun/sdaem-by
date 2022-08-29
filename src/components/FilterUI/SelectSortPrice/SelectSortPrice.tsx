import { FC } from "react"
import { Autocomplete } from "../../Autocomplete/Autocomplete"

import { SingleValue } from "react-select"
import { ISelectOption } from "../../../Interfaces/ISelectOption"

import classes from "./SelectSortPrice.module.scss"

const options = [
  { value: "По умолчанию", label: "По умолчанию" },
  { value: "По возрастанию цены", label: "По возрастанию цены" },
  { value: "По убыванию цены", label: "По убыванию цены" }
]

interface IPropsSelectSortPrice {
  onChangeHandler: (newValue: SingleValue<ISelectOption>) => void,
}

export const SelectSortPrice: FC<IPropsSelectSortPrice> = ({ onChangeHandler }) => {
  return (
    <Autocomplete
      options={options}
      placeholder="По умолчанию"
      classNames={classes.select}
      onChange={(newValue) => onChangeHandler(newValue)}
    />
  )
}
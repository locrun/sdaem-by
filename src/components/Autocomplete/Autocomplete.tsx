import { FC } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

import { ISelectOption } from "../../Interfaces/ISelectOption";
import classes from "./Autocomplete.module.scss";
import cn from "classnames"


interface ISelectProps {
  classNames?: string,
  options: ISelectOption[]
  value?: ISelectOption
  placeholder?: string,

  onChange?: ((newValue: SingleValue<ISelectOption>, actionMeta: ActionMeta<ISelectOption>) => void) | undefined;
}
export const Autocomplete: FC<ISelectProps> = (
  {
    placeholder,
    classNames,
    onChange,
    options,
    value
  }) => {

  return (
    <Select
      className={cn(classes.input, classNames)}
      options={options}
      value={value}
      onChange={onChange}
      classNamePrefix={classNames}
      isSearchable={false}
      placeholder={placeholder}
    />
  )
}
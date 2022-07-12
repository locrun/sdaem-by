import { FC } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

import { ISelectOption } from "../../Interfaces/ISelectOption";
import classes from "./Autocomplete.module.scss";
import cn from "classnames"

interface ISelectProps {
  placeholder?: string,
  classNames?: string,
  onChange?: ((newValue: SingleValue<ISelectOption>, actionMeta: ActionMeta<ISelectOption>) => void) | undefined;
  options?: ISelectOption[]
  value?: ISelectOption
}
export const Autocomplete: FC<ISelectProps> = (props) => {
  const { placeholder, classNames, onChange, options, value } = props
  return (
    <Select
      className={cn(classes.input, classNames)}
      options={options}
      value={value}
      placeholder={placeholder}
      classNamePrefix={classNames}
      onChange={onChange}
    />
  )
}
import { FC } from "react";
import Select from "react-select";

import classes from "./Autocomplete.module.scss";
import cn from "classnames"
const options = [
  { value: 'Москва', label: 'Москва' },
  { value: 'Казань', label: 'Казань' },
  { value: 'Ленинград', label: 'Ленинград' },
  { value: 'Дубай', label: 'Дубай' },
  { value: 'Стамбул', label: 'Стамбул' }
]

interface ISelectProps {
  placeholder: string,
  classNames: string,
  onChange: () => void;

}
export const Autocomplete: FC<ISelectProps> = (props) => {
  const { placeholder, classNames, onChange } = props
  return (
    <Select
      className={cn(classes.input, classNames)}
      placeholder={placeholder}
      classNamePrefix={classNames}
      options={options}
      onChange={onChange}
    />
  )
}
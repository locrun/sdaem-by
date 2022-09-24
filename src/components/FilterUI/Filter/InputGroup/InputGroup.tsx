import { FC } from "react"
import { useLocation } from "react-router";
import { useAppSelector } from "../../../../hooks/redux-hooks";

import { SingleValue } from "react-select";
import { path } from "../../../../constants/pages";

import { ISelectOption } from "../../../../Interfaces/ISelectOption";

import cn from "classnames"
import classes from "./InputGroup.module.scss"

export interface IPropsInput {
  onChangeHandler: (newValue: SingleValue<ISelectOption>) => void
}
export const InputGroup: FC<IPropsInput> = ({ onChangeHandler }) => {
  const location = useLocation()
  const homePath = location.pathname === path.home ? true : false
  const { stateData } = useAppSelector(state => state.filter)

  return (
    <div className={cn(classes.autocomplete, {
      [classes.transform]: !homePath
    })}>
      <span className={classes.label}>Цена за сутки (BYN)</span>
      <span>
        <input
          value={stateData.priceMin}
          className={classes.from}
          type="text"
          placeholder="От"
          onChange={(e) => onChangeHandler({
            value: e.target.value,
            label: e.target.value,
            key: "priceMin"
          })}
          minLength={2}
          maxLength={4}
        />
        <span>-</span>
        <input
          value={stateData.priceMax}
          className={classes.to}
          type="text"
          placeholder="До"
          onChange={(e) => onChangeHandler({
            value: e.target.value,
            label: e.target.value,
            key: "priceMax"
          })}
          minLength={2}
          maxLength={4}
        />
      </span>
    </div>
  )
}


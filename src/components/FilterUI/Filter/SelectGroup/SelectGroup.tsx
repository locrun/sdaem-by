import { FC, useState } from "react"
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { useLocation } from "react-router";
import { SingleValue } from "react-select";

import { Autocomplete } from "../../../Autocomplete/Autocomplete";

import {
  cityOptions, roomsOptions,
} from "../../../../data/dataOptions"
import { path } from "../../../../constants/pages";
import { ISelectOption } from "../../../../Interfaces/ISelectOption";

import cn from "classnames"
import classes from "./SelectGroup.module.scss"

export interface IPropsSelectGroup {
  isHidden?: boolean,
  className?: string,
  onChangeHandler: (newValue: SingleValue<ISelectOption>) => void,
}

export const SelectGroup: FC<IPropsSelectGroup> = ({ onChangeHandler }) => {
  const location = useLocation()
  const homePath = location.pathname === path.home ? true : false
  const { stateData } = useAppSelector(state => state.filter)

  let [defaultValue] = useState({ value: "Выберите", label: "Выберите" })
  let cityValue = stateData.city ? { value: stateData.city, label: stateData.city } : defaultValue
  let roomValue = stateData.room ? { value: stateData.room, label: stateData.room } : defaultValue

  return (
    <>
      {homePath &&
        <div className={classes.autocomplete}>
          <span className={classes.label}>Город</span>
          <Autocomplete
            value={cityValue}
            options={cityOptions}
            onChange={(newValue) => {
              onChangeHandler(newValue)
            }}
            classNames={classes.select}
          />
        </div>
      }
      <div className={cn(classes.autocomplete, {
        [classes.transform]: !homePath
      })}
      >
        <span className={classes.label}>
          Комнаты
        </span>
        <Autocomplete
          value={roomValue}
          options={roomsOptions}
          onChange={(newValue) => {
            onChangeHandler(newValue)
          }}
          classNames={classes.select}
        />
      </div>
    </>
  )
}

import { FC, useState } from 'react'
import { useAppSelector } from '../../../../hooks/redux-hooks'
import { Autocomplete } from '../../../Autocomplete/Autocomplete'
import { IPropsSelectGroup } from '../../Filter/SelectGroup/SelectGroup'
import { capacityOptions, areaOptions, metroOptions } from "../../../../data/dataOptions";

import cn from "classnames"
import classes from "./SelectGroup.module.scss"


export const SelectGroup: FC<IPropsSelectGroup> = ({ onChangeHandler }) => {
  const { stateData } = useAppSelector(state => state.filter)
  let [defaultValue] = useState({ value: "Выберите", label: "Выберите" })
  let metroValue = stateData.metro ? { value: stateData.metro, label: stateData.metro } : defaultValue
  let areaValue = stateData.area ? { value: stateData.area, label: stateData.area } : defaultValue
  let capacityValue = stateData.capacity ? { value: stateData.capacity, label: stateData.capacity } : defaultValue

  return (
    <>
      <div className={classes.autocomplete}>
        <span >Спальные места</span>
        <Autocomplete
          value={capacityValue}
          options={capacityOptions}
          placeholder={"Выберите"}
          classNames={classes.select}
          onChange={(newValue) => onChangeHandler(newValue)}
        />
      </div>
      <div className={classes.autocomplete}>
        <span >Район</span>
        <Autocomplete
          value={areaValue}
          options={areaOptions}
          placeholder={"Выберите"}
          classNames={cn(classes.select)}
          onChange={(newValue) => onChangeHandler(newValue)}
        />
      </div>
      <div className={classes.autocomplete}>
        <span>Метро</span>
        <Autocomplete
          value={metroValue}
          options={metroOptions}
          placeholder={"Выберите"}
          classNames={cn(classes.select)}
          onChange={(newValue) => onChangeHandler(newValue)}
        />
      </div>
    </>
  )
}

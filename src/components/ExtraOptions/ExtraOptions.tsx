import { FC, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks";

import { OnChangeValue } from "react-select";


import { Autocomplete } from "../Autocomplete/Autocomplete";
import { Checkbox } from "../Checkbox/Checkbox";
import { ISelectOption } from "../../Interfaces/ISelectOption";

import { fetchFlats } from "../../store/thunks/flatThunk";

import classes from "./ExtraOptions.module.scss"





export const ExtraOptions: FC = () => {
  const dispatch = useAppDispatch()
  const { flats } = useAppSelector(state => state.flats)
  console.log(flats)

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])

  const [metro, setMetro] = useState<ISelectOption>()
  const [capacity, setCapacity] = useState<ISelectOption>()
  const [area, setArea] = useState<ISelectOption>()

  const onChangeMetro = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setMetro(newValue as ISelectOption)
  }
  const onChangeArea = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setArea(newValue as ISelectOption)
  }
  const onChangeCapacity = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setCapacity(newValue as ISelectOption)
  }

  return (
    <>
      <div className={classes.selectWrapper}>
        <div className={classes.autocomplete}>
          <span >Спальные места</span>
          <Autocomplete
            options={flats[2]?.capacityOptions}
            value={capacity}
            placeholder={"Выберите"}
            classNames={classes.select}
            onChange={onChangeCapacity}
          />
        </div>
        <div className={classes.autocomplete}>
          <span >Район</span>
          <Autocomplete
            options={flats[1].areaOptions}
            value={area}
            placeholder={"Выберите"}
            classNames={classes.select}
            onChange={onChangeArea}
          />
        </div>
        <div className={classes.autocomplete}>
          <span>Метро</span>
          <Autocomplete
            options={flats[0].metroOptions}
            value={metro}
            placeholder={"Выберите"}
            classNames={classes.select}
            onChange={onChangeMetro}
          />

        </div>
      </div>
      <div className={classes.checkboxWrapper}>
        <Checkbox
          data={flats[5]?.kitchen}
        />
        <Checkbox
          data={flats[6]?.games}
        />
      </div>
    </>

  );
};

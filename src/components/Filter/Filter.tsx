import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"

import { getFilterValues } from "../../store/reducers/flatReducer";
import { ISelectOption } from "../../Interfaces/ISelectOption";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { OnChangeValue } from "react-select";

import { IconSvg } from "../IconSvg/IconSvg";
import { Button } from "../Button/Button";

import option from "../../assets/images/options.svg"
import classes from "./Filter.module.scss";
import cn from "classnames"

const cityOptions = [
  { value: 'Минск', label: 'Минск' },
  { value: 'Гомель', label: 'Гомель' },
  { value: 'Гродно', label: 'Гродно' },
  { value: 'Могилев', label: 'Могилев' },
  { value: 'Брест', label: 'Брест' },
  //{ value: 'Витебск', label: 'Витебск' }
]
const roomsOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
]

export const Filter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { values } = useAppSelector(state => state.flat)

  const isPathName = location.pathname === '/' ? true : false

  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [city, setCity] = useState<ISelectOption>()
  const [rooms, setRooms] = useState<ISelectOption>()

  const onChangeCity = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setCity(newValue as ISelectOption)
  }
  const onChangeRooms = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setRooms(newValue as ISelectOption)
  }

  useEffect(() => {
    if (values.cityName) {
      setCity({ value: values.cityName, label: values.cityName })
    }
    if (values.rooms) {
      setRooms({ value: values.rooms, label: values.rooms })
    }
    if (values.minPrice) {
      setMin(values.minPrice)
    }
    if (values.maxPrice) {
      setMax(values.maxPrice)
    }
  }, [values.cityName, values.rooms, values.minPrice, values.maxPrice])

  const onClickHandler = () => {
    dispatch(getFilterValues({
      minPrice: min || values.minPrice,
      maxPrice: max || values.maxPrice,
      cityName: city?.value || values.cityName,
      rooms: rooms?.value || values.rooms
    }))
    return navigate("/catalog")
  }
  return (
    <>
      <div className={cn(classes.filter, {
        [classes.filterTransform]: !isPathName
      })}>

        {isPathName &&
          <div className={classes.itemColumn}>
            <span className={classes.label}>Город</span>
            <Autocomplete
              value={city}
              options={cityOptions}
              placeholder={"Выберите"}
              onChange={onChangeCity}
              classNames={classes.select}
            />
          </div>
        }

        <div className={cn(classes.itemColumn, {
          [classes.itemColumnTransform]: !isPathName
        })}>
          <span className={classes.label}>Комнаты</span>
          <Autocomplete
            value={rooms}
            options={roomsOptions}
            placeholder={"Выберите"}
            onChange={onChangeRooms}
            classNames={classes.select}
          />
        </div>
        <div className={cn(classes.itemColumn, {
          [classes.itemColumnTransform]: !isPathName
        })}>
          <span className={classes.label}>Цена за сутки (BYN)</span>
          <div className={classes.inputwrapper}>
            <input
              value={min}
              className={classes.from}
              type="text"
              placeholder="От"
              onChange={(e) => setMin(e.target.value)}
              minLength={2}
              maxLength={4}
            />
            <span>-</span>
            <input
              value={max}
              className={classes.to}
              type="text"
              placeholder="До"
              onChange={(e) => setMax(e.target.value)}
              minLength={2}
              maxLength={4}
            />
          </div>
        </div>
        <div className={cn(classes.itemColumn, classes.option)}>
          <button className={classes.optionButton}>Больше опций
            <img className={classes.icn} src={option} alt="icn" />
          </button>
        </div>

        {isPathName &&
          <div className={classes.onmap}>
            <button className={classes.mapButton}>На карте</button>
            <IconSvg id={"#mark"} className={classes.mark} />
          </div>
        }
        {!isPathName &&
          <Button
            title={"Очистить"}
            className={classes.clearBtn}
            onClick={onClickHandler}
          />}

        {!isPathName ?
          <Button
            title={"Показать объекты"}
            className={classes.showBtn}
            onClick={onClickHandler}
          />
          :
          <Button
            title="Показать"
            className={classes.btn}
            onClick={onClickHandler} />
        }
      </div>
    </>
  )
}

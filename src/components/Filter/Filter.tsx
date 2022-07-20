import React, { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"

import { getDataFlats } from "../../store/reducers/flatReducer";
import { getDataCottages } from "../../store/reducers/cottagesReducer";


import { ExtraOptions } from "./ExtraOptions/ExtraOptions";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { OnChangeValue } from "react-select";

import { ISelectOption } from "../../Interfaces/ISelectOption";

import { IconSvg } from "../IconSvg/IconSvg";
import { Button } from "../Button/Button";



import classes from "./Filter.module.scss";
import cn from "classnames"


const cityOptions = [
  { value: 'Минск', label: 'Минск' },
  { value: 'Гомель', label: 'Гомель' },
  { value: 'Гродно', label: 'Гродно' },
  { value: 'Могилев', label: 'Могилев' },
  { value: 'Брест', label: 'Брест' },

]
const roomsOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
]

const cottagesType = [
  { value: 'Агроусадьба', label: 'Агроусадьба' },
  { value: 'Коттедж на сутки', label: 'Коттедж на сутки' },
  { value: 'Загородный комплекс', label: 'Загородный комплекс' },
  { value: 'База отдыха', label: 'База отдыха' },
]
export const Filter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { flatsData } = useAppSelector(state => state.flat)
  const { cottagesData } = useAppSelector(state => state.cottages)

  const homePath = location.pathname === '/' ? true : false
  const cottagesPath = location.pathname === "/catalog/cottages" ? true : false
  const flatsPath = location.pathname === "/catalog/flats" ? true : false

  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [city, setCity] = useState<ISelectOption>()
  const [rooms, setRooms] = useState<ISelectOption>()
  const [type, setType] = useState<ISelectOption>()

  const onChangeCity = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setCity(newValue as ISelectOption)
  }
  const onChangeRooms = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setRooms(newValue as ISelectOption)
  }
  const onChangeType = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setType(newValue as ISelectOption)
  }

  useEffect(() => {
    if (flatsData.cityName && !cottagesPath) {
      setCity({ value: flatsData.cityName, label: flatsData.cityName })
    }
    if (flatsData.rooms && !cottagesPath) {
      setRooms({ value: flatsData.rooms, label: flatsData.rooms })
    }

    if (flatsData.minPrice && !cottagesPath) {
      setMin(flatsData.minPrice)
    } else {
      setMin('')
    }

    if (flatsData.maxPrice && !cottagesPath) {
      setMax(flatsData.maxPrice)
    } else {
      setMax('')
    }

    if (cottagesData.type) {
      setType({ value: cottagesData.type, label: cottagesData.type })
    }
    if (cottagesData.maxPrice && cottagesPath) {
      setMax(cottagesData.maxPrice)
    }
    if (cottagesData.minPrice && cottagesPath) {
      setMin(cottagesData.minPrice)
    }

  }, [flatsData.cityName, flatsData.rooms, flatsData.minPrice, flatsData.maxPrice, cottagesPath, cottagesData.type, cottagesData.maxPrice, cottagesData.minPrice])


  const onHandleDispatchToProps = () => {
    if (homePath || flatsPath)
      dispatch(getDataFlats({
        cityName: city?.value || flatsData.cityName,
        rooms: rooms?.value || flatsData.rooms,
        minPrice: min || flatsData.minPrice,
        maxPrice: max || flatsData.maxPrice,
      }))

    if (cottagesPath)
      dispatch(getDataCottages({
        cityName: cottagesData.cityName,
        rooms: cottagesData.rooms,
        type: type?.value || cottagesData.type,
        minPrice: min || cottagesData.minPrice,
        maxPrice: max || cottagesData.maxPrice,
      }))
  }

  return (
    <>
      <div className={cn(classes.wrapper, {
        [classes.wrapperTransform]: !homePath
      })}>
        <div className={classes.filters}>
          {homePath &&
            <div className={classes.autocomplete}>
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

          <div className={cn(classes.autocomplete, {
            [classes.autocompleteTransform]: !homePath
          })}>
            {flatsPath || homePath ? <>
              <span className={classes.label}>Комнаты</span>
              <Autocomplete
                value={rooms}
                options={roomsOptions}
                placeholder={"Выберите"}
                onChange={onChangeRooms}
                classNames={classes.select}
              />
            </> : null
            }
            {cottagesPath &&
              <>
                <span className={classes.label}>Тип</span>
                <Autocomplete
                  value={type}
                  options={cottagesType}
                  placeholder={"Выберите"}
                  onChange={onChangeType}
                  classNames={classes.select}
                />
              </>
            }
          </div>
          <div className={cn(classes.autocomplete, {
            [classes.Transform]: !homePath
          })}>
            <span className={classes.label}>Цена за сутки (BYN)</span>
            <span>
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
            </span>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button className={cn(classes.optionsButton, {
            [classes.optionsButtonTransform]: !homePath
          })} onClick={() => console.log("click")}>
            Больше опций
            <IconSvg id={"#options"} className={classes.optionsIcon} />
          </Button>
          {homePath &&
            <Button className={classes.mapButton}>
              На карте
              <IconSvg id={"#mark"} className={classes.mark} />
            </Button>
          }
          {!homePath &&
            <Button
              title={"Очистить"}
              className={classes.clearBtn}
              onClick={() => console.log('clear filter data')}
            />}

          {!homePath ?
            <Button
              title={"Показать объекты"}
              className={classes.showSelectedBtn}
              onClick={onHandleDispatchToProps}
            />
            :
            <Button
              title="Показать"
              className={classes.showAllBtn}
              onClick={() => { navigate("/catalog/flats"); onHandleDispatchToProps() }}
            />
          }
        </div>
      </div>
      <div>
        <ExtraOptions />
      </div>
    </>
  )
}

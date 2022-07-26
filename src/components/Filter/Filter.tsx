import React, { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"

import { setFlats } from "../../store/reducers/flatsReducer";
import { setCottages } from "../../store/reducers/cottagesReducer";
import { setBaths } from "../../store/reducers/bathsReducer";

import { ExtraOptions } from "../ExtraOptions/ExtraOptions";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { OnChangeValue } from "react-select";

import { ISelectOption } from "../../Interfaces/ISelectOption";


import { IconSvg } from "../IconSvg/IconSvg";
import { Button } from "../Button/Button";

import { path } from "../../constants/path"
import { fetchFlats } from "../../store/thunks/flatThunk";
import { fetchCottages } from "../../store/thunks/cottagesThunk";
import { fetchBaths } from "../../store/thunks/bathsThunk";

import classes from "./Filter.module.scss";
import cn from "classnames"



export const Filter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { flatsData, flats } = useAppSelector(state => state.flats)
  const { cottagesData, cottages } = useAppSelector(state => state.cottages)
  const { bathsData, baths } = useAppSelector(state => state.baths)

  useEffect(() => {
    dispatch(fetchFlats())
    dispatch(fetchCottages())
    dispatch(fetchBaths())
  }, [dispatch])


  const homePath = location.pathname === path.HOME ? true : false
  const cottagesPath = location.pathname === path.COTTAGES ? true : false
  const flatsPath = location.pathname === path.APARTMENTS ? true : false
  const bathsPath = location.pathname === path.BATHS ? true : false
  const carsPath = location.pathname === path.CARS ? true : false

  const [openOptions, setOpenOptions] = useState(false)

  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [city, setCity] = useState<ISelectOption>()
  const [rooms, setRooms] = useState<ISelectOption>()
  const [typeCottages, setTypeCottages] = useState<ISelectOption>()
  const [typeBaths, setTypeBaths] = useState<ISelectOption>()

  const onChangeCity = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setCity(newValue as ISelectOption)
  }
  const onChangeRooms = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setRooms(newValue as ISelectOption)
  }
  const onChangeTypeCottages = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setTypeCottages(newValue as ISelectOption)
  }
  const onChangeTypeBaths = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setTypeBaths(newValue as ISelectOption)
  }


  const onHandleDispatchToProps = () => {
    if (homePath || flatsPath)
      dispatch(setFlats({
        cityName: city?.value || flatsData.cityName,
        rooms: rooms?.value || flatsData.rooms,
        minPrice: min,
        maxPrice: max,
      }))

    if (cottagesPath)
      dispatch(setCottages({
        cityName: cottagesData.cityName,
        rooms: cottagesData.rooms,
        type: typeCottages?.value,
        minPrice: min,
        maxPrice: max,
      }))

    if (bathsPath) {
      dispatch(setBaths({
        cityName: bathsData.cityName,
        rooms: bathsData.rooms,
        type: typeBaths?.value,
        minPrice: min,
        maxPrice: max,
      }))
    }
    setMin("")
    setMax("")
  }

  return (
    <section>
      <div className={cn(classes.wrapper, {
        [classes.wrapperTransform]: !homePath
      })}>
        <div className={classes.filters}>
          {homePath &&
            <div className={classes.autocomplete}>
              <span className={classes.label}>Город</span>
              <Autocomplete
                value={city}
                options={flats[3]?.cityOptions}
                placeholder={"Выберите"}
                onChange={onChangeCity}
                classNames={classes.select}
              />
            </div>
          }

          <div className={cn(classes.autocomplete, {
            [classes.transform]: !homePath
          })}
          >
            {homePath || flatsPath ?
              <>
                <span className={classes.label}>
                  {!bathsPath ? "Комнаты" : "Комнат отдыха"}
                </span>
                <Autocomplete
                  value={rooms}
                  options={flats[4]?.roomsOptions}
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
                  value={typeCottages}
                  options={cottages[0]?.typeOptions}
                  placeholder={"Выберите"}
                  onChange={onChangeTypeCottages}
                  classNames={classes.select}
                />
              </>
            }
            {bathsPath &&
              <>
                <span className={classes.label}>Тип</span>
                <Autocomplete
                  value={typeBaths}
                  options={baths[0]?.bathsOptions}
                  placeholder={"Выберите"}
                  onChange={onChangeTypeBaths}
                  classNames={classes.select}
                />
              </>
            }
          </div>
          <div className={cn(classes.autocomplete, {
            [classes.transform]: !homePath
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
          <Button className={cn(classes.optionButton, classes.four, {
            [classes.btnTransform]: !homePath,
            [classes.activeClass]: openOptions
          })} onClick={() => setOpenOptions(isOpen => !isOpen)}>
            <span>Больше опций</span>
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
              className={classes.clearBtn}
              onClick={() => console.log('clear filter data')}
            >
              Очистить
            </Button>
          }

          {!homePath ?
            <Button
              className={classes.showSelectedBtn}
              onClick={onHandleDispatchToProps}>
              Показать объекты
            </Button>
            :
            <Button
              className={classes.showAllBtn}
              onClick={() => { navigate("/catalog/flats"); onHandleDispatchToProps() }}
            >
              Показать
            </Button>
          }
        </div>
      </div>
      <div>
        {
          openOptions && <ExtraOptions />
        }
      </div>

    </section>
  )
}

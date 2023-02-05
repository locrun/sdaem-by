import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { setSelectedData } from "../../../store/reducers/filterReducer";
import { fetchFlats } from "../../../store/thunks/flatThunk";

import { usePageTitle } from "../../../hooks/usePageTitle";
import { Autocomplete } from "../../../components/Autocomplete/Autocomplete";
import { Carousel } from "../../../components/Carousel/Carousel";
import { Spinner } from "../../../Spinner/Spinner";
import { ErrorMessage } from "../../../components/Notification/ErrorMessage/ErrorMessage";
import { NothingFound } from "../../../components/Notification/NothingFound/NothingFound";

import { ISelectOption } from "../../../Interfaces/ISelectOption";
import { SingleValue } from "react-select";

import { metroOptions, areaOptions } from "../../../data/dataOptions"

import cn from "classnames"
import classes from "./Rent.module.scss"
import { Button } from "../../../components/ui-kit/Button/Button";


export const Rent: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])

  const { loading, error } = useAppSelector(state => state.flats)
  const { stateData, filteredData } = useAppSelector(state => state.filter)
  const { rentTitle, totalOffersTitle } = usePageTitle()



  let [defMetro] = useState({ value: "Метро", label: "Метро" })
  let [defArea] = useState({ value: "Район", label: "Район" })
  let metroValue = stateData.metro ? { value: stateData.metro, label: stateData.metro } : defMetro
  let areaValue = stateData.area ? { value: stateData.area, label: stateData.area } : defArea



  const onChangeHandler = (newValue: SingleValue<ISelectOption>) => {
    if (newValue) {
      let key: string | number | symbol | undefined | any = newValue.key
      dispatch(setSelectedData({
        ...stateData,
        [key]: newValue?.value,
      }))
    }
  }

  const onClickHandler = () => {
    navigate("/catalog/flats")
  }

  return (
    <section className={classes.wrapper}>
      <div className={"container"}>
        <div className={classes.rent}>
          <div className={classes.flex}>
            <div className={classes.titleWrapper}>
              <p className={classes.subtitle}>Квартиры на сутки</p>
              <h3 className={classes.title}>{rentTitle}</h3>
            </div>
            <div className={classes.selectWrapper}>
              <div className={classes.autocomplete}>
                <Autocomplete
                  value={metroValue}
                  options={metroOptions}
                  placeholder={"Выберите"}
                  classNames={cn(classes.selectMetro)}
                  onChange={(newValue) => onChangeHandler(newValue)}
                />
              </div>
              <div className={classes.autocomplete}>
                <Autocomplete
                  value={areaValue}
                  options={areaOptions}
                  placeholder={"Выберите"}
                  classNames={cn(classes.selectArea)}
                  onChange={(newValue) => onChangeHandler(newValue)}
                />
              </div>
            </div>
          </div>
          <div>
            {!loading && !error ?
              <>
                {filteredData?.length > 0 ?
                  <Carousel data={filteredData} />
                  :
                  <NothingFound />
                }
              </>
              :
              <>
                <Spinner visible={loading} />
                <ErrorMessage error={error} />
              </>
            }

          </div>
          <div className={classes.offers}>
            <div className={classes.row}>
              <span>{filteredData?.length}</span>
              <span>+</span>
              <p>{totalOffersTitle}</p>
            </div>
            <Button
              className={classes.seeAllBtn}
              onClick={onClickHandler}
            >
              Посмотреть все
            </Button>
          </div>
        </div>
      </div>
    </section >
  )
}
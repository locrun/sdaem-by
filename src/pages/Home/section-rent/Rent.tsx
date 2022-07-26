import { FC, useState, useEffect } from "react"
import { useAppDispatch } from "../../../hooks/redux/redux-hooks";
import { Link } from "react-router-dom";

import { Autocomplete } from "../../../components/Autocomplete/Autocomplete"
import { TiledCards } from "../../../components/TiledCards/TiledCards";

import { useFilter } from "../../../hooks/useFilter";
import { setMinsk } from "../../../store/reducers/flatsReducer";
import { fetchFlats } from "../../../store/thunks/flatThunk";


import { ISelectOption } from "../../../Interfaces/ISelectOption";
import { OnChangeValue } from "react-select";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "../swiper.scss"
import classes from "./Rent.module.scss"

const metroOptions = [
  { value: "Малиновка", label: "Малиновка" },
  { value: "Институт культуры", label: "Институт культуры" },
  { value: "Восток", label: "Восток" },
  { value: "Академия наук", label: "Академия наук" },
  { value: "Грушевка", label: "Грушевка" }
]

const areaOptions = [
  { value: "Шабаны", label: "Шабаны" },
  { value: "Советский", label: "Советский" },
  { value: "Ленинский", label: "Ленинский" },
  { value: "Первомайский", label: "Первомайский" },
  { value: "Московский", label: "Московский" },
  { value: "Фрунзенский", label: "Фрунзенский" }
]

export const Rent: FC = () => {
  const dispatch = useAppDispatch()
  const { minskData } = useFilter()

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])

  const [metro, setMetro] = useState<ISelectOption>()
  const [area, setArea] = useState<ISelectOption>()

  useEffect(() => {
    dispatch(setMinsk({
      metro: metro?.value || null,
      area: area?.value || null
    }))
  }, [dispatch, metro, area])

  const onChangeMetro = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setMetro(newValue as ISelectOption)
  }

  const onChangeArea = (newValue: OnChangeValue<ISelectOption, boolean>) => {
    setArea(newValue as ISelectOption)
  }

  return (
    <section className={classes.wrapper}>
      <div className={"container"}>
        <div className={classes.rent}>
          <div className={classes.flex}>
            <div className={classes.titleWrapper}>
              <p className={classes.subtitle}>Квартиры на сутки</p>
              <h3 className={classes.title}>Аренда квратир в Минске</h3>
            </div>
            <div className={classes.selectWrapper}>
              <Autocomplete
                options={metroOptions}
                placeholder={'Метро'}
                classNames={classes.selectStyle}
                onChange={onChangeMetro} />
              <Autocomplete
                options={areaOptions}
                placeholder={"Район"}
                classNames={classes.selectStyle}
                onChange={onChangeArea} />
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            simulateTouch={false}
            slidesPerView={3}
            spaceBetween={30}
            navigation
          >
            {
              minskData?.map((flat) =>
                <SwiperSlide key={flat.id}>
                  <TiledCards data={flat} />
                </SwiperSlide>
              )
            }
          </Swiper>
          <div className={classes.offers}>
            <div className={classes.row}>
              <span>{minskData?.length}</span>
              <span>+</span>
              <p>Предложений по Минску</p>
            </div>
            <Link to={"/catalog"} className={classes.seeAllBtn}>
              Посмотреть все
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
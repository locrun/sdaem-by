import { FC } from "react"
import { Link } from "react-router-dom";

import { Autocomplete } from "../../../components/Autocomplete/Autocomplete"
import { Card } from "../components/Card/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "../swiper.scss"
import classes from "./Rent.module.scss"


export const Rent: FC = () => {
  const onChangeHandler = () => {
    console.log("change")
  }

  const data = [
    { id: 0, desc: "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..." },
    { id: 1, desc: "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..." },
    { id: 2, desc: "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..." }
  ]
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
              <Autocomplete placeholder={'Метро'} classNames={classes.selectStyle} onChange={onChangeHandler} />
              <Autocomplete placeholder={"Район"} classNames={classes.selectStyle} onChange={onChangeHandler} />
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            navigation
          >
            {
              data.map((card) =>
                <SwiperSlide key={card.id}>
                  <Card data={card} />
                </SwiperSlide>
              )
            }
          </Swiper>

          <div className={classes.offers}>
            <div className={classes.row}>
              <span>341</span>
              <span>+</span>
              <p>Предложений по Минску</p>
            </div>
            <Link to={"/"} className={classes.seeAllBtn}>
              Посмотреть все
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiledCards } from "../Cards/TiledCards/TiledCards";
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "./swiper.scss"
import { IResponseData } from '../../Interfaces/IResponseData';


interface IPropsCarousel {
  data: IResponseData[],
  slidesPerView?: number
  className?: string
}

export const Carousel: FC<IPropsCarousel> = ({ data, slidesPerView = 3, }) => {

  return (
    <Swiper
      modules={[Navigation]}
      simulateTouch={false}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      navigation
    >
      {
        data?.map((flat: IResponseData) =>
          <SwiperSlide key={flat.id}>
            <TiledCards data={flat} />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

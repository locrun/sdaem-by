import { FC } from 'react'
import { useNavigate } from "react-router"

import { Button } from "../../ui-kit/Button/Button"
import { IconSvg } from "../../IconSvg/IconSvg"
import { Badges } from './Badges/Badges'

import flatImage from "../../../assets/images/promo-1.png"
import cottageImage from "../../../assets/images/promo-2.png"
import bathImage from "../../../assets/images/promo-3.png"
import carImage from "../../../assets/images/promo-4.png"

import { path } from "../../../constants/pages"
import classes from "./GalleryAdsCards.module.scss"


const promocards = [
  {
    id: 0, title: "Квартиры на сутки", subtitle: "Снять квартиру", path: path.apartments, isButtons: true,
    image: flatImage, classes: classes.largeCard
  },
  { id: 1, title: "Коттеджи и усадьбы", subtitle: "Снять коттедж на праздник", path: path.cottages, image: cottageImage, classes: classes.smallCard },
  { id: 2, title: "Бани и сауны", subtitle: "Попариться в бане с друзьми", path: path.baths, image: bathImage, classes: classes.smallCard, mr: "30px" },
  { id: 3, title: "Авто на прокат", subtitle: "Если срочно нужна машина", path: path.cars, image: carImage, classes: classes.largeCard }
]

export const GalleryAdsCards: FC = () => {
  const navigate = useNavigate()

  const onClickHandler = (path: string) => {
    navigate(path)
  }

  return (
    <div className={classes.cards}>
      {promocards.map((card) => {
        return (
          <div
            key={card.id}
            className={card.classes}
            style={card.mr ? { marginRight: "30px" } : {}}
          >
            <p className={classes.subtitle}>{card.subtitle}</p>
            <h3 className={classes.title}>{card.title}</h3>
            {card.isButtons && <Badges />}
            <img src={card.image} className={classes.image} alt="аренда бань и саун" />
            {!card.isButtons &&
              <Button className={classes.jumpButton} onClick={() => onClickHandler(card.path)}>
                <IconSvg id={"#arrow"} className={classes.arrow} />
              </Button>
            }
          </div>
        )
      })}
    </div >
  )
}

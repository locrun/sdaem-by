import { FC } from "react"

import { IconSvg } from "../IconSvg/IconSvg"
import { Button } from "../Button/Button"
import { ICards } from "../../Interfaces/ICards"
import classes from "./ListCards.module.scss"

interface IProps {
  data: ICards;
  className?: string
}

export const ListCards: FC<IProps> = (props) => {

  const { city, address, metro, area, image, price,
    capacity, rooms, description, type } = props.data

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={image} alt="картинка" />
      </div>
      <div className={classes.cardData}>
        <div className={classes.flex}>
          <div>
            <span className={classes.title}>{rooms}-комн. апартаменты на Грушевке</span>
            <p className={classes.address}>
              <IconSvg id={"#mark"} className={classes.locationIcon} />
              {city}, {address || type}
            </p>
          </div>
          <div className={classes.price}>
            {price} BYN <span>за сутки</span>
          </div>
        </div>
        <ul className={classes.listInfo}>
          <li className={classes.capacity}>
            {capacity}
            <IconSvg id={"#user"} className={classes.userIcon} />
          </li>
          <li className={classes.rooms}>{rooms}комн.</li>
          <li className={classes.metro}>
            <IconSvg id={"#metro"} className={classes.metroIcon} />
            {metro}
          </li>
          <li className={classes.area}><span>район:</span>{area}</li>
        </ul>
        <div className={classes.description}>
          {description}
        </div>
        <div className={classes.buttons}>
          <div className={classes.flex}>
            <Button className={classes.contactsBtn}>
              Контакты
              <IconSvg id={"#phone"} className={classes.phoneIcon} />
            </Button>
            <Button className={classes.bookmarksBtn} >
              В закладки
              <svg className={classes.heartIcon} width="15" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" stroke="currentColor" />
              </svg>
            </Button>
          </div>
          < Button className={classes.moreBtn} >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
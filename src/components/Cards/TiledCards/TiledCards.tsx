import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { OwnerCard } from "../OwnerCard/OwnerCard";
import { Button } from "../../ui-kit/Button/Button";
import { IconSvg } from "../../IconSvg/IconSvg";

import { IResponseData } from "../../../Interfaces/IResponseData";

import cn from "classnames"
import classes from "./TiledCards.module.scss";
import React from "react";

interface IProps {
  data: IResponseData;
  className?: string
}

export const TiledCards: FC<IProps> = ({ data: {
  id, city, address, metro,
  area, image, price,
  capacity, room, square,
  description, ownerContacts }, className }) => {
  const location = useLocation()

  const [isFavorite, setIsFavorite] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [ref, setRef] = React.useState<React.MutableRefObject<HTMLButtonElement>>()

  useEffect(() => {
    const handleClickOutsideCard = (e: MouseEvent) => {
      const path = e.composedPath()
      if (path[0] !== ref?.current) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutsideCard)
    return () => {
      window.removeEventListener('click', handleClickOutsideCard)
    }

  }, [ref, setIsOpen])

  return (
    <div className={cn(classes.card, className)}>
      <div className={classes.image}>
        <img src={image} alt="картинка" />
      </div>
      <div className={classes.cardData}>
        <ul className={classes.info}>
          <li className={classes.price}>
            {price} BYN
            <span>за сутки</span>
          </li>
          <li className={classes.capacity}>
            <p>{capacity}</p>
            <IconSvg id={"#user"} className={classes.user} />
          </li>
          <li className={classes.rooms}>{room} комн.</li>
          <li className={classes.square}>{square} м²</li>
        </ul>
        <div className={classes.location}>
          <p className={classes.locationItem}>
            <IconSvg id={"#mark"} className={classes.markIcon} />
            {city}, {address}
          </p>
          <p className={classes.locationItem}>
            <IconSvg id={"#metro"} className={classes.metroIcon} />
            <span className={classes.metroName}>{metro}</span>
            <span className={classes.right}>
              <IconSvg id={"#dot"} className={classes.dotIcon} />
              {area}
            </span>
          </p>
        </div>
        <p className={classes.desc}>
          {description}
        </p>
        <div className={classes.buttons}>
          {location.pathname !== "/" ?
            <Button className={classes.bookmarksBtn}
              onClick={() => setIsFavorite(isActive => !isActive)}>
              {isFavorite ?
                <IconSvg id={"#heartActive"} className={classes.heartIcon} />
                :
                <IconSvg id={"#heart"} className={classes.heartIcon} />
              }
            </Button> : null
          }
          <Button
            className={classes.contactsBtn}
            onClick={() => setIsOpen(isPrevState => !isPrevState)}
            setRef={setRef}
          >
            Контакты
            <IconSvg id={"#phone"} className={classes.phoneIcon} />
          </Button>
          < Button className={classes.moreBtn} >
            Подробнее
          </Button>
        </div>
      </div>
      <div className={classes.owner}>
        {isOpen && <OwnerCard contacts={ownerContacts} />}
      </div>
    </div >
  )
}


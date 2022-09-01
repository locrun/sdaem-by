import { FC, useState, useEffect } from "react"

import { IconSvg } from "../../IconSvg/IconSvg"
import { Button } from "../../ui-kit/Button/Button"
import { IResponseData } from "../../../Interfaces/IResponseData"
import classes from "./ListCards.module.scss"
import { OwnerCard } from "../OwnerCard/OwnerCard"

interface IProps {
  data: IResponseData;
  className?: string
}

export const ListCards: FC<IProps> = ({ data:
  { city, address, metro,
    area, image, price,
    capacity, room, description, ownerContacts, type } }) => {

  const [isFavorite, setIsFavorite] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [ref, setRef] = useState<React.MutableRefObject<HTMLButtonElement>>()


  useEffect(() => {
    const handleClickOutsideCard = (e: any) => {
      if (e.path[0] !== ref?.current) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutsideCard)
    return () => {
      window.removeEventListener('click', handleClickOutsideCard)
    }

  }, [ref, setIsOpen])

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={image} alt="картинка" />
      </div>
      <div className={classes.cardData}>
        <div className={classes.flex}>
          <div>
            <span className={classes.title}>{room}-комн. апартаменты на Грушевке</span>
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
          <li className={classes.rooms}>{room} комн.</li>
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
            <Button
              setRef={setRef}
              className={classes.contactsBtn}
              onClick={() => setIsOpen(isPrevState => !isPrevState)}
            >
              <IconSvg id={"#phone"} className={classes.phoneIcon} />
              Контакты
            </Button>
            <Button className={classes.bookmarksBtn}
              onClick={() => setIsFavorite(isActive => !isActive)}
            >
              В закладки
              {isFavorite ?
                <IconSvg id="#heartActive" className={classes.heartIcon} />
                :
                <IconSvg id="#heart" className={classes.heartIcon} />
              }
            </Button>
          </div>
          < Button className={classes.moreBtn} >
            Подробнее
          </Button>
        </div>
      </div>
      <div className={classes.owner}>
        {isOpen && <OwnerCard contacts={ownerContacts} />}
      </div>

    </div>
  )
}
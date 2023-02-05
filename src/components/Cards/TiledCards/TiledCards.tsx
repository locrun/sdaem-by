import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { OwnerCard } from "../OwnerCard/OwnerCard";
import { Button } from "../../ui-kit/Button/Button";
import { IconSvg } from "../../IconSvg/IconSvg";

import { IResponseData } from "../../../Interfaces/IResponseData";

import cn from "classnames"
import classes from "./TiledCards.module.scss";
import React from "react";
import { setIsFavorite } from "../../../store/reducers/bookmarksReducer";

interface IProps {
  data: IResponseData;
  className?: string
  hiddenField?: string
}

export const TiledCards: FC<IProps> = ({ data: {
  id, city, address, metro,
  area, image, price,
  capacity, room, square,
  description, ownerContacts }, className, hiddenField }) => {



  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isActive } = useAppSelector(state => state.bookmarks)
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

  const onClickHandler = () => {
    //dispatch(setIsFavorite(id))
    setIsFavorite(setState => !setState)
  }

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
          {hiddenField !== "hidden" ?
            <li className={classes.square}>{square} м²</li>
            : ""
          }
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
        {hiddenField !== "hidden" ?
          <p className={classes.desc}>
            {description}
          </p>
          : ""
        }
        <div className={classes.buttons}>
          {location.pathname !== "/" ?
            <Button
              className={classes.bookmarksBtn}
              onClick={onClickHandler}>
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
          < Button onClick={() => {
            navigate(`/catalog/product/${id}`);
            window.scrollTo(0, 0)
          }}
            className={classes.moreBtn}
          >
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


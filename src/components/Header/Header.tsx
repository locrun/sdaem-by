import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { IconSvg } from '../IconSvg/IconSvg'
import { Button } from "../Button/Button"
import { Navigation } from '../Navigation/Navigation'
import classes from './Header.module.scss'
import React from 'react'

const pages = [
  { id: 0, name: "Главная", path: "/" },
  { id: 1, name: "Новости", path: "/news" },
  { id: 2, name: "Размещение и тарифы", path: "/rate" },
  { id: 3, name: "Объявления на карте", path: "/ads", isIcon: true, },
  { id: 4, name: "Контакты", path: "/contacts" },
];

const catergories = [
  { id: 0, name: "Квартиры на сутки", path: "/", isIcon: true, dropDown: true },
  { id: 1, name: "Коттеджы и усадьбы", path: "/" },
  { id: 2, name: "Бани и Сауны", path: "/" },
  { id: 3, name: "Авто на прокат", path: "/" },
];


export const Header = () => {
  return (
    <header>
      <div className={classes.topInner} >
        <div className={classes.topHeaderContainer}>
          <Navigation
            data={pages}
            display={"flex"}
            className={classes.topNavItem}
            iconStyles={classes.topMark}

          />
          <div className={classes.buttons}>
            <Link to={"/bookmarks"} className={classes.bookmark} >
              Закладки
              <IconSvg id={"#heart"} className={classes.heart} />
            </Link>
            <Link to={"/login"} className={classes.login}>
              Вход и регистрация
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.bottomInner}>
        <div className={classes.bottomHeaderContainer}>
          <Logo />
          <Navigation
            data={catergories}
            display={"flex"}
            iconStyles={classes.bottomMark}
            className={classes.bottomNavitem}
          />
          <Button title="+ Разместить объявление"
            className={classes.placeBtn}
            onClick={() => console.log("click!!!")}
          />
        </div>
      </div>
    </header>
  )
}


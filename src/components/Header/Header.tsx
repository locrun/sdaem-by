import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { IconSvg } from '../IconSvg/IconSvg'
import { Button } from "../Button/Button"
import { Navigation } from '../Navigation/Navigation'
import { DropdownPage } from '../Dropdown/DropdownPage'
import classes from './Header.module.scss'

const mainPages = [
  { id: 0, name: "Главная", path: "/" },
  { id: 1, name: "Новости", path: "/news" },
  { id: 2, name: "Размещение и тарифы", path: "/rate" },
  { id: 3, name: "Объявления на карте", path: "/ads", isIcon: true, },
  { id: 4, name: "Контакты", path: "/contacts" },
];

export const Header: FC = () => {
  return (
    <header>
      <div className={classes.topInner} >
        <div className={classes.topHeaderContainer}>
          <Navigation
            data={mainPages}
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
          <DropdownPage />
          <Button
            className={classes.placeBtn}
            onClick={() => console.log("click!!!")}
          >
            + Разместить объявление
          </Button>
        </div>
      </div>
    </header>
  )
}


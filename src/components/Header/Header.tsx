import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { IconSvg } from '../IconSvg/IconSvg'

import classes from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation
          className={[classes.navList, classes.navListItem]}
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
      <HeaderMenu />
    </header>
  )
}



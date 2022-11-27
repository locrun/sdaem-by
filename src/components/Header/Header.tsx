import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { IconSvg } from '../IconSvg/IconSvg'

import { MyLoader } from '../../Spinner/preloader'
import { useRequest } from '../../hooks/useRequest'

import classes from './Header.module.scss'
import { api } from '../../constants/api'

export interface IHeaderNavData {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
}


const accountMenu = [
  { "id": 0, "item": "Личный кабинет", "path": "personal", "icon": "grid" },
  { "id": 1, "item": "+ Добавить объявление", "path": "put" },
  { "id": 2, "item": "Инструкция пользователя", "path": "manual" },
  {
    "id": 3,
    "item": "Поднятия объявлений",
    "path": "raise"
  },
  { "id": 4, "item": "Редактировать профиль", "path": "edit-account" }
]

export const Header: FC = () => {
  const { data, loading, error } = useRequest(api.navigation)

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {loading && <MyLoader />}
        {error ?
          <span className={classes.error}>
            Ошибка сервера, попробуйте обновить страницу
          </span>
          :
          <Navigation
            data={data}
            className={[classes.navList, classes.navListItem]}
          />
        }
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
      <div className={classes.wrapper}>
        <div className="container">
          <Navigation
            data={accountMenu}
            className={[
              classes.userAccountMenuList,
              classes.userAccountMenuListItem
            ]}
          />
        </div>
      </div>
    </header>
  )
}



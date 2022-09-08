import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { IconSvg } from '../IconSvg/IconSvg'

import { MyLoader } from '../../Spinner/preloader'
import { useRequest } from '../../hooks/useRequest'

import classes from './Header.module.scss'
import { NAVIGATION } from '../../constants/query'

export interface IHeaderNavData {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
}
export const Header: FC = () => {
  const { data, loading, error } = useRequest(NAVIGATION)

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
    </header>
  )
}



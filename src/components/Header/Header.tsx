import { FC, useEffect, useState } from 'react'
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
export const Header: FC = () => {
  const { data, loading, error } = useRequest(api.navigation)
  const [accountMenu, setAccountMenu] = useState([])
  let l = 1

  useEffect(() => {
    const request = async () => {
      const response = await fetch("api/userAccountNav")
      const res = await response.json()
      setAccountMenu(res)
    }
    request()
  }, [])


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
      {
        l === 1 &&
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
      }
    </header>
  )
}



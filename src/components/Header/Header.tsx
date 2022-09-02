import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { IconSvg } from '../IconSvg/IconSvg'

import classes from './Header.module.scss'
import { MyLoader } from '../../Spinner/preloader'
type Data = {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
}[]
export const Header: FC = () => {
  const [data, setData] = useState<Data>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const requestHandler = async () => {
      try {
        const request = await fetch('/api/navigation');
        const response = await request.json();
        setLoading(false);
        setData(response);
      } catch (error) {
        console.log(error)
        setError(true);
        setLoading(false);
      }
    };
    requestHandler();
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {loading && <MyLoader />}

        {error ? <span className={classes.error}>Ошибка сервера, попробуйте обновить страницу</span>
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



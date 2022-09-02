import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Logo/Logo'
import { Dropdown } from '../../Dropdown/Dropdown'

import classes from './HeaderMenu.module.scss'
import { IList } from '../../Dropdown/DropdownList/DropdownList'
import { MyLoader } from '../../../Spinner/preloader'

export const HeaderMenu: FC = () => {

  const [data, setData] = useState<IList[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const requestHandler = async () => {
      try {
        const request = await fetch('/api/menu');
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
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Logo />
        {loading && <MyLoader />}
        {error ?
          <span className={classes.error}>Ошибка сервера, попробуйте обновить страницу</span>
          :
          <Dropdown data={data} />
        }
        <Link
          to={"/404"}
          className={classes.link}
        >
          + Разместить объявление
        </Link>
      </div>
    </div>
  )
}
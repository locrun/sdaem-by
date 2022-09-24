import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Logo/Logo'
import { Dropdown } from '../../Dropdown/Dropdown'
import { MyLoader } from '../../../Spinner/preloader'
import { useRequest } from '../../../hooks/useRequest'

import classes from './HeaderMenu.module.scss'
import { api } from '../../../constants/api'

export const HeaderMenu: FC = () => {

  const { data, loading, error } = useRequest(api.dropdown)

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Logo />
        {loading && <MyLoader count={4} />}
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
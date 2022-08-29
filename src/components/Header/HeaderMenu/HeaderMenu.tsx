import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Logo/Logo'
import { Dropdown } from '../../Dropdown/Dropdown'

import classes from './HeaderMenu.module.scss'


export const HeaderMenu: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Logo />
        <Dropdown />
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
import { FC } from 'react'

import classes from "./MyAds.module.scss"

export const MyAds: FC = () => {
  return (
    <div className={classes.content}>
      <h3 className={classes.paymentTitle}>Оплатите несколько объектов сразу, чтобы получить скидку</h3>
      <input
        type="checkbox"
        id="all"
        className={classes.checkbox}
      />
      <label htmlFor="all">Выбрать все</label>
      <button className={classes.button}>Оплатить выбранные</button>
    </div>
  )
}

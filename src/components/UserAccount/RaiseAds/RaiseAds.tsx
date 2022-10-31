import { FC } from 'react'

import classes from "./RaiseAds.module.scss"
export const RaiseAds: FC = () => {
  return (
    <div className={classes.raiseAds}>
      <div className={classes.flex}>
        <div className={classes.elips}>
          132
        </div>
        <div>
          <h3 className={classes.title}>Поднятий объявлений</h3>
          <span className={classes.remains}>132</span>
          <span className={classes.expires}>12 дней</span>
        </div>
      </div>
      <div className={classes.buttons}>
        <button className={classes.buyBtn}>+ Купить поднятия</button>
        <button className={classes.moreBtn}>Подробнее</button>
      </div>
    </div>
  )
}

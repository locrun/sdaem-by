import { FC } from 'react'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { setFlag, setIsActive } from '../../../../store/reducers/modalReducer'
import { Button } from '../../../ui-kit/Button/Button'

import classes from "./RaiseAds.module.scss"
export const RaiseAds: FC = () => {
  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    dispatch(setIsActive(true))
    document.body.classList.add("hidden")
    dispatch(setFlag("buy"))
  }

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
        <Button
          className={classes.buyBtn}
          onClick={onClickHandler}
        >
          + Купить поднятия
        </Button>
        <Button className={classes.moreBtn}>Подробнее</Button>
      </div>
    </div>
  )
}

import { FC } from 'react'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { setFlag, setIsActive } from '../../../../store/reducers/modalReducer'
import classes from "./MyAds.module.scss"

export const MyAds: FC = () => {
  const dispatch = useAppDispatch()

  const onHandleClick = () => {
    dispatch(setIsActive(true))
    dispatch(setFlag("invoice"))
    document.body.classList.add("hidden")
  }
  return (
    <div className={classes.content}>
      <h3 className={classes.paymentTitle}>
        Оплатите несколько объектов сразу, чтобы получить скидку</h3>
      <input
        type="checkbox"
        id="all"
        className={classes.checkbox}
      />
      <label htmlFor="all">Выбрать все</label>
      <button
        className={classes.button}
        onClick={onHandleClick}
      >
        Оплатить выбранные
      </button>
    </div>
  )
}

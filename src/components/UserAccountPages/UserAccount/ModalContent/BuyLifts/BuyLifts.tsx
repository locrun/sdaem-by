import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../../hooks/redux-hooks'
import { setIsActive } from '../../../../../store/reducers/modalReducer'

import { Button } from '../../../../ui-kit/Button/Button'

import cn from "classnames"
import classes from "./ByLifts.module.scss"


const data = [
  { id: 0, title: "100 поднятий", price: "5 BYN", day: "30 дней", name: "raise" },
  { id: 1, title: "200 поднятий", price: "10 BYN", day: "30 дней", name: "raise" },
  { id: 2, title: "Анлим поднятий", desc: "до 10 объявлений в ЛК", price: "50 BYN", day: "30 дней", name: "raise" },
  { id: 3, title: "Анлим поднятий", desc: "10 объявлений и более", price: "100 BYN", day: "30 дней", name: "raise" }
]

export const BuyLifts: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [active, setActive] = useState<number | null>(null)
  const [price, setPrice] = useState('')


  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onClickHandler = () => {
    navigate("/personal/check")
    dispatch(setIsActive(false))
  }
  return (
    <div className={classes.buyLifts}>
      <div>
        <h1 className={classes.buyTitle}>Купить поднятия</h1>
        <p className={classes.buySubtitle}>Выберите пакет поднятий</p>
      </div>

      <div className={classes.flex}>
        {
          data.map(({ id, name, title, desc, price, day }) => {
            return (
              <label className={cn(classes.label, {
                [classes.active]: id === active
              })}
              >
                <div className={classes.flexColumn}>
                  <span className={classes.title}>{title}</span>
                  <span className={classes.subtitle}>{desc}</span>
                  <div>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.day}>&nbsp;/&nbsp;</span>
                    <span className={classes.day}>{day}</span>
                  </div>
                </div>
                <input
                  name={name}
                  value={id}
                  className={classes.inputRadio}
                  type="radio"
                  onChange={(e) => {
                    changeCheckbox(e);
                    setActive(id);
                    setPrice(price)
                  }}
                />
                <span className={classes.customRadio}></span>
              </label>
            )
          })}
      </div>
      <div className={classes.flex}>
        <div className={classes.totalPrice}>
          <span>К оплате:&nbsp;&nbsp;</span>
          <span className={classes.priceBlack}>{price}</span>
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.cancelBtn}
            onClick={() => dispatch(setIsActive(false))}
          >
            Отменить
          </Button>
          <Button
            className={classes.createBtn}
            onClick={onClickHandler}
          >Создать счет</Button>
        </div>
      </div>
    </div>
  )
}


import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../../hooks/redux-hooks'
import { Autocomplete } from '../../../../Autocomplete/Autocomplete'
import { SingleValue } from 'react-select'
import { ISelectOption } from '../../../../../Interfaces/ISelectOption'

import { setFlag, setIsActive } from '../../../../../store/reducers/modalReducer'
import { Button } from '../../../../ui-kit/Button/Button'

import cn from "classnames"
import classes from "./InvoicePayment.module.scss"

const data = [
  { id: 0, apartment: "4-комн. апартаменты на Грушевке", address: "Минск, б-р Мулявина, д. 10" },
  { id: 1, apartment: "4-комн. апартаменты на Грушевке длинное название объекта", address: "Минск, б-р Мулявина, д. 10" },
  { id: 2, apartment: "4-комн. апартаменты на Грушевке длинное название объекта", address: "Минск, б-р Мулявина, д. 10" },
  { id: 3, apartment: "4-комн. апартаменты на Грушевке", address: "Минск, б-р Мулявина, д. 10" },
  { id: 4, apartment: "4-комн. апартаменты на Грушевке", address: "Минск, б-р Мулявина, д. 10" },
]

const rates = [
  { id: 0, value: "Top", label: "Top" },
  { id: 1, value: "Gold", label: "Gold" },
  { id: 2, value: "Free", label: "Free" },
]
const months = [
  { id: 0, value: "1", label: "1" },
  { id: 1, value: "2", label: "2", },
  { id: 2, value: "3", label: "3" },
  { id: 3, value: "4", label: "4", },
  { id: 4, value: "5", label: "5" },
]
export const InvoicePayment: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  let [rate, setRateValue] = useState({ value: "Top", label: "Top" })
  let [month, setMonthValue] = useState({ value: "1", label: "1" })

  const onChangeRate = (newValue: SingleValue<ISelectOption>) => {
    setRateValue(newValue as ISelectOption)
  }
  const onChangeMonth = (newValue: SingleValue<ISelectOption>) => {
    setMonthValue(newValue as ISelectOption)
  }

  const onClickHandler = () => {
    dispatch(setIsActive(false))
    dispatch(setFlag(""))
  }
  const onHandleClick = () => {
    dispatch(setIsActive(false))
    navigate("/personal/check")
  }
  return (
    <div className={classes.content}>
      <div>
        <h4 className={classes.objTitle}>Вы выбрали объекты:</h4>
        <ul className={cn(classes.cardList, classes.scroll)}>
          {data.map((item) => {
            return (
              <li className={classes.cardListItem}>
                <span className={classes.apartment}>{item.apartment}</span>
                <span className={classes.address}>{item.address}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3 className={classes.payTitle}>Выставить счет к оплате</h3>
        <div className={classes.pay}>
          <span className={classes.label}>Тариф</span>
          <Autocomplete
            value={rate}
            options={rates}
            classNames={classes.select}
            onChange={(newValue) => {
              onChangeRate(newValue)
            }}
          />
          <span className={classes.label}>Срок (месяцев)</span>
          <Autocomplete
            value={month}
            options={months}
            classNames={classes.select}
            onChange={(newValue) => {
              onChangeMonth(newValue)
            }}
          />

          <div>
            <ul className={classes.priceList}>
              <li className={classes.priceListItem}>Сумма без скидки:
                <span className={classes.price}>30 BYN</span>
              </li>
              <li className={classes.priceListItem}>Скидка:
                <span className={classes.price}>5 BYN</span>
              </li>
              <li className={classes.priceListItem}>
                <span className={classes.bold}>Итого к оплате:</span>
                <span className={classes.bold}>25 BYN</span>
              </li>
            </ul>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.cancelBtn}
              onClick={onClickHandler}
            >
              Отменить
            </Button>
            <Button
              className={classes.createBtn}
              onClick={onHandleClick}
            >Создать счет</Button>
          </div>
        </div>
      </div >

    </div >
  )
}

import { FC } from 'react'
import classes from "./Steps.module.scss"

export const Steps: FC = () => {
  return (
    <ul className={classes.steps}>
      <li>1 шаг: <strong>Адрес</strong></li>
      <li>2 шаг: <strong>Описание</strong></li>
      <li>3 шаг: <strong>Описание цены</strong></li>
      <li>4 шаг: <strong>Комнаты, спальные места</strong></li>
      <li>5 шаг: <strong>Контакты владельца</strong></li>
      <li>6 шаг: <strong>Комфорт</strong></li>
      <li>7 шаг: <strong>Добавление фото</strong></li>
    </ul>
  )
}

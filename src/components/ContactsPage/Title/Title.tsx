import { FC } from 'react'
import classes from "./Title.module.scss"

export const Title: FC = () => {
  return (
    <>
      <h3 className={classes.title}>Контакты</h3>
      <p className={classes.subtitle}>
        Если у Вас есть пожелания, предложения или претензии по
        организации работы сайта мы всегда рады услышать Ваше мнение.
      </p>
    </>

  )
}

import { FC } from "react"
import { LoginForm } from "../../components/Form/LoginForm/LoginForm"

import cn from "classnames"
import classes from "./LogIn.module.scss"

export const LogIn: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <h3 className={classes.title}>Авторизация</h3>
        <span className={cn(classes.text, classes.mb)}>
          Авторизируйтесь, чтобы начать
          публиковать свои объявления
        </span>
        <LoginForm />
      </div>
    </section>
  )
}


import { FC } from "react"
import { LoginForm } from "../../components/Form/LoginForm/LoginForm"
import cn from "classnames"
import classes from "./LogIn.module.scss"
import { Modal } from "../../components/Modal/Modal"
import { useAppSelector } from "../../hooks/redux/redux-hooks"

const modalContent = {
  title: "Поздравляем!",
  subtitle: "Логин и пароль держите в тайне",
  buttonText: "Войти на сайт"
}

export const LogIn: FC = () => {
  const { isActive } = useAppSelector(state => state.modal)
  return (
    <>
      {isActive && <Modal modalContent={modalContent} />}
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
    </>
  )
}


import { FC } from 'react'
import { Button } from '../../../components/ui-kit/Button/Button'


import reg from "../../../assets/images/reg.svg"
import cn from "classnames"
import classes from "./Registery.module.scss"

export const Registery: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.content}>
          <img className={classes.image} src={reg} alt="reg" />
          <div className={classes.flex}>
            <h3 className={classes.title}>
              Регистрация
            </h3>
            <p className={classes.text}>
              Пройдя простую регистрацию на сайте у Вас появится <strong> личный кабинет</strong> , в котором возможно <strong> бесплатно создавать и публиковать </strong> объявления на сайте. Таким образом, через несколько минут Вы можете начать привлечение клиентов!
            </p>
            <Button className={classes.btn}>
              + Разместить объявление
            </Button>
          </div>
        </div>
      </div>
    </section>

  )
}

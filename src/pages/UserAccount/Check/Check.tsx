import { FC } from 'react'
import { Button } from '../../../components/ui-kit/Button/Button'
import classes from "./Check.module.scss"

export const Check: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.titleWrapper}>
            <h1 className={classes.title}>Добрый день, Dmitriy!</h1>
            <h1 className={classes.title}>Вам выставлен счет на оказание услуги</h1>
          </div>

          <div className={classes.table}>
            <h1>Table</h1>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.payLaterBtn}>Оплачу позже</Button>
            <Button className={classes.payCardBtn}>Оплата картой</Button>
            <Button className={classes.payEripBtn}>Оплата ЕРИП</Button>
          </div>
        </div>
      </div>
    </section>

  )
}

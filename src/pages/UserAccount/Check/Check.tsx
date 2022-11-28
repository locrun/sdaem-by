import { FC } from 'react'
import { Button } from '../../../components/ui-kit/Button/Button'

import cn from "classnames"
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
            <div className={classes.fieldNames}>
              <span className={classes.description}>Описание</span>
              <span className={classes.service}>Услуга</span>
              <span className={classes.rate}>Тариф</span>
              <span className={classes.price}>Цена (BYN)</span>
              <span className={classes.quantity}>Количество</span>
              <span className={classes.total}>Итого</span>
            </div>
            <div className={classes.fieldValues}>
              <span className={cn(classes.description, classes.style)}>
                <span className={classes.id}>ID: 4813</span>
                <span className={classes.address}> Адрес: Минск, бр. Мулявина, д.10</span>
              </span>
              <span className={cn(classes.service, classes.style)}>Размещение</span>
              <span className={cn(classes.rate, classes.style)}>Топ</span>
              <span className={cn(classes.price, classes.style)}>30.00</span>
              <span className={cn(classes.quantity, classes.style)}>1</span>
              <span className={cn(classes.total, classes.style)}>30.00</span>
            </div>
            <div className={classes.totalPayable}>

              <div className={classes.discount}>
                <span>Скидка:</span>
                <span>5.00 BYN</span>
              </div>
              <div className={classes.totalPrice}>
                <span>Итого к оплате:</span>
                <span>25.00 BYN</span>
              </div>
            </div>
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

import { FC } from 'react'


import calc from "../../../assets/images/calc.png"
import classes from "./PaymentByCheck.module.scss"

export const PaymentByCheck: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <h3 className={classes.title}>
            Оплату возможно произвести 2 способами:
          </h3>

          <div className={classes.mt}>
            <div>
              <div className={classes.descr}>
                <h4 className={classes.paymentTitle}>1. Оплата через "расчет"(ерип)</h4>
                <p className={classes.text}>
                  Оплатить размещение Вы можете через систему <strong>"Расчет" (ЕРИП)</strong>, в любом удобном для Вас месте, в удобное для Вас время, в удобном для Вас пункте банковского обслуживания – интернет-банке, с помощью мобильного банкинга, инфокиоске, кассе банков, банкомате и т.д.
                </p>
                <p className={classes.text}>
                  Совершить оплату можно с использованием наличных денежных средств, электронных денег и банковских платежных карточек в пунктах банковского обслуживания банков, которые оказывают услуги по приему платежей, а также посредством инструментов дистанционного банковского обслуживания.
                </p>
              </div>
              <div className={classes.descr}>
                <h4 className={classes.paymentTitle}>Для проведения платежа необходимо:</h4>
                <ul className={classes.stepsList}>
                  <li className={classes.step1}>
                    <strong>Выбрать:</strong>
                    <ul className={classes.underList}>
                      <li>Пункт "Система "Расчет" (ЕРИП)</li>
                      <li>Интернет-магазины/сервисы</li>
                      <li>S</li>
                      <li>Sdaem.by</li>
                    </ul>
                  </li>
                  <li className={classes.step2}>
                    <p className={classes.txt}>
                      Для оплаты ввести <strong>Номер заказа</strong>, который вы получили.
                    </p>
                  </li>
                  <li className={classes.step3}>
                    <p className={classes.txt}>
                      <strong>Проверить</strong> корректность информации и <strong>совершить платеж.</strong>
                    </p>
                  </li>
                </ul>
                <p>
                  Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о необходимости проведения платежа через систему ”Расчет“ (ЕРИП).
                </p>
              </div>
            </div>
            <div className={classes.image}>
              <img src={calc} alt="calc" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

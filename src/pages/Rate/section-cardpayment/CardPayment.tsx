import { FC } from 'react'
import visa from "../../../assets/images/visa.svg"
import webpay from "../../../assets/images/webpay.svg"
import verified from "../../../assets/images/verifiedByVisa.svg"
import mastercard from "../../../assets/images/mastercard.svg"
import securecode from "../../../assets/images/securecode.svg"
import belkart from "../../../assets/images/belkart.svg"


import cn from "classnames"
import classes from "./CardPayment.module.scss"


const arr = [
  { name: visa, class: classes.visa },
  { name: webpay, class: classes.webpay },
  { name: verified, class: classes.verified },
  { name: mastercard, class: classes.mastercard },
  { name: belkart, class: classes.belkart },
  { name: securecode, class: classes.securecode },

]

export const CardPayment: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.flex}>
            <div className={classes.text}>
              <h3 className={classes.title}>
                2. Оплата банковской картой через систему
                электронных платежей WEBPAY
              </h3>
              <p className={classes.descr}>
                Система предоставляет возможность оплаты карточками международных платежных систем VISA и MasterCard всех типов и БЕЛКАРТ.
              </p>
            </div>
            <div className={classes.icons}>
              {arr.map(pay =>
                <div key={pay.name} className={pay.class}>
                  <img src={pay.name} alt={pay.name} />
                </div>
              )}
            </div>
          </div>
          <div className={classes.orderStep}>
            <h3 className={classes.title}>Процедура заказа:</h3>
            <ul className={classes.stepList}>
              <li className={cn(classes.first, classes.item)}>
                <p>Выберите в личном кабинете необходимую услугу.</p>
              </li>
              <li className={cn(classes.second, classes.item)}>
                <p>
                  Выберите подходящие для вас способы оплаты (банковской картой или через ЕРИП).
                </p>
              </li>
              <li className={cn(classes.three, classes.item)}>
                <p>
                  Заполните специальную форму предложенную системой и нажмите кнопку «Оформить заказ».
                </p>
              </li>
            </ul>
          </div>
          <div className={classes.descrWrapper}>
            <div className={classes.col}>
              <p className={cn(classes.descr, classes.mb)}>
                Передача данных осуществляется по отдельному каналу с применением современных методов шифрования. При этом исключается любая возможность перехвата конфиденциальной информации. Данные передаются в зашифрованном виде и сохраняются только на специализированном сервере системы WEBPAY™.
              </p>
              <p className={cn(classes.descr, classes.mb)}>
                <strong>
                  После совершения оплаты с использованием банковской карточки необходимо сохранять полученные карт-чеки
                </strong> для сверки с выпиской из карт-счёта (с целью подтверждения совершённых операций в случае возникновения спорных ситуаций).
              </p>
              <p className={cn(classes.descr, classes.mb)}>
                <strong>
                  При невозможности самостоятельной оплаты через ЕРИП или пластиковой картой в личном кабинете необходимо связаться с администратором сайта</strong> (контакты и способы связи указаны выше), согласовать   место, назвать id номер объявления, которое необходимо разместить и произвести оплату. После этого администратор самостоятельно разместит приоритетные объявления в течение 1 часа.

              </p>
            </div>

            <div className={classes.col}>
              <p className={cn(classes.descr, classes.mb)}>При оплате банковской платежной картой возврат денежных средств осуществляется на ту же карточку, с которой была произведена оплата. Для их возврата необходимо обратиться к администрации сайта: <strong>sdaem@sdaem.by</strong> или по телефону <strong>
                +375 29 621 48 33 Андрей.
              </strong>
              </p>
              <p className={cn(classes.descr, classes.mb)}>
                <strong>Минимальный срок приоритетного размещения составляет - 1 месяц.</strong>
              </p>

              <p className={cn(classes.descr, classes.mb)}>
                Услуга считается оказанной, когда объявления были размещены на согласованных местах и на согласованный период времени. В случае отмены заказа до истечения минимального срока размещения принятые платежи не возвращаются.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

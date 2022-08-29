import visa from "../../../assets/images/visa.svg"
import webpay from "../../../assets/images/webpay.svg"
import verified from "../../../assets/images/verifiedByVisa.svg"
import mastercard from "../../../assets/images/mastercard.svg"
import securecode from "../../../assets/images/securecode.svg"
import belkart from "../../../assets/images/belkart.svg"

import classes from "./Payment.module.scss"

const arr = [{ name: visa }, { name: webpay }, { name: verified },
{ name: mastercard }, { name: securecode }, { name: belkart }]

export const Payment = () => {

  return (
    <div className={classes.payment}>
      {arr.map(pay =>
        <div key={pay.name}>
          <img src={pay.name} alt="иконка оплаты" />
        </div>
      )}
    </div>)
}
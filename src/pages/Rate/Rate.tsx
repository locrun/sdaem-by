import { FC } from "react";

import { Placing } from "./section-placing/Placing";
import { Registery } from "./section-registery/Registery";
import { FreePlacing } from "./section-freeplacing/FreePlacing";
import { PayPlacing } from "./section-payplacing/PayPlacing";
import { PremiumPlacing } from "./section-premiumplacing/PremiumPlacing";
import { Contacts } from "./section-contacts/Contacts";
import { Priorety } from "./section-priorety/Priorety";
import { PaymentByCheck } from "./section-paymentbycheck/PaymentByCheck";
import { CardPayment } from "./section-cardpayment/CardPayment";
export const Rate: FC = () => {
  return (
    <>
      <Placing />
      <Registery />
      <FreePlacing />
      <PayPlacing />
      <PremiumPlacing />
      <Contacts />
      <Priorety />
      <PaymentByCheck />
      <CardPayment />
    </>
  )
}
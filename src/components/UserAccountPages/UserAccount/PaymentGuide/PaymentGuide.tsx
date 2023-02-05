import { FC } from 'react'
import { Link } from 'react-router-dom'
import file from "../../../../assets/images/file.svg"
import classes from "./PaymentGuide.module.scss"

export const PaymentGuide: FC = () => {
  return (
    <Link to={"/manual"} className={classes.paymentGuide}>
      <div className={classes.iconWrapper}>
        <img src={file} alt="file" />
      </div>
      <h3 className={classes.title}>
        Инструкция по оплате, стоимость и система скидок
      </h3>
    </Link>
  )
}

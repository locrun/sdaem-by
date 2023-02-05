import { FC } from 'react'
import { IconSvg } from '../../IconSvg/IconSvg'

import avatar from "../../../assets/images/avatar.png"
import classes from "./OwnerCard.module.scss"

export const OwnerCard: FC = () => {
  return (
    <div className={classes.card}>
      <img src={avatar} className={classes.image} alt="" />
      <span className={classes.title}>Владелец</span>
      <span className={classes.name}>Dmitriy</span>
      <a href="mailto:vladimir6234@tut.by" className={classes.email}>dmitriy6234@tut.by</a>
      <a href="tel:+375292911444" className={classes.tel}>+375 (29) 291-14-44</a>

      <div className={classes.social}>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={classes.linkViber}>
          Написать в Viber
          <IconSvg id={"#viber"} className={classes.viber} />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={classes.linkWhatsapp}>
          Написать в WhatsApp
          <IconSvg id={"#whatsapp"} className={classes.whatsapp} />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className={classes.linkMail}
        >
          Написать на почту
          <IconSvg id={"#mail"} className={classes.mail} />
        </a>
      </div>
      <button className={classes.button}>Показать еще</button>
    </div>
  )
}

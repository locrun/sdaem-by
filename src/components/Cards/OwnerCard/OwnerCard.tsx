import { FC } from "react"

import { IconSvg } from "../../IconSvg/IconSvg"

import { IOwnerContacts } from "../../../Interfaces/IResponseData"


import classes from "./OwnerCard.module.scss"

interface IPropsOwnerCard {
  contacts: IOwnerContacts
  className?: string,
}

export const OwnerCard: FC<IPropsOwnerCard> = (props) => {
  return (
    props.contacts &&
    <div className={classes.owner}>
      <img src={props.contacts.avatar} className={classes.image} alt="" />
      <span className={classes.title}>{props.contacts.title}</span>
      <span className={classes.name}>{props.contacts.name}</span>
      <a href="tel:+375292911444" className={classes.tel}>{props.contacts.tel}</a>
      <a href="mailto:vladimir6234@tut.by" className={classes.email}>{props.contacts.ownerEmail}</a>
      <div className={classes.social}>
        <a
          href={props.contacts.viber}
          target="_blank"
          rel="noreferrer"
          className={classes.linkViber}>
          <IconSvg id={"#viber"} className={classes.viber} />
        </a>
        <a
          href={props.contacts.whatsapp}
          target="_blank"
          rel="noreferrer"
          className={classes.linkWhatsapp}>
          <IconSvg id={"#whatsapp"} className={classes.whatsapp} />
        </a>
        <a
          href={props.contacts.mail}
          target="_blank"
          rel="noreferrer"
          className={classes.linkMail}
        >
          <IconSvg id={"#mail"} className={classes.mail} />
        </a>
      </div>
    </div>
  )
}
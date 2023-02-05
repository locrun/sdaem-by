import { FC } from 'react'
import { IconSvg } from '../../../components/IconSvg/IconSvg'

import classes from "./Contacts.module.scss"
export const Contacts: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.text}>
            <h4 className={classes.title}>Контакты</h4>
            <p >
              Узнать о свободных местах и сделать заявку на платное размещение Вы можете:
            </p>
          </div>
          <div className={classes.contacts}>
            <div className={classes.tel}>
              <div className={classes.iconWrap}>
                <IconSvg id="#phone" className={classes.iconTel} />
              </div>
              <div className={classes.group} >
                <a href="tel:+375296214833" className={classes.telLink}>
                  <span>
                    +375(29) 621-48-33 (Андрей)
                  </span>
                </a>
                <span className={classes.social}>(viber, whatsApp, telegram)</span>
              </div>
            </div>
            <div className={classes.mail}>
              <div className={classes.iconWrap}>
                <IconSvg id="#mail" className={classes.iconMail} />
              </div>
              <a href="mailto:sdaem@sdaem.by" className={classes.mailLink}>
                <span>sdaem@sdaem.by</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

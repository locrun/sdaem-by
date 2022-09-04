import { FC } from 'react'
import { IconSvg } from '../../IconSvg/IconSvg'

import classes from "./Messengers.module.scss"

const messenger = [
  { id: "#viber", href: "https://www.viber.com/ru/" },
  { id: "#telegram", href: "https://telegram.org/" },
  { id: "#whatsapp", href: "https://www.whatsapp.com/?lang=ru" }
]
export const Messengers: FC = () => {
  return (
    <div className={classes.messanger}>
      {messenger.map((icon) => {
        return (
          <a
            href={icon.href}
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            <IconSvg id={icon.id} className={classes.icon}
            />
          </a>
        )
      })}
    </div>
  )
}

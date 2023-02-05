import { FC } from 'react'
import { IconSvg } from '../../IconSvg/IconSvg'

import cn from "classnames"
import classes from "./Social.module.scss"

const social = [
  { id: "#instagram", href: "https://www.instagram.com/", classes: false },
  { id: "#vk", href: "https://vk.com/", classes: false },
  { id: "#facebook", href: "https://facebook.com/", classes: true }
]
export const Social: FC = () => {
  return (
    <div className={classes.social}>
      {social.map((icon) =>
        <a
          key={icon.id}
          href={icon.href}
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <IconSvg id={icon.id} className={cn(classes.icon, {
            [classes.facebook]: icon.classes
          })}
          />
        </a>
      )}
    </div>
  )
}

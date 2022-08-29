import { IconSvg } from "../../IconSvg/IconSvg"

import cn from "classnames"
import classes from "./Social.module.scss"

const arr = [
  { id: '#instagram', href: "https://www.instagram.com/", classes: false },
  { id: '#vk', href: "https://vk.com/", classes: false },
  { id: '#facebook', href: "https://facebook.com/", classes: true }]

export const Social = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Мы в соцсетях</p>
      <div className={classes.flex}>
        {arr.map((icon) =>
          <a
            key={icon.id}
            href={icon.href}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <IconSvg id={icon.id} className={cn(classes.icon, {
              [classes.facebook]: icon.classes
            })} />
          </a>
        )}
      </div>
    </div>
  )
}
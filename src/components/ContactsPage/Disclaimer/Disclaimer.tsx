import { FC } from 'react'
import { IconSvg } from '../../IconSvg/IconSvg'

import classes from "./Disclaimer.module.scss"

export const Disclaimer: FC = () => {
  return (
    <div className={classes.disclaimer}>
      <IconSvg id="#alert" className={classes.alertIcon} />
      <span>
        Администрация сайта не владеет информацией
        о наличии свободных квартир
      </span>
    </div>
  )
}

import { FC } from 'react'
import { OpenMapButton } from '../../../components/OpenMapButton/OpenMapButton'

import classes from "./Map.module.scss"

export const Map: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <h3 className={classes.title}>Показать квартиры на карте</h3>
          <OpenMapButton />
        </div>
      </div>
    </section>
  )
}

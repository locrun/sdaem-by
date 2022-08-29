import { FC } from "react"
import { OpenMapButton } from "../../../components/OpenMapButton/OpenMapButton"

import classes from "./ShowMap.module.scss"

export const ShowMap: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <h3 className={classes.title}>
          Показать найденные квартиры на карте
        </h3>
        <div className={classes.subtitle}>
          <p>
            Ищите новостройки рядом с работой,
          </p>
          <p>
            парком или родственниками
          </p>
        </div>
        <OpenMapButton />
      </div>
    </section>
  )
}
import { FC } from "react"
import { OpenMapButton } from "../../../components/OpenMapButton/OpenMapButton"

import { Title } from "../../../components/Title/Title"
import classes from "./ShowMap.module.scss"

export const ShowMap: FC = () => {
  return (
    <section className={classes.sectionWrapper}>
      <div className="container">
        <Title className={classes.title}>
          Показать найденные квартиры на карте
        </Title>
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
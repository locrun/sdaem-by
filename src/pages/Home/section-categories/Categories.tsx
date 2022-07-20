import React, { FC } from "react"


import { CategoryCards } from "./CategoryCards/CategoryCards"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import classes from "./Categories.module.scss"

export const Categories: FC = () => {
  return (
    <section className={"container"}>
      <div className={classes.content}>
        <CategoryCards />
        <CategoryMenu />
      </div>
    </section >
  )
}




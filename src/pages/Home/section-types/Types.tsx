import React, { FC } from "react"


import { ProductTypes } from "./ProductTypes/ProductTypes"
import { ProductTypesMenu } from "./ProductTypesMenu/ProductTypesMenu"
import classes from "./Types.module.scss"

export const Types: FC = () => {
  return (
    <section className={"container"}>
      <div className={classes.content}>
        <ProductTypes />
        <ProductTypesMenu />
      </div>
    </section >
  )
}




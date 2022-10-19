
import { FC, useMemo } from 'react'
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs'
import macbook from "../../../assets/images/mac-book-pro.svg"

import cn from "classnames"
import classes from "./Placing.module.scss"

export const Placing: FC = () => {
  const breadCrumbsItems = useMemo(() =>
    [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: "Размещение и тарифы",
      }
    ], []
  )
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.flex}>
          <Breadcrumbs
            breadCrumbsItems={breadCrumbsItems}
            fill={classes.fill}
            color={classes.color}
          />
        </div>
        <h1 className={classes.title}>Размещение и тарифы </h1>
        <div className={classes.image}>
          <img src={macbook} alt="mac book" />
        </div>
      </div>
    </section >
  )
}

import React, { FC } from "react"
import { Link } from "react-router-dom"
import { IconSvg } from "../../components/IconSvg/IconSvg"
import classes from "./Breadcrumbs.module.scss"

export interface IData {
  id: number,
  title?: string,
  path?: string
}
export interface IPropsBreadcrumbs {
  breadCrumbsItems: IData[]
}
export const Breadcrumbs: FC<IPropsBreadcrumbs> = ({ breadCrumbsItems }) => {
  return (
    <nav className={classes.breadcrumbs}>
      {breadCrumbsItems.map((crumb) => {
        return (
          (crumb.title === "Home" ?
            <Link to="/">
              <IconSvg id={"#home-run"} className={classes.homeRun} />
            </Link>
            : '')
          ||
          (!crumb.path ?
            <>
              <IconSvg id={"#dot"} className={classes.dot} />
              <span>{crumb.title}</span>
            </>
            :
            <Link
              to={crumb.path}
              className={classes.breadcrumbsLink}>
              {crumb.title}
            </Link>
          ))
      })}
    </nav>
  )
}







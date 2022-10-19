import { FC } from "react"
import { Link } from "react-router-dom"
import { IconSvg } from "../../components/IconSvg/IconSvg"

import cn from "classnames"
import classes from "./Breadcrumbs.module.scss"

export interface IData {
  id: number,
  title?: string,
  path?: string
}
export interface IPropsBreadcrumbs {
  breadCrumbsItems: IData[]
  fill?: string
  color?: string
}
export const Breadcrumbs: FC<IPropsBreadcrumbs> = ({ breadCrumbsItems, color, fill }) => {
  return (
    <nav className={classes.breadcrumbs}>
      {breadCrumbsItems.map((crumb) => {
        return (
          (crumb.title === "Home" ?
            <Link to="/">
              <IconSvg id={"#home-run"} className={cn(classes.homeRun, fill)} />
            </Link>
            : '')
          ||
          (!crumb.path ?
            <>
              <IconSvg id={"#dot"} className={cn(classes.dot, fill)} />
              <span className={color}>{crumb.title}</span>
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





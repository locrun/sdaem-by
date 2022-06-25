import { FC } from "react"
import { Link } from "react-router-dom"
import { IconSvg } from "../../components/IconSvg/IconSvg"
import classes from "./Breadcrumbs.module.scss"

interface IPropsBreadcrumbs {
  title: string
}

export const Breadcrumbs: FC<IPropsBreadcrumbs> = (props) => {
  const { title } = props
  return (
    <div className={classes.breadcrumbs}>
      <Link to={"/"}>
        <IconSvg id={"#home-run"} className={classes.homeRun} />
      </Link>
      <IconSvg id={"#dot"} className={classes.dot} />
      {title}
    </div>
  )
}
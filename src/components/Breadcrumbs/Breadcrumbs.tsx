import { FC } from "react"
import { Link } from "react-router-dom"
import { IconSvg } from "../../components/IconSvg/IconSvg"
import classes from "./Breadcrumbs.module.scss"
import cn from "classnames"

type IPropsBreadcrumbs = {
  name: string,
  children?: JSX.Element,
  fill?: string,
  marginBottom?: string
}

export const Breadcrumbs: FC<IPropsBreadcrumbs> = (props) => {
  const { name, children, marginBottom, fill } = props

  const styles = {
    marginBottom,
  }
  return (
    <div
      style={styles}
      className={classes.breadcrumbs}
    >
      <Link to={"/news"} className={classes.breadcrumbsLink}>
        <IconSvg id={"#home-run"} className={cn(!fill ? classes.homeRun : fill)} />
        {children && <span className={classes.children}>{children}</span>}
      </Link>
      <IconSvg id={"#dot"} className={classes.dot} />
      <span>{name}</span>
    </div>
  )
}
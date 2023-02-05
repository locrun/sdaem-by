import { FC } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { path } from "../../constants/pages"
import classes from "./Logo.module.scss"

interface IPropsLogo {
  isText?: boolean
}
export const Logo: FC<IPropsLogo> = ({ isText }) => {
  const { pathname } = useLocation()

  return (
    pathname !== path.home ?
      <Link to="/" className={classes.logo}>
        <div className={classes.image}>
          <img src={require("../../assets/images/logo.png")} alt="Логотип" />
        </div>
        {isText && <span className={classes.logoText}>Сдаем бай</span>}
      </Link>
      :
      <div className={classes.logo}>
        <div className={classes.image}>
          <img src={require("../../assets/images/logo.png")} alt="Логотип" />
        </div>
        {isText && <span className={classes.logoText}>Сдаем бай</span>}
      </div>
  )
}
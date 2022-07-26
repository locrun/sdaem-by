import { FC } from "react"
import classes from "./Logo.module.scss"

interface IPropsLogo {
  children?: React.ReactNode;
}
export const Logo: FC<IPropsLogo> = ({ children }) => {
  return (
    <div className={classes.logo}>
      <img src={require("../../assets/images/logo.png")} alt="Логотип" />
      {children}
    </div>
  )
}
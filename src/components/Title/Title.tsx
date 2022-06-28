
import { FC } from "react"
import classes from "./Title.module.scss"

interface IPropsTitle {
  title: string,
  fontSize?: string,
  lineHeight?: string
}

export const Title: FC<IPropsTitle> = (props) => {
  const { title, fontSize, lineHeight } = props
  const styles = {
    fontSize,
    lineHeight
  }
  return (
    <span
      style={styles}
      className={classes.title}>
      {title}
    </span>)
}
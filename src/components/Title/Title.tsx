
import { FC } from "react"
import classes from "./Title.module.scss"

interface IPropsTitle {
  title: string,
  fontSize?: string,
  lineHeight?: string
  color?: string
}

export const Title: FC<IPropsTitle> = (props) => {
  const { title, fontSize, lineHeight, color } = props
  const styles = {
    fontSize,
    lineHeight,
    color
  }
  return (
    <span
      style={styles}
      className={classes.title}>
      {title}
    </span>)
}
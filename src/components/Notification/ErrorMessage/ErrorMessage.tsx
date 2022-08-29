import { FC } from 'react'
import classes from "./ErrorMessage.module.scss"

interface IPropsErrorMessage {
  error: string | null
}
export const ErrorMessage: FC<IPropsErrorMessage> = ({ error }) => {
  return (
    <h3 className={classes.error}>{error}</h3>
  )
}

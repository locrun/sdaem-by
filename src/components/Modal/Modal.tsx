import { FC, ReactNode } from "react"
import classes from "./Modal.module.scss"

interface IContentModal {
  children: ReactNode
}

export const Modal: FC<IContentModal> = ({ children }) => {

  return (
    <div className={classes.window}>
      <div className={classes.flex}>
        {children}
      </div>
    </div>
  )
}
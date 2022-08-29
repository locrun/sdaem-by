import { FC } from "react"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../../hooks/redux/redux-hooks"
import { setIsActive } from "../../store/reducers/modalReducer"

import { Button } from "../ui-kit/Button/Button"
import classes from "./Modal.module.scss"

interface IContentModal {
  title: string,
  subtitle: string,
  buttonText: string
}

interface IPropsModal {
  modalContent: IContentModal,
}

export const Modal: FC<IPropsModal> = ({ modalContent: { title, subtitle, buttonText } }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const clickHandler = () => {
    dispatch(setIsActive(false))
    navigate("/")
  }
  return (
    <div className={classes.window}>
      <div className={classes.flex}>
        <div className={classes.content}>
          <h3 className={classes.title}>
            {title}
          </h3>
          <p className={classes.subtitle}>
            {subtitle}
          </p>
          <Button
            className={classes.button}
            onClick={clickHandler}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}
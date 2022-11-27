import { FC } from 'react'
import { useAppDispatch } from "../../hooks/redux-hooks"
import { useNavigate } from "react-router-dom";
import { Button } from '../ui-kit/Button/Button'
import classes from "./Modal.module.scss"
import { setIsActive } from '../../store/reducers/modalReducer';

interface IModalContent {
  title: string,
  subtitle: string,
  buttonText: string
}

interface IContent {
  content: IModalContent
}

export const ModalContent: FC<IContent> = ({ content: { title, subtitle, buttonText } }) => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    dispatch(setIsActive(false))
    navigate("/personal")
  }
  return (
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
  )
}

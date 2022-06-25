import { FC } from "react";
import cn from "classnames";
import classes from './Button.module.scss'


interface IButtonProps {
  title?: string,
  className?: string;
  disabled?: boolean;
  onClick?: () => void,
  children?: JSX.Element;
}

export const Button: FC<IButtonProps> = (props) => {
  const { title, className, onClick, children } = props;
  return (
    <button
      type="button"
      className={cn(classes.button, className)}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
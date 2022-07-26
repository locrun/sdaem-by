import { FC } from "react";

import classes from './Button.module.scss'
import cn from "classnames";


interface IPropsButton {
  className?: string;
  disabled?: boolean;
  onClick?: () => void,
  children?: React.ReactNode | boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<IPropsButton> = ({ className, onClick, children, type = "button", disabled }) => {

  return (
    <button
      type={type}
      className={cn(classes.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
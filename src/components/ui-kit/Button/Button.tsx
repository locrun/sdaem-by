import React, { FC, useEffect } from "react";

interface IPropsButton {
  className?: string;
  disabled?: boolean;
  onClick?: () => void,
  children?: React.ReactNode | boolean;
  type?: "button" | "submit" | "reset";
  setRef?: (arg: React.MutableRefObject<HTMLButtonElement>) => void
}

export const Button: FC<IPropsButton> = ({ setRef, className, onClick, children, type = "button", disabled }) => {

  const btnRef = React.useRef<any>(null)
  useEffect(() => {
    if (setRef) {
      setRef(btnRef)
    }
  }, [btnRef, setRef])

  return (
    <button
      ref={btnRef}
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
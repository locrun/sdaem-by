import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes
} from "react"
import { FieldError } from "react-hook-form"

import { IconSvg } from "../../IconSvg/IconSvg"

import cn from "classnames"
import classes from "./Input.module.scss"


export interface IPropsInput extends
  DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,
  HTMLInputElement> {
  className?: string,
  label?: string,
  iconId: string,
  id?: string,
  name?: string,
  type?: string,
  error?: FieldError | undefined,
  placeholder?: string
  ref?: ForwardedRef<HTMLInputElement>
}

export const Input = forwardRef(({ className, label, name, id, iconId, type, error, placeholder, ...rest }: IPropsInput, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <div>
      {
        label &&
        <label htmlFor={id} className={classes.label}>{label}</label>
      }
      <div className={classes.inputWrapper}>
        <input
          className={cn(className, classes.input, {
            [classes.error]: error
          })}
          name={name}
          id={id}
          type={type}
          ref={ref}
          {...rest}
          placeholder={placeholder}
        />
        <IconSvg id={iconId} className={cn({
          [classes.user]: iconId === '#user',
          [classes.mail]: iconId === '#mail',
          [classes.password]: iconId === '#password',
        })}
        />
        <IconSvg id="#warning" className={cn(classes.warning, {
          [classes.showWarning]: error
        })} />
      </div>
    </div>
  )
})





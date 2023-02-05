import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import Reaptcha from "reaptcha";

import { useAppDispatch } from "../../../hooks/redux-hooks";
import { setIsActive } from "../../../store/reducers/modalReducer"

import { Input } from "../../ui-kit/Input/Input"
import { Button } from "../../ui-kit/Button/Button"
import { IconSvg } from "../../IconSvg/IconSvg";

import { email, login, password, confirm } from '../patterns';

import cn from "classnames"
import classes from "./RegistrationFrom.module.scss"
import { IFormFields } from "../../../Interfaces/IFormFields";

type Error = {
  error: boolean,
  text: string
}
export const RegistrationForm = () => {

  const dispatch = useAppDispatch()
  const [verified, setVerified] = useState(false);
  const [showError, setShowError] = useState<Error>({ error: false, text: "" })
  const onVerify = () => {
    setVerified(true);
  };
  const { register, formState: { errors }, reset, handleSubmit }
    =
    useForm<IFormFields>({ mode: "onSubmit" })

  useEffect(() => {
    const error = errors.login || errors.email || errors.password || errors.confirmPassword
    setShowError({ error: Boolean(error), text: "Ошибка ввода" })
  }, [errors])

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    dispatch(setIsActive(true))
    reset()
  }

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("login", {
          required: true,
          minLength: login
        })}
        error={errors.login}
        iconId="#user"
        className={classes.input}
        placeholder="Логин"
      />
      <Input
        {...register('email', {
          required: true,
          pattern: email
        })}
        error={errors.email}
        iconId="#mail"
        className={classes.input}
        placeholder="Электронная почта"
      />
      <Input
        {...register("password", {
          required: true,
          minLength: password
        })}
        error={errors.password}
        type="password"
        iconId="#password"
        className={classes.input}
        placeholder="Пароль"
      />
      <Input
        {...register("confirmPassword", {
          required: true,
          minLength: confirm
        })}
        error={errors.confirmPassword}
        type="password"
        iconId="#password"
        className={classes.input}
        placeholder="Повторите пароль"
      />
      <Reaptcha
        sitekey="6LdbXDohAAAAAOSRPg7cLWorWEB_GXXS9isiZ-eB"
        onVerify={onVerify}
      />
      {showError.error &&
        <span
          className={cn(classes.inputError, {
            [classes.showError]: showError.error
          })}>
          {showError.text}
          <IconSvg id="#warning" className={classes.icon} />
        </span>
      }
      <Button
        type="submit"
        className={classes.button}
        disabled={!verified}
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}

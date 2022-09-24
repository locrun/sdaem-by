import { FC } from "react"
import { useAppDispatch } from "../../../hooks/redux-hooks"
import { SubmitHandler, useForm } from "react-hook-form"

import { setIsActive } from "../../../store/reducers/modalReducer"
import { Button } from "../../ui-kit/Button/Button"
import { Input } from "../../ui-kit/Input/Input"

import { IFormFields } from "../../../Interfaces/IFormFields"

import { name, email, message } from "../patterns"

import cn from "classnames"
import classes from "./ContactForm.module.scss"

export const ContactForm: FC = () => {

  const dispatch = useAppDispatch()
  const { register, formState: { errors }, reset, handleSubmit }
    =
    useForm<IFormFields>({ mode: "onSubmit" })

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    dispatch(setIsActive(true))
    reset()
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.flex}>
        <Input
          label="Ваше имя"
          id="#name"
          {...register("name", {
            required: true,
            pattern: name
          })}
          error={errors.name}
          iconId="#user"
          placeholder="Введите"
        />
        <Input
          label="Ваша электронная почта"
          id="#email"
          {...register('email', {
            required: true,
            pattern: email
          })}
          error={errors.email}
          iconId="#mail"
          placeholder="Введите"
        />
      </div>
      <div className={cn(classes.textAreaWrapper, {})}>
        <label htmlFor="#message" className={classes.textAreaTitle}>Ваше сообщение</label>
        <textarea
          id="#message"
          className={cn(classes.textarea, {
            [classes.error]: errors.message
          })}
          {...register("message", {
            required: true,
            pattern: message
          })}
          placeholder="Сообщение"
        />
      </div>
      <Button
        className={classes.button}
        type="submit"
      >
        Отправить
      </Button>
    </form>
  )
}
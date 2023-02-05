import { FC } from 'react'
import classes from "./DescriptionAddFrom.module.scss"

export const DescriptionAddFrom: FC = () => {
  return (
    <form className={classes.form}>
      <div className={classes.step}>2 шаг:&nbsp;</div>
      <div className={classes.heading}>Добавление описания</div>
      <div className={classes.guide}>
        Добавьте подробное описание, укажите конкурентные преимущества,
        оказываемые дополнительные услуги и т.д.
      </div>

      <div>
        <span className={classes.label}>Описание</span>
        <textarea
          name="description"
          id=""
          className={classes.textarea}
          placeholder="Введите"
        />
      </div>
    </form>
  )
}


import { FC, useState } from 'react'
import classes from "./PriceAddForm.module.scss"
import cn from 'classnames'


const data = [
  { id: 0, label: "За сутки", type: "price" },
  { id: 1, label: "За человека", type: "price" },
]


export const PriceAddForm: FC = () => {
  const [active, setActive] = useState<number | null>(null)

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <form className={classes.form}>
      <div className={classes.step}>3 шаг:&nbsp;</div>
      <div className={classes.heading}>Добавление цены</div>
      <div className={classes.guide}>
        Напишите развернуто, как формируется цена.
      </div>
      <textarea
        name="description"
        id=""
        className={classes.textarea}
        placeholder="Описание цены"
      />
      <div className={classes.flex}>
        <div className={classes.inputWrapper}>
          <span className={classes.price}>Цена&nbsp;
            <span className={classes.byn}>BYN</span>
          </span>
          <input
            type="text"
            className={classes.inputPrice}
            placeholder="Введите"
          />
        </div>
        <div>
          <span className={classes.typePrice}>Тип цены</span>
          <div className={classes.radioWrapper}>
            {
              data.map(({ id, label, type }) => {
                return (
                  <label
                    key={id}
                    className={cn(classes.label, {
                      [classes.active]: id === active
                    })}>
                    <span className={classes.text}>{label}</span>
                    <input
                      type="radio"
                      name={type}
                      value={id}
                      onChange={(e) => {
                        setActive(id);
                        changeCheckbox(e);
                      }}
                      className={classes.inputRadio}
                    />
                    <span className={classes.customRadio}></span>
                  </label>
                )
              })
            }
          </div>
        </div>
      </div>

    </form>
  )
}

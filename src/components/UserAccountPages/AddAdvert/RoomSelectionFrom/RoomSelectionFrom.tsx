import { FC, useState } from 'react'

import cn from "classnames"
import classes from "./RoomSelectionForm.module.scss"
import { Autocomplete } from '../../../Autocomplete/Autocomplete'

const data = [
  { id: 1, label: "1", type: "price" },
  { id: 2, label: "2", type: "price" },
  { id: 3, label: "3", type: "price" },
  { id: 4, label: "4", type: "price" },
  { id: 5, label: "5", type: "price" },
  { id: 6, label: "6", type: "price" },
  { id: 7, label: "7", type: "price" },
  { id: 8, label: "8", type: "price" },
  { id: 9, label: "9", type: "price" },
  { id: 10, label: "10", type: "price" },
]


export const RoomSelectionFrom: FC = () => {
  const [active, setActive] = useState<number | null>(null)

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <form className={classes.form}>
      <div className={classes.step}>4 шаг:&nbsp;</div>
      <div className={classes.heading}>Комнаты, спальные места</div>

      <div className={classes.roomsQuantity}>
        <span className={classes.text}>Количество комнат</span>
        <div className={classes.radioButtons}>
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
      <div className={classes.capacity}>
        <span className={classes.text}>Вместимость (max количество гостей):</span>
        <Autocomplete
          options={[]}
          classNames={classes.select}
          placeholder="Не выбрано"
        />
      </div>
      <div className={classes.sleepPlaces}>
        <span className={classes.text}>Варианты спальных мест:</span>
        <div>
          <input
            type="text"
            className={classes.input}
          />
          <input
            type="text"
            className={classes.input}
          />
          <input
            type="text"
            className={classes.input}
          />
          <input
            type="text"
            className={classes.input}
          />
          <input
            type="text"
            className={classes.input}
          />
        </div>
      </div>
    </form>
  )
}

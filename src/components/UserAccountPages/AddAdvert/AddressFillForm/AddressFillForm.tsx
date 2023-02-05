import { FC } from 'react'
import { Autocomplete } from '../../../Autocomplete/Autocomplete'
import classes from "./AddressFillForm.module.scss"
import cn from "classnames"


export const AddressFillForm: FC = () => {
  return (
    <form className={classes.form}>
      <div className={classes.step}>1 шаг:&nbsp;</div>
      <div className={classes.heading}>Заполнение адреса</div>
      <div className={classes.guide}>
        Начните вводить название населенного пункта. В случае, если не удалось найти необходимый адрес, то добавьте любой и отправьте верный на e-mail:
        <a
          className={classes.email}
          href="mailto:sdaem@sdaem.by"
          target="_blank"
          rel="noopener noreferrer"
        >
          sdaem@sdaem.by&nbsp;
        </a>
        или&nbsp;
        <a
          href="tel:+375296214833"
          target="_blank"
          rel="noopener noreferrer">
          +375(29) 621-48-33&nbsp;
        </a>
        (смс, viber, telegram, whatsApp)
      </div>
      <div className={classes.flex}>
        <div className={classes.selectWrapper}>
          <span className={classes.label}>Область</span>
          <Autocomplete
            options={[]}
            classNames="select"
            placeholder="Не выбрано"
          />
        </div>
        <div className={classes.selectWrapper}>
          <span className={classes.label}>Город</span>
          <Autocomplete
            options={[]}
            classNames="select"
            placeholder="Не выбрано"
          />
        </div>
      </div>
      <div className={classes.flex}>
        <div className={classes.selectWrapper}>
          <span className={classes.label}>Район</span>
          <Autocomplete
            options={[]}
            classNames="select"
            placeholder="Не выбрано"
          />
        </div>
        <div className={classes.selectWrapper}>
          <span className={classes.label}>Метро</span>
          <Autocomplete
            options={[]}
            classNames={cn("select", classes.metro)}
            placeholder="Не выбрано"
          />
        </div>
      </div>
      <div className={classes.flex}>
        <div className={classes.selectWrapper}>
          <span className={classes.label}>Улица</span>
          <Autocomplete
            options={[]}
            classNames="select"
            placeholder="Не выбрано"
          />
        </div>
        <div className={classes.inputsContainer}>
          <div>
            <span className={classes.label}>Дом</span>
            <input className={classes.input} type="text" />
          </div>
          <div>
            <span className={classes.label}>Корпус</span>
            <input className={classes.input} type="text" />
          </div>
          <div>
            <span className={classes.label}>Квартира</span>
            <input className={classes.input} type="text" />
          </div>
        </div>
      </div>
    </form>
  )
}

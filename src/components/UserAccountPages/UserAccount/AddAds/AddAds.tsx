import { FC } from 'react'
import { IconSvg } from '../../../IconSvg/IconSvg'

import plus from "../../../../assets/images/plus.svg"
import classes from "./AddAds.module.scss"

export const AddAds: FC = () => {
  return (
    <div className={classes.addAds}>

      <div className={classes.head}>
        <h3 className={classes.title}>Добавить объявление</h3>
      </div>
      <ul className={classes.list}>

        <li className={classes.listItem}>
          <div className={classes.flex}>
            <div className={classes.townWrapper}>
              <IconSvg id="#town" className={classes.iconTown} />
            </div>
            <span>Квартиры на сутки</span>
          </div>

          <button className={classes.button}>
            <img src={plus} alt="plus" />
          </button>
        </li>

        <li className={classes.listItem}>
          <div className={classes.flex}>
            <div className={classes.cottageWrapper}>
              <IconSvg id="#cottage" className={classes.iconCottage} />
            </div>
            <span className={classes.text}>Коттедж, дом, усадьба на сутки</span>
          </div>

          <button className={classes.button}>
            <img src={plus} alt="plus" />
          </button>
        </li>

        <li className={classes.listItem}>
          <div className={classes.flex}>
            <div className={classes.saunaWrapper}>
              <IconSvg id="#sauna" className={classes.iconSauna} />
            </div>
            <span>Бани, сауны</span>
          </div>

          <button className={classes.button}>
            <img src={plus} alt="plus" />
          </button>
        </li>

        <li className={classes.listItem}>
          <div className={classes.flex}>
            <div className={classes.carWrapper}>
              <IconSvg id="#car" className={classes.iconCar} />
            </div>
            <span>Авто напрокат</span>
          </div>

          <button className={classes.button}>
            <img src={plus} alt="plus" />
          </button>
        </li>

      </ul>
    </div>
  )
}

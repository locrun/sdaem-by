import { FC } from 'react'
import orchid from "../../../../assets/images/orchid.jpg"
import { IconSvg } from '../../../IconSvg/IconSvg'

import classes from "./Card.module.scss"

export const Card: FC = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={orchid} alt="orchid" />
        <input
          type="checkbox"
          id="test"
          className={classes.checkbox}
        />
        <label htmlFor="test"></label>
      </div>
      <div className={classes.info}>
        <div>
          <div className={classes.flexEnd}>
            <h3 className={classes.title}>4-комн. апартаменты на Грушевке</h3>
            <div className={classes.id}>ID: 4813</div>
          </div>
          <div className={classes.descr}>
            <IconSvg id="#mark" className={classes.icon} />
            <div >Минск, б-р Мулявина, д. 10</div>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.flex}>
            <button className={classes.deleteBtn}>
              <IconSvg id="#delete" className={classes.iconDelete} />
            </button>
            <button className={classes.pencilBtn}>
              <IconSvg id="#pencil" className={classes.iconPencil} />
            </button>
          </div>
          <div className={classes.flex}>
            <button className={classes.raiseBtn}>Поднять</button>
            <div className={classes.rate}>Тариф</div>
          </div>
        </div>
      </div >
    </div >
  )
}

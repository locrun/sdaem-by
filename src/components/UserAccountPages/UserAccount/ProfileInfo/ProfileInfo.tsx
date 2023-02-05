import { FC } from 'react'

import avatar from "../../../../assets/images/avatar.png"
import camera from "../../../../assets/images/camera.svg"
import dog from "../../../../assets/images/dog.svg"
import email from "../../../../assets/images/mail.svg"
import { IconSvg } from '../../../IconSvg/IconSvg'

import classes from "./ProfileInfo.module.scss"

export const ProfileInfo: FC = () => {

  return (
    <div className={classes.profile}>
      <div className={classes.flex}>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
          <button className={classes.uploadFoto}>
            <img src={camera} alt="camera" />
          </button>
        </div>
        <div>
          <div className={classes.flex}>
            <h3 className={classes.name}>Dmitriy</h3>
            <button className={classes.editProfileBtn}>
              <IconSvg id="#pencil" className={classes.iconPencil} />
              Редактировать профиль
            </button>
          </div>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <img src={dog} alt="dog" />
              sdaem</li>
            <li className={classes.listItem}>
              <img src={email} alt="email" />
              sdaem@sdaem.by
            </li>
            <li className={classes.listItem}>65</li>
          </ul>
        </div>
      </div>
      <div className={classes.onWebsite}>
        <div className={classes.flexEnd}>
          <h3 className={classes.date}>17.09.2020</h3>
          <span>Последний визит</span>
        </div>
        <span >На сайте с 11.07.2011</span>
      </div>
    </div>
  )
}

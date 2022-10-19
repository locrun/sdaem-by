import { FC } from 'react'

import imageGroup from "../../../assets/images/group.svg"

import cn from "classnames"
import classes from "./FreePlacing.module.scss"


export const FreePlacing: FC = () => {

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.content}>
          <div className={classes.text}>
            <h3 className={classes.title}>Бесплатное размещение</h3>
            <p>Бесплатное размещение позволит вам:</p>
            <ul className={classes.list}>
              <li className={classes.item}>
                <span className={classes.bold}>добавить</span> необходимое количество уникальных объявлений (запрещается их дублирование, при нарушении аккаунт и все объекты будут удалены);
              </li>
              <li className={classes.item}>
                в любое время <span className={classes.bold}>поднимать</span> их вверх первой страницы каталога, воспользовавшись кнопкой ПОДНЯТЬ напротив объявления (размещаются сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру);
              </li>
              <li className={classes.item}>
                <span className={classes.bold}>редактировать</span> объекты.
              </li>
            </ul>
          </div>
          <div className={classes.imageGroup}>
            <img src={imageGroup} alt="free small" />
          </div>
        </div>
      </div>
    </section>
  )
}

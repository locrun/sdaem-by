import { FC } from 'react'


import town from "../../../assets/images/town.svg"
import cottage from "../../../assets/images/cottageIcon.svg"

import cn from "classnames"
import classes from "./Priorety.module.scss"

export const Priorety: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <h3 className={classes.title}>
            Стоимость приоритетного размещения
          </h3>
          <div className={classes.flexWrapper}>
            <div className={classes.cardTown}>
              <div className={classes.col}>
                <div className={classes.titleWrapper}>
                  <div className={classes.icon}>
                    <img src={town} alt="town" />
                  </div>
                  <h4 className={classes.cardTitle}>Квартиры на сутки</h4>
                </div>
                <div className={cn(classes.flex, classes.gold)}>
                  <div className={classes.leftCol}>
                    <span className={classes.city}>Минск</span>
                    <span className={classes.price}>25 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                  <div className={classes.rightCol}>
                    <span className={classes.city}>Областные города</span>
                    <span className={classes.price}>15 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                </div>
                <div className={cn(classes.flex, classes.top)}>
                  <div className={classes.leftCol}>
                    <span className={classes.city}>Минск</span>
                    <span className={classes.price}>50 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                  <div className={classes.rightCol}>
                    <span className={classes.city}>Областные города</span>
                    <span className={classes.price}>35 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.cardCottage}>
              <div className={classes.col}>
                <div className={classes.titleWrapper}>
                  <div className={classes.icon}>
                    <img src={cottage} alt="cottage" />
                  </div>
                  <h4 className={classes.cardTitle}>Коттеджи, агроусадьбы, дома на сутки</h4>
                </div>
                <div className={cn(classes.flex, classes.gold)}>
                  <div className={classes.leftCol}>
                    <span className={classes.price}>25 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                  <div className={classes.rightCol}>
                    <span className={classes.price}>50 BYN</span>
                    <span className={classes.days}>90 дней</span>
                  </div>
                </div>
                <div className={cn(classes.flex, classes.top)}>
                  <div className={classes.rightCol}>
                    <span className={classes.price}>50 BYN</span>
                    <span className={classes.days}>30 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

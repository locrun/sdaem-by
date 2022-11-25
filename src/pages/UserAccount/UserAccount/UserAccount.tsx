import { FC } from 'react'
import { CategoryFilter } from '../../../components/Filters/CategoryFilter/CategoryFilter'
import { StatusFilter } from '../../../components/Filters/StatusFilter/StatusFilter'
import { MyAds } from '../../../components/UserAccount/MyAds/MyAds'

import { ProfileInfo } from '../../../components/UserAccount/ProfileInfo/ProfileInfo'
import { RaiseAds } from '../../../components/UserAccount/RaiseAds/RaiseAds'
import { AddAds } from '../../../components/UserAccount/AddAds/AddAds'

import classes from "./UserAccount.module.scss"
import { PaymentGuide } from '../../../components/UserAccount/PaymentGuide/PaymentGuide'
import { Card } from '../../../components/UserAccount/Card/Card'

const data1 = [
  { id: 0, name: "Все" },
  { id: 1, name: "Квартиры" },
  { id: 2, name: "Коттеджи / Усадьбы" },
  { id: 3, name: "Бани" },
  { id: 4, name: "Авто напрокат" }
]

const data2 = [
  { id: 0, name: "Все" },
  { id: 1, name: "Давно не поднимались" },
  { id: 2, name: "Gold" },
  { id: 3, name: "Top" },
  { id: 4, name: "На модерации" }
]

export const UserAccount: FC = () => {

  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div>
            <ProfileInfo />
            <div className={classes.mt}>
              <h3 className={classes.title}>Мои объявления</h3>
              <CategoryFilter data={data1} />
              <StatusFilter data={data2} />
              <MyAds />
              <Card />
            </div>
          </div>
          <div>
            <RaiseAds />
            <AddAds />
            <PaymentGuide />
          </div>
        </div>
      </div>
    </section>
  )
}

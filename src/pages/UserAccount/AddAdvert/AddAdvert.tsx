import { FC } from 'react'
import { CategoryFilter } from '../../../components/Filters/CategoryFilter/CategoryFilter'
import { Steps } from '../../../components/UserAccountPages/AddAdvert/Steps/Steps'
import classes from "./AddAdvert.module.scss"

import cn from "classnames"
import { AddressFillForm } from '../../../components/UserAccountPages/AddAdvert/AddressFillForm/AddressFillForm'
import { DescriptionAddFrom } from '../../../components/UserAccountPages/AddAdvert/DescriptionAddForm/DescriptionAddFrom'
import { PriceAddForm } from '../../../components/UserAccountPages/AddAdvert/PriceAddForm/PriceAddForm'
import { RoomSelectionFrom } from '../../../components/UserAccountPages/AddAdvert/RoomSelectionFrom/RoomSelectionFrom'

const category = [
  { id: 0, name: "Квартиры на сутки" },
  { id: 1, name: "Коттедж, дом, усадьба на сутки" },
  { id: 2, name: "Бани, сауны" },
  { id: 3, name: "Авто напрокат" },
]

export const AddAdvert: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.flexColumn)}>
        <CategoryFilter data={category} />
        <h3 className={classes.title}>
          Добавление объявления “Квартиры на сутки”
        </h3>
        <div className={classes.flex}>
          <Steps />
          <div>
            <AddressFillForm />
            <DescriptionAddFrom />
            <PriceAddForm />
            <RoomSelectionFrom />
          </div>
          <h1>Map</h1>
        </div>
      </div>

    </section>
  )
}

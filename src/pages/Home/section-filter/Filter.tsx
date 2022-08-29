import { FC } from "react"
import { Filter as FilterUI } from "../../../components/FilterUI/Filter/Filter"
import { useFilter } from "../../../hooks/useFilter"

import cn from "classnames"
import classes from "./Filter.module.scss"


export const Filter: FC = () => {

  const { submitFilteringFunction } = useFilter()

  const onHandleSubmit = () => {

    submitFilteringFunction()
  }
  return (
    <section className={cn(classes.inner, classes.container)}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
        <ul className={classes.list}>
          <li className={classes.listItem}>Квартиры на сутки</li>
          <li className={classes.listItem}>Коттеджы и усадьбы</li>
          <li className={classes.listItem}>Бани и сауны</li>
          <li className={classes.listItem}>Авто напрокат</li>
        </ul>
        <FilterUI onSubmitForm={onHandleSubmit} />
      </div>
    </section>
  )
}




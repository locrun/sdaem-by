import { Filter } from "../../../components/Filter/Filter"
import classes from "./Options.module.scss"

export const Options = () => {
  return (
    <section className={"container"}>

      <div className={classes.filterWrapper}>
        <div className="container">
          <h1 className={classes.heading}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
          <ul className={classes.category}>
            <li className={classes.categoryItem}>Квартиры на сутки</li>
            <li className={classes.categoryItem}>Коттеджы и усадьбы</li>
            <li className={classes.categoryItem}>Бани и сауны</li>
            <li className={classes.categoryItem}>Авто напрокат</li>
          </ul>
          <Filter />
        </div>
      </div>

    </section>
  )
}
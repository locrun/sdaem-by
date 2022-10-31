import { FC, useState } from 'react'

import cn from "classnames"
import classes from "./StatusFilter.module.scss"
import { IFilter } from '../CategoryFilter/CategoryFilter'


export const StatusFilter: FC<IFilter> = ({ data }) => {
  const [active, setActive] = useState(0)
  const onClickHandler = (id: number) => {
    setActive(id)
  }
  return (
    <div className={classes.statusFilter}>
      <ul className={classes.list}>
        {
          data.map((item) => {
            return (
              <li className={cn(classes.listItem, {
                [classes.active]: active === item.id
              })}
                onClick={() => onClickHandler(item.id)}
              >
                {item.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

import { FC, useState } from 'react'

import cn from "classnames"
import classes from "./CategoryFilter.module.scss"

export interface IFilter {
  data: {
    id: number,
    name: string
  }[]
}

export const CategoryFilter: FC<IFilter> = ({ data }) => {
  const [active, setActive] = useState(0)
  const onClickHandler = (id: number) => {
    setActive(id)
  }
  return (
    <div className={classes.filter}>
      <ul className={classes.list}>
        {
          data.map((item) => {
            return (
              <li
                key={item.id}
                className={cn(classes.listItem, {
                  [classes.active]: item.id === active
                })}
                onClick={() => onClickHandler(item.id)}
              >
                {item.name}
              </li>)
          })
        }
      </ul>
    </div>
  )
}
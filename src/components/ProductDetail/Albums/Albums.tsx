import { FC } from 'react'

import preview from "../../../assets/images/preview.jpg"

import cn from "classnames"
import classes from "./Albums.module.scss"

export const Albums: FC = () => {

  const data = [
    { id: 0, path: preview },
    { id: 1, path: preview },
    { id: 2, path: preview },
    { id: 3, path: preview },
    { id: 4, path: preview },
    { id: 5, path: preview },
    { id: 6, path: preview },
    { id: 7, path: preview },
    { id: 8, path: preview },
    { id: 9, path: preview },

  ]
  return (
    <div className={classes.albums}>
      <h3 className={classes.title}>Альбомы</h3>
      <ul className={cn(classes.list, classes.scroll)}>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className={classes.listItem}
            >
              <img
                src={preview}
                className={classes.image}
                alt="preview" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

import { FC } from "react";
import { Link } from "react-router-dom"
import classes from "./Tags.module.scss";


interface IPropsTags {
  tags: {
    name: string,
    path: string
  }[]
}

export const Tags: FC<IPropsTags> = (props) => {
  return (
    <ul className={classes.tagList}>
      {
        props.tags.map((item) =>
          <li key={item.name} className={classes.tagItem}>
            <Link to={item.path} className={classes.tagLink}>
              {item.name}
            </Link>
          </li>
        )}
    </ul>
  )
}
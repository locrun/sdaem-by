import { Link } from "react-router-dom"
import classes from "./Badges.module.scss";

const items = [
  { name: "Минск", path: "/" },
  { name: "Витебск", path: "/" },
  { name: "Гродно", path: "/" },
  { name: "Гомель", path: "/" },
  { name: "Брест", path: "/" },
  { name: "Могилев", path: "/" },
]

export const Budges = () => {
  return (
    <ul className={classes.badges}>
      {
        items.map((item) =>
          <li key={item.name} className={classes.badgeItem}>
            <Link to={item.path} className={classes.badgeLink}>
              {item.name}
            </Link>
          </li>
        )
      }
    </ul>
  )
}
import { FC } from "react";

import { NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"

import grid from "../../assets/images/grid.svg"
import classes from "./Navigation.module.scss"

type Data = {
  id: number
  item: string,
  path: string,
  icon?: string
}[]

type IPropsNavigation = {
  className: string[]
  isHomePage?: boolean
  data?: Data
}

export const Navigation: FC<IPropsNavigation> = ({ isHomePage, data,
  className: [navList, navListItem] }) => {

  const slice = isHomePage ? data?.slice(1) : data

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : "");

  return (
    <nav>
      <ul className={navList}>
        {
          slice?.map(({ id, item, path, icon }) =>
            <li key={id} className={navListItem} >
              <NavLink
                to={path}
                className={setActive}
              >
                {icon === "mark" && <IconSvg id={"#mark"} className={classes.icon} />}
                {icon === "grid" && <img src={grid} alt="grid" className={classes.grid} />}
                {item}
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  )
}



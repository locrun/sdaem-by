import { FC } from "react";

import { NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"

import classes from "./Navigation.module.scss"

type Data = {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
  icon?: string
}[]

interface IPropsNavigation {
  className: string[]
  isHomePage?: boolean
  data?: Data
}

export const Navigation: FC<IPropsNavigation> = ({ isHomePage, data, className: [navList, navListItem] }) => {

  const slice = isHomePage ? data?.slice(1) : data

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : "");
  return (
    <nav>
      <ul className={navList}>
        {
          slice?.map(({ id, item, path, isIcon }) =>
            <li key={id} className={navListItem} >
              <NavLink
                to={path}
                className={setActive}
              >
                {isIcon && <IconSvg id={"#mark"} className={classes.icon} />}
                {item}
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  )
}



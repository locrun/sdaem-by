import { FC, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"

import classes from "./Navigation.module.scss"

type Data = {
  id: number
  item: string,
  path: string,
  isIcon?: boolean,
}[]

interface IPropsNav {
  className: string[]
  noHomePage?: boolean
}

export const Navigation: FC<IPropsNav> = ({ noHomePage, className: [navList, navListItem] }) => {
  const [data, setData] = useState<Data>([])
  const slice = noHomePage ? data.slice(1) : data
  useEffect(() => {
    fetch("/api/navigation")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : "");
  return (
    <nav>
      <ul className={navList}>
        {slice.map(({ id, item, path, isIcon }) =>
          <li key={id} className={navListItem} >
            <NavLink
              to={path}
              className={setActive}
            >
              {isIcon && <IconSvg id={"#mark"} className={classes.icon} />}
              {item}
            </NavLink>
          </li>)}
      </ul>
    </nav>
  )
}



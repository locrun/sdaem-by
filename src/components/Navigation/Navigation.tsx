import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"
import styles from "./Navigation.module.scss"

type Data = {
  id: number
  name: string,
  path?: string,
  isIcon?: Boolean
}[]

interface IPropsNav {
  display: string,
  className?: string,
  iconStyles?: string
  linkStyles?: string
  data: Data
}

export const Navigation: FC<IPropsNav> = ({ data, className, display, iconStyles }) => {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : "");
  return (
    <nav>
      <ul style={{ display: display }}>
        {
          data.map(({ id, name, path, isIcon }) =>
            <li key={id} className={className} >
              <NavLink
                to={path || ''}
                className={setActive}
              >
                {name}
              </NavLink>
              {isIcon && <IconSvg id={"#mark"} className={iconStyles} />}
            </li>
          )}
      </ul>
    </nav >
  )
}

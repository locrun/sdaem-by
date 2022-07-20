import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"
import styles from "./Navigation.module.scss"
import cn from "classnames"

interface IPropsNav {
  display: string,
  className?: string,
  iconStyles?: string
  linkStyles?: string
  data: {
    id: number
    name: string,
    path?: string,
    title?: string
    isIcon?: Boolean
  }[]
}

export const Navigation: FC<IPropsNav> = (props) => {
  const { className, data, display, iconStyles } = props;
  const setActive = ({ isActive }: any) => (isActive ? styles.active : "");
  //console.log(data)
  return (
    <nav>
      <ul style={{ display: display }}>
        {
          data.map((item) =>
            <React.Fragment key={item.id}>
              <li className={className} >
                <NavLink
                  to={item.path || ''}
                  className={setActive}
                >
                  {item.name}
                </NavLink>
                {item.isIcon && <IconSvg id={"#mark"} className={iconStyles} />}
              </li>
            </React.Fragment>
          )}
      </ul>
    </nav >
  )
}

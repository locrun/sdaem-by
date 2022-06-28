import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconSvg } from "../IconSvg/IconSvg"
import styles from "./Navigation.module.scss"
import cn from "classnames"



const flats = [
  { id: 0, name: "Квартиры на сутки в Минске", path: "/" },
  { id: 1, name: "Квартиры на сутки в Гомеле", path: "/" },
  { id: 2, name: "Квартиры на сутки в Бресте", path: "/" },
  { id: 3, name: "Квартиры на сутки в Витебске", path: "/" },
  { id: 4, name: "Квартиры на сутки в Гродно", path: "/" },
  { id: 5, name: "Квартиры на сутки в Могилеве", path: "/" },
]
const MenuDropDown = () => {
  return (
    <ul className={styles.dropdownList}>
      {flats.map(flat =>
        <li key={flat.id} className={styles.dropdownItem} >
          <Link className={styles.link} to={flat.path}>
            {flat.name}
          </Link>
        </li>
      )}
    </ul >
  )
}

interface IPropsNav {
  display: string,
  className: string,
  iconStyles?: string
  linkStyles?: string
  data: {
    id: number
    name: string,
    path?: string,
    title?: string
    count?: number
    isIcon?: Boolean
    dropDown?: Boolean
  }[]
}

export const Navigation: FC<IPropsNav> = (props) => {
  const { className, data, display, iconStyles, linkStyles } = props;
  const setActive = ({ isActive }: any) => (isActive ? styles.active : "");
  return (
    <nav>
      <ul style={{ display: display }}>
        {
          data.map((item) =>
            <React.Fragment key={item.id.toString()}>
              {
                item.title &&
                <span key={item.id} className={styles.navTitle}>
                  {item.title}
                </span>
              }
              {
                !item.title &&
                <li className={cn(className, styles.menu)} >
                  <NavLink
                    to={item.path || ''}
                    className={setActive}
                  >
                    {item.name}
                  </NavLink>
                  {item.count && <span className={styles.amount}>{item.count}</span>}
                  {item.isIcon && <IconSvg id={"#mark"} className={iconStyles} />}
                  {item.dropDown && <MenuDropDown />}
                </li>
              }
            </React.Fragment>
          )}
      </ul>
    </nav >
  )
}

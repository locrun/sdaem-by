import { FC } from "react"
import { DropdownList } from "./DropdownList/DropdownList";

import { IList } from "./DropdownList/DropdownList";

import classes from "./Dropdown.module.scss"

interface IPropsDropdown {
  data: IList[]
}
export const Dropdown: FC<IPropsDropdown> = ({ data }) => {

  return (
    <div className={classes.flex}>
      {data.map((menu) => {
        return (
          <DropdownList
            key={menu.title}
            menu={menu}
          />
        )
      })}
    </div >
  )
}
import { FC, useState, useEffect } from "react"

import { DropdownList } from "./DropdownList/DropdownList";
import { IList } from "./DropdownList/DropdownList";
import classes from "./Dropdown.module.scss"

export const Dropdown: FC = () => {

  const [menu, setMenu] = useState<IList[]>([])

  useEffect(() => {
    fetch("/api/menu")
      .then(response => response.json())
      .then(data => setMenu(data))
  }, [])

  return (
    <div className={classes.flex}>
      {menu.map((menu) => {
        return <DropdownList key={menu.title} menu={menu} />
      })}
    </div >
  )
}
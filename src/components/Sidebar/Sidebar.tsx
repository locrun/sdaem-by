import { FC, useState, useEffect } from "react"
import { Button } from "../ui-kit/Button/Button"
import { List } from "./List/List"

import cn from "classnames"
import classes from "./Sidebar.module.scss"

export interface IData {
  title?: string,
  list?: {
    id: number,
    amount: string,
    value: string,
    city: string,
    path: string,
    type?: string,
  }[]
}

export const Sidebar: FC<IData> = () => {

  const [data, setData] = useState<IData[]>([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    fetch("/api/sidebar")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])


  return (
    <aside className={cn(classes.aside, classes.scroll)}>
      <List array={data?.[0]} />
      <List array={data?.[1]} />
      {active ?
        <>
          <List array={data?.[2]} />
          <List array={data?.[3]} />
        </>
        :
        <Button
          className={classes.openMoreContent}
          onClick={() => setActive(true)}
        >
          Еще
        </Button>
      }
      <List array={data?.[4]} />
    </aside>
  )
}

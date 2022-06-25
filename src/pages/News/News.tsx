import { useEffect, useState } from "react"

import { FC } from "react"
import { NewsList } from "./NewsList/NewsList"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { Button } from "../../components/Button/Button"
import { IconSvg } from "../../components/IconSvg/IconSvg"
import classes from "./News.module.scss"
import cn from "classnames"


export const News: FC = () => {

  const [data, setData] = useState(null)


  useEffect(() => {
    fetch("/api/news")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))

  }, [])

  return (
    <section className={classes.newsWrapper}>
      <div className={cn("container", classes.container)}>
        <Breadcrumbs title={"Новости"} />
        <div className={classes.flex}>
          <h4 className={classes.title}>Новости</h4>
          <form className={classes.searchForm} action="">
            <input className={classes.searchInput} type="text" placeholder="Поиск по статьям" />
            <Button className={classes.searchBtn}>
              <IconSvg id={"#search"} className={classes.searchIcon} />
            </Button>
          </form>
        </div>
        <NewsList newsList={data} />
      </div>
    </section>
  )
}
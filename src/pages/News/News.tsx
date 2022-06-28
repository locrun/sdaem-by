import { FC } from "react"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { SearchInput } from "./components/SearchInput/SearchInput"
import { NewsList } from "./components/NewsList/NewsList"
import { Pagination } from "../../components/Pagination/Pagination"
import classes from "./News.module.scss"
import cn from "classnames"
import { useNewsPerPage } from "../../hooks/useNewsPerPage"

export const News: FC = () => {

  const { data } = useNewsPerPage(9);

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <Breadcrumbs name={"Новости"} />
        <SearchInput />
        <NewsList newsList={data} />
        <Pagination />
      </div>
    </section>
  )
}
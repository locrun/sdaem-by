
import { useEffect } from "react"
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks"

import { Title } from "../../../components/Title/Title"
import { NewsList } from "../../News/components/NewsList/NewsList"

import classes from "./ReadMore.module.scss"
import cn from "classnames"

import { fetchNews } from "../../../store/thunks/newsThunk"


export const ReadMore = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { news, loading, error } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])


  const list = news.filter((news) => news.id !== Number(id))
    .slice(0, 3);

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.title}>
          <Title title={"Читайте также"} />
        </div>
        <NewsList newsList={list} mb={"0"} />
      </div>
    </section>
  )
}
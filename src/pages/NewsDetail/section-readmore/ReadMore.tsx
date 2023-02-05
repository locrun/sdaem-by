import { useCallback, useEffect } from "react"
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"

import { NewsList } from "../../../components/NewsList/NewsList"

import { fetchNews } from "../../../store/thunks/newsThunk"
import { ErrorMessage } from "../../../components/Notification/ErrorMessage/ErrorMessage"
import { Spinner } from "../../../Spinner/Spinner"

import { INews } from "../../../Interfaces/INews"

import cn from "classnames"
import classes from "./ReadMore.module.scss"

export const ReadMore = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { news, loading, error } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])


  const List = useCallback((): INews[] => {
    return news.filter((news) => news.id !== Number(id))
      .slice(0, 3);
  }, [id, news])

  const newsList = List()

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        {!loading && !error ?
          <>
            <div className={classes.title}>
              <h3  >
                Читайте также
              </h3>
            </div>
            <NewsList newsList={newsList} mb={"0"} />
          </>
          :
          <>
            <Spinner visible={loading} />
            <ErrorMessage error={error} />
          </>
        }
      </div>
    </section >
  )
}
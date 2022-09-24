import { FC, useCallback, useEffect, useMemo } from "react"
import { useParams } from "react-router"

import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { fetchNews } from "../../../store/thunks/newsThunk"

import { Spinner } from "../../../Spinner/Spinner"
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs"
import { ShareButtons } from "../../../components/ShareButtons/ShareButtons"

import { ErrorMessage } from "../../../components/Notification/ErrorMessage/ErrorMessage"

import { INews } from "../../../Interfaces/INews"
import cn from "classnames"
import classes from "./Detail.module.scss"


export const Detail: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { news, loading, error } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const detail = useCallback((): INews | undefined => {
    return news.find((news) => news.id === Number(id))
  }, [id, news])

  const detailNews = detail()

  const breadCrumbsItems = useMemo(() =>
    [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: 'Новости',
        path: '/news',

      },
      {
        id: 2,
        title: detailNews?.title,
      },
    ], [detailNews?.title]
  )

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        {!loading && !error ?
          <div>
            <Breadcrumbs breadCrumbsItems={breadCrumbsItems} />
            <h3 className={classes.title}>
              {detailNews?.title}
            </h3>
            <div className={classes.flex}>
              <div className={classes.date}>
                {detailNews?.date}
              </div>
              <ShareButtons
                url={"https://sdaem.by/novosti"}
                title={detailNews?.title}
                image={detailNews?.image}
                newsDetailPage
              />
            </div>
            <>
              <div className={classes.newsImg}>
                <img src={`/${detailNews?.image}`} alt="картинка" />
              </div>
              <div>
                <p className={classes.fullText}>{detailNews?.fullText} </p>
              </div>
            </>
          </div> :
          <>
            <Spinner visible={loading} />
            <ErrorMessage error={error} />
          </>
        }
      </div>
    </section >
  )
}

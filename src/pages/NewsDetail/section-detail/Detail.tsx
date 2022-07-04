import { FC, useEffect } from "react"
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks"

import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs"
import { Title } from "../../../components/Title/Title"
import { ShareButtons } from "../../../components/ShareButtons/ShareButtons"

import classes from "./Detail.module.scss"
import cn from "classnames"

import { fetchNews } from "../../../store/thunks/newsThunk"

export const Detail: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { news, loading, error } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const detail = news?.find((news) => news.id === Number(id));

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <Breadcrumbs
          name={detail ? detail.title : ''}
          marginBottom={"25px"}
          fill={classes.fill}
        >
          <span className={classes.color}>Новости</span>
        </Breadcrumbs >
        <Title title={detail ? detail.title : '...loading'} />
        <div className={classes.flex}>
          <div className={classes.date}>
            {detail ? detail.date : '14 Января 2008'}
          </div>
          <div className={classes.share}>
            <span>Поделиться</span>
            <ShareButtons
              title={detail?.title}
            />
          </div>
        </div>
        {detail &&
          <>
            <div className={classes.newsImg}>
              <img src={detail.image} alt="картинка" />
            </div>
            <div>
              <p className={classes.fullText}>{detail.fullText}</p>
            </div>
          </>
        }
      </div>
    </section>)
}
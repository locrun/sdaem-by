import { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./NewsList.module.scss"
import { INews } from "../../../../Interfaces/INews"

interface IPropsNewsList {
  newsList: INews[],
  mb?: string,
  loading?: boolean,
  error?: string | null
}

export const NewsList: FC<IPropsNewsList> = (props) => {

  const { newsList, mb, loading, error } = props

  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={classes.newsCardList}>
      {error && <h1>Error Page:{error}</h1>}
      {
        newsList?.map((news) => {
          return (
            <div
              key={news.id}
              className={classes.card}
              style={{ marginBottom: mb }}>
              <div className={classes.cardImg}>
                <img src={`/${news.image}`} alt="картинка новости" />
              </div>
              <div className={classes.cardContent}>
                <h4 className={classes.cardTitle}>
                  {news.title}
                </h4>
                <p className={classes.cardDescr}>
                  {news.previewText}
                </p>
                <div className={classes.cardFooter}>
                  <div className={classes.cardDate}>
                    {news.date}
                  </div>
                  <Link
                    to={`/news/detail/${news.id}`}
                    className={classes.readBtn}
                    onClick={() => scrollToTop()}
                  >
                    Читать
                  </Link >
                </div>
              </div>
            </div>
          )
        })
      }
    </div >
  )
}
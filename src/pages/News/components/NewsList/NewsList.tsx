import { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./NewsList.module.scss"
import { INewsList } from "../../../../Interfaces/data"

interface IPropsNewsList {
  newsList: INewsList[],
  mb?: string
}

export const NewsList: FC<IPropsNewsList> = (props) => {

  const { newsList ,mb} = props

  return (
    <div className={classes.newsCardList}>

      {
        newsList.map((news) => {
          return (
            <div key={news.id} className={classes.card} style={{marginBottom:mb}}>
              <div className={classes.cardImg}>
                <img src={news.image} alt="картинка новости" />
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
                  <Link to={`/news/detail/${news.id}`}
                    className={classes.readBtn}
                  >
                    Читать
                  </Link >
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
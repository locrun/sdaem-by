import { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./NewsList.module.scss"


interface IPropsNewsList {
  newsList: any
}

export const NewsList: FC<IPropsNewsList> = (props) => {

  const data = props.newsList
  return (
    <div className={classes.newsCardList}>

      {
        data && data.map((news: { id: number, title: string, previewText: string, image: string }) => {
          return (
            <div className={classes.card}>
              <div className={classes.cardImg}>
                <img src={news.image} alt="картинка" />
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
                    14 Января 2008
                  </div>
                  <Link to={`detail/${news.id}`} className={classes.readBtn}>Читать</Link>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
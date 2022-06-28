import { FC } from "react"
import { useParams } from "react-router"
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs"
import { Title } from "../../../components/Title/Title"
import { SocialIcons } from "../components/SocialIcons/SocialIcons"
import { useNewsPerPage } from "../../../hooks/useNewsPerPage"
import classes from "./Detail.module.scss"
import cn from "classnames"

export const Detail: FC = () => {
  const { id } = useParams()
  const { news } = useNewsPerPage(3, Number(id))

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <Breadcrumbs
          name={news ? news.title : ''}
          marginBottom={"25px"}
          fill={classes.fill}
        >
          <span className={classes.color}>Новости</span>
        </Breadcrumbs >
        <Title title={news ? news.title : '...loading'} />
        <div className={classes.flex}>
          <div className={classes.date}>
            {news ? news.date : '14 Января 2008'}
          </div>
          <div className={classes.share}>
            <span>Поделиться</span>
            <SocialIcons />
          </div>
        </div>
        {news &&
          <>
            <div className={classes.newsImg}>
              <img src={news.image} alt="картинка" />
            </div>
            <div>
              <p className={classes.fullText}>{news.fullText}</p>
            </div>
          </>
        }
      </div>
    </section>)
}
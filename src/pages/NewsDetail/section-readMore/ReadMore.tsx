import { useParams } from "react-router"
import { Title } from "../../../components/Title/Title"
import { NewsList } from "../../News/components/NewsList/NewsList"
import { useNewsPerPage } from "../../../hooks/useNewsPerPage"
import classes from "./ReadMore.module.scss"
import cn from "classnames"

export const ReadMore = () => {
  const { id } = useParams()
  const { data } = useNewsPerPage(3, Number(id))
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.title}>
          <Title title={"Читайте также"} />
        </div>
        <NewsList newsList={data} mb={"0"} />
      </div>
    </section>
  )
}
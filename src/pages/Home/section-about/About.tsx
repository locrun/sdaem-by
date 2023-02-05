import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { fetchNews } from "../../../store/thunks/newsThunk";

import classes from "./About.module.scss"

export const About: FC = () => {
  const dispatch = useAppDispatch()
  const { news } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const newsArr = news.slice(0, 5)

  const clickHandler = () => {
    return window.scrollTo(0, 0)
  }

  return (
    <section className={classes.wrapper}>
      <div className="container flex">
        <div className={classes.aboutBlock}>
          <p className={classes.subtitle}>ЧТО ТАКОЕ SDAEM.BY</p>
          <h3 className={classes.title}>Квартира на сутки в Минске</h3>
          <div className={classes.flexColumn}>
            <div className={classes.topRow}>
              <div className={classes.images}>
                <img src={require("../../../assets/images/about.png")} alt="картинка" />
              </div>
              <div className={classes.topDescr}>
                <span className={classes.bold}>Нужна квартира на сутки в Минске?</span>
                <p className={classes.descr}> На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span className={classes.bold}>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
                <p className={classes.descr}>
                  В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                  с джакузи.
                </p>
              </div>
            </div>
            <div className={classes.bottomRow}>
              <div className={classes.bottomDescr}>
                <p className={classes.descr}>
                  Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className={classes.newsBlock}>
          <h3 className={classes.title}>Новости</h3>
          <ul className={classes.newsList}>
            {newsArr.map(news =>
              <li key={news.id} className={classes.newsListItem}>
                <Link
                  to={`news/detail/${news.id}`}
                  className={classes.newsLink}
                  onClick={clickHandler}
                >
                  {news.title}
                  <span className={classes.date}>{news.date}</span>
                </Link>
              </li>
            )}
          </ul>
          <Link
            to={"/news"}
            className={classes.seeAll}
            onClick={clickHandler}
          >
            Посмотреть все
          </Link>
        </div>
      </div>
    </section >
  )
}


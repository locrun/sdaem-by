import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames"
import classes from "./About.module.scss"

export const About: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className="container flex">
        <div className={classes.aboutBlock}>
          <p className={classes.subtitle}>ЧТО ТАКОЕ SDAEM.BY</p>
          <h3 className={classes.title}>Квартира на сутки в Минске</h3>
          <div className={classes.flexColumn}>
            <div className={classes.topRow}>
              <div className={classes.images}>
                <img src={require("../../../assets/images/01.png")} alt="картинка" />
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
            <li className={classes.newsListItem}>
              <NavLink to={"/"} className={classes.newsLink} >
                Линия Сталина: суровый отдых в усадьбах  на сутки
                <span className={classes.date}>14 Январь</span>
              </NavLink>
            </li>
            <li className={classes.newsListItem}>
              <NavLink to={"/"} className={classes.newsLink} >Аренда квартиры посуточно
                <span className={classes.date}>14 Январь</span>
              </NavLink>
            </li>
            <li className={classes.newsListItem}>
              <NavLink to={"/"} className={classes.newsLink}>Дворцово-парковый комплекс Чапских
                <span className={classes.date}>14 Январь</span>
              </NavLink>
            </li>
            <li className={classes.newsListItem} >
              <NavLink to={"/"} className={cn(classes.active, classes.newsLink)}>Дворцово-парковый комплекс Чапских
                <span className={classes.date}>14 Январь</span>
              </NavLink>
            </li>
            <li className={classes.newsListItem}>
              <NavLink to={"/"} className={classes.newsLink}>Дворцово-парковый комплекс Чапских
                <span className={classes.date}>14 Январь</span>
              </NavLink>
            </li>
          </ul>
          <Link to={"/news"} className={classes.seeAll}>Посмотреть все</Link>
        </div>
      </div>
    </section >
  )
}
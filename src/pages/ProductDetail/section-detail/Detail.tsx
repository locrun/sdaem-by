import { FC, useMemo, useState } from 'react'

import { ShareButtons } from "../../../components/ShareButtons/ShareButtons"
import plug from "../../../assets/images/plug.jpg"
import { IconSvg } from '../../../components/IconSvg/IconSvg'
import { Button } from '../../../components/ui-kit/Button/Button'


import { usePageTitle } from '../../../hooks/usePageTitle'
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs'
import { Albums } from '../../../components/ProductDetail/Albums/Albums'
import { OwnerCard } from '../../../components/ProductDetail/OwnerCard/OwnerCard'

import map from "../../../assets/images/map.png"

import classes from "./Detail.module.scss"

export const Detail: FC = () => {
  const { title } = usePageTitle()
  const [isFavorite, setIsFavorite] = useState(false)

  const breadCrumbsItems = useMemo(() =>
    [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: "Квартиры в Минске",
        path: '/',
      },
      {
        id: 2,
        title: "1-комн. апартаменты, 58,6 м²",
      }
    ], []
  )
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.margin}>
          <Breadcrumbs breadCrumbsItems={breadCrumbsItems} />
        </div>
        <div className={classes.contentWrapper}>
          <Albums />
          <div className={classes.mainContent}>
            <div className={classes.photoGallery}>
              <img src={plug} alt="plug" />
              <button className={classes.prev}>prev</button>
              <button className={classes.next}>next</button>
            </div>
            <div className={classes.cardData}>
              <div className={classes.main}>
                <div className={classes.flex}>
                  <div>
                    <span className={classes.title}>{1}-комн. апартаменты</span>
                    <p className={classes.address}>
                      <IconSvg id={"#mark"} className={classes.locationIcon} />
                      Минск, б-р Мулявина, д. 10
                    </p>
                  </div>
                  <div className={classes.price}>
                    {"65.00"} BYN <span>за сутки</span>
                  </div>
                </div>
                <ul className={classes.listInfo}>
                  <li className={classes.capacity}>
                    {"4(2+2)"}
                    <IconSvg id={"#user"} className={classes.userIcon} />
                  </li>
                  <li className={classes.rooms}>{4} комн.</li>
                  <li className={classes.metro}>
                    <IconSvg id={"#metro"} className={classes.metroIcon} />
                    {"Грушевка"}
                  </li>
                  <li className={classes.area}><span>район:</span>{"Шабаны"}</li>
                </ul>
                <div className={classes.buttons}>
                  <Button className={classes.bookmarksBtn}
                    onClick={() => setIsFavorite(isActive => !isActive)}
                  >
                    В закладки
                    {isFavorite ?
                      <IconSvg id="#heartActive" className={classes.heartIcon} />
                      :
                      <IconSvg id="#heart" className={classes.heartIcon} />
                    }
                  </Button>
                  <ShareButtons
                    title={title}
                    url={"https://sdaem.by/"}
                    catalogPage
                  />
                </div>
              </div>
              <div className={classes.date}>
                <span>
                  Дата подачи: 16:07:04 07.12.2018
                </span>
                <span>
                  Дата обновления: 09:50:24 17.09.2020
                </span>
              </div>

              <div className={classes.description}>
                <h3 className={classes.heading}>О квартире</h3>
                Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу! Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена, Виктория Олимп отель. Также недалеко находятся Аквапарк Лебяжий, Dreamland Park , Парк Победы, Стелла! До ЖД вокзала 15 минут езды на автобусе. Будем рады Вас видеть у нас в гостях, расскажу,что можно в нашем городе посмотреть, а также могу заранее забронировать экскурсии! Все отчетные документы , временная регистрация предоставляется. В квартире Не курят.
                <Button className={classes.readFull}>
                  Читать все
                </Button>
              </div>
              <div className={classes.comfort}>
                <h3>Комфорт</h3>
                <ul className={classes.list}>
                  <li className={classes.listItem}>Микроволновая печь</li>
                  <li className={classes.listItem}>Электроплита</li>
                  <li className={classes.listItem}>Утюг</li>
                  <li className={classes.listItem}>Спутниковое TV</li>
                  <li className={classes.listItem}>Водонагреватель</li>
                  <li className={classes.listItem}>Микроволновая печь</li>
                  <li className={classes.listItem}>Электроплита</li>
                  <li className={classes.listItem}>Утюг</li>
                  <li className={classes.listItem}>Спутниковое TV</li>
                  <li className={classes.listItem}>Водонагреватель</li>
                  <li className={classes.listItem}>Утюг и гладильная доска</li>
                  <li className={classes.listItem}>Холодильник</li>
                  <li className={classes.listItem}>Ортопедичекая кровать</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <OwnerCard />
            <div>
              <h3 className={classes.mapTitle}>На карте</h3>
              <img src={map} alt="map" />
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section >
  )
}

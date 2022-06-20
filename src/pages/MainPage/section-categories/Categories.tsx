import promo1 from "../../../assets/images/promo-1.png"
import promo2 from "../../../assets/images/promo-2.png"
import promo3 from "../../../assets/images/promo-3.png"
import promo4 from "../../../assets/images/promo-4.png"
import { Budges } from "../components/Badges/Badges"
import { IconSvg } from "../../../components/IconSvg/IconSvg"
import { Navigation } from "../../../components/Navigation/Navigation"
import classes from "./Categories.module.scss"

const cardData = [
  {

    title: "Квартиры на сутки",
    subtitle: "Снять квартиру",
    imgPath: promo1,
    badges: true,
  },
  {

    title: "Коттеджи и усадьбы",
    subtitle: "Снять коттедж на праздник",
    imgPath: promo2,
    arrow: true
  },
  {

    title: "Бани и Сауны",
    subtitle: "Попариться в бане с друзьями",
    imgPath: promo3,
    arrow: true
  },
  {

    title: "Авто на прокат",
    subtitle: "Если срочно нужна машина",
    imgPath: promo4,
    arrow: true
  }
]
const navData = [
  { id: 0, title: 'Квартиры', name: "Apartments" },
  { id: 1, name: "Квартиры в Минске", count: 3567, path: "/" },
  { id: 2, name: "Квартиры в Гомеле", count: 2032, path: "/" },
  { id: 3, name: "Квартиры в Гродно", count: 2302, path: "/" },
  { id: 4, name: "Квартиры в Могилеве", count: 110, path: "/" },
  { id: 5, name: "Квартиры в Бресте", count: 110, path: "/" },
  { id: 6, name: "Квартиры в Витебск", count: 110, path: "/" },

  { id: 7, title: "Коттеджи и усадьбы", name: "Apartments" },
  { id: 8, name: "Аггроусадьбы", count: 3567, path: "/" },
  { id: 9, name: "Коттеджи", count: 2032, path: "/" },
  { id: 10, name: "Загородный комплекс", count: 110, path: "/" },
  { id: 11, name: "База отдыха", count: 110, path: "/" },
  { id: 12, name: "Еще..." },

  { id: 13, title: 'Порулярные направления', name: "Apartments" },
  { id: 14, name: "Коттеджи и усадьбы на о. Брасласких", path: "/" },
  { id: 15, name: "Коттеджи и усадьбы (жилье) на Нарочи", path: "/" },
  { id: 16, name: "Коттеджи и усадьбы (жилье) у воды,на берегу, на озере", path: "/" }

]

export const Categories = () => {
  return (
    <section className={"container"}>
      <div className={classes.content}>
        <div className={classes.cardWrapper}>
          {
            cardData.map(item =>
              <div key={item.title} className={classes.card}>
                {item.badges && <Budges />}
                <div className={classes.titleWrapper}>
                  <span className={classes.subtitle}>{item.subtitle}</span>
                  <h3 className={classes.title}>{item.title}</h3>
                </div>
                <img src={item.imgPath} alt="картинка" />
                {
                  item.arrow && <IconSvg id={"#arrow"} className={classes.arrow} />
                }
              </div>
            )
          }
        </div>
        <aside className={classes.sideBarNav}>
          <Navigation
            data={navData}
            display={'block'}
            className={classes.navItem}
            linkStyles={classes.navLink}
          />
        </aside >
      </div>
    </section>
  )
}




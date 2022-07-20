import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import { Payment } from "./Payment/Payment"
import { Social } from "./Social/Social"
import classes from "./Footer.module.scss"

const pages = [
  { id: 1, name: "Новости", path: "/news" },
  { id: 2, name: "Размещение и тарифы", path: "/rate" },
  { id: 3, name: "Объявления на карте", path: "/ads" },
  { id: 4, name: "Контакты", path: "/contacts" },
];

const products = [
  { id: 0, name: "Коттеджы и усадьбы" },
  { id: 1, name: "Бани и сауны" },
  { id: 2, name: "Авто на прокат" },
]

const flats = [
  { id: 0, name: "Квартиры в Минске", path: "/" },
  { id: 1, name: "Квартиры в Гомеле", path: "/" },
  { id: 2, name: "Квартиры в Бресте", path: "/" },
  { id: 3, name: "Квартиры в Витебске", path: "/" },
  { id: 4, name: "Квартиры в Гродно", path: "/" },
  { id: 5, name: "Квартиры в Могилеве", path: "/" },
]
export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={"container"}>
        <div className={classes.flexContainter}>
          <div className={classes.leftColumn}>
            <Logo>
              <span className={classes.logoText}>Сдаем Бай</span>
            </Logo >
            <div className={classes.contacts}>
              <span>ИП Шушкевич Андрей Викторович</span>
              <span>УНП 192602485 Минским горисполкомом</span>
              <span>10.02.2016</span>
              <span>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
              </span>
              <span>+375 29 621 48 33, sdaem@sdaem.by</span>
              <span>Режим работы: 08:00-22:00
              </span>
            </div>
          </div>
          <div className={classes.rightColumn}>
            <div className={classes.topRow}>
              <Navigation
                data={products}
                display={"block"}
                className={classes.productsItemNav} />
              <div className={classes.subMenu}>
                <span className={classes.subMenuTitle}>Квартиры</span>
                <Navigation
                  data={flats}
                  display={"block"}
                  className={classes.subMenuItem} />
              </div>
              <Navigation
                data={pages}
                display={"block"}
                className={classes.item}
              />
            </div>
            <div className={classes.bottomRow}>
              <Social />
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
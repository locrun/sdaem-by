import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"
import { Link } from "react-router-dom"

import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import { Payment } from "./Payment/Payment"
import { Social } from "./Social/Social"

import { path } from "../../constants/pages"
import classes from "./Footer.module.scss"
import { setSelectedData } from "../../store/reducers/filterReducer"

const typeProducts = [
  { id: 0, name: "Коттеджы и усадьбы", path: path.COTTAGES },
  { id: 1, name: "Бани и сауны", path: path.BATHS },
  { id: 2, name: "Авто на прокат", path: path.CARS },
]

const apartments = [
  { id: 0, name: "Квартиры в Минске", city: "Минск", path: path.APARTMENTS },
  { id: 1, name: "Квартиры в Гомеле", city: "Гомель", path: path.APARTMENTS },
  { id: 2, name: "Квартиры в Бресте", city: "Брест", path: path.APARTMENTS },
  { id: 3, name: "Квартиры в Витебске", city: "Витебск", path: path.APARTMENTS },
  { id: 4, name: "Квартиры в Гродно", city: "Гродно", path: path.APARTMENTS },
  { id: 5, name: "Квартиры в Могилеве", city: "Могилев", path: path.APARTMENTS },
]

interface IContacts {
  address: string,
  tel: string,
  mail: string,
  href: string,
  workTime: string,
  employer: string,
  ip: string
}
export const Footer = () => {
  const dispatch = useAppDispatch()
  const { stateData } = useAppSelector(state => state.filter)
  const [cont, setCont] = useState<IContacts>()


  useEffect(() => {
    fetch("/api/contacts")
      .then(response => response.json())
      .then(data => setCont(data))
  }, [])

  return (
    <footer className={classes.footer}>
      <div className={"container"}>
        <div className={classes.flexContainter}>
          <div className={classes.leftColumn}>
            <Logo>
              <div className={classes.logoText}>Сдаем Бай</div>
            </Logo >
            <div className={classes.contacts}>
              <span>{cont?.employer}</span>
              <span>{cont?.ip}</span>
              <span>{cont?.address}</span>
              <span>{cont?.tel + ","}</span>
              <span>{cont?.mail}</span>
              <span>{cont?.workTime}</span>
            </div>
          </div>
          <div className={classes.rightColumn}>
            <div className={classes.topRow}>
              <div className={classes.flex}>
                {typeProducts.map(item =>
                  <Link
                    key={item.id}
                    to={item.path}
                    className={classes.link}>
                    {item.name}
                  </Link>
                )}
              </div>
              <div className={classes.menu}>
                <span className={classes.menuTitle}>Квартиры</span>
                <ul>
                  {apartments.map((item) =>
                    <li key={item.id} className={classes.menuItem}>
                      <Link to={item.path} onClick={() => dispatch(setSelectedData({
                        ...stateData,
                        city: item.city
                      }))}>
                        {item.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              <Navigation
                noHomePage={true}
                className={[classes.navList, classes.navListItem]}
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
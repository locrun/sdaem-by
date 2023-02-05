import { FC } from "react"

import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import { Payment } from "./Payment/Payment"
import { Social } from "./Social/Social"
import { Contacts } from "./Contacts/Contacts"
import { TypeProducts } from "./TypeProducts/TypeProducts"
import { Apartments } from "./Apartments/Apartments"

import { useRequest } from "../../hooks/useRequest"
import { api } from "../../constants/api"

import classes from "./Footer.module.scss"

export const Footer: FC = () => {

  const { data } = useRequest(api.navigation)

  return (
    <footer className={classes.footer}>
      <div className={"container"}>
        <div className={classes.flexContainter}>
          <div className={classes.leftColumn}>
            <Logo isText />
            <Contacts />
          </div>
          <div className={classes.rightColumn}>
            <div className={classes.topRow}>
              <TypeProducts />
              <Apartments />
              <Navigation
                data={data}
                isHomePage={true}
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
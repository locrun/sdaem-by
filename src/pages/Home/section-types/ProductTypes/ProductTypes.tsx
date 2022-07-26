import { FC } from "react"
import { useNavigate } from "react-router"

import { useAppDispatch } from "../../../../hooks/redux/redux-hooks"
import { setCottages } from "../../../../store/reducers/cottagesReducer"

import { CityButtons } from "../CityButtons/CityButtons"
import { Button } from "../../../../components/Button/Button"
import { IconSvg } from "../../../../components/IconSvg/IconSvg"

import flatImage from "../../../../assets/images/promo-1.png"
import cottagesImage from "../../../../assets/images/promo-2.png"
import bathsImage from "../../../../assets/images/promo-3.png"
import carImage from "../../../../assets/images/promo-4.png"


import classes from "./ProductTypes.module.scss"


const data = [
  { name: "Минск", path: "/catalog/flats", cityName: "Минск" },
  { name: "Витебск", path: "/catalog/flats", cityName: "Витебск" },
  { name: "Гродно", path: "/catalog/flats", cityName: "Гродно" },
  { name: "Гомель", path: "/catalog/flats", cityName: "Гомель" },
  { name: "Брест", path: "/catalog/flats", cityName: "Брест" },
  { name: "Могилев", path: "/catalog/flats", cityName: "Могилев" },
]
export const ProductTypes: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()


  return (
    <div className={classes.cards}>
      <div className={classes.topRow}>
        <div className={classes.apartments}>
          <p className={classes.subtitle}>СНЯТЬ КВАРТИРУ</p>
          <h3 className={classes.title}>Квартиры на сутки</h3>
          <CityButtons data={data} />
          <img src={flatImage} alt="аренда квартир на сутки" />
        </div>
        <div className={classes.cottages}>
          <p className={classes.subtitle}>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</p>
          <h3 className={classes.title}>Коттеджи и усадьбы</h3>
          <img src={cottagesImage} alt="снять коттедж на праздник" />
          <Button className={classes.button} onClick={() => {
            navigate("/catalog/cottages"); dispatch(setCottages({
              cottages: {}
            }))
          }}>
            <IconSvg id={"#arrow"} className={classes.arrow} />
          </Button>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <div className={classes.baths}>
          <p className={classes.subtitle}>ПОПАРИТЬСЯ В БAНЕ С ДРУЗЬЯМИ</p>
          <h3 className={classes.title}>Бани и сауны</h3>
          <img src={bathsImage} alt="аренда квартир на сутки" />
          <Button className={classes.button} onClick={() => navigate("/catalog/baths")}>
            <IconSvg id={"#arrow"} className={classes.arrow} />
          </Button>
        </div>
        <div className={classes.cars}>
          <p className={classes.subtitle}>EСЛИ СРОЧНО НУЖНА МАШИНА</p>
          <h3 className={classes.title}>Авто на прокат</h3>
          <img src={carImage} alt="снять коттедж на праздник" />
          <Button className={classes.button} onClick={() => navigate("/catalog/cars")}>
            <IconSvg id={"#arrow"} className={classes.arrow} />
          </Button>
        </div>
      </div>
    </div>
  )
}
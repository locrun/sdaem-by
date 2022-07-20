import React, { FC } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../../hooks/redux/redux-hooks"
import { useAppSelector } from "../../../../hooks/redux/redux-hooks"

import { getDataFlats } from "../../../../store/reducers/flatReducer"
import { getDataCottages } from "../../../../store/reducers/cottagesReducer"

import classes from "./CategoryMenu.module.scss"

const flats = [
  { id: 1, name: "Квартиры в Минске", cityName: "Минск", count: 3567, path: "/catalog/flats" },
  { id: 2, name: "Квартиры в Гомеле", cityName: "Гомель", count: 2032, path: "/catalog/flats" },
  { id: 3, name: "Квартиры в Гродно", cityName: "Гродно", count: 2302, path: "/catalog/flats" },
  { id: 4, name: "Квартиры в Могилеве", cityName: "Могилев", count: 110, path: "/catalog/flats" },
  { id: 5, name: "Квартиры в Бресте", cityName: "Брест", count: 110, path: "/catalog/flats" },
  { id: 6, name: "Квартиры в Витебск", cityName: "Витебск", count: 110, path: "/catalog/flats" },
]
const cottages = [
  { id: 1, typeName: "Агроусадьба", count: 3567, path: "/catalog/cottages" },
  { id: 2, typeName: "Коттедж на сутки", count: 2032, path: "/catalog/cottages" },
  { id: 3, typeName: "Загородный комплекс", count: 110, path: "/catalog/cottages" },
  { id: 4, typeName: "База отдыха", count: 110, path: "/catalog/cottages" },
]

const popular = [
  { id: 1, name: "Коттеджи и усадьбы на о. Брасласких", path: "/catalog/cottages" },
  { id: 2, name: "Коттеджи и усадьбы (жилье) на Нарочи", path: "/catalog/cottages" },
  { id: 3, name: "Коттеджи и усадьбы (жилье) у воды,на берегу, на озере", path: "/catalog/cottages" }
]
export const CategoryMenu: FC = () => {
  const dispatch = useAppDispatch()
  const { flatsData } = useAppSelector(state => state.flat)
  const { cottagesData } = useAppSelector(state => state.cottages)
  return (
    <aside className={classes.categories}>
      <div className={classes.flats}>
        <h4 className={classes.categoryTitle}>
          Квартиры
        </h4>
        <ul> {
          flats.map((item) =>
            <React.Fragment key={item.id}>
              <li className={classes.item} >
                <Link to={item.path} onClick={() => dispatch(getDataFlats({
                  ...flatsData,
                  cityName: item.cityName
                }))}>
                  {item.name}
                </Link>
                <span className={classes.amount}>{item.count}</span>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
      <div className={classes.cottages}>
        <h4 className={classes.categoryTitle}>
          Коттеджи и усадьбы
        </h4>
        <ul> {
          cottages.map((item) =>
            <React.Fragment key={item.id}>
              <li className={classes.item} >
                <Link to={item.path} onClick={() => dispatch(getDataCottages({
                  ...cottagesData,
                  type: item.typeName
                }))}>
                  {item.typeName}
                </Link>
                <span className={classes.amount}>{item.count}</span>
              </li>
            </React.Fragment>
          )}
          <li>
            <button>
              Еще...
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={classes.categoryTitle}>
          Популярные направления
        </h4>
        <ul> {
          popular.map((item) =>
            <React.Fragment key={item.id}>
              <li className={classes.item} >
                <Link to={item.path} >
                  {item.name}
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </aside >
  )
}
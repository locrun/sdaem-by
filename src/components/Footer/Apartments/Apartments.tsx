import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { setSelectedData } from '../../../store/reducers/filterReducer'

import { path } from '../../../constants/pages'
import classes from "./Apartments.module.scss"

const apartments = [
  { id: 0, name: "Квартиры в Минске", city: "Минск", path: path.apartments },
  { id: 1, name: "Квартиры в Гомеле", city: "Гомель", path: path.apartments },
  { id: 2, name: "Квартиры в Бресте", city: "Брест", path: path.apartments },
  { id: 3, name: "Квартиры в Витебске", city: "Витебск", path: path.apartments },
  { id: 4, name: "Квартиры в Гродно", city: "Гродно", path: path.apartments },
  { id: 5, name: "Квартиры в Могилеве", city: "Могилев", path: path.apartments },
]
export const Apartments = () => {
  const dispatch = useAppDispatch()
  const { stateData } = useAppSelector(state => state.filter)
  return (
    <div className={classes.menu}>
      <span className={classes.menuTitle}>Квартиры</span>
      <ul>
        {apartments.map((item) =>
          <li key={item.id} className={classes.menuItem}>
            <Link
              to={item.path}
              className={classes.link}
              onClick={() => dispatch(setSelectedData({
                ...stateData,
                city: item.city
              }))}>
              {item.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

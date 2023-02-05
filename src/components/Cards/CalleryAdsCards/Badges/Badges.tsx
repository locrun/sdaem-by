import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks'
import { setSelectedData } from '../../../../store/reducers/filterReducer'

import { Button } from '../../../ui-kit/Button/Button'

import { path } from "../../../../constants/pages"
import classes from "./Badges.module.scss"

const badges =
  [
    { city: "Минск" },
    { city: "Витебск" },
    { city: "Гродно" },
    { city: "Гомель" },
    { city: "Брест" },
    { city: "Могилев" },
  ]

interface IBadges {
  city?: string
}
export const Badges: FC<IBadges> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { stateData } = useAppSelector(state => state.filter)

  const onClickHandler = (item: IBadges) => {
    dispatch(setSelectedData({
      ...stateData,
      city: item.city
    }))
    navigate(path.apartments);
  }

  return (
    <ul className={classes.badgesList}>
      {
        badges.map((item) =>
          <li key={item.city} className={classes.listItem}>
            <Button onClick={() => onClickHandler(item)}
              className={classes.button}>
              {item.city}
            </Button>
          </li>
        )}
    </ul>
  )
}

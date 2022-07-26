import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks"
import { Button } from "../../../components/Button/Button"
import { Title } from "../../../components/Title/Title"

import { setFlats } from "../../../store/reducers/flatsReducer"
import { setCottages } from "../../../store/reducers/cottagesReducer"
import { setBaths } from "../../../store/reducers/bathsReducer"

import cn from "classnames"
import classes from "./Recommended.module.scss"

type IPropsTags = {
  room?: string,
  area?: string
}
const buttons = [
  { name: "1-комнатные", value: { room: '1' } },
  { name: "2-комнатные", value: { room: '2' } },
  { name: "3-комнатные", value: { room: '3' } },
  { name: "4-комнатные", value: { room: '4' } },
  { name: "5-комнатные", value: { room: '5' } },
  { name: "Шабаны р.", value: { area: 'Шабаны' } },
  { name: "Заводской р.", value: { area: 'Заводской' } },
  { name: "Ленинский р.", value: { area: 'Ленинский' } },
  { name: "Московский р.", value: { area: 'Московский' } },
  { name: "Октябрьский р.", value: { area: 'Октябрьский' } },
  { name: "Партизанский р.", value: { area: 'Партизанский' } },
  { name: "Первомайский р.", value: { area: 'Первомайский' } },
  { name: "Советский р.", value: { area: 'Советский' } },
  { name: "Фрунзенский р.", value: { area: 'Фрунзенский' } },
  { name: "Центральный р.", value: { area: 'Центральный' } },
]
export const Recommended: FC<IPropsTags> = () => {
  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState<number>()
  const { flatsData } = useAppSelector(state => state.flats)
  const { cottagesData } = useAppSelector(state => state.cottages)
  const { bathsData } = useAppSelector(state => state.baths)

  const clickHandler = (tagValue: IPropsTags) => {
    if (tagValue.room) {
      dispatch(setFlats({
        ...flatsData,
        rooms: tagValue.room
      }))
      dispatch(setCottages({
        ...cottagesData,
        rooms: tagValue.room
      }))
      dispatch(setBaths({
        ...bathsData,
        rooms: tagValue.room
      }))
    }
    if (tagValue.area) {
      dispatch(setFlats({
        ...flatsData,
        area: tagValue.area
      }))
      dispatch(setCottages({
        ...cottagesData,
        area: tagValue.area
      }))
      dispatch(setBaths({
        ...bathsData,
        rooms: tagValue.room
      }))
    }
  }
  return (
    <section>
      <div className="container">
        <Title className={classes.title}>Рекомендуем посмотреть</Title>
        <div className={classes.flex}>
          {
            buttons?.map((item, index) => (
              <Button
                key={item.name}
                onClick={() => { clickHandler(item.value); setIsActive(index) }}
                className={cn(classes.buttons, {
                  [classes.active]: isActive === index
                })}
              >
                {item.name}
              </Button>
            ))
          }
        </div>
      </div >
    </section>
  )
}
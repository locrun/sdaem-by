import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'

import { Carousel } from '../../../components/Carousel/Carousel'
import classes from "./Nearby.module.scss"
import { fetchFlats } from '../../../store/thunks/flatThunk'

export const Nearby: FC = () => {
  const dispatch = useAppDispatch()
  const { flats } = useAppSelector(state => state.flats)
  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <span className={classes.color}>Квартиры на сутки</span>
          <h3 className={classes.title}>Квартиры рядом</h3>
          <Carousel data={flats} />
        </div>
      </div>
    </section>
  )
}

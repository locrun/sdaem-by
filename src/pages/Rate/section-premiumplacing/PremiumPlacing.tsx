import React, { useEffect } from 'react'
import { TiledCards } from '../../../components/Cards/TiledCards/TiledCards'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux-hooks'
import { IResponseData } from '../../../Interfaces/IResponseData'
import { fetchFlats } from '../../../store/thunks/flatThunk'

import classes from "./PremiumPlacing.module.scss"

export const PremiumPlacing = () => {
  const dispatch = useAppDispatch()
  const { flats } = useAppSelector(state => state.flats)

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])

  return (
    <section className={classes.wrapper}>
      <div className='container'>
        <div className={classes.content}>
          <div className={classes.text}>
            <h3 className={classes.title}>Премиум размещение Top</h3>
            <ul className={classes.list}>
              <li className={classes.item}>доступны все функции платного размещения;</li>
              <li className={classes.item}>
                объявления тарифа Top закрепляются на 1-ой позиции и не участвует в ротации (остаются на занятом месте). Следующее объявление занимает 2-ое место и т.д.
              </li>
            </ul>
          </div>
          <div className={classes.cardContainer}>
            {flats?.slice(0, 1).map((flat: IResponseData) =>
              <TiledCards
                data={flat}
                className={classes.card}
                hiddenField={"hidden"}
              />
            )}
          </div>
        </div>
      </div>
    </section >
  )
}

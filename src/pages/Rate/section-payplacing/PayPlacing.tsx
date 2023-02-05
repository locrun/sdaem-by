import { FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux-hooks'


import { fetchFlats } from '../../../store/thunks/flatThunk';
import { TiledCards } from '../../../components/Cards/TiledCards/TiledCards';

import { IResponseData } from '../../../Interfaces/IResponseData';


import classes from "./PayPlacing.module.scss"

export const PayPlacing: FC = () => {

  const dispatch = useAppDispatch()
  const { flats } = useAppSelector(state => state.flats)

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])

  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.cardContainer}>
            {flats?.slice(0, 1).map((flat: IResponseData) =>
              <TiledCards
                data={flat}
                className={classes.card}
                hiddenField={"hidden"}
              />
            )}
          </div>
          <div className={classes.text}>
            <h3 className={classes.title}>Платное размещение Gold</h3>
            <ul className={classes.list}>
              <li className={classes.item}>
                доступны все функции бесплатного размещения;
              </li>
              <li className={classes.item}>
                возможность закрепить своё объявление в верхней части каталога (Приоритетное размещение Gold);
              </li>
              <li className={classes.item}>
                Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}

import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { TiledCards } from '../../components/Cards/TiledCards/TiledCards'
import { Pagination } from '../../components/Pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'


import { IResponseData } from '../../Interfaces/IResponseData'
import { fetchFlats } from '../../store/thunks/flatThunk'

import cn from "classnames"
import classes from "./Bookmarks.module.scss"


const data = [
  { id: 0, name: "Квартиры" },
  { id: 1, name: "Коттеджи / Усадьбы" },
  { id: 2, name: "Бани" },
  { id: 3, name: "Авто на прокат" }
]

export const Bookmarks: FC = () => {
  const dispatch = useAppDispatch()
  const { flats } = useAppSelector(state => state.flats)
  const [active, setActive] = useState(0)

  useEffect(() => {
    dispatch(fetchFlats())
  }, [dispatch])
  const breadCrumbsItems = useMemo(() =>
    [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: "Закладки",
      }
    ], []
  )

  const onClickHandler = (id: number) => {
    setActive(id)
  }

  const { pageCount, slicedArray, handlePageChange, forcePage }
    = usePagination(6, flats)
  return (
    <section>
      <div className={classes.bg}>
        <div className="container">
          <Breadcrumbs breadCrumbsItems={breadCrumbsItems} />
          <h3 className={classes.title}>Ваши закладки</h3>
        </div>
      </div>
      <div className="container">
        <div className={classes.categoryFilter}>
          <ul className={classes.list}>
            {
              data.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={cn(classes.listItem, {
                      [classes.active]: item.id === active
                    })}
                    onClick={() => onClickHandler(item.id)}
                  >
                    {item.name}
                  </li>)
              })
            }
          </ul>
        </div>
      </div>
      <div className="container">
        <div className={classes.cards}>
          {slicedArray?.map((items: IResponseData) =>
            <TiledCards key={items.id} data={items} className={classes.shadow} />
          )}
          <Pagination
            forcePage={forcePage - 1}
            pageCount={pageCount.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  )
}

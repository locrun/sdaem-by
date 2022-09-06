import { FC, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks"
import { setSelectedData } from "../../../store/reducers/filterReducer"
import { setIsClicked } from "../../../store/reducers/recommendReducer"
import { recommend } from "../../../data/recommendate"
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs"
import { usePageTitle } from "../../../hooks/usePageTitle"
import { IconSvg } from "../../../components/IconSvg/IconSvg"

import { path } from "../../../constants/pages"
import classes from "./Recommended.module.scss"


export interface IPropsRecommended {
  id: number,
  name: string,
  key: string
  room?: string,
  area?: string,
  [index: string]: string | number | undefined
}

export const Recommended: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { stateData } = useAppSelector(state => state.filter)
  const { isClicked } = useAppSelector(state => state.recommend)

  const [current, setCurrent] = useState<IPropsRecommended[]>([])
  const [isActive, setIsActive] = useState<number>()

  const [crumbsTitle, setCrumbsTitle] = useState<string>()
  const { title } = usePageTitle()

  useEffect(() => {
    switch (location.pathname) {
      case path.APARTMENTS:
        setCrumbsTitle('Квартиры')
        break;
      case path.COTTAGES:
        setCrumbsTitle('Коттеджи и усадьбы')
        break;
      case path.BATHS:
        setCrumbsTitle('Бани и Сауны')
        break;
      case path.CARS:
        setCrumbsTitle('Авто на прокат')
        break;
      default:
    }
    setCurrent(recommend)
  }, [location.pathname]);

  const breadCrumbsItems = useMemo(() => [
    {
      id: 0,
      title: 'Home',
      path: '/',
    },
    {
      id: 1,
      title: crumbsTitle,
    },

  ], [crumbsTitle])

  const clickHandler = (item: IPropsRecommended, key: string) => {
    dispatch(setSelectedData({
      ...stateData,
      [key]: item[key]
    }))
    setIsActive(item.id)
    fn(item.id)
  }

  const fn = (id: number) => {
    if (!isClicked) {
      const selected = recommend.filter((item) => item.id === id)
      setCurrent(selected)
      dispatch(setIsClicked(true))
    }

    if (isClicked) {
      setCurrent(recommend)
      dispatch(setIsClicked(false))
      dispatch(setSelectedData({
        ...stateData,
        room: ""
      }))
    }
  }

  useEffect(() => {
    if (!isClicked) {
      setCurrent(recommend)
    }
  }, [isClicked])

  return (
    <section className={classes.wrapper}>
      <div className="container">
        <Breadcrumbs breadCrumbsItems={breadCrumbsItems} />
        <h3 className={classes.title}>
          {title}
        </h3>
        <div className={classes.recommend}>
          <span className={classes.label}>Рекомендуем посмотреть</span>
          <ul className={classes.list}>
            {current?.map((item: IPropsRecommended) => {
              const { id, key } = item
              return (
                <li
                  key={id}
                  onClick={() => clickHandler(item, key)}
                  className={classes.listItem}
                >
                  {item.name}
                  {isActive === id &&
                    isClicked &&
                    <IconSvg id="#cross" className={classes.cross} />
                  }
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section >
  )
}
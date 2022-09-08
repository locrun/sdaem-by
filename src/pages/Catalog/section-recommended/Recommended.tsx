import { FC, useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux-hooks"
import { setSelectedData } from "../../../store/reducers/filterReducer"
import { setCurrentData } from "../../../store/reducers/recommendReducer"
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
  const { active } = useAppSelector(state => state.recommend)

  const [isActive, setIsActive] = useState(true)
  const [crumbsTitle, setCrumbsTitle] = useState<string>()
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

  const { title } = usePageTitle()

  useEffect(() => {
    if (active.isClicked) {
      setIsActive(false)
    }
    if (!active.isClicked) {
      dispatch(setSelectedData({
        ...stateData,
        room: ""
      }))
      setIsActive(true)
    }
  }, [active.isClicked, dispatch])


  const clickHandler = (item: IPropsRecommended, key: string) => {
    dispatch(setSelectedData({
      ...stateData,
      [key]: item[key]
    }))
    setIsActive(prevState => !prevState)
    dispatch(setCurrentData({ isClicked: isActive, id: item.id }))
  }


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
            {active.data?.map((item: IPropsRecommended) => {
              const { id, key } = item
              return (
                <li
                  key={id}
                  onClick={() => clickHandler(item, key)}
                  className={classes.listItem}
                >
                  {item.name}
                  {active.id === id &&
                    active.isClicked &&
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
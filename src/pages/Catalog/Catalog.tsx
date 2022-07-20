import { FC, useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"

import { Autocomplete } from "../../components/Autocomplete/Autocomplete"
import { Title } from "../../components/Title/Title"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { TiledCards } from "../Home/components/TiledCards/TiledCards"
import { ListCards } from "../Home/components/ListCards/ListCards"
import { Pagination } from "../../components/Pagination/Pagination"
import { Filter } from "../../components/Filter/Filter"
import { Button } from "../../components/Button/Button"
import { ShareButtons } from "../../components/ShareButtons/ShareButtons"
import { IconSvg } from "../../components/IconSvg/IconSvg"

import { useCottagesFilter } from "../../hooks/useCottagesFilter"
import { useApartmentsFilter } from "../../hooks/useApartmentsFilter"
import { useBathsFilter } from "../../hooks/useBathsFilter"
import { useCarsFilter } from "../../hooks/useCarsFilter"
import { usePagination } from "../../hooks/usePagination"

import { getDataFlats } from "../../store/reducers/flatReducer"
import { getDataCottages } from "../../store/reducers/cottagesReducer"

import { fetchCottages } from "../../store/thunks/cottagesThunk"
import { fetchFlat } from "../../store/thunks/flatThunk"


import cn from "classnames"
import classes from "./Catalog.module.scss"
import { ICards } from "../../Interfaces/ICards"




type TagsButton = {
  room?: string,
  area?: string
}
const tagsButtons = [
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
const options = [
  { value: "По возрастанию", label: "По возрастанию" },
  { value: "По убыванию", label: "По убыванию" }

]
export const Catalog: FC = () => {

  const location = useLocation()
  const dispatch = useAppDispatch()

  const { filteredApartmentsData } = useApartmentsFilter()
  const { filteredCottagesData } = useCottagesFilter()
  const { filteredBathsData } = useBathsFilter()
  const { filteredCarsData } = useCarsFilter()

  const { flatsData } = useAppSelector(state => state.flat)
  const { cottagesData } = useAppSelector(state => state.cottages)

  const [active, setActive] = useState<number>()
  const [isActive, setIsActive] = useState<string>('tiles')


  const [array, setArray] = useState<any[]>([])

  const displayPerPage = isActive === "tiles" ? 6 : 3
  const { pageCount, slicedArray, handlePageChange, forcePage }
    = usePagination(displayPerPage, array)



  useEffect(() => {
    if (location.pathname === '/catalog/flats') {
      dispatch(fetchFlat())
    }
    if (location.pathname === '/catalog/cottages') {
      dispatch(fetchCottages())
    }
  }, [dispatch, location.pathname])

  useEffect(() => {
    switch (location.pathname) {
      case "/catalog/flats":
        return setArray(filteredApartmentsData);
      case "/catalog/cottages":
        return setArray(filteredCottagesData)
      case "/catalog/baths":
        return setArray(filteredBathsData)
      case "/catalog/cars":
        return setArray(filteredCarsData)
      default:
        setArray(filteredApartmentsData);
    }
  }, [location, filteredApartmentsData, filteredCottagesData, filteredBathsData, filteredCarsData])



  const clickHandler = (tagValue: TagsButton) => {
    if (tagValue.room) {
      dispatch(getDataFlats({
        ...flatsData,
        rooms: tagValue.room
      }))
      dispatch(getDataCottages({
        ...cottagesData,
        rooms: tagValue.room
      }))
    }
    if (tagValue.area) {
      dispatch(getDataFlats({
        ...flatsData,
        area: tagValue.area
      }))
      dispatch(getDataCottages({
        ...cottagesData,
        area: tagValue.area
      }))
    }
  }


  return (
    <>
      <div className={classes.recommendWrapper}>
        <div className={"container"}>
          <Breadcrumbs name={"Квартиры в Минске"} marginBottom={"30px"} />
          <Title title={"Аренда квартир на сутки в Минске"} />
          <div className={classes.tagsBlock}>
            <p>Рекомендуем посмотреть</p>
            <div className={classes.tagsFlex}>
              {
                tagsButtons?.map((tag, index) => (
                  <Button
                    key={tag.name}
                    title={tag.name}
                    onClick={() => { clickHandler(tag.value); setActive(index) }}
                    className={cn(classes.tagsButton, {
                      [classes.activeClass]: active === index
                    })}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className={classes.filterWrapper}>
        <div className={"container"}>
          <Filter />
        </div>
      </div>
      <div className={"container"}>
        <div className={classes.sortBlock}>
          <Autocomplete
            options={options}
            placeholder="По умолчанию"
            classNames={classes.select}
          />
          <div className={classes.buttons}>
            <Button title={"Список"}
              onClick={() => setIsActive('list')}
              className={cn(classes.showListBtn, {
                [classes.btnActiveClass]: isActive === "list"
              })}
            >
              <IconSvg id={"#list"} className={classes.listIcon} />
            </Button>
            <Button title={"Плитки"}
              onClick={() => setIsActive("tiles")}
              className={cn(classes.showTilesBtn, {
                [classes.btnActiveClass]: isActive === "tiles"
              })}
            >
              <IconSvg id={"#tiles"} className={classes.tilesIcon} />
            </Button>
            <Button title={"Показать на карте"} className={classes.showMapBtn}>
              <IconSvg id={"#mark"} className={classes.showMapIcon} />
            </Button>
          </div>
        </div>

      </div>
      <div className="container">
        {isActive === "tiles" ?
          <div className={classes.tilesCardWrapper}>
            {slicedArray.map((items: ICards) =>
              <TiledCards
                key={items.id}
                data={items}
                className={classes.shadow}
              />
            )}
          </div>
          :
          <div className={classes.listCardWrapper}>
            {slicedArray.map((items: ICards) =>
              <ListCards
                key={items.id}
                data={items}
                className={classes.shadow} />
            )}
          </div>
        }
        <div className={classes.bottom}>
          <Pagination
            forcePage={forcePage - 1}
            pageCount={pageCount.length}
            onChange={handlePageChange}
          />
          <ShareButtons />
        </div>
      </div>
    </>
  )
}


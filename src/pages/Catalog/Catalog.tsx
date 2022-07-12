import { FC, useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"
import { getFilterValues } from "../../store/reducers/flatReducer"

import { Pagination } from "../../components/Pagination/Pagination"

import { Autocomplete } from "../../components/Autocomplete/Autocomplete"
import { Filter } from "../../components/Filter/Filter"
import { Title } from "../../components/Title/Title"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { TiledCards } from "../Home/components/TiledCards/TiledCards"
import { ListCards } from "../Home/components/ListCards/ListCards"
import { Button } from "../../components/Button/Button"
import { ShareButtons } from "../../components/ShareButtons/ShareButtons"
import { IconSvg } from "../../components/IconSvg/IconSvg"

import { useFilter } from "../../hooks/useFilter"
import { usePagination } from "../../hooks/usePagination"

import cn from "classnames"
import classes from "./Catalog.module.scss"


type TagsButton = {
  room?: string,
  area?: string
}
const tagsButton = [
  { name: "1-комнатные", value: { room: '1' } },
  { name: "2-комнатные", value: { room: '2' } },
  { name: "3-комнатные", value: { room: '3' } },
  { name: "4-комнатные", value: { room: '4' } },
  { name: "5-комнатные", value: { room: '5' } },
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

  const { filteredData } = useFilter()

  const { pageCount, slicedArray, handlePageChange, forcePage }
    = usePagination(3, filteredData)


  const dispatch = useAppDispatch()
  const { values } = useAppSelector(state => state.flat)


  const [active, setActive] = useState<number>()
  const [isActive, setIsActive] = useState('tiles')

  const clickHandler = (tagValue: TagsButton) => {
    if (tagValue.room) {
      dispatch(getFilterValues({
        ...values,
        rooms: tagValue.room
      }))
    }
    if (tagValue.area) {
      dispatch(getFilterValues({
        ...values,
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
                tagsButton?.map((tag, index) => (
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
            {slicedArray.map(flat =>
              <TiledCards
                key={flat.id}
                data={flat}
                className={classes.shadow}
              />
            )}
          </div>
          :
          <div className={classes.listCardWrapper}>
            {slicedArray.map(flat =>
              <ListCards
                key={flat.id}
                data={flat}
                className={classes.shadow}
              />
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


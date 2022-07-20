import React, { FC, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks";
import { getDataFlats } from "../../store/reducers/flatReducer";
import { getDataCottages } from "../../store/reducers/cottagesReducer";

import { IconSvg } from "../IconSvg/IconSvg";

import classes from "./Dropdown.module.scss"
import { TRANSITION } from "../../constants/transition";


const apartments = [
  { id: 0, title: "Квартиры на сутки в Минске", cityName: "Минск", pageTitle: "Минске", path: "catalog/flats" },
  { id: 1, title: "Квартиры на сутки в Гомеле", cityName: "Гомель", pageTitle: "Гомеле", path: "catalog/flats" },
  { id: 2, title: "Квартиры на сутки в Бресте", cityName: "Брест", pageTitle: "Бресете", path: "catalog/flats" },
  { id: 3, title: "Квартиры на сутки в Витебске", cityName: "Витебск", pageTitle: "Витебске", path: "catalog/flats" },
  { id: 4, title: "Квартиры на сутки в Гродно", cityName: "Гродно", pageTitle: "Гродно", path: "catalog/flats", },
  { id: 5, title: "Квартиры на сутки в Могилеве", cityName: "Могилев", pageTitle: "Могилеве", path: "catalog/flats" }]
const cottages = [
  { id: 0, title: "Коттеджы и усадьбы в Минске", cityName: "Минск", path: "catalog/cottages" },
  { id: 1, title: "Коттеджы и усадьбы в Гомеле", cityName: "Гомель", path: "catalog/cottages" },
  { id: 2, title: "Коттеджы и усадьбы в Бресте", cityName: "Брест", path: "catalog/cottages" },
  { id: 3, title: "Коттеджы и усадьбы в Витебске", cityName: "Витебск", path: "catalog/cottages" },
  { id: 4, title: "Коттеджы и усадьбы в Гродно", cityName: "Гродно", path: "catalog/cottages" },
  { id: 5, title: "Коттеджы и усадьбы в Могилеве", cityName: "Могилев", path: "catalog/cottages" },
]

const baths = [
  { id: 0, title: "Бани и Сауны в Минске", cityName: "Минск", path: "catalog/baths" },
  { id: 1, title: "Бани и Сауны в Гомеле", cityName: "Гомель", path: "catalog/baths" },
  { id: 2, title: "Бани и Сауны в Бресте", cityName: "Брест", path: "catalog/baths" },
  { id: 3, title: "Бани и Сауны в Витебске", cityName: "Витебск", path: "catalog/baths" },
  { id: 4, title: "Бани и Сауны в Гродно", cityName: "Гродно", path: "catalog/baths" },
  { id: 5, title: "Бани и Сауны в Могилеве", cityName: "Могилев", path: "catalog/baths" },
]

const cars = [
  { id: 0, title: "Авто на прокат в Минске", cityName: "Минск", path: "catalog/car" },
  { id: 1, title: "Авто на прокат в Гомеле", cityName: "Гомель", path: "catalog/car" },
  { id: 2, title: "Авто на прокат в Бресте", cityName: "Брест", path: "catalog/car" },
  { id: 3, title: "Авто на прокат в Витебске", cityName: "Витебск", path: "catalog/car" },
  { id: 4, title: "Авто на прокат в Гродно", cityName: "Гродно", path: "catalog/car" },
  { id: 5, title: "Авто на прокат в Могилеве", cityName: "Могилев", path: "catalog/car" },
]

interface IProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

export const Dropdown: FC<IProps> = ({ isOpen, children, className }) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef} >
        {children}
      </div>
    </CSSTransition>
  )
}

export const DropdownPage: FC = () => {
  const dispatch = useAppDispatch()
  const { flatsData } = useAppSelector(state => state.flat)
  const { cottagesData } = useAppSelector(state => state.cottages)


  const [flatOpen, setFlatOpen] = useState(false);
  const [cottagesOpen, setCottagesOpen] = useState(false);
  const [bathsOpen, setBathsOpen] = useState(false);
  const [carsOpen, setCarsOpen] = useState(false);

  const refFlats = useRef<HTMLButtonElement>(null);
  const refCottages = useRef<HTMLButtonElement>(null);
  const refBaths = useRef<HTMLButtonElement>(null);
  const refCars = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideDropdown)
    return () => {
      window.removeEventListener('click', handleClickOutsideDropdown)
    }
  })

  const handleClickOutsideDropdown = (e: MouseEvent) => {
    if (e.target !== refFlats.current) {
      setFlatOpen(false)
    }
    if (e.target !== refCottages.current) {
      setCottagesOpen(false)
    }
    if (e.target !== refBaths.current) {
      setBathsOpen(false)
    }
    if (e.target !== refCars.current) {
      setCarsOpen(false)
    }
  }
  const dropdownToggleApartments: React.MouseEventHandler = (e) => {
    setFlatOpen((prevState) => !prevState)
    if (cottagesOpen || bathsOpen || carsOpen) {
      setCottagesOpen(false)
      setBathsOpen(false)
      setCarsOpen(false)
    }
  }
  const dropdownToggleCottages: React.MouseEventHandler = (e) => {
    setCottagesOpen((prevState) => !prevState)
    if (bathsOpen || flatOpen || carsOpen) {
      setBathsOpen(false)
      setFlatOpen(false)
      setCarsOpen(false)
    }

  }
  const dropdownToggleBaths: React.MouseEventHandler = (e) => {
    setBathsOpen((prevState) => !prevState)
    if (cottagesOpen || flatOpen || carsOpen) {
      setCottagesOpen(false)
      setFlatOpen(false)
      setCarsOpen(false)
    }
  }
  const dropdownToggleCars: React.MouseEventHandler = (e) => {
    setCarsOpen((prevState) => !prevState)
    if (cottagesOpen || flatOpen || bathsOpen) {
      setCottagesOpen(false)
      setFlatOpen(false)
      setBathsOpen(false)
    }
  }
  return (
    <div className={classes.flex}>
      <>
        <button
          className={classes.button}
          onClick={dropdownToggleApartments}
          ref={refFlats}
        >
          Квартиры на сутки
          <IconSvg id={"#mark"} className={classes.icon} />
          <Dropdown
            isOpen={flatOpen}
            className={classes.alert}
          >
            <ul className={classes.list}>
              {apartments.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={classes.listItem}
                    onClick={() => dispatch(getDataFlats({
                      ...flatsData,
                      cityName: item.cityName
                    }))}
                  >
                    <Link to={item.path} className={classes.itemLink}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </button>
        <button
          className={classes.button}
          onClick={dropdownToggleCottages}
          ref={refCottages}
        >
          Коттеджы и усадьбы
          <Dropdown
            isOpen={cottagesOpen}
            className={classes.myNode}
          >
            <ul className={classes.list}>
              {cottages.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={classes.listItem}
                    onClick={() => dispatch(getDataCottages({
                      ...cottagesData,
                      cityName: item.cityName
                    }))}
                  >
                    <Link to={item.path} className={classes.itemLink}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </button>
        <button
          className={classes.button}
          onClick={dropdownToggleBaths}
          ref={refBaths}
        >
          Бани и Сауны
          <Dropdown
            isOpen={bathsOpen}
            className={classes.myNode}
          >
            <ul className={classes.list}>
              {baths.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={classes.listItem}
                    onClick={() => dispatch(getDataCottages({
                      cityName: item.cityName
                    }))}
                  >
                    <Link to={item.path} className={classes.itemLink}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </button>
        <button
          className={classes.button}
          onClick={dropdownToggleCars}
          ref={refCars}
        >
          Авто на прокат
          <Dropdown
            isOpen={carsOpen}
            className={classes.myNode}
          >
            <ul className={classes.list}>
              {cars.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={classes.listItem}
                    onClick={() => dispatch(getDataCottages({
                      cityName: item.cityName
                    }))}
                  >
                    <Link to={item.path} className={classes.itemLink}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Dropdown>
        </button >
      </>
    </div >
  )
}

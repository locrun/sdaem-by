import { FC, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"

import { MoreOptions } from "../MoreOptions/MoreOptions"
import { ButtonGroup } from "./ButtonGroup/ButtonGroup"
import { InputGroup } from "./InputGroup/InputGroup"
import { SelectGroup } from "./SelectGroup/SelectGroup"

import { setSelectedData } from "../../../store/reducers/filterReducer"

import { SingleValue } from "react-select"
import { ISelectOption } from "../../../Interfaces/ISelectOption"

import { path } from "../../../constants/pages"
import cn from "classnames"
import classes from "./Filter.module.scss"

interface IPropsFilter {
  onSubmitForm?: () => void
}

export const Filter: FC<IPropsFilter> = ({ onSubmitForm }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const homePath = location.pathname === "/" ? true : false
  const { stateData } = useAppSelector(state => state.filter)
  const [openOptions, setOptions] = useState(false)


  const onChangeHandler = (newValue: SingleValue<ISelectOption>) => {
    if (newValue) {
      let key: string | number | symbol | undefined | any = newValue.key
      dispatch(setSelectedData({
        ...stateData,
        [key]: newValue?.value,
      }))
    }
  }

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmitForm)
      onSubmitForm()
    if (location.pathname === path.home)
      navigate("/catalog/flats")
  }

  const onHandleClick = () => {
    setOptions((prevState) => !prevState)
  }

  return (
    <div className={classes.filterWrapper}>
      <div className={cn(classes.container, {
        [classes.containerTransform]: !homePath
      })}>
        <form onSubmit={onHandleSubmit}>
          <div className={cn(classes.wrapper, {
            [classes._radiusNone]: openOptions,
            [classes.wrapperTransform]: !homePath
          })}>
            <div className={classes.content}>
              <SelectGroup onChangeHandler={onChangeHandler} />
              <InputGroup onChangeHandler={onChangeHandler} />
              <ButtonGroup onHandleClick={onHandleClick} />
            </div>
          </div>
          {openOptions && <MoreOptions />}
        </form>
      </div>
    </div>
  )
}


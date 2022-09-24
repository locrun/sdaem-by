import { FC } from "react"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux-hooks"

import { Button } from "../../../components/ui-kit/Button/Button"
import { IconSvg } from "../../../components/IconSvg/IconSvg"

import { toggleProductsCards } from "../../../store/reducers/filterReducer"

import cn from "classnames"
import classes from "./DiffButtons.module.scss"


export const DiffButtons: FC = () => {
  const dispatch = useAppDispatch();
  const { active } = useAppSelector(state => state.filter)

  return (
    <div className={classes.buttons}>
      <Button
        onClick={() => dispatch(toggleProductsCards('list'))}
        className={cn(classes.showListBtn, {
          [classes.btnActiveClass]: active === "list"
        })}
      >
        {"Список"}
        <IconSvg id={"#list"} className={classes.listIcon} />
      </Button>
      <Button
        onClick={() => dispatch(toggleProductsCards('tiles'))}
        className={cn(classes.showTilesBtn, {
          [classes.btnActiveClass]: active === "tiles"
        })}
      >
        {"Плитки"}
        <IconSvg id={"#tiles"} className={classes.tilesIcon} />
      </Button>
      <Button className={classes.showMapBtn}>
        Показать на карте
        <IconSvg id={"#mark"} className={classes.showMapIcon} />
      </Button>
    </div>
  )
}
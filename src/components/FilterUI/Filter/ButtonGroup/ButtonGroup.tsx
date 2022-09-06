import { FC, useState } from "react"
import { useLocation } from "react-router";
import { useAppDispatch } from "../../../../hooks/redux/redux-hooks";
import { resetFilter } from "../../../../store/reducers/filterReducer";


import { Button } from "../../../ui-kit/Button/Button";
import { IconSvg } from "../../../IconSvg/IconSvg";
import { path } from "../../../../constants/pages";

import cn from "classnames"
import classes from "./ButtonGroup.module.scss"
import { setIsClicked } from "../../../../store/reducers/recommendReducer";



export interface IPropsButtons {
  onHandleClick: () => void
}
export const ButtonGroup: FC<IPropsButtons> = ({ onHandleClick }) => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const homePath = location.pathname === path.HOME ? true : false
  const [openOptions, setOpenOptions] = useState(false)

  const onResetFilter = () => {
    dispatch(setIsClicked(false))
    dispatch(resetFilter())
  }

  return (
    <div className={classes.buttons}>
      <Button className={cn(classes.optionButton, classes.four, {
        [classes.btnTransform]: !homePath,
        [classes.activeClass]: openOptions
      })}
        onClick={() => { onHandleClick(); setOpenOptions((prevState) => !prevState) }}
      >
        <span>Больше опций</span>
        <IconSvg id={"#options"} className={classes.optionsIcon} />
      </Button>

      {homePath ?
        <>
          <Button className={classes.mapButton}>
            На карте
            <IconSvg id={"#mark"} className={classes.mark} />
          </Button>
          <Button
            type="submit"
            className={classes.showAllBtn}
          >
            Показать
          </Button>
        </>
        :
        <>
          <Button
            type="submit"
            className={classes.clearBtn}
            onClick={onResetFilter}
          >
            Очистить
          </Button>
          <Button
            type="submit"
            className={classes.showSelectedBtn}
          >
            Показать объекты
          </Button>

        </>
      }
    </div>
  )
}


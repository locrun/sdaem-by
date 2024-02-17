import { FC, useState } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";

import {
  setCurrentData,
  setFlag,
} from "../../../../store/reducers/recommendReducer";

import { Button } from "../../../ui-kit/Button/Button";
import { IconSvg } from "../../../IconSvg/IconSvg";
import { path } from "../../../../constants/pages";

import cn from "classnames";
import classes from "./ButtonGroup.module.scss";

export interface IPropsButtons {
  onResetFilters: () => void;
  moreOptionsOpened: boolean;
  onToggleMoreOptions: () => void;
}

export const ButtonGroup: FC<IPropsButtons> = ({
  onResetFilters,
  moreOptionsOpened,
  onToggleMoreOptions,
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { active } = useAppSelector((state) => state.recommend);
  const homePath = location.pathname === path.home ? true : false;

  const onResetFilter = () => {
    // TODO ????
    dispatch(setCurrentData({ ...active, isClicked: false }));
    dispatch(setFlag("reset"));
    onResetFilters();
  };

  return (
    <div className={classes.buttons}>
      <Button
        className={cn(classes.optionButton, classes.four, {
          [classes.btnTransform]: !homePath,
          [classes.activeClass]: moreOptionsOpened,
        })}
        onClick={() => {
          onToggleMoreOptions();
        }}
      >
        <span>Больше опций</span>
        <IconSvg id={"#options"} className={classes.optionsIcon} />
      </Button>

      {homePath ? (
        <>
          <Button className={classes.mapButton}>
            На карте
            <IconSvg id={"#mark"} className={classes.mark} />
          </Button>
          <Button type="submit" className={classes.showAllBtn}>
            Показать
          </Button>
        </>
      ) : (
        <>
          <Button
            type="submit"
            className={classes.clearBtn}
            onClick={onResetFilter}
          >
            Очистить
          </Button>
          <Button type="submit" className={classes.showSelectedBtn}>
            Показать объекты
          </Button>
        </>
      )}
    </div>
  );
};

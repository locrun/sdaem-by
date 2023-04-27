import { FC } from "react";

import { Button } from "../../../components/ui-kit/Button/Button";
import { IconSvg } from "../../../components/IconSvg/IconSvg";

import cn from "classnames";
import classes from "./DiffButtons.module.scss";

interface DiffButtonsProps {
  view: "list" | "cards";
  onViewChange: (view: "list" | "cards") => void;
}

export const DiffButtons: FC<DiffButtonsProps> = ({ view, onViewChange }) => {
  return (
    <div className={classes.buttons}>
      <Button
        onClick={() => onViewChange("list")}
        className={cn(classes.showListBtn, {
          [classes.btnActiveClass]: view === "list",
        })}
      >
        {"Список"}
        <IconSvg id={"#list"} className={classes.listIcon} />
      </Button>
      <Button
        onClick={() => onViewChange("cards")}
        className={cn(classes.showTilesBtn, {
          [classes.btnActiveClass]: view === "cards",
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
  );
};

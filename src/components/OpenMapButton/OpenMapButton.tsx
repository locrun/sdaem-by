import { FC } from "react"
import { Button } from "../ui-kit/Button/Button"
import { IconSvg } from "../IconSvg/IconSvg"

import classes from "./OpenMapButton.module.scss"
export const OpenMapButton: FC = () => {
  return (
    <Button className={classes.button}>
      <IconSvg id={"#mark"} className={classes.mark} />
      Открыть карту
    </Button>)
}


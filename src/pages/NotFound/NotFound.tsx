import { FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/ui-kit/Button/Button";
import { IconSvg } from "../../components/IconSvg/IconSvg";

import classes from "./NotFound.module.scss"

export const NotFound: FC = () => {
  const navigate = useNavigate()
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.contentWrapper}>
          <div>
            <h3 className={classes.title}>Ошибка 404</h3>
            <p className={classes.subtitle}>
              Возможно, у вас опечатка в адресе страницы, или её просто не существует
            </p>
            <Button className={classes.button} onClick={() => navigate("/")}>
              <IconSvg id="#home-run" className={classes.home} />
              Вернуться на главную
            </Button>
          </div>
          <span className={classes.notfound}>404</span>
        </div>
      </div>
    </section >
  )
}
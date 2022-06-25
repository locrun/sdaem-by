import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button/Button";
import { IconSvg } from "../../../../components/IconSvg/IconSvg";
import classes from "./Card.module.scss";

interface IPropsCard {
  data: {
    id: number
    desc: string;
  }
}

export const Card: FC<IPropsCard> = (props) => {
  const { desc } = props.data
  return <div className={classes.card}>
    <div className={classes.imgWrapper}>
      <img src={require("../../../../assets/images/01.png")} alt="картинка" />
    </div>
    <div className={classes.cardData}>
      <ul className={classes.info}>
        <li className={classes.price}>
          65.00 BYN
          <span>за сутки</span>
        </li>
        <li className={classes.capacity}>
          <span>4 (2+2)</span>
          <IconSvg id={"#user"} />
        </li>
        <li className={classes.rooms}>4 комн.</li>
        <li className={classes.square}>179 м²</li>
      </ul>
      <div className={classes.location}>
        <p className={classes.locationItem}>
          Минск, б-р Мулявина, д. 10
          <IconSvg id={"#mark"} />
        </p>
        <p className={classes.locationItem}>
          <span className={classes.right}>
            <IconSvg className={classes.dot} id={"#dot"} />
            Шабаны
          </span>
          Грушевка
          <IconSvg id={"#metro"} />
        </p>
      </div>
      <p className={classes.desc}>
        {desc}
      </p>
      <div className={classes.buttons}>
        <Button title={"Контакты"} className={classes.contactsBtn}>
          <IconSvg id={"#phone"} className={classes.iconPhone} />
        </Button>
        <Link to={"/"} className={classes.moreBtn} >
          {"Подробнее"}
        </Link>
      </div>
    </div>
  </div>
}
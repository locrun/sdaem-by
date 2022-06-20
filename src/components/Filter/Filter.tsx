import { Autocomplete } from "../Autocomplete/Autocomplete"
import { IconSvg } from "../IconSvg/IconSvg";
import option from "../../assets/images/options.svg"
import { Button } from "../Button/Button";
import classes from "./Filter.module.scss";
import cn from "classnames"

export const Filter = () => {

  const onChangeHandler = () => {
    console.log("123")
  }
  return (
    <>
      <div className={classes.filter}>
        <div className={classes.itemColumn}>
          <span className={classes.label}>Город</span>
          <Autocomplete
            placeholder={"Выберите"}
            classNames={classes.selectStyle}
            onChange={() => onChangeHandler}
          />
        </div>
        <div className={classes.itemColumn}>
          <span className={classes.label}>Комнаты</span>
          <Autocomplete
            placeholder={"Выберите"}
            classNames={classes.selectStyle}
            onChange={() => console.log("change")} />
        </div>
        <div className={classes.itemColumn}>
          <span className={classes.label}>Цена за сутки (BYN)</span>
          <div className={classes.inputwrapper}>
            <input className={classes.from} type="text" placeholder="От" />
            <span>-</span>
            <input className={classes.to} type="text" placeholder="До" />
          </div>
        </div>
        <div className={cn(classes.itemColumn, classes.option)}>
          <button className={classes.optionButton}>Больше опций
            <img className={classes.icn} src={option} alt="icn" />
          </button>
        </div>
        <div className={classes.onmap}>
          <button className={classes.mapButton}>На карте</button>
          <IconSvg id={"#mark"} className={classes.mark} />
        </div>
        <Button
          title="Показать"
          className={classes.btn}
          onClick={() => console.log('click')} />
      </div>
    </>
  )
}


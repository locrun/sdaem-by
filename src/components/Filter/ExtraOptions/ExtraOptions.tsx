import { FC } from "react";
import { Autocomplete } from "../../Autocomplete/Autocomplete";

import classes from "./ExtraOptions.module.scss"

const cityOptions = [
  { value: 'Минск', label: 'Минск' },
  { value: 'Гомель', label: 'Гомель' },
  { value: 'Гродно', label: 'Гродно' },
  { value: 'Могилев', label: 'Могилев' },
  { value: 'Брест', label: 'Брест' },

]
export const ExtraOptions: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        <div className={classes.autocomplete}>
          <span>Спальные места</span>
          <Autocomplete
            options={cityOptions}
            placeholder={"Выберите"}
            classNames={classes.select} />
        </div>
        <div className={classes.autocomplete}>
          <span>Район</span>
          <Autocomplete
            options={cityOptions}
            placeholder={"Выберите"}
            classNames={classes.select} />
        </div>
        <div className={classes.autocomplete}>
          <span>Метро</span>
          <Autocomplete
            options={cityOptions}
            placeholder={"Выберите"}
            classNames={classes.select} />
        </div>
      </div>

    </div>
  );
};

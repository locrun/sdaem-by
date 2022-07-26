import { FC } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch } from "../../../../hooks/redux/redux-hooks";
import { setFlats } from "../../../../store/reducers/flatsReducer";

import { Button } from "../../../../components/Button/Button";
import classes from "./CityButtons.module.scss";


interface IPropsButtons {
  data: {
    name: string,
    path: string,
    cityName: string
  }[]
}
export const CityButtons: FC<IPropsButtons> = ({ data }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <ul className={classes.list}>
      {
        data.map((item) =>
          <li key={item.name} className={classes.listItem}>
            <Button onClick={() => {
              navigate("/catalog/flats"); dispatch(setFlats({
                cityName: item.cityName
              }))
            }} className={classes.button}>
              {item.name}
            </Button>
          </li>
        )}
    </ul>
  )
}
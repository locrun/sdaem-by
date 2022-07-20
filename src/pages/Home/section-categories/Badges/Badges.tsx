import { FC } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch } from "../../../../hooks/redux/redux-hooks";
import { getDataFlats } from "../../../../store/reducers/flatReducer";

import { Button } from "../../../../components/Button/Button";
import classes from "./Badges.module.scss";


interface IPropsBadges {
  tags: {
    name: string,
    path: string,
    cityName: string
  }[]
}
export const Badges: FC<IPropsBadges> = (props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <ul className={classes.tagList}>
      {
        props.tags.map((item) =>
          <li key={item.name} className={classes.tagItem}>
            <Button onClick={() => {
              navigate("/catalog/flats"); dispatch(getDataFlats({
                cityName: item.cityName
              }))
            }} className={classes.tagBtn}>
              {item.name}
            </Button>
          </li>
        )}
    </ul>
  )
}
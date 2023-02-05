import { FC } from "react"
import classes from "./Checkbox.module.scss"

export interface IPropsCheckbox {
  data?: string[]
  onChange?: () => void
}
export const Checkbox: FC<IPropsCheckbox> = ({ data, onChange }) => {
  return (
    <ul className={classes.checkboxList}>
      {
        data?.map((checkbox) =>
          <li key={checkbox}>
            <input
              name="game"
              type="checkbox"
              id={checkbox}
              className={classes.customCheckbox}
              value={checkbox}
              onChange={onChange}
            />
            <label htmlFor={checkbox} >
              <span>
                {checkbox}
              </span>
            </label>
          </li>
        )}
    </ul>
  )
}

import { FC } from "react"
import { createSearchParams } from "react-router-dom";
import { Button } from "../../../../components/Button/Button"
import { IconSvg } from "../../../../components/IconSvg/IconSvg"
import { Title } from "../../../../components/Title/Title"
import classes from "./SearchInput.module.scss"

interface IPropsSearchInput {
  value: string,
  setSearchParams: Function,
  onClick: () => void

}

export const SearchInput: FC<IPropsSearchInput> = (props) => {
  const { value, setSearchParams, onClick } = props
  return (
    <div className={classes.flex}>
      <Title title={"Новости"} />
      <form className={classes.searchForm} action="">
        <input className={classes.searchInput}
          type="text"
          placeholder="Поиск по статьям"
          value={value}
          onChange={(e) => {
            setSearchParams(createSearchParams({ filter: e.target.value }));
          }}
        />
        <Button
          className={classes.searchBtn}
          onClick={onClick}>
          <IconSvg
            id={"#search"}
            className={classes.searchIcon} />
        </Button>
      </form>
    </div>
  )
}
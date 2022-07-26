
import { FC } from "react"
import { createSearchParams } from "react-router-dom";
import { Button } from "../Button/Button"
import { IconSvg } from "../IconSvg/IconSvg"
import { Title } from "../Title/Title"
import classes from "./SearchInput.module.scss"

interface IPropsSearchInput {
  value: string,
  setSearchParams: Function,
  onClick: () => void
}

export const SearchInput: FC<IPropsSearchInput> = ({ value, setSearchParams, onClick }) => {

  return (
    <div className={classes.flex}>
      <Title>
        Новости
      </Title>
      <form className={classes.searchForm}>
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
          onClick={onClick}
          type={"button"}
        >
          <IconSvg
            id={"#search"}
            className={classes.searchIcon} />
        </Button>
      </form>
    </div >
  )
}
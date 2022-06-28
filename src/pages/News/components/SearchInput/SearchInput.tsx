import { FC } from "react"
import { Button } from "../../../../components/Button/Button"
import { IconSvg } from "../../../../components/IconSvg/IconSvg"
import { Title } from "../../../../components/Title/Title"
import classes from "./SearchInput.module.scss"
export const SearchInput: FC = () => {
  return (
    <div className={classes.flex}>
      <Title title={"Новости"} />
      <form className={classes.searchForm} action="">
        <input className={classes.searchInput} type="text" placeholder="Поиск по статьям" />
        <Button className={classes.searchBtn}>
          <IconSvg id={"#search"} className={classes.searchIcon} />
        </Button>
      </form>
    </div>
  )
}
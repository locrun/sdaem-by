import classes from "./NothingFound.module.scss"

export const NothingFound = () => {
  return (
    <h3 className={classes.nothing}>
      По вашему запросу ничего не нашлось
    </h3>
  )
}

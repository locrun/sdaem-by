import { FC } from "react"
import { useFilter } from "../../hooks/useFilter"
import { Recommended } from "./section-recommended/Recommended"
import { Products } from "./section-products/Products"
import { ShowMap } from "./section-showmap/ShowMap"
import { Filter as FilterUI } from "../../components/FilterUI/Filter/Filter"

export const Catalog: FC = () => {
  const { submitFilteringFunction } = useFilter()

  const onHandleSubmit = () => {
    submitFilteringFunction()
  }
  return (
    <>
      <Recommended />
      <FilterUI onSubmitForm={onHandleSubmit} />
      <Products />
      <ShowMap />
    </>
  )
}

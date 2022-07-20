import { FC } from "react"

import { useSearchParams } from "react-router-dom"

import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { SearchInput } from "./components/SearchInput/SearchInput"

import { usePagination } from "../../hooks/usePagination"
import { Pagination } from "../../components/Pagination/Pagination"
import { NewsList } from "./components/NewsList/NewsList"


import { useArticleSearch } from "../../hooks/useArticleSearch"
import cn from "classnames"
import classes from "./News.module.scss"


export const News: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  let valueFromUrlParams = searchParams.get("filter") || ''

  const { handleArticleSearch, filteredData } = useArticleSearch(valueFromUrlParams)
  const { handlePageChange, pageCount, slicedArray, forcePage } = usePagination(9, filteredData)


  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div>
          <Breadcrumbs name={"Новости"} marginBottom={"25px"} />
          <SearchInput
            value={valueFromUrlParams}
            setSearchParams={setSearchParams}
            onClick={handleArticleSearch}
          />
          <NewsList
            newsList={slicedArray}
          // loading={loading}
          // error={error}
          />
        </div>
        <div className={classes.mt}>
          <Pagination
            forcePage={forcePage - 1}
            pageCount={pageCount.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  )
}



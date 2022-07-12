import { FC, useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks"
import { useSearchParams } from "react-router-dom"

import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { SearchInput } from "./components/SearchInput/SearchInput"
import { NewsList } from "./components/NewsList/NewsList"
import { Pagination } from "../../components/Pagination/Pagination"

import classes from "./News.module.scss"
import cn from "classnames"

import { fetchNews } from "../../store/thunks/newsThunk"


export const News: FC = () => {

  const { news, loading, error } = useAppSelector(state => state.news);
  const dispatch = useAppDispatch();
  console.log(news)

  const [searchParams, setSearchParams] = useSearchParams("");
  let filterValue = searchParams.get("filter") || ""


  // const [currentPage, setCurrentPage] = useState(1)
  // const [newsPerPage] = useState(9);


  // useEffect(() => {
  //   dispatch(fetchNews({ currentPage, newsPerPage, filterValue: '' }))
  // }, [dispatch, currentPage, newsPerPage])

  // useEffect(() => {
  //   if (filterValue === '') {
  //     dispatch(fetchNews({ currentPage, newsPerPage, filterValue }))
  //   }
  // }, [dispatch, currentPage, newsPerPage, filterValue])


  // const handlerClickSearchArticle = () => {
  //   if (filterValue !== "") {
  //     dispatch(fetchNews( filterValue ))
  //   }
  // }

  // const handlePageChange = ({ selected }: any) => {
  //   setCurrentPage(selected + 1)
  // }
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected + 1)
  }


  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div>
          <Breadcrumbs name={"Новости"} marginBottom={"25px"} />
          <SearchInput
            value={filterValue}
            setSearchParams={setSearchParams}
            onClick={() => "handlerClickSearchArticle"}
          />
          <NewsList
            newsList={news}
            loading={loading}
            error={error}
          />
        </div>
        <div className={classes.mt}>
          <Pagination
            pageCount={9}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  )
}

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
import { INews } from "../../Interfaces/INews"


export const News: FC = () => {
  const { news, loading, error } = useAppSelector(state => state.news)
  console.log(news)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNews(9))
  }, [dispatch])

  const [searchParams, setSearchParams] = useSearchParams("");
  const filterValue = searchParams.get("filter") || "";


  const [currentPage, setCurrentPage] = useState(0)
  const [newsPerPage] = useState(9)

  const [currentNews, setCurrentNews] = useState<INews[]>([])

  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage


  useEffect(() => {
    if (filterValue === '') {
      setCurrentNews(news.slice(firstNewsIndex, lastNewsIndex))
    }
  }, [lastNewsIndex, firstNewsIndex, news, filterValue])


  let pageCount: number[] = []
  const handleArticleSearch = () => {
    const filter = news?.filter((news) => {
      const regExp = new RegExp(filterValue, "i");
      return regExp.test(news.title);
    });
    console.log(filter)
  }


  for (let i = 0; i <= Math.ceil(news.length / newsPerPage); i++) {
    pageCount.push(i)
  }

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected + 1)
  }


  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div>
          <Breadcrumbs name={"Новости"} />
          <SearchInput
            value={filterValue}
            setSearchParams={setSearchParams}
            onClick={handleArticleSearch}
          />
          <NewsList
            newsList={currentNews}
            loading={loading}
            error={error}
          />
        </div>
        <Pagination
          initialPage={currentPage}
          pageCount={pageCount.length - 1}
          onChange={handlePageChange} />
      </div>
    </section>
  )
}
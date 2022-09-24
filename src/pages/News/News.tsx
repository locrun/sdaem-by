import { FC, useMemo } from "react"

import { useAppSelector } from "../../hooks/redux-hooks"

import { NewsForm } from "../../components/Form/NewsForm/NewsForm"
import { usePagination } from "../../hooks/usePagination"
import { Pagination } from "../../components/Pagination/Pagination"
import { NewsList } from "../../components/NewsList/NewsList"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { Spinner } from "../../Spinner/Spinner"
import { ErrorMessage } from "../../components/Notification/ErrorMessage/ErrorMessage"

import cn from "classnames"
import classes from "./News.module.scss"

export const News: FC = () => {
  const { filteredData } = useAppSelector(state => state.news)
  const { loading, error } = useAppSelector((state) => state.news);


  const { handlePageChange, pageCount, slicedArray, forcePage } = usePagination(9, filteredData)

  const breadCrumbsItems = useMemo(() =>
    [
      {
        id: 0,
        title: 'Home',
        path: '/',
      },
      {
        id: 1,
        title: "Новости",
      }
    ], []
  )

  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div>
          <Breadcrumbs breadCrumbsItems={breadCrumbsItems} />
          <div className={classes.flex}>
            <h3>
              Новости
            </h3>
            <NewsForm />
          </div >
        </div>
        <div>
          {!loading && !error ?
            <NewsList
              newsList={slicedArray}
            /> :
            <>
              <Spinner visible={loading} />
              <ErrorMessage error={error} />
            </>
          }
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



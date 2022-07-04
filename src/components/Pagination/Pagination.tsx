
import { FC } from "react"
import ReactPaginate from 'react-paginate';
import classes from "./Pagination.module.scss"

interface IPaginationProps {
  initialPage?: number,
  marginPagesDisplayed?: number,
  pageCount: number,
  pageRangeDisplayed?: number,
  onChange: ({ selected }: { selected: number }) => void
}

export const Pagination: FC<IPaginationProps> = (props) => {
  const {
    initialPage,
    marginPagesDisplayed,
    pageCount,
    pageRangeDisplayed,
    onChange } = props


  return (
    <ReactPaginate
      breakLabel="..."
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName={classes.pagination}
      activeClassName={classes.active}
      pageClassName={classes.item}
      pageLinkClassName={classes.link}
      breakClassName={classes.breakLinks}
      previousLabel={false}
      nextLabel={false}
    />
  )
}


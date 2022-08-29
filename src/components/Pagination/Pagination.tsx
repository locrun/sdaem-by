import { FC } from "react"
import ReactPaginate from 'react-paginate';
import classes from "./Pagination.module.scss"

interface IPaginationProps {
  forcePage?: number
  pageCount: number,
  onChange: ({ selected }: { selected: number }) => void
}
export const Pagination: FC<IPaginationProps> = ({ pageCount, onChange, forcePage }) => {

  return (
    <ReactPaginate
      breakLabel="..."
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onChange}
      containerClassName={classes.pagination}
      activeClassName={classes.active}
      pageClassName={classes.item}
      pageLinkClassName={classes.link}
      breakClassName={classes.breakLinks}
      previousLabel={null}
      nextLabel={null}
    />
  )
}

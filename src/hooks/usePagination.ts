import { useState, useEffect, useRef, useMemo } from "react";

export const usePagination = <T>(data: T[], displayPerPage: number) => {
  const [page, setPage] = useState(0);

  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setPage(0);
  }, [data]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const items = useMemo(() => {
    return data.slice(page * displayPerPage, (page + 1) * displayPerPage);
  }, [displayPerPage, data, page]);

  return {
    page,
    items,
    pageCount: Math.ceil(data.length / displayPerPage),
    handlePageChange,
  };
};

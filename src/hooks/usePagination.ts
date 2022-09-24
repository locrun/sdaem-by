import { useState, useEffect } from "react";
import { useAppSelector } from "./redux-hooks";

export const usePagination = (displayPerPage: number, data: any) => {
  const { stateData } = useAppSelector((state) => state.filter);
  const { searchFilterValue } = useAppSelector((state) => state.news);

  const [forcePage, setForcePage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(6);

  useEffect(() => {
    setForcePage(1);
    setShowPerPage(displayPerPage);
  }, [displayPerPage]);

  const lastIndex = forcePage * showPerPage;

  const firstIndex = lastIndex - showPerPage;

  const slicedArray = data?.slice(firstIndex, lastIndex);

  useEffect(() => {
    setForcePage(1);
  }, [stateData, searchFilterValue]);

  const pageCount = [];
  for (let i = 0; i < Math.ceil(data?.length / showPerPage); i++) {
    pageCount.push(i);
  }

  const handlePageChange = ({ selected }: any) => {
    setForcePage(selected + 1);
  };

  return {
    pageCount,
    slicedArray,
    handlePageChange,
    forcePage,
  };
};

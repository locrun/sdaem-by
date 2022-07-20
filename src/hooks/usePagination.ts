import { useState, useEffect } from "react";
import { useAppSelector } from "./redux/redux-hooks";

export const usePagination = (displayPerPage: number, data: any) => {
  const { flatsData } = useAppSelector((state) => state.flat);
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
  }, [flatsData, searchFilterValue]);

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

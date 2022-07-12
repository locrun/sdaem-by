import { useState, useEffect } from "react";
import { useAppSelector } from "./redux/redux-hooks";
import { IFlats } from "../Interfaces/IFlats";

export const usePagination = (displayPerPage: number, data: IFlats[]) => {
  const { values } = useAppSelector((state) => state.flat);

  const [forcePage, setForcePage] = useState(1);

  const [showPerPage] = useState(displayPerPage);

  const lastIndex = forcePage * showPerPage;

  const firstIndex = lastIndex - showPerPage;

  const slicedArray = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    setForcePage(1);
  }, [values]);

  const pageCount = [];
  for (let i = 0; i < Math.ceil(data.length / showPerPage); i++) {
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

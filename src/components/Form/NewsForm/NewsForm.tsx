import { ChangeEvent, FC, useEffect, useCallback, useState, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { setFilteredData } from '../../../store/reducers/newsReducer'
import { createSearchParams, useSearchParams } from "react-router-dom"
import { INews } from '../../../Interfaces/INews'

import { setFilterValue } from '../../../store/reducers/newsReducer'
import { IconSvg } from '../../IconSvg/IconSvg'
import { Button } from '../../ui-kit/Button/Button'

import classes from "./NewsForm.module.scss"
import { fetchNews } from '../../../store/thunks/newsThunk'

export const NewsForm: FC = () => {
  const dispatch = useAppDispatch()
  const { news } = useAppSelector((state) => state.news);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [inputValue, setInputValue] = useState<string>('')
  let valueFromUrlParams = searchParams.get("filter") || ''

  const [filteredData, setFilterdData] = useState<INews[]>();

  useEffect(() => {
    dispatch(setFilteredData(filteredData))
  }, [dispatch, filteredData])


  const onHandleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    let filteredNewsData = news?.filter((news) => {
      const regExp = new RegExp(inputValue, "i");
      return regExp.test(news.title);
    });
    setFilterdData(filteredNewsData);
    dispatch(setFilterValue(valueFromUrlParams));
  }, [dispatch, inputValue, news, valueFromUrlParams]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
    setSearchParams(createSearchParams({ filter: e.target.value }));
  }
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  useEffect(() => {
    if (inputValue === '') {
      dispatch(setFilterValue(inputValue));
      setFilterdData(news)
    }
  }, [dispatch, inputValue, news])

  return (
    <form onSubmit={onHandleSubmit} className={classes.searchForm}>
      <input className={classes.searchInput}
        type="text"
        placeholder="Поиск по статьям"
        value={inputValue}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className={classes.searchBtn}
      >
        <IconSvg
          id={"#search"}
          className={classes.searchIcon} />
      </Button>
    </form>
  )
}



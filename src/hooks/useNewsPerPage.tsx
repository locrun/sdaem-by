import { useEffect, useState } from "react"
import { INewsList } from "../Interfaces/data"

export const useNewsPerPage = (count?: number, id?: number) => {
  const [newsList, setNewsList] = useState<INewsList[]>([])

  useEffect(() => {
    const requestHandler = async () => {
      let response = await fetch("/api/news")
      let data = await response.json();
      if (data) {
        setNewsList(data)
      }
      else {
        throw new Error("Какая то Ошибка");
      }
    }
    requestHandler()
  }, [])


  const data = newsList?.filter((news) => news.id !== id)
    .slice(0, count);

  const news = newsList?.find((news) => news.id === id);

  return {
    data,
    news
  }
}
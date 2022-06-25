import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";
import { NewsDetail } from "../pages/NewsDetail/NewsDetail";

import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { Layout } from "../layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<News />} />
          <Route path="news/detail/:id" element={<NewsDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
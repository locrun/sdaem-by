import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { NewsPage } from "../pages/NewsPage/News";
import { Layout } from "../layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="news" element={<NewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";
import { NewsDetail } from "../pages/NewsDetail/NewsDetail";
import { NotFound } from "../pages/404/404";
import { Contacts } from "../pages/Contacts/Contacts";
import { Ads } from "../pages/Ads/Ads";
import { Rate } from "../pages/Rate/Rate";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { Layout } from "../layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="/news/detail/:id" element={<NewsDetail />} />
          <Route path="ads" element={<Ads />} />
          <Route path="rate" element={<Rate />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="404" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/News";
import { NewsDetail } from "./pages/NewsDetail/NewsDetail";
import { NotFound } from "./pages/NotFound/NotFound";
import { Contacts } from "./pages/Contacts/Contacts";
import { Advert } from "./pages/Advert/Advert";
import { Rate } from "./pages/Rate/Rate";
import { LogIn } from "./pages/LogIn/LogIn";
import { Registration } from "./pages/Registration/Registration";
import { Catalog } from "./pages/Catalog/Catalog";
import { Layout } from "./layout/Layout";

import { path } from "./constants/pages"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={path.news} element={<News />} />
          <Route path={path.detail} element={<NewsDetail />} />
          <Route path={path.advert} element={<Advert />} />
          <Route path={path.rate} element={<Rate />} />
          <Route path={path.contacts} element={<Contacts />} />
          <Route path={path.catalog} element={<Catalog />} />
          <Route path={path.notfound} element={<NotFound />} />
        </Route>
        <Route path={path.login} element={<LogIn />} />
        <Route path={path.registration} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
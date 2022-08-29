import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";
import { NewsDetail } from "../pages/NewsDetail/NewsDetail";
import { NotFound } from "../pages/NotFound/NotFound";
import { Contacts } from "../pages/Contacts/Contacts";
import { Advert } from "../pages/Advert/Advert";
import { Rate } from "../pages/Rate/Rate";
import { LogIn } from "../pages/LogIn/LogIn";
import { Registration } from "../pages/Registration/Registration";
import { Catalog } from "../pages/Catalog/Catalog";
import { Layout } from "../layout/Layout";

import {
  HOME, NEWS, DETAIL, ADVERT, RATE, CONTACTS,
  CATALOG, NOTFOUND, LOGIN, REGISTRATION
} from "../constants/routerPaths"


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={NEWS} element={<News />} />
          <Route path={DETAIL} element={<NewsDetail />} />
          <Route path={ADVERT} element={<Advert />} />
          <Route path={RATE} element={<Rate />} />
          <Route path={CONTACTS} element={<Contacts />} />
          <Route path={CATALOG} element={<Catalog />} />
          <Route path={NOTFOUND} element={<NotFound />} />
        </Route>
        <Route path={LOGIN} element={<LogIn />} />
        <Route path={REGISTRATION} element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
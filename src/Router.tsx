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

import { Bookmarks } from "./pages/Bookmarks/Bookmarks";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { UserAccount } from "./pages/UserAccount/UserAccount/UserAccount";
import { Check } from "./pages/UserAccount/Check/Check";

import { path } from "./constants/pages"
import { PrivateRouter } from "./constants/pages";
import { AddAdvert } from "./pages/UserAccount/AddAdvert/AddAdvert";
import { UserManual } from "./pages/UserAccount/UserManual/UserManual";
import { RaiseAdvert } from "./pages/UserAccount/RaiseAdvert/RaiseAdvert";
import { EditAccount } from "./pages/UserAccount/EditAccount/EditAccount";


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
          <Route path={path.bookmarks} element={<Bookmarks />} />
          <Route path={path.contacts} element={<Contacts />} />
          <Route path={path.catalog} element={<Catalog />} />
          <Route path={path.productDetail} element={<ProductDetail />} />

          <Route path={PrivateRouter.personal} element={<UserAccount />} />
          <Route path={PrivateRouter.check} element={<Check />} />
          <Route path={PrivateRouter.addAdvert} element={<AddAdvert />} />
          <Route path={PrivateRouter.userManual} element={<UserManual />} />
          <Route path={PrivateRouter.raiseAdvert} element={<RaiseAdvert />} />
          <Route path={PrivateRouter.editAccount} element={<EditAccount />} />

          <Route path={path.notfound} element={<NotFound />} />
        </Route>
        <Route path={path.login} element={<LogIn />} />
        <Route path={path.registration} element={<Registration />} />

      </Routes>
    </BrowserRouter>
  )
}



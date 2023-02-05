export enum path {
  home = "/",
  apartments = "/catalog/flats",
  cottages = "/catalog/cottages",
  baths = "/catalog/baths",
  cars = "/catalog/cars",
  news = "news",
  detail = "/news/detail/:id",
  advert = "advert",
  bookmarks = "bookmarks",
  rate = "rate",
  contacts = "contacts",
  catalog = "catalog/:type",
  productDetail = "/catalog/product/:id",
  notfound = "*",
  login = "login",
  registration = "registration",
}

export enum PrivateRouter {
  personal = "personal",
  check = "/personal/check",
  addAdvert = "put",
  userManual = "manual",
  raiseAdvert = "raise",
  editAccount = "edit-account",
}

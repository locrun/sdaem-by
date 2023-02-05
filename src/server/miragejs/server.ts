import { createServer } from "miragejs";
import news from "../data/news.json";
import flats from "../data/flats.json";
import cottages from "../data/cottages.json";
import baths from "../data/baths.json";
import cars from "../data/cars.json";
import contacts from "../data/contacts.json";
import navigation from "../data/navigation.json";
import menu from "../data/menuList.json";
import sidebar from "../data/sidebar.json";
import userAccountNav from "../data/userAccountNav.json";
createServer({
  routes() {
    this.namespace = "api";
    this.get("/navigation", () => navigation);
    this.get("/userAccountNav", () => userAccountNav);
    this.get("/menu", () => menu);
    this.get("/news", () => news);
    this.get("/flats", () => flats);
    this.get("/cottages", () => cottages);
    this.get("/baths", () => baths);
    this.get("/cars", () => cars);
    this.get("/contacts", () => contacts);
    this.get("/sidebar", () => sidebar);
  },
});

import { createServer } from "miragejs";
import news from "../data/news.js";
import apartment from "../data/apartments";
createServer({
  routes() {
    this.namespace = "api";
    this.get("/news", () => news);
    this.get("/apartments", () => apartment);
  },
});

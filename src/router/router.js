import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home.vue";
import Portifolio from "../components/Portfolio/Portfolio.vue";
import Stocks from "../components/Stocks/Stocks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portifolio },
    { path: "/stocks", component: Stocks },
  ],
});

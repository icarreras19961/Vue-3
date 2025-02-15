import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/homeView",
      name: "homeView",
      component: HomeView,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;

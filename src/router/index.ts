import { createRouter, createWebHistory } from "vue-router";
import { FavoritesView, HomeView, EachImage } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:title",
      name: "nasa_image",
      component: EachImage,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
  ],
});

export default router;

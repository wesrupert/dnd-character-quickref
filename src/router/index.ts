import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const Routes = {
  home: "home",
  cards: "cards",
  add: "cards/new",
  import: "cards/import",
} as const;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import("@/views/CardsView.vue"),
  },
  //   TODO: Add
  //   {
  //     path: "new",
  //     name: "new",
  //     component: () => import("@/views/AddCardView.vue"),
  //   },
  {
    path: "/cards/import",
    name: "import",
    component: () => import("@/views/ImportView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "navigationLayout",
      component: () => import("@/common/layouts/NavigationLayout.vue"),
    },
  ],
});

export default router;

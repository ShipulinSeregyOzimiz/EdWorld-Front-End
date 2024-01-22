import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "generalLayout",
      component: () => import("@/common/layouts/GeneralLayout.vue"),
      children: [
        {
          path: "",
          name: "landingLayout",
          component: () => import("@/common/layouts/LandingLayout.vue"),
          children: [
            {
              path: "",
              name: "studyAbroad",
              component: () =>
                import("@/modules/landing/views/StudyAbroad.vue"),
            },
          ],
        },
        {
          path: "/dashboard",
          name: "navigationLayout",
          component: () => import("@/common/layouts/NavigationLayout.vue"),
          children: [],
        },
      ],
    },
  ],
});

export default router;

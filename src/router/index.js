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
            {
              path: "/study-in-italy",
              name: "studyInItaly",
              component: () =>
                import("@/modules/landing/views/StudyInItaly.vue"),
            },
            {
              path: "/our-cases",
              name: "ourCases",
              component: () => import("@/modules/landing/views/OurCases.vue"),
            },
            {
              path: "/language-classes",
              name: "languageClasses",
              component: () =>
                import("@/modules/landing/views/LanguageClasses.vue"),
            },
            {
              path: "/english-level-test",
              name: "landingTest",
              component: () =>
                import("@/modules/landing/views/LandingTest.vue"),
            },
          ],
        },
        {
          path: "/auth",
          name: "authLayout",
          component: () => import("@/common/layouts/AuthLayout.vue"),
          children: [
            {
              path: "login",
              name: "login",
              component: () => import("@/modules/auth/views/Login.vue"),
            },
            {
              path: "registration",
              name: "registration",
              component: () => import("@/modules/auth/views/Registration.vue"),
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

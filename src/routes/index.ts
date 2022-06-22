import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/privacy",
    name: "PrivacyDetails",
    component: () => import("@/views/PrivacyDetails.vue"),
  },

  {
    path: "/terms",
    name: "TermsDetails",
    component: () => import("@/views/TermsDetails.vue"),
  },

  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Auth/AuthView.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Auth/LogIn.vue"),
      },
      {
        path: "signup",
        name: "SignUp",
        component: () =>
          import(/* webpackChunkName: "signup" */ "../views/Auth/SignUp.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "UserDetails",
    component: () => import("../views/UserDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import { useUserStore } from "@/stores/user";

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
    beforeEnter() {
      if (useUserStore().$state.isLogged) {
        return { name: "Account" };
      }
    },
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
    name: "User",
    component: () => import("../views/User/UserView.vue"),
    children: [
      {
        path: "account",
        name: "Account",
        component: () => import("../views/User/AccountDetail.vue"),
        beforeEnter() {
          if (!useUserStore().$state.isLogged) {
            return { name: "Login" };
          }
        },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashBoard.vue"),
    beforeEnter() {
      if (!useUserStore().$state.isLogged) {
        return { name: "Login" };
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

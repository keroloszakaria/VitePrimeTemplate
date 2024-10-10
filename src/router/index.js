import { createRouter, createWebHistory } from "vue-router";
import auth from "@/modules/auth/router/index.js";
import users from "@/modules/users/router/index.js";
import loadModuleLocales from "@/utils/loadModuleLocales";
import storage from "@/composables/useStorage";
import { authGuard } from "../modules/auth/middleware/auth";

const routes = [
  ...auth,
  {
    path: "/dashboard",
    name: "main",
    component: () => import("@/layouts/DashboardLayout.vue"),
    meta: {
      moduleName: "main",
      requiresAuth: true,
    },
    children: [
      {
        path: "/dashboard",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {},
      },
      ...users,
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/layouts/404.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const moduleName = to.meta.moduleName;
  const locale = storage.get("locale") || import.meta.env.VITE_LOCALE;
  await loadModuleLocales(moduleName, locale);
  authGuard(to, from, next);
});

export default router;

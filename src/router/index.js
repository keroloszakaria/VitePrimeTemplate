import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/modules/auth/router/index.js";
import loadModuleLocales from "@/utils/loadModuleLocales";
import storage from "@/composables/useStorage";

const routes = [
  ...Auth,
  {
    path: "/",
    name: "main",
    component: () => import("@/layouts/MainLayout.vue"),
    meta: {
      moduleName: "main",
    },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {},
      },
    ],
  },
  {
    path: "/dashboard",
    name: "main",
    component: () => import("@/layouts/DashboardLayout.vue"),
    meta: {},
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {},
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/layouts/404.vue"),
    meta: {},
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
  next();
});

export default router;

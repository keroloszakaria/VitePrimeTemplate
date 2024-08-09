import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../layouts/MainLayout.vue"),
    meta: {},
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        meta: {},
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../layouts/404.vue"),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

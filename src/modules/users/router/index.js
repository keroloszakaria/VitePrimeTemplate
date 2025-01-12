export default [
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users/add",
    name: "add-user",
    component: () => import("../views/Users/Add.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users/edit/:id",
    name: "edit-user",
    component: () => import("../views/Users/Edit.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users/view/:id",
    name: "view-user",
    component: () => import("../views/Users/View.vue"),
    meta: { requiresAuth: true },
  },
];

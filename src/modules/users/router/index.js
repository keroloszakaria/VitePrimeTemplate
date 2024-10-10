export default [
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
    meta: {
      moduleName: "users",
      requiresAuth: true,
    },
  },
];

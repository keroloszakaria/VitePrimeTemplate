export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/loginView.vue"),
    meta: {
      moduleName: "auth",
    },
  },
];

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      moduleName: "auth",
    },
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
    meta: {
      moduleName: "auth",
    },
  },
  {
    path: "/auth/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPasswordView.vue"),
    meta: {
      moduleName: "auth",
    },
  },
];

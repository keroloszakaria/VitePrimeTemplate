import { useAuthStore } from "../store/auth";

export function authGuard(to, from, next) {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth) {
    if (!authStore.user.value || !authStore.isAuthenticated.value)
      next("/login");
    else next();
  } else {
    if (authStore.user.value && authStore.isAuthenticated.value)
      next("/dashboard");
    else next();
  }
}

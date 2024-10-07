import { ref } from "vue";
import { httpRequest } from "@/services/api";
import { useRouter } from "vue-router";
import { setCookie, getCookie, removeCookie } from "@/composables/useCookies"; // Ensure removeCookie is imported
import storage from "@/composables/useStorage";

export const useAuthStore = () => {
  const isLoading = ref(false);
  const error = ref(null);
  const user = ref(storage.get("user") || null);
  const isAuthenticated = ref(!!getCookie("token")); // Boolean indicating if user is authenticated
  const router = useRouter();

  const login = async (data) => {
    try {
      isLoading.value = true;
      const response = await httpRequest("/login", {
        method: "POST",
        data: data,
      });

      user.value = response.data.user;
      isAuthenticated.value = true;
      const token = response.data.token;

      setCookie("token", token);
      storage.set("user", user.value);

      router.push({ name: "main" });
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    removeCookie("token");
    storage.remove("user");
    user.value = null;
    isAuthenticated.value = false;
    router.push({ name: "login" });
  };

  return { isLoading, user, error, isAuthenticated, login, logout };
};

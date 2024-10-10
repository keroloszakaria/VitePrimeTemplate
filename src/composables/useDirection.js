import { computed } from "vue";
import storage from "@/composables/useStorage";

export const useDirection = () => {
  const locale = storage.get("locale") || import.meta.env.VITE_LOCALE;
  const rtlLanguages = ["ar", "he"];
  const direction = computed(() =>
    rtlLanguages.includes(locale) ? "rtl" : "ltr"
  );

  return { direction, locale };
};

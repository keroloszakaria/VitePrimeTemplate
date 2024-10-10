<template>
  <router-view />
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import storage from "@/composables/useStorage";

const { locale } = useI18n();
const updateHtmlAttributes = (locale) => {
  const rtlLanguages = ["ar", "he"];
  const direction = rtlLanguages.includes(locale) ? "rtl" : "ltr";
  storage.set("direction", direction);

  document.documentElement.setAttribute("lang", locale);
  document.documentElement.setAttribute("dir", direction);
};

watch(locale, (newLocale) => {
  updateHtmlAttributes(newLocale);
});

onMounted(() => {
  const initialLocale = locale.value;
  updateHtmlAttributes(initialLocale);
});
</script>

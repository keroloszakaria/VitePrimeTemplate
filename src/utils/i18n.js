import { createI18n } from "vue-i18n";
import storage from "@/composables/useStorage";

function loadLocaleMessages() {
  const locales = import.meta.glob(`../locales/*.json`, { eager: true });
  const messages = {};

  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[path];
    }
  }
  return messages;
}

export default createI18n({
  legacy: false,
  locale: storage.get("locale") || import.meta.env.VITE_LOCALE,
  fallbackLocale: storage.get("locale") || import.meta.env.VITE_LOCALE,
  globalInjection: true,
  messages: loadLocaleMessages(),
});

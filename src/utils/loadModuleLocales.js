import i18n from "@/utils/i18n";

export default async function loadModuleLocales(moduleName, locale) {
  try {
    // Dynamically load the locale files from the respective module
    const messages = await import(
      `../modules/${moduleName}/locales/${locale}.json`
    );

    // Set the locale messages in the i18n instance
    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale = locale; // Set the active locale
  } catch (error) {
    console.error(
      `Locale file for ${moduleName} with ${locale} not found.`,
      error
    );
  }
}

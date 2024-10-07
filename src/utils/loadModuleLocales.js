import i18n from "@/utils/i18n";

export default async function loadModuleLocales(moduleName, locale) {
  try {
    let messages;
    if (moduleName === "main")
      messages = await import(`@/locales/${locale}.json`);
    else
      messages = await import(
        `../modules/${moduleName}/locales/${locale}.json`
      );

    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale = locale;
  } catch (error) {
    console.error(
      `Locale file for ${moduleName} with ${locale} not found.`,
      error
    );
  }
}

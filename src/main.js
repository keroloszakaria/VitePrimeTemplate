import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
// CSS Framework
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Ripple from "primevue/ripple";
import FocusTrap from "primevue/focustrap";

// Custom Icon
import icons from "@/plugins/icons";

// Localization
import i18n from "@/utils/i18n";
globalThis.t = i18n.global.t;

//
import { useDirection } from "@/composables/useDirection"; // Import the composable
const { direction, locale } = useDirection();

// icons
import "@/assets/icons/css/all.css";

// scss
import "@/assets/scss/main.scss";
import "@/assets/tailwind.css";
// Theme
import "@/assets/scss/theme/_default.scss";

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.$dir = direction;
app.config.globalProperties.$locale = locale;
app.directive("ripple", Ripple);
app.directive("focustrap", FocusTrap);
app.use(router);
app.use(i18n);
app.use(icons);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".app-dark",
      prefix: "",
    },
  },
});

app.mount("#app");

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
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

// icons
import "@/assets/icons/css/all.css";

// scss
import "@/assets/scss/main.scss";
import "@/assets/tailwind.css";
// Theme
import "@/assets/scss/theme/_default.scss";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.directive("ripple", Ripple);
app.directive("focustrap", FocusTrap);
app.use(icons);

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

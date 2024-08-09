import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// CSS Framework
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
// icons
import "./assets/icons/css/all.css";

// scss
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");

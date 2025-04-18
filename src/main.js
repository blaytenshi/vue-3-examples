import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import { initialiseThemes } from "./utils/load-themes";
import loadDesignTokens from "@/utils/load-design-tokens.js";

const pinia = createPinia();

const bootApp = () => {
  loadDesignTokens();
  initialiseThemes();
  createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
};

bootApp();



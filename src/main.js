import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import { initialiseThemes } from "./utils/load-themes";
import loadDesignTokens from "@/utils/load-design-tokens.js";
import { initAuth0 } from "@/auth/auth0.js";

const pinia = createPinia();

const bootApp = () => {
  loadDesignTokens();
  initialiseThemes();

  const app = createApp(App);

  app.use(initAuth0());
  app.use(router);
  app.use(pinia);

  app.mount("#app");
};

bootApp();



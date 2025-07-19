import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import { initialiseThemes } from "./utils/load-themes";
import loadDesignTokens from "@/utils/load-design-tokens.js";
import { initAuth0 } from "@/auth/auth0.js";
import loadVeeValidateGlobalValidatorRules from "@/views/library-examples/vee-validate/load-vee-validate-global-validator-rules.js";

const pinia = createPinia();

const bootApp = () => {
  loadVeeValidateGlobalValidatorRules();
  loadDesignTokens();
  initialiseThemes();

  const app = createApp(App);

  app.use(router);
  // Needs to be declared AFTER the vue-router
  // More info here: https://github.com/auth0/auth0-vue/blob/main/EXAMPLES.md#1-protecting-a-route-when-using-multiple-vue-applications
  app.use(initAuth0());
  app.use(pinia);

  app.mount("#app");
};

bootApp();



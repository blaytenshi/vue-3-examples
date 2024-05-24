import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import { initialiseThemes } from "./utils/load-themes";

const pinia = createPinia();

const bootApp = () => {
  initialiseThemes();
  createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
};

bootApp();



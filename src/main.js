import { createApp } from "vue";
import { createPinia } from "pinia";
import VMask from "@ssibrahimbas/v-mask";
import App from "./App.vue";
import router from "./router";
import * as VueI18n from "vue-i18n";
import "./assets/styles/global.css";
import "./style.css";

import ru from "./common/locales/ru.json";
import kk from "./common/locales/kz.json";
import en from "./common/locales/en.json";

const messages = {
  ru,
  kk,
  en,
};

const defaultLocale = "ru";

const savedLocale = localStorage.getItem("lang");

const i18n = VueI18n.createI18n({
  locale: savedLocale || defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});

const app = createApp(App);

app.use(VMask);
app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount("#app");

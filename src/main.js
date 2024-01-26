import { createApp } from "vue";
import { createPinia } from "pinia";
import VMask from "@ssibrahimbas/v-mask";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.css";
import "./style.css";

const app = createApp(App);

app.use(VMask);
app.use(createPinia());
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";

import "./style/main.scss";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia).use(VueCookies).use(plugin, defaultConfig).mount("#app");

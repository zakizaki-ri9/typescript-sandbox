import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import routes from "voie-pages";
import { createRouter } from "vue-router";

const router = createApp(App).mount("#app");

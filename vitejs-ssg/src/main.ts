import { ViteSSG } from "vite-ssg";

import App from "./App.vue";
import "virtual:windi.css";
import routes from "virtual:generated-pages";

export const createApp = ViteSSG(App, { routes });

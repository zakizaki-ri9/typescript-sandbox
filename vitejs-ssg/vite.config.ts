import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    WindiCSS(),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
      },
    }),
    Pages({
      pagesDir: "src/pages",
      extensions: ["vue", "md"],
    }),
  ],
});

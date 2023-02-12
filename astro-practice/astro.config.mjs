import { defineConfig } from "astro/config"
import UnoCSS from "@unocss/astro"
import {config} from "../nuxt3-unocss-storybook/unocss.config"

// https://astro.build/config
import vue from "@astrojs/vue"

console.log({
  config,
})

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), UnoCSS(config)],
})

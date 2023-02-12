import {
  defineConfig,
  presetIcons,
  transformerDirectives,
} from 'unocss'
import type { Rule, UserConfig } from 'unocss'
import mdi from '@iconify-json/mdi/icons.json'

const SPACINGS = [...Array(20)].map((_, i) => (i*4)+4);

/**
 * 4px ごとの SPACING
 */
const SPACING_RULES: Rule[] = SPACINGS.flatMap(spacing => {
  return [
    [`m-${spacing}`, { margin: `${spacing}px`}],
    [`ml-${spacing}`, { 'margin-left': `${spacing}px`}],
    [`mr-${spacing}`, { 'margin-right': `${spacing}px`}],
    [`mt-${spacing}`, { 'margin-top': `${spacing}px`}],
    [`mb-${spacing}`, { 'margin-bottom': `${spacing}px`}],
    [`m-${spacing}`, { padding: `${spacing}px`}],
    [`pl-${spacing}`, { 'padding-left': `${spacing}px`}],
    [`pr-${spacing}`, { 'padding-right': `${spacing}px`}],
    [`pt-${spacing}`, { 'padding-top': `${spacing}px`}],
    [`pb-${spacing}`, { 'padding-bottom': `${spacing}px`}],
  ]
})

export const config = {
  presets: [
    presetIcons({
      collections: {
        mdi: () => mdi,
      },
    }),
  ],
  rules: [...SPACING_RULES],
  transformers: [transformerDirectives()],
} as UserConfig;

export default defineConfig({ ...config });

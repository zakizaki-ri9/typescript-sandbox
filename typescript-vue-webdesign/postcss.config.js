const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  // テンプレートファイルへのパス。今回は'./src/**/*.vue'
  content: ['./src/**/*.vue'],
  // https://medium.com/@kyis/vue-tailwind-purgecss-the-right-way-c70d04461475
  defaultExtractor: content => {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    )
    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    )
  },
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
})

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    // 開発中はビルド時間がかかってしまうので、productionの時のみ実行
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}

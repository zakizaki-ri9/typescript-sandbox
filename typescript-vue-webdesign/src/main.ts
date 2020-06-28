import Vue from 'vue'
import App from './App.vue'

// ルーティング
import { router } from '@/router'

// スタイル読み込み
import '@/assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

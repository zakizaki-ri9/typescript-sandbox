import Vue from 'vue'
import App from './App.vue'

// CompositionAPIの有効化
import CompositionAPI from '@vue/composition-api'
Vue.use(CompositionAPI)

// ルーティング
import { router } from '@/router'

// スタイル読み込み
import '@/assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

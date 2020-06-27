import Vue from 'vue'
import App from './App.vue'

// スタイル読み込み
import '@/assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

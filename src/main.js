import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { configure } from 'vee-validate'
import Swal from 'sweetalert2'

// vee-validate 的全域驗證設定
configure({
  validateOnInput: true, // 輸入時即時驗證
  validateOnBlur: true, // 失去焦點時驗證
})

const app = createApp(App)

// 將 Swal 掛載到全域 (方便在任何元件中使用)
app.config.globalProperties.$swal = Swal

app.use(createPinia())
app.use(router)

app.mount('#app')

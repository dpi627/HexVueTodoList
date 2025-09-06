import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { configure } from 'vee-validate'
import Swal from 'sweetalert2'

configure({
  validateOnInput: true, // 輸入時即時驗證
  validateOnBlur: true, // 失去焦點時驗證
})

const app = createApp(App)

app.config.globalProperties.$swal = Swal

app.use(createPinia())
app.use(router)

app.mount('#app')

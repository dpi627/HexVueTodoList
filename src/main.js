import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { configure } from 'vee-validate'
import Swal from 'sweetalert2'

// 引入圖片預載入函數
import { preloadAllProjectImages, preloadCriticalImages } from './utils/imagePreloader'

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

// 應用掛載後開始預載入圖片 (非阻塞式)
// 優先載入關鍵圖片，然後在背景載入其他圖片
preloadCriticalImages().then((result) => {
  if (result.success) {
    // 延遲載入其他圖片，避免影響初始載入速度
    setTimeout(() => {
      preloadAllProjectImages({
        showProgress: false,
        logResults: false,
      })
    }, 1000) // 延遲1秒開始載入非關鍵圖片
  }
})

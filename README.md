![](https://img.shields.io/badge/Node-js-5FA04E?logo=nodedotjs)
![](https://img.shields.io/badge/npm-CB3837?logo=npm)
![](https://img.shields.io/badge/nvm-555?logo=nvm)
![](https://img.shields.io/badge/Vite-ddd?logo=vite)
![](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs)
![](https://img.shields.io/badge/HTML-5-E34F26?logo=html5)
![](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![](https://img.shields.io/badge/CSS%203-663399?logo=css)
![](https://img.shields.io/badge/Bootstrap%205-ddd?logo=bootstrap)
![](https://img.shields.io/badge/Axios-5A29E4?logo=axios)
![](https://img.shields.io/badge/OpenAPI-2-6BA539?logo=openapiinitiative)
![](https://img.shields.io/badge/JWT-F0085E?logo=jsonwebtokens)
![](https://img.shields.io/badge/GitHub-181717?logo=github)
![](https://img.shields.io/badge/Git-555?logo=git)
![](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint)
![](https://img.shields.io/badge/Prettier-555?logo=prettier)
![](https://img.shields.io/badge/GithubCopilot-000?logo=githubcopilot)

# 📝HexVueTodoList

- 六角學院 2025 Vue 新手營最終任務
- 包含基本與進階兩種等級，合併一起製作
- [Live Demo](https://dpi627.github.io/HexVueTodoList/) on GitHub Pages

![](./assets/screen-shot.png)

# 📚 可用資源

- [Figma](https://www.figma.com/design/MFSk8P5jmmC2ns9V9YeCzM/TodoList?node-id=0-1&p=f)，提供靜態設計樣稿
- [CodePen](https://codepen.io/snijqlte-the-bold/pen/PwPxdde)，拆解好的頁面與 CSS 樣式
- [API](https://todolist-api.hexschool.io/doc/)，六角學院開放 RESTful API，串接使用
- [Notion](https://chalk-freedom-ec6.notion.site/2516ab47eb4880cab9f7d0d2e92c8607?pvs=74)，助教直播筆記

> [!NOTE]
> 另外助教有解題直播，建議觀看學習

# 🎯 任務必作項目

合併證書任務與串接 API 任務項目

- 需使用 Vue 框架並整合任務提供 API
- 需使用 Vue Router
- 新增待辦功能
- 移除待辦功能
- 待辦為無資料時，需顯示文字「目前尚無待辦事項」
- 切換待辦狀態 (打勾表示已完成、未勾表示待完成)
- 狀態頁籤切換功能 (全部、待完成、已完成)
- 確認待完成項目總數 (5 個待完成項目)
- 登入、註冊 API 功能
- 帳號重複註冊時， API 回傳錯誤，需醒目提醒用戶
- 結果統一部署到 GitHub Pages

## ✨額外完成項目

- 導入 `SweetAlert2` 顯示通知 (包含 Toast)
- 導入 `VeeValidate` `yup` 進行資料驗證
- 導入 `Pinia` 管理狀態 (待辦事項與使用者)
- 重新設計角色與相關圖示 (使用 `Nano Banana` 與 `Photopea`)
- 撰寫技術文件 `README.md`，並使用 AI 生成圖表
- 設計 404 頁面，並提供轉導回首頁功能
- 讀取元件與圖片預載，提供更好的操作體驗 (非必要項目，使用 AI 生成)
- 優化 CSS，支援高解析度，並調整待辦項目檢視設計，項目過多時出現卷軸

# 🏗️ 核心檔案架構

```txt
src/
├── App.vue       // 應用程式的根元件
├── main.js       // 應用入口，進行初始化與配置
├── assets/
│   └── main.css  // 全域 CSS (替換為模板 CSS)
├── components/
│   ├── LoadingOverlay.vue  // 顯示讀取狀態
│   ├── TodoForm.vue        // 待辦事項表單
│   ├── TodoItem.vue        // 單個待辦事項
│   └── TodoList.vue        // 待辦事項列表
├── router/
│   └── index.js  // 路由配置
├── stores/
│   ├── todo.js   // 待辦事項狀態管理
│   └── user.js   // 🤖 用戶狀態管理
├── utils/
│   ├── api.js    // 實作與後端 API 互動方法
│   ├── emoImageHelper.js // 🤖 處理圖片相關邏輯
│   ├── imagePreloader.js // 🤖 圖片預載提升體驗
│   └── sweetAlert.js     // 🤖 實作 SweetAlert 方法
└── views/
    ├── NotFoundView.vue  // 🤖 404 頁面
    ├── SignInView.vue    // 登入頁面
    ├── SignUpView.vue    // 註冊頁面
    └── TodoListView.vue  // 待辦事項列表
```

> [!WARNING]
> 標註 🤖 項目因與作業任務無直接關係，均使用 AI 輔助開發 + 人工修改

# 🚀 開發流程

```mermaid
flowchart TD
    A[建立專案，清除預設資料]
    A --> B[拆解元件與 View]
    A --> C[匯入 UI 與 CSS 樣式]
    B --> D
    C --> D[配置路由與測試]
    D --> E["撰寫待辦事項管理 (無 API)"]
    E --> F[建立 🍍Pinia 狀態管理]
    F --> G[撰寫 API Util]
    G --> H[撰寫帳號註冊與登入]
    N --> H
    H --> I["重構待辦事項管理 (串 API)"]
    I --> J[重新設計角色圖檔]
    I --> K[其餘非必要開發項目]
    J --> L[部署網站]
    K --> L
    L --> M[撰寫文件]
    F --> N[建立環境變數 .env]
```

# 📊 C4 Diagram

## 🌐 Context

```mermaid
C4Context
    Person(user, "使用者", "需要管理待辦事項的用戶")

    System(todolistApp, "HexVueTodoList", "基於 Vue.js 的待辦事項管理系統")

    System_Ext(hexAPI, "六角學院 API", "提供用戶認證與待辦事項資料服務")

    System_Ext(githubPages, "GitHub Pages", "靜態網站託管服務")

    Rel(user, todolistApp, "使用", "HTTPS")
    Rel(todolistApp, hexAPI, "API 請求", "HTTPS/REST")
    Rel(githubPages, user, "託管與提供", "HTTPS")

    UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")
```

## 📦 Container

```mermaid
C4Container

    Person(user, "使用者")

    Container_Boundary(spa, "單頁應用程式") {
        Container(vueApp, "Vue.js 應用", "JavaScript, Vue 3", "使用者介面與客戶端邏輯")
        Container(router, "Vue Router", "JavaScript", "路由管理與頁面導航")
        Container(pinia, "Pinia Store", "JavaScript", "全域狀態管理")
    }

    Container_Boundary(external, "外部服務") {
        Container(hexAPI, "六角學院 API", "REST API", "用戶認證與待辦事項資料")
        Container(localStorage, "瀏覽器儲存", "Local Storage", "本地資料持久化")
        Container(sweetAlert, "SweetAlert2", "JavaScript Library", "使用者互動與通知")
    }

    Rel(user, vueApp, "互動", "瀏覽器")
    Rel(vueApp, router, "路由導航")
    Rel(vueApp, pinia, "狀態管理")
    Rel(vueApp, hexAPI, "API 呼叫", "Axios/HTTPS")
    Rel(pinia, localStorage, "資料持久化")
    Rel(vueApp, sweetAlert, "顯示通知")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```

# 🎨 角色重新設計

- 使用 Google AI Studio 製作
- Nano Banana 具備極高角色遵從性

## 🔄 保留原本設計元素

<img src="./public/img/signup.jpeg" width="772">

## 😊 各種表情圖示

|              確認/同意               |             錯誤/失敗              |              成功/完成               |
| :----------------------------------: | :--------------------------------: | :----------------------------------: |
| ![](./public/img/emo-confirm-1.jpeg) | ![](./public/img/emo-error-1.jpeg) | ![](./public/img/emo-success-1.jpeg) |
| ![](./public/img/emo-confirm-2.jpeg) | ![](./public/img/emo-error-2.jpeg) | ![](./public/img/emo-success-2.jpeg) |
| ![](./public/img/emo-confirm-3.jpeg) | ![](./public/img/emo-error-3.jpeg) | ![](./public/img/emo-success-3.jpeg) |

## 🚫 404 Page

![](./assets/page-404.png)

# 💡 補充技術知識

## 🛡️ 路由守衛

Vue Router 提供的導航守衛功能，可以在路由跳轉前後執行特定邏輯，常用於身份驗證、權限檢查等場景。

### 🔐 全域前置守衛

```javascript
// router/index.js
import { useUserStore } from '@/stores/user'

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // 需要登入的頁面
  if (to.meta.requiresAuth && !userStore.isLogin) {
    next('/signin')
  } else {
    next()
  }
})
```

### ⚙️ 路由設定

```javascript
const routes = [
  {
    path: '/todolist',
    name: 'TodoList',
    component: TodoListView,
    meta: { requiresAuth: true }, // 需要登入
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInView,
  },
]
```

## 🌐 Axios 攔截器

Axios 攔截器可以在請求發送前或響應回來後統一處理邏輯，例如添加認證 token、統一錯誤處理等。

### 📤 Request 攔截器

```javascript
// utils/api.js
import axios from 'axios'

// 請求攔截器：自動添加 token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => Promise.reject(error),
)
```

### 📥 Response 攔截器

```javascript
// 響應攔截器：統一錯誤處理
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // token 過期，自動登出
      localStorage.removeItem('token')
      router.push('/signin')
    }
    return Promise.reject(error)
  },
)
```

## ✅ VeeValidate + yup

VeeValidate 是 Vue 的表單驗證庫，結合 yup 可以定義強大的驗證規則，提供即時表單驗證功能。

### 🚀 基本使用

```javascript
// 在 Vue 元件中
import { useForm } from 'vee-validate'
import * as yup from 'yup'

// 定義驗證規則
const schema = yup.object({
  email: yup.string().email('請輸入有效的 Email').required('Email 為必填'),
  password: yup.string().min(6, '密碼至少 6 個字元').required('密碼為必填'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '密碼確認不一致')
    .required('請確認密碼'),
})

// 使用表單驗證
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
})
```

### 📄 模板中使用

```html
<template>
  <form @submit="onSubmit">
    <Field name="email" type="email" placeholder="請輸入 Email" />
    <ErrorMessage name="email" class="text-danger" />

    <Field name="password" type="password" placeholder="請輸入密碼" />
    <ErrorMessage name="password" class="text-danger" />

    <button type="submit">送出</button>
  </form>
</template>
```

## 🍍 Pinia

Pinia 是 Vue 3 的官方狀態管理庫，用來管理應用程式的全域狀態，比 Vuex 更輕量且更直觀。

### 🏪 定義 Store 範例

```javascript
// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    nickname: '',
    isLogin: false,
  }),

  actions: {
    save(token, nickname) {
      this.token = token
      this.nickname = nickname
      this.isLogin = true
      // 持久化到 localStorage
      localStorage.setItem('token', token)
      localStorage.setItem('nickname', nickname)
    },

    logout() {
      this.token = ''
      this.nickname = ''
      this.isLogin = false
      localStorage.removeItem('token')
      localStorage.removeItem('nickname')
    },
  },
})
```

### 🔗 在元件中使用 Store

```javascript
// 在 Vue 元件中
import { useUserStore } from '@/stores/user'

export default {
  setup() {
    const userStore = useUserStore()

    // 使用狀態
    console.log(userStore.isLogin)

    // 呼叫方法
    userStore.save('token123', 'John')

    return { userStore }
  },
}
```

## 📤 具名匯出與預設匯出

JavaScript ES6 模組系統提供兩種匯出方式：具名匯出 (Named Export) 和預設匯出 (Default Export)。

### 具名匯出範例

```javascript
// utils/api.js - 匯出多個函式
export const signIn = (email, password) => {
  /* ... */
}
export const signUp = (email, password, nickname) => {
  /* ... */
}
export const getTodos = () => {
  /* ... */
}

// 引入時需要使用相同名稱
import { signIn, signUp, getTodos } from '@/utils/api'
```

### 📋 預設匯出範例

```javascript
// utils/sweetAlert.js - 匯出一個主要物件
const sweetAlert = {
  showSuccessAlert: (title, text) => {
    /* ... */
  },
  showErrorAlert: (title, text) => {
    /* ... */
  },
  showConfirmAlert: (title, text) => {
    /* ... */
  },
}

export default sweetAlert

// 引入時可以自定義名稱
import sweetAlert from '@/utils/sweetAlert'
import swal from '@/utils/sweetAlert' // 也可以改名
```

### 🔀 混合使用範例

```javascript
// 同時使用具名匯出和預設匯出
export const API_BASE_URL = 'https://todolist-api.hexschool.io'
export { signIn, signUp } // 具名匯出

const api = axios.create({ baseURL: API_BASE_URL })
export default api // 預設匯出
```

## 🎯 解構賦值

ES6 解構賦值語法可以從陣列或物件中快速提取值，讓程式碼更簡潔易讀。

### 📦 物件解構範例

```javascript
// 從 API 回應中解構資料
const response = {
  data: {
    token: 'abc123',
    nickname: 'John',
    message: '登入成功',
  },
}

// 傳統寫法
const token = response.data.token
const nickname = response.data.nickname

// 解構寫法
const { token, nickname } = response.data

// 巢狀解構
const {
  data: { token, nickname },
} = response
```

### 🎯 陣列解構範例

```javascript
// 從陣列中解構值
const todos = ['買牛奶', '寫程式', '運動']

// 傳統寫法
const first = todos[0]
const second = todos[1]

// 解構寫法
const [first, second, third] = todos
const [firstTodo, ...restTodos] = todos // 使用展開運算子
```

### ⚡ 函式參數解構範例

```javascript
// 在函式參數中直接解構
const createUser = ({ email, password, nickname }) => {
  // 直接使用 email, password, nickname
  return api.post('/users/sign_up', { email, password, nickname })
}

// 呼叫時傳入物件
createUser({
  email: 'test@example.com',
  password: '123456',
  nickname: 'John',
})
```

## 🔧 `/utils` 之 `*.js` 撰寫方法

Utils 模組是將共用功能封裝成獨立模組的最佳實踐，提高程式碼的可重用性和維護性。

### 🎯 單一職責原則範例

```javascript
// utils/api.js - 專門處理 API 請求
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL
const api = axios.create({ baseURL: API_BASE_URL })

// 統一的錯誤處理
const handleApiError = (error) => {
  const message = error.response?.data?.message || '發生未知錯誤'
  throw new Error(message)
}

// 匯出具體的 API 函式
export const signIn = async (email, password) => {
  try {
    const response = await api.post('/users/sign_in', { email, password })
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

export const getTodos = async () => {
  try {
    const response = await api.get('/todos')
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}
```

### 🔧 工具函式封裝範例

```javascript
// utils/imagePreloader.js - 圖片預載工具
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(url)
        img.onerror = () => reject(new Error(`Failed to load ${url}`))
        img.src = url
      })
    }),
  )
}

// 使用範例
const imageUrls = ['/img/success-1.jpeg', '/img/error-1.jpeg']
preloadImages(imageUrls)
  .then(() => console.log('所有圖片已預載完成'))
  .catch((error) => console.error('圖片預載失敗:', error))
```

### ⚙️ 配置物件模式範例

```javascript
// utils/sweetAlert.js - SweetAlert 配置封裝
import Swal from 'sweetalert2'

const defaultConfig = {
  confirmButtonColor: '#198754',
  cancelButtonColor: '#6c757d',
  timer: 3000,
  showConfirmButton: false,
}

export const showSuccessToast = (title, text = '') => {
  return Swal.fire({
    ...defaultConfig,
    icon: 'success',
    title,
    text,
    toast: true,
    position: 'top-end',
  })
}

export const showConfirmAlert = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  })
}
```

## 🌍 環境變數 `.env`

環境變數用來管理不同環境下的配置設定，避免將敏感資訊或環境相關設定寫死在程式碼中。

### ⚡ Vite 環境變數設定

```bash
# .env.local (本地開發環境)
VITE_API_URL=https://todolist-api.hexschool.io
VITE_APP_TITLE=HexVueTodoList (開發版)
VITE_DEBUG_MODE=true

# .env.production (正式環境)
VITE_API_URL=https://todolist-api.hexschool.io
VITE_APP_TITLE=HexVueTodoList
VITE_DEBUG_MODE=false
```

### 💻 在程式碼中使用環境變數

```javascript
// vite.config.js - 建構配置
export default defineConfig({
  // 使用環境變數設定基礎路徑
  base: import.meta.env.VITE_BASE_URL || '/',

  // 開發伺服器配置
  server: {
    port: import.meta.env.VITE_DEV_PORT || 5173,
  },
})

// utils/api.js - API 基礎 URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// main.js - 應用程式標題
document.title = import.meta.env.VITE_APP_TITLE || 'Vue App'

// 除錯模式判斷
if (import.meta.env.VITE_DEBUG_MODE === 'true') {
  console.log('Debug mode enabled')
}
```

### 🌟 環境變數最佳實踐

```javascript
// utils/config.js - 集中管理環境變數
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  appTitle: import.meta.env.VITE_APP_TITLE,
  isDebugMode: import.meta.env.VITE_DEBUG_MODE === 'true',

  // 提供預設值
  timeout: Number(import.meta.env.VITE_TIMEOUT) || 5000,

  // 驗證必要環境變數
  validate() {
    if (!this.apiUrl) {
      throw new Error('VITE_API_URL is required')
    }
  },
}

// 在應用啟動時驗證
config.validate()
```

# 🔄 資料流程 (循序圖)

## 👤 使用者註冊

```mermaid
sequenceDiagram
    participant U as User
    participant SUV as SignUpView
    participant VV as VeeValidate
    participant API as api.js
    participant SA as sweetAlert
    participant R as Router
    participant BE as Backend API

    Note over U,BE: 用戶註冊流程
    U->>SUV: 開啟註冊頁面
    U->>SUV: 填寫註冊表單 (email, nickname, password, passwordConfirm)

    SUV->>VV: 驗證表單資料
    Note over VV: 驗證 email 格式、暱稱長度<br/>密碼強度、確認密碼一致性

    alt 表單驗證失敗
        VV-->>SUV: 返回驗證錯誤
        SUV-->>U: 顯示欄位錯誤訊息
    else 表單驗證成功
        VV-->>SUV: 驗證通過
        U->>SUV: 點擊「註冊帳號」按鈕
        SUV->>API: signUp(email, password, nickname)

        API->>BE: POST /users/sign_up
        Note over BE: 後端處理註冊請求<br/>檢查 email 是否重複

        alt 註冊失敗 (如 email 重複)
            BE-->>API: 400/409 錯誤回應
            Note over BE: 回傳錯誤訊息
            API-->>SUV: 拋出錯誤 (error.response.data.message)
            SUV->>SA: showErrorAlert("註冊失敗", 錯誤訊息)
            SA-->>U: 顯示錯誤彈窗
            Note over U: 用戶看到醒目的錯誤提醒
        else 註冊成功
            BE-->>API: 200 註冊成功回應
            API-->>SUV: 返回成功結果
            SUV->>SA: showSuccessAlert("註冊成功！", "前往登入頁面...")
            SA-->>U: 顯示成功彈窗 (3秒後自動關閉)
            SUV->>R: router.push('/signin')
            R-->>U: 自動導航至登入頁面
        end
    end
```

## 🔑 使用者登入

```mermaid
sequenceDiagram
    participant U as User
    participant SIV as SignInView
    participant VV as VeeValidate
    participant API as api.js
    participant US as userStore
    participant SA as sweetAlert
    participant R as Router
    participant LS as localStorage
    participant BE as Backend API

    Note over U,BE: 用戶登入流程
    U->>SIV: 開啟登入頁面
    U->>SIV: 填寫登入表單 (email, password)

    SIV->>VV: 驗證表單資料
    Note over VV: 驗證 email 格式<br/>密碼不可為空

    alt 表單驗證失敗
        VV-->>SIV: 返回驗證錯誤
        SIV-->>U: 顯示欄位錯誤訊息
    else 表單驗證成功
        VV-->>SIV: 驗證通過
        U->>SIV: 點擊「登入」或按 Enter
        SIV->>API: signIn(email, password)

        API->>BE: POST /users/sign_in
        Note over BE: 後端驗證帳號密碼<br/>生成 JWT token

        alt 登入失敗 (帳號密碼錯誤)
            BE-->>API: 401 錯誤回應
            Note over BE: 回傳認證失敗訊息
            API-->>SIV: 拋出錯誤 (error.response.data.message)
            SIV->>SA: showErrorAlert("登入失敗", 錯誤訊息)
            SA-->>U: 顯示錯誤彈窗
        else 登入成功
            BE-->>API: 200 成功回應 + { token, nickname }
            API-->>SIV: 返回用戶資料
            SIV->>US: userStore.save(token, nickname)

            Note over US: Pinia store 處理用戶狀態
            US->>LS: localStorage.setItem('token', token)
            US->>LS: localStorage.setItem('nickname', nickname)
            US->>US: isLogin = true

            SIV->>SA: showSuccessAlert(`歡迎回來，${nickname}`, "正在前往待辦事項...")
            SA-->>U: 顯示歡迎彈窗 (3秒後自動關閉)
            SIV->>R: router.push('/todolist')
            R-->>U: 自動導航至待辦事項頁面
        end
    end
```

## 📝 待辦事項管理

### ➕ 新增事項

```mermaid
sequenceDiagram
    participant U as User
    participant TLV as TodoListView
    participant TS as todoStore
    participant API as api.js
    participant LO as LoadingOverlay
    participant TL as TodoList
    participant TI as TodoItem
    participant BE as Backend API

    Note over U,BE: 讀取待辦事項流程
    U->>TLV: 進入待辦事項頁面
    TLV->>TS: onMounted() -> loadTodos()

    TS->>LO: loading = true
    TS->>TS: error = ''
    TS->>API: getTodos()
    API->>BE: GET /todos (帶 Authorization header)

    alt 讀取失敗 (如 token 過期)
        BE-->>API: 401/500 錯誤回應
        API-->>TS: 拋出錯誤
        TS->>TS: error = 錯誤訊息
        TS->>LO: loading = false
        TLV-->>U: 顯示錯誤訊息
        Note over U: 如果是 401，會自動登出並導向登入頁
    else 讀取成功
        BE-->>API: 200 + 待辦事項陣列
        API-->>TS: response.data.data
        TS->>TS: todos = 待辦事項陣列
        TS->>LO: loading = false

        alt 無待辦事項
            TLV-->>U: 顯示空狀態圖片和「無待辦事項」文字
        else 有待辦事項
            TLV->>TL: 渲染 TodoList 元件
            TL->>TL: 根據 filter 計算 filteredTodos
            TL->>TI: v-for 渲染每個 TodoItem
            TI-->>U: 顯示待辦事項列表
        end
    end

    Note over U,TL: 篩選功能 (本地操作，無需 API)
    U->>TL: 點擊標籤 (全部/待完成/已完成)
    TL->>TS: setFilter(filterType)
    TS->>TS: filter = filterType
    TS->>TS: 重新計算 filteredTodos
    TL-->>U: 即時更新顯示結果
```

### 📖 讀取事項

```mermaid
sequenceDiagram
    participant U as User
    participant TF as TodoForm
    participant TS as todoStore
    participant API as api.js
    participant SA as sweetAlert
    participant LO as LoadingOverlay
    participant TL as TodoList
    participant BE as Backend API

    Note over U,BE: 新增待辦事項流程
    U->>TF: 在輸入框輸入待辦內容

    alt 輸入為空或僅空白
        U->>TF: 按 Enter 或點擊新增按鈕
        TF->>TF: 驗證 newTodo.trim()
        TF-->>U: 不執行任何操作 (前端驗證)
    else 輸入有效內容
        U->>TF: 按 Enter 或點擊新增按鈕
        TF->>TS: add(newTodo.value)

        TS->>LO: loading = true
        TS->>TS: error = ''
        TS->>API: addTodo(content.trim())
        API->>BE: POST /todos { content }

        alt 新增失敗
            BE-->>API: 400/500 錯誤回應
            API-->>TS: 拋出錯誤
            TS->>TS: error = 錯誤訊息
            TS->>LO: loading = false
            TF->>SA: showErrorAlert("操作失敗", 錯誤訊息)
            SA-->>U: 顯示錯誤彈窗
        else 新增成功
            BE-->>API: 200 + 新待辦事項物件
            API-->>TS: response.data.newTodo
            TS->>TS: todos.push(新待辦事項)
            TS->>LO: loading = false

            TF->>SA: showSuccessToast(`新增 "${newTodo.value}"`)
            SA-->>U: 顯示成功 Toast (右上角)

            TF->>TF: newTodo.value = '' (清空輸入框)
            TF->>TF: focus() 聚焦輸入框
            TL-->>U: 自動更新列表顯示新項目
        end
    end
```

### ✅ 批次完成

```mermaid
sequenceDiagram
    participant U as User
    participant TL as TodoList
    participant TS as todoStore
    participant API as api.js
    participant SA as sweetAlert
    participant LO as LoadingOverlay
    participant BE as Backend API

    Note over U,BE: 批次完成所有待辦事項
    U->>TL: 點擊「完成所有」按鈕
    Note over TL: 檢查是否有待完成事項<br/>(pendingCount > 0)

    TL->>SA: showConfirmAlert("確定完成所有待辦事項？", "將所有未完成事項都標記為完成")
    SA-->>U: 顯示確認對話框

    alt 用戶取消操作
        U->>SA: 點擊「取消」
        SA-->>TL: 返回 false
        Note over TL: 不執行任何操作，保持原狀
    else 用戶確認操作
        U->>SA: 點擊「確定」
        SA-->>TL: 返回 true
        TL->>TS: completeAll()

        TS->>LO: loading = true
        TS->>TS: error = ''
        TS->>TS: 篩選出 pendingTodos = todos.filter(todo => !todo.status)
        Note over TS: 只處理未完成的待辦事項

        loop 針對每個待完成事項
            TS->>API: toggleTodo(todo.id)
            API->>BE: PATCH /todos/{id}/toggle

            alt API 呼叫失敗
                BE-->>API: 錯誤回應
                API-->>TS: 拋出錯誤
                Note over TS: 部分項目可能已更新<br/>但整體操作失敗
            else API 呼叫成功
                BE-->>API: 200 + 更新後狀態
                API-->>TS: response.data.status
                TS->>TS: todo.status = true
                Note over TS: 單一項目狀態更新
            end
        end

        TS->>LO: loading = false

        alt 批次操作成功
            TL->>SA: showSuccessToast("所有代辦事項均已完成")
            SA-->>U: 顯示成功 Toast (右上角)
            TL-->>U: 更新列表顯示 (所有項目標示為已完成)
            Note over TL: pendingCount 變為 0<br/>completedCount 增加
        else 批次操作部分失敗
            Note over TS: error 包含錯誤訊息
            TL-->>U: 顯示部分更新結果和錯誤提示
        end
    end
```

### 🗑️ 批次刪除

```mermaid
sequenceDiagram
    participant U as User
    participant TL as TodoList
    participant TS as todoStore
    participant API as api.js
    participant SA as sweetAlert
    participant LO as LoadingOverlay
    participant BE as Backend API

    Note over U,BE: 批次刪除已完成事項
    U->>TL: 點擊「刪除已完成」按鈕
    Note over TL: 檢查是否有已完成事項<br/>(completedCount > 0)

    TL->>SA: showConfirmAlert("確定刪除所有已完成事項？", "將所有已完成事項永久刪除")
    SA-->>U: 顯示確認對話框 (含警告圖示)

    alt 用戶取消操作
        U->>SA: 點擊「取消」
        SA-->>TL: 返回 false
        Note over TL: 不執行任何操作，保持原狀
    else 用戶確認操作
        U->>SA: 點擊「確定」
        SA-->>TL: 返回 true
        TL->>TS: clearCompleted()

        TS->>LO: loading = true
        TS->>TS: error = ''
        TS->>TS: 篩選出 completedTodos = todos.filter(todo => todo.status)
        Note over TS: 只處理已完成的待辦事項

        loop 針對每個已完成事項
            TS->>API: deleteTodo(todo.id)
            API->>BE: DELETE /todos/{id}

            alt API 呼叫失敗
                BE-->>API: 錯誤回應
                API-->>TS: 拋出錯誤
                Note over TS: 部分項目可能已刪除<br/>但整體操作失敗
            else API 呼叫成功
                BE-->>API: 200 刪除成功回應
                API-->>TS: 刪除成功確認
                Note over TS: 單一項目刪除確認
            end
        end

        TS->>TS: todos = todos.filter(todo => !todo.status)
        Note over TS: 從本地陣列移除所有已完成項目
        TS->>LO: loading = false

        alt 批次刪除成功
            TL->>SA: showSuccessToast("所有完成事項均已刪除")
            SA-->>U: 顯示成功 Toast (右上角)
            TL-->>U: 更新列表顯示 (已完成項目從列表消失)
            Note over TL: completedCount 變為 0<br/>totalCount 減少
        else 批次刪除部分失敗
            Note over TS: error 包含錯誤訊息
            TS->>TS: 重新載入 todos 確保資料一致性
            TL-->>U: 顯示部分刪除結果和錯誤提示
        end
    end
```

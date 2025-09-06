import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

// 攔截器
// ===============================================================

// 請求攔截器：自動添加 Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 響應攔截器：處理 token 過期等情況
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token 過期或無效，清除本地存儲並重定向到登入頁
      localStorage.removeItem('token')
      localStorage.removeItem('nickname')
      window.location.href = '/signin'
    }
    return Promise.reject(error)
  },
)

// User
// ===============================================================
export const signUp = async (email, password, nickname) => {
  return api.post('/users/sign_up', {
    email: email,
    password: password,
    nickname: nickname,
  })
}

export const signIn = async (email, password) => {
  return api.post('/users/sign_in', {
    email: email,
    password: password,
  })
}

// Todo
// ===============================================================
export const getTodos = async () => {
  return api.get('/todos')
}

export const addTodo = async (content) => {
  return api.post('/todos', { content })
}

export const toggleTodo = async (id) => {
  return api.patch(`/todos/${id}/toggle`)
}

export const updateTodo = async (id, data) => {
  return api.put(`/todos/${id}`, data)
}

export const deleteTodo = async (id) => {
  return api.delete(`/todos/${id}`)
}

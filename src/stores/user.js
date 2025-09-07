import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const nickname = ref('')
  const isLogin = ref(false)
  const loading = ref(false) // 載入狀態

  const save = (tokenValue, nicknameValue) => {
    token.value = tokenValue
    nickname.value = nicknameValue
    isLogin.value = true

    // 儲存資料
    localStorage.setItem('token', token.value)
    localStorage.setItem('nickname', nickname.value)
  }

  const clear = () => {
    token.value = ''
    nickname.value = ''
    isLogin.value = false

    // 清除資料
    localStorage.removeItem('token')
    localStorage.removeItem('nickname')
  }

  // 初始化（從 localStorage 取資料）
  const init = () => {
    const savedToken = localStorage.getItem('token')
    const savedNickname = localStorage.getItem('nickname')

    if (savedToken && savedNickname) {
      token.value = savedToken
      nickname.value = savedNickname
      isLogin.value = true
    }
  }

  // 設定載入狀態的方法
  const setLoading = (status) => {
    loading.value = status
  }

  return {
    token,
    nickname,
    isLogin,
    loading,
    save,
    clear,
    init,
    setLoading,
  }
})

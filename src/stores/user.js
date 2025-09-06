import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const nickname = ref('')
  const isLoggIn = ref(false)

  const save = (token, nickname) => {
    token.value = token
    nickname.value = nickname
    isLoggIn.value = true

    // 儲存資料
    localStorage.setItem('token', token)
    localStorage.setItem('nickname', nickname)
  }

  const clear = () => {
    token.value = ''
    nickname.value = ''
    isLoggIn.value = false

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
      isLoggIn.value = true
    }
  }

  return {
    token,
    nickname,
    isLoggedIn: isLoggIn,
    save,
    clear,
    init,
  }
})

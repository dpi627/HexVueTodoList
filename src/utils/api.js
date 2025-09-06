import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

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

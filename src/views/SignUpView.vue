<template>
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
      <div class="side">
        <a href="#"><img class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""></a>
        <img class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg">
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input class="formControls_input" v-model="email" type="text" id="email" name="email" placeholder="請輸入 email"
            required>
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="name">您的暱稱</label>
          <input class="formControls_input" v-model="nickname" type="text" name="name" id="name" placeholder="請輸入您的暱稱">
          <label class="formControls_label" for="pwd">密碼</label>
          <input class="formControls_input" v-model="password" type="password" name="pwd" id="pwd" placeholder="請輸入密碼"
            required>
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input class="formControls_input" v-model="passwordAgain" type="password" name="pwd" id="pwd2"
            placeholder="請再次輸入密碼" required>
          <input class="formControls_btnSubmit" @click="handleSignUp" type="button" value="註冊帳號" />
          <router-link to="SignIn" class="formControls_btnLink">登入</router-link>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signUp } from '@/utils/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('exm@gmail.com')
const password = ref('abc123')
const passwordAgain = ref('abc123')
const nickname = ref('dpi')


const handleSignUp = async () => {

  await signUp(
    email.value,
    password.value,
    nickname.value
  )
    .then((response) => {
      console.log('Sign up successful:', response)
      alert(`註冊成功: ${response.data.uid}`)
      router.push({ name: 'signin' })
      // Handle successful sign-up (e.g., redirect to login page)
    })
    .catch((error) => {
      console.error('Sign up error:', error)
      alert(`註冊失敗: ${error.response.data.message}`)
      // Handle sign-up error (e.g., show error message)
    })
}
</script>

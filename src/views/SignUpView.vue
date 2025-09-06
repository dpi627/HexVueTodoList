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
        <form class="formControls">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input class="formControls_input" v-model="emailValue" type="text" id="email" name="email"
            placeholder="請輸入 email" required>
          <span v-if="emailError" class="error">{{ emailError }}</span> <!-- 顯示錯誤 -->
          <label class="formControls_label" for="name">您的暱稱</label>
          <input class="formControls_input" v-model="nicknameValue" type="text" name="name" id="name"
            placeholder="請輸入您的暱稱">
          <span v-if="nicknameError" class="error">{{ nicknameError }}</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input class="formControls_input" v-model="passwordValue" type="password" name="pwd" id="pwd"
            placeholder="請輸入密碼" required>
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input class="formControls_input" v-model="passwordAgainValue" type="password" name="pwd" id="pwd2"
            placeholder="請再次輸入密碼" required>
          <span v-if="passwordAgainError" class="error">{{ passwordAgainError }}</span>
          <input class="formControls_btnSubmit" type="button" value="註冊帳號" @click="submitForm" />
          <router-link to="SignIn" class="formControls_btnLink">登入</router-link>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { object, string, ref as yupRef } from 'yup'  // 移除 'email' 和 'minLength'
import { signUp } from '@/utils/api'

const router = useRouter()

// 定義驗證規則（使用 Yup）
const schema = object({
  email: string()
    .email('請輸入有效的 email 格式')
    .required('此欄位不可留空'),
  nickname: string()
    .min(2, '暱稱至少需要 2 個字元')
    .required('此欄位不可留空'),  // 使用 min(2)
  password: string()
    .min(6, '密碼至少需要 6 個字元')
    .matches(/[a-zA-Z]/, '密碼必須包含英文')
    .matches(/\d/, '密碼必須包含數字')
    .required('此欄位不可留空'),
  passwordAgain: string()
    .oneOf([yupRef('password')], '兩次輸入的密碼不一致')
    .required('此欄位不可留空'),
})

// 使用 VeeValidate
const { handleSubmit } = useForm({ validationSchema: schema })

const { value: emailValue, errorMessage: emailError } = useField('email')
const { value: nicknameValue, errorMessage: nicknameError } = useField('nickname')
const { value: passwordValue, errorMessage: passwordError } = useField('password')
const { value: passwordAgainValue, errorMessage: passwordAgainError } = useField('passwordAgain')


// 提交處理
const submitForm = handleSubmit(async (values) => {
  try {
    const response = await signUp(values.email, values.password, values.nickname)
    console.log('Sign up successful:', response)
    alert(`註冊成功: ${response.data.uid}`)
    // 處理成功（例如，重定向到登入頁面）
    router.push('/login');
  } catch (error) {
    console.error('Sign up error:', error)
    alert(`註冊失敗: ${error.response?.data?.message || '未知錯誤'}`)
  }
})
</script>

<template>
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer ">
      <div class="side">
        <img class="logoImg" src="/img/logo.png" alt="">
        <img class="d-m-n" src="/img/signin.jpeg" alt="workImg">
      </div>
      <div>
        <form class="formControls">
          <h2 class="formControls_txt">最實用的線上待辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input v-model="email" @keypress.enter.prevent="submitForm" class="formControls_input" type="text" id="email"
            name="email" placeholder="請輸入 email" required>
          <span v-if="emailError">{{ emailError }}</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input v-model="password" @keypress.enter.prevent="submitForm" class="formControls_input" type="password"
            name="pwd" id="pwd" placeholder="請輸入密碼" required>
          <span v-if="passwordError">{{ passwordError }}</span>
          <input @click.prevent="submitForm" class="formControls_btnSubmit" type="button" value="登入">
          <router-link to="/signup" class="formControls_btnLink">註冊帳號</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { object, string } from 'yup'  // 移除 'email' 和 'minLength'
import { signIn } from '@/utils/api'
import { useUserStore } from '@/stores/user'
import { showSuccessAlert, showErrorAlert } from '@/utils/sweetAlert'

const router = useRouter()
const userStore = useUserStore()

// 定義驗證規則（使用 Yup）
const schema = object({
  email: string()
    .email('請輸入有效的 email 格式')
    .required('此欄位不可留空'),
  password: string()
    .required('此欄位不可留空'),
})

// 使用 VeeValidate - handleSubmit
const { handleSubmit } = useForm({ validationSchema: schema })
// 定義欄位與錯誤訊息
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

email.value = 'exm@gmail.com'
password.value = 'abc123'

// 提交處理方法封裝
const submitForm = handleSubmit(async (values) => {
  try {
    const response = await signIn(values.email, values.password)

    // 從響應中獲取用戶信息
    const { token, nickname } = response.data

    // 保存到 user store
    userStore.save(token, nickname)

    await showSuccessAlert(`歡迎回來，${nickname}`, '正在前往待辦事項，請稍後....', 3000)

    // 重定向到 todolist
    router.push('/todolist')
  } catch (error) {
    await showErrorAlert('登入失敗', error.response?.data?.message || '未知錯誤')
  }
})
</script>

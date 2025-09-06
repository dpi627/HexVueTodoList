<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1>
        <router-link to="/">ONLINE TODO LIST</router-link>
      </h1>
      <ul>
        <li class="todo_sm">
          <router-link to="/todolist">
            <span>{{ userStore.nickname }} 的待辦</span>
          </router-link>
        </li>
        <li><a href="#" @click.prevent="logout">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <!-- 載入狀態 -->
        <div v-if="todoStore.loading" class="alert alert-info">載入中...</div>
        <!-- 錯誤訊息 -->
        <div v-if="todoStore.error" class="alert alert-danger">{{ todoStore.error }}</div>

        <TodoForm />
        <TodoList v-if="todoStore.totalCount" />
        <div class="alert alert-warning text-secondary" v-else>無待辦事項</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import { useUserStore } from '@/stores/user'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { showConfirmAlert } from '@/utils/sweetAlert'

const router = useRouter()
const todoStore = useTodoStore()
const userStore = useUserStore()

onMounted(() => {
  todoStore.loadTodos()
})

// 登出
const logout = async () => {
  const confirmed = await showConfirmAlert('確定登出？')
  if (confirmed) {
    userStore.clear()
    router.push('/signin')
  }
}
</script>

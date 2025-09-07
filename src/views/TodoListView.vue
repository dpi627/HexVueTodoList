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
        <!-- 錯誤訊息 -->
        <div v-if="todoStore.error" class="alert alert-danger">{{ todoStore.error }}</div>

        <TodoForm />
        <TodoList v-if="todoStore.totalCount" />
        <div class="empty-todo-bg d-block mx-auto" v-else>
          <div class="empty-todo-label">無待辦事項</div>
        </div>
      </div>
    </div>

    <!-- 載入覆蓋層 -->
    <LoadingOverlay :show="todoStore.loading" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import { useUserStore } from '@/stores/user'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import LoadingOverlay from '@/components/LoadingOverlay.vue'
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

<style scoped>
.empty-todo-bg {
  position: relative;
  width: 480px;
  height: 320px;
  background: url('/img/empty-task.jpeg') center/cover no-repeat;
  margin: 0 auto;
}

.empty-todo-label {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 150px;
  height: 80px;
  background: #fff;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>

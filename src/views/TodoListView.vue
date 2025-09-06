<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm"><a href="#"><span>{{ userStore.nickname }} 的待辦</span></a></li>
        <li><a href="#" @click.prevent="logout">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <TodoForm />
        <TodoList v-if="todoStore.totalCount" />
        <div class="alert alert-warning text-secondary" v-else>無代辦事項</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import { useUserStore } from '@/stores/user'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

const router = useRouter()
const todoStore = useTodoStore()
const userStore = useUserStore()

// 登出
const logout = () => {
  userStore.clear()
  router.push('/signin')
}
</script>

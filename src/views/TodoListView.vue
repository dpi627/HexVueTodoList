<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm"><a href="#"><span>王小明的待辦</span></a></li>
        <li><a href="#loginPage">登出</a></li>
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
import { useTodoStore } from '@/stores/todo';
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

const todoStore = useTodoStore()
</script>

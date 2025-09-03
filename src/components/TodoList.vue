<template>
  <div class="todoList_list">
    <ul class="todoList_tab">
      <li><a href="#" :class="{ active: todoStore.filter === '' }" @click="todoStore.setFilter('')">全部</a></li>
      <li><a href="#" :class="{ active: todoStore.filter === 'pending' }"
          @click="todoStore.setFilter('pending')">待完成</a></li>
      <li><a href="#" :class="{ active: todoStore.filter === 'completed' }"
          @click="todoStore.setFilter('completed')">已完成</a></li>
    </ul>
    <div class="todoList_items">
      <ul class="todoList_item">
        <TodoItem v-for="todo in todoStore.filteredTodos" :key="todo.id" :todo="todo" />
      </ul>
      <div class="todoList_statistics">
        <p> {{ todoStore.completedCount }} 個已完成項目</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo';
import TodoItem from '@/components/TodoItem.vue';

const todoStore = useTodoStore()

</script>

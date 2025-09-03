<template>
  <li>
    <label class="todoList_label">
      <input class="todoList_input" type="checkbox" :checked="todo.status" @change="todoStore.toggle(todo.id)">
      <span>{{ todo.content }}</span>
    </label>
    <a href="#" @click.prevent="todoStore.remove(todo.id)">
      <i class="fa fa-times"></i>
    </a>
  </li>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore();

// 定義 props 類型與預設值
defineProps({
  todo: {
    type: Object,
    default: () => ({})
  }
})
// defineProps(['todos']) // 可用縮寫(不指定類型)
</script>

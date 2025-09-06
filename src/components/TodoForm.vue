<template>
  <div class="inputBox">
    <input type="text" placeholder="請輸入待辦事項" v-model="newTodo" @keypress.enter="handleSubmit"
      :disabled="todoStore.loading">
    <a href="#" @click.prevent="handleSubmit" :class="{ disabled: todoStore.loading }">
      <i class="fa fa-plus"></i>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const newTodo = ref('')
const todoStore = useTodoStore();

const handleSubmit = async () => {
  if (!newTodo.value.trim() || todoStore.loading) return

  await todoStore.add(newTodo.value)

  if (!todoStore.error) {
    newTodo.value = ''
  }
}
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

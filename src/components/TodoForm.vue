<template>
  <div class="inputBox">
    <input type="text" placeholder="請輸入待辦事項" v-model="newTodo" @keypress.enter="handleSubmit">
    <a href="#" @click.prevent="handleSubmit">
      <i class="fa fa-plus"></i>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const newTodo = ref('')
const todoStore = useTodoStore();

const handleSubmit = () => {
  todoStore.add(newTodo.value)
  newTodo.value = ''
}

</script>

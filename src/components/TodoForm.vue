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
import { ref, watch } from 'vue'
import { useTodoStore } from '@/stores/todo'
import { showErrorAlert, showSuccessToast } from '@/utils/sweetAlert'

const newTodo = ref('')
const todoStore = useTodoStore();

// 監聽錯誤
watch(() => todoStore.error, (newError) => {
  if (newError) {
    showErrorAlert('操作失敗', newError)
  }
})

const handleSubmit = async () => {
  if (!newTodo.value.trim() || todoStore.loading) return

  await todoStore.add(newTodo.value)

  if (!todoStore.error && !todoStore.loading) {
    showSuccessToast('新增待辦事項', `"${newTodo.value}" 加入清單`)
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

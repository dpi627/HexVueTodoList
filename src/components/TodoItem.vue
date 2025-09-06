<template>
  <li>
    <label class="todoList_label">
      <input class="todoList_input" type="checkbox" :checked="todo.status" @change="handleToggle"
        :disabled="todoStore.loading">
      <span>{{ todo.content }}</span>
    </label>
    <a href="#" @click.prevent="handleRemove" :class="{ disabled: todoStore.loading }">
      <i class="fa fa-trash"></i>
    </a>
  </li>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'
import { showConfirmAlert } from '@/utils/sweetAlert';

const todoStore = useTodoStore();

// 定義 props 類型與預設值
const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
// defineProps(['todos']) // 可用縮寫(不指定類型)


const handleToggle = async () => {
  if (todoStore.loading) return
  await todoStore.toggle(props.todo.id)
}

const handleRemove = async () => {
  if (todoStore.loading) return
  const confirmed = await showConfirmAlert('確定刪除待辦事項？', props.todo.content)
  if (confirmed) {
    await todoStore.remove(props.todo.id)
  }
}
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todoList_label {
  display: flex;
  align-items: center;
  flex: 1;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* 可選：設定按鈕大小 */
  width: 24px;
  height: 24px;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

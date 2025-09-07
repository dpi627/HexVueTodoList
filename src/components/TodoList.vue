<template>
  <div class="todoList_list">
    <ul class="todoList_tab">
      <li>
        <a href="#" :class="{ active: todoStore.filter === '' }" @click="todoStore.setFilter('')">全部</a>
      </li>
      <li>
        <a href="#" :class="{ active: todoStore.filter === 'pending' }" @click="todoStore.setFilter('pending')">待完成</a>
      </li>
      <li>
        <a href="#" :class="{ active: todoStore.filter === 'completed' }"
          @click="todoStore.setFilter('completed')">已完成</a>
      </li>
    </ul>
    <div class="todoList_items">
      <ul class="todoList_item">
        <TodoItem v-for="todo in todoStore.filteredTodos" :key="todo.id" :todo="todo" />
      </ul>
      <div class="todoList_statistics">
        <p>
          <span class="text-danger">{{ todoStore.pendingCount }} </span>
          個待完成事項
          <span v-if="todoStore.loading" class="text-danger">載入中...</span>
        </p>
        <div class="action-buttons">
          <!-- 只在待完成頁面顯示全選完成按鈕 -->
          <button v-if="todoStore.filter === 'pending'" @click="handleCompleteAll"
            :disabled="todoStore.loading || todoStore.pendingCount === 0" class="btn btn-dark btn-sm rounded-circle"
            title="完成所有待完成事項">
            <i class="fa fa-check-double"></i>
          </button>
          <!-- 只在已完成頁面顯示清除已完成按鈕 -->
          <button v-if="todoStore.filter === 'completed'" @click="handleClearCompleted"
            :disabled="todoStore.loading || todoStore.completedCount === 0" class="btn btn-dark btn-sm rounded-circle"
            title="刪除所有已完成事項">
            <i class="fa fa-trash-can"></i>
          </button>
          <!-- 在全部頁面顯示兩個按鈕 -->
          <template v-if="todoStore.filter === ''">
            <button @click="handleCompleteAll" :disabled="todoStore.loading || todoStore.pendingCount === 0"
              class="btn btn-dark btn-sm rounded-circle me-1" title="完成所有待完成事項">
              <i class="fa fa-check-double"></i>
            </button>
            <button @click="handleClearCompleted" :disabled="todoStore.loading || todoStore.completedCount === 0"
              class="btn btn-dark btn-sm rounded-circle" title="刪除所有已完成事項">
              <i class="fa fa-trash-can"></i>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/TodoItem.vue'
import { showConfirmAlert, showSuccessToast } from '@/utils/sweetAlert'

const todoStore = useTodoStore()

// 處理全選完成
const handleCompleteAll = async () => {
  const confirmed = await showConfirmAlert('確定完成所有待辦事項？', '將所有未完成事項都標記為完成')
  if (confirmed) {
    await todoStore.completeAll()
    showSuccessToast('所有代辦事項均已完成')
  }
}

// 處理清除已完成
const handleClearCompleted = async () => {
  const confirmed = await showConfirmAlert('確定刪除所有已完成事項？', '將所有已完成事項刪除')
  if (confirmed) {
    await todoStore.clearCompleted()
    showSuccessToast('所有完成事項均已刪除')
  }
}
</script>

<style scoped>
.todoList_statistics {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getTodos, addTodo, deleteTodo, toggleTodo } from '@/utils/api'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const filter = ref('')
  const loading = ref(false)
  const error = ref('')

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'pending':
        return todos.value.filter((todo) => !todo.status)
      case 'completed':
        return todos.value.filter((todo) => todo.status)
      default:
        return todos.value
    }
  })

  const totalCount = computed(() => todos.value.length)

  const completedCount = computed(() => {
    return todos.value.filter((todo) => todo.status).length
  })

  const pendingCount = computed(() => {
    return todos.value.filter((todo) => !todo.status).length
  })

  // 載入所有 todos
  const loadTodos = async () => {
    try {
      loading.value = true
      error.value = ''
      const response = await getTodos()
      todos.value = response.data.data || []
    } catch (err) {
      error.value = err.response?.data?.message || '載入待辦事項失敗'
    } finally {
      loading.value = false
    }
  }

  const add = async (content) => {
    if (!content.trim()) return

    try {
      loading.value = true
      error.value = ''
      const response = await addTodo(content.trim())
      // 重新載入 todos 或直接添加到陣列
      todos.value.push(response.data.newTodo)
    } catch (err) {
      error.value = err.response?.data?.message || '新增待辦事項失敗'
    } finally {
      loading.value = false
    }
  }

  const remove = async (id) => {
    try {
      loading.value = true
      error.value = ''
      await deleteTodo(id)
      // 從本地陣列移除
      const index = todos.value.findIndex((todo) => todo.id === id)
      if (index > -1) {
        todos.value.splice(index, 1)
      }
    } catch (err) {
      error.value = err.response?.data?.message || '刪除待辦事項失敗'
    } finally {
      loading.value = false
    }
  }

  const toggle = async (id) => {
    try {
      loading.value = true
      error.value = ''
      const response = await toggleTodo(id)
      // 更新本地狀態
      const todo = todos.value.find((todo) => todo.id === id)
      if (todo) {
        todo.status = response.data.status
      }
    } catch (err) {
      error.value = err.response?.data?.message || '更新待辦事項失敗'
    } finally {
      loading.value = false
    }
  }

  const setFilter = (newFilter) => {
    filter.value = newFilter
  }

  const completeAll = async () => {
    try {
      loading.value = true
      error.value = ''
      const pendingTodos = todos.value.filter((todo) => !todo.status)

      for (const todo of pendingTodos) {
        await toggleTodo(todo.id)
        todo.status = true
      }
    } catch (err) {
      error.value = err.response?.data?.message || '批量完成待辦事項失敗'
    } finally {
      loading.value = false
    }
  }

  const clearCompleted = async () => {
    try {
      loading.value = true
      error.value = ''
      const completedTodos = todos.value.filter((todo) => todo.status)

      for (const todo of completedTodos) {
        await deleteTodo(todo.id)
      }

      // 從本地陣列移除已完成的事項
      todos.value = todos.value.filter((todo) => !todo.status)
    } catch (err) {
      error.value = err.response?.data?.message || '清除已完成事項失敗'
    } finally {
      loading.value = false
    }
  }

  return {
    todos,
    filter,
    filteredTodos,
    totalCount,
    completedCount,
    pendingCount,
    loadTodos,
    add,
    remove,
    toggle,
    setFilter,
    completeAll,
    clearCompleted,
    loading,
    error,
  }
})

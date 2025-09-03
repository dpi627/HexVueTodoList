import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const filter = ref('')

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

  const add = (content) => {
    if (content.trim()) {
      todos.value.push({
        id: Date.now(),
        content: content.trim(),
        status: false,
      })
    }
  }

  const remove = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  const toggle = (id) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.status = !todo.status
    }
  }

  const setFilter = (newFilter) => {
    filter.value = newFilter
  }

  const clearCompleted = () => {
    todos.value = todos.value.filter((todo) => !todo.status)
  }

  return {
    todos,
    filter,
    filteredTodos,
    totalCount,
    completedCount,
    pendingCount,
    add,
    remove,
    toggle,
    setFilter,
    clearCompleted,
  }
})

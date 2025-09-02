import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import TodoListView from '@/views/TodoListView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoListView,
    },
  ],
})

export default router

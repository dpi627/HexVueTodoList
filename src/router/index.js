import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import TodoListView from '@/views/TodoListView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/todolist', // 使用 redirect 重定導向，清楚明白
      // component: TodoListView, // 也可直接指定元件 (不如 redirect 清楚)
    },
    {
      path: '/signin',
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
      //alias: '/'  // 如不使用前述 redirect，也可用別名
    },
  ],
})

export default router

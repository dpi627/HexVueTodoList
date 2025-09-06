import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import TodoListView from '@/views/TodoListView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

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
      meta: {
        requiresGuest: true, // 只允許未登入訪問
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      meta: {
        requiresGuest: true, // 只允許未登入訪問
      },
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoListView,
      //alias: '/'  // 如不使用前述 redirect，也可用別名
      meta: {
        requiresAuth: true, // 需要登入才能訪問
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // 初始化用戶（從 localStorage 讀取）
  userStore.init()

  // 檢查是否需要登入
  if (to.meta.requiresAuth) {
    if (userStore.isLogin) {
      next() // 已登入，允許訪問
    } else {
      next('/signin') // 未登入，導向登入頁
    }
  }
  // 檢查是否允許未登入用戶訪問
  else if (to.meta.requiresGuest) {
    if (userStore.isLogin) {
      next('/todolist') // 已登入
    } else {
      next() // 未登入，允許訪問
    }
  }
  // 其他頁面
  else {
    next()
  }
})

export default router

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})

// 创建 Mock 实例
const mock = new MockAdapter(axios)

// 模拟登录接口
mock.onPost('/api/login').reply((config) => {
  const { username, password } = JSON.parse(config.data)
  
  // 模拟用户验证
  if (username === 'admin' && password === '123456') {
    return [200, {
      success: true,
      token: 'mock-token-' + Date.now(),
      message: '登录成功'
    }]
  } else {
    return [400, {
      success: false,
      message: '用户名或密码错误'
    }]
  }
})

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

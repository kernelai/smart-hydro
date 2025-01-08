<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <p>欢迎回来！</p>
    <el-button type="primary" @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

onMounted(() => {
  // 检查是否已登录
  const token = localStorage.getItem('token')
  if (!token) {
    ElMessage.error('请先登录')
    router.push('/')
  }
})

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/')
  ElMessage.success('已退出登录')
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style> 
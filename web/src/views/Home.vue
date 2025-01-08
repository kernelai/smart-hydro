<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Picture } from '@element-plus/icons-vue'
import axios from 'axios'

const router = useRouter()
const dialogVisible = ref(false)
const loading = ref(false)

// 登录表单数据
const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
}

const loginFormRef = ref()

const handleLogin = async () => {
  if (!loginFormRef.value) return
  
  await loginFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      try {
        loading.value = true
        const response = await axios.post('/api/login', loginForm)
        
        if (response.data.success) {
          ElMessage.success('登录成功')
          dialogVisible.value = false
          localStorage.setItem('token', response.data.token)
          router.push('/dashboard')
        } else {
          ElMessage.error(response.data.message || '登录失败')
        }
      } catch (error) {
        ElMessage.error('登录失败，请稍后重试')
        console.error('登录错误：', error)
      } finally {
        loading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-content">
          <div class="left-section">
            <el-icon class="icon"><Picture /></el-icon>
            <span class="title">智慧水利平台</span>
          </div>
          <div class="right-section">
            <el-button type="primary" @click="dialogVisible = true">登录</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="main-content">
          <img src="../assets/welcome.jpg" alt="Water" class="background-image">
          <div class="text-overlay">欢迎使用河海大学智慧水利平台</div>
        </div>
      </el-main>
    </el-container>

    <!-- 登录对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="用户登录"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="80px"
        @keyup.enter="handleLogin"
      >
        <el-form-item label="用户名" prop="username">
          <el-input 
            v-model="loginForm.username"
            placeholder="请输入用户名"
            :disabled="loading"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
            :disabled="loading"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" :disabled="loading">取消</el-button>
          <el-button 
            type="primary" 
            @click="handleLogin" 
            :loading="loading"
          >
            {{ loading ? '登录中...' : '登录' }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-header {
  background-color: #fff;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 24px;
  color: #409EFF;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #303133;
}

.el-main {
  padding: 0;
  flex: 1;
}

.main-content {
  position: relative;
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background-color: #f5f7fa;
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #303133;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  z-index: 2;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style> 
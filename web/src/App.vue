<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :ellipsis="false">
        <el-menu-item index="0" class="logo-title">
          智慧水利平台
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">
          <el-button type="primary" @click="dialogVisible = true">登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <div class="welcome-section">
        <div class="content-wrapper">
          <h1 class="main-title">河海大学智慧水利平台</h1>
          <el-image
            src="/src/assets/welcome.jpg"
            fit="cover"
            class="welcome-image"
          >
            <template #error>
              <div class="image-slot">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
      </div>
    </el-main>

    <!-- 登录对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="用户登录"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </span>
      </template>
    </el-dialog>

    <el-footer>
      <p>© 2025 我的应用</p>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Picture } from '@element-plus/icons-vue'

// 控制登录对话框的显示
const dialogVisible = ref(false)

// 登录表单数据
const loginForm = reactive({
  username: '',
  password: ''
})

// 处理登录逻辑
const handleLogin = () => {
  console.log('登录信息：', loginForm)
  // TODO: 实现登录逻辑
  dialogVisible.value = false
}
</script>

<style scoped>
.el-container {
  min-height: 100vh;
}

.el-header {
  padding: 0;
}

.flex-grow {
  flex-grow: 1;
}

.el-footer {
  text-align: center;
  padding: 20px;
}

.welcome-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #f5f7fa;
  min-height: calc(100vh - 60px - 60px);
}

.welcome-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 500px;
  object-fit: contain;
  border-radius: 0px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.1);
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  color: #909399;
  font-size: 30px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.logo-title {
  font-size: 18px;
  font-weight: bold;
  color: #409EFF !important;
  padding-right: 20px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main-title {
  font-size: 32px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 30px;
  text-align: center;
  /* 可选的文字阴影效果 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

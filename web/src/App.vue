<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :ellipsis="false">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="3">
          <el-button type="primary">登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>卡片标题</span>
                <el-button class="button" text>操作按钮</el-button>
              </div>
            </template>
            <div v-for="i in 4" :key="i" class="text item">
              {{ '列表项 ' + i }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-form :model="form" label-width="120px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="活动时间">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>

    <el-footer>
      <p>© 2025 我的应用</p>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!', form)
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>

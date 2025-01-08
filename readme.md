# Web Frontend

## 项目介绍
这是一个基于 Vue 3 + TypeScript + Vite 的前端项目。

## 技术栈
- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Sass
- Axios

## 目录结构
- `src/api`: API 接口封装
- `src/assets`: 静态资源
- `src/components`: 公共组件
- `src/composables`: 组合式函数
- `src/layouts`: 布局组件
- `src/router`: 路由配置
- `src/stores`: Pinia 状态管理
- `src/types`: TypeScript 类型定义
- `src/utils`: 工具函数
- `src/views`: 页面组件

## 开发规范
1. 使用 Composition API 和 `<script setup>` 语法
2. 组件名使用 PascalCase 命名
3. 文件名使用 kebab-case 命名
4. 使用 TypeScript 进行类型检查
5. 使用 Pinia 进行状态管理
6. 使用 Vue Router 进行路由管理

## 开发命令

## 项目配置
项目使用 Vite 作为构建工具，配置文件位于 `vite.config.ts`。

## 代码提交规范
提交信息格式：`type(scope): message`

type 类型：
- feat: 新功能
- fix: 修复
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动
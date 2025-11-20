# 云端虚拟智能实验室（Next.js + Unity WebGL）

本项目基于 Next.js App Router 构建云端虚拟智能实验室的 Web 入口，同时承载 Unity WebGL 场景的加载与分发。前端提供实验大厅、权限控制和仪表盘体验，后端使用 Prisma/MySQL 管理实验、用户、班级与 AI 辅助交互的数据。

## 功能概览
- **实验大厅**：从 `/api/experiments` 拉取实验列表，展示学科、版本与描述，便于快速选择进入 Unity WebGL 场景。
- **角色与认证**：JWT + 中间件保护首页与仪表盘，已登录用户按角色自动路由到对应路径（`/dashboard/<role>`）。
- **数据模型**：Prisma 建模用户、实验、班级与 AI 交互日志，支持学生实验记录与教师班级管理。
- **AI 接入预留**：`src/lib/ai` 预置多个厂商的 SDK 封装（本地、智谱、通义、DeepSeek、豆包），可按需配置。

## 技术栈
- **框架**：Next.js 16（App Router）、React 19、TypeScript
- **样式**：Tailwind CSS 4
- **数据层**：Prisma + MySQL（生成代码输出到 `src/lib/generated/prisma`）
- **认证**：JWT（`httpOnly` Cookie）
- **三维/互动**：Unity WebGL 构建包通过 Next.js 静态资源/路由交付

## 目录速览
- `src/app`：页面与 API Route（含 `/api/experiments`、`/api/auth/login` 等）
- `src/components`：页面 UI 组件（如 `Hero`、`ExperimentCard`、`Background`）
- `src/lib`：Prisma 客户端、JWT/AI 工具方法
- `prisma/schema.prisma`：数据库模型定义
- `public`：静态资源与（可放置）Unity WebGL 构建产物

## 快速开始
1. 安装依赖
   ```bash
   npm install
   ```
2. 配置环境变量（创建 `.env`）
   - `DATABASE_URL`：MySQL 连接串
   - `JWT_SECRET`：JWT 加密密钥
   - 按需：`AI_PROVIDER`、`LOCAL_AI_URL`、`ZHIPU_API_KEY`、`QWEN_API_KEY`、`DEEPSEEK_API_KEY`、`DOUBAO_API_KEY`
3. 生成 Prisma 客户端并同步数据库
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. 本地开发
   ```bash
   npm run dev
   # 访问 http://localhost:3000
   ```
5. 生产构建与启动
   ```bash
   npm run build
   npm run start
   ```

## 部署与静态资源
- Unity WebGL 构建产物可放置于 `public` 或通过自定义 Route 输出，确保资源路径与 `sceneAssetPath` 字段保持一致。
- 生产环境建议将 `JWT_SECRET`、数据库凭据和 AI Key 通过安全的环境变量管理服务注入。

## 常见问题
- **首页/仪表盘被重定向到登录页**：检查浏览器是否存在名为 `token` 的有效 JWT Cookie，以及 `JWT_SECRET` 是否与签发时一致。
- **API 无法连接数据库**：确认 `DATABASE_URL` 配置正确并执行过 `prisma migrate`。
- **AI 能力不可用**：设置 `AI_PROVIDER` 与对应的 API Key，或选择 `local` 并配置 `LOCAL_AI_URL`。


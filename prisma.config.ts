import { defineConfig } from '@prisma/config';

export default defineConfig({
    // 1. 指定 schema 文件位置
    schema: 'prisma/schema.prisma',

    // 2. 配置数据库连接 URL
    // ⚠️ 修正：移除 provider，只保留 url
    datasource: {
        url: process.env.DATABASE_URL,
    },

    // 3. 迁移文件路径
    migrations: {
        path: 'prisma/migrations',
    },
});
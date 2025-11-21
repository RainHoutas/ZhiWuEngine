import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // 1. 自定义颜色系统
            colors: {
                // 科技暗黑风背景色系
                slate: {
                    850: '#151b2e', // 介于 800 和 900 之间的深蓝黑
                    900: '#0f172a', // 标准深色
                    950: '#020617', // 接近纯黑
                },
                // 核心主色：电光蓝/青
                primary: {
                    DEFAULT: "#3B82F6", // 亮蓝
                    glow: "#60A5FA",    // 发光蓝
                    dark: "#1d4ed8",
                },
                // 强调色
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                    950: '#083344',
                }
            },
            // 2. 自定义背景图片（用于网格特效）
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            // 3. 自定义动画
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            // 4. 动画的关键帧
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' }, // 扫过整个屏幕高度
                },
            },
        },
    },
    plugins: [],
};
export default config;
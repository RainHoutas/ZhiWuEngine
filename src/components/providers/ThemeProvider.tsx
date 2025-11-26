"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 这是一个简单的包装器组件
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
"use client";
import React from "react";
import { motion } from "framer-motion";

export const RadarBackground = () => {
    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            // 使用 mask-image 让扫描线在顶部和底部柔和消失，不会生硬切断
            style={{
                maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
            }}
        >
            {/* 静态网格背景 - 增加科技底纹 */}
            <div className="absolute inset-0 bg-[rgba(6,182,212,0.03)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
                 style={{ backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px)" }}
            />


        </div>
    );
};
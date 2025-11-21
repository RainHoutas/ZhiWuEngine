// src/app/dashboard/admin/page.tsx
"use client";

import React, { useEffect, useState } from "react";

type Item = {
    id: number;
    name: string;
    createdAt: string;
};

export default function AdminTestPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [newName, setNewName] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(null);
        // 模拟异步加载
        const t = setTimeout(() => {
            setItems([
                { id: 1, name: "示例项 A", createdAt: new Date().toISOString() },
                { id: 2, name: "示例项 B", createdAt: new Date().toISOString() },
            ]);
            setLoading(false);
        }, 600);
        return () => clearTimeout(t);
    }, []);

    function addItem() {
        if (!newName.trim()) return setError("名称不能为空");
        setError(null);
        const next: Item = {
            id: items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1,
            name: newName.trim(),
            createdAt: new Date().toISOString(),
        };
        setItems((s) => [next, ...s]);
        setNewName("");
    }

    function simulateError() {
        setError("这是一个模拟错误，便于测试错误展示");
    }

    return (
        <div style={{ padding: 20, fontFamily: "Segoe UI, Roboto, Helvetica, Arial" }}>
            <h1>管理员测试页</h1>

            <section style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 6 }}>添加测试项：</label>
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="输入名称"
                    style={{ padding: 8, width: 260, marginRight: 8 }}
                />
                <button onClick={addItem} style={{ padding: "8px 12px" }}>
                    添加
                </button>
                <button
                    onClick={simulateError}
                    style={{ padding: "8px 12px", marginLeft: 8, background: "#f8d7da", border: "1px solid #f5c2c7" }}
                >
                    模拟错误
                </button>
            </section>

            {error && (
                <div style={{ color: "#721c24", background: "#f8d7da", padding: 10, borderRadius: 4, marginBottom: 12 }}>
                    错误：{error}
                </div>
            )}

            <section>
                <h2>项目列表</h2>
                {loading ? (
                    <div>加载中...</div>
                ) : items.length === 0 ? (
                    <div>暂无数据</div>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                        <tr>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>ID</th>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>名称</th>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 8 }}>创建时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((it) => (
                            <tr key={it.id}>
                                <td style={{ padding: 8, borderBottom: "1px solid #f1f1f1" }}>{it.id}</td>
                                <td style={{ padding: 8, borderBottom: "1px solid #f1f1f1" }}>{it.name}</td>
                                <td style={{ padding: 8, borderBottom: "1px solid #f1f1f1", fontSize: 12, color: "#555" }}>
                                    {new Date(it.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

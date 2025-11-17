export async function askLocalModel(prompt: string): Promise<string> {
    const url = process.env.LOCAL_AI_URL; // http://localhost:8000/v1/chat/completions

    const resp = await fetch(url!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "deepseek-r1",
            messages: [{ role: "user", content: prompt }]
        })
    }).then(r => r.json());

    return resp.choices?.[0]?.message?.content ?? "AI 本地模型无响应";
}

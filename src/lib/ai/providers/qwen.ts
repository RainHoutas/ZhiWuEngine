export async function askQwen(prompt: string): Promise<string> {
    const apiKey = process.env.QWEN_API_KEY;

    const resp = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "qwen-plus",
            messages: [{ role: "user", content: prompt }],
        })
    }).then(r => r.json());

    return resp.choices?.[0]?.message?.content ?? "AI 无响应";
}

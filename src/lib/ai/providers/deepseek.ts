export async function askDeepSeek(prompt: string): Promise<string> {
    const apiKey = process.env.DEEPSEEK_API_KEY;

    const resp = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }]
        })
    }).then(r => r.json());

    return resp.choices?.[0]?.message?.content ?? "AI 无响应";
}

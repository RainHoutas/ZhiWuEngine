export async function askDoubao(prompt: string): Promise<string> {
    const apiKey = process.env.DOUBAO_API_KEY;

    const resp = await fetch("https://ark.cn-beijing.volces.com/api/v3/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "ep-20241112215350-fusis",
            messages: [{ role: "user", content: prompt }]
        })
    }).then(r => r.json());

    return resp.choices?.[0]?.message?.content ?? "AI 无响应";
}

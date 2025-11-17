export async function askZhipu(prompt: string): Promise<string> {
    const apiKey = process.env.ZHIPU_API_KEY;

    if (!apiKey) {
        throw new Error("缺少 ZHIPU_API_KEY");
    }

    const resp = await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "glm-4-flash", // 你也可以换成 glm-4-air 或 glm-4-flash
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        }),
    }).then(r => r.json());

    return resp.choices?.[0]?.message?.content ?? "智谱 AI 无响应";
}

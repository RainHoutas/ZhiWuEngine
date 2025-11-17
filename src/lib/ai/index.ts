import { askDeepSeek } from "./providers/deepseek";
import { askQwen } from "./providers/qwen";
import { askDoubao } from "./providers/doubao";
import { askLocalModel } from "./providers/local";
import { askZhipu } from "./providers/zhipu";

/**
 * 统一 AI 调用接口
 * prompt: 用户或系统传入的内容
 */
export async function askAI(prompt: string): Promise<string> {
    const provider = process.env.AI_PROVIDER;

    switch (provider) {
        case "deepseek":
            return askDeepSeek(prompt);
        case "qwen":
            return askQwen(prompt);
        case "doubao":
            return askDoubao(prompt);
        case "local":
            return askLocalModel(prompt);
        case "zhipu":
            return askZhipu(prompt);
        default:
            throw new Error("AI_PROVIDER 未配置或不正确");
    }
}

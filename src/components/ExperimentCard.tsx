// 1. 只导入“类型”，在编译后不会变成真正的 JS 代码
import type { Experiment } from "@/types/experiment";

// 2. 定义这个组件的 props 长什么样
//   - 这里我们只需要 Experiment 里的部分字段
export type ExperimentCardProps = Pick<Experiment, "name" | "subject" | "description">;

// 3. 用类型标注约束组件的 props
export default function ExperimentCard({
                                           name,
                                           subject,
                                           description,
                                       }: ExperimentCardProps) {
    return (
        <div
            className="
        group relative p-4 rounded-2xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
        hover:-translate-y-1 transition-all duration-300 cursor-pointer
      "
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/15 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
        <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-purple-600/30 text-purple-100">
          {subject}
        </span>

                <h3 className="mt-3 text-lg font-semibold text-white">
                    {name}
                </h3>

                <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                    {description || "该实验正在接入 AI 辅助功能…"}
                </p>
            </div>
        </div>
    );
}

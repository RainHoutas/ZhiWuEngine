export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* 中心光晕 */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(100,100,255,0.25)_0%,rgba(0,0,0,0.9)_70%)]" />
            </div>

            {/* 网格线 */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* 左上 - 紫色光 */}
            <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-purple-600/40 rounded-full blur-[160px]" />

            {/* 右下 - 蓝色光 */}
            <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] bg-blue-600/40 rounded-full blur-[160px]" />
        </div>
    );
}

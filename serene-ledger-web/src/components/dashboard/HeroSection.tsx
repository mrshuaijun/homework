export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-neon-sm animate-pulse"></span>
            PERSONAL FINTECH RADAR
          </span>
          <span className="text-gray-400 font-mono text-[11px]">VER 2.5</span>
        </div>
        <h1 className="font-display text-[28px] md:text-[34px] text-white font-extrabold tracking-tight leading-tight">
          午好，李明！这是您 5 月的财务全景
        </h1>
        <p className="font-body text-[13.5px] text-gray-400 mt-1.5">
          本月财务运行稳健，实际支出比预期规划低 <span className="font-semibold text-primary font-mono">12.4%</span>，健康结余继续保持。
        </p>
      </div>

      {/* Health Metric Pill */}
      <div className="bento-card border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-bento self-start md:self-auto">
        <div className="w-8 h-8 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/30">
          <span className="material-symbols-outlined text-[18px]">verified</span>
        </div>
        <div className="flex flex-col">
          <span className="font-body text-[11px] text-gray-400 font-medium">财务健康度指数</span>
          <span className="font-mono text-[13px] text-white font-bold flex items-center gap-1.5">
            极佳 94 <span className="text-secondary font-mono text-[11px]">/ 100</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-[#0d0e11]/80 backdrop-blur-xl border-b border-white/[0.07] z-40 flex items-center justify-between px-8">
      {/* Date Picker */}
      <div className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer group shadow-sm">
        <span className="material-symbols-outlined text-primary text-[17px]">calendar_today</span>
        <span className="font-mono text-[13px] text-gray-200 font-semibold tracking-tight">2025年 05月</span>
        <span className="material-symbols-outlined text-gray-400 text-[16px] group-hover:translate-y-0.5 transition-transform">expand_more</span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button
          className="h-9 px-4 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 font-display text-[12.5px] font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-primary">add</span>
          <span>记一笔</span>
        </button>

        <button
          className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all relative"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">notifications</span>
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
        </button>

        <div className="h-4 w-[1px] bg-white/[0.1] mx-1"></div>

        <div className="flex items-center gap-2 pl-1 cursor-pointer group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/20 text-white font-display text-[12px] font-bold flex items-center justify-center border border-white/20 group-hover:border-primary/50 transition-colors">
            明
          </div>
          <span className="font-display text-[13px] text-gray-200 font-medium hidden sm:inline-block group-hover:text-white transition-colors">李明</span>
        </div>
      </div>
    </header>
  );
}

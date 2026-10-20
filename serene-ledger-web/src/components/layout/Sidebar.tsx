import { navItems } from '../../data/mockData';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0d0e11]/90 backdrop-blur-2xl border-r border-white/[0.07] z-50 flex flex-col justify-between py-6">
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="px-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary-fixed-dim to-[#84a300] flex items-center justify-center text-black shadow-neon-sm ring-1 ring-white/30">
            <span className="material-symbols-outlined text-[22px] font-black">token</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[19px] text-white font-bold tracking-tight">简记账</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-primary/15 text-primary rounded border border-primary/30 uppercase tracking-widest">Neo</span>
            </div>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Serene Ledger</span>
          </div>
        </div>

        {/* Quick Add Action Pill */}
        <div className="px-4">
          <button
            className="w-full h-11 bg-primary hover:bg-[#d6ff1a] text-black font-display text-[13.5px] font-bold rounded-xl flex items-center justify-center gap-2 shadow-neon-sm hover:shadow-neon-glow transition-all duration-300 cursor-pointer group active:scale-[0.98]"
            type="button"
          >
            <span className="material-symbols-outlined text-[19px] transition-transform duration-300 group-hover:rotate-90">add</span>
            <span>快捷记账</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1.5 px-3">
          {navItems.map((item) =>
            item.active ? (
              <a
                key={item.id}
                href="#"
                aria-current="page"
                data-path={item.id}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 bg-white/[0.07] text-white font-semibold border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-primary">{item.icon}</span>
                  <span className="text-[13.5px] tracking-tight">{item.label}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-neon-sm"></span>
              </a>
            ) : (
              <a
                key={item.id}
                href="#"
                data-path={item.id}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all duration-150 group"
              >
                <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-primary transition-colors">{item.icon}</span>
                <span className="text-[13.5px] tracking-tight">{item.label}</span>
              </a>
            )
          )}
        </nav>
      </div>

      {/* Bottom Hardware-styled User Sync Card */}
      <div className="px-4">
        <div className="bento-card p-3 rounded-2xl flex items-center justify-between border border-white/[0.08] hover:border-white/20 transition-all">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-surface-container to-surface-bright border border-white/10 text-primary flex items-center justify-center font-display text-xs font-bold ring-1 ring-primary/20">
              李
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[12.5px] text-gray-200 font-semibold leading-tight">个人账本</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-mono text-[10px] text-gray-400 leading-tight">云端已同步</span>
              </div>
            </div>
          </div>
          <button
            className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-gray-400 hover:text-primary transition-all"
            title="立即同步"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">sync</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

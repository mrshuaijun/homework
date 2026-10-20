import BentoCard from '../ui/BentoCard';

export default function KPICards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Expense */}
      <BentoCard className="p-5 group" hoverBorderClass="hover:border-primary/40">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11.5px] text-gray-400 tracking-wider uppercase">本月总支出</span>
          <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 flex items-center justify-center group-hover:text-primary group-hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-[17px]">north_east</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 my-1">
          <span className="font-mono text-[18px] text-gray-400 font-light">¥</span>
          <span className="font-display text-[30px] font-extrabold text-white tracking-tight">5,842</span>
          <span className="font-mono text-[14px] text-gray-400">.00</span>
        </div>
        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/[0.06]">
          <span className="inline-flex items-center gap-0.5 text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded font-mono text-[11px] font-semibold">
            <span className="material-symbols-outlined text-[12px]">trending_down</span>
            -12.4%
          </span>
          <span className="font-body text-[11.5px] text-gray-400">环比上月节约</span>
        </div>
      </BentoCard>

      {/* Card 2: Income */}
      <BentoCard className="p-5 group" hoverBorderClass="hover:border-secondary/40">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11.5px] text-gray-400 tracking-wider uppercase">本月总收入</span>
          <div className="w-8 h-8 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[17px]">south_west</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 my-1">
          <span className="font-mono text-[18px] text-gray-400 font-light">¥</span>
          <span className="font-display text-[30px] font-extrabold text-secondary tracking-tight">16,200</span>
          <span className="font-mono text-[14px] text-secondary/80">.00</span>
        </div>
        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/[0.06]">
          <span className="font-body text-[11.5px] text-gray-400">含固定薪资及 1 笔兼职收益</span>
        </div>
      </BentoCard>

      {/* Card 3: Net Balance / Savings */}
      <BentoCard className="p-5 group" hoverBorderClass="hover:border-primary/40">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11.5px] text-gray-400 tracking-wider uppercase">净结余 / 储蓄</span>
          <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[17px]">savings</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 my-1">
          <span className="font-mono text-[18px] text-gray-400 font-light">¥</span>
          <span className="font-display text-[30px] font-extrabold text-white tracking-tight">10,358</span>
          <span className="font-mono text-[14px] text-gray-400">.00</span>
        </div>
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-primary font-semibold bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
            储蓄率 63.9%
          </span>
          <span className="font-body text-[11.5px] text-gray-400">结余充沛</span>
        </div>
      </BentoCard>

      {/* Card 4: Budget Progress */}
      <BentoCard className="p-5 group" hoverBorderClass="hover:border-white/30">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11.5px] text-gray-400 tracking-wider uppercase">月度预算控制</span>
          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">可控范围内</span>
        </div>
        <div>
          <div className="flex items-end justify-between mb-1.5 mt-2">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[19px] font-bold text-white">73%</span>
              <span className="font-mono text-[11px] text-gray-400 ml-1">已用 ¥5,842</span>
            </div>
            <span className="font-mono text-[11px] text-gray-400">预算 ¥8,000</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/[0.07] rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-neon-sm transition-all duration-700"
              style={{ width: '73%' }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/[0.06]">
            <span className="font-body text-[11.5px] text-gray-400">剩余可用额度</span>
            <span className="font-mono text-[12px] font-bold text-gray-200">¥2,158.00</span>
          </div>
        </div>
      </BentoCard>
    </section>
  );
}

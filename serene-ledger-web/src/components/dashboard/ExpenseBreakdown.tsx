import { donutData } from '../../data/mockData';

export default function ExpenseBreakdown() {
  return (
    <div className="bento-card p-6 rounded-2xl shadow-bento">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display text-[16.5px] text-white font-bold flex items-center gap-2">
            5月支出分类占比
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          </h3>
          <p className="font-body text-[12px] text-gray-400 mt-0.5">各项生活刚需与品质消费分布</p>
        </div>
        <span className="px-2 py-0.5 bg-white/[0.06] text-gray-300 rounded font-mono text-[10px] border border-white/10">
          5大类别
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Donut Chart with Neon Stroke Glow */}
        <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
          <svg className="w-36 h-36 -rotate-90 transform" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#1c1e24" strokeWidth="12" />
            {donutData.map((item) => (
              <circle
                key={item.category}
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke={item.color}
                strokeDasharray={item.dashArray}
                strokeDashoffset={item.dashOffset}
                strokeWidth="12"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest leading-none">总计支出</span>
            <span className="font-display text-[15px] font-extrabold text-white mt-1">¥5,842</span>
          </div>
        </div>

        {/* Donut Legend & Stats */}
        <div className="flex-1 w-full flex flex-col gap-2">
          {donutData.map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.dotClass} flex-shrink-0`}></span>
                <span className={`font-body text-[12.5px] ${item.textClass}`}>{item.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[12px] font-semibold ${item.amountClass}`}>{item.amount}</span>
                <span className={`font-mono text-[11.5px] w-7 text-right ${item.percentClass}`}>{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

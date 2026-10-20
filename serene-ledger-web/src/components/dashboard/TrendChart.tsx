import { barChartData } from '../../data/mockData';

export default function TrendChart() {
  return (
    <div className="bento-card p-6 rounded-2xl shadow-bento">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display text-[16.5px] text-white font-bold flex items-center gap-2">
            近 7 天支出走势
            <span className="w-2 h-2 rounded-full bg-primary shadow-neon-sm animate-pulse"></span>
          </h3>
          <p className="font-body text-[12px] text-gray-400 mt-0.5">每日支出波动平稳，周一为集中采购小高峰</p>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-primary"></span>支出额度
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-[1px] bg-gray-500"></span>日均线 ¥220
          </span>
        </div>
      </div>

      {/* SVG Glowing Bar Chart */}
      <div className="h-44 w-full pt-2 flex flex-col justify-end">
        <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 120">
          <defs>
            <linearGradient id="neonBarGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#c3f400" stopOpacity={1} />
              <stop offset="100%" stopColor="#556d00" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="activeBarGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" stopOpacity={1} />
              <stop offset="100%" stopColor="#003822" stopOpacity={0.4} />
            </linearGradient>
            <linearGradient id="dimBarGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" stopOpacity={0.8} />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* Guideline */}
          <line stroke="#2a2d34" strokeDasharray="4,4" strokeWidth="1" x1="0" x2="700" y1="50" y2="50" />

          {barChartData.map((bar, index) => (
            <g key={index} className="group/bar cursor-pointer">
              <rect
                className={bar.isHighlight ? '' : 'transition-all duration-200 group-hover/bar:opacity-100 opacity-60'}
                fill={bar.fill}
                filter={bar.highlightFilter}
                height={bar.height}
                rx="6"
                width="38"
                x={bar.x}
                y={bar.y}
              />
              <text
                className={bar.isHighlight ? bar.valueClass : `${bar.valueClass} opacity-0 group-hover/bar:opacity-100 transition-opacity`}
                textAnchor="middle"
                x={bar.x + 19}
                y={bar.y - 8}
              >
                {bar.displayValue}
              </text>
            </g>
          ))}
        </svg>

        <div className="flex justify-between px-2 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-gray-400">
          {barChartData.map((bar, index) => (
            <span key={index} className={`w-14 text-center ${bar.labelClass}`}>
              {bar.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

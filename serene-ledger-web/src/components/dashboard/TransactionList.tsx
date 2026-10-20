import { useState } from 'react';
import { transactionGroups } from '../../data/mockData';
import FilterTabs from '../ui/FilterTabs';

const filterTabs = [
  { label: '全部', value: 'all' },
  { label: '仅支出', value: 'expense' },
  { label: '仅收入', value: 'income' },
];

export default function TransactionList() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bento-card p-6 rounded-2xl shadow-bento">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="font-display text-[18px] text-white font-bold flex items-center gap-2">
            近期收支明细
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.06] text-gray-400 border border-white/10 font-normal">本周14笔</span>
          </h2>
          <p className="font-body text-[12px] text-gray-400 mt-0.5">精准记录每一笔日常资金去向与进账</p>
        </div>
        <FilterTabs tabs={filterTabs} activeTab={activeFilter} onTabChange={setActiveFilter} />
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="relative flex-1 glow-border-focus rounded-xl bg-[#14151a] border border-white/[0.08] transition-all">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
          <input
            className="w-full h-9 pl-9 pr-3 bg-transparent text-[13px] font-body text-gray-200 placeholder:text-gray-400 focus:outline-none"
            placeholder="搜索商户、备注或分类标签..."
            type="text"
          />
        </div>
        <button
          className="h-9 px-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 rounded-xl flex items-center gap-1.5 font-display text-[12px] transition-colors cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-gray-400">tune</span>
          <span className="hidden sm:inline">筛选</span>
        </button>
        <button
          className="h-9 px-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 rounded-xl flex items-center gap-1.5 font-display text-[12px] transition-colors cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-gray-400">download</span>
          <span className="hidden sm:inline">导出</span>
        </button>
      </div>

      {/* Transactions List */}
      <div className="flex flex-col divide-y divide-white/[0.06]">
        {transactionGroups.map((group) => {
          const filteredTransactions = group.transactions.filter((t) => {
            if (activeFilter === 'all') return true;
            return t.type === activeFilter;
          });

          if (filteredTransactions.length === 0) return null;

          return (
            <div key={group.label}>
              {/* Date Separator */}
              <div className="py-2.5 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${group.dotClass}`}></span>
                  {group.label}
                </span>
                <span className={group.summaryClass}>{group.summary}</span>
              </div>

              {/* Transactions */}
              {filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="py-3 flex items-center justify-between group hover:bg-white/[0.03] -mx-3 px-3 rounded-xl transition-all"
                  data-type={tx.type}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl ${tx.iconBgClass} border ${tx.iconBorderClass} ${tx.iconTextClass} flex items-center justify-center flex-shrink-0 group-hover:border-opacity-50 transition-colors ${tx.type === 'income' ? 'shadow-cyan-glow' : ''}`}>
                      <span className="material-symbols-outlined text-[20px]">{tx.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-[14px] text-white font-semibold">{tx.title}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${tx.paymentLabelClass} ${tx.type === 'income' ? 'font-bold' : ''}`}>
                          {tx.paymentLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-body text-[11.5px] text-gray-400">{tx.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="font-mono text-[11.5px] text-gray-400">{tx.time}</span>
                        {tx.note && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span className="font-body text-[11.5px] text-gray-400 italic">{tx.note}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className={tx.amountClass}>{tx.amountDisplay}</span>
                      <p className={tx.accountClass}>{tx.account}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                      <button className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white" type="button">
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button className="w-7 h-7 rounded-lg hover:bg-error/20 flex items-center justify-center text-gray-400 hover:text-error" type="button">
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Ledger Footer Link */}
      <div className="pt-4 flex items-center justify-between border-t border-white/[0.06] mt-2">
        <span className="font-mono text-[11.5px] text-gray-400">显示第 1 至 5 条 · 共 68 笔记录</span>
        <button
          className="font-display text-[12.5px] text-primary hover:text-white font-semibold flex items-center gap-1.5 transition-colors cursor-pointer group"
          type="button"
        >
          <span>查看完整流水账本</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

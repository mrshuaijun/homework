import { useState } from 'react';
import { expenseCategories, accountOptions } from '../../data/mockData';

export default function QuickRecord() {
  const [recordType, setRecordType] = useState<'expense' | 'income'>('expense');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(expenseCategories[0]?.name || '餐饮美食');
  const [selectedAccount, setSelectedAccount] = useState('wechat');
  const [date, setDate] = useState('2025-05-21');
  const [note, setNote] = useState('');

  const handleClear = () => {
    setAmount('');
  };

  const handleSave = () => {
    // mock save action
    if (!amount) return;
    alert(`账单已保存: ${recordType === 'expense' ? '支出' : '收入'} ¥${amount} (${selectedCategory})`);
    setAmount('');
    setNote('');
  };

  return (
    <div className="bento-card p-6 rounded-2xl shadow-bento relative overflow-hidden ring-1 ring-white/10">
      {/* Subtle top neon light accent */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-neon-sm"></span>
          <h2 className="font-display text-[17px] text-white font-bold">快捷记一笔</h2>
        </div>
        <span className="font-mono text-[11px] text-gray-400">智能入账交互</span>
      </div>

      {/* Segmented Pill Switcher */}
      <div className="bg-[#101115] p-1 rounded-xl flex items-center mb-5 border border-white/[0.08]">
        <button
          className={`flex-1 py-2 rounded-lg font-display text-[13px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            recordType === 'expense'
              ? 'text-black bg-primary shadow-neon-sm'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setRecordType('expense')}
          type="button"
        >
          <span className="material-symbols-outlined text-[17px]">remove_circle_outline</span>
          <span>支出流水</span>
        </button>
        <button
          className={`flex-1 py-2 rounded-lg font-display text-[13px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            recordType === 'income'
              ? 'text-black bg-primary shadow-neon-sm'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setRecordType('income')}
          type="button"
        >
          <span className="material-symbols-outlined text-[17px]">add_circle_outline</span>
          <span>收入进账</span>
        </button>
      </div>

      {/* Input Amount Field with Glowing Focus */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <label className="block font-mono text-[11.5px] uppercase tracking-wider text-gray-400">金额 (CNY)</label>
          <span className="font-mono text-[11px] text-primary">实时汇算</span>
        </div>
        <div className="relative flex items-center bg-[#101115] rounded-xl px-4 py-3.5 border border-white/10 glow-border-focus transition-all">
          <span className="font-mono text-[24px] text-primary font-bold mr-2 select-none">¥</span>
          <input
            className="w-full bg-transparent font-mono text-[28px] font-bold text-white placeholder:text-gray-600 focus:outline-none"
            placeholder="0.00"
            step="0.01"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amount && (
            <button
              className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="清除金额"
              type="button"
              onClick={handleClear}
            >
              <span className="material-symbols-outlined text-[18px]">backspace</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Grid Selector with Tactile Feel */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <label className="font-mono text-[11.5px] uppercase tracking-wider text-gray-400">交易分类</label>
          <button
            type="button"
            className="font-display text-[12px] text-primary hover:text-white transition-colors cursor-pointer flex items-center gap-0.5"
          >
            <span>管理分类</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {expenseCategories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`category-chip flex items-center gap-2 px-3 py-2.5 rounded-xl font-display text-[12px] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-black font-bold shadow-neon-sm'
                    : 'bg-[#14151a] hover:bg-white/[0.06] text-gray-300 border border-white/[0.08]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[17px] ${
                    isSelected ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Account & Date Dual Selector Row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-1.5">
            扣款/入账账户
          </label>
          <div className="relative">
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="w-full h-10 bg-[#14151a] hover:bg-white/[0.06] border border-white/[0.08] rounded-xl px-3 pr-8 font-body text-[12.5px] text-gray-200 focus:outline-none appearance-none cursor-pointer transition-colors"
            >
              {accountOptions.map((acc) => (
                <option key={acc.value} value={acc.value}>
                  {acc.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px]">
              unfold_more
            </span>
          </div>
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-1.5">
            交易日期
          </label>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-10 bg-[#14151a] hover:bg-white/[0.06] border border-white/[0.08] rounded-xl px-3 font-mono text-[12.5px] text-gray-200 focus:outline-none transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Note Input */}
      <div className="mb-5">
        <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-1.5">
          备注说明 (选填)
        </label>
        <div className="relative flex items-center rounded-xl bg-[#14151a] border border-white/[0.08] glow-border-focus">
          <span className="material-symbols-outlined text-gray-400 absolute left-3 text-[17px]">edit_note</span>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="例如：商务招待、打车返程或房租..."
            className="w-full h-10 pl-9 pr-3 bg-transparent font-body text-[12.5px] text-gray-200 placeholder:text-gray-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={handleSave}
        className="w-full h-11 bg-primary text-black hover:bg-[#d6ff1a] font-display text-[13.5px] font-bold rounded-xl flex items-center justify-center gap-2 shadow-neon-sm hover:shadow-neon-glow active:scale-[0.99] transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[19px]">check_circle</span>
        <span>保存此笔账单</span>
      </button>
    </div>
  );
}

interface FilterTab {
  label: string;
  value: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex items-center bg-[#15171c] p-1 rounded-xl border border-white/[0.08] self-start sm:self-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onTabChange(tab.value)}
          className={`px-3 py-1 rounded-lg font-mono text-[12px] cursor-pointer transition-all ${
            activeTab === tab.value
              ? 'bg-white/[0.1] text-white border border-white/10 shadow-xs font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

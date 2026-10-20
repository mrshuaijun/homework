export interface Transaction {
  id: string;
  type: 'expense' | 'income';
  title: string;
  category: string;
  icon: string;
  iconBgClass: string;
  iconBorderClass: string;
  iconTextClass: string;
  paymentMethod: string;
  paymentLabel: string;
  paymentLabelClass: string;
  time: string;
  note?: string;
  amount: number;
  amountDisplay: string;
  amountClass: string;
  account: string;
  accountClass: string;
}

export interface DateGroup {
  label: string;
  dotClass: string;
  summary: string;
  summaryClass: string;
  transactions: Transaction[];
}

export interface ExpenseCategory {
  name: string;
  icon: string;
}

export interface DonutSegment {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  dotClass: string;
  percentClass: string;
  textClass: string;
  amountClass: string;
  dashArray: string;
  dashOffset: string;
}

export interface BarData {
  label: string;
  value: number;
  displayValue: string;
  height: number;
  y: number;
  x: number;
  fill: string;
  isHighlight: boolean;
  highlightFilter?: string;
  labelClass: string;
  valueClass: string;
}

export const transactionGroups: DateGroup[] = [
  {
    label: '今天 · 5月21日',
    dotClass: 'bg-primary',
    summary: '支出 ¥218.00',
    summaryClass: 'font-mono text-[11.5px] text-gray-400',
    transactions: [
      {
        id: 't1',
        type: 'expense',
        title: '晚餐 - 和府捞面双人套餐',
        category: '餐饮美食',
        icon: 'restaurant',
        iconBgClass: 'bg-primary/10',
        iconBorderClass: 'border-primary/20',
        iconTextClass: 'text-primary',
        paymentMethod: 'wechat',
        paymentLabel: '微信支付',
        paymentLabelClass: 'bg-white/[0.06] border border-white/10 text-gray-400',
        time: '19:42',
        note: '"与同事聚餐"',
        amount: -98,
        amountDisplay: '-¥98.00',
        amountClass: 'font-mono text-[14.5px] font-bold text-white tracking-tight',
        account: '活期零钱',
        accountClass: 'font-mono text-[11px] text-gray-400 mt-0.5',
      },
      {
        id: 't2',
        type: 'expense',
        title: '地铁通勤乘车码（往返）',
        category: '交通出行',
        icon: 'directions_subway',
        iconBgClass: 'bg-secondary/10',
        iconBorderClass: 'border-secondary/20',
        iconTextClass: 'text-secondary',
        paymentMethod: 'alipay',
        paymentLabel: '支付宝',
        paymentLabelClass: 'bg-white/[0.06] border border-white/10 text-gray-400',
        time: '08:50',
        note: '"2号线通勤"',
        amount: -12,
        amountDisplay: '-¥12.00',
        amountClass: 'font-mono text-[14.5px] font-bold text-white tracking-tight',
        account: '花呗结算',
        accountClass: 'font-mono text-[11px] text-gray-400 mt-0.5',
      },
      {
        id: 't3',
        type: 'expense',
        title: '山姆会员店采购家庭日用品',
        category: '日常购物',
        icon: 'shopping_bag',
        iconBgClass: 'bg-white/[0.05]',
        iconBorderClass: 'border-white/10',
        iconTextClass: 'text-gray-300',
        paymentMethod: 'cmb',
        paymentLabel: '招行储蓄卡',
        paymentLabelClass: 'bg-white/[0.06] border border-white/10 text-gray-400',
        time: '14:15',
        amount: -108,
        amountDisplay: '-¥108.00',
        amountClass: 'font-mono text-[14.5px] font-bold text-white tracking-tight',
        account: '卡号 *8892',
        accountClass: 'font-mono text-[11px] text-gray-400 mt-0.5',
      },
    ],
  },
  {
    label: '昨天 · 5月20日',
    dotClass: 'bg-secondary',
    summary: '收入 ¥3,200.00 / 支出 ¥68.50',
    summaryClass: 'font-mono text-[11.5px] text-secondary',
    transactions: [
      {
        id: 't4',
        type: 'income',
        title: 'UI 设计项目阶段性结算款',
        category: '工资报酬',
        icon: 'currency_exchange',
        iconBgClass: 'bg-secondary/15',
        iconBorderClass: 'border-secondary/30',
        iconTextClass: 'text-secondary',
        paymentMethod: 'transfer',
        paymentLabel: '外快兼职',
        paymentLabelClass: 'bg-secondary/20 text-secondary border border-secondary/30',
        time: '16:30',
        note: '对公转账至招商',
        amount: 3200,
        amountDisplay: '+¥3,200.00',
        amountClass: 'font-mono text-[15px] font-bold text-secondary tracking-tight',
        account: '已入账',
        accountClass: 'font-mono text-[11px] text-secondary/70 mt-0.5',
      },
      {
        id: 't5',
        type: 'expense',
        title: 'IMAX 电影票两张（沙丘2）',
        category: '休闲娱乐',
        icon: 'movie',
        iconBgClass: 'bg-white/[0.05]',
        iconBorderClass: 'border-white/10',
        iconTextClass: 'text-gray-400',
        paymentMethod: 'wechat',
        paymentLabel: '微信支付',
        paymentLabelClass: 'bg-white/[0.06] border border-white/10 text-gray-400',
        time: '20:10',
        amount: -68.5,
        amountDisplay: '-¥68.50',
        amountClass: 'font-mono text-[14.5px] font-bold text-white tracking-tight',
        account: '零钱通扣款',
        accountClass: 'font-mono text-[11px] text-gray-400 mt-0.5',
      },
    ],
  },
];

export const expenseCategories: ExpenseCategory[] = [
  { name: '餐饮美食', icon: 'restaurant' },
  { name: '交通出行', icon: 'directions_subway' },
  { name: '日常购物', icon: 'shopping_bag' },
  { name: '住房物业', icon: 'home' },
  { name: '休闲娱乐', icon: 'sports_esports' },
  { name: '医疗健康', icon: 'medical_services' },
];

export const donutData: DonutSegment[] = [
  {
    category: '餐饮美食',
    percentage: 42,
    amount: '¥2,453.64',
    color: '#c3f400',
    dotClass: 'bg-primary shadow-neon-sm',
    percentClass: 'text-primary',
    textClass: 'text-gray-200',
    amountClass: 'text-gray-300',
    dashArray: '105.5 145.7',
    dashOffset: '0',
  },
  {
    category: '日常购物',
    percentage: 23,
    amount: '¥1,343.66',
    color: '#00ffa3',
    dotClass: 'bg-secondary shadow-cyan-glow',
    percentClass: 'text-secondary',
    textClass: 'text-gray-200',
    amountClass: 'text-gray-300',
    dashArray: '57.8 193.4',
    dashOffset: '-105.5',
  },
  {
    category: '住房物业',
    percentage: 18,
    amount: '¥1,051.56',
    color: '#a5b4fc',
    dotClass: 'bg-tertiary',
    percentClass: 'text-tertiary',
    textClass: 'text-gray-200',
    amountClass: 'text-gray-300',
    dashArray: '45.2 206',
    dashOffset: '-163.3',
  },
  {
    category: '交通出行',
    percentage: 11,
    amount: '¥642.62',
    color: '#38bdf8',
    dotClass: 'bg-[#38bdf8]',
    percentClass: 'text-[#38bdf8]',
    textClass: 'text-gray-200',
    amountClass: 'text-gray-300',
    dashArray: '27.6 223.6',
    dashOffset: '-208.5',
  },
  {
    category: '其他休闲',
    percentage: 6,
    amount: '¥350.52',
    color: '#4b5563',
    dotClass: 'bg-gray-500',
    percentClass: 'text-gray-400',
    textClass: 'text-gray-400',
    amountClass: 'text-gray-400',
    dashArray: '15.1 236.1',
    dashOffset: '-236.1',
  },
];

export const barChartData: BarData[] = [
  {
    label: '05-15 周四',
    value: 180,
    displayValue: '¥180',
    height: 75,
    y: 45,
    x: 35,
    fill: 'url(#dimBarGrad)',
    isHighlight: false,
    labelClass: '',
    valueClass: 'fill-gray-400 font-mono text-[11px]',
  },
  {
    label: '05-16 周五',
    value: 120,
    displayValue: '¥120',
    height: 50,
    y: 70,
    x: 135,
    fill: 'url(#dimBarGrad)',
    isHighlight: false,
    labelClass: '',
    valueClass: 'fill-gray-400 font-mono text-[11px]',
  },
  {
    label: '05-17 周六',
    value: 310,
    displayValue: '¥310',
    height: 105,
    y: 15,
    x: 235,
    fill: 'url(#dimBarGrad)',
    isHighlight: false,
    labelClass: '',
    valueClass: 'fill-gray-400 font-mono text-[11px]',
  },
  {
    label: '05-18 周日',
    value: 195,
    displayValue: '¥195',
    height: 80,
    y: 40,
    x: 335,
    fill: 'url(#dimBarGrad)',
    isHighlight: false,
    labelClass: '',
    valueClass: 'fill-gray-400 font-mono text-[11px]',
  },
  {
    label: '05-19 周一',
    value: 480,
    displayValue: '¥480',
    height: 120,
    y: 0,
    x: 435,
    fill: 'url(#neonBarGrad)',
    isHighlight: true,
    highlightFilter: 'drop-shadow(0 0 8px rgba(195,244,0,0.3))',
    labelClass: 'font-bold text-primary',
    valueClass: 'fill-primary font-mono text-[12px] font-bold',
  },
  {
    label: '05-20 周二',
    value: 68.5,
    displayValue: '¥68.5',
    height: 30,
    y: 90,
    x: 535,
    fill: 'url(#dimBarGrad)',
    isHighlight: false,
    labelClass: '',
    valueClass: 'fill-gray-400 font-mono text-[11px]',
  },
  {
    label: '今天 (周三)',
    value: 218,
    displayValue: '¥218',
    height: 85,
    y: 35,
    x: 635,
    fill: 'url(#activeBarGrad)',
    isHighlight: true,
    highlightFilter: 'drop-shadow(0 0 6px rgba(0,255,163,0.3))',
    labelClass: 'font-bold text-secondary',
    valueClass: 'fill-secondary font-mono text-[12px] font-bold',
  },
];

export const accountOptions = [
  { value: 'cmb', label: '招商银行储蓄卡 (*8892)' },
  { value: 'wechat', label: '微信零钱通' },
  { value: 'alipay', label: '支付宝余额/花呗' },
  { value: 'cash', label: '现金钞票' },
];

export const navItems = [
  { id: 'overview', label: '首页概览', icon: 'space_dashboard', active: true },
  { id: 'transactions', label: '收支明细', icon: 'receipt_long', active: false },
  { id: 'reports', label: '统计报表', icon: 'ssid_chart', active: false },
  { id: 'accounts', label: '账户管理', icon: 'account_balance_wallet', active: false },
  { id: 'settings', label: '系统设置', icon: 'tune', active: false },
];

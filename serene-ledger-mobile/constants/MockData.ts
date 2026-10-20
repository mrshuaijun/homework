import { Colors } from './Colors';

export interface Transaction {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  iconBgColor?: string;
  paymentMethod: string;
  time: string;
  amount: string;
  category: string;
  isIncome: boolean;
}

export interface CategoryBreakdownItem {
  name: string;
  percentage: number;
  color: string;
}

export interface TrendBar {
  label: string;
  height: number; // percentage of max height
  isHighlight: boolean;
  isToday: boolean;
  value?: string; // e.g. "¥420"
  highlightColor?: string;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    title: '和府捞面双人套餐',
    icon: 'restaurant',
    iconColor: Colors.primaryContainer,
    paymentMethod: '微信支付',
    time: '12:38 今天',
    amount: '-¥98.00',
    category: '餐饮美食',
    isIncome: false,
  },
  {
    id: '2',
    title: '地铁通勤乘车码',
    icon: 'subway',
    iconColor: Colors.secondaryContainer,
    paymentMethod: '花呗',
    time: '08:42 今天',
    amount: '-¥12.00',
    category: '交通出行',
    isIncome: false,
  },
  {
    id: '3',
    title: '山姆会员店日用品',
    icon: 'shopping-bag',
    iconColor: Colors.tertiaryFixed,
    paymentMethod: '卡号 *8892',
    time: '昨日 20:15',
    amount: '-¥108.00',
    category: '日常购物',
    isIncome: false,
  },
  {
    id: '4',
    title: 'UI设计阶段结算款',
    icon: 'payments',
    iconColor: Colors.secondaryContainer,
    iconBgColor: 'rgba(1, 229, 153, 0.2)',
    paymentMethod: '入账 招商银行',
    time: '昨日 17:00',
    amount: '+¥3,200.00',
    category: '兼职收入',
    isIncome: true,
  },
];

export const categoryBreakdown: CategoryBreakdownItem[] = [
  { name: '餐饮美食', percentage: 42, color: Colors.primaryContainer },
  { name: '日常购物', percentage: 23, color: Colors.secondaryContainer },
  { name: '住房物业', percentage: 18, color: Colors.tertiaryFixed },
  { name: '交通出行', percentage: 11, color: Colors.onSurfaceVariant },
];

export const trendBars: TrendBar[] = [
  { label: '四', height: 0.42, isHighlight: false, isToday: false },
  { label: '五', height: 0.58, isHighlight: false, isToday: false },
  { label: '六', height: 0.75, isHighlight: false, isToday: false },
  { label: '日', height: 0.50, isHighlight: false, isToday: false },
  {
    label: '一',
    height: 1.0,
    isHighlight: true,
    isToday: false,
    value: '¥420',
    highlightColor: Colors.primaryContainer,
  },
  { label: '二', height: 0.67, isHighlight: false, isToday: false },
  {
    label: '今',
    height: 0.83,
    isHighlight: true,
    isToday: true,
    value: '¥318',
    highlightColor: Colors.secondaryContainer,
  },
];

export const heroData = {
  greeting: '午好，李明！',
  healthScore: 94,
  healthMax: 100,
  monthlyExpense: '5,842.00',
  expenseDelta: '12.4%',
  monthlyIncome: '¥16,200.00',
  incomeSubtitle: '主业薪资 + 副业',
  netSavings: '¥10,358',
  savingsRate: '63.9%',
  savingsSubtitle: '跑赢 91% 同龄人',
  budgetPercent: 73,
  budgetRemaining: '¥2,158.00',
};

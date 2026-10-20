import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HeroSection from './components/dashboard/HeroSection';
import KPICards from './components/dashboard/KPICards';
import TransactionList from './components/dashboard/TransactionList';
import TrendChart from './components/dashboard/TrendChart';
import QuickRecord from './components/dashboard/QuickRecord';
import ExpenseBreakdown from './components/dashboard/ExpenseBreakdown';

export default function App() {
  return (
    <div className="tech-grid-bg antialiased min-h-screen selection:bg-primary selection:text-black">
      {/* Refined Neo-FinTech Left Sidebar */}
      <Sidebar />

      {/* Content Workspace */}
      <div className="pl-64">
        {/* Top Navigation Header */}
        <Header />

        {/* Main View Canvas */}
        <main className="relative pt-20 w-full px-8 pb-16">
          <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-7">
            {/* Top Greeting & Bento Hero Header */}
            <HeroSection />

            {/* Bento Grid: Metric KPI 4 Cards */}
            <KPICards />

            {/* Main Bento Layout Split: 2 Columns (7 Cols Left / 5 Cols Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
              {/* LEFT PANEL: Ledger Stream & Trend Charts (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <TransactionList />
                <TrendChart />
              </div>

              {/* RIGHT PANEL: Neo-Hardware Quick Entry + Radial Breakdown (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <QuickRecord />
                <ExpenseBreakdown />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

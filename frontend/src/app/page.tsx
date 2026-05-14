import Link from 'next/link';
import { LiveFeed } from '@/components/dashboard/LiveFeed';
import { AnalyticsChart } from '@/components/dashboard/AnalyticsChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Topbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            T
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">TrackerPro</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/dashboard" className="text-white hover:text-indigo-400 transition-colors">Dashboard</Link>
          <Link href="/campaigns" className="hover:text-indigo-400 transition-colors">Campaigns</Link>
          <Link href="/offers" className="hover:text-indigo-400 transition-colors">Offers</Link>
          <Link href="/reports" className="hover:text-indigo-400 transition-colors">Reports</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-[1600px] mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Overview</h1>
            <p className="text-slate-400">Real-time performance analytics for today.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]">
            + New Campaign
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Clicks" value="124,592" change="+14.2%" positive />
          <StatCard title="Conversions" value="3,842" change="+5.4%" positive />
          <StatCard title="Revenue" value="$42,590.50" change="+22.1%" positive />
          <StatCard title="ROI" value="142%" change="-2.4%" positive={false} />
        </div>

        {/* Chart & Live Feed Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Revenue & Clicks</h2>
              <select className="bg-slate-800 border border-white/10 rounded-md text-sm px-3 py-1 text-slate-300">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            <AnalyticsChart />
          </div>
          
          <div className="lg:col-span-1 h-[450px]">
            <LiveFeed />
          </div>
        </div>

        {/* Recent Campaigns Table */}
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-slate-900/50">
            <h2 className="font-semibold text-lg">Active Campaigns</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/80 text-slate-400 text-xs uppercase font-medium">
                <tr>
                  <th className="px-6 py-4">Campaign Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Clicks</th>
                  <th className="px-6 py-4 text-right">Conv.</th>
                  <th className="px-6 py-4 text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <TableRow name="US - Nutra Push" status="Active" clicks="45,200" conv="1,204" rev="$14,500" />
                <TableRow name="UK - Sweeps Native" status="Active" clicks="28,400" conv="840" rev="$8,400" />
                <TableRow name="DE - Crypto Search" status="Paused" clicks="12,100" conv="320" rev="$12,800" />
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

function StatCard({ title, value, change, positive }: { title: string, value: string, change: string, positive: boolean }) {
  return (
    <div className="p-6 rounded-xl bg-slate-900 border border-white/10 shadow-lg relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-slate-400 font-medium text-sm mb-2">{title}</h3>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
        <span className={`text-sm font-medium ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

function TableRow({ name, status, clicks, conv, rev }: { name: string, status: string, clicks: string, conv: string, rev: string }) {
  return (
    <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
      <td className="px-6 py-4 font-medium text-white">{name}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right font-mono">{clicks}</td>
      <td className="px-6 py-4 text-right font-mono">{conv}</td>
      <td className="px-6 py-4 text-right font-mono text-emerald-400">{rev}</td>
    </tr>
  );
}


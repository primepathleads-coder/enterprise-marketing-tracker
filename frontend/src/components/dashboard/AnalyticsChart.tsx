'use client';

import { useQuery } from '@tanstack/react-query';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AnalyticsChart() {
  const { data, isLoading } = useQuery({
    queryKey: ['timeseries'],
    queryFn: async () => {
      // Mocking fetch to backend API. React Query handles caching and polling.
      return [
        { time: '10:00', clicks: 4000, revenue: 2400 },
        { time: '11:00', clicks: 3000, revenue: 1398 },
        { time: '12:00', clicks: 2000, revenue: 9800 },
        { time: '13:00', clicks: 2780, revenue: 3908 },
        { time: '14:00', clicks: 1890, revenue: 4800 },
        { time: '15:00', clicks: 2390, revenue: 3800 },
        { time: '16:00', clicks: 3490, revenue: 4300 },
      ];
    }
  });

  if (isLoading) {
    return <div className="h-[300px] w-full animate-pulse bg-slate-800/30 rounded-lg"></div>;
  }

  return (
    <div className="h-[350px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
          <Area type="monotone" dataKey="clicks" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorClicks)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

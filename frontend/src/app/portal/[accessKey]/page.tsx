import { notFound } from 'next/navigation';
import { AnalyticsChart } from '@/components/dashboard/AnalyticsChart';

// In production, this would fetch from the backend via the accessKey
// to get the custom white-label settings (logo, colors) and allowed campaigns.
async function getPortalData(accessKey: string) {
  if (accessKey === 'demo-client') {
    return {
      name: "Acme Corp Tracker",
      primaryColor: "#0ea5e9", // Custom sky blue theme
      logoUrl: null,
      campaignIds: ["camp_1", "camp_2"]
    };
  }
  return null;
}

export default async function ClientPortal({ params }: { params: Promise<{ accessKey: string }> }) {
  const resolvedParams = await params;
  const portalData = await getPortalData(resolvedParams.accessKey);

  if (!portalData) {
    notFound();
  }

  // Inject CSS variables for white-labeling
  const customTheme = {
    '--theme-primary': portalData.primaryColor,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans" style={customTheme}>
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {portalData.logoUrl ? (
            <img src={portalData.logoUrl} alt="Logo" className="h-8" />
          ) : (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-lg" style={{ backgroundColor: 'var(--theme-primary)' }}>
              {portalData.name.charAt(0)}
            </div>
          )}
          <span className="text-xl font-semibold tracking-tight text-white">{portalData.name}</span>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Campaign Performance</h1>
            <p className="text-slate-400">Live reporting dashboard shared by your agency.</p>
          </div>
        </div>

        {/* Read-only limited stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Clicks" value="15,240" color="var(--theme-primary)" />
          <StatCard title="Conversions" value="342" color="var(--theme-primary)" />
          <StatCard title="Conversion Rate" value="2.24%" color="var(--theme-primary)" />
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-6">
          <h2 className="font-semibold text-lg mb-4">Traffic Trends</h2>
          <AnalyticsChart />
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string, value: string, color: string }) {
  return (
    <div className="p-6 rounded-xl bg-slate-900 border border-white/10 shadow-lg">
      <h3 className="text-slate-400 font-medium text-sm mb-2">{title}</h3>
      <span className="text-3xl font-bold tracking-tight" style={{ color }}>{value}</span>
    </div>
  );
}

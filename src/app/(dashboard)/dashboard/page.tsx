import Link from "next/link";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="headline-large mb-1">Dashboard Overview</h1>
          <p className="body-large text-on-surface-variant">Welcome back. Here&apos;s what&apos;s happening with your signals today.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl label-large hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          New Campaign
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-[2rem] bg-surface border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
            <span className="label-medium text-success text-sm">+12%</span>
          </div>
          <p className="label-medium text-on-surface-variant mb-1">Total Sent</p>
          <h2 className="headline-large text-2xl font-black">12,408</h2>
        </div>

        <div className="p-6 rounded-[2rem] bg-surface border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <span className="label-medium text-success text-sm">+5%</span>
          </div>
          <p className="label-medium text-on-surface-variant mb-1">Read Rate</p>
          <h2 className="headline-large text-2xl font-black">84.2%</h2>
        </div>

        <div className="p-6 rounded-[2rem] bg-surface border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center text-tertiary">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span className="label-medium text-success text-sm">+18%</span>
          </div>
          <p className="label-medium text-on-surface-variant mb-1">Replies</p>
          <h2 className="headline-large text-2xl font-black">2,156</h2>
        </div>

        <div className="p-6 rounded-[2rem] bg-surface border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            </div>
            <span className="label-medium text-error text-sm">-2%</span>
          </div>
          <p className="label-medium text-on-surface-variant mb-1">Failed</p>
          <h2 className="headline-large text-2xl font-black">42</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Campaigns */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
          <div className="flex justify-between items-center mb-6">
            <h3 className="title-medium text-xl">Active Campaigns</h3>
            <Link href="/dashboard/campaigns" className="label-medium text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
             {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 rounded-2xl border border-outline-variant hover:bg-surface-variant transition-colors flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </div>
                    <div>
                      <h4 className="label-large text-lg">Morning Follow-up #{i}</h4>
                      <p className="label-small text-on-surface-variant">Running • 1,200 recipients</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="label-large">84%</div>
                      <div className="label-small text-on-surface-variant">Sent</div>
                    </div>
                    <div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
          <h3 className="title-medium text-xl mb-6">Recent Activity</h3>
          <div className="space-y-6">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex gap-4 items-start relative pb-6 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary-container shrink-0 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="label-medium text-on-surface">Lead <span className="text-primary font-bold">+1 415...0123</span> replied to campaign</p>
                    <p className="label-small text-on-surface-variant">2 minutes ago</p>
                  </div>
                  {i < 5 && <div className="absolute left-4 top-8 w-px h-[calc(100%-8px)] bg-outline-variant"></div>}
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

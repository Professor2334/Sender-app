import Link from "next/link";
import EmptyState from "@/components/dashboard/EmptyState";

export default function OverviewView() {
  const activeCampaigns: any[] = [];
  const recentActivity: any[] = [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="headline-large mb-1">Dashboard Overview</h1>
          <p className="body-large text-on-surface-variant">Welcome back. Here&apos;s what&apos;s happening with your signals today.</p>
        </div>
        <Link 
          href="/dashboard?view=campaigns"
          className="px-6 py-3 bg-primary text-on-primary rounded-xl label-large hover:bg-primary/90 transition-all flex items-center gap-2 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          New Campaign
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Sent", value: "0", trend: "+0%", status: "neutral", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>, color: "primary" },
          { label: "Read Rate", value: "0%", trend: "+0%", status: "neutral", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, color: "secondary" },
          { label: "Replies", value: "0", trend: "+0%", status: "neutral", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, color: "tertiary" },
          { label: "Failed", value: "0", trend: "0%", status: "error", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>, color: "error" },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-[2rem] bg-surface border border-outline-variant transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl bg-${stat.color}-container flex items-center justify-center text-${stat.color}`}>
                 {stat.icon}
              </div>
              <span className={`label-medium text-${stat.status === 'error' ? 'error' : 'secondary'} text-sm`}>{stat.trend}</span>
            </div>
            <p className="label-medium text-on-surface-variant mb-1">{stat.label}</p>
            <h2 className="headline-large text-2xl font-black">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface border border-outline-variant flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="title-medium text-xl">Active Campaigns</h3>
            {activeCampaigns.length > 0 && <Link href="/dashboard?view=campaigns" className="label-medium text-primary hover:underline">View All</Link>}
          </div>
          
          {activeCampaigns.length > 0 ? (
            <div className="space-y-4">
               {activeCampaigns.map((campaign: any, i: number) => (
                  <div key={i} className="p-4 rounded-2xl border border-outline-variant hover:bg-surface-variant transition-colors flex items-center justify-between group cursor-pointer">
                  </div>
               ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <EmptyState 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>}
                title="No campaigns yet"
                description="Start your first outreach campaign to begin connecting with your leads."
                actionText="Create Campaign"
                actionHref="/dashboard?view=campaigns"
              />
            </div>
          )}
        </div>

        <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant flex flex-col min-h-[400px]">
          <h3 className="title-medium text-xl mb-6">Recent Activity</h3>
          
          {recentActivity.length > 0 ? (
            <div className="space-y-6">
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <EmptyState 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="M6 18H2v2h4v-2zm14 0h-4v2h4v-2zM12 4V2h2v2h-2zm6 0V2h2v2h-2zm-6 4V6h2v2h-2zm6 4v-2h2v2h-2z"/></svg>}
                title="No activity logs yet"
                description="Your recent campaign actions and lead interactions will appear here."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import EmptyState from "@/components/dashboard/EmptyState";

export default function AnalyticsView() {
  const hasData = false;
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="headline-large mb-1">Campaign Analytics</h1>
        <p className="body-large text-on-surface-variant">Deep dive into your outreach performance and conversion metrics.</p>
      </div>
      {hasData ? (
        <>
      <div className="flex gap-4 p-4 rounded-2xl bg-surface border border-outline-variant items-center justify-between">
         <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl bg-primary text-on-primary label-medium shadow-md">Last 7 Days</button>
            <button className="px-4 py-2 rounded-xl border border-outline-variant hover:bg-surface-variant transition-all label-medium">Last 30 Days</button>
            <button className="px-4 py-2 rounded-xl border border-outline-variant hover:bg-surface-variant transition-all label-medium">Last 90 Days</button>
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface border border-outline-variant h-[400px] flex flex-col">
          <h3 className="title-medium text-xl mb-8">Delivery Performance</h3>
        </div>

        <div className="space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
              <h4 className="label-large text-on-surface-variant mb-6 uppercase tracking-widest">Read Rate</h4>
           </div>
        </div>
      </div>
        </>
      ) : (
        <div className="bg-surface border border-outline-variant rounded-[2.5rem] py-16">
          <EmptyState 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
            title="No analytics yet"
            description="Once you launch your first campaign, your performance and engagement metrics will appear here."
            actionText="Go to Campaigns"
            actionHref="/dashboard?view=campaigns"
          />
        </div>
      )}
    </div>
  );
}

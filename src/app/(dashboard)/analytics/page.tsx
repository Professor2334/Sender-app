export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="headline-large mb-1">Campaign Analytics</h1>
        <p className="body-large text-on-surface-variant">Deep dive into your outreach performance and conversion metrics.</p>
      </div>

      {/* Date Range Selector Placeholder */}
      <div className="flex gap-4 p-4 rounded-2xl bg-surface border border-outline-variant items-center justify-between">
         <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl bg-primary text-on-primary label-medium shadow-md">Last 7 Days</button>
            <button className="px-4 py-2 rounded-xl border border-outline-variant hover:bg-surface-variant transition-all label-medium">Last 30 Days</button>
            <button className="px-4 py-2 rounded-xl border border-outline-variant hover:bg-surface-variant transition-all label-medium">Last 90 Days</button>
         </div>
         <div className="flex items-center gap-2 label-medium text-on-surface-variant">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Mar 09 - Mar 16, 2026
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Conversion Chart Placeholder */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface border border-outline-variant h-[400px] flex flex-col">
          <h3 className="title-medium text-xl mb-8">Delivery Performance</h3>
          <div className="flex-1 flex items-end gap-2 pb-8 px-4">
             {[40, 65, 45, 90, 75, 55, 80].map((h, i) => (
               <div key={i} className="flex-1 bg-primary-container rounded-t-xl hover:bg-primary transition-all cursor-pointer relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-outline px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
               </div>
             ))}
          </div>
          <div className="flex justify-between px-4 text-on-surface-variant label-small">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Breakdown Stats */}
        <div className="space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
              <h4 className="label-large text-on-surface-variant mb-6 uppercase tracking-widest">Read Rate</h4>
              <div className="flex items-end gap-4 mb-4">
                 <span className="text-5xl font-black">84.2%</span>
                 <span className="label-medium text-success mb-2">+2.4%</span>
              </div>
              <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[84%]" />
              </div>
           </div>
           
           <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
              <h4 className="label-large text-on-surface-variant mb-6 uppercase tracking-widest">Reply Rate</h4>
              <div className="flex items-end gap-4 mb-4">
                 <span className="text-5xl font-black">17.6%</span>
                 <span className="label-medium text-success mb-2">+1.1%</span>
              </div>
              <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[17%]" />
              </div>
           </div>
        </div>
      </div>

      {/* Message Status Breakdown Table */}
      <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant">
        <h3 className="title-medium text-xl mb-8">Outbound Signal Status</h3>
        <div className="grid md:grid-cols-5 gap-8">
           {[
             { label: 'Queued', value: '156', color: 'bg-outline-variant' },
             { label: 'Sent', value: '12,408', color: 'bg-primary' },
             { label: 'Delivered', value: '11,920', color: 'bg-secondary' },
             { label: 'Read', value: '10,245', color: 'bg-success' },
             { label: 'Failed', value: '42', color: 'bg-error' },
           ].map((s, i) => (
             <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-full ${s.color}`} />
                   <span className="label-medium text-on-surface-variant">{s.label}</span>
                </div>
                <div className="text-2xl font-bold">{s.value}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

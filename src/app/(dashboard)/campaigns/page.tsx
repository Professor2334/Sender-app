export default function CampaignsPage() {
  const campaigns = [
    { id: 1, name: "Webinar Follow-up", status: "Running", progress: 84, sent: 1008, recipients: 1200, date: "Mar 16, 2026" },
    { id: 2, name: "Product Launch", status: "Scheduled", progress: 0, sent: 0, recipients: 5000, date: "Mar 18, 2026" },
    { id: 3, name: "Re-engagement Jan", status: "Completed", progress: 100, sent: 842, recipients: 842, date: "Jan 12, 2026" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running": return "bg-primary-container text-primary";
      case "Scheduled": return "bg-secondary-container text-secondary";
      case "Completed": return "bg-success-container text-success";
      case "Paused": return "bg-warning-container text-warning";
      case "Failed": return "bg-error-container text-error";
      default: return "bg-surface-variant text-on-surface-variant";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="headline-large mb-1">Campaigns</h1>
          <p className="body-large text-on-surface-variant">Monitor and manage your active and scheduled outreach.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl label-large hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          Launch Campaign
        </button>
      </div>

      <div className="space-y-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant hover:border-primary/50 transition-all flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                <h3 className="title-medium text-2xl">{campaign.name}</h3>
                <span className={`px-4 py-1 rounded-full text-xs font-bold ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              <p className="body-large text-on-surface-variant">Scheduled for {campaign.date} • {campaign.recipients} total recipients</p>
            </div>

            <div className="w-full md:w-64 space-y-4">
              <div className="flex justify-between items-end">
                <span className="label-large text-lg">{campaign.progress}%</span>
                <span className="label-medium text-on-surface-variant">{campaign.sent} / {campaign.recipients} sent</span>
              </div>
              <div className="h-2.5 bg-outline-variant rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    campaign.status === "Running" ? "bg-primary animate-[pulse_3s_infinite]" : 
                    campaign.status === "Completed" ? "bg-success" : "bg-outline"
                  }`} 
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="p-4 rounded-2xl bg-surface-variant text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </button>
              <button className="p-4 rounded-2xl bg-surface-variant text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

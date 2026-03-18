export default function TemplatesPage() {
  const templates = [
    { id: 1, name: "Welcome Signal", body: "Hi {{first_name}}, thanks for showing interest in Send Signal!...", category: "Onboarding", date: "Mar 16, 2026" },
    { id: 2, name: "Follow-up Offer", body: "Hey {{first_name}}, we noticed you haven't finished...", category: "Nurture", date: "Mar 15, 2026" },
    { id: 3, name: "Webinar Invite", body: "Don't miss out on our upcoming session on {{date}}...", category: "Events", date: "Mar 14, 2026" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="headline-large mb-1">Message Templates</h1>
          <p className="body-large text-on-surface-variant">Manage your outreach content and dynamic placeholders.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl label-large hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          New Template
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="p-8 rounded-[2rem] bg-surface border border-outline-variant hover:border-primary/50 transition-all group flex flex-col h-full bg-surface-container-lowest">
            <div className="flex justify-between items-start mb-6">
              <div className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant label-small">
                {template.category}
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg hover:bg-surface-variant text-on-surface-variant"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>
                <button className="p-2 rounded-lg hover:bg-error-container text-error"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
              </div>
            </div>
            
            <h3 className="title-medium text-xl mb-3">{template.name}</h3>
            <p className="text-on-surface-variant body-large bg-surface-variant/20 p-4 rounded-2xl italic flex-grow mb-6 line-clamp-3 font-serif">
              &quot;{template.body}&quot;
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
              <span className="label-small text-on-surface-variant">Last updated {template.date}</span>
              <button className="p-2 rounded-lg bg-primary-container text-primary hover:bg-primary hover:text-on-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </button>
            </div>
          </div>
        ))}

        {/* Create Card */}
        <button className="p-8 rounded-[2rem] border-2 border-dashed border-outline-variant hover:border-primary/50 hover:bg-primary/5 transition-all group flex flex-col items-center justify-center gap-4 h-full min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <div className="text-center">
            <p className="label-large text-lg">Create New Template</p>
            <p className="label-medium text-on-surface-variant">Draft your next signal</p>
          </div>
        </button>
      </div>
    </div>
  );
}

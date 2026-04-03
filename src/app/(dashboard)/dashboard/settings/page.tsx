export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div>
        <h1 className="headline-large mb-1">Settings</h1>
        <p className="body-large text-on-surface-variant">Manage your account, API connections, and workspace preferences.</p>
      </div>

      {/* Tabs Placeholder */}
      <div className="flex gap-8 border-b border-outline-variant">
        <button className="px-4 py-4 border-b-2 border-primary text-primary label-large">Profile</button>
        <button className="px-4 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all label-large">WhatsApp API</button>
        <button className="px-4 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all label-large">Notifications</button>
        <button className="px-4 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-all label-large">Billing</button>
      </div>

      <div className="space-y-12">
        {/* Profile Section */}
        <section className="space-y-6">
          <h3 className="title-medium text-xl">Account Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="label-large text-on-surface-variant">Display Name</label>
                <input type="text" defaultValue="Admin User" className="w-full px-4 py-3 rounded-xl border border-outline bg-surface-container-low focus:border-primary outline-none transition-all" />
             </div>
             <div className="space-y-2">
                <label className="label-large text-on-surface-variant">Email Address</label>
                <input type="email" defaultValue="admin@acme.inc" className="w-full px-4 py-3 rounded-xl border border-outline bg-surface-container-low focus:border-primary outline-none transition-all" />
             </div>
             <div className="space-y-2">
                <label className="label-large text-on-surface-variant">Company Name</label>
                <input type="text" defaultValue="Acme Inc." className="w-full px-4 py-3 rounded-xl border border-outline bg-surface-container-low focus:border-primary outline-none transition-all" />
             </div>
             <div className="space-y-2">
                <label className="label-large text-on-surface-variant">Timezone</label>
                <select className="w-full px-4 py-3 rounded-xl border border-outline bg-surface-container-low focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                   <option>UTC (London)</option>
                   <option>EST (New York)</option>
                   <option>PST (Los Angeles)</option>
                </select>
             </div>
          </div>
        </section>

        {/* API Connection Card */}
        <section className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-primary-container rounded-3xl flex items-center justify-center text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.5 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z"/></svg>
              </div>
              <div className="space-y-1">
                 <h4 className="title-medium text-lg">WhatsApp Business API</h4>
                 <p className="body-large text-on-surface-variant">Connected to +44 20 7946 0000</p>
                 <div className="flex items-center gap-2 text-success label-small font-bold">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    ACTIVE & VERIFIED
                 </div>
              </div>
           </div>
           <button className="px-6 py-3 border border-outline rounded-xl label-large hover:bg-surface-variant transition-all">Configure API</button>
        </section>

        <div className="flex justify-end gap-4 pt-8 border-t border-outline-variant">
           <button className="px-8 py-3 rounded-xl border border-outline label-large hover:bg-surface-variant transition-all">Discard Changes</button>
           <button className="px-8 py-3 rounded-xl bg-primary text-on-primary label-large shadow-lg hover:shadow-primary/20 transition-all">Save Preferences</button>
        </div>
      </div>
    </div>
  );
}

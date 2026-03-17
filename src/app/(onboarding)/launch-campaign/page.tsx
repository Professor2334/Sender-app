"use client";

import { useState } from "react";

export default function LaunchCampaignPage() {
  const [loading, setLoading] = useState(false);

  async function handleLaunch() {
    setLoading(true);
    // Simulate launch
    await new Promise(r => setTimeout(r, 2500));
    window.location.href = "/dashboard";
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-primary rounded-[2.5rem] flex items-center justify-center text-on-primary mb-8 mx-auto shadow-2xl shadow-primary/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
      </div>

      <h1 className="headline-large text-center mb-4">Launch First Campaign</h1>
      <p className="body-large text-on-surface-variant text-center mb-12">
        You're one step away from sending your first signal. Review your campaign settings below.
      </p>

      <div className="bg-surface border border-outline-variant rounded-3xl overflow-hidden mb-12">
        <div className="p-8 border-b border-outline-variant bg-surface-container-low">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="label-small text-on-surface-variant uppercase tracking-wider">Campaign Name</span>
              <p className="title-medium text-lg">First Signal Outreach</p>
            </div>
            <div className="space-y-1">
              <span className="label-small text-on-surface-variant uppercase tracking-wider">Recipients</span>
              <p className="title-medium text-lg">124 Leads</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="label-large text-on-surface-variant">Batch Size</label>
              <div className="flex items-center gap-4">
                <input type="range" className="flex-1 accent-primary" defaultValue={20} />
                <span className="title-medium w-8 text-right">20</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="label-large text-on-surface-variant">Delay (Seconds)</label>
              <div className="flex items-center gap-4">
                <input type="range" className="flex-1 accent-primary" defaultValue={1} />
                <span className="title-medium w-8 text-right">1</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-variant/50 border border-outline-variant flex gap-4 items-start">
            <div className="mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            </div>
            <p className="label-medium text-on-surface-variant">
              Estimated duration: 2 minutes. Messages will be sent sequentially to respect WhatsApp business limits.
            </p>
          </div>
        </div>
      </div>

      <button 
        onClick={handleLaunch}
        disabled={loading}
        className="w-full py-6 bg-primary text-on-primary rounded-[2rem] label-large text-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 scale-105"
      >
        {loading ? (
             <>
              <svg className="animate-spin h-7 w-7 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Launching...
            </>
          ) : (
            <>
              Launch Campaign Now
            </>
          )}
      </button>

      <div className="mt-8 text-center">
        <p className="label-medium text-on-surface-variant flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-success"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          Compliance Check Passed
        </p>
      </div>
    </div>
  );
}

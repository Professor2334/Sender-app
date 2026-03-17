"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConnectWhatsAppPage() {
  const [loading, setLoading] = useState(false);

  async function handleConnect() {
    setLoading(true);
    // Simulate connection
    await new Promise(r => setTimeout(r, 2000));
    window.location.href = "/onboarding/import-leads";
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-primary-container rounded-3xl flex items-center justify-center text-primary mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.5 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z"/></svg>
      </div>
      
      <h1 className="headline-large mb-4">Connect WhatsApp Business</h1>
      <p className="body-large text-on-surface-variant mb-8 leading-relaxed">
        Send Signal uses the official WhatsApp Business API to ensure your messages are delivered reliably and your account stays compliant.
      </p>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-surface border border-outline-variant space-y-4">
          <div className="flex gap-4">
            <div className="mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p className="body-large text-on-surface">Verified Business API integration</p>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p className="body-large text-on-surface">High delivery & read rates</p>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p className="body-large text-on-surface">Official green badge support</p>
          </div>
        </div>

        <button 
          onClick={handleConnect}
          disabled={loading}
          className="w-full py-5 bg-[#25D366] text-white rounded-2xl label-large text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-[#25D366]/20"
        >
          {loading ? (
             <>
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connecting...
            </>
          ) : (
            <>
              Connect WhatsApp Account
            </>
          )}
        </button>
        
        <button 
          onClick={() => window.location.href = "/onboarding/import-leads"}
          className="w-full py-4 border border-outline rounded-2xl label-large text-on-surface-variant hover:bg-surface-variant transition-colors"
        >
          Setup manually with API keys
        </button>
      </div>
    </div>
  );
}

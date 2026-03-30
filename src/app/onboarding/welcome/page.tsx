"use client";

import { useState } from "react";

export default function WelcomePage() {
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setLoading(true);
    // Smooth transition
    await new Promise(r => setTimeout(r, 600));
    window.location.href = "/onboarding/connect-whatsapp";
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-xl mx-auto text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-primary mb-10 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
        </svg>
      </div>

      <span className="label-large text-primary tracking-[0.2em] uppercase mb-4 block">Welcome to SendSignal</span>
      <h1 className="display-small mb-6 text-on-surface">Let&apos;s get you started</h1>
      
      <p className="body-large text-on-surface-variant mb-12 leading-relaxed">
        Experience the power of automated WhatsApp outreach. We&apos;ll help you connect your account, import your leads, and orient you with your new dashboard in just a few simple steps.
      </p>

      <div className="space-y-4">
        <button 
          onClick={handleNext}
          disabled={loading}
          className="w-full py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
        >
          {loading ? (
             <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : (
            <>
              Get Started
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" x2="19" y1="12" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>

        <p className="label-small text-on-surface-variant">
          Estimated setup time: 3-5 minutes
        </p>
      </div>
    </div>
  );
}

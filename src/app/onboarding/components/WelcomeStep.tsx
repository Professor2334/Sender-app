"use client";

import { useState } from "react";

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <h1 className="title-large mb-6 text-on-surface font-bold">Let&apos;s get you set up</h1>
      
      <p className="body-small text-outline mb-12 leading-relaxed">
        Send Signal helps you automate personalized WhatsApp outreach campaigns. We&apos;ll guide you through connecting your account, importing leads, and setting up your first message template.
      </p>

      <div className="space-y-4">
        <button 
          onClick={handleNext}
          disabled={loading}
          className="w-full py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
             <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : (
            <>
              Next
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
      </div>
    </div>
  );
}

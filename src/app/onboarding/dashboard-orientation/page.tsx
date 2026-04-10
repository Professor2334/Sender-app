"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import confettiData from "../../../../public/animations/confetti.json";

export default function DashboardOrientationPage() {
  const [loading, setLoading] = useState(false);

  const handleFinish = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    window.location.href = "/dashboard";
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto text-center">
      <div className="w-full h-64 flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center">
           <Lottie 
            animationData={confettiData} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 w-20 h-20 bg-primary-container rounded-3xl flex items-center justify-center text-primary shadow-xl shadow-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
      </div>

      <h1 className="display-small mb-6 font-bold text-on-surface">You&apos;re All Set!</h1>
      <p className="body-large text-on-surface-variant mb-12 max-w-md mx-auto leading-relaxed">
        Welcome aboard! Your workspace is fully configured and ready for action. You can now start creating your first campaign, importing more leads, or setting up your message templates.
      </p>

      <button 
        onClick={handleFinish}
        disabled={loading}
        className="w-full py-6 bg-primary text-on-primary rounded-2xl label-large text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer group"
      >
        {loading ? (
           <>
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Preparing your dashboard...
          </>
        ) : (
          <>
            Go to Dashboard
            <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </>
        )}
      </button>
    </div>
  );
}

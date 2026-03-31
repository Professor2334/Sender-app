"use client";

import { useState } from "react";

interface OrientationStepProps {
  onFinish: () => void;
  onBack?: () => void;
}

export default function OrientationStep({ onFinish, onBack }: OrientationStepProps) {
  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: "Real-time Analytics",
      description: "Track message delivery, read rates, and replies as they happen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
      )
    },
    {
      title: "Campaign Management",
      description: "Create, schedule, and automate your outreach with ease.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
      )
    },
    {
      title: "Lead Organization",
      description: "Segment and manage your contacts for maximum impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  const handleFinish = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    onFinish();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto">
      <div className="w-16 h-16 bg-primary-container rounded-3xl flex items-center justify-center text-primary mb-8 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>

      <h1 className="title-large mb-6 text-on-surface font-bold text-center">You&apos;re All Set!</h1>
      <p className="body-small text-outline mb-12 text-center leading-relaxed">
        We&apos;ve configured your workspace and imported your leads. Here&apos;s a quick look at what you can do next.
      </p>

      <div className="space-y-6 mb-12">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-6 p-6 rounded-2xl bg-surface border border-outline-variant hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-primary transition-colors shrink-0">
              {feature.icon}
            </div>
            <div className="space-y-1">
              <h3 className="title-medium text-on-surface font-bold">{feature.title}</h3>
              <p className="body-medium text-on-surface-variant">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-8">
        {onBack && (
          <button 
            onClick={onBack}
            disabled={loading}
            className="px-8 py-5 border border-outline rounded-2xl label-large text-xl text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer"
          >
            Back
          </button>
        )}
        <button 
          onClick={handleFinish}
          disabled={loading}
          className="flex-1 py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
             <>
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Taking you home...
            </>
          ) : (
            <>
              Go to Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
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

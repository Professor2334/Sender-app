"use client";

import { useState } from "react";

interface ImportStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function ImportStep({ onNext, onBack }: ImportStepProps) {
  const [hasFile, setHasFile] = useState(false);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setHasFile(true);
    } else {
      setHasFile(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-secondary-container rounded-3xl flex items-center justify-center text-secondary mb-8 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
      </div>

      <div className="space-y-6">
        <h1 className="title-large mb-6 text-on-surface font-bold text-center">Import Your Leads</h1>
        <p className="body-small text-outline mb-12 text-center leading-relaxed">
          Upload a CSV file containing your lead data. We&apos;ll help you map the columns to Send Signal fields.
        </p>
        
        <div className="border-2 border-dashed border-outline-variant rounded-[2rem] p-12 text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer relative group">
          <input 
            type="file" 
            accept=".csv" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={handleUpload}
          />
          <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface-variant"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><polyline points="9 15 12 12 15 15"/></svg>
          </div>
          <div className="label-large text-lg mb-1">Click to upload CSV</div>
          <p className="label-medium text-on-surface-variant">Recommended: phone, first_name, source</p>
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          {onBack && (
            <button 
              onClick={onBack}
              className="px-8 py-5 border border-outline rounded-2xl label-large text-xl text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer"
            >
              Back
            </button>
          )}
          <button 
            onClick={onNext}
            className="flex-1 py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center gap-3 group cursor-pointer"
          >
            {hasFile ? "Next" : "Skip"}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <line x1="5" x2="19" y1="12" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

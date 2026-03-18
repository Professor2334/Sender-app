"use client";

import { useState } from "react";

type Step = "UPLOAD" | "MAP" | "PREVIEW" | "SUCCESS";

export default function ImportLeadsPage() {
  const [step, setStep] = useState<Step>("UPLOAD");

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setTimeout(() => setStep("MAP"), 600);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-secondary-container rounded-3xl flex items-center justify-center text-secondary mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
      </div>

      {step === "UPLOAD" && (
        <div className="space-y-6">
          <h1 className="headline-large">Import Your Leads</h1>
          <p className="body-large text-on-surface-variant">
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
        </div>
      )}

      {step === "MAP" && (
        <div className="space-y-8">
          <h1 className="headline-large">Map Your Columns</h1>
          <p className="body-large text-on-surface-variant">
            Connect your CSV headers to Send Signal&apos;s lead fields.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 items-center p-4 rounded-2xl bg-surface border border-outline-variant">
              <div className="label-large">Phone Number *</div>
              <select className="bg-surface-variant px-4 py-2 rounded-xl outline-none border border-transparent focus:border-primary transition-colors">
                <option>mobile_phone</option>
                <option>tel</option>
                <option>contact</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center p-4 rounded-2xl bg-surface border border-outline-variant">
              <div className="label-large">First Name</div>
              <select className="bg-surface-variant px-4 py-2 rounded-xl outline-none border border-transparent focus:border-primary transition-colors">
                <option>first_name</option>
                <option>name</option>
                <option>given_name</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center p-4 rounded-2xl bg-surface border border-outline-variant">
              <div className="label-large">Source</div>
              <select className="bg-surface-variant px-4 py-2 rounded-xl outline-none border border-transparent focus:border-primary transition-colors">
                <option>lead_source</option>
                <option>utm_source</option>
                <option>campaign</option>
              </select>
            </div>
          </div>

          <button 
            onClick={() => setStep("PREVIEW")}
            className="w-full py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            Review & Validate
          </button>
        </div>
      )}

      {step === "PREVIEW" && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="headline-large mb-2">Preview Leads</h1>
              <p className="body-large text-on-surface-variant"> We found 124 leads in your file.</p>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-success-container text-success label-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              All rows valid
            </div>
          </div>

          <div className="border border-outline-variant rounded-[1.5rem] overflow-hidden bg-surface">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-variant">
                  <th className="p-4 label-large border-b border-outline-variant">Phone</th>
                  <th className="p-4 label-large border-b border-outline-variant">Name</th>
                  <th className="p-4 label-large border-b border-outline-variant">Source</th>
                </tr>
              </thead>
              <tbody className="body-large">
                <tr className="border-b border-outline-variant last:border-0">
                  <td className="p-4">+1 415 555 0123</td>
                  <td className="p-4">David</td>
                  <td className="p-4">Twitter Ad</td>
                </tr>
                <tr className="border-b border-outline-variant last:border-0 opacity-60">
                  <td className="p-4">+1 415 555 0124</td>
                  <td className="p-4">Sarah</td>
                  <td className="p-4">Meta Ad</td>
                </tr>
                 <tr className="border-b border-outline-variant last:border-0 opacity-30">
                  <td className="p-4">+1 415 555 0125</td>
                  <td className="p-4">Marcus</td>
                  <td className="p-4">Direct</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button 
            onClick={() => window.location.href = "/onboarding/create-template"}
            className="w-full py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            Import 124 Leads
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function CreateTemplatePage() {
  const [templateName, setTemplateName] = useState("Welcome Signal");
  const [body, setBody] = useState("Hi {{first_name}}, thanks for showing interest in Send Signal! How can we help you today?");

  const placeholders = ["first_name", "last_name", "source", "phone"];

  function insertPlaceholder(p: string) {
    setBody(b => b + ` {{${p}}}`);
  }

  const renderedPreview = body.replace(/{{first_name}}/g, "David").replace(/{{last_name}}/g, "Smith").replace(/{{source}}/g, "Twitter Ad").replace(/{{phone}}/g, "+1 415 555 0123");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 bg-tertiary-container rounded-3xl flex items-center justify-center text-tertiary mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      </div>

      <h1 className="headline-large mb-4">Create Your First Template</h1>
      <p className="body-large text-on-surface-variant mb-8">
         Craft your message. Use placeholders to automatically inject lead details into every message.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="label-large text-on-surface-variant">Template Name</label>
            <input 
              type="text" 
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
              placeholder="e.g. Welcome Message"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="label-large text-on-surface-variant">Message Body</label>
              <span className="label-small text-on-surface-variant">120/1024</span>
            </div>
            <textarea 
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <div className="space-y-3">
            <span className="label-medium text-on-surface-variant">Insert Placeholder</span>
            <div className="flex flex-wrap gap-2">
              {placeholders.map(p => (
                <button 
                  key={p}
                  onClick={() => insertPlaceholder(p)}
                  className="px-3 py-1.5 rounded-full bg-surface-variant text-on-surface-variant label-medium hover:bg-outline-variant hover:text-on-surface transition-all border border-transparent hover:border-outline"
                >
                  {`{{${p}}}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="label-large text-on-surface-variant">Live Preview</span>
          <div className="aspect-square max-w-[320px] mx-auto rounded-[3rem] bg-surface-container-high border-8 border-surface p-6 shadow-2xl relative overflow-hidden flex flex-col gap-4">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
             <div className="flex items-center gap-3 border-b border-outline-variant pb-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary-container"></div>
                <div className="flex-1">
                  <div className="h-3 w-24 bg-surface-variant rounded mb-1"></div>
                  <div className="h-2 w-16 bg-outline-variant rounded"></div>
                </div>
              </div>
              <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed relative z-10 animate-in fade-in zoom-in-95 duration-300">
                {renderedPreview}
              </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <button 
          onClick={() => window.location.href = "/onboarding/launch-campaign"}
          className="w-full py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:shadow-xl hover:shadow-primary/20 transition-all"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

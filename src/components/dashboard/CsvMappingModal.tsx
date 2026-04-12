"use client";

import React, { useState, useEffect } from "react";

export interface CsvMappingModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  rawHeaders: string[];
  sampleData: string[][]; // The first few rows for preview
  onConfirm: (mappings: Record<string, string>) => void;
}

export const SYSTEM_FIELDS = [
  { value: "phone", label: "Phone Number (Required)" },
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
  { value: "email", label: "Email" },
  { value: "source", label: "Source" },
  { value: "tags", label: "Tags" },
  { value: "custom", label: "Custom Field" },
  { value: "", label: "Ignore this column" }
];

export default function CsvMappingModal({
  isOpen,
  onClose,
  fileName,
  rawHeaders,
  sampleData,
  onConfirm
}: CsvMappingModalProps) {
  // mapping state: key = CSV header, value = system field value
  const [mappings, setMappings] = useState<Record<string, string>>({});

  // Auto-guess headers on mount
  useEffect(() => {
     if (isOpen && rawHeaders.length > 0) {
        const initialMapping: Record<string, string> = {};
        rawHeaders.forEach(header => {
           const lower = header.toLowerCase().replace(/[^a-z0-9]/g, '');
           if (lower.includes('phone') || lower.includes('mobile') || lower.includes('number')) {
              initialMapping[header] = 'phone';
           } else if (lower.includes('first')) {
              initialMapping[header] = 'first_name';
           } else if (lower.includes('last')) {
              initialMapping[header] = 'last_name';
           } else if (lower.includes('email')) {
              initialMapping[header] = 'email';
           } else if (lower.includes('source')) {
              initialMapping[header] = 'source';
           } else if (lower.includes('name')) {
              initialMapping[header] = 'first_name';
           } else {
              initialMapping[header] = '';
           }
        });
        setMappings(initialMapping);
     }
  }, [isOpen, rawHeaders]);

  if (!isOpen) return null;

  const handleMappingChange = (header: string, field: string) => {
    setMappings(prev => ({ ...prev, [header]: field }));
  };

  const hasPhoneMapped = Object.values(mappings).includes('phone');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-scrim/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-surface border border-outline-variant rounded-[2rem] w-full max-w-4xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-outline-variant bg-surface-container-lowest">
          <div>
            <h2 className="headline-small text-xl font-bold mb-1">Map Columns</h2>
            <p className="body-medium text-on-surface-variant flex items-center gap-2">
               File: <span className="font-mono bg-surface-variant px-2 py-0.5 rounded text-xs">{fileName}</span>
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Content (Table) */}
        <div className="p-6 sm:p-8 overflow-auto flex-1 bg-surface-container-lowest">
          <div className="mb-6">
             <p className="label-large text-on-surface-variant">Match your CSV columns to Send Signal fields.</p>
             {!hasPhoneMapped && (
               <div className="mt-4 p-4 rounded-xl bg-error-container text-error label-medium flex items-center gap-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                 Please map at least one column to the required <strong>Phone Number</strong> field to continue.
               </div>
             )}
          </div>

          <div className="border border-outline-variant rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-variant/50">
                <tr>
                  <th className="p-4 label-large border-b border-outline-variant w-1/3 text-on-surface">CSV Column Header</th>
                  <th className="p-4 label-large border-b border-outline-variant w-1/3 text-on-surface">Send Signal Field</th>
                  <th className="p-4 label-large border-b border-outline-variant text-on-surface">Sample Data</th>
                </tr>
              </thead>
              <tbody className="body-medium bg-surface">
                {rawHeaders.map((header, idx) => (
                  <tr key={idx} className="border-b border-outline-variant last:border-0 hover:bg-surface-variant/20 transition-colors">
                    <td className="p-4">
                       <span className="font-mono bg-surface-variant/50 px-2 py-1 rounded text-sm text-on-surface font-semibold">{header}</span>
                    </td>
                    <td className="p-4">
                      <select 
                        value={mappings[header] || ""}
                        onChange={(e) => handleMappingChange(header, e.target.value)}
                        className={`w-full p-2.5 rounded-xl border ${mappings[header] === 'phone' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant bg-surface-container-low'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all label-medium`}
                      >
                        {SYSTEM_FIELDS.map(field => (
                          <option key={field.value} value={field.value}>{field.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-4 text-on-surface-variant font-mono text-sm max-w-[200px] truncate">
                       {sampleData[0] ? sampleData[0][idx] : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-outline-variant label-large hover:bg-surface-variant transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(mappings)}
            disabled={!hasPhoneMapped}
            className="px-8 py-3 bg-primary text-on-primary rounded-xl label-large hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
          >
            Review & Import
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

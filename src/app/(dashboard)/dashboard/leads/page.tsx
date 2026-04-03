"use client";

import React, { useRef, useState } from "react";
import EmptyState from "@/components/dashboard/EmptyState";
import CsvMappingModal from "@/components/dashboard/CsvMappingModal";
import Papa from "papaparse";

export default function LeadsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [leads, setLeads] = useState<any[]>([]);
  const [isMappingModalOpen, setIsMappingModalOpen] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [rawHeaders, setRawHeaders] = useState<string[]>([]);
  const [sampleData, setSampleData] = useState<string[][]>([]);
  const [rawCsvData, setRawCsvData] = useState<any[]>([]);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCsvFile(file);
      // Parse first few rows for the mapping preview
      Papa.parse(file, {
        header: false,
        preview: 4,
        skipEmptyLines: true,
        complete: (results) => {
          const data = results.data as string[][];
          if (data.length > 0) {
            setRawHeaders(data[0]);
            setSampleData(data.slice(1));
            
            // Re-parse completely with headers for data mapping later
            Papa.parse(file, {
              header: true,
              skipEmptyLines: true,
              complete: (fullResults) => {
                setRawCsvData(fullResults.data);
                setIsMappingModalOpen(true);
                // Reset input in case they select same file again
                if (fileInputRef.current) fileInputRef.current.value = "";
              }
            });
          }
        }
      });
    }
  };

  const handleConfirmMapping = (mappings: Record<string, string>) => {
    // Reverse mapping so key = SystemField, value = CSV Header
    const reverseMappings: Record<string, string> = {};
    Object.keys(mappings).forEach(csvHeader => {
      const sysField = mappings[csvHeader];
      if (sysField) reverseMappings[sysField] = csvHeader;
    });
    
    const phoneHeader = reverseMappings["phone"];
    if (!phoneHeader) return;
    
    const newLeads: any[] = [];
    const existingPhones = new Set(leads.map(l => l.phone));
    
    rawCsvData.forEach((row, index) => {
      let phone = row[phoneHeader]?.trim();
      if (!phone) return; // skip rows missing phone number
      
      // Normalize to E.164 (roughly) by keeping only digits and plus
      phone = phone.replace(/[^0-9+]/g, '');
      if (!phone.startsWith('+')) phone = '+' + phone;
      if (phone.length < 7) return; // Skip highly invalid numbers
      
      // Duplicate prevention rule
      if (existingPhones.has(phone)) return;
      existingPhones.add(phone);
      
      const first = reverseMappings["first_name"] ? row[reverseMappings["first_name"]?.trim()] : "";
      const last = reverseMappings["last_name"] ? row[reverseMappings["last_name"]?.trim()] : "";
      const source = reverseMappings["source"] ? row[reverseMappings["source"]?.trim()] : "CSV Import";
      const name = [first, last].filter(Boolean).join(" ") || "Unknown";
      
      newLeads.push({
        id: Date.now() + index,
        name: name,
        email: reverseMappings["email"] ? row[reverseMappings["email"]] : "-",
        phone: phone,
        status: "New",
        source: source,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'}) 
      });
    });
    
    setLeads(prev => [...prev, ...newLeads]);
    setIsMappingModalOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-primary-container text-primary";
      case "Contacted": return "bg-secondary-container text-secondary";
      case "Replied": return "bg-tertiary-container text-tertiary";
      case "Interested": return "bg-success-container text-success";
      case "Converted": return "bg-success text-on-primary";
      case "Unsubscribed": return "bg-error-container text-error";
      case "Bounced": return "bg-outline-variant text-on-surface-variant";
      default: return "bg-surface-variant text-on-surface-variant";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <input 
        type="file" 
        accept=".csv" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
      <div className="flex justify-between items-end">
        <div>
          <h1 className="headline-large mb-1">Lead Management</h1>
          <p className="body-large text-on-surface-variant">View, organize, and segment your contacts for outreach.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-outline rounded-xl label-large hover:bg-surface-variant transition-all flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Export
          </button>
          <button 
            onClick={handleImportClick}
            className="px-6 py-3 bg-primary text-on-primary rounded-xl label-large hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Import Leads
          </button>
        </div>
      </div>

      {leads.length > 0 ? (
        <>
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-surface border border-outline-variant">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Search by name, phone, email..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low focus:outline-none focus:border-primary transition-all label-medium"
              />
            </div>
            <select className="px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low label-medium outline-none focus:border-primary transition-all min-w-[150px]">
              <option>All Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Replied</option>
              <option>Interested</option>
              <option>Converted</option>
            </select>
            <select className="px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low label-medium outline-none focus:border-primary transition-all min-w-[150px]">
              <option>All Sources</option>
              <option>Twitter Ad</option>
              <option>Meta Ad</option>
              <option>Direct</option>
            </select>
          </div>

      {/* Table Section */}
      <div className="bg-surface border border-outline-variant rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-variant/30">
                <th className="p-4 pl-8 label-large border-b border-outline-variant">Lead Name</th>
                <th className="p-4 label-large border-b border-outline-variant">Phone Number</th>
                <th className="p-4 label-large border-b border-outline-variant">Status</th>
                <th className="p-4 label-large border-b border-outline-variant">Source</th>
                <th className="p-4 label-large border-b border-outline-variant">Added Date</th>
                <th className="p-4 pr-8 label-large border-b border-outline-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="body-large">
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-variant/20 transition-colors group">
                  <td className="p-4 pl-8">
                    <div className="flex flex-col">
                      <span className="label-large text-on-surface">{lead.name}</span>
                      <span className="label-small text-on-surface-variant lowercase">{lead.email}</span>
                    </div>
                  </td>
                  <td className="p-4 label-medium text-on-surface-variant font-mono">{lead.phone}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 label-medium text-on-surface-variant">{lead.source}</td>
                  <td className="p-4 label-medium text-on-surface-variant">{lead.date}</td>
                  <td className="p-4 pr-8 text-right">
                    <button className="p-2 rounded-lg hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-outline-variant flex justify-between items-center bg-surface-container-low">
          <span className="label-medium text-on-surface-variant">Showing 1 to 7 of 124 leads</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-variant disabled:opacity-30 transition-all" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="px-3 py-2 rounded-lg bg-primary text-on-primary label-medium shadow-md">1</button>
            <button className="px-3 py-2 rounded-lg border border-outline-variant hover:bg-surface-variant label-medium transition-all">2</button>
            <button className="px-3 py-2 rounded-lg border border-outline-variant hover:bg-surface-variant label-medium transition-all">3</button>
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-variant transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          </div>
        </div>
        </>
      ) : (
        <div className="bg-surface border border-outline-variant rounded-[2.5rem] py-16">
          <EmptyState 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            title="No leads yet"
            description="Import contacts via CSV or add them manually to start building your audience."
            actionText="Import Leads"
            actionClick={handleImportClick}
            hideArrow={true}
          />
        </div>
      )}

      {csvFile && (
        <CsvMappingModal 
          isOpen={isMappingModalOpen}
          onClose={() => setIsMappingModalOpen(false)}
          fileName={csvFile.name}
          rawHeaders={rawHeaders}
          sampleData={sampleData}
          onConfirm={handleConfirmMapping}
        />
      )}
    </div>
  );
}

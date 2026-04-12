"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const handleLogoutClick = () => {
    setIsDropdownOpen(false);
    setIsModalOpen(true);
  };

  const confirmLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
      router.refresh();
    } catch (e) {
      console.error("Failed to logout");
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <header className="h-20 border-b border-outline-variant bg-surface px-8 flex items-center justify-between sticky top-0 z-30 bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center gap-4 flex-1">
           <div className="relative max-w-md w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Search leads, campaigns..." 
                className="w-full pl-10 pr-4 py-4 rounded-full border border-outline-variant bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all label-medium"
              />
           </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button title="Notifications" className="text-on-surface-variant hover:text-primary transition-colors relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-6 border-l border-outline-variant relative z-40">
            <div className="text-right flex flex-col hidden sm:flex">
              <span className="label-large text-on-surface">Admin User</span>
              <span className="label-small text-on-surface-variant">Acme Inc.</span>
            </div>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all focus:outline-none relative z-50"
              title="Profile Settings"
            >
              A
            </button>
            
            {/* Dropdown Menu Overlay */}
            {isDropdownOpen && (
              <>
                {mounted && createPortal(
                  <div 
                    className="fixed inset-0 bg-surface-variant/20 backdrop-blur-[2px] z-20" 
                    onClick={() => setIsDropdownOpen(false)}
                  />,
                  document.body
                )}
                <div className="absolute right-0 top-14 w-48 bg-surface rounded-xl border border-outline-variant py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-outline-variant mb-1 sm:hidden">
                     <p className="label-large text-on-surface truncate">Admin User</p>
                     <p className="label-small text-on-surface-variant truncate">Acme Inc.</p>
                  </div>
                  <button 
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 text-error hover:bg-error-container hover:text-on-error-container transition-colors label-large flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                    Log out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {isModalOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in" onClick={() => !isLoggingOut && setIsModalOpen(false)}></div>
          <div className="bg-surface border border-outline-variant rounded-2xl w-full max-w-sm p-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
             <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
             </div>
             <h3 className="title-large text-on-surface mb-2">Sign out?</h3>
             <p className="body-medium text-on-surface-variant mb-6">
                Are you sure you want to sign out of your account? You will need to enter your credentials to access the dashboard again.
             </p>
             <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  disabled={isLoggingOut}
                  className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface-variant label-large hover:bg-surface-variant transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                 <button 
                  onClick={confirmLogout}
                  disabled={isLoggingOut}
                  className="px-4 py-2 rounded-xl bg-error text-on-error label-large hover:bg-error/90 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                     <>
                        <div className="w-4 h-4 rounded-full border-2 border-on-error border-t-transparent animate-spin"></div>
                        Signing out
                     </>
                  ) : "Yes, log out"}
                </button>
             </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

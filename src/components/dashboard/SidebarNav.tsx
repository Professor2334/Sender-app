"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SidebarNavContent() {
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "overview";

  const navItems = [
    { name: "Overview", viewId: "overview", href: "/dashboard?view=overview", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { name: "Leads", viewId: "leads", href: "/dashboard?view=leads", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="3"/></svg> },
    { name: "Templates", viewId: "templates", href: "/dashboard?view=templates", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg> },
    { name: "Campaigns", viewId: "campaigns", href: "/dashboard?view=campaigns", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg> },
    { name: "Analytics", viewId: "analytics", href: "/dashboard?view=analytics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
  ];

  return (
    <>
      <nav className="flex-1 px-4 space-y-[14px]">
        {navItems.map((item) => {
          const isActive = currentView === item.viewId;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl label-large transition-all group ${isActive ? 'bg-primary-container text-primary font-semibold border border-primary/10' : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border border-transparent'}`}
            >
              <span className={`transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-outline-variant mt-auto">
         <Link 
            href="/dashboard?view=settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl label-large transition-all group ${currentView === 'settings' ? 'bg-primary-container text-primary font-semibold border border-primary/10' : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border border-transparent'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors ${currentView === 'settings' ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            Settings
          </Link>
      </div>
    </>
  );
}

export default function SidebarNav() {
  return (
    <Suspense fallback={<div className="flex-1 px-4 space-y-[14px]"></div>}>
      <SidebarNavContent />
    </Suspense>
  );
}

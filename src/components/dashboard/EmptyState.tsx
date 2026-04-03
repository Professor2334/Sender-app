"use client";

import React from "react";
import Link from "next/link";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  actionClick?: () => void;
  hideArrow?: boolean;
}

export default function EmptyState({ 
  icon, 
  title, 
  description, 
  actionText, 
  actionHref,
  actionClick,
  hideArrow
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-surface-container-low rounded-[2rem] flex items-center justify-center text-on-surface-variant mb-6 border border-outline-variant shadow-sm transition-transform hover:scale-110">
        {icon}
      </div>
      <h3 className="headline-large text-2xl font-bold text-on-surface mb-2">{title}</h3>
      <p className="body-large text-on-surface-variant max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      {/* Handle Link vs Button action */}
      {actionText && (actionHref || actionClick) && (
        actionHref ? (
          <Link 
            href={actionHref}
            className="px-8 py-4 bg-primary text-on-primary rounded-xl label-large text-lg hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2 group"
          >
            {actionText}
            {!hideArrow && (
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="20" height="20" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
                 className="group-hover:translate-x-1 transition-transform"
               >
                 <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
               </svg>
            )}
          </Link>
        ) : (
          <button 
            onClick={actionClick}
            className="px-8 py-4 bg-primary text-on-primary rounded-xl label-large text-lg hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            {actionText}
            {!hideArrow && (
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="20" height="20" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
                 className="group-hover:translate-x-1 transition-transform"
               >
                 <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
               </svg>
            )}
          </button>
        )
      )}
    </div>
  );
}

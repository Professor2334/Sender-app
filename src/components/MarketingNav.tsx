"use client";

import Link from "next/link";
import { useState } from "react";

export function MarketingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/50 backdrop-blur-md sticky top-0 z-50 border-transparent">
      {/* Desktop & Mobile Header Row */}
      <div className="flex items-center justify-between px-2 md:px-24 py-6">
        <Link href="/" className="flex items-center gap-3 text-on-surface font-bold text-2xl tracking-tight z-10 w-auto md:w-[180px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22 11 13 2 9 22 2z" />
          </svg>
          Send Signal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-8 pointer-events-auto">
            <Link href="#features" className="text-on-surface-variant hover:text-primary transition-colors body-large">Features</Link>
            <Link href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors body-large">Pricing</Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center justify-end z-10 w-[180px]">
          <Link href="/signup" className="px-6 py-2 bg-primary text-on-primary rounded-full label-large hover:bg-tertiary hover:text-on-tertiary transition-colors whitespace-nowrap">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden z-10 p-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 px-2 bg-surface border-t border-outline-variant absolute top-full left-0 w-full shadow-lg border-b">
          <Link href="#features" className="text-on-surface-variant hover:text-primary transition-colors body-large w-full text-center py-2" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors body-large w-full text-center py-2" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/signup" className="mt-4 px-8 py-3 bg-primary text-on-primary rounded-full label-large hover:bg-tertiary hover:text-on-tertiary transition-colors shadow-lg" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

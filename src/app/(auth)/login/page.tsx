"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate server action
    await new Promise(r => setTimeout(r, 1200));
    window.location.href = "/dashboard";
  }

  return (
    <div className="min-h-screen flex items-stretch bg-surface-container-lowest">
      {/* Visual Side (Left for variety) */}
      <div className="hidden lg:flex flex-1 bg-secondary p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-lg text-center relative z-10">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 mx-auto backdrop-blur-lg border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h2 className="text-secondary-container mb-6 headline-large">Secure & Reliable Signals</h2>
          <p className="text-secondary-container/80 body-large text-xl">
            Access your dashboard with end-to-end security and full control over your WhatsApp communication.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="text-primary font-bold text-2xl mb-12 block">
            Send Signal
          </Link>
          
          <h1 className="headline-large mb-2 text-on-surface">Welcome Back</h1>
          <p className="body-large text-on-surface-variant mb-8">
            Enter your credentials to access your campaign dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="label-large text-on-surface-variant">Email Address</label>
              <input 
                id="email"
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="label-large text-on-surface-variant">Password</label>
                <Link href="/forgot-password" size="small" className="label-medium text-primary hover:underline">Forgot password?</Link>
              </div>
              <input 
                id="password"
                type="password" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-primary text-on-primary rounded-xl label-large text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : "Log In"}
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant body-large">
            Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

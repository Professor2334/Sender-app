"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate server action
    await new Promise(r => setTimeout(r, 1500));
    window.location.href = "/onboarding/connect-whatsapp";
  }

  return (
    <div className="min-h-screen flex items-stretch bg-surface-container-lowest">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="text-primary font-bold text-2xl mb-12 block">
            Send Signal
          </Link>
          
          <h1 className="headline-large mb-2 text-on-surface">Create an Account</h1>
          <p className="body-large text-on-surface-variant mb-8">
            Start sending personalized signals to your leads today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="company" className="label-large text-on-surface-variant">Company Name *</label>
              <input 
                id="company"
                type="text" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
                placeholder="Acme Inc."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="label-large text-on-surface-variant">Email Address *</label>
              <input 
                id="email"
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="label-large text-on-surface-variant">Password *</label>
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
                  Creating Account...
                </>
              ) : "Sign Up"}
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant body-large">
            Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual/Testimonial */}
      <div className="hidden lg:flex flex-1 bg-primary p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-lg text-center relative z-10">
          <div className="w-20 h-20 bg-on-primary/20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          </div>
          <h2 className="text-on-primary mb-6 headline-large">Join the WhatsApp Outreach Revolution</h2>
          <p className="text-primary-container body-large text-xl">
            "Send Signal helped us increase our webinar conversion rate by 40% in just two weeks. It's the only tool that feels truly personal at scale."
          </p>
          <div className="mt-8 text-on-primary/80 label-large">
            — Sarah Chen, Growth at TechScale
          </div>
        </div>
      </div>
    </div>
  );
}

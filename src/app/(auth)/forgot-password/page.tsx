"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending an email
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-stretch bg-surface-container-lowest">
      {/* Visual Side */}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
          </div>
          <h2 className="text-secondary-container mb-6 headline-large">Account Recovery</h2>
          <p className="text-secondary-container/80 body-large text-xl">
            Get back to running your outreach campaigns quickly securely.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="flex items-center gap-3 text-on-surface font-bold text-2xl tracking-tight mb-5 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22 11 13 2 9 22 2z" />
            </svg>
            Send Signal
          </Link>
          
          <h1 className="title-18 mb-2 text-on-surface" style={{letterSpacing: "-0.05em"}}>Reset Password</h1>
          <p className="text-on-surface-variant body-medium mb-6">Enter your email address to receive password reset instructions.</p>

          {success ? (
            <div className="p-6 rounded-xl border border-success/40 bg-success/10 text-success label-medium text-center">
              We&apos;ve sent a password reset link to your email. Please check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="label-large text-on-surface-variant/70">Work email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-neutral hover:border-outline focus:outline-none focus:border-primary hover:bg-surface-variant/30 focus:scale-[1.01] focus:shadow-lg transition-all duration-1000 text-on-surface"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-primary text-on-primary rounded-xl label-large text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Reset Link"}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-on-surface-variant body-large">
            Remember your password? <Link href="/login" className="text-primary font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

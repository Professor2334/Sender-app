"use client";

import { useState } from "react";

interface ConnectStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function ConnectStep({ onNext, onBack }: ConnectStepProps) {
  const [loading, setLoading] = useState(false);
  const [phoneId, setPhoneId] = useState("");
  const [phoneIdTouched, setPhoneIdTouched] = useState(false);
  const [token, setToken] = useState("");
  const [tokenTouched, setTokenTouched] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isInteracting, setIsInteracting] = useState(false);

  // Relaxed validation: Just check if not empty for development bypass
  const phoneIdValid = phoneId.trim().length > 0;
  const tokenValid = token.trim().length > 0;

  async function handleNext() {
    setPhoneIdTouched(true);
    setTokenTouched(true);
    setServerError("");

    if (!phoneIdValid || !tokenValid) return;

    setLoading(true);
    try {
      const res = await fetch("/api/whatsapp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumberId: phoneId.trim(),
          accessToken: token.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Verification failed. Please check your credentials.");
        return;
      }
      onNext();
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto text-left">
      
      <h1 className="title-large mb-6 text-on-surface font-bold text-center">Connect WhatsApp Business API</h1>
      <p className="body-small text-outline mb-12 text-center leading-relaxed">
        Send Signal uses the official WhatsApp Business API to ensure your messages are delivered reliably and your account stays compliant.
      </p>

      <div className="space-y-6 mb-12">
        <div className="space-y-2">
          <label className="label-large text-on-surface-variant/70">WhatsApp Phone Number ID</label>
          <input 
            type="text" 
            placeholder="e.g. 1042738491..."
            value={phoneId}
            onChange={(e) => { setPhoneId(e.target.value); setServerError(""); }}
            onBlur={() => setPhoneIdTouched(true)}
            onFocus={() => setIsInteracting(true)}
            className={`w-full px-4 py-3 rounded-xl border bg-neutral focus:outline-none focus:bg-primary-container hover:bg-surface-variant/30 focus:scale-[1.01] focus:shadow-lg transition-all duration-300 text-on-surface ${
              phoneIdTouched && !phoneIdValid
                ? "border-error focus:border-error"
                : phoneIdTouched && phoneIdValid
                ? "border-outline-variant focus:border-primary"
                : "border-outline-variant focus:border-primary"
            }`}
          />
          {phoneIdTouched && !phoneId && (
            <p className="text-error label-medium mt-1">Field must not be empty</p>
          )}
          {phoneIdTouched && phoneId && !phoneIdValid && (
            <p className="text-error label-medium mt-1">Phone Number ID must be a numeric ID (10+ digits)</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="label-large text-on-surface-variant/70">System User Access Token</label>
          <input 
            type="text" 
            placeholder="EAAGm0..."
            value={token}
            onChange={(e) => { setToken(e.target.value); setServerError(""); }}
            onBlur={() => setTokenTouched(true)}
            onFocus={() => setIsInteracting(true)}
            className={`w-full px-4 py-3 rounded-xl border bg-neutral focus:outline-none focus:bg-primary-container hover:bg-surface-variant/30 focus:scale-[1.01] focus:shadow-lg transition-all duration-300 text-on-surface ${
              tokenTouched && !tokenValid
                ? "border-error focus:border-error"
                : tokenTouched && tokenValid
                ? "border-outline-variant focus:border-primary"
                : "border-outline-variant focus:border-primary"
            }`}
          />
          {tokenTouched && !token && (
            <p className="text-error label-medium mt-1">Field must not be empty</p>
          )}
          {tokenTouched && token && !tokenValid && (
            <p className="text-error label-medium mt-1">Token must start with &quot;EAA&quot; and be a valid Meta system token</p>
          )}
        </div>

        {serverError && (
          <div className="p-3 rounded-xl border border-error/40 bg-error/10 text-error label-medium">
            {serverError}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {onBack && (
          <button 
            onClick={onBack}
            disabled={loading}
            className="px-8 py-5 border border-outline rounded-2xl label-large text-xl text-on-surface-variant hover:bg-surface-variant transition-colors cursor-pointer"
          >
            Back
          </button>
        )}
        <button 
          onClick={() => {
            if (isInteracting || phoneId || token) {
              handleNext();
            } else {
              onNext();
            }
          }}
          disabled={loading}
          className="flex-1 py-5 bg-primary text-on-primary rounded-2xl label-large text-xl hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center gap-3 group disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
             <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : (
            <>
              {isInteracting || phoneId || token ? "Next" : "Skip"}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" x2="19" y1="12" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

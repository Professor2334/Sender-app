"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

  const passwordRequirements = [
    { label: "Password must be 8 characters", test: (p: string) => p.length >= 8 },
    { label: "Password must contain a number", test: (p: string) => /\d/.test(p) },
    { label: "Password must contain a special character", test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
  ];

  function validateEmail(email: string) {
    if (!email) return "Enter a valid company email address";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid company email address";
    
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain === "gmail.com" || domain === "yahoo.com") {
      return "This is not a valid company email address";
    }
    return "";
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setServerError("");

    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors(prev => ({ ...prev, email: emailError }));
    }

    if (name === "password") {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    if (name === "email") {
      if (!value) {
        setErrors(prev => ({ ...prev, email: "field must not be empty" }));
      } else {
        setErrors(prev => ({ ...prev, email: validateEmail(value) }));
      }
    }
    if (name === "password") {
      if (!value) {
        setErrors(prev => ({ ...prev, password: "field must not be empty" }));
      }
    }
  }

  const isFieldValid = (name: keyof typeof values) => {
    if (!values[name] || errors[name]) return false;
    if (name === "password") {
      return passwordRequirements.every(req => req.test(values.password));
    }
    return true;
  };

  const getInputClass = (name: keyof typeof values) => {
    const base = "w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-primary hover:bg-surface-variant/30 focus:scale-[1.01] focus:shadow-lg transition-all duration-300 text-on-surface";
    const status = errors[name] 
      ? "border-error bg-neutral" 
      : isFieldValid(name) 
        ? "border-outline-variant bg-primary-container"
        : "border-outline-variant bg-neutral";
    return `${base} ${status}`;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const emailError = validateEmail(values.email);
    const passwordValid = passwordRequirements.every(req => req.test(values.password));
    let passwordError = "";
    
    if (!values.password) {
      passwordError = "field must not be empty";
    } else if (!passwordValid) {
      passwordError = "Please meet all password requirements";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      setTouched({ email: true, password: true });
      return;
    }

    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
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
          <h2 className="text-secondary-container mb-6 headline-large">Secure &amp; Reliable Signals</h2>
          <p className="text-secondary-container/80 body-large text-xl">
            Access your dashboard with end-to-end security and full control over your WhatsApp communication.
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
          
          <h1 className="title-18 mb-[15px] text-on-surface" style={{letterSpacing: "-0.05em"}}>Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <label htmlFor="email" className="label-large text-on-surface-variant/70">Work email *</label>
              <input 
                id="email"
                name="email"
                type="email" 
                value={values.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getInputClass("email")}
              />
              {errors.email && <p className="text-error label-medium mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="label-large text-on-surface-variant/70">Password *</label>
                <Link href="/forgot-password" className="label-medium text-primary hover:underline">Forgot password?</Link>
              </div>
              <input 
                id="password"
                name="password"
                type="password" 
                value={values.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getInputClass("password")}
              />

              {/* Password Requirements Checklist */}
              {values.password && (
                <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                  {passwordRequirements.map((req, i) => {
                    const met = req.test(values.password);
                    return (
                      <div key={i} className={`flex items-center gap-2 transition-colors duration-300 ${met ? "text-success" : "text-error"}`}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${met ? "bg-success" : "bg-error"}`}>
                          {met ? (
                            <svg className="w-3 h-3 text-on-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-on-error" />
                          )}
                        </div>
                        <span className="label-medium font-medium">
                          {req.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
              {errors.password && !values.password && <p className="text-error label-medium mt-1">{errors.password}</p>}
            </div>

            {serverError && (
              <div className="p-3 rounded-xl border border-error/40 bg-error/10 text-error label-medium">
                {serverError}
              </div>
            )}

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
                  Logging in...
                </>
              ) : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant body-large">
            Don&apos;t have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Create Account for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

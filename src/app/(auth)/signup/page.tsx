"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ company: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ company?: string; email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ company?: boolean; email?: boolean; password?: boolean }>({});

  const passwordRequirements = [
    { label: "Password must be a minimum of 8 characters", test: (p: string) => p.length >= 8 },
    { label: "Password must contain a number", test: (p: string) => /\d/.test(p) },
    { label: "Password must contain a special character", test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
    { label: "Password must contain an uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
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

    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors(prev => ({ ...prev, email: emailError }));
    }

    if (name === "company" && touched.company) {
      setErrors(prev => ({ ...prev, company: value ? "" : "This field cannot be empty" }));
    }

    if (name === "password") {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    if (name === "company") {
      setErrors(prev => ({ ...prev, company: value ? "" : "This field cannot be empty" }));
    }
    if (name === "email") {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "password") {
      setErrors(prev => ({ ...prev, password: value ? "" : "field must not be empty" }));
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const emailError = validateEmail(values.email);
    const companyError = values.company ? "" : "This field cannot be empty";
    const passwordValid = passwordRequirements.every(req => req.test(values.password));
    let passwordError = "";
    if (!values.password) {
      passwordError = "field must not be empty";
    } else if (!passwordValid) {
      passwordError = "Please meet all password requirements";
    }

    if (emailError || companyError || passwordError) {
      setErrors({ email: emailError, company: companyError, password: passwordError });
      setTouched({ email: true, company: true, password: true });
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    window.location.href = "/onboarding";
  }

  return (
    <div className="min-h-screen flex items-stretch bg-surface-container-lowest">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="flex items-center gap-3 text-on-surface font-bold text-2xl tracking-tight mb-5 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22 11 13 2 9 22 2z" />
            </svg>
            Send Signal
          </Link>
          
          <h1 className="title-18 mb-[15px] text-on-surface" style={{letterSpacing: "-0.05em"}}>Create Account</h1>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <label htmlFor="company" className="label-large text-on-surface-variant/70">Company Name *</label>
              <input 
                id="company"
                name="company"
                type="text" 
                value={values.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getInputClass("company")}
              />
              {errors.company && <p className="text-error label-medium mt-1">{errors.company}</p>}
            </div>

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

            <div className="space-y-2">
              <label htmlFor="password" className="label-large text-on-surface-variant/70">Password *</label>
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
                  Creating Account...
                </>
              ) : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant body-large">
            Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
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
            &quot;Send Signal helped us increase our webinar conversion rate by 40% in just two weeks. It&apos;s the only tool that feels truly personal at scale.&quot;
          </p>
          <div className="mt-8 text-on-primary/80 label-large">
            — Sarah Chen, Growth at TechScale
          </div>
        </div>
      </div>
    </div>
  );
}

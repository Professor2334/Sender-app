import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "For individuals testing their first signals.",
      price: "0",
      features: [
        "100 messages per month",
        "Single user access",
        "One lead source connection",
        "Basic CSV import",
        "Community support"
      ],
      cta: "Start for Free",
      highlighted: false
    },
    {
      name: "Pro",
      description: "For growing teams and active outreach.",
      price: "20",
      features: [
        "5,000 messages per month",
        "Up to 5 team members",
        "Unlimited lead sources",
        "Message scheduling",
        "Drip campaigns (Beta)",
        "Priority email support"
      ],
      cta: "Get Started with Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large agencies.",
      price: "Custom",
      features: [
        "Unlimited messages",
        "Unlimited team members",
        "Custom API access",
        "Dedicated account manager",
        "SLA & Compliance audit",
        "SSO Integration"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-outline-variant bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-primary font-bold text-2xl tracking-tight">
          Send Signal
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-on-surface-variant hover:text-primary transition-colors label-large">Features</Link>
          <Link href="/pricing" className="text-primary label-large transition-colors">Pricing</Link>
          <Link href="/login" className="text-on-surface-variant hover:text-primary transition-colors label-large">Login</Link>
          <Link href="/signup" className="px-6 py-2 bg-primary text-on-primary rounded-full label-large hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="px-8 py-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h1 className="mb-4">Simple, Scalable Pricing</h1>
          <p className="body-large text-on-surface-variant max-w-2xl mx-auto">
            Choose the plan that fits your current lead volume. Upgrade or downgrade at any time as your signals grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[2.5rem] flex flex-col border transition-all duration-500 ${
                plan.highlighted 
                ? "bg-surface border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
                : "bg-surface/50 border-outline-variant hover:border-outline"
              }`}
            >
              <div className="mb-8">
                <h3 className="title-medium text-2xl mb-2">{plan.name}</h3>
                <p className="text-on-surface-variant label-medium">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price === "Custom" ? "" : "$"}</span>
                <span className="text-6xl font-black">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-on-surface-variant label-large">/month</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-3 items-center text-on-surface-variant body-large">
                    <div className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={plan.price === "Custom" ? "/contact" : "/signup"}
                className={`w-full py-4 rounded-full label-large text-center text-lg transition-all ${
                  plan.highlighted 
                  ? "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/30" 
                  : "bg-surface-variant text-on-surface-variant hover:bg-outline-variant"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-32 p-16 rounded-[3rem] bg-surface-container border border-outline-variant text-center">
          <h2 className="mb-6">Everything is included</h2>
          <p className="text-on-surface-variant body-large max-w-2xl mx-auto mb-10">
            Regardless of your plan, you get access to our core personalization engine, real-time analytics, and secure server-side infrastructure.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="label-medium text-on-surface-variant">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="label-medium text-on-surface-variant">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="label-medium text-on-surface-variant">Safe & Secure</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">E.164</div>
              <div className="label-medium text-on-surface-variant">Normalized</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

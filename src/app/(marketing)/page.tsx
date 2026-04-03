import Link from "next/link";
import { Metadata } from "next";
import { MarketingNav } from "../../components/MarketingNav";

export const metadata: Metadata = {
  title: "Send Signal — WhatsApp Outreach Automation for Campaigns & Lead Messaging",
  description: "send personalized whatsapp campaign messages",
  keywords: "WhatsApp marketing, WhatsApp automation, outreach campaigns, lead messaging, bulk WhatsApp messages, campaign analytics, CRM outreach, WhatsApp business API, messaging platform",
  authors: [{ name: "Send Signal" }],
  openGraph: {
    title: "Send Signal — Automate WhatsApp Outreach Campaigns",
    description: "Launch personalized WhatsApp campaigns, manage leads, track replies, and analyze performance with Send Signal.",
    type: "website",
    url: "https://sendsignal.app",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Signal — WhatsApp Outreach Automation",
    description: "Send personalized WhatsApp messages at scale, manage campaigns, and track results with Send Signal.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brandlogo.svg",
  },
};

export default function MarketingPage() {
  const features = [
    {
      title: "CSV Lead Ingestion",
      description: "Upload lead lists from any social platform. Our system automatically maps columns and validates phone numbers to E.164 standards.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
    },
    {
      title: "Dynamic Placeholders",
      description: "Craft messages that feel personal. Use {first_name}, {source}, or custom tags to tailor your outreach to every individual lead.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    },
    {
      title: "Batch Sending with Delays",
      description: "Stay compliant with WhatsApp Business API rate limits. Define batch sizes and sending intervals for optimal delivery performance.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    },
    {
      title: "Reply Monitoring",
      description: "Never miss a conversation. Track replies in real-time and handle follow-ups directly through our unified dashboard.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    },
    {
      title: "Auto-Unsubscribe",
      description: "Automatic detection of keywords like STOP or CANCEL. We ensure you only message leads who want to hear from you.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    },
    {
      title: "Conversion Tracking",
      description: "Measure the ROI of your WhatsApp campaigns. Track who converts from a signal to a successful customer.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    }
  ];

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
      <MarketingNav />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-8 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Scale Your Outreach with <span className="text-primary">Personalized</span> WhatsApp Signals
          </h1>
          <p className="text-on-surface-variant body-large max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Automate personalized WhatsApp campaigns for your social media leads. High response rates, effortless automation, and complete compliance.
          </p>
          <div className="flex justify-center w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link href="/signup" className="px-8 py-4 bg-primary text-on-primary rounded-full label-large text-lg hover:bg-tertiary hover:text-on-tertiary hover:shadow-lg hover:shadow-tertiary/20 transition-all">
              Start Free Campaign
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-8 py-24 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="headline-large mb-4">Powerful Features for Signal Outreach</h2>
            <p className="body-large text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to automate, personalize, and track your WhatsApp outreach campaigns in one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-surface border border-outline-variant hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-surface-variant flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all mb-6">
                  {feature.icon}
                </div>
                <h3 className="title-medium text-xl mb-3">{feature.title}</h3>
                <p className="text-on-surface-variant body-large leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="mb-8">Perfect for Founders, Agencies, and Institutions</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="label-large text-lg">Fitness Studios</h4>
                    <p className="text-on-surface-variant">Immediate follow-up for lead ads with class offers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="label-large text-lg">B2B SaaS</h4>
                    <p className="text-on-surface-variant">Nurture webinar attendees with personal chat invitations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="label-large text-lg">E-commerce Brands</h4>
                    <p className="text-on-surface-variant">Reclaim abandoned carts with direct discounts over WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl bg-surface-container-high border border-outline-variant shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Mockup Placeholder */}
                <div className="w-full h-full rounded-xl bg-surface border border-outline shadow-inner flex flex-col p-4 gap-4">
                  <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-3 w-24 bg-surface-variant rounded"></div>
                      <div className="h-2 w-16 bg-outline-variant rounded"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-grow overflow-auto py-2">
                    <div className="self-end bg-primary text-on-primary p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                      Hi David, thanks for showing interest in our fitness studio! Want to join a trial class today?
                    </div>
                    <div className="self-start bg-surface-variant p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      Yes! I&apos; love to try it out.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-8 py-24 bg-surface-container/50 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="headline-large mb-4">Simple, Scalable Pricing</h2>
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
                      ? "bg-primary text-on-primary hover:bg-tertiary hover:text-on-tertiary hover:shadow-lg hover:shadow-tertiary/30" 
                      : "bg-surface-variant text-on-surface-variant hover:bg-outline-variant"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-outline-variant bg-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-primary font-bold text-xl">Send Signal</div>
          <div className="flex gap-8 text-on-surface-variant label-medium">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
          <div className="text-on-surface-variant label-medium">© 2026 Send Signal. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

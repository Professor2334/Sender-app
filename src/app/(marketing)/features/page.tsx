import Link from "next/link";

export default function FeaturesPage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Shared Navbar Component could be extracted later */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-outline-variant bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-primary font-bold text-2xl tracking-tight">
          Send Signal
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-primary label-large transition-colors">Features</Link>
          <Link href="/pricing" className="text-on-surface-variant hover:text-primary transition-colors label-large">Pricing</Link>
          <Link href="/login" className="text-on-surface-variant hover:text-primary transition-colors label-large">Login</Link>
          <Link href="/signup" className="px-6 py-2 bg-primary text-on-primary rounded-full label-large hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="px-8 py-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="mb-4">Powerful Features for Signal Outreach</h1>
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

        <div className="mt-24 p-12 rounded-[3rem] bg-primary text-on-primary flex flex-col items-center text-center">
          <h2 className="text-on-primary mb-6">Ready to Send Your First Signal?</h2>
          <p className="text-primary-container body-large max-w-xl mb-8">
            Join hundreds of founders and agencies using Send Signal to turn their social media leads into customers.
          </p>
          <Link href="/signup" className="px-10 py-5 bg-on-primary text-primary rounded-full label-large text-xl hover:scale-105 transition-transform shadow-2xl">
            Create Free Account
          </Link>
        </div>
      </main>
    </div>
  );
}

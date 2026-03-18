import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-outline-variant bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-primary font-bold text-2xl tracking-tight">
          Send Signal
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-on-surface-variant hover:text-primary transition-colors label-large">Features</Link>
          <Link href="/pricing" className="text-on-surface-variant hover:text-primary transition-colors label-large">Pricing</Link>
          <Link href="/login" className="text-on-surface-variant hover:text-primary transition-colors label-large">Login</Link>
          <Link href="/signup" className="px-6 py-2 bg-primary text-on-primary rounded-full label-large hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-8 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Scale Your Outreach with <span className="text-primary">Personalized</span> WhatsApp Signals
          </h1>
          <p className="text-on-surface-variant body-large max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Automate personalized WhatsApp campaigns for your social media leads. High response rates, effortless automation, and complete compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link href="/signup" className="px-8 py-4 bg-primary text-on-primary rounded-full label-large text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
              Start Free Campaign
            </Link>
            <Link href="/features" className="px-8 py-4 border border-outline rounded-full label-large text-lg hover:bg-surface-variant transition-colors">
              See How It Works
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="px-8 py-24 bg-surface-container/50 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4 p-8 rounded-3xl bg-surface border border-outline-variant hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="3"/></svg>
              </div>
              <h3 className="title-medium text-xl">High-Volume Lead Import</h3>
              <p className="text-on-surface-variant body-large">Import CSVs from TikTok, Twitter, and Facebook ads effortlessly. Automate lead capture and management.</p>
            </div>
            
            <div className="flex flex-col gap-4 p-8 rounded-3xl bg-surface border border-outline-variant hover:border-primary transition-colors group text-on-surface">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="title-medium text-xl">Dynamic Personalization</h3>
              <p className="text-on-surface-variant body-large">Create message templates with placeholders. Inject personal details to make every message feel one-to-one.</p>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-3xl bg-surface border border-outline-variant hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-container flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              </div>
              <h3 className="title-medium text-xl">Real-time Analytics</h3>
              <p className="text-on-surface-variant body-large">Track delivery, read rates, and replies. Optimize your campaigns for conversion and growth.</p>
            </div>
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

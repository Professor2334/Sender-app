import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Send Signal | Onboarding | Automated Personalized WhatsApp Outreach",
  description: "Securely onboarding you to Send Signal - Step 1 of 4",
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex flex-col">
      <header className="px-8 py-6 bg-surface sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
            </svg>
            Send Signal
          </Link>

        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-xl w-full">
          {children}
        </div>
      </main>

      <footer className="px-8 py-6 border-t border-outline-variant bg-surface">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-on-surface-variant label-small">
          <span>Securely onboarding you to Send Signal</span>
          <div className="flex gap-4">
            <Link href="/help" className="hover:text-primary">Need Help?</Link>
            <Link href="/logout" className="hover:text-primary">Logout</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

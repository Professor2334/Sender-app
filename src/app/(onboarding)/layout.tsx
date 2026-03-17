import Link from "next/link";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex flex-col">
      <header className="px-8 py-6 border-b border-outline-variant bg-surface sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-primary font-bold text-xl tracking-tight">
            Send Signal
          </Link>
          <div className="flex items-center gap-4 text-on-surface-variant label-medium">
            <span>Onboarding</span>
            <span className="w-1 h-1 rounded-full bg-outline"></span>
            <span>Step 1 of 4</span>
          </div>
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

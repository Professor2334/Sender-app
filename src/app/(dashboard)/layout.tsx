import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SidebarNav from "@/components/dashboard/SidebarNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-container-lowest flex">
      <aside className="w-64 border-r border-outline-variant bg-surface flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <Link href="/dashboard?view=overview" className="text-primary font-bold text-2xl tracking-tight">
            Send Signal
          </Link>
        </div>

        <SidebarNav />
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

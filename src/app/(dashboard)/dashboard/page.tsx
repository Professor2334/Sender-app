"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import OverviewView from "@/components/dashboard/views/OverviewView";
import LeadsView from "@/components/dashboard/views/LeadsView";
import TemplatesView from "@/components/dashboard/views/TemplatesView";
import CampaignsView from "@/components/dashboard/views/CampaignsView";
import AnalyticsView from "@/components/dashboard/views/AnalyticsView";
import SettingsView from "@/components/dashboard/views/SettingsView";

function DashboardContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "overview";

  switch (view) {
    case "leads":
      return <LeadsView />;
    case "templates":
      return <TemplatesView />;
    case "campaigns":
      return <CampaignsView />;
    case "analytics":
      return <AnalyticsView />;
    case "settings":
      return <SettingsView />;
    case "overview":
    default:
      return <OverviewView />;
  }
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex h-full items-center justify-center p-8"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <DashboardContent />
    </Suspense>
  );
}

"use client";

import React from "react";

export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-end mb-8">
        <div className="space-y-2">
          <div className="h-10 w-64 bg-surface-variant rounded-lg"></div>
          <div className="h-6 w-96 bg-outline-variant rounded-md"></div>
        </div>
        <div className="h-14 w-40 bg-surface-variant rounded-xl"></div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-[2rem] bg-surface border border-outline-variant space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-surface-variant"></div>
              <div className="w-12 h-4 bg-outline-variant rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-outline-variant rounded-md"></div>
              <div className="h-10 w-28 bg-surface-variant rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Large Block Skeleton */}
        <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface border border-outline-variant space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 w-40 bg-surface-variant rounded-md"></div>
            <div className="h-6 w-20 bg-outline-variant rounded-md"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 w-full bg-surface-variant rounded-2xl border border-outline-variant"></div>
            ))}
          </div>
        </div>

        {/* Small Block Skeleton */}
        <div className="p-8 rounded-[2.5rem] bg-surface border border-outline-variant space-y-6">
          <div className="h-8 w-40 bg-surface-variant rounded-md"></div>
          <div className="space-y-6">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 items-start pb-6">
                  <div className="w-8 h-8 rounded-full bg-surface-variant"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full bg-surface-variant rounded-md"></div>
                    <div className="h-3 w-20 bg-outline-variant rounded-md"></div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

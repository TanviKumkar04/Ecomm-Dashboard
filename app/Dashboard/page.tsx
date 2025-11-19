"use client";

import Protected from "@/components/Protected";

export default function Dashboard() {
  return (
    <Protected>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Secure dashboard content here.</p>
      </div>
    </Protected>
  );
}

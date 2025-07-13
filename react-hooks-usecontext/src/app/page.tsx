"use client";

import { useState } from "react";

import Dashboard from "@/components/dashboard";
import { DashboardContext } from "@/context/dashboardContext";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export default function Home() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "You",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

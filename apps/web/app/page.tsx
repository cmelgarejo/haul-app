"use client";
import dynamic from "next/dynamic";
const HaulGrid = dynamic(() => import("@web/app/components/HaulDataGrid"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HaulGrid />
    </main>
  );
}

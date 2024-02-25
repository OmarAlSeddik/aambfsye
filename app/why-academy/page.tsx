import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Why Academy?",
  description: "Why Academy?",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Why Academy?
    </main>
  );
}

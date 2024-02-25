import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Statistics",
  description: "Statistics",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Statistics
    </main>
  );
}

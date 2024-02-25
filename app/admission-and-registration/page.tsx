import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Admission and Registration",
  description: "Admission and Registration",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Admission and Registration
    </main>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Consultancy",
  description: "Consultancy",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Consultancy
    </main>
  );
}

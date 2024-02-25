import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Board of Trustees",
  description: "Board of Trustees",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Board of Trustees
    </main>
  );
}

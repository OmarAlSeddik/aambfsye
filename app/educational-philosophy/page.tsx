import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Educational Philosophy",
  description: "Educational Philosophy",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Educational Philosophy
    </main>
  );
}

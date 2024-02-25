import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Overview",
  description: "An Overview About the Academy.",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      An Overview About the Academy
    </main>
  );
}

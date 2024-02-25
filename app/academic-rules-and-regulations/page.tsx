import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Academic Rules and Regulations",
  description: "Academic Rules and Regulations",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Academic Rules and Regulations
    </main>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Blog",
  description: "Blog",
};

export default function OverviewPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-500 text-6xl font-bold">
      Blog
    </main>
  );
}

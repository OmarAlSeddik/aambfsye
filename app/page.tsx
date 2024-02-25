import Home from "@/components/Home.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Homepage",
  description:
    "The Arab Academy for management, banking, and financial sciences.",
};

export default function HomePage() {
  return <Home />;
}

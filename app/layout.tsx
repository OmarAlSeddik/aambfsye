import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cairo as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AAMBFSYE - Homepage",
  description:
    "The Arab Academy for management, banking, and financial sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased font-sans bg-background",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

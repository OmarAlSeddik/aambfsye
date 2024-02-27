import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Cairo as FontSans } from "next/font/google";
import React from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

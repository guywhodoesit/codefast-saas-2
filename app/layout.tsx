import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark AMZ",
  description:
    "First of its kind Amazon PPC Algorithm. Tools for Performance, Ease of maintenance, and Client Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

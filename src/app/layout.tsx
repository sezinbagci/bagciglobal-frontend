import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Google font (sorunsuz)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sezin Investment",
  description: "UK Real Estate Investment & Consultancy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased bg-white text-slate-900">
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}


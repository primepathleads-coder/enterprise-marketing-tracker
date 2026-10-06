import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CinematicFooter } from "@/components/ui/motion-footer";
const luthonSerif = localFont({
  src: "../../public/fonts/Luthon Southard Serif.ttf",
  variable: "--font-luthon-serif",
  display: "swap",
});

const luthonScript = localFont({
  src: "../../public/fonts/Luthon Southard Script.ttf",
  variable: "--font-luthon-script",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "United Tech LLC | Outsourcing. Marketing. Growth.",
  description: "United Tech LLC is a strategic extension of your team, providing operational expertise in BPO, sales, marketing, and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${luthonSerif.variable} ${luthonScript.variable} ${mono.variable} font-sans scroll-smooth antialiased dark`}>
      <body className="min-h-screen flex flex-col bg-[#08080c] text-[#f5f5f7] selection:bg-[#c5a059]/30">
        <Header />
        <main className="relative z-10 w-full bg-[#08080c] shadow-2xl pb-12">
          {children}
        </main>
        <CinematicFooter />
      </body>
    </html>
  );
}

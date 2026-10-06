import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Pedro Henrique | Full Stack Developer",
  description:
    "Pedro Henrique — full-stack developer building APIs, automations and intelligent systems with TypeScript, Python and Java.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} bg-[#05070b] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

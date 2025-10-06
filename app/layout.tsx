import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Pedro | Portfólio",
  description: "Portfólio Pedro | Dev Full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 font-Roboto"
      >
        {children}
      </body>
    </html>
  );
}

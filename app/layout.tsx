import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/Nav"

export const metadata: Metadata = {
  title: "SEA Salon",
  description: "Beauty and Elegance Redefined.",
};

export const viewport = {
  width: "device-width",
  initialScale: 0.1,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en h-full">
      <body className="app">
        <Nav />
        {children}
      </body>
    </html>
  );
}

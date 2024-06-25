import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/Nav"

export const metadata: Metadata = {
  title: "SEA Salon",
  description: "Beauty and Elegance Redefined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">
        <Nav />
        {children}
      </body>
    </html>
  );
}

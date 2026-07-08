import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Growth - Your Strategic Partner from Idea to Growth",
  description: "A structured Next.js version of the Lumina Growth marketing site.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
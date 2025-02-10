import type { Metadata } from "next";

import Header from "@/components/header/header.tsx";

export const metadata: Metadata = {
  title: "Mentally",
  description: "Interactive Mental Health",
};

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

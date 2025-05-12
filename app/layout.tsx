import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Mentally",
  description: "Interactive mental health",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-light.png",
        href: "/images/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon.png",
        href: "/images/icon-dark.png",
      },
    ],
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark:text-gray-200 dark:fill-gray-200 scroll-pt-13 sm:scroll-pt-16 scroll-smooth ${nunito.className}`}
    >
      <body>
        <div id="modal"></div>
        <Header />
        <main className="bg-background pt-13 sm:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

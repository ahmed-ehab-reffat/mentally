import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Cairo } from "next/font/google";
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

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`dark:text-surface scroll-pt-13 sm:scroll-pt-16 scroll-smooth ${
        locale === "ar" ? cairo.className : nunito.className
      }`}
    >
      <body className="">
        <NextIntlClientProvider>
          <div id="modal"></div>
          <Header />
          <main className="bg-background pt-13 sm:pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

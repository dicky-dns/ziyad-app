import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ziyadbooks.com"),
  title: {
    default: "Ziyadbooks",
    template: "%s",
  },
  description:
    "Ziyadbooks menghadirkan katalog produk pilihan dengan promo menarik dan pengalaman belanja online yang cepat.",
  applicationName: "Ziyadbooks",
  keywords: [
    "Ziyadbooks",
    "toko online",
    "katalog produk",
    "promo belanja",
    "diskon produk",
  ],
  authors: [{ name: "Ziyadbooks" }],
  creator: "Ziyadbooks",
  publisher: "Ziyadbooks",
  category: "ecommerce",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Ziyadbooks",
    title: "Ziyadbooks",
    description:
      "Ziyadbooks menghadirkan katalog produk pilihan dengan promo menarik dan pengalaman belanja online yang cepat.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Ziyadbooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyadbooks",
    description:
      "Katalog produk pilihan dengan promo menarik dan pengalaman belanja online yang cepat.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

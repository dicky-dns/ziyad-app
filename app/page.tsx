import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import HeroBanner from "@/components/layout/HeroBanner";
import Product from "@/components/product/Product";
import { getProducts } from "@/services/product";

export const metadata: Metadata = {
  title: "Ziyadbooks | Catalog",
  description:
    "Belanja produk pilihan di Ziyadbooks dengan promo spesial, katalog modern, dan navigasi yang nyaman di semua perangkat.",
  openGraph: {
    title: "Ziyadbooks | Catalog",
    description:
      "Belanja produk pilihan di Ziyadbooks dengan promo spesial, katalog modern, dan navigasi yang nyaman di semua perangkat.",
    url: "/",
  },
  twitter: {
    title: "Ziyadbooks | Catalog",
    description:
      "Belanja produk pilihan di Ziyadbooks dengan promo spesial dan katalog modern.",
  },
};

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const initialData = await getProducts(page);
  const latestProducts = initialData.data.data.slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50 px-0 pt-0 pb-6 md:pb-8 md:px-8">
      <Header />

      <div className="mx-auto px-4 flex w-full max-w-[1580px] flex-col gap-6">
        <HeroBanner products={latestProducts} />
        <Product initialData={initialData} />
      </div>
    </main>
  );
}

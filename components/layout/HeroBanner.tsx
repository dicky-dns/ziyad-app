"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Product } from "@/types/types";

type Props = {
  products: Product[];
};

export default function HeroBanner({ products }: Props) {
  const latestProducts = products.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (latestProducts.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % latestProducts.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [latestProducts.length]);

  if (latestProducts.length === 0) {
    return null;
  }

  const safeActiveIndex = activeIndex % latestProducts.length;
  return (
    <section className="overflow-hidden rounded-[22px] bg-white shadow-sm sm:rounded-[28px]">
      <div className="flex flex-col gap-5 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 md:gap-7 md:px-8 md:py-8 xl:grid xl:min-h-[420px] xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] xl:items-center xl:gap-10 xl:px-12 xl:py-12">
        <div className="order-2 max-w-2xl xl:order-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f58219] sm:text-xs md:text-sm md:tracking-[0.2em]">
            Big Deal Sale
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#2f7f31] sm:mt-3 sm:text-3xl md:max-w-[14ch] md:text-4xl xl:text-5xl">
            Dapatkan Diskon Hingga{" "}
            <span className="text-[#f58219]">Up to 50% !</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base">
            Temukan produk terbaru pilihan kami dengan koleksi yang lebih menarik
            dan harga promo yang lebih hemat.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            <a
              href="#produk"
              className="rounded-full bg-[#4aa63f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f7f31] sm:px-5 sm:py-3"
            >
              Belanja Sekarang
            </a>
            <a href="#produk" 
                className="rounded-full border border-[#f7c79a] bg-[#fff1e4] px-4 py-2.5 text-sm font-semibold text-[#f58219] sm:px-5 sm:py-3"
            >
              Lihat Produk
            </a>
          </div>
        </div>

        <div className="order-1 xl:order-2">
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px]">
            <article className="relative overflow-hidden rounded-[18px] p-1 transition sm:rounded-[22px] sm:p-4 md:rounded-[24px] md:p-5">
              <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] md:aspect-[16/10] xl:min-h-[360px] xl:aspect-auto">
                {latestProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      index === safeActiveIndex
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-6 opacity-0"
                    }`}
                  >
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 480px, 560px"
                      className="object-contain p-[5%]"
                    />
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-4 flex items-center justify-end gap-2">
              {latestProducts.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  aria-label={`Tampilkan banner ${index + 1}`}
                  aria-pressed={index === safeActiveIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === safeActiveIndex
                      ? "w-6 bg-[#4aa63f]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

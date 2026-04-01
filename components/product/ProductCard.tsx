"use client";

import Image from "next/image";
import { useState } from "react";

import { Product } from "@/types/types";

export default function ProductCard({ item }: { item: Product }) {
  const [hasImageError, setHasImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const imageSrc = hasImageError ? "/default.png" : item.image_url || "/default.png";

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-3 flex flex-col">
      <div className="relative h-30 w-full overflow-hidden rounded-xl md:h-50">
        <div
          className={`absolute inset-0 z-10 bg-gray-200 transition-opacity duration-300 ${
            isImageLoading ? "animate-pulse opacity-100" : "opacity-0"
          }`}
        />
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={item.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-opacity duration-300 ${
            isImageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsImageLoading(false)}
          onError={() => {
            setHasImageError(true);
            setIsImageLoading(true);
          }}
        />
        {item.preorder === true && ! isImageLoading && (
          <span className="rounded-lg bg-[#edf7eb] px-2 py-1 text-xs font-semibold text-[#2f7f31] absolute top-1 md:top-2 right-1 md:right-3 shadow-sm">
            Preorder
          </span>
        )}
      </div>

      <h2 className="mt-3 line-clamp-2 text-sm font-semibold text-gray-500">
        {item.name}
      </h2>

      <div className="mt-3">
    
        {item.diskon !== "0" && (
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs line-through text-gray-400">
            {item.price_formatted}
          </p>       
          <span className="rounded-lg bg-[#fff1e4] px-2 py-1 text-xs font-semibold text-[#f58219]">
            -{item.diskon}%
          </span>
        </div>
        )}

        <p className="text-lg font-bold text-[#4aa63f]">
          {item.final_price_formatted}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">


        <span className="text-xs text-gray-500">
          Stok: {item.sisastok}
        </span>
      </div>
    </div>
  );
}

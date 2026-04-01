"use client";

import Pagination from "../layout/Pagination";
import { useProduct } from "@/hooks/useProduct";
import { PaginatedResponse, Product as ProductType } from "@/types/types";
import ProductList from "./ProductList";

type Props = {
  initialData: PaginatedResponse<ProductType>;
};

export default function Product({ initialData }: Props) {
  const { products, page, lastPage, loading, fetchPage } = useProduct(initialData);

  return (
    <section id="produk" className="pt-2 md:pt-4">
      <h1 className="mb-6 text-2xl font-bold text-[#2f7f31] md:text-3xl">
        Katalog Produk
      </h1>

      <ProductList products={products} loading={loading} />

      <Pagination page={page} lastPage={lastPage} onChange={fetchPage} />
    </section>
  );
}

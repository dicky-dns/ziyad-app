"use client";

import { useCallback, useState } from "react";

import { PaginatedResponse, Product } from "@/types/types";

type UseProductReturn = {
  products: Product[];
  page: number;
  lastPage: number;
  loading: boolean;
  fetchPage: (page: number) => Promise<void>;
};

export const useProduct = (
  initialData: PaginatedResponse<Product>
): UseProductReturn => {
  const [products, setProducts] = useState<Product[]>(initialData.data.data);
  const [page, setPage] = useState<number>(initialData.data.current_page);
  const [lastPage, setLastPage] = useState<number>(initialData.data.last_page);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPage = useCallback(
    async (targetPage: number): Promise<void> => {
      if (targetPage === page || targetPage < 1 || targetPage > lastPage) {
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(`/api/products?page=${targetPage}&limit=12`, {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const json: PaginatedResponse<Product> = await response.json();

        if (!json.data) {
          return;
        }

        setProducts(json.data.data);
        setPage(json.data.current_page);
        setLastPage(json.data.last_page);

        const url = new URL(window.location.href);
        url.searchParams.set("page", String(json.data.current_page));
        window.history.pushState({}, "", url);
      } finally {
        setLoading(false);
      }
    },
    [lastPage, page]
  );

  return {
    products,
    page,
    lastPage,
    loading,
    fetchPage,
  };
};

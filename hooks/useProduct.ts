"use client";

import { useState, useRef, useCallback } from "react";
import { PaginatedResponse, Product } from "@/types/types";
import { getProducts } from "@/services/product";

type UseProductReturn = {
  products: Product[];
  page: number;
  lastPage: number;
  loading: boolean;
  fetchPage: (page: number) => void;
};

export const useProduct = (
  initialData: PaginatedResponse<Product>
): UseProductReturn => {
  const [products, setProducts] = useState<Product[]>(
    initialData.data.data
  );
  const [page, setPage] = useState<number>(
    initialData.data.current_page
  );
  const [lastPage, setLastPage] = useState<number>(
    initialData.data.last_page
  );
  const [loading, setLoading] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPage = useCallback((targetPage: number): void => {
    if (targetPage === page) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      setLoading(true);

      try {
        const json = await getProducts(targetPage);

        if (!json.data) {
          return;
        }

        setProducts(json.data.data);
        setPage(json.data.current_page);
        setLastPage(json.data.last_page);
      } catch {
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [page]);

  return {
    products,
    page,
    lastPage,
    loading,
    fetchPage,
  };
};

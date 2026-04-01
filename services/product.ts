import { api } from "./api";
import { PaginatedResponse, Product } from "@/types/types";

export const getProducts = (
  page: number,
  limit = 12
): Promise<PaginatedResponse<Product>> => {
  return api<PaginatedResponse<Product>>(
    `/ecommerce/products/all/category?page=${page}&limit=${limit}`
  );
};
